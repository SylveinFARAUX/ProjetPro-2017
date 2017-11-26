import Personnage from './objects/Personnage';
import AttributCollection from './objects//AttributsCollection';

console.log("WWAE running...");

let p = new Personnage("test", [], "../assets/test.jpg");
let attrCol = new AttributCollection();

console.log(p);
console.log(attrCol);

console.log("valeurs de cheveux : "+attrCol.getValeurs("cheveux"));
console.log("cheveux blond existe : "+attrCol.existsValeur("couleur_cheveux","blond"));
console.log("cheveux violet existe : "+attrCol.existsValeur("couleur_cheveux","violet"));
console.log("attribut pied existe : "+attrCol.existsAttribut("pied"));
console.log("attribut cheveux court : '"+attrCol.createAttribut("cheveux","court").toString()+"'");