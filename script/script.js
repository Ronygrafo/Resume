import {
  renderSummary, renderProjects, renderTech, renderGraphic, renderPersonal
} from "./functions.js";

// FIRST INFO ON page //

window.addEventListener("load", function () {
  // GLOBAL VARIABLES //
  const sections = [
    {
      name: "Summary",
      id: "Summary",
      selected: true,
    },
    {
      name: "Projects as Developer",
      id: "Projects",
      selected: false,
    },
    {
      name: "Tech Stack",
      id: "Tech",
      selected: false,
    },
    {
      name: "Projects as Graphic Designer",
      id: "Background",
      selected: false,
    },
    {
      name: "Contact Info",
      id: "Personal",
      selected: false,
    },
  ];
  const mainHeader = document.getElementById("mainHeader");
  const navBar = document.getElementById("navSections");
  const contentContainer = document.getElementById("contentContainer");

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
    `)
      );
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
        console.log(navBnt.id);
        // RENDERING SECTION FROM BUTTOM //

        contentContainer.innerHTML = "";

        switch (navBnt.id) {
          case "Summary":
            renderSummary();
            break;
          case "Projects":
            renderProjects();
            break;
          case "Tech":
            renderTech();
            break;
          case "Background":
            renderGraphic();
            break;
          case "Personal":
            renderPersonal();
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

  

});