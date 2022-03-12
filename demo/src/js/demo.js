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

const controls = `
<div class="plyr__controls">
  <div class="green_mods">
    <label class="green_title">Test test test test</label>
    <label class="green_channel">wut wut wut</label>
  </div>
  <button
    class="plyr__controls__item plyr__control"
    type="button"
    data-plyr="play"
    aria-label="Play"
  >
    <svg class="icon--pressed" aria-hidden="true" focusable="false">
      <use xlink:href="dist/demo.svg#plyr-pause"></use></svg
    ><svg class="icon--not-pressed" aria-hidden="true" focusable="false">
      <use xlink:href="dist/demo.svg#plyr-play"></use></svg
    ><span class="label--pressed plyr__tooltip">Pause</span
    ><span class="label--not-pressed plyr__tooltip">Play</span>
  </button>
  <div class="plyr__controls__item plyr__progress__container">
    <div class="plyr__progress">
      <input
        data-plyr="seek"
        type="range"
        min="0"
        max="100"
        step="0.01"
        value="0"
        autocomplete="off"
        role="slider"
        aria-label="Seek"
        aria-valuemin="0"
        aria-valuemax="183.126"
        aria-valuenow="0"
        id="plyr-seek-4312"
        aria-valuetext="00:00 of 03:03"
        style="--value: 0%"
      /><progress
        class="plyr__progress__buffer"
        min="0"
        max="100"
        value="1.5033365005515327"
        role="progressbar"
        aria-hidden="true"
      >
        % buffered</progress
      ><span class="plyr__tooltip">00:00</span>
    </div>
  </div>
  <div
    class="plyr__controls__item plyr__time--current plyr__time"
    aria-label="Current time"
  >
    00:00
  </div>
  <div
    class="plyr__controls__item plyr__time--duration plyr__time"
    aria-label="Duration"
  >
    03:03
  </div>
  <div class="plyr__controls__item plyr__volume">
    <button type="button" class="plyr__control" data-plyr="mute">
      <svg class="icon--pressed" aria-hidden="true" focusable="false">
        <use xlink:href="dist/demo.svg#plyr-muted"></use></svg
      ><svg class="icon--not-pressed" aria-hidden="true" focusable="false">
        <use xlink:href="dist/demo.svg#plyr-volume"></use></svg
      ><span class="label--pressed plyr__tooltip">Unmute</span
      ><span class="label--not-pressed plyr__tooltip">Mute</span></button
    ><input
      data-plyr="volume"
      type="range"
      min="0"
      max="1"
      step="0.05"
      value="2"
      autocomplete="off"
      role="slider"
      aria-label="Volume"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="100"
      id="plyr-volume-4312"
      aria-valuetext="100.0%"
      style="--value: 100%"
    />
  </div>
  <div class="plyr__controls__item plyr__menu">
    <button
      aria-haspopup="true"
      aria-controls="plyr-settings-4312"
      aria-expanded="false"
      type="button"
      class="plyr__control"
      data-plyr="settings"
    >
      <svg aria-hidden="true" focusable="false">
        <use xlink:href="dist/demo.svg#plyr-settings"></use></svg
      ><span class="plyr__tooltip">Settings</span>
    </button>
    <div class="plyr__menu__container" id="plyr-settings-4312" hidden="">
      <div>
        <div id="plyr-settings-4312-home">
          <div role="menu">
            <button
              data-plyr="settings"
              type="button"
              class="plyr__control plyr__control--forward"
              role="menuitem"
              aria-haspopup="true"
              hidden=""
            >
              <span
                >Captions<span class="plyr__menu__value">Disabled</span></span
              ></button
            ><button
              data-plyr="settings"
              type="button"
              class="plyr__control plyr__control--forward"
              role="menuitem"
              aria-haspopup="true"
            >
              <span
                >Quality<span class="plyr__menu__value">720p</span></span
              ></button
            ><button
              data-plyr="settings"
              type="button"
              class="plyr__control plyr__control--forward"
              role="menuitem"
              aria-haspopup="true"
            >
              <span>Speed<span class="plyr__menu__value">Normal</span></span>
            </button>
          </div>
        </div>
        <div id="plyr-settings-4312-captions" hidden="">
          <button type="button" class="plyr__control plyr__control--back">
            <span aria-hidden="true">Captions</span
            ><span class="plyr__sr-only">Go back to previous menu</span>
          </button>
          <div role="menu"></div>
        </div>
        <div id="plyr-settings-4312-quality" hidden="">
          <button type="button" class="plyr__control plyr__control--back">
            <span aria-hidden="true">Quality</span
            ><span class="plyr__sr-only">Go back to previous menu</span>
          </button>
          <div role="menu">
            <button
              data-plyr="quality"
              type="button"
              role="menuitemradio"
              class="plyr__control"
              aria-checked="false"
              value="1080"
            >
              <span
                >1080p<span class="plyr__menu__value"
                  ><span class="plyr__badge">HD</span></span
                ></span
              ></button
            ><button
              data-plyr="quality"
              type="button"
              role="menuitemradio"
              class="plyr__control"
              aria-checked="true"
              value="720"
            >
              <span
                >720p<span class="plyr__menu__value"
                  ><span class="plyr__badge">HD</span></span
                ></span
              ></button
            ><button
              data-plyr="quality"
              type="button"
              role="menuitemradio"
              class="plyr__control"
              aria-checked="false"
              value="540"
            >
              <span>540p</span>
            </button>
          </div>
        </div>
        <div id="plyr-settings-4312-speed" hidden="">
          <button type="button" class="plyr__control plyr__control--back">
            <span aria-hidden="true">Speed</span
            ><span class="plyr__sr-only">Go back to previous menu</span>
          </button>
          <div role="menu">
            <button
              data-plyr="speed"
              type="button"
              role="menuitemradio"
              class="plyr__control"
              aria-checked="false"
              value="0.5"
            >
              <span>0.5×</span></button
            ><button
              data-plyr="speed"
              type="button"
              role="menuitemradio"
              class="plyr__control"
              aria-checked="false"
              value="0.75"
            >
              <span>0.75×</span></button
            ><button
              data-plyr="speed"
              type="button"
              role="menuitemradio"
              class="plyr__control"
              aria-checked="true"
              value="1"
            >
              <span>Normal</span></button
            ><button
              data-plyr="speed"
              type="button"
              role="menuitemradio"
              class="plyr__control"
              aria-checked="false"
              value="1.25"
            >
              <span>1.25×</span></button
            ><button
              data-plyr="speed"
              type="button"
              role="menuitemradio"
              class="plyr__control"
              aria-checked="false"
              value="1.5"
            >
              <span>1.5×</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    class="plyr__controls__item plyr__control"
    type="button"
    data-plyr="pip"
  >
    <svg aria-hidden="true" focusable="false">
      <use xlink:href="dist/demo.svg#plyr-pip"></use></svg
    ><span class="plyr__tooltip">PIP</span></button
  ><button
    class="plyr__controls__item plyr__control"
    type="button"
    data-plyr="airplay"
  >
    <svg aria-hidden="true" focusable="false">
      <use xlink:href="dist/demo.svg#plyr-airplay"></use></svg
    ><span class="plyr__tooltip">AirPlay</span></button
  ><a
    class="plyr__controls__item plyr__control"
    href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
    target="_blank"
    download=""
    data-plyr="download"
    ><svg aria-hidden="true" focusable="false">
      <use xlink:href="dist/demo.svg#plyr-download"></use></svg
    ><span class="plyr__tooltip">Download</span></a
  ><button
    class="plyr__controls__item plyr__control"
    type="button"
    data-plyr="fullscreen"
  >
    <svg class="icon--pressed" aria-hidden="true" focusable="false">
      <use xlink:href="dist/demo.svg#plyr-exit-fullscreen"></use></svg
    ><svg class="icon--not-pressed" aria-hidden="true" focusable="false">
      <use xlink:href="dist/demo.svg#plyr-enter-fullscreen"></use></svg
    ><span class="label--pressed plyr__tooltip">Exit fullscreen</span
    ><span class="label--not-pressed plyr__tooltip">Enter fullscreen</span>
  </button>
</div>

`;

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const selector = '#player';

    // Setup the player
    const player = new Plyr(selector, {
      debug: true,
      title: 'View From A Blue Moon',
      iconUrl: 'dist/demo.svg',
      keyboard: {
        global: true,
      },
      tooltips: {
        controls: true,
      },
      controls,
      mediaMetadata: {
        title: 'View From A Blue Moon',
        artist: 'Brainfarm',
      },
    });
  });
})();
