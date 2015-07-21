describe("i18n test", function () {

    var provider;

    beforeEach(module('gonzalo123.i18n', function (i18nProvider) {
        provider = i18nProvider;
    }));

    it('tests translate', inject(function () {
        // provider should have functions defined
        expect(provider.hasOwnProperty('init')).toBeDefined();
        expect(provider.$get().hasOwnProperty('translate')).toBeDefined();
        expect(provider.$get().hasOwnProperty('use')).toBeDefined();

        // we initialize provider with dummy data
        provider.init('es', {
            HI: {
                en: 'Hello',
                es: 'Hola'
            }
        });

        // we translate one key using 'es' as user language
        expect(provider.$get().translate('HI')).toEqual('Hola');

        // we change the user language to 'en' and translate again
        provider.use('en');
        expect(provider.$get().translate('HI')).toEqual('Hello');

        // we change the user language to 'es' using another way and translate again
        provider.$get().use('es');
        expect(provider.$get().translate('HI')).toEqual('Hola');

        // we try to translate one non defined key
        expect(provider.$get().translate('NON_EXITS_KEY')).toEqual('NON_EXITS_KEY');
    }));
});