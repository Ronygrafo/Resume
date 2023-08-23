import {
  renderSummary, renderProjects, renderTech, renderGraphic, renderPersonal, renderUi
} from "./functions.js";

// FIRST INFO ON page //

window.addEventListener("load", function () {
  // GLOBAL VARIABLES //
  const sections = [
    {
      name: "Summary",
      id: "sum",
      selected: true,
    },
    {
      name: "UI/UX Projects",
      id: "ui",
      selected: false,
    },
    {
      name: "Projects as Developer",
      id: "pro",
      selected: false,
    },
    {
      name: "Tech Stack",
      id: "tech",
      selected: false,
    },
    {
      name: "Graphic Design Projects",
      id: "gra",
      selected: false,
    },
    {
      name: "Contact Info",
      id: "info",
      selected: false,
    },
  ];
  const mainHeader = document.getElementById("mainHeader");
  const navBar = document.getElementById("navSections");
  const contentContainer = document.getElementById("contentContainer");

  const hireButtonAside = document.getElementById("hireBtnAside");
  const hireButton = document.getElementById("hireBtn");

  const saveButtonAside = document.getElementById("saveBtnAside");
  const saveButton = document.getElementById("saveBtn");
  const closePopup = document.getElementById("popupClose");
  const overlayWindow = document.getElementById("popup");

/*   console.log(hireButtonAside);
  console.log(hireButton);
  console.log(saveButtonAside);
  console.log(saveButton);
 */

  // FIRST INFO RENDERING //

  renderProfile();
  renderNav(sections);
  navigatingBtns();
  renderSummary();

  // FETCHING FROM JSON FILE //
  function renderProfile() {
    fetch(`https://ronygrafo.github.io/Resume/json/profile.json`)
      .then((response) => {
        return response.json();
      })
      .then(
        (profileData) =>
          (mainHeader.innerHTML = `
    <h2>${profileData.fullName}</h2>
    <h1>${profileData.title}</h1>
    <p>${profileData.highlights}</p>
      `))
      .catch((error) => {});
  }

  function renderNav(sectionList) {
    navBar.innerHTML = "";
    sectionList.forEach((section) => {
      navBar.innerHTML += `
        <li id= "${section.id}"
            class = "${section.selected ? "selected" : ""}">
        <a>${section.name}</a>
        </li>
        `;
    });
  }

  function navigatingBtns() {
    const navBarBtns = document.querySelectorAll("nav ul li");
    navBarBtns.forEach((navBnt) => {
      navBnt.addEventListener("click", function () {
        // console.log(navBnt.id);
        // RENDERING SECTION FROM BUTTOM //

        contentContainer.innerHTML = "";

        switch (navBnt.id) {
          case "sum":
            renderSummary();
            navBar.scrollLeft = 0;
            break;
          case "pro":
            renderProjects();
            break;
          case "ui":
            renderUi();
            break;
          case "tech":
            renderTech();
            break;
          case "gra":
            renderGraphic();
            break;
          case "info":
            renderPersonal();
            navBar.scrollLeft = 500;
            break;
        }
        // RENDERING SECTION FROM BUTTOM // 

        sections.forEach((section) => {
          section.selected = false;
          if (section.id === navBnt.id) {
            section.selected = true;
          }
        });
        renderNav(sections);
        navigatingBtns();
      });
    });
  }

  hireButtonAside.addEventListener("click", function () {
    contentContainer.innerHTML = "";
    renderPersonal();
    navBar.scrollLeft = 500;

    sections.forEach((section) => {
      section.selected = false;
      if (section.id === "info") {
        section.selected = true;
      }
    });
    renderNav(sections);
    navigatingBtns();
    //console.log("Hire Aside")
  });
  hireButton.addEventListener("click", function () {
    contentContainer.innerHTML = "";
    renderPersonal();
    navBar.scrollLeft = 500;

    sections.forEach((section) => {
      section.selected = false;
      if (section.id === "info") {
        section.selected = true;
      }
    });
    renderNav(sections);
    navigatingBtns();
    //console.log("Hire Footer")
    
  });
  saveButtonAside.addEventListener("click", function () {
    overlayWindow.classList.toggle("noVisible")
    overlayWindow.classList.toggle("visible")
  });
  saveButton.addEventListener("click", function () {
    overlayWindow.classList.toggle("noVisible")
    overlayWindow.classList.toggle("visible")
  });

  closePopup.addEventListener("click", function () {
    overlayWindow.classList.toggle("noVisible")
    overlayWindow.classList.toggle("visible")
  });

/*   navBar.addEventListener("scroll", function (e) {
    //console.log(e.currentTarget.scrollLeft);
    //Ty https://stackoverflow.com/questions/13233149/get-horizontal-scroll-event-in-js

    }); */

});