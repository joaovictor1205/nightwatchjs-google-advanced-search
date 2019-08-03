module.exports = {

    '@tags': ['googleAdvancedSearch'],
    '@disabled': true,

    'Test Case - Form Google Advanced Search' : function (browser) {

        const mainQuery = 'Test';

        const page = browser.page.googleAdvancedSearch();

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropDownOpenerSelector', 'lang_pt')
            .selectFilter('@lastUpdateDropDownOpenerSelector', 'm')
            .search()

        browser
            .assert.urlContains('as_q=Test', 'Query is Test')
            .assert.urlContains('lr=lang_pt', 'Language is Portugues')
            .assert.urlContains('as_qdr=m', 'Time period is last month')

            const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
            const resultsPageLanguageSelector = '.hdtb-mn-hd[aria-label="Pesquisar páginas em Português"]';
            const resultsPageUpdateSelector = '.hdtb-mn-hd[aria-label=" No último mês"]';

        browser.assert.visible(resultsPageQuerySelector, 'Query Search OK');
        browser.assert.containsText(resultsPageLanguageSelector, 'Pesquisar páginas em Português', 'Query Language OK');
        browser.assert.containsText(resultsPageUpdateSelector, 'No último mês', 'Query Update OK');

        browser.saveScreenshot('tests_output/google.png');

    }

}