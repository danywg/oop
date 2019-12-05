import { ProductModel } from "./product-model";
import { ConvertHelper } from "./../helpers/convert-helpers";

/**
 * @ QuantityProduct
 * @autohr Aélion - Déc. 2019
 * @package models
 * @version 1.0.0
 * 
 * Specify quantities and unit of a product for a receipe
 */

 export default class QuantityProduct extends ProductModel {
     /**
      * @var number
      * 
      * Required quantity of the product for the receipe
      */

      private quantity: number;

      /**
       * @var string
       * 
       * unit for the quantity
       */
      private unit: string;

      private unitPrice: string;

      /**
       * 
       * @var number
       * Pricing of the product for a receipe
       * 
       */
     
      public setQuantity(quantity: number): void {
          this.quantity = quantity;
      }
      public setUnit(unit: string): void {
          this.unit = unit;
      } 

      private setUnitPrice(): void {
          const convertedQuantity: number = ConvertHelper.weight(this.baseUnit,this.unit,this.quantity)

      }
 }
