Feature('Google Homepage');

Scenario('Hladam "Patricia je ucitelka"', ({ I, GoogleHomePage }) => {
    //V kuceravych zatvorkach mam classy/objecty
const searchedString='Patricia je ucitelka'    
I.amOnPage('https://www.google.com/')
//Nedavat classy, menia sa hashe
//Hladat ID, xPath, Data-QA
I.click(GoogleHomePage.buttons.agree)
//Ked mi classa nenapoveda, pustim si npm run generateAutoCompetition
I.fillField(GoogleHomePage.fields.searchField, searchedString)
//Stringy si viem ulozit do constant
I.click(GoogleHomePage.buttons.search)
I.see(GoogleHomePage.navigation.all)
I.dontSee(GoogleHomePage.fields.searchField)


}).tag('@Search').tag('@patricia');

Scenario('Hladam "Miro"', ({ I , GoogleHomePage}) => {
const searchedString='Miro'    
I.amOnPage('https://www.google.com/')
//Nedavat classy, menia sa hashe
//Hladat ID, xPath, Data-QA
I.click(GoogleHomePage.buttons.agree)
I.fillField(GoogleHomePage.fields.searchField, searchedString)
I.click(GoogleHomePage.buttons.search)
I.see(GoogleHomePage.navigation.all)
I.dontSee(GoogleHomePage.fields.searchField)


}).tag('@Search').tag('@miro');

xScenario('Hladam "Miroslav"', ({ I }) => {
//Tam kde mam x pred scenarom tak sa to nepusti    
    I.amOnPage('https://www.google.com/')
    //Nedavat classy, menia sa hashe
    //Hladat ID, xPath, Data-QA
    I.click('Súhlasím')
    I.fillField("Hľadať", 'Miroslav')
    I.click('Hľadať Googlom')
    I.see('Všetko')
    I.dontSee('Hľadať')
    
    
    });

    //PUSHNUT DO GITHUBU