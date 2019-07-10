const __DEV__ = false;

export default class Loading {
  static domContentLoaded() {
    let loadingEl = $('.loading');

    if (__DEV__) {
      loadingEl.hide();
    } else {
      $('.loading').click(function() {
        $(this).hide();
      });
    }
  }
}