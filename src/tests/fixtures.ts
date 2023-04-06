import { IShow } from "../types/shared";

export const MOCK_SHOW_DATA: IShow = {
   id: 1,
   name: "Under the Dome",
   premiered: "2013-06-24",
   summary: "Under the Dome",
   image: {
      original:
         "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
      medium:
         "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
   },

   _embedded: {
      cast: [
         {
            person: {
               name: "Mike Vogel",
               image: {
                  medium:
                     "https://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
               },
            },
            character: {
               name: "Barbie",
            },
         },
         {
            person: {
               name: "Rachelle Lefevre",
               image: {
                  medium:
                     "https://static.tvmaze.com/uploads/images/medium_portrait/0/2.jpg",
               },
            },
            character: {
               name: "Julia Shumway",
            },
         },
      ],
   },
};

export const MOCK_SHOWS: IShow[] = [
   {
      id: 526,
      name: "The Office",
      type: "Scripted",
      language: "English",
      genres: ["Comedy"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2005-03-24",
      ended: "2013-05-16",
      officialSite: "http://www.nbc.com/the-office",
      schedule: { time: "21:00", days: [Array] },
      rating: { average: 8.4 },
      weight: 98,
      network: {
         id: 1,
         name: "NBC",
         country: [Object],
         officialSite: "https://www.nbc.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: 6061, thetvdb: 73244, imdb: "tt0386676" },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/271/678637.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/271/678637.jpg",
      },
      summary:
         "<p>Steve Carell stars in <b>The Office</b>, a fresh and funny mockumentary-style glimpse into the daily interactions of the eccentric workers at the Dunder Mifflin paper supply company. Based on the smash-hit British series of the same name and adapted for American Television by Greg Daniels, this fast-paced comedy parodies contemporary American water-cooler culture. Earnest but clueless regional manager Michael Scott believes himself to be an exceptional boss and mentor, but actually receives more eye-rolls than respect from his oddball staff.</p>",
      updated: 1677413462,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded,
   },
   {
      id: 1292,
      name: "The Office",
      type: "Scripted",
      language: "English",
      genres: ["Comedy"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2001-07-09",
      ended: "2003-12-27",
      officialSite: "http://www.bbc.co.uk/programmes/b00jd68z",
      schedule: { time: "22:00", days: [Array] },
      rating: { average: 7.7 },
      weight: 94,
      network: {
         id: 37,
         name: "BBC Two",
         country: [Object],
         officialSite: "https://www.bbc.co.uk/bbctwo",
      },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: 6060, thetvdb: 78107, imdb: "tt0290978" },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/93/234802.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/93/234802.jpg",
      },
      summary:
         "<p>A mockumentary about life in a mid-sized suboffice paper merchants in a bleak British industrial town, where manager David Brent thinks he's the coolest, funniest, and most popular boss ever. He isn't. That doesn't stop him from embarrassing himself in front of the cameras on a regular basis, whether from his political sermonizing, his stand-up 'comedy', or his incredibly unique dancing. Meanwhile, long-suffering Tim longs after Dawn the engaged receptionist and keeps himself sane by playing childish practical jokes on his insufferable, army-obsessed deskmate Gareth. Will the Slough office be closed? Will the BBC give David a game show? Will Tim and Dawn end up with each other? And more importantly, will Gareth realize what a hopeless prat he is?</p>",
      updated: 1635703034,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded,
   },
   {
      id: 64988,
      name: "The Office",
      type: "Scripted",
      language: "Arabic",
      genres: [],
      status: "Running",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2022-10-28",
      ended: null,
      officialSite: "https://shahid.mbc.net/en/series/The-Office/series-958387",
      schedule: { time: "", days: [Array] },
      rating: { average: null },
      weight: 27,
      network: null,
      webChannel: {
         id: 379,
         name: "Shahid",
         country: null,
         officialSite: null,
      },
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: 425211, imdb: "tt20877972" },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/429/1072993.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/429/1072993.jpg",
      },
      summary:
         "<p>In a postal service company in Riyadh, a group of employees go about their daily work while dealing with their clumsy, but kind-hearted boss.</p>",
      updated: 1676621290,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded,
   },
   {
      id: 57704,
      name: "The Office",
      type: "Scripted",
      language: "Hindi",
      genres: [],
      status: "Ended",
      runtime: null,
      averageRuntime: 25,
      premiered: "2019-06-28",
      ended: "2019-09-15",
      officialSite: "https://www.hotstar.com/tv/the-office/1260005722",
      schedule: { time: "", days: [] },
      rating: { average: null },
      weight: 15,
      network: null,
      webChannel: {
         id: 164,
         name: "Disney+ Hotstar",
         country: null,
         officialSite: null,
      },
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: 366061, imdb: "tt8305218" },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/358/895848.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/358/895848.jpg",
      },
      summary:
         "<p>With downsizing and mediocrity as constants, life at Wilkins Chawla hasn't changed much. However, there may be a few developments in the matters of the heart.</p>",
      updated: 1632042708,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded,
   },
   {
      id: 57168,
      name: "The Office",
      type: "Scripted",
      language: "English",
      genres: ["Comedy"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "1995-03-11",
      ended: "1995-04-15",
      officialSite: null,
      schedule: { time: "", days: [Array] },
      rating: { average: null },
      weight: 14,
      network: {
         id: 2,
         name: "CBS",
         country: [Object],
         officialSite: "https://www.cbs.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: 77470, imdb: "tt0112108" },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/352/881150.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/352/881150.jpg",
      },
      summary:
         "<p>An office comedy version of the British series <i>Upstairs, Downstairs</i>, centering on the camaraderie of executives and their secretaries of a busy corporate office at a design-packaging company.</p>",
      updated: 1630176193,
      _links: { self: [Object], previousepisode: [Object] },

      _embedded: MOCK_SHOW_DATA._embedded,
   },
   {
      id: 36116,
      url: "https://www.tvmaze.com/shows/36116/the-naked-office",
      name: "The Naked Office",
      type: "Reality",
      language: "English",
      genres: [],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2010-05-18",
      ended: "2010-06-22",
      officialSite:
         "https://web.archive.org/web/20100420023629/http://www.virgin1.co.uk:80/shows/naked-office/",
      schedule: { time: "21:00", days: [Array] },
      rating: { average: null },
      weight: 51,
      network: {
         id: 393,
         name: "Channel One",
         country: [Object],
         officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: 103541, imdb: "tt1695361" },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/152/382299.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/152/382299.jpg",
      },
      summary:
         "<p><b>The Naked Office</b> attempts to help businesses get back on track by stripping away their problems using a revolutionary approach – going to work stark naked. With the recession still in full swing and companies fighting to stay afloat, the series investigates whether working naked will help employees to break down relationship boundaries by increasing positivity and productivity and explore whether flashing the flesh is the ultimate office equalizer.</p>",
      updated: 1574186111,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded,
   },
   {
      id: 58531,
      url: "https://www.tvmaze.com/shows/58531/the-office-pl",
      name: "The Office PL",
      type: "Scripted",
      language: "Polish",
      genres: [],
      status: "Running",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2021-10-22",
      ended: null,
      officialSite: null,
      schedule: { time: "", days: [] },
      rating: { average: null },
      weight: 43,
      network: {
         id: 273,
         name: "Canal+",
         country: [Object],
         officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: 410750, imdb: "tt15019916" },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/368/922476.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/368/922476.jpg",
      },
      summary:
         '<p>The action takes place in Siedlce, at the headquarters of the company dealing in the production of mineral water "Kropliczanka". Its president, Michal, is a man devoid of self-reflection, who strives for attention and recognition with every word and gesture. When the company is taken over by a new owner, and employees start to worry about their jobs, only Michal is optimistic about the changes. Business changes are intertwined here with the everyday office life of "Kropliczanka" employees.</p>',
      updated: 1665506160,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded,
   },
   {
      id: 49531,
      url: "https://www.tvmaze.com/shows/49531/the-office-blackmail",
      name: "The Office: Blackmail",
      type: "Scripted",
      language: "English",
      genres: [],
      status: "Ended",
      runtime: 2,
      averageRuntime: 2,
      premiered: "2009-05-07",
      ended: "2009-05-28",
      officialSite: null,
      schedule: { time: "", days: [Array] },
      rating: { average: null },
      weight: 20,
      network: {
         id: 1,
         name: "NBC",
         country: [Object],
         officialSite: "https://www.nbc.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: null, imdb: "tt1494540" },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/312/782114.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/312/782114.jpg",
      },
      summary: "<p>Creed attempts to blackmail his co-workers.</p>",
      updated: 1604094953,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded,
   },
   {
      id: 39299,
      name: "The Singing Office",
      type: "Reality",
      language: "English",
      genres: ["Music"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2008-06-29",
      ended: "2008-08-24",
      officialSite: null,
      schedule: { time: "21:00", days: [Array] },
      rating: { average: null },
      weight: 8,
      network: { id: 80, name: "TLC", country: [Object], officialSite: null },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: null, imdb: "tt0835055" },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/312/782114.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/312/782114.jpg",
      },
      summary:
         "<p>Each week, hosts Joey Fatone and Mel B surprise an office, hold an impromptu audition - in front of their co-workers - to create a team of the five best singers, and help them prepare for their time in the spotlight. Then, it's off to the stage for a choreographed sing-off to earn a spot in the finale and a chance to win $50,000. No office is safe this summer!</p>",
      updated: 1620139614,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded,
   },
   {
      id: 17368,
      url: "https://www.tvmaze.com/shows/17368/the-queen-of-office",
      name: "The Queen of Office",
      type: "Scripted",
      language: "Korean",
      genres: ["Drama", "Comedy", "Romance"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2013-04-01",
      ended: "2013-05-21",
      officialSite:
         "http://www.kbs.co.kr/drama/misskim/about/staff/index.html#",
      schedule: { time: "22:00", days: [Array] },
      rating: { average: null },
      weight: 32,
      network: { id: 128, name: "KBS2", country: [Object], officialSite: null },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: 268341, imdb: null },
      image: {
         medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/58/146476.jpg",
         original:
            "https://static.tvmaze.com/uploads/images/original_untouched/58/146476.jpg",
      },
      summary:
         "<p>A romantic comedy about work and love! Miss Kim who is just a contractor of a company is the ‘boss of the boss'. It illustrates a realistic story of an working woman who strives to survive at a work place.</p>",
      updated: 1573397351,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded,
   },
];
