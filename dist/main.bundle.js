webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".contentWrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.contentHeader {\r\n  height: 40px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center\r\n}\r\n\r\n.infoContent {\r\n  height: calc(100% - 84px);\r\n  width: 100%;\r\n  background-color: #eee;\r\n  -webkit-box-shadow: 1px 3px 5px #ccc;\r\n  box-shadow: 1px 3px 5px #ccc;\r\n  border-radius: 2px;\r\n}\r\n\r\n.headers {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 44px;\r\n}\r\n\r\n.header {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  font-size: 14px;\r\n  background: #efefef;\r\n  border: 1px solid #ccc;\r\n  border-right: none;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.header:last-child {\r\n    border-right: 1px solid #ccc;\r\n}\r\n\r\n.selected {\r\n  border-top: 2px solid blue;\r\n}\r\n\r\n.login,\r\n.close {\r\n  color: #999;\r\n}\r\n\r\n.close {\r\n  cursor: pointer;\r\n  padding-left: 15px;\r\n}\r\n\r\n.addTrBtn {\r\n  width: 120px;\r\n  padding: 5px;\r\n  outline: none;\r\n  border: 1px solid #ccc;\r\n  color: white;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  margin-right: -105px;\r\n  cursor: pointer;\r\n  background-color: blue;\r\n}\r\n\r\n.formSection {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: space-evenly;\r\n      -ms-flex-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  height: 100%;\r\n}\r\n\r\n.addDetails {\r\n  width: 50%;\r\n  padding: 15px 20px;\r\n  height: 100px;\r\n}\r\n\r\n.addTr {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-size: 14px;\r\n}\r\n\r\n.formInput {\r\n  height: 25px;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n  border-radius: 2px;\r\n}\r\n\r\n.placeHold {\r\n  font-size: 14px;\r\n}\r\n\r\n.dd{\r\n    background: white;\r\n    width: 100px;\r\n    z-index: 10;\r\n    position: absolute;\r\n    top: 150px;\r\n}\r\n\r\n.dd .nameLogin{\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.intro{\r\n    padding: 25px;\r\n}"

/***/ }),

/***/ "./src/app/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='contentWrapper'>\r\n    <section class=\"contentHeader\"> Original Information </section>\r\n    <section class='headers'>\r\n        <section [className]='getClass(item)' *ngFor=\"let item of displayData;let i = index;\" (mouseover)=\"hideDDFn()\">\r\n            <section class='nameLogin' (click)=\"selectItem(item)\">\r\n                <section class='name'>{{item.name}}</section>\r\n                <section class='login'>{{item.login}}</section>\r\n            </section>\r\n            <section class='close' (click)=\"removeItem(i)\">X</section>\r\n        </section>\r\n        <section class='header' *ngIf=\"hiddenData.length\">\r\n            <section class='dropdown' (mouseover)=\"showDDFn($event)\" >{{hiddenData.length}} More </section>\r\n            <section class='dd' #dd *ngIf=\"showDD\">\r\n                <section class='nameLogin' *ngFor=\"let item of hiddenData;let i = index;\" (click)=\"selectItem(item, true)\">\r\n                    <section class='name'>{{item.name}}</section>\r\n                    <section class='login'>{{item.login}}</section>\r\n                </section>\r\n            </section>\r\n            \r\n        </section>\r\n        <section [className]=\"getTranClass()\" (click)=\"showAddTransaction()\" (mouseover)=\"hideDDFn()\">\r\n            <section class=\"transactionHeader\">\r\n                Add Transaction\r\n            </section>\r\n        </section>\r\n    </section>\r\n    <section class='infoContent'>\r\n        <section *ngIf=\"isTransaction\">\r\n            <section class='addDetails'>\r\n                <section class='formSection'>\r\n                    <section class='nameField'>\r\n                        <label class='placeHold'> Name : </label>\r\n                        <input type=\"text\" class='formInput' [(ngModel)]=\"addItem.name\" />\r\n                    </section>\r\n                    <section class='loginField'>\r\n                        <label class='placeHold'> Login : </label>\r\n                        <input type=\"text\" class='formInput' [(ngModel)]=\"addItem.login\" />\r\n                    </section>\r\n                </section>\r\n                <button class='addTrBtn' (click)=\"addItemFn()\">Create</button>\r\n            </section>\r\n        </section>\r\n        <section *ngIf=\"!isTransaction\">\r\n            <section class='intro'>\r\n                Hi {{selectedItem.name}}\r\n            </section>\r\n        </section>\r\n    </section>\r\n</section>"

/***/ }),

