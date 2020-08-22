$(document).ready(function () {   
   
    var currentDayEl = document.getElementById("currentDay");

// Current date in title
    var m = moment();
    //console.log(m.format("dddd[,] MMM Do, h:mm:ss a"));
    var currentDay = m.format("dddd[,] MMM Do, h:mm:ss a");
    
    currentDayEl.textContent  = (currentDay);
    
    //console.log(currentDayEl);

    var currentHour = m.format("h a");
   // console.log(currentHour);

 
// Array of time slots
    var timeSlots = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
 // Creating and setting up timed schedule   
    for (var i = 0; i < timeSlots.length; i++) {
        var newDiv = $("<div>");
        var timeDiv = $("<div>");
        var descriptionDiv = $("<textarea>");
        var saveBtn = $("<button>");
        var iconEl = $("<i>");

        // Assigning classes to elements created
        newDiv.attr("data-hour", timeSlots[i]);
        newDiv.attr("class", "row"); 
        newDiv.attr("id", timeSlots[i]);
        descriptionDiv.attr("class", "description col-10");
        timeDiv.attr("class", "hour col-1");
        saveBtn.attr("class", "saveBtn col-1");
        iconEl.attr("class", "far fa-save");

        // Appending elements to container to display on page
        $(".container").append(newDiv)
        newDiv.append(timeDiv);
        newDiv.append(descriptionDiv);
        newDiv.append(saveBtn);
        saveBtn.append(iconEl);

        timeDiv.text(timeSlots[i]);

        // Click event is added to save button.
        // Allows for information typed in text area to be saved to local storage.
        $(".saveBtn").on("click", function() {
            var val = $(this).siblings("textarea").val();
            var key = $(this).parent().attr("id");
            localStorage.setItem(key, val);
            console.log(val);
            console.log(key);
        })

        // Pulls information from local storage and displays in corresponding text area.
        function retrieveData() {

            $("#8am .description").val(localStorage.getItem("8am"));
            $("#9am .description").val(localStorage.getItem("9am"));
            $("#10am .description").val(localStorage.getItem("10am"));
            $("#11am .description").val(localStorage.getItem("11am"));
            $("#12pm .description").val(localStorage.getItem("12pm"));
            $("#1pm .description").val(localStorage.getItem("1pm"));
            $("#2pm .description").val(localStorage.getItem("2pm"));
            $("#3pm .description").val(localStorage.getItem("3pm"));
            $("#4pm .description").val(localStorage.getItem("4pm"));
            $("#5pm .description").val(localStorage.getItem("5pm"));
        }

        retrieveData();

        var time = i + 8;
        console.log(time);
        var currTime = moment().format("HH");
        var currentTimeInt = parseInt(currTime);

    // Compares times to display proper color code for past, present and future time blocks.
        if (time < currentTimeInt) {
            descriptionDiv.attr("class", "past col-10");
        } else if (time === currentTimeInt) {
            descriptionDiv.attr("class", "present col-10");
        } else if (time > currentTimeInt) {
            descriptionDiv.attr("class", "future col-10");
        }  
            
    }
   



});






