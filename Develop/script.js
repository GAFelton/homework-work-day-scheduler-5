$(document).ready(function() {
    var pageHeader = $(".display-3");
    var subTitle = $(".lead");
    var currentDay = $("#currentDay");
    var dayContainer = $("#dayContainer");
    var todayIs = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    var hours = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"]


    currentDay.text(todayIs);
    // Pull events from localStorage.


    //TIMEBLOCK BUILDER
    // for loop through hours.length

        //create div, assign class .row, attr("thisHour", hours[i]), id #row-(thisHour)
        //create div, assign classes .col-md-2 .hour
        //create div, assign classes .col-md-8 .time-bock
        //create div, assign classes .col-md-2 .saveBtn

        //append #row-(thisHour) to dayContainer sequentially.
        //append .hour to #row-(thisHour)
        //append .time-block to #row-(thisHour)
        //append .saveBtn to #row-(thisHour)






});
/*
PSEUDOCODE FOR WORK DAY SCHEDULER
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