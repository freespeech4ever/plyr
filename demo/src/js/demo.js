// ==========================================================================
// Plyr.io demo
// This code is purely for the https://plyr.io website
// Please see README.md in the root or github.com/sampotts/plyr
// ==========================================================================
import './tab-focus';
import 'custom-event-polyfill';
import 'url-polyfill';

import Plyr from '../../../src/js/plyr';
import sources from './sources';
import toggleClass from './toggle-class';

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const selector = '#player';

    const player = new Plyr(selector, {
      debug: true,
      title: 'Test title from config',
      channel: 'Test channel name',
      iconUrl: 'dist/demo.svg',
      keyboard: {
        global: true,
      },
      tooltips: {
        controls: true,
      },
      mediaMetadata: {
        title: 'View From A Blue Moon',
        artist: 'Brainfarm',
      },
    });
  });
})();
