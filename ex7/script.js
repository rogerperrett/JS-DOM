// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp
window.onload = function () {
  var a = false
	
	document.getElementById('sectionheader').onclick = function () {
    if (a == false) {
      document.getElementById('section').style.height = '0px'
	a = true
	} else {
      document.getElementById('section').style.height = '150px'
	a = false
}
  }
}
