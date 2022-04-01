// VARIABLES FOR THE PREVIOUS BUTTONS
var prevLiveEl = document.getElementById("prevLive");
var prevAquaticEl = document.getElementById("prevAquatic");
var prevAfricaEl = document.getElementById("prevAfrica");
var prevArctic4El = document.getElementById("prevArctic");

// VARIABLES FOR THE NEXT BUTTONS
var nextLiveEl = document.getElementById("nextLive");
var nextAquaticEl = document.getElementById("nextAquatic");
var nextAfricaEl = document.getElementById("nextAfrica");
var nextArcticEl = document.getElementById("nextArctic");

// VARIABLE/CALLS TO FORMAT SLIDES ON PAGE LOAD
let camGroupIndex = 1;
showLiveCams(camGroupIndex);
showAquaticCams(camGroupIndex);
showAfricaCams(camGroupIndex);
showArcticCams(camGroupIndex);

// FORMAL LIVE SLIDES ON PAGE LOAD
function showLiveCams(camGroupIndex) {
  let cams = document.getElementsByClassName("live-cam-groups");
  // hides the slides that are not being displayed
  for (i = 0; i < cams.length; i++) {
    cams[i].style.display = "none";
  }
  // displays the current slide
  cams[camGroupIndex - 1].style.display = "block";
}

// FORMAT AQUATIC SLIDES ON PAGE LOAD
function showAquaticCams(camGroupIndex) {
  let cams = document.getElementsByClassName("aquatic-cam-groups");
  for (i = 0; i < cams.length; i++) {
    cams[i].style.display = "none";
  }
  cams[camGroupIndex - 1].style.display = "block";
}

// FORMAT AFRICA SLIDES ON PAGE LOAD
function showAfricaCams(camGroupIndex) {
  let cams = document.getElementsByClassName("africa-cam-groups");
  for (i = 0; i < cams.length; i++) {
    cams[i].style.display = "none";
  }
  cams[camGroupIndex - 1].style.display = "block";
}

// FORMAT ARCTIC SLIDES ON PAGE LOAD
function showArcticCams(camGroupIndex) {
  let cams = document.getElementsByClassName("arctic-cam-groups");
  for (i = 0; i < cams.length; i++) {
    cams[i].style.display = "none";
  }
  cams[camGroupIndex - 1].style.display = "block";
}

// NEXT/PREVOUS LOGIC- PASSED TO SCROLL FUNCTIONS
function moveGroups(groupNumber, parentGroupName) {
  scrollGroups((camGroupIndex += groupNumber), parentGroupName);
}

// Sliders functionality (applied by parent.id of buttons)
function scrollGroups(groupNumber, parentGroupName) {
  console.log("Scrolling: " + parentGroupName + "-cam-groups");

  let cams = document.getElementsByClassName(parentGroupName + "-cam-groups");
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

// EVENT LISTENERS FOR THE PREVIOUS BUTTONS - HOMEPAGE SCROLL
prevLiveEl.addEventListener("click", function () {
  moveGroups(-1, "live");
});
prevAquaticEl.addEventListener("click", function () {
  moveGroups(-1, "aquatic");
});
prevAfricaEl.addEventListener("click", function () {
  moveGroups(-1, "africa");
});
prevArctic4El.addEventListener("click", function () {
  moveGroups(-1, "arctic");
});

// EVENT LISTENERS FOR THE NEXT BUTTONS - HOMEPAGE SCROLL
nextLiveEl.addEventListener("click", function () {
  moveGroups(1, "live");
});
nextAquaticEl.addEventListener("click", function () {
  moveGroups(1, "aquatic");
});
nextAfricaEl.addEventListener("click", function () {
  moveGroups(1, "africa");
});
nextArcticEl.addEventListener("click", function () {
  moveGroups(1, "arctic");
});

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
  - REVIEW ELEMENT NAMES
  - CREATE SLIDERS FOR 4 GROUPS TOTAL

 */
