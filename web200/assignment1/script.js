function showDocumentMessage() { //displays text
    document.write("My name is Autumn and I'm learning how to code.");
}

function showAlertMessage() { //displays an alert
    window.alert("🎉 Surprise! 🎉");
}

function changeParagraph() { //defines specified html content
    document.getElementById('paragraph').innerHTML = "This is being displayed using external Javascript.";
}

function logConsoleMessage() { //displays message in console
    console.log("I hope you're having a great day.");
}
//calls functions
showDocumentMessage();
showAlertMessage();
changeParagraph();
logConsoleMessage();