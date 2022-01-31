// Set up elements to be manipulated
let saveBtn = document.querySelectorAll(".saveBtn");
let currentDay = document.querySelector("#currentDay")

// Grab the current day
let today = moment().format("MMM Do YYYY");

// Set the current day within the page
currentDay.text(today);

// Saves the text and time to locale storage
function storeTimeBlocks() {
    let text = $(this).siblings(".plans").val();
    let time = $(this).parent().attr("class");

    localStorage.setItem(time, text);
}

// Color code the time blocks
function colorTimeBlocks() {
    let hour = moment().hours();

    $("tr").each(function(){
        let  timeBlock = parseInt($(this).attr("id"));

        if (timeBlock < hour) {
            $(this).children(".event").children("input").addClass("past");
            $(this).children(".event").addClass("past");
          } else if (timeBlock === hour) {
            $(this).children(".event").children("input").addClass("present");
            $(this).children(".event").addClass("present");
          } else {
            $(this).children(".event").children("input").addClass("future");
            $(this).children(".event").addClass("future");
          }
        
    })
}

// Enable the save button
saveBtn.addEventListener("click", storeTimeBlocks);

// Color the time blocks
colorTimeBlocks()