from flask import Flask, render_template, redirect, url_for, request, make_response
from datetime import datetime, timedelta
    
app = Flask(__name__)
app.secret_key = "dev"

hours = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"]
timeNow = datetime.now()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/pycal")
def pyCal():
    allNotes = []
    cookies = request.cookies
    for i in range(9):
        cookieIndex = "noteIndex-" + str(i)
        thisNote = _getNote(cookieIndex, cookies)
        if thisNote is not None:
            allNotes.append(thisNote)
        else:
            allNotes.append("")

    todayIs = timeNow.strftime("%A, %B %d, %Y")
    currentHourIndex = timeNow.hour - 9
    return render_template("timeblocks.html", hours = hours, todayIs = todayIs, currentHour = currentHourIndex, allNotes = allNotes)


@app.route("/storenote", methods=["POST"])
def storeNote():
    if request.method == 'POST':
        eodDatetime = timeNow.replace(hour=23, minute=59, second=59, microsecond=999999)
        note = request.form.get("note")
        cookieIndex = "noteIndex-" + str(request.form.get("indexOfNote"))
        res = make_response(redirect(url_for("pyCal")))

        res.set_cookie(
            cookieIndex,
            note,
            expires=eodDatetime
        )
        return res
        

def _getNote(cookieIndex, cookies):
    note = cookies.get(cookieIndex)
    return note

if __name__ == "__main__":
    app.run(debug = True, use_debugger=False, use_reloader=False)