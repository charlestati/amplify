![Demo gif](docs/demo.gif)

# Amplify

## Overview

Amplify allows users to increase the size of images.

Best used in narrow containers, between paragraphs.

It is lightweight: 29 sloc of JS and 23 sloc of SCSS resulting in **1.22kB** combined.

### [Demo](https://charlestati.github.io/amplify)

## Quickstart

- Add [amplify.min.css](docs/amplify.min.css) and [amplify.min.js](docs/amplify.min.js) to your page
- Add the `js-amplify` CSS class to your images

`<img class="js-amplify" src="photo.jpg" alt="Photo">`

## Browser Support

- Chrome
- Firefox
- Safari

Probably Edge, Internet Explorer 10+ and Opera too.

## Known bugs

- Sometimes the first transition is not smooth
- Adding a wrapper for image centering prevents margin collapsing with the paragraphs

## Todo

- Use `transform: scale()` or JavaScript for smoother transitions

## License

Apache 2.0
