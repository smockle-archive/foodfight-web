// Write your scripts here.
// EcmaScript 6 will be transpiled to EcmaScript 5. DONE
// JavaScript will be minified. DONE
// JavaScript will be obfuscated. DONE
// Multiple JavaScript files will be combined. DONE

console.log('Made with love and generator-stumpworks.');

if (!String.prototype.contains) {
    String.prototype.contains = function (needle) {
        'use strict';
        return this.indexOf(needle) > -1;
    };
}

if (!Array.prototype.contains) {
    Array.prototype.contains = function (needle) {
        'use strict';
        return this.indexOf(needle) > -1;
    };
}

if (!Number.prototype.contains) {
    Number.prototype.contains = function (needle) {
        'use strict';
        return this.toString().indexOf(needle) > -1;
    };
}