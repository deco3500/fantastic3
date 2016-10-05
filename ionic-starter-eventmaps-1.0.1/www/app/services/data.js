define([
  'app'
], function (app) {
  'use strict';

  app.service('dataService', [
    function () {
      this.events = [{
        id: 1,
        name: 'Special Event',
        city: 'Brisbane',
        district: 'Saint Lucia',
        street: 'Carmody Rd',
        number: '17',
        zip: '4072',
        lat: -27.498589,
        lng: 153.0099093,
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 2,
        name: 'Special Event',
        city: 'Brisbane',
        district: 'Milton',
        street: 'Park Rd',
        number: '9',
        zip: '4102',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: -27.493689,
        lng: 153.0286202,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 3,
        name: 'Special Event',
        city: 'Brisbane',
        district: 'Chermside',
        street: 'Gympie Rd',
        number: '5',
        zip: '4032',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: -27.3847542,
        lng: 153.0301993,
        wheelchair: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 4,
        name: 'Special Event',
        city: 'Brisbane',
        district: 'Ascot',
        street: 'Hampden',
        number: '75',
        zip: '4007',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: -27.4260903,
        lng: 153.0736524,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 5,
        name: 'Special Event',
        city: 'Brisbane',
        district: 'Mitchelton',
        street: 'Blackwood',
        number: '48',
        zip: '4053',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: -27.411194,
        lng: 152.9720754,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 6,
        name: 'Science Event',
        city: 'Brisbane',
        district: 'Bowen Hills',
        street: 'Folkestone',
        number: '34',
        zip: '4006',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: -27.4434314,
        lng: 153.037957,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 7,
        name: 'Science Event',
        city: 'Brisbane',
        district: 'South Brisbane',
        street: 'Stanley',
        number: '1',
        zip: '4101',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: -27.4745345,
        lng: 153.0169488,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 8,
        name: 'Science Event',
        city: 'Brisbane',
        district: 'Woolloongabba',
        street: 'Vulture',
        number: '1',
        zip: '4102',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: -27.4858328,
        lng: 153.0358966,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 9,
        name: 'Science Event',
        city: 'Brisbane',
        district: 'Wooloongabba',
        street: 'Ipswich',
        number: '199',
        zip: '4102',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: -27.4989502,
        lng: 153.0312467,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 10,
        name: 'Science Event',
        city: 'Brisbane',
        district: 'Sunnybank',
        street: 'McCullough',
        number: '1',
        zip: '4109',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: -27.5902569,
        lng: 153.0424034,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }];

      this.pages = [{
        alias: 'impress',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Impress',
        icon: 'ion-information-circled'
      }, {
        alias: 'contact',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Contact',
        icon: 'ion-paper-airplane'
      }];
    }
  ]);
});
