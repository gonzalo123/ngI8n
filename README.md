AngularJS i18n provider
=================
[![Build Status](https://travis-ci.org/gonzalo123/ngI8n.svg?branch=master)](https://travis-ci.org/gonzalo123/ngI8n)

Code licensed under MIT License.

Yet another i18n AngularJS provider

## Example

Configure provider with default user language and some data
```js
    .config(function (i18nProvider, Conf) {
        i18nProvider.init('en', {
           HI: {
               en: 'Hello',
               es: 'Hola'
           }
       });
    })
```

How to use it within template
```html
<h1 class="title">{{ 'HI' | i18n }}</h1>
```

How to use it from controller
```js
    .controller('HomeController', function ($scope, i18n) {
        $scope.hi = i18n.traslate('HI');

        $scope.changeLang = function(lang) {
            i18n.use(lang);
        };
    })
```

## Installing via Bower 
(be careful. The name is ng-i8n and not ng-i18n)
```
bower install ng-i8n
```

## Development
It uses Karma to ensure the quality of the code. The easiest way to run these checks is to use grunt:

```sh
npm install -g grunt-cli
npm install && bower install
grunt karma
```
