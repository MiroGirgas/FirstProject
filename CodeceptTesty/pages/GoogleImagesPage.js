const { I } = inject();

class GoogleImagesPage {

   buttons={
    agree: 'Súhlasím',
    search: 'Hľadať Googlom'
    }
    fields={
    searchField: "Hľadať"  
    }
    navigation={
    all:'Všetko'    
    }
   
   }
    module.exports = new GoogleImagesPage();
     module.exports.GoogleHomePage = GoogleImagesPage;