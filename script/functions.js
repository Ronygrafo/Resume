const fetchURL = "https://ronygrafo.github.io/Resume/json";

export function renderSummary(){
    fetch(`${fetchURL}/summary.json`)
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
export function renderProjects(){
    fetch(`${fetchURL}/projects.json`)
    .then((response) => {
      return response.json();
    })
    .then((project) => {
      contentContainer.innerHTML = `<div class="gridCards" id="gridCards"></div>`;
      const gridCards = document.getElementById("gridCards");
      project.forEach(item => {
        gridCards.innerHTML +=`
        <article class="gridArticles">
            <div class="gridImage">
              <img src="${item.image}" alt="${item.imgAlt}">
            </div>
            <div class="gridTexts">
                <h1 class="gridTitle">${item.title}</h1>
                <p class="gridParagraph">${item.description}</p>
            </div>
        </article>
      `;
    });
  });
}
export function renderTech(){
  fetch(`${fetchURL}/stack.json`)
  .then((response) => {
    return response.json();
  })
  .then((stack) => {
    contentContainer.innerHTML = `<div class="gridStack" id="gridStack"></div>`;
    const gridCards = document.getElementById("gridStack");
    stack.forEach(item => {
      gridCards.innerHTML +=`
      <article class="stacks">
      <div class="stackImg">
        <img src="${item.image}" alt="${item.imgAlt}">
      </div>
      <div class="stackTexts">
          <h2 class="stackTitle">${item.title}</h2>
          <p class="stackParagraph"><strong>Level:</strong>${item.level}<br>
               <strong>Experience:</strong>${item.experience}</p>
      </div>
  </article>
    `;
  });
});
}
export function renderGraphic(){
  fetch(`${fetchURL}/graphic.json`)
  .then((response) => {
    return response.json();
  })
  .then((stack) => {
    contentContainer.innerHTML = `<div class="gridCards" id="gridCards"></div>`;
    const gridCards = document.getElementById("gridCards");
    stack.forEach(item => {
      gridCards.innerHTML +=`
      <article class="gridArticles">
          <div class="gridImage">
            <img src="${item.image}" alt="${item.imgAlt}">
          </div>
          <div class="gridTexts">
              <h1 class="gridTitle">${item.title}</h1>
              <p class="gridParagraph">${item.description}</p>
          </div>
      </article>
    `;
  });
});
}
export function renderPersonal(){
  fetch(`${fetchURL}/personal.json`)
  .then((response) => {
    return response.json();
  })
  .then((info) => {
    info.forEach(item => {
      contentContainer.innerHTML +=`
      <section>
      <h1>${item.name}</h1>
      <p>${item.telephone}</p>
    </section>
    `;
  });
});
}