module.exports = {

    '@tags': ['googleAdvancedSearch'],

    'Test Case - Form Google Advanced Search' : function (browser) {

        const mainQuery = 'Test';
        const mainQueryInputSelector = '.jfk-textinput[name = "as_q"]';

        const languageDropDownOpenerSelector = '#lr_button';
        const languageValue = '.goog-menuitem[value="lang_pt"]';

        const lastUpdateDropDownOpenerSelector = '#as_qdr_button';
        const lastUpdateValue = '.goog-menuitem[value="m"]';

        const submitButtonSelector = '.jfk-button[type="submit"]';

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector = '.hdtb-mn-hd[aria-label="Pesquisar páginas em Português"]';
        const resultsPageUpdateSelector = '.hdtb-mn-hd[aria-label=" No último mês"]';

        browser
            .url('http://google.com/advanced_search')
            .waitForElementVisible('body', 5000)
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropDownOpenerSelector)
            .click(languageValue)
            .click(lastUpdateDropDownOpenerSelector)
            .click(lastUpdateValue)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Test', 'Query is Test')
            .assert.urlContains('lr=lang_pt', 'Language is Portugues')
            .assert.urlContains('as_qdr=m', 'Time period is last month')

        browser.assert.visible(resultsPageQuerySelector, 'Query Search OK');
        browser.assert.containsText(resultsPageLanguageSelector, 'Query Language OK');
        browser.assert.containsText(resultsPageUpdateSelector, 'Query Update OK');

        browser.saveScreenshot('tests_output/google.png');

    }

}