import { Terminal } from 'xterm';

import { WebLinksAddon } from 'xterm-addon-web-links';
import { FitAddon } from 'xterm-addon-fit';

import interact from 'interactjs'

import Sh from './sh';

export default class Console {
  constructor() {
    $('.console__header__close').click(() => {
      $('.console').removeClass('console-active');
    });

    this._initXterm();

    this._initInteract();

    this.sh.run();
  }

  _initXterm() {
    this._xterm = new Terminal({
      fontFamily: 'IBM Plex Mono',
      cursorBlink: true,
      theme: {
        background: '#000000',
        foreground: '#3f4fd7',
        cursor: '#3f4fd7',
        selection: '#3f4fd744',
      },
    });
    this._xterm.open($('.console__xterm')[0]);

    this._xterm.loadAddon(new WebLinksAddon());
    this._fitAddon = new FitAddon();
    this._xterm.loadAddon(this._fitAddon);

    this._fitAddon.fit();

    this.sh = new Sh(this._xterm);
  }

  _initInteract() {
    this._interact = interact('.console');

    this._position = {
      x: Math.round(Math.random() * (window.innerWidth - $('.console').width())),
      y: Math.round(Math.random() * (window.innerHeight - $('.console').height())),
    };
    $('.console').css({
      transform: `translate(${this._position.x}px, ${this._position.y}px)`,
    });
    this._interact
      .draggable({
        allowFrom: '.console__header',
        modifiers: [
          interact.modifiers.restrict({
            drag: 'parent',
          }),
        ],
        listeners: {
          start: (event) => {
            $('.console__header').addClass('cursor__grabbing');

            let page = event.page;
            let rect = event.rect;

            this._offset = {
              x: page.x - rect.left,
              y: page.y - rect.top,
            };
          },
          move: (event) => {
            let page = event.page;

            let position = {
              x: page.x - this._offset.x,
              y: page.y - this._offset.y,
            };

            // bounds top
            if (position.y < 0) { position.y = 0; }

            this._position = position;
            event.target.style.transform =
              `translate(${position.x}px, ${position.y}px)`
          },
          end: () => {
            $('.console__header').removeClass('cursor__grabbing');
          },
        }
      })
      .resizable({
        edges: {
          top: '.console__resize-n',
          bottom: '.console__resize-s',
          left: '.console__resize-w',
          right: '.console__resize-e',
        },
      })
      .on('resizemove', (event) => {
        let limit = false;
        if (event.rect.width > 500) {
          this._position.x += event.deltaRect.left;
          event.target.style.width = `${event.rect.width}px`;
        } else {
          limit = true;
        }
        if (event.rect.height > 200) {
          this._position.y += event.deltaRect.top;
          event.target.style.height = `${event.rect.height}px`;
        } else {
          limit = true;
        }
        event.target.style.transform = `translate(${this._position.x}px, ${this._position.y}px)`;

        $('body').css({ pointerEvents: 'none', });
        $('html').removeClass('cursor__n-resize cursor__s-resize cursor__ns-resize cursor__e-resize cursor__w-resize cursor__ew-resize');
        if (event.edges.top) {
          $('html').addClass(limit ? 'cursor__n-resize' : 'cursor__ns-resize');
        } else if (event.edges.bottom) {
          $('html').addClass(limit ? 'cursor__s-resize' : 'cursor__ns-resize');
        } else if (event.edges.left) {
          $('html').addClass(limit ? 'cursor__w-resize' : 'cursor__ew-resize');
        } else if (event.edges.right) {
          $('html').addClass(limit ? 'cursor__e-resize' : 'cursor__ew-resize');
        }

        this._fitAddon.fit();
      })
      .on('resizeend', (event) => {
        $('html').removeClass('cursor__n-resize cursor__s-resize cursor__ns-resize cursor__e-resize cursor__w-resize cursor__ew-resize');
        $('body').css({ pointerEvents: '', });
      })
      .styleCursor(false);
  }
}