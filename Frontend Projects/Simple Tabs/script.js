const tabs = document.querySelectorAll(".tab");
for (let x = 0; x < tabs.length; x++) {
    tabs[x].addEventListener("click", currentTab)
}

const activeContent = document.querySelectorAll(".active");
for (let z = 1; z < activeContent.length; z++) {
        activeContent[z].classList.remove("active");
}

function currentTab() {
    const allContent = document.querySelectorAll(".tab-content");
    for (let i = 0; i < allContent.length; i++) {
        allContent[i].style.display = "none";
    }

    for (let z = 0; z < activeContent.length; z++) {
        activeContent[z].classList.remove("active");
    }

    if (this.classList.contains("first")) {
        document.querySelector(".first-content").style.display = "block"
        this.classList.add("active");
    } else if (this.classList.contains("second")) {
        document.querySelector(".second-content").style.display = "block"
        this.classList.add("active");
    } else if (this.classList.contains("third")) {
        document.querySelector(".third-content").style.display = "block"
        this.classList.add("active"); 
    } else if (this.classList.contains("fourth")) {
        document.querySelector(".fourth-content").style.display = "block"
        this.classList.add("active");
    } else {
        console.log("iFram3...")
    }
}