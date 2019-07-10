import { DateTime } from 'luxon';

export default class Header {
  constructor() {
    this._dateEl = $('.header__date');

    setInterval(this._setDate.bind(this), 500);
  }

  _setDate() {
    let now = DateTime.local();
    let format = now.toFormat("ccc'.' LL '-' dd '-' yyyy '•' HH':'mm':'ss");

    if (this._dateEl.text() !== format) {
      this._dateEl.text(format);
    }
  }
}