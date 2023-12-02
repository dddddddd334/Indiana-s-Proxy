function url(event) {
  var searchbox = document.getElementById("burger");
  var url = searchbox.value;
  if (url.includes("://")) {
    window.location = url;
    searchbox.value = "";
  } else if (url.includes(".")) {
    window.location = "https://" + url;
    searchbox.value = "";
  } else {
    var engineval = document.getElementById("SE");
    var engine = engineval[engineval.selectedIndex].value;
    window.location = engine + url;
    searchbox.value = "";
  }
}
document.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode !== 13) {
    return;
  }
  url();
});

//sdjsdjwudjoujdjejdjwdjiajdojdjawdajdajdjadjwjdkj//////////////////////////////////////////////////////////////////////////////////
//sdjsdjwudjoujdjejdjwdjiajdojdjawdajdajdjadjwjdkj//////////////////////////////////////////////////////////////////////////////////
function real() {
  var engineval = document.getElementById("SE");
  var engine = engineval[engineval.selectedIndex].id;
  var newpagetitle = "Portal - Searching " + engine;
  document.title = newpagetitle;
}
//sdjsdjwudjoujdjejdjwdjiajdojdjawdajdajdjadjwjdkj//////////////////////////////////////////////////////////////////////////////////
//sdjsdjwudjoujdjejdjwdjiajdojdjawdajdajdjadjwjdkj//////////////////////////////////////////////////////////////////////////////////

function bmsenable(event) {
  var morediv = document.getElementById("morediv");
  var bms = document.getElementById("bmsdiv");
  morediv.style.display = "unset";
  bms.style.display = "unset";
}
document.addEventListener("keydown", (event) => {
  if (
    event.isComposing ||
    event.ctrlKey !== true ||
    event.which !== 66 ||
    event.keyCode !== 66
  ) {
    return;
  }
  bmsenable();
});

function bookmark(event) {
  var myTextInput = document.getElementById("bookmarksite");
  var url = myTextInput.value;
  if (url.includes("https://")) {
    var a = document.createElement("a");
    var br = document.createElement("br");
    var linkText = document.createTextNode(url);
    var bmspos = document.getElementById("bmsdiv");
    a.appendChild(linkText);
    a.title = url;
    a.href = url;
    a.target = "blank_";
    myTextInput.value = "";
    bmspos.appendChild(a);
    bmspos.appendChild(br);
  } else if (url.includes(".")) {
    var a = document.createElement("a");
    var br = document.createElement("br");
    var linkText = document.createTextNode("https://" + url);
    var bmspos = document.getElementById("bmsdiv");
    a.appendChild(linkText);
    a.title = "https://" + url;
    a.href = "https://" + url;
    a.target = "blank_";
    bmspos.appendChild(a);
    bmspos.appendChild(br);
    myTextInput.value = "";
  } else {
    var engineval = document.getElementById("SE");
    var engine = engineval[engineval.selectedIndex].value;
    var a = document.createElement("a");
    var br = document.createElement("br");
    var linkText = document.createTextNode(url);
    var bmspos = document.getElementById("bmsdiv");
    a.appendChild(linkText);
    a.id = "nounderline";
    a.title = engine + url;
    a.href = engine + url;
    a.target = "blank_";
    bmspos.appendChild(a);
    bmspos.appendChild(br);

    myTextInput.value = "";
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Senable() {
  var morediv = document.getElementById("morediv");
  var bms = document.getElementById("SEdiv");
  morediv.style.display = "unset";
  bms.style.display = "unset";
}
document.addEventListener("keydown", (event) => {
  if (
    event.isComposing ||
    event.ctrlKey !== true ||
    event.which !== 77 ||
    event.keyCode !== 77
  ) {
    return;
  }
  Senable();
});
function displaySE() {
  var currentSE = document.getElementById("SE");
  var se = currentSE[currentSE.selectedIndex].id;
  alert("You are now searching on " + se);
}
