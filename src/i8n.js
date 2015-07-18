(function () {
    "use strict";

    angular.module('gonzalo123.i8n', [])
        .provider('i8n', function () {
            var myLang = {},
                userLang = 'en',
                translate;

            translate = function (key) {
                if (myLang.hasOwnProperty(key)) {
                    return myLang[key][userLang] || key;
                } else {
                    return key;
                }
            };

            this.$get = function () {
                return {
                    use: this.use,
                    translate: translate
                };
            };

            this.use = function (lang) {
                userLang = lang;
            };

            this.init = function (lang, conf) {
                userLang = lang;
                myLang = conf;
            };
        })

        .filter('i8n', ['i8n', function (i8n) {
            return function (key) {
                return i8n.translate(key);
            };
        }])
    ;
})();