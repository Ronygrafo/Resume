// FIRST INFO ON page //

window.addEventListener("load", function () {
  // GLOBAL VARIABLES //
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
      id: "Background",
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
  const mainHeader = document.getElementById("mainHeader");
  const navBar = document.getElementById("navSections");
  const contentContainer = document.getElementById("contentContainer");

  renderProfile();
  renderNav(sections);

  // RENDERING PROFILE FROM JSON FILE //
  function renderProfile() {
    fetch("/profile.json")
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
        contentContainer.innerHTML = "";
        //summaryRender();

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
  navigatingBtns();

  function renderContent(contentID){
  };

  function summaryRender(){

    fetch("./json/summary.json")
    .then((response) => {
      return response.json();
    })
    .then((summary) => {
      summary.forEach(item => {
        contentContainer.innerHTML +=`
        <section>
          <h1>${item.headline}</h1>
          <p>${item.paragraph}</p>
        </section>
      `;
    });
  });

}

});