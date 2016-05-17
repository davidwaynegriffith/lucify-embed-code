
const iFrameResize = require('iframe-resizer').iframeResizer;

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


function lucifyEmbed(id, url) {
  const thisScript = document.getElementById(id);

  // prepare iframe
  const iframe = document.createElement('iframe');
  iframe.width='100%';
  iframe.scrolling='no';
  iframe.frameBorder=0;
  iframe.id = 'lucify-' + guid();

  iframe.src = url;

  // append iframe after script tag
  const parent = thisScript.parentElement;
  parent.insertBefore(iframe, thisScript.nextSibling);

  iFrameResize({log:false}, '#' + iframe.id);
};

window.lucifyEmbed = lucifyEmbed;
module.exports = lucifyEmbed;
