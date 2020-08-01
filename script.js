/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* Add a variable to store the "my-list" element */
var fullItemList = document.getElementById("my-list");


/* Create the event listener that listens for a mouse click and runs the checkOffList function */
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem);
}


/* Declare the function checkOffList and add actions inside the { } */
function checkOffItem(clicked) {
    if (clicked.target.tagName == "LI") {
        clicked.target.classList.toggle("all-done");
    }
}
