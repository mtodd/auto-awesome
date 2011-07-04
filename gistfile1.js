function awesome(dom_id) {
  var elem = $('#' + dom_id);
  var evt = document.createEvent("MouseEvents"); 
  evt.initMouseEvent("click", true, true, window,1, 0, 0, elem.offset().left, elem.offset().top, false, false, false, false, 0, null);
  var cb = document.getElementById(dom_id);
  cb.dispatchEvent(evt);
}
setInterval('awesome("erAqd")', 45000);
