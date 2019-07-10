    <div class="loading">
      <div class="loading__content">
        <?php print_svg('logo.svg'); ?>
        <p>Full stack developer</p>
      </div>
    </div>

    <div class="marquee">
      <div class="marquee-container">
        <p class="marquee__item">
          Liroo Pierre - Full stack developper • Design and concept by <a href="https://studio-push.com" target="_blank">Studio Push</a> //
        </p>
      </div>
    </div>

    <div class="console">
      <div class="console__header">
        <p class="console__header__title">Console</p>
        <a class="console__header__close"><?php print_svg('cross.svg'); ?></a>
      </div>
      <div class="console__xterm"></div>

      <div class="console__resize console__resize-n"></div>
      <div class="console__resize console__resize-s"></div>
      <div class="console__resize console__resize-w"></div>
      <div class="console__resize console__resize-e"></div>
    </div>

    <?php wp_footer(); ?>
  </body>
</html>