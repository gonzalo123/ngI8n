describe("i8n test", function () {

    var provider;

    beforeEach(module('gonzalo123.i8n', function (i8nProvider) {
        provider = i8nProvider;
    }));

    it('tests translate', inject(function () {
        expect(provider.hasOwnProperty('init')).toBeDefined();
        expect(provider.$get().hasOwnProperty('translate')).toBeDefined();
        expect(provider.$get().hasOwnProperty('use')).toBeDefined();

        provider.init('es', {
            HI: {
                en: 'Hello',
                es: 'Hola'
            }
        });
        expect(provider.$get().translate('HI')).toEqual('Hola');
        provider.use('en');
        expect(provider.$get().translate('HI')).toEqual('Hello');

        provider.$get().use('es');
        expect(provider.$get().translate('HI')).toEqual('Hola');

        expect(provider.$get().translate('NON_EXITS_KEY')).toEqual('NON_EXITS_KEY');
    }));
});