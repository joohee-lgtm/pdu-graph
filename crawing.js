const fs = require('fs');
const {targetPage} = require('./data');
const Crawler = require('crawler');

const afterCrawling = (error, res, done, {episode, seasonOrder}) => {
    if(error) {
        console.warn(error);
        reject();
        return ;
    }

    const stream = fs.createWriteStream(`./episode/s${seasonOrder}_ep${episode}.html`);

    stream.once('open', () => {
        stream.write(res.body);
        console.log(`create > ./episode/s${seasonOrder}_ep${episode}.html`);
        stream.end();
    });

    done();
}

const startCrawling = () => {
    const crawlerInstance = new Crawler({
        rateLimit: 2000,
        maxConnections: 1,
    });
    
    const targets = targetPage.map((season) => {
        const item = season.rankAnnounceEpisode.map(ep => ({
            link: `${season.baseLink}/${ep}${season.subPathTemplate}`,
            episode: ep,
            seasonOrder: season.seasonOrder
        }));
    
        return item;
    }).flat();
    
    targets.forEach((targetInfo) => {
        crawlerInstance.queue({
            uri: targetInfo.link,
            callback: (error, res, done) => {
                afterCrawling(error, res, done, targetInfo)
            }
        });
    });
}


startCrawling();
