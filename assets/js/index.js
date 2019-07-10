import Loading from 'js/loading';

import Header from 'js/header';
import Marquee from './marquee3k';

import Home from './home';

import Console from './console';

/*
 * App Class
 */
class App {
  static start() {
    return new App();
  }

  constructor() {
    this.views = {};
    Promise
      .all([
        App.domReady(),
      ])
      .then(this.init.bind(this));
  }

  static domReady() {
    return new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', resolve);
    });
  }

  static showPage() {
    document.documentElement.classList.add('ready');
    Loading.domContentLoaded();
    console.log(`
%cWebsite made by

Studio Push.%c
(https://studio.push.com)
      `, 'font-family: Helvetica, sans-serif;font-size:26px;color:black;', 'font-size: 10px;');
  }

  init() {
    new Header();
    new Marquee({
      element: $('.marquee')[0],
      duration: 5,
    });

    new Home();
    new Console();

    App.showPage();
  }
}

App.start();

