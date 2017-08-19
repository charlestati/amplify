;(function () {
  var images = document.querySelectorAll('.js-amplify');

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var parent = image.parentNode;
    var wrapper = document.createElement('div');

    wrapper.classList.add('amplify-wrapper');
    parent.replaceChild(wrapper, image);
    wrapper.appendChild(image);

    image.setAttribute('role', 'button');
    image.setAttribute('tabindex', '0');
    image.setAttribute('aria-expanded', 'false');
    image.addEventListener('click', handleClick, false);
    image.addEventListener('keypress', handleKeypress, false);
  }

  function handleClick(event) {
    amplify(event.target);
  }

  function handleKeypress(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      amplify(event.target);
    }
  }

  function amplify(element) {
    var expanded = element.getAttribute('aria-expanded') === 'true';
    element.setAttribute('aria-expanded', (!expanded).toString());
  }
})();

//# sourceMappingURL=amplify.js.map