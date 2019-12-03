import { ProductModel } from "./models/product-model";
import { Recette } from "./models/recette";

/**
 * @name Main
 * @author Aélion - Déc. 2019 - jla.webprojet@gmail.com
 * @package /
 * @version 1.0.0
 * Entry point of the application
 */

 const strategy: number = 3;

 const lesCrepes: Recette = new Recette('Crêpes');

 let produit1: ProductModel = new ProductModel();
produit1.setStrategy(strategy);
produit1.setName('Farine');
produit1.setBaseUnit('kg');
produit1.setPrice(1.80);

let produit2: ProductModel = new ProductModel();
produit2.setStrategy(strategy);
produit2.setName('Lait');
produit2.setBaseUnit('l');
produit2.setPrice(0.94);

lesCrepes.addProduct(produit1);
lesCrepes.addProduct(produit2);

const lesGauffres: Recette = new Recette('Gauffres');
lesGauffres.addProduct(produit1);

console.log(lesCrepes.toString());
console.log(lesGauffres.toString());
