$(document).ready(function() {










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