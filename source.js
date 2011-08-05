var awesome = function(domId) {
  var elem = $('#' + domId)
    , evt  = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,1, 0, 0, elem.offset().left, elem.offset().top, false, false, false, false, 0, null);
  document.getElementById(domId).dispatchEvent(evt)
};

try {
  awesome.domId = $('a[style*=left\\:\\ 370px]')[0].id;
} catch(e) {
  console.log("Could not automatically detect awesome button's DOM ID. Caught error: " + e);
}

if(typeof awesome.domId == 'undefined') {
  awesome.domId = window.prompt("What's your awesome button's DOM ID?", "");
}

setInterval('awesome("'+awesome.domId+'")', 45000);
awesome(awesome.domId);
window.alert("I don't always awesome, but when I do, I do it automatically.")
