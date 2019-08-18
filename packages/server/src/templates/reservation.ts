const generateTemplate = (pageData: any) => {
  const html = `
    <!doctype html>
    <html lang="en">
    <head></head>
    <body>
    <header>
    </header>
    <section id="row">
        <section id="column-1"> 
            <sectionn id="roomsContainer"> </section>
        </section>
        <section id="column-2">
            <sectionn id="guestsContainer"> </section> 
        </section>
    </section>
    <section id="row-alt">
        <section id="column-1">
            <sectionn id="amentitiesContainer">here we go</section>
        </section>
        <section id="column-2">
            <sectionn id="preferenceContainer"></section>
        </section>
    </sectio>
    <footer>
    </footer>
    </html>
    `;

  return html;
};

export default generateTemplate;
