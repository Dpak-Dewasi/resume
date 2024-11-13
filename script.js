
// newPage loading------->

let btnWeb = document.querySelector("#btn-web-proj");
let btnBlend = document.querySelector("#btn-blend-proj");
let btnCv = document.querySelector("#btn-cv");

btnWeb.onclick = () =>
{
    window.open("https://drive.google.com/drive/folders/1jPHgoMPjcfV4MQzfL94TuulZROPDQS1c?usp=drive_link", "_blank")
}
btnBlend.onclick = () =>
    {
        window.open("https://drive.google.com/drive/folders/1jPHgoMPjcfV4MQzfL94TuulZROPDQS1c?usp=drive_link", "_blank")
    }
btnCv.onclick = () =>
    {
        window.open("Deepak Dewasi Web Developer.pdf", "_blank")
    }

// popUp button------->

let popUpBtn = document.querySelector(".popup-btn");
let popUpOpen = document.querySelector(".openPopup");
let popUpClose = document.querySelector(".close-popup");

popUpBtn.onclick = () =>
{
    popUpOpen.classList.add("popup-visi");
}
popUpClose.onclick = () =>
{
    popUpOpen.classList.remove("popup-visi");
}

// darkMode And lightMode------->

let modeChange = document.querySelector("#modes");
let body1 = document.querySelector("body");
let modeIconMoon = document.querySelector(".moon");
let modeIconSun = document.querySelector(".sun");
if (localStorage.getItem("theme") == "null")
{
    localStorage.setItem("theme","light");
}
let localdata = localStorage.getItem("theme");
if(localdata == "light")
{
    body1.classList.remove("darkMode");
    body1.classList.remove("dark-mode-img");
    modeIconSun.classList.remove("sunLight");
    modeIconSun.classList.add("sun");
    modeIconMoon.classList.remove("moonDark");
    modeIconMoon.classList.add("moon");
}
else if(localdata == "dark")
{
    body1.classList.add("darkMode");
    body1.classList.add("dark-mode-img");
    modeIconSun.classList.add("sunLight");
    modeIconSun.classList.remove("sun");
    modeIconMoon.classList.add("moonDark");
    modeIconMoon.classList.remove("moon");
}
let modes = "lightmode";
modeChange.onclick = () =>
{
    if(modes==="lightmode")
    {
        body1.classList.add("darkMode");
        body1.classList.add("dark-mode-img");
        modeIconSun.classList.add("sunLight");
        modeIconSun.classList.remove("sun");
        modeIconMoon.classList.add("moonDark");
        modeIconMoon.classList.remove("moon");
        localStorage.setItem("theme","dark");
        modes="darkmode";
    }
    else
    {
        body1.classList.remove("darkMode");
        body1.classList.remove("dark-mode-img");
        modeIconSun.classList.remove("sunLight");
        modeIconSun.classList.add("sun");
        modeIconMoon.classList.remove("moonDark");
        modeIconMoon.classList.add("moon");
        localStorage.setItem("theme","light");
        modes="lightmode";
    }

}