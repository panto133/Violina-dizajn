function bannerScroll() {
    let bg1 = document.getElementById("bg1");
    let bg2 = document.getElementById("bg2");
    let bg3 = document.getElementById("bg3");
    let section1 = document.getElementsByClassName("section1")[0];
    let section2 = document.getElementsByClassName("section2")[0];
    let section3 = document.getElementsByClassName("section3")[0];
    let value1 = window.scrollY - (section1.getBoundingClientRect().top + section1.clientHeight / 2);
    let value2 = bg1.getBoundingClientRect().top - section1.getBoundingClientRect().bottom;
    let value3 = bg2.getBoundingClientRect().top - section2.getBoundingClientRect().bottom;
    let navbar_height = document.getElementsByClassName("header-navbar")[0].clientHeight;
    let stickyTexts = document.getElementsByClassName("sticky-text");
    if (value2 < 0)
        bg2.style['-webkit-mask-size'] = 0;
    if (value3 < 0)
        bg3.style['-webkit-mask-size'] = 0;
    //SECTION1
    if (section1.getBoundingClientRect().top < 0) {
        stickyTexts[0].style.opacity = 1;
        stickyTexts[0].style.top = (window.innerHeight / 2 - stickyTexts[0].clientHeight / 2 + navbar_height / 2) + "px";
        bg1.style.opacity = 1;
        bg1.style['-webkit-mask-size'] = value1 * 2 + "px";
    }
    else {
        bg1.style['-webkit-mask-size'] = "0";
        stickyTexts[0].style.opacity = 0;
    }
    //SECTION2
    if (bg1.getBoundingClientRect().top > section1.getBoundingClientRect().bottom) {
        stickyTexts[0].style.opacity = 0;
        stickyTexts[1].style.opacity = 1;
        stickyTexts[1].style.top = (window.innerHeight / 2 - stickyTexts[1].clientHeight / 2 + navbar_height / 2) + "px";
        bg1.style.opacity = 0;
        bg2.style.opacity = 1;
        bg2.style['-webkit-mask-size'] = value2 * 2 + "px";
    }
    else {
        bg2.style.opacity = 0;
        stickyTexts[1].style.opacity = 0;
    }
    //SECTION3
    if (bg2.getBoundingClientRect().top > section2.getBoundingClientRect().bottom) {
        stickyTexts[2].style.opacity = 1;
        stickyTexts[2].style.top = (window.innerHeight / 2 - stickyTexts[2].clientHeight / 2 + navbar_height / 2) + "px";
        stickyTexts[1].style.opacity = 0;
        bg2.style.opacity = 0;
        bg3.style.opacity = 1;
        bg3.style['-webkit-mask-size'] = value3 * 2 + "px";
    }
    else {
        bg3.style.opacity = 0;
        stickyTexts[2].style.opacity = 0;
    }
    if (section3.getBoundingClientRect().bottom - bg3.clientHeight / 2 - window.innerHeight / 2 > 0) {
        bg3.classList.remove("end-sticky-section");
        stickyTexts[2].classList.remove("end-sticky-text");
        stickyTexts[2].style.marginLeft = 0;
        section3.classList.remove("section3-flexbox");
    }
    if (bg3.getBoundingClientRect().bottom > section3.getBoundingClientRect().bottom) {
        bg3.classList.add("end-sticky-section");
        stickyTexts[2].classList.add("end-sticky-text");
        stickyTexts[2].style.marginLeft = (-window.innerWidth * 0.05) + "px";
        section3.classList.add("section3-flexbox");
        stickyTexts[2].style.marginBottom = bg3.clientHeight / 2 - stickyTexts[2].clientHeight / 2 + "px";
    }

    let sections = document.getElementsByClassName("sticky-section");
    sections = Array.from(sections);

    sections.forEach(section => { section.style.top = (window.innerHeight / 2 - section.clientHeight / 2 + navbar_height / 2) + "px"; });

    /*if (value1 < 0)
      bg1.style['-webkit-mask-size'] = "0";
    else {
      bg1.classList.add("sticky-section");
      bg1.style.opacity = 1;
    }
    if (bg1.getBoundingClientRect().top > section1.getBoundingClientRect().bottom) {
      bg1.style.opacity = 0;
      setTimeout(removeClass1, 1000);
    }
    else {
      bg1.classList.add("sticky-section");
      bg1.style.opacity = 1;
    }
    bg1.style['-webkit-mask-size'] = value1 * 4 + "px";*/
    //SECTION2
    /*if (value2 < 0)
      bg2.style['-webkit-mask-size'] = "0";
    else {
      bg2.classList.add("sticky-section");
      bg2.style.opacity = 1;
    }
    if (bg2.getBoundingClientRect().top > section2.getBoundingClientRect().bottom) {
      bg2.style.opacity = 0;
      setTimeout(removeClass2, 1000);
    }
    else {
      bg2.classList.add("sticky-section");
      bg2.style.opacity = 1;
    }
    bg2.style['-webkit-mask-size'] = value2 * 4 + "px";*/

    //else
    //bg.style.width = "200px";
}

window.addEventListener("scroll", bannerScroll);