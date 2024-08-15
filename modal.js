/* function showPwdWin will show the Password Rule window */
function showPwdWin () {
    var pwdHelpWin = document.getElementById("pwdHelpWin"); // get element "pwdHelpWin"
    var scrnOverlay = document.getElementById("scrnOverlay"); // get element "scrnOverlay"
    pwdHelpWin.style.display = "block"; // display element pwdHelpWin
    scrnOverlay.style.visibility = "visible"; // display element scrnOverlay
}

/* function hidePwdWin will hide the Password Rule window */
function hidePwdWin () {
    var pwdHelpWin = document.getElementById("pwdHelpWin"); // get element "pwdHelpWin"
    var scrnOverlay = document.getElementById("scrnOverlay"); // get element "scrnOverlay"
    pwdHelpWin.style.display = "none"; // hide element pwdHelpWin by setting display to "none"
    scrnOverlay.style.visibility = "hidden"; // hide element scrnOverlay by setting visibility to "hidden"
}

/* link functions to appropriate events of corresponding HTML elements */
function init () {
    // link the variables to the HTML elements
    var pwdHelpBtn = document.getElementById("pwdHelpBtn"); // get element "pwdHelpBtn"
    var pwdHelpClose = document.getElementById("pwdHelpClose"); // get element "pwdHelpClose"
    
    // link function showPwdWin to the onclick event of button pwdHelpBtn
    pwdHelpBtn.onclick = showPwdWin;
    
    // link function hidePwdWin to the onclick event of button pwdHelpClose
    pwdHelpClose.onclick = hidePwdWin;
}

/* execute the initialization function once the window loads */
window.onload = init;
