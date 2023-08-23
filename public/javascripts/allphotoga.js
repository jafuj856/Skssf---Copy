const articles = new Map([
    ["6392322", { tx: "-90%", tz: "-70vmin", ry: "60deg" }],
    ["1761279", { tz: "-110vmin" }],
    ["1679772", { tx: "90%", tz: "-70vmin", ry: "-60deg" }]
  ]);
  
  window.addEventListener("load", () => {
    const main = document.querySelector("main");
  
    for (const [id, { tx, tz, ry }] of articles.entries()) {
      main.appendChild(makeArticleElement(id, tx, tz, ry));
    }
  
    document.addEventListener("click", ({ target }) => {
      const targetId = target.closest("article")?.id;
      let [itx, itz, iry] = [0, 0, 0]; // inversed transformation to apply to the main element
  
      if (targetId && main.dataset.focus !== targetId) {
        // zoom in
        const { tx, tz, ry } = articles.get(targetId) || {};
        [itx, itz, iry] = [tx, tz, ry].map(inverseTransformation);
        main.setAttribute("data-focus", targetId);
      } else {
        // zoom out
        main.removeAttribute("data-focus");
      }
      main.style.transform = `rotateY(${iry}) translate3d(${itx}, 0, ${itz})`;
    });
  });
  
 
  alert('hi')

  
  function makeArticleElement() {
    alert('hi')
    const img = document.createElement("img");
    const button = document.createElement("button");
    button.appendChild(img);
  
    const element = document.createElement("article");
    element.id = id;
    element.style.transform = `translate3d(${tx}, 0, ${tz}) rotateY(${ry})`;
    element.appendChild(button);
    return element;
  }
  makeArticleElement();