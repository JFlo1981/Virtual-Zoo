var previousEl = document.getElementById("previous");
var previous2El = document.getElementById("previous2");
var previous3El = document.getElementById("previous3");
var previous4El = document.getElementById("previous4");

var nextEl = document.getElementById("next");
var next2El = document.getElementById("next2");
var next3El = document.getElementById("next3");
var next4El = document.getElementById("next4");

// console.log(element, element2);
function allGroups() {
  let camGroupIndex = 1;
  // Calls show groups to initially format the scrolls section on page load
  showLiveCams(camGroupIndex);
  showAquaticCams(camGroupIndex);
  showAfricaCams(camGroupIndex);
  showArcticCams(camGroupIndex);

  // Next/previous controls
  function moveGroups(groupNumber, parentID) {
    scrollGroups((camGroupIndex += groupNumber), parentID);
  }

  // Display the live cams on page load
  function showLiveCams(camGroupIndex) {
    let cams = document.getElementsByClassName("live-cam-groups");
    // hides the cam groups that are not being displayed
    for (i = 0; i < cams.length; i++) {
      cams[i].style.display = "none";
    }
    // displays the current cam group
    cams[camGroupIndex - 1].style.display = "block";
  }

  // Display the aquatic cams on page load
  function showAquaticCams(camGroupIndex) {
    let cams = document.getElementsByClassName("aquatic-cam-groups");
    // hides the cam groups that are not being displayed
    for (i = 0; i < cams.length; i++) {
      cams[i].style.display = "none";
    }
    // displays the current cam group
    cams[camGroupIndex - 1].style.display = "block";
  }

  // Display the aquatic cams on page load
  function showAfricaCams(camGroupIndex) {
    let cams = document.getElementsByClassName("africa-cam-groups");
    // hides the cam groups that are not being displayed
    for (i = 0; i < cams.length; i++) {
      cams[i].style.display = "none";
    }
    // displays the current cam group
    cams[camGroupIndex - 1].style.display = "block";
  }

  // Display the aquatic cams on page load
  function showArcticCams(camGroupIndex) {
    let cams = document.getElementsByClassName("arctic-cam-groups");
    // hides the cam groups that are not being displayed
    for (i = 0; i < cams.length; i++) {
      cams[i].style.display = "none";
    }
    // displays the current cam group
    cams[camGroupIndex - 1].style.display = "block";
  }

  // Sliders functionality (applied by parent.id of buttons)
  function scrollGroups(groupNumber, parentID) {
    console.log("Scrolling: " + parentID + "-cam-groups");

    let cams = document.getElementsByClassName(parentID + "-cam-groups");
    // If next is clicked on the last Cam Group in the index, the slider will display Cam Group 1
    if (groupNumber > cams.length) {
      camGroupIndex = 1;
    }
    // If previous is clicked on Cam Group 1, the slider will display the last Cam Group in the index
    if (groupNumber < 1) {
      camGroupIndex = cams.length;
    }
    // hides the cam groups that are not being displayed
    for (i = 0; i < cams.length; i++) {
      cams[i].style.display = "none";
    }

    // displays the current cam group
    cams[camGroupIndex - 1].style.display = "block";
  }

  // event listener for Previous button
  previousEl.addEventListener("click", function buttonHandler(event) {
    moveGroups(-1, event.target.parentElement.parentElement.id);
  });
  // event listener for Next button
  nextEl.addEventListener("click", function buttonHandler(event) {
    moveGroups(1, event.target.parentElement.parentElement.id);
  });
  // event listener for Previous button
  previous2El.addEventListener("click", function buttonHandler(event) {
    moveGroups(-1, event.target.parentElement.parentElement.id);
  });
  // event listener for Next button
  next2El.addEventListener("click", function buttonHandler(event) {
    moveGroups(1, event.target.parentElement.parentElement.id);
  });
  // event listener for Previous button
  previous3El.addEventListener("click", function buttonHandler(event) {
    moveGroups(-1, event.target.parentElement.parentElement.id);
  });
  // event listener for Next button
  next3El.addEventListener("click", function buttonHandler(event) {
    moveGroups(1, event.target.parentElement.parentElement.id);
  });
  // event listener for Previous button
  previous4El.addEventListener("click", function buttonHandler(event) {
    moveGroups(-1, event.target.parentElement.parentElement.id);
  });
  // event listener for Next button
  next4El.addEventListener("click", function buttonHandler(event) {
    moveGroups(1, event.target.parentElement.parentElement.id);
  });
}

allGroups();

/*
COMPLETED:
  - CREATE THE STYLING FOR EACH ELEMENT OF THE SLIDERS
  - REVIEW NAMES OF VARIABLES/FUNCTIONS
  - CREATE BUTTONS WITH FONT AWESOME ICONS
  - CREATE EVENT HANDLERS TO HANDLE BUTTON CLICKS
  - UPDATE FUNCTION TO HANDLE BUTTON CLICKS/COMMENTS DESCRIBING FUNCTIONALITY
  - STYLE IMAGES
  - UPDATE THE BUTTON HANDLERS TO GET THE ID OF THE SLIDERS CONTAINER
  - CREATE A WAY FOR JAVASCRIPT STYLE.DISPLAYS TO TARGET EACH CONTAINER SEPERATELY
  - CREATE A WAY FOR BUTTONS TO INTERACT WITH THEIR OWN CONTAINERS
    -BOTH OF THESE FUNCTIONALITIES HAPPEN IN SHOW GROUPS FUNCTION 
  - REFACTOR THE CODE SO THE SCRIPT FILE PULLS BY ID AND STYLES BY CLASS
    -UNFORTUNATLY, CLASS NAME NEEDS TO REMAIN FOR THE MULTIPLEe DIVS
  - CONDENSE THE LOGIC FOR SCROLL GROUPS FUNCTION

TO DO:
  - REVIEW ELEMENT NAMES
  - CREATE SLIDERS FOR 4 GROUPS TOTAL
 */
