"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var diff = function (obj1, obj2) {
    var toMutate = {};
    Array.from(new Set(Object.keys(obj1).concat(Object.keys(obj2)))).map(function (key) {
        if (obj1[key] !== obj2[key]) {
            toMutate[key] = obj2[key];
        }
    });
    return toMutate;
};
exports.default = diff;
//# sourceMappingURL=diff.js.map