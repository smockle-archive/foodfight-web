if (!console.assert) {
    console.assert = function (condition, message) {
        'use strict';
        try {
            if (!condition) {
                console.log('Test failed. Testing ' + message + '.');
            }
        } catch (e) {
            console.log('Test failed. Testing ' + message + '.');
        }
    };
}
