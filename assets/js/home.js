export default class Home {
  constructor() {
    this._setToggle();
  }

  _setToggle() {
    $('.home__nav__item-toggle > a').click(function() {
      let content = $(this).parent().find('.home__nav__item__content');

      content.toggleClass('home__nav__item__content-active');

      if (content.hasClass('home__nav__item__content-active')) {
        let height = content.find('> div').innerHeight();
        content.css({
          height: height + 'px',
        });
      } else {
        content.css({
          height: 0,
        });
      }
    });

    $('.home__nav__item-console').click(function() {
      $('.console').toggleClass('console-active');
    });
  }
}