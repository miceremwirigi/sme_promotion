var slideIndex = 0;
var mentorsIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
    carousel();  // Call the carousel function here
    mentorsCouresel(); // Call the mentors carousel function here
    // Add event listeners to the buttons
});

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var ref = document.getElementsByClassName("sliderRef");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    ref[i].style.cssText = `
    background: white;
    `;
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.cssText = `
    scroll-snap-align: start;
    flex-shrink: 0;
    width: fit-content;
    height: 90vh;
    border-radius: 5px;
    background: #eee;
    transform-origin: center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: radial-gradient(#ff8a00, #e52e71);
    font-size: 2rem;
    overflow: hidden;
    `;
    ref[slideIndex-1].style.cssText = `
    background: black;
    `;
  
  setTimeout(carousel, 5000); // Change image every 10 seconds
}

function mentorsCouresel(){
    var i = 0;
    var mentors = document.getElementsByClassName("mentor");

    for (i = 0; i < mentors.length; i++) {        
        mentors[i].style.cssText = `
        display: none;
        `;
      }
      mentorsIndex++;
      if (mentorsIndex > mentors.length) {mentorsIndex = 1}

      mentors[mentorsIndex-1].style.cssText = `
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100vw;
    height: 80vh;
    border-radius: 10px;
    background: #eee;
    transform-origin: center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    background: linear-gradient(to bottom, #ff8a00, #051937);
    font-size: 2rem;
    `;

    setTimeout(mentorsCouresel, 2000); // Change image every 10 seconds
}