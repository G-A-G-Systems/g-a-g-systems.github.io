



// 1. Functions called from your settings page to SAVE the preference
function osbg1(){
    localStorage.setItem("selectedBg", "osbg1.png");
    window.location.href = "home2.html";
}

function osbg2(){
    localStorage.setItem("selectedBg", "osbg2.png");
    window.location.href = "home2.html";
}

function osbg3(){
    localStorage.setItem("selectedBg", "osbg3.png");
    window.location.href = "home2.html";
}

function osbg4(){
    localStorage.setItem("selectedBg", "osbg4.png");
    window.location.href = "home2.html";
}


function osbg5(){
    localStorage.setItem("selectedBg", "osbg5.png");
    window.location.href = "home2.html";
}

function osbg6(){
    localStorage.setItem("selectedBg", "osbg6.png");
    window.location.href = "home2.html";
}

function osbg7(){
    localStorage.setItem("selectedBg", "osbg7.png");
    window.location.href = "home2.html";
}

function osbg8(){
    localStorage.setItem("selectedBg", "osbg8.png");
    window.location.href = "home2.html";
}




// 2. Code that automatically runs on BOTH pages to APPLY the saved preference
document.addEventListener("DOMContentLoaded", () => {
    const savedBg = localStorage.getItem("selectedBg");
    if (savedBg) {
        document.body.style.backgroundImage = `url('${savedBg}')`;
    }
});

