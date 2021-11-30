//@tag...vsetko co ma zavinac je tag
//tagy su na to, aby som si vedel pustat konkretne testy

Feature('GoogleImagesPage')

Scenario('Hladam obrazok', ({I, GoogleImagesPage, GoogleHomePage})  => {
    const searchedString='Patricia'    
I.amOnPage('https://www.google.com/imghp')
I.click(GoogleHomePage.buttons.agree)
I.fillField(GoogleImagesPage.fields.searchField, searchedString)
I.pressKey('Enter')
I.wait(2)
I.dontSeeInCurrentUrl('https://www.google.com/imghp')

}).tag('@image');