module.exports = {

    url: 'http://google.com/advanced_search',

    elements: {

        mainQueryInputSelector: '.jfk-textinput[name = "as_q"]',

        languageDropDownOpenerSelector: '#lr_button',

        lastUpdateDropDownOpenerSelector: '#as_qdr_button',

        submitButtonSelector: '.jfk-button[type="submit"]',

    },

    commands: [{

        setQuery(value){

            return this
                .setValue("@mainQueryInputSelector", value);

        },

        selectFilter(selector, value){

            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);

        },

        search(){

            return this
                .click('@submitButtonSelector');

        }

    }]

};