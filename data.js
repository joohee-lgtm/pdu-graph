var targetPage = [
  {
    "seasonOrder": 2,
    "name": "프로듀스 101 시즌2",
    "baseLink": "https://namu.wiki/w/%ED%94%84%EB%A1%9C%EB%93%80%EC%8A%A4%20101%20%EC%8B%9C%EC%A6%8C2",
    "subPathTemplate": encodeURIComponent("회"),
    "totalEpisodeCount": 11,
    "rankAnnounceEpisode": [1, 5, 8, 10, 11]
  },
  {
    "seasonOrder": 3,
    "name": "프로듀스 48",
    "baseLink": "https://namu.wiki/w/%ED%94%84%EB%A1%9C%EB%93%80%EC%8A%A4%2048",
    "subPathTemplate": encodeURIComponent("회"),
    "totalEpisodeCount": 12,
    "rankAnnounceEpisode":  [1, 5, 8, 11, 12]
  },
  {
    "seasonOrder": 4,
    "name": "프로듀스 x 101",
    "baseLink": "https://namu.wiki/w/%ED%94%84%EB%A1%9C%EB%93%80%EC%8A%A4%20X%20101",
    "subPathTemplate": encodeURIComponent("회"),
    "totalEpisodeCount": 12,
    "rankAnnounceEpisode": [1, 5, 8, 11, 12]
  }
]

var s2 = {
  1: [
    ['[id*="s-4.1"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+3) > td:nth-child(n) > div > strong'],
    ['[id*="s-4.2"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(2n+3) > td:nth-child(n) > div > strong']
  ],
  5: [
    ['[id*="s-2.1.1"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(3) > td:nth-child(n+2) > div > strong'],
    ['[id*="s-2.1.2"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+2) > td:nth-child(2) > div'],
    ['[id*="s-2.2"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+2) > td:nth-child(2) > div']
  ],
  8: [
    ['[id*="s-2.1.1"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(3) > td:nth-child(n+2) > div > strong'],
    ['[id*="s-2.1.2"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+2) > td:nth-child(2) > div'],
    ['[id*="s-2.2"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+2) > td:nth-child(2) > div']
  ],
  10: [
    ['[id*="s-2.1.1"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(3) > td:nth-child(n+2) > div > strong'],
    ['[id*="s-2.1.2"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+2) > td:nth-child(2) > div'],
    ['[id*="s-2.2"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+2) > td:nth-child(2) > div']
  ],
  11: [
    ['[id*="s-3.1"]', 'div.wiki-table-wrap:nth-child(n) .wiki-paragraph span:nth-child(5) > strong'],
    ['[id*="s-3.2"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+1) > td:nth-child(n) > div > span:nth-child(5)']
  ]
};

var s4 = {
  1: [
    ['[id*="s-5.1"]', 'tr:nth-child(2n+3) .wiki-color'],
    ['[id*="s-5.2"]', 'tr:nth-child(2n+3) .wiki-color']
  ],
  5: [
    ['[id*="s-2.1.1"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div > span > strong'],
    ['[id*="s-2.1.2"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div > span'],
    ['[id*="s-2.2"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div > span']
  ],
  8: [
    ['[id*="s-2.1.1"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div > span > strong'],
    ['[id*="s-2.1.2"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div > span'],
    ['[id*="s-2.2"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div > span']
  ],
  11: [
    ['[id*="s-2.1.1"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div > span > strong'],
    ['[id*="s-2.1.2"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div > span'],
    ['[id*="s-2.2"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div > span']
  ],
  12: [
    ['[id*="s-8.1"]', 'div.wiki-table-wrap:nth-child(n) .wiki-paragraph span:nth-child(5) > strong'],
    ['[id*="s-8.3"]', 'div.wiki-table-wrap.table-center > table > tbody > tr:nth-child(n+1) > td:nth-child(n+1) > div > span:nth-child(5) > strong']
  ]
};

var s3 = {
  1: [
    ['[id*="s-5.1"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+4) > td:nth-child(n) > div > span > strong'],
    ['[id*="s-5.2"]', 'div.wiki-table-wrap > table > tbody > tr:nth-child(n+3) > td:nth-child(n) > div > span']
  ],
  5: [
    ['[id*="s-2.1.1"]', 'tbody > tr:nth-child(n+3) > td:nth-child(n+1) > div > span > strong'],
    ['[id*="s-2.1.2"]', 'table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div span.wiki-color'],
    ['[id*="s-2.2"]', 'table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div span.wiki-color'],
  ],
  8: [
    ['[id*="s-2.1.1"]', 'tbody > tr:nth-child(n+3) > td:nth-child(n+1) > div > span > strong'],
    ['[id*="s-2.1.2"]', 'table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div span.wiki-color'],
    ['[id*="s-2.2"]', 'table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div span.wiki-color'],
  ],
  11: [
    ['[id*="s-2.1.1"]', 'tbody > tr:nth-child(3n+5) > td > div > strong > span'],
    ['[id*="s-2.1.2"]', 'table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div span.wiki-color'],
    ['[id*="s-2.2"]', 'table > tbody > tr:nth-child(n+3) > td:nth-child(2) > div span.wiki-color'],
  ],
  12: [
    ['[id*="s-8.1"]', 'div.wiki-table-wrap:nth-child(n) .wiki-paragraph span:nth-child(5) > strong'],
    ['[id*="s-8.2"]', 'div:nth-child(3) tbody > tr:nth-child(n+1) > td:nth-child(n+1) > div > strong > span']
  ]
};



module.exports = {
  targetPage, selectors: {2: s2, 4:s4, 3: s3}
}

