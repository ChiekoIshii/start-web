$(function () {
  $hamburgerButton = $(".hamburgerButton");
  $nav = $('.headerNav');

  $hamburgerButton.click(function () {
    $(this).toggleClass('active');
    $nav.toggleClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.hamburgerButton').length && !$(e.target).closest('#button').length) {
      if ($('.headerNav').hasClass('active')) {
        $hamburgerButton.toggleClass('active')
        $nav.toggleClass('active');
      }
    }
  });
});