/***/ "./src/app/Home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.data = [];
        this.displayData = [];
        this.hiddenData = [];
        this.addItem = {
            name: '',
            login: ''
        };
        this.isTransaction = false;
        this.showDD = false;
        if (!this.data.length) {
            this.isTransaction = true;
        }
        if (localStorage.getItem('twopane')) {
            this.data = JSON.parse(localStorage.getItem('twopane'));
        }
        this.splitObjects();
    }
    HomeComponent.prototype.splitObjects = function () {
        var oldDataCopy = this.data;
        if (localStorage.getItem('twopane')) {
            oldDataCopy = JSON.parse(localStorage.getItem('twopane'));
        }
        this.displayData = this.data.splice(0, 3);
        this.hiddenData = this.data;
    };
    HomeComponent.prototype.selectItem = function (item, isselectedFromDD) {
        this.isTransaction = false;
        this.addItem = {
            name: '',
            login: ''
        };
        this.selectedItem = item;
        if (isselectedFromDD) {
            var oldDataCopy = this.data;
            if (localStorage.getItem('twopane')) {
                oldDataCopy = JSON.parse(localStorage.getItem('twopane'));
            }
            var resuffleIndex = oldDataCopy.findIndex(function (val) { return val.name === item.name; });
            var spliced = oldDataCopy.splice(0, resuffleIndex);
            this.data = [item].concat(spliced, oldDataCopy.slice(1));
            localStorage.setItem('twopane', JSON.stringify(this.data));
            this.displayData = this.data.splice(0, 3);
            this.hiddenData = this.data;
        }
    };
    HomeComponent.prototype.addItemFn = function () {
        if (this.validateNewObj()) {
            var newCopy = JSON.parse(JSON.stringify(this.addItem));
            var oldDataCopy = {};
            if (localStorage.getItem('twopane')) {
                oldDataCopy = JSON.parse(localStorage.getItem('twopane'));
            }
            else {
                oldDataCopy = JSON.parse(JSON.stringify(this.data));
            }
            this.data = [newCopy].concat(oldDataCopy);
            localStorage.setItem('twopane', JSON.stringify(this.data));
            this.splitObjects();
        }
    };
    HomeComponent.prototype.validateNewObj = function () {
        if (!this.addItem.name || this.addItem.name.trim().length < 1) {
            alert('Enter a valid name');
            return false;
        }
        else if (!this.addItem.login || this.addItem.login.trim().length < 1) {
            alert('Enter a valid login');
            return false;
        }
        return true;
    };
    HomeComponent.prototype.removeItem = function (i) {
        var oldDataCopy = {};
        if (localStorage.getItem('twopane')) {
            oldDataCopy = JSON.parse(localStorage.getItem('twopane'));
        }
        else {
            oldDataCopy = JSON.parse(JSON.stringify(this.data));
        }
        oldDataCopy.splice(i, 1);
        this.displayData = oldDataCopy.splice(0, 3);
        this.hiddenData = oldDataCopy;
        localStorage.setItem('twopane', JSON.stringify(this.displayData.concat(this.hiddenData)));
    };
    HomeComponent.prototype.showAddTransaction = function () {
        this.isTransaction = true;
    };
    HomeComponent.prototype.getTranClass = function () {
        return (this.isTransaction) ? 'addTr header selected' : 'addTr header';
    };
    HomeComponent.prototype.getClass = function (item) {
        return (item === this.selectedItem) ? 'header selected' : 'header';
    };
    HomeComponent.prototype.showDDFn = function (event) {
        this.showDD = true;
    };
    HomeComponent.prototype.hideDDFn = function () {
        this.showDD = false;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pane',
            template: __webpack_require__("./src/app/Home/home.component.html"),
            styles: [__webpack_require__("./src/app/Home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".appHeader{\r\n    border-bottom: 1px solid #ccc;\r\n    vertical-align: middle;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 50px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-left: 25px;\r\n}\r\n.content{\r\n    height: 70%;\r\n    padding: 20px 25px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.contentWrapper{\r\n    width: calc(50% - 14px);\r\n    margin-right: 14px;\r\n}\r\n.contentHeader{\r\n    height: 40px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center\r\n}\r\n.infoContent{\r\n    height: calc(100% - 40px);\r\n    width: 100%;\r\n    background-color: #eee;\r\n    -webkit-box-shadow: 1px 3px 5px #ccc;\r\n            box-shadow: 1px 3px 5px #ccc;\r\n    border-radius: 2px\r\n}\r\n.buttonSet{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0 25px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.buttonSet button{\r\n    width: 120px;\r\n    padding: 5px;\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    color: white;\r\n    border-radius: 2px;\r\n}\r\n.rejectBtn{\r\n    background-color: orangered;\r\n}\r\n.submitBtn{\r\n    background-color: green;\r\n}\r\n.appPane{\r\n    width: 50%;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class='appHeader'>\n  Home\n</header>\n<section class='content'>\n  <section class='contentWrapper'>\n    <section class=\"contentHeader\"> Original Information </section>\n    <section class='infoContent'></section>\n  </section>\n  <app-pane class=\"appPane\"></app-pane>\n</section>\n<section class='buttonSet'>\n  <button class='rejectBtn'> Reject </button>\n  <button class='submitBtn'> Submit </button>\n</section>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_home_component__ = __webpack_require__("./src/app/Home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__Home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map