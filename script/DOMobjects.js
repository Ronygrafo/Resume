const sections = [
  {
    name: "Summary",
    id: "Summary",
    selected: true,
    innerPage: "ReplaceHere",
  },
  {
    name: "Projects",
    id: "Projects",
    selected: false,
    innerPage: "ReplaceHere",
  },
  {
    name: "Tech Stack",
    id: "Tech",
    selected: false,
    innerPage: "ReplaceHere",
  },
  {
    name: "Graphic Designer Background",
    id: "Graphic",
    selected: false,
    innerPage: "ReplaceHere",
  },
  {
    name: "Personal Info",
    id: "Personal",
    selected: false,
    innerPage: "ReplaceHere",
  },
];

function renderNav(sectionList) {
  const navBar = document.getElementById("navSections");
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
renderNav(sections);

function navigatingBtns() {

  const navBarBtns = document.querySelectorAll("nav ul li");

  navBarBtns.forEach((navBnt) => {
    navBnt.addEventListener("click", function () {
      console.log(navBnt.id);

      sections.forEach((section) => {
        section.selected = false;
        if (section.id === navBnt.id) {
          section.selected = true;
        };
      });
      renderNav(sections);
      navigatingBtns();
    });
  });
}
navigatingBtns();
