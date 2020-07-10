$(document).ready(function () {
    var pageHeader = $(".display-3");
    var subTitle = $(".lead");
    var currentDay = $("#currentDay");
    var dayContainer = $("#dayContainer");
    var todayIs = moment().format('dddd, MMMM Do YYYY');
    var hours = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"]


    currentDay.text(todayIs);
    // Pull events from localStorage.


    //TIMEBLOCK BUILDER
    // for loop through hours.length
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
        timeBlockDiv.addClass("col-md-10 time-block");

        //create div, assign classes .col-md-1 .saveBtn
        var saveBtnDiv = $("<div>");
        saveBtnDiv.addClass("col-md-1 saveBtn float-right far fa-save fa-3x");

        //append #row-(thisHour) to dayContainer sequentially.
        dayContainer.append(rowDiv);
        //append .hour to #row-(thisHour)
        rowDiv.append(hourDiv);
        //append .time-block to #row-(thisHour)
        rowDiv.append(timeBlockDiv);
        //append .saveBtn to #row-(thisHour)
        rowDiv.append(saveBtnDiv);

        // console.log ( date & type)
        console.log(moment().format("h") + " is the time, with a type of: " +  typeof(moment().format("h")));


        // parseInt() on hour before doing any mathematical comparison.
        //time can be returned in MANY different formats. AMPM, military, time zones.
        //Try using ASCII values. ASCII table for numbers.

        if (moment().format("h") < hours[i].substring(0,1)) {
            timeBlockDiv.addClass("past");
        }
        if (moment().format("h") === hours[i]) {
            timeBlockDiv.addClass("present");
        }
        if (moment().format("h") > hours[i]) {
            timeBlockDiv.addClass("future");
        }
    }







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