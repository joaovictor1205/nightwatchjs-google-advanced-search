module.exports = {

    '@tags': ['googleAdvancedSearch'],

    'Test Case - Form Google Advanced Search' : function (browser) {

        const mainQuery = 'Test';
        const mainQueryInputSelector = 'input[name = "as_q"]';
        
        browser
            .url('http://google.com/advanced_search')
            .waitForElementVisible('body', 5000)
            .setValue(mainQueryInputSelector, mainQuery)
            .saveScreenshot('tests_output/google.png')

    }

}