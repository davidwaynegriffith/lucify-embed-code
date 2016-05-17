
# Embed code generator for iframe-resizer

This package contains utilities for generating embed codes for embedding content from external websites with auto-resizing iframes based on [`iframe-resizer`](https://github.com/davidjbradshaw/iframe-resizer) version `2.8.10`

## Pre-release notice

This is a pre-release of a package belonging to the Lucify platform. It has been published merely to satisfy dependencies of other packages. Any APIs may change without notice.

## Generation of embed codes

Three types of embed codes are supported. All three types are typically offered for embeddable visualisations created by Lucify.

Examples below are for the [Seeking asylum in Europe](http://www.lucify.com/seeking-asylum-in-europe/) visualisation. It was chosen as an example, because it has embed codes with [different query parameters](http://www.lucify.com/embed/lucify-asylum-countries/embed-codes-custom.html) for different languages.

### IFrame + Inline iframe resize script

This type of embed code contains an iFrame that will contain an embed, and a script tag that contains an inlined version of the [iframe resize script](https://github.com/davidjbradshaw/iframe-resizer/blob/v2.8.10/js/iframeResizer.min.js).

The advantage of this type of embed code is that it does not require the execution of any remote resources in the context of the embedding site.

Generate the embed code with:
```js
import { embedCode } from 'lucify-embed-utils'
// embed iframe url for Finnish version
const iFrameUrl = 'http://www.lucify.com/embed/asylum-seekers-in-europe/?fi';
const code = embedCode.getIFrameEmbedCodeWithInlineResize(iFrameUrl);
```

### IFrame + Remote iframe resize script

This type of embed code contains an iFrame that will contain an embed, and a script tag that points to a remote version of the [iframe resize script](https://github.com/davidjbradshaw/iframe-resizer/blob/v2.8.10/js/iframeResizer.min.js).

The advantage compared to the previous type of embed codes is that it is much shorter. The disadvantage is that the embedding page will be executing remote resources.

This type of embed code requires [`iframeResizer.min.js`] https://github.com/davidjbradshaw/iframe-resizer/blob/v2.8.10/js/iframeResizer.min.js to be located in `[baseUrl]/resize.js`.

Generate the embed code with:
```js
import { embedCode } from 'lucify-embed-utils'

// embed baseUrl, pointing to directory with resize.js
const baseUrl = 'http://www.lucify.com/embed/asylum-seekers-in-europe/';
// embed iframe url for Finnish version
const iFrameUrl = 'http://www.lucify.com/embed/asylum-seekers-in-europe/?fi';

const code = embedCode.getIFrameEmbedCodeWithRemoteResize(baseUrl, embedUrl);
```

### Script tag embed code

This type of embed code consists of two script tags. They will write an iframe to the page and run the iframe resize script.

This type of embed code requires a bundled version of [`embed.js`](https://github.com/lucified/lucify-embed-code/blob/master/lib/embed-code.js) to be located in `[baseUrl]/embed.js`. In projects published in npm, the file can be found in `lib/embed.js`. It can be built with `npm prepublish`.

Generate the embed code with:
```js
import { embedCode } from 'lucify-embed-utils'

// embed baseUrl, pointing to directory with embed.js
const baseUrl = 'http://www.lucify.com/embed/asylum-seekers-in-europe/';
// embed iframe url for Finnish version
const iFrameUrl = 'http://www.lucify.com/embed/asylum-seekers-in-europe/?fi';

const code = embedCode.getIFrameEmbedCodeWithRemoteResize(baseUrl, embedUrl);
```

## License

MIT
