export default class Sh {
  constructor(xterm) {
    this._xterm = xterm;

    this._xterm.prompt = () => {
      this._xterm.write('\r\n\x1B[0;37m➜ liroo \x1B[0;3;37m$\x1B[0m ');
    };
  }

  run() {
    this._xterm.writeln('\x1B[0;37mWelcome to Liroo\'s website\x1B[0m');
    this._xterm.writeln('\nThis console is in progress. I just made fun by making something useless. \x1B[3m(Because yes, this is an useless feature)\x1B[0m');
    this._xterm.writeln('But try to drag or resize that console!');
    this._xterm.writeln('\nThe project is to create a fake SH into a js terminal. Commands will be used somehow to interact with the website. I already create a full sh in C during my school years but I can\'t retrieve the code on this shitty git school.');
    this._xterm.writeln('\n\x1B[3mFor now. There is only a void.\x1B[0m');
    this._xterm.prompt();

    this._xterm.onKey((e) => {
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {
        this._xterm.prompt();
      } else if (ev.keyCode === 8) {
        // Do not delete the prompt
        if (this._xterm._core.buffer.x > 2) {
          this._xterm.write('\b \b');
        }
      } else if (printable) {
        this._xterm.write(e.key);
      }
    });
  }
}