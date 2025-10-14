// Code by Jacob Brenkus, purpose is to practice for web design and build portfolio

//functions
function timeUpdate() {
	if (date.getHours() >= 12){
		ampm = "pm";
	}
	else{
		ampm = "am"
	}
	time.innerHTML = "Time you visited: " + (date.getHours() % 12) + ":" + date.getMinutes() + " " + ampm;
}

function timer() { 
	secs ++;
	minsecs = secs % 60;
	mins = Math.floor(secs/60);
	counter.innerHTML = "You have been here for: " + mins + " minutes and " + minsecs + " seconds";
	
}

function todaysdate() {
	datec.innerHTML = "Today's date is " + (date.getMonth() + 1) +  "/" + date.getDate() + "/" + date.getFullYear();
	
}

//declarations
var date = new Date();
var secs = 0;
var mins = 0;
var minsecs = 0;
var ampm = "am";
const time = document.getElementById('time');
const counter = document.getElementById('counter');
const datec = document.getElementById('datec');


//main code
todaysdate();
timeUpdate();
setInterval(timer, 1000);




