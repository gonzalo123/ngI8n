AngularJS i8n provider
=================
Code licensed under MIT License.

Allows to use [hello.js](http://adodson.com/hello.js/) with AngularJS 

## Example

Configure provider with default user language and some data
```js
    .config(function (i8nProvider, Conf) {
        i8nProvider.init('en', {
           HI: {
               en: 'Hello',
               es: 'Hola'
           }
       });
    })
```

How to use it within template
```html
<h1 class="title">{{ 'HI' | i8n }}</h1>
```

How to use it from controller
```js
    .controller('HomeController', function ($scope, i8n) {
        $scope.hi = i8n.traslate('HI');

        $scope.changeLang = function(lang) {
            i8n.use(lang);
        };
    })
```

## Installing via Bower
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