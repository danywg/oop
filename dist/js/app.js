/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/product-model */ "./src/models/product-model.ts");
/* harmony import */ var _models_recette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/recette */ "./src/models/recette.ts");


/**
 * @name Main
 * @author Aélion - Déc. 2019 - jla.webprojet@gmail.com
 * @package /
 * @version 1.0.0
 * Entry point of the application
 */
const strategy = 3;
const lesCrepes = new _models_recette__WEBPACK_IMPORTED_MODULE_1__["Recette"]('Crêpes');
let produit1 = new _models_product_model__WEBPACK_IMPORTED_MODULE_0__["ProductModel"]();
produit1.setStrategy(strategy);
produit1.setName('Farine');
produit1.setBaseUnit('kg');
produit1.setPrice(1.80);
let produit2 = new _models_product_model__WEBPACK_IMPORTED_MODULE_0__["ProductModel"]();
produit2.setStrategy(strategy);
produit2.setName('Lait');
produit2.setBaseUnit('l');
produit2.setPrice(0.94);
lesCrepes.addProduct(produit1);
lesCrepes.addProduct(produit2);
const lesGauffres = new _models_recette__WEBPACK_IMPORTED_MODULE_1__["Recette"]('Gauffres');
lesGauffres.addProduct(produit1);
console.log(lesCrepes.toString());
console.log(lesGauffres.toString());


/***/ }),

/***/ "./src/models/product-model.ts":
/*!*************************************!*\
  !*** ./src/models/product-model.ts ***!
  \*************************************/
/*! exports provided: ProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return ProductModel; });
/**
 * @name ProductModel
 * @author Aélion - Déc. 2019
 * @version 1.0.0
 * @package models
 */
class ProductModel {
    /**
     *
     * @param strategy number
     *
     * Sets the strategy to display product line
     * Only 1, 2 or 3, fallback to 1
     */
    setStrategy(strategy) {
        if (strategy > 0 && strategy <= 3) {
            this.strategy = strategy;
        }
        else {
            this.strategy = 1; // Fallback
        }
    }
    setName(name) {
        if (this.name == null) {
            this.name = name;
        }
    }
    getName() {
        return this.name.toUpperCase();
    }
    setBaseUnit(baseUnit) {
        this.baseUnit = baseUnit;
    }
    getBaseUnit() {
        return this.baseUnit;
    }
    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    toString() {
        switch (this.strategy) {
            case 1: // Name only
                return this.name;
                break;
            case 2: // Name and price
                return this.name + ' (' + this.price + '€)';
                break;
            case 3: // Name, price and unit
                return this.name + ' (' + this.price + '€) par ' + this.baseUnit;
                break;
        }
    }
}


/***/ }),

/***/ "./src/models/recette.ts":
/*!*******************************!*\
  !*** ./src/models/recette.ts ***!
  \*******************************/
/*! exports provided: Recette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recette", function() { return Recette; });
class Recette {
    constructor(title) {
        this.ingredients = new Array();
        this.title = title;
    }
    addProduct(product) {
        this.ingredients.push(product);
    }
    toString() {
        let theRecette = 'La recette des' + this.title + '\n';
        //Loop over ingredients array
        this.ingredients.forEach((value) => {
            theRecette += value.toString() + '\n';
            //ASA theRecette = theRecette + value.toString()  
        });
        return theRecette;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=app.js.map