import { IShow } from '@/types/shared'

export const MOCK_SHOW_DATA: IShow = {
   id: 1,
   name: 'Under the Dome',
   premiered: '2013-06-24',
   summary: 'Under the Dome',
   image: {
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg'
   },

   _embedded: {
      cast: [
         {
            person: {
               name: 'Mike Vogel',
               image: {
                  medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg'
               }
            },
            character: {
               name: 'Barbie'
            }
         },
         {
            person: {
               name: 'Rachelle Lefevre',
               image: {
                  medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2.jpg'
               }
            },
            character: {
               name: 'Julia Shumway'
            }
         }
      ]
   }
}

export const MOCK_SHOWS: IShow[] = [
   {
      id: 526,
      name: 'The Office',
      type: 'Scripted',
      language: 'English',
      genres: ['Comedy'],
      status: 'Ended',
      runtime: 30,
      averageRuntime: 30,
      premiered: '2005-03-24',
      ended: '2013-05-16',
      officialSite: 'http://www.nbc.com/the-office',
      schedule: { time: '21:00', days: [Array] },
      rating: { average: 8.4 },
      weight: 98,
      network: {
         id: 1,
         name: 'NBC',
         country: [Object],
         officialSite: 'https://www.nbc.com/'
      },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: 6061, thetvdb: 73244, imdb: 'tt0386676' },
      image: {
         medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/271/678637.jpg',
         original: 'https://static.tvmaze.com/uploads/images/original_untouched/271/678637.jpg'
      },
      summary:
         '<p>Steve Carell stars in <b>The Office</b>, a fresh and funny mockumentary-style glimpse into the daily interactions of the eccentric workers at the Dunder Mifflin paper supply company. Based on the smash-hit British series of the same name and adapted for American Television by Greg Daniels, this fast-paced comedy parodies contemporary American water-cooler culture. Earnest but clueless regional manager Michael Scott believes himself to be an exceptional boss and mentor, but actually receives more eye-rolls than respect from his oddball staff.</p>',
      updated: 1677413462,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded
   },
   {
      id: 1292,
      name: 'The Office',
      type: 'Scripted',
      language: 'English',
      genres: ['Comedy'],
      status: 'Ended',
      runtime: 30,
      averageRuntime: 30,
      premiered: '2001-07-09',
      ended: '2003-12-27',
      officialSite: 'http://www.bbc.co.uk/programmes/b00jd68z',
      schedule: { time: '22:00', days: [Array] },
      rating: { average: 7.7 },
      weight: 94,
      network: {
         id: 37,
         name: 'BBC Two',
         country: [Object],
         officialSite: 'https://www.bbc.co.uk/bbctwo'
      },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: 6060, thetvdb: 78107, imdb: 'tt0290978' },
      image: {
         medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/93/234802.jpg',
         original: 'https://static.tvmaze.com/uploads/images/original_untouched/93/234802.jpg'
      },
      summary:
         "<p>A mockumentary about life in a mid-sized suboffice paper merchants in a bleak British industrial town, where manager David Brent thinks he's the coolest, funniest, and most popular boss ever. He isn't. That doesn't stop him from embarrassing himself in front of the cameras on a regular basis, whether from his political sermonizing, his stand-up 'comedy', or his incredibly unique dancing. Meanwhile, long-suffering Tim longs after Dawn the engaged receptionist and keeps himself sane by playing childish practical jokes on his insufferable, army-obsessed deskmate Gareth. Will the Slough office be closed? Will the BBC give David a game show? Will Tim and Dawn end up with each other? And more importantly, will Gareth realize what a hopeless prat he is?</p>",
      updated: 1635703034,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded
   },
   {
      id: 64988,
      name: 'The Office',
      type: 'Scripted',
      language: 'Arabic',
      genres: [],
      status: 'Running',
      runtime: 30,
      averageRuntime: 30,
      premiered: '2022-10-28',
      ended: null,
      officialSite: 'https://shahid.mbc.net/en/series/The-Office/series-958387',
      schedule: { time: '', days: [Array] },
      rating: { average: null },
      weight: 27,
      network: null,
      webChannel: {
         id: 379,
         name: 'Shahid',
         country: null,
         officialSite: null
      },
      dvdCountry: null,
      externals: { tvrage: null, thetvdb: 425211, imdb: 'tt20877972' },
      image: {
         medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/429/1072993.jpg',
         original: 'https://static.tvmaze.com/uploads/images/original_untouched/429/1072993.jpg'
      },
      summary:
         '<p>In a postal service company in Riyadh, a group of employees go about their daily work while dealing with their clumsy, but kind-hearted boss.</p>',
      updated: 1676621290,
      _links: { self: [Object], previousepisode: [Object] },
      _embedded: MOCK_SHOW_DATA._embedded
   }
]
