import { Recette } from "./models/recette";
import QuantityProduct from "./models/quantity-product";

/**
 * @name Main
 * @author Aélion - Déc. 2019 - jla.webprojet@gmail.com
 * @package /
 * @version 1.0.0
 * Entry point of the application
 */

 const strategy: number = 3;

 const lesCrepes: Recette = new Recette('Crêpes');
 lesCrepes.setQuantity(15);

 let produit1: QuantityProduct = new QuantityProduct();
produit1.setStrategy(strategy);
produit1.setName('Farine');
produit1.setBaseUnit('kg');
produit1.setPrice(1.80);
produit1.setQuantity(300);
produit1.setUnit('g');

let produit2: QuantityProduct = new QuantityProduct();
produit2.setStrategy(strategy);
produit2.setName('Lait');
produit2.setBaseUnit('l');
produit2.setPrice(0.94);
produit2.setQuantity(60);
produit2.setUnit('cl');

let produit3: QuantityProduct = new QuantityProduct();
produit3.setStrategy(strategy);
produit3.setName('Oeufs');
produit3.setBaseUnit('unité');
produit3.setPrice(0.22);
produit3.setQuantity(3);
produit3.setUnit('g');

let produit4: QuantityProduct = new QuantityProduct();
produit4.setStrategy(strategy);
produit4.setName('Sucre');
produit4.setBaseUnit('kg');
produit4.setPrice(0.62);
produit4.setQuantity(5);
produit4.setUnit('g');
produit4.setQuantityUnit(70);

let produit5: QuantityProduct = new QuantityProduct();
produit5.setStrategy(strategy);
produit5.setName('Rhum');
produit5.setBaseUnit('cl');
produit5.setPrice(9.65);
produit5.setQuantity(5);
produit5.setUnit('cl');
produit5.setQuantityUnit(70);

let produit6: QuantityProduct = new QuantityProduct();
produit6.setStrategy(strategy);
produit6.setName('Beurre');
produit6.setBaseUnit('kg');
produit6.setPrice(19.60);
produit6.setQuantity(50);
produit6.setUnit('g');

lesCrepes.addProduct(produit1);
lesCrepes.addProduct(produit2);
lesCrepes.addProduct(produit3);
lesCrepes.addProduct(produit4);
lesCrepes.addProduct(produit5);
lesCrepes.addProduct(produit6);

const lesGauffres: Recette = new Recette('Gauffres');
lesGauffres.addProduct(produit1);

console.log(lesCrepes.toString());
console.log(lesGauffres.toString());
