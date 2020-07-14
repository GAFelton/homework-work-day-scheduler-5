$(document).ready(function () {
    var pageHeader = $(".display-3");
    var subTitle = $(".lead");
    var currentDay = $("#currentDay");
    var dayContainer = $("#dayContainer");
    var todayIs = moment().format('dddd, MMMM Do YYYY');
    var hours = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"]
    var allNotes = [];
    var currentHour = moment().format("h");
    var hoursOnly = hours.map(function (value) {
        var n = value.replace(":00", "");
        return n;
    });
    console.log(currentHour);
    console.log(hoursOnly);
    var hoursIndex = hoursOnly.findIndex(function (value, index) {
        if (value === currentHour) {
            return index;
        };
    });
    console.log(hoursIndex);
    console.log(moment().format("h") + " is the time, with a type of: " + typeof (moment().format("h")));


    currentDay.text(todayIs);
    // Pull events from localStorage.
   
   
    // function initLocalStorage() {
    //     var storedText = JSON.parse(localStorage.getItem("allNotes"));

    //     if (storedText !== null) {
    //         allNotes = storedText;
    //     }
    // }

    // function storeNote() {
    //     var dataAttr = this.dataSaveBtn;
    //     var note = "data-timeBlock", dataAttr;

    //     var noteContent = {
    //         "dataIndex": dataAttr,
    //         "note": note
    //     }

    //     allNotes.push(noteContent);
    //     localStorage.setItem("allNotes", JSON.stringify(allNotes));
    // }
    /*
    To store in localStorage:
    save button creates a new object to add to the allNotes array. Object has parameters dataIndex and note.
    
                         IMPORTANT! IMPLEMENT BELOW:
    What if each saveBtn added its own object to localStorage?
    */

    function storeNote(){
        var dataAttr = $(this).data("data-SaveBtn");
        var thisNote = {
            "dataIndex": dataAttr,
            "note": $(".time-block-" + dataAttr).textContent
        }
        localStorage.setItem("note-" + dataAttr, JSON.stringify(thisNote));
    }
   /*
    var dataAttr = this.attr("data-Savebtn");
    var thisnote = {
        "dataIndex": dataAttr,
        "note": timeBlockDiv.textContent
    }

    localStorage.setItem("note-"+ dataAttr, JSON.stringify(thisnote))

    When calling, forloop.
    for i = 0; i<hours.length; i++) {
        JSON.parse(localStorage.getItem("note-" + i));
    }
    */

    //TIMEBLOCK BUILDER
    // for loop through hours.length
    function initSchedule() {
        for (var i = 0; i < hours.length; i++) {
            //create div, assign class .row, attr("thisHour", hours[i])
            var rowDiv = $("<div>");
            rowDiv.addClass("row")
            rowDiv.attr("data-thisHour", hours[i]);

            //create div, assign classes .col-md-1 .hour
            var hourDiv = $("<div>");
            hourDiv.addClass("col-md-1 hour float-left");
            hourDiv.text(hours[i]);
            //create div, assign classes .col-md-10 .time-bock
            var timeBlockDiv = $("<div>");
            timeBlockDiv.addClass("col-md-10 time-block form-group");
            timeBlockDiv.attr("data-timeBlock", i);

            var timeBlockTextInput = $("<textarea>");
            // timeBlockTextInput.addClass("form-input");
            // timeBlockTextInput.attr("rows", 3);
            timeBlockTextInput.attr("data-textInput", i);

            //create div, assign classes .col-md-1 .saveBtn
            var saveBtnDiv = $("<button>");
            saveBtnDiv.addClass("col-md-1 saveBtn float-right far fa-save fa-3x");
            saveBtnDiv.attr("data-SaveBtn", i);
            saveBtnDiv.click(storeNote());

            // if (allNotes.find(function () {
            //     i === dataIndex;
            // })) {
            //     timeBlockDiv.text(allNotes.noteContent);
            // }

            //append #row-(thisHour) to dayContainer sequentially.
            dayContainer.append(rowDiv);
            //append .hour to #row-(thisHour)
            rowDiv.append(hourDiv);
            //append .time-block to #row-(thisHour)
            rowDiv.append(timeBlockDiv);
            timeBlockDiv.append(timeBlockTextInput);
            //append .saveBtn to #row-(thisHour)
            rowDiv.append(saveBtnDiv);



            if (i < hoursIndex) {
                timeBlockDiv.addClass("past");
            }
            if (i === hoursIndex) {
                timeBlockDiv.addClass("present");
            }
            if (i > hoursIndex) {
                timeBlockDiv.addClass("future");
            }


        }
    }

    // initLocalStorage();
    initSchedule();





});
/*
PSEUDOCODE FOR WORK DAY SCHEDULER
Use JavaScript Date Functions ? Or Moment JS?
On page open:
    -display current day at top of calendar.
    -pull events from localStorage.
Below, create timeblocks for standard business hours. Each time block needs data attributes corresponding to:
    -block relative to other blocks (order)
    -hour compared to current time (past, present, future)
    -event in localStorage & display text in block

Click on timeblock:
    Form field to enter event.
    Save button to save changes to localStorage.

*/

// Notes for comparing time.
// console.log ( date & type)

// parseInt() on hour before doing any mathematical comparison.
//time can be returned in MANY different formats. AMPM, military, time zones.
//Try using ASCII values. ASCII table for numbers.