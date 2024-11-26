/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * Required for all browsers.
 */
import 'zone.js'; // Included with Angular CLI.

/**
 * Polyfill for the `Reflect` API, used in Angular's dependency injection system.
 * If you are using a modern browser (e.g., Chrome, Edge, Safari), you likely don't need this.
 */
import 'core-js/es/reflect';

/**
 * Add global `fetch` polyfill for older browsers.
 */
import 'whatwg-fetch';

/**
 * If you are supporting older versions of Internet Explorer (IE9, IE10, or IE11), you can enable
 * the following polyfills. For most modern browsers, these are not required.
 */
import 'core-js/es/array';
import 'core-js/es/function';
import 'core-js/es/object';
import 'core-js/es/promise';
import 'core-js/es/set';
import 'core-js/es/string';
import 'core-js/es/symbol';

/***************************************************************************************************
 * Zone.js requires the following polyfill.
 */
import 'zone.js'; // Included with Angular CLI.

