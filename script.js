let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

// Getting it to show the current time on the page
let showCurrentTime = function()
{
    // display the string on the webpage
    let clock = document.getElementById('clock');
 
    let currentTime = new Date();
 
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
let updateClock = function() 
{
  let time = new Date().getHours();
  let messageText;
  let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  let timeEventJS = document.getElementById("timeEvent");
  let lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    // image = "https://images.unsplash.com/photo-1508166785545-c2dd4c113c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://images.unsplash.com/photo-1515375527155-ff50149567ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    // image = "https://images.unsplash.com/photo-1520702536908-ebc4a4e92893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=718&q=80";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://images.unsplash.com/photo-1576866206724-c696f4c9fa06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://images.unsplash.com/photo-1470777639313-60af88918203?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://i2.wp.com/www.quotesandimages.info/wp-content/uploads/2018/12/good-evening-2.jpg?fit=1920%2C1080";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://i1.wp.com/relationshipgate.com/wp-content/uploads/2019/05/Amazing-Good-Afternoon-Messages-for-Someone-Special-relationshipgate.jpg?w=500&ssl=1";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
let partyButton = document.getElementById("partyTimeButton");

let partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
let wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
let lunchTimeSelector =  document.getElementById("lunchTimeSelector");

let lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
let napTimeSelector =  document.getElementById("napTimeSelector");

let napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);