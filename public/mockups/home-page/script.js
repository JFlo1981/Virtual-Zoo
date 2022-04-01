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
