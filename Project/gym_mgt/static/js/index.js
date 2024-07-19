

let divs= document.querySelectorAll('.product-container').forEach((img) => {
    img.addEventListener('click',() => {
        const divId = (img.dataset.divId);
        moveLeft(divId);
    })
})

let initialPositions = {
    '1': 1150,
    '2': 1050,
    '3': 950
};
let lastClickedDivId = null;
let commonPosition = 500;

function moveLeft(divId) {
    console.log("Move left for: " + divId);
    console.log("hello");
    if (lastClickedDivId && lastClickedDivId !== divId) {
        resetDivPosition(lastClickedDivId);
    }
    
    var div = document.getElementById(divId);
    var currentPosition = parseFloat(window.getComputedStyle(div).left);
    var initialPosition = initialPositions[divId];

    if (!div.clicked) {
        div.style.left = commonPosition + "px";
        div.clicked = true;
        lastClickedDivId = divId;
    } else {
        div.style.left = initialPosition + "px"; 
        div.clicked = false;
        lastClickedDivId = null;
    }
}

function resetDivPosition(divId) {
    console.log("Reset position for: " + divId);
    var div = document.getElementById(divId);
    console.log(div);
    var initialPosition = initialPositions[divId];
    console.log(initialPosition);
    div.style.left = initialPosition + "px";
    div.clicked = false;
}


function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScroll() {
    var topics = document.querySelectorAll('.about-topic');
    topics.forEach(function(topic) {
        if (isInViewport(topic)) {
            topic.style.opacity = 1;
            topic.style.transform = 'translateY(0)';
        } else {
            topic.style.opacity = 0;
            topic.style.transform = 'translateY(50px)';
        }
});
}

window.addEventListener('scroll', handleScroll);
handleScroll();


document.addEventListener("DOMContentLoaded", function(event) {
    function checkMemberships() {
      var memberships = document.getElementById('memberships');
      var membershipsPos = memberships.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      var scrollPos = window.scrollY;
      
      if (scrollPos > membershipsPos - (windowHeight / 2)) {
        memberships.style.opacity = 1;
        memberships.style.transform = 'translateY(0)';
      } else {
        memberships.style.opacity = 0;
        memberships.style.transform = 'translateY(50px)';
      }
    }
  
    window.addEventListener('scroll', checkMemberships);
    checkMemberships();
});