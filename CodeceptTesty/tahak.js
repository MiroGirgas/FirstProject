const myConst = 'My const string'; //nadefinovaná konštanta, do ktorej nejde zapisovať/prepisovať/nejde ju meniť, ani do nej nič nové ukladať (je to tak, ako som povedala a už s tým nič neurobíš)
let myLet = 'My let string'; //nadefinovaná premenná, tu je možné meniť jej hodnotu

console.log(myConst); // vypisujem hodnotu konštanty, takže bez zátvoriek
console.log(myLet); // vypisujem hodnotu premennej, takže bez zátvoriek

function sayHello(name){ // zadefinovanie funkcie
	return 'Hello' + name;
}
/*
- je to funkcia (keďže nie je v classe) s jedným parametrom
- nezabúdam, že funkcia má svoje telo, ktoré je v {} a všetko čo je v tele, sa potom vykoná po zavolaní funkcie (takže ak niečo natrepem mimo, tak to bude mimo a nevykoná sa to)
volá sa takto: 
	sayHello('Miroslav');

- ak volám funkciu, zapisujem ju syntaxovo rovnako ako je zadefinovaná, takže použijem názov funkcie a guľaté zátvorky, do ktorých nastrkám hodnoty parametrov
*/

class myClass{ // nadefinovaná class s názvom myClass, je to objekt (takže si to predstavujem ako stromovú štruktúru)

	myButtons = { // nadefinovaný objekt myButtons v classe myClass, obsahuje mnou vytvorený "zoznam" tlačítok
		search: '#search',
		agree: '#agree'
	}

	myFields = { // nadefinovaný objekt myFields v classe myClass, obsahuje mnou vytvorený "zoznam" políčok
		firstName: '#firstName'
		lastName: '#lastName'
	}

	sayHello(name){ // metóda!! (je súčasťou classy a nemá pred sebou slovo "class"), inak rovnaká omáčka ako u funkcie
		return 'Hello' + name;
	}
}

/*
- aby som sa ku prvkom/atributom classy dostal (cez bodky), je potrebné ju na konci súboru vždy exportovať
- pamätám si, že mi treba urobiť inštanciu ("kópiu classy s ktorou budem pracovať") a capnúť tieto 2 riadky:
	module.exports = new myClass();
	module.exports.myClass = myClass;

- metódy a ďalšie podobjekty z classy vyťahujem cez stromovú štruktúru pomocou bodiek a teda:
	myClass.myButtons.search;
	myClass.myFields.lastName; --> volám reprezentovaný element, takže nasucho bez zátvoriek
	myClass.sayHello('Miroslav'); --> volám metódu, takže guľaté zátvorky
*/

