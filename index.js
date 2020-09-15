const fs = require('fs');
const {selectors} = require('./data');
const {JSDOM}  = require("jsdom");

const seasons = Object.keys(selectors);

seasons.forEach(async s => {
    const episodes = Object.keys(selectors[s]);
    const totalData = {}

    await episodes.forEach(async (ep) => {
      const filePath = `./episode/s${s}_ep${ep}.html`;
      const fileData = await fs.readFileSync(filePath);

      const dom = new JSDOM(fileData);
      const document = dom.window.document;
      const rankData = selectors[s][ep].map((selector) => {
        const [rootSelector, itemSelector] = selector;
        const baseContent = document.querySelector(rootSelector).closest('.wiki-heading').nextElementSibling;
        const itemNodes = baseContent.querySelectorAll(itemSelector);
    
        return [...itemNodes].map((item) => item.textContent.trim());
      }).flat();

      rankData.forEach((name, idx) => {
        if(!totalData[name]) {
          totalData[name] = [];
        }
        totalData[name][ep] = idx+1;
      });
    });

    const stream = fs.createWriteStream(`./rank/seasons${s}.js`);

    stream.once('open', () => {
      const graphData = Object.keys(totalData).map(name => {
        return [name].concat(totalData[name].filter(item => !isNaN(item)))
      });


      stream.write(`var s${s} =${JSON.stringify(graphData)}`);
      console.log(`./rank/seasons${s}.js`);
      stream.end();
    });
})

