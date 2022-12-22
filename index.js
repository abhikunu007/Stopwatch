
// Declaring and initializing the variables for the buttons

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// Declaring and initializing the variables for the value of time
let hour = 00;
let minute = 00;
let second = 00;

//    To start the stopwatch using add event listener
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
  
// To stop the stopwatch using add event listener
stopBtn.addEventListener('click', function () {
    timer = false;
});
 
// To reset the stopwatch using add event listener
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
});
 

// Function for the stopwatch to run
function stopWatch() {
    if (timer) {
        second++;
  
        if (second == 60) {
            minute++;
            second = 0;
        }
  
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
  
        if (hour < 10) {
            hrString = "0" + hrString;
        }
  
        if (minute < 10) {
            minString = "0" + minString;
        }
  
        if (second < 10) {
            secString = "0" + secString;
        }
  
  
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;

        setTimeout(stopWatch, 1000);
    }
}


// Declare a variable to be the localStorage, getting/recuperating the key (darkMode). Get hold of it to check if the settings is enable or not
let darkMode = localStorage.getItem('darkMode');

// Get button element from html doc
const darkModeToggle = document.querySelector('#flexSwitchCheckDefault');


//adding or removing darkmode style. Setting new default style in localStorage
const enableDarkMode = () => {
     // add the css class darkmode to the body;
    document.body.classList.add('darkmode');
    // update darkmode into the localStorage to 'enable' status (know which is the new setting to remember during next user's visit)
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.style.background = '#f0f0f0';
    darkModeToggle.style.borderRadius = '10px';
}

const disableDarkMode = () => {
    // remove the css class darkmode to the body;
    document.body.classList.remove('darkmode');
    // update darkmode into the localStorage to 'disable' status
    localStorage.setItem('darkMode', 'disabled');
}

//check if it is set to enable from previous visit
if (darkMode === 'enable') {
     enableDarkMode();
}

// add eventListener to toggle button
darkModeToggle.addEventListener('click', () => {
    // update variable darkMode when clicked
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
        darkModeToggle.style.background = '#f0f0f0';
        darkModeToggle.style.borderRadius = '10px';
    } else {
        disableDarkMode();
        darkModeToggle.style.background = 'none';
        darkModeToggle.style.borderRadius = 'none';
    }
});
