(function () {
    "use strict";

    angular.module('gonzalo123.i18n', [])
        .provider('i18n', function () {
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

        .filter('i18n', ['i18n', function (i18n) {
            var i18nFilter = function (key) {
                return i18n.translate(key);
            };

            i18nFilter.$stateful = true;

            return i18nFilter;
        }])
    ;
})();