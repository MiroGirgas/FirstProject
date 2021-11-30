//Kazdy page object pouziva I, najprv ho musis nainjectovat
//Page objecty su reprezentovane classami
const { I } = inject();

class GoogleHomePage {

/*1 page object/classa reprezentuje 1 stranku na webe
Classa je rozdelena na specificku strukturu, v classe definujem typy elementov a ich metody*/
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
module.exports = new GoogleHomePage();
//object javascriptu>do objectu si ulozim instanciu svojej classy 'GoogleHomePage'
module.exports.GoogleHomePage = GoogleHomePage;
//ulozi do noveho objectu v ramci module.exports
//Nezabudnut to tam pridat, inak to nevidi nikto + do codecept.conf.js pridat do include