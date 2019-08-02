module.exports = {

    'Test Case - Form' : function (browser) {
        
        browser
            .url('http://google.com.br')
            .waitForElementVisible('body', 5000)
            .assert.title('Google');

    }

}