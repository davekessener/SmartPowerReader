(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_home_pages_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/pages/home-page.component */ "./src/app/modules/home/pages/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _modules_home_pages_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: '*', component: _modules_home_pages_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header xmlns=\"http://www.w3.org/1999/html\"></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>\n\n\n<!-- Custom modal setup -->\n<div id=\"modal-wrapper\" class=\"modal-wrapper\">\n  <div id=\"modal-background\" class=\"modal-background\" (click)=\"closeModal()\" style=\"visibility: hidden\"></div>\n\n  <div class=\"d-flex align-items-center justify-content-center h-100 modal-subwrapper\">\n    <div id=\"modal-container\" style=\"visibility: hidden\">\n      <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, router) {
        this.modalService = modalService;
        this.router = router;
        this.title = 'Smart Power Reader';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            _this.isOnHomepage = _this.router.url === '/';
        });
    };
    AppComponent.prototype.closeModal = function () {
        this.modalService.destroy();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _modules_home_components_side_bar_adding_adding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/home/components/side-bar/adding/adding.component */ "./src/app/modules/home/components/side-bar/adding/adding.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _modules_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [
                _modules_home_components_side_bar_adding_adding_component__WEBPACK_IMPORTED_MODULE_5__["AddingComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bg-white\">\n  <div class=\"row justify-content-between\">\n    <div class=\"col-auto\">\n      <!--<select class=\"custom-select\" (change)=\"setLanguage($event.target.value)\">-->\n        <!--<option *ngFor=\"let lang of languages\"-->\n                <!--[value]=\"lang.code\" [selected]=\"lang.code === this.languageService.getLanguage()\">{{ lang.label }}</option>-->\n      <!--</select>-->\n    </div>\n\n    <div class=\"col-auto\">\n      <ul class=\"nav  ml-auto w-100 justify-content-end\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link navbar_item_link\" data-toggle=\"collapse\" data-target=\"#footerNavbar\" routerLink=\"/abouts\">About us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link navbar_item_link\" data-toggle=\"collapse\" data-target=\"#footerNavbar\" routerLink=\"/faq\">FAQ</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link navbar_item_link\" data-toggle=\"collapse\" data-target=\"#footerNavbar\" routerLink=\"/contacts\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link navbar_item_link\" data-toggle=\"collapse\" data-target=\"#footerNavbar\" routerLink=\"/policies\">Policy</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n  height: 50px;\n  width: 50px; }\n\n.nav-item {\n  padding-left: 15px; }\n\n.logo {\n  margin-right: 10px; }\n\n.buttonFooter {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 20px;\n  right: 20px; }\n\nfooter {\n  border-top: 1px solid #e4e4e4;\n  height: 100px;\n  padding: 20px 10px; }\n\nfooter a {\n    text-decoration: none;\n    color: #333; }\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"top-navbar navbar navbar-light navbar-expand-md bg-faded justify-content-center\" id=\"top-navbar\">\n  <a class=\"navbar-brand mr-auto navtop-brand d-flex align-items-center\" href=\"#\" id=\"navtop-brand\">\n    <div class=\"smart-power-reader-logo\"></div>\n    <div>Smart Power Reader</div>\n  </a>\n  <div class=\"navbar-collapse collapse w-100\" id=\"topnavbar\">\n    <ul class=\"nav navbar-nav ml-auto w-100 justify-content-end\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link navtop-item-link\" (click)=\"logout()\">\n          Logout\n        </a>\n\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"top-navbar-padder\"></div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.nav-link {\n  color: white; }\n\n.nav-item {\n  padding-left: 5px; }\n\n.top-navbar {\n  height: 81px;\n  background: #ffffff;\n  border-bottom: 1px solid #e4e4e4;\n  box-shadow: none !important; }\n\n.top-navbar .smart-power-reader-logo {\n    content: '';\n    background: url('smart-power-reader.jpg') no-repeat;\n    background-size: auto 50px;\n    background-position: center center;\n    width: 100px;\n    float: left;\n    height: 50px; }\n\n.top-navbar .navbar-brand {\n    color: #333; }\n\n.avatar {\n  width: 50px;\n  height: 50px; }\n\n.navbar-brand img {\n  width: auto;\n  height: 50px !important; }\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/main-content/filter-bar/filter-bar.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/home/components/main-content/filter-bar/filter-bar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-container\" *ngIf=\"!isLoading\">\n  <div class=\"row mt-4\" [formGroup]=\"form\">\n    <div class=\"col-3\">\n      <select name=\"option\" class=\"form-control col-10\" formControlName=\"selectedDevice\">\n        <!--<option value=\"0\">{{folder.name}}</option>-->\n        <option *ngFor=\"let device of deviceList; let i = index\" [value]=\"device\" [selected]=\"i == 0\">\n          {{device}}\n        </option>\n      </select>\n\n      <button type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"!isFormValid\" class=\"submit-button mt-4\">Show</button>\n    </div>\n    <div class=\"col\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"row vertical-align\">\n            <div class=\"col-2 pl-0 header\">From</div>\n            <div class=\"col-6\">\n              <div class=\"input-group from align-items-center\">\n                <input class=\"form-control\" id=\"startDate\"\n                       (click)=\"activeHover('from')\"\n                       placeholder=\"yyyy-mm-dd\"\n                       name=\"startDate\"\n                       formControlName=\"startDate\"\n                       ngbDatepicker\n                       #startDate=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"startDate.toggle();activeHover('from')\" type=\"button\">\n                    <img src=\"../../../../../../assets/img/svg/calendar-icon.svg\"\n                         style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n                  </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 input-field inline\">\n              <input align=\"middle\" formControlName=\"startTime\" type=\"time\" onlyPM='true'>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-6\">\n          <div class=\"row vertical-align\">\n            <div class=\"col-2 header\">To</div>\n            <div class=\"col-6\">\n              <div class=\"input-group align-items-center\">\n                <input class=\"form-control\" id=\"endDate\"\n                       placeholder=\"yyyy-mm-dd\"\n                       formControlName=\"endDate\"\n                       ngbDatepicker\n                       #endDate=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"endDate.toggle()\" type=\"button\">\n                    <img src=\"../../../../../../assets/img/svg/calendar-icon.svg\"\n                         style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n                  </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 \">\n              <input align=\"middle\" formControlName=\"endTime\" type=\"time\" onlyPM=\"true\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mt-4 justify-content-between\">\n        <button class=\"filter-button\" type=\"button\" (click)=\"selectDate()\">Today</button>\n        <button class=\"filter-button\" type=\"button\" (click)=\"selectDate(-1)\">Yesterday</button>\n        <button class=\"filter-button\" type=\"button\" (click)=\"selectWeek(-1, -1)\">Last week</button>\n        <button class=\"filter-button\" type=\"button\" (click)=\"selectMonth()\">This month</button>\n        <button class=\"filter-button\" type=\"button\" (click)=\"selectMonth(-1, -1)\">Last month</button>\n        <button class=\"filter-button\" type=\"button\" (click)=\"selectMonth(-3, -1)\">Last 3 months</button>\n        <button class=\"filter-button\" type=\"button\" (click)=\"selectYear()\">This year</button>\n        <button class=\"filter-button\" type=\"button\" (click)=\"selectYear(-1)\">Last Year</button>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/home/components/main-content/filter-bar/filter-bar.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/home/components/main-content/filter-bar/filter-bar.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 25px; }\n\ninput[type=\"time\"] {\n  display: inline-block;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid black;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  box-shadow: 0 0 0.75rem #e4e4e4; }\n\n.input-group {\n  border: 1px solid black;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  box-shadow: 0 0 0.75rem #e4e4e4; }\n\n.input-group .btn-outline-secondary {\n    border-right: 0;\n    border-bottom: 0;\n    border-top: 0; }\n\n.input-group .form-control {\n    border: none; }\n\n.input-group .form-control:focus {\n    border-right: 1px solid black;\n    box-shadow: none; }\n\n.input-group > .form-control:focus {\n  box-shadow: 0px 0px 1px 3px #448bfc; }\n\n.submit-button {\n  height: 35px;\n  width: 100px;\n  background-color: #009688;\n  color: white;\n  border-radius: 3px; }\n\n.submit-button:disabled {\n  background-color: #929396; }\n\n.filter-button {\n  height: 35px;\n  border: 1px solid black;\n  background-color: #E8E8E8;\n  border-radius: 3px;\n  box-shadow: 0 0 0.75rem #e4e4e4; }\n\ninput[type=\"time\"]:focus {\n  border-color: black;\n  box-shadow: 0px 0px 1px 3px #448bfc; }\n\n.filter-button :hover, .filter-button :focus {\n  box-shadow: 0px 0px 1px 3px #448bfc; }\n"

/***/ }),

/***/ "./src/app/modules/home/components/main-content/filter-bar/filter-bar.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/home/components/main-content/filter-bar/filter-bar.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FilterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBarComponent", function() { return FilterBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-date-math */ "./node_modules/@progress/kendo-date-math/dist/es/main.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterBarComponent = /** @class */ (function () {
    function FilterBarComponent() {
        this.onChangedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deviceList = [];
    }
    FilterBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.now = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        var todayArr = this.now.split('-');
        var today = {
            year: +todayArr[0],
            month: +todayArr[1],
            day: +todayArr[2]
        };
        console.log('today', today);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](today),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](today),
            selectedDevice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('00:00'),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('23:59')
        });
        this.deviceList.push('Parent');
        this.deviceList.push('child1');
        this.deviceList.push('child2');
        this.deviceList.push('child3');
        this.form.controls['selectedDevice'].setValue(this.deviceList[0], { onlySelf: true });
        var raw = this.form.getRawValue();
        this.startTime = this.combineToDate(raw.startDate, raw.startTime);
        this.endTime = this.combineToDate(raw.endDate, raw.endTime);
        this.isFormValid = this.startTime < this.endTime;
        this.isLoading = false;
        this.form.valueChanges.subscribe(function (data) {
            var rawValue = _this.form.getRawValue();
            _this.startTime = _this.combineToDate(rawValue.startDate, rawValue.startTime);
            _this.endTime = _this.combineToDate(rawValue.endDate, rawValue.endTime);
            _this.isFormValid = _this.startTime < _this.endTime;
        });
    };
    FilterBarComponent.prototype.onSubmit = function () {
        this.onChangedValue.emit(this.form.getRawValue());
    };
    FilterBarComponent.prototype.selectDate = function (offset) {
        if (offset === void 0) { offset = 0; }
        var date = this.convertDateToHashMap(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), offset));
        this.form.controls['startDate'].setValue(date);
        this.form.controls['endDate'].setValue(date);
    };
    FilterBarComponent.prototype.selectWeek = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = 0; }
        var fromWeek = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["firstDayInWeek"])(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), from), _progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["Day"].Monday);
        var toWeek = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addDays"])(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["firstDayInWeek"])(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), to), _progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["Day"].Monday), 6);
        var startDate = this.convertDateToHashMap(fromWeek);
        var endDate = this.convertDateToHashMap(toWeek);
        this.form.controls['startDate'].setValue(startDate);
        this.form.controls['endDate'].setValue(endDate);
    };
    FilterBarComponent.prototype.selectMonth = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = 0; }
        var fromMonth = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addMonths"])(new Date(), from);
        var toMonth = Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["addMonths"])(new Date(), to);
        var startDate = this.convertDateToHashMap(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["firstDayOfMonth"])(fromMonth));
        var endDate = this.convertDateToHashMap(Object(_progress_kendo_date_math__WEBPACK_IMPORTED_MODULE_3__["lastDayOfMonth"])(toMonth));
        this.form.controls['startDate'].setValue(startDate);
        this.form.controls['endDate'].setValue(endDate);
    };
    FilterBarComponent.prototype.selectYear = function (num) {
        if (num === void 0) { num = 0; }
        var year = new Date().getFullYear() + num;
        var startYear = this.convertDateToHashMap(new Date(year, 0, 1));
        var endYear = this.convertDateToHashMap(new Date(year, 11, 31));
        this.form.controls['startDate'].setValue(startYear);
        this.form.controls['endDate'].setValue(endYear);
    };
    FilterBarComponent.prototype.convertDateToHashMap = function (date) {
        var dateString = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'yyyy-MM-dd', 'en');
        var dateArr = dateString.split('-');
        return {
            year: +dateArr[0],
            month: +dateArr[1],
            day: +dateArr[2]
        };
    };
    FilterBarComponent.prototype.combineToDate = function (dateHashMap, time) {
        var date = new Date(dateHashMap.year, dateHashMap.month - 1, dateHashMap.day, +time.substr(0, 2), +time.substr(3, 2));
        return date;
    };
    FilterBarComponent.prototype.activeHover = function (className) {
        console.log(document.getElementsByClassName('input-group ' + className).item(0));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterBarComponent.prototype, "folder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilterBarComponent.prototype, "onChangedValue", void 0);
    FilterBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-bar',
            template: __webpack_require__(/*! ./filter-bar.component.html */ "./src/app/modules/home/components/main-content/filter-bar/filter-bar.component.html"),
            styles: [__webpack_require__(/*! ./filter-bar.component.scss */ "./src/app/modules/home/components/main-content/filter-bar/filter-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterBarComponent);
    return FilterBarComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoading\" class=\"row mt-4 graph-wrapper\">\n    <ngx-charts-line-chart\n            class=\"mt-3\"\n            [results]=\"results\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [roundDomains]=\"roundDomains\"\n            [autoScale]=\"autoScale\"\n            [xAxisTickFormatting]=\"isLessThan3Days ? axisFormatTime :axisFormatDate\">\n        <!--<ng-template #tooltipTemplate let-model=\"model\">-->\n        <!--<div >{{model.series}}</div>-->\n        <!--<div >{{model.name | date: isLessThan3Days ? 'MMM dd HH:mm' : 'MMM dd yy' }}</div>-->\n        <!--<div >{{model.value}}</div>-->\n        <!--</ng-template>-->\n        <ng-template #tooltipTemplate let-model=\"model\">\n            <div class=\"area-tooltip-container\">\n                <!--<div *ngFor=\"let tooltipItem of model | json \" class=\"tooltip-item\" style=\"text-align: center;\">-->\n                <a style=\" font-size: 1.2em; color: deepskyblue;\">{{model.series}}</a><br/>\n                <!--<a *ngIf=\"isLessThan3Days\" style=\" font-size: 1.2em;\"><br />{{model.name | date: 'HH:mm'}}</a>-->\n                <!--<a *ngIf=\"isLessThan3Days\" style=\" font-size: 1.3em; font-weight: 600;\"><br />&#183;</a><br />-->\n                <!--<a style=\" font-size: 1.2em; font-weight: 600;\">{{model.name | date: 'dd.MM.yyyy'}} &#183; </a>-->\n                <a>{{model.name | date: isLessThan3Days ? 'MMM dd HH:mm' : 'MMM dd yy' }}</a><br/>\n                <a style=\" font-size: 1em; font-weight: 600;\">{{model.value | number: '1.5'}}</a>\n                <!--</div>-->\n            </div>\n        </ng-template>\n\n        <!--<ng-template #seriesTooltipTemplate let-model=\"model\">-->\n\n\n        <!--</ng-template>-->\n    </ngx-charts-line-chart>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-wrapper {\n  overflow: scroll;\n  height: calc(100vh - 81px - 100px - 100px); }\n  .graph-wrapper ngx-charts-legend {\n    margin-left: 20px !important; }\n"

/***/ }),

/***/ "./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: GraphSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphSummaryComponent", function() { return GraphSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sensor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/sensor.service */ "./src/app/modules/home/services/sensor.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/constants */ "./src/app/modules/home/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraphSummaryComponent = /** @class */ (function () {
    function GraphSummaryComponent(sensorService) {
        this.sensorService = sensorService;
        this.results = [];
        this.isLoading = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Number';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Color Value';
        this.roundDomains = true;
        this.autoScale = true;
        this.ticks = [];
        this.indexTicks = [];
        this.simpleTicks = [];
        this.isLessThan3Days = false;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
    }
    GraphSummaryComponent.prototype.ngOnInit = function () {
    };
    GraphSummaryComponent.prototype.drawGraph = function (selectedDeviceId, from, to) {
        var _this = this;
        this.isLoading = true;
        this.isLessThan3Days = false;
        // console.log('selectedDeviceId', selectedDeviceId, from, to);
        var params = {
            action: _constants_constants__WEBPACK_IMPORTED_MODULE_3__["actionGetMeasurement"],
            id: selectedDeviceId ? selectedDeviceId : 'test-123',
            from: from,
            to: to,
            count: 100
        };
        this.sensorService.getData(params).subscribe(function (res) {
            _this.results = [];
            // console.log('response from server', res);
            _this.results.push({
                id: params.id,
                name: params.id,
                series: res
            });
            _this.results.forEach(function (result) {
                result.series = result.series.map(function (s) { return ({
                    name: s.timestamp,
                    value: s.value
                }); });
                result.series.sort(function (a, b) { return a.name < b.name ? 1 : (a.name > b.name ? 1 : 0); });
            });
            _this.isLessThan3Days = to - from <= 86340000 * 3;
            var count = 0;
            // for (let i = 0; i < data.length; i++) {
            _this.results.forEach(function (sensor) {
                sensor.series.forEach(function (val) {
                    count++;
                });
            });
            _this.isLoading = false;
            _this.indexTicks = JSON.parse(JSON.stringify(_this.indexTicks));
        });
    };
    GraphSummaryComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function (_) {
            window.dispatchEvent(new Event('resize'));
        }); // BUGFIX:
    };
    GraphSummaryComponent.prototype.axisFormatDate = function (val) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(val), 'MMM  yyyy', 'en');
    };
    GraphSummaryComponent.prototype.axisFormatTime = function (val) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(val), 'MMM dd HH:mm', 'en');
    };
    GraphSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-graph-summary',
            template: __webpack_require__(/*! ./graph-summary.component.html */ "./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.html"),
            styles: [__webpack_require__(/*! ./graph-summary.component.scss */ "./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_sensor_service__WEBPACK_IMPORTED_MODULE_1__["SensorService"]])
    ], GraphSummaryComponent);
    return GraphSummaryComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/main-content/main-content.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/components/main-content/main-content.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <app-filter-bar (onChangedValue)=\"onChangedValue($event)\"></app-filter-bar>\n    <app-graph-summary></app-graph-summary>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/home/components/main-content/main-content.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/components/main-content/main-content.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/home/components/main-content/main-content.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/home/components/main-content/main-content.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _graph_summary_graph_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph-summary/graph-summary.component */ "./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent.prototype.onChangedValue = function (data) {
        console.log('from', this.convertToDate(data['startDate'], data['startTime']));
        console.log('end', this.convertToDate(data['endDate'], data['endTime']));
        this.from = this.convertToDate(data['startDate'], data['startTime']).valueOf();
        this.to = this.convertToDate(data['endDate'], data['endTime']).valueOf();
        this.graphSummaryComponent.drawGraph(null, this.from, this.to);
    };
    MainContentComponent.prototype.convertToDate = function (date, time) {
        var year = date.year;
        var month = date.month;
        var day = date.day;
        var timeArr = time.split(':');
        var hour = +timeArr[0];
        var minute = +timeArr[1];
        return new Date(year, month - 1, day, hour, minute);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_graph_summary_graph_summary_component__WEBPACK_IMPORTED_MODULE_1__["GraphSummaryComponent"]),
        __metadata("design:type", _graph_summary_graph_summary_component__WEBPACK_IMPORTED_MODULE_1__["GraphSummaryComponent"])
    ], MainContentComponent.prototype, "graphSummaryComponent", void 0);
    MainContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/modules/home/components/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/modules/home/components/main-content/main-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/side-bar/adding/adding.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/home/components/side-bar/adding/adding.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\n  <div class=\"header text-center\">Add device</div>\n  <div class=\"body\">\n    <div class=\"row justify-content-between vertical-align\">\n      <div class=\"first-column\">\n        <div class=\"input-group mt-2 align-items-center\">\n          <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  Server\n                </span>\n          </div>\n          <div class=\"input-form\">\n            <input type=\"text\" class=\"form-control\" id=\"server\" formControlName=\"server\">\n          </div>\n          <a class=\"col-1\" (click)=\"loadServer()\">\n            <i *ngIf=\"!isLoadedLink; else isLoadingUrl\" class=\"fas fa-redo fa-flip-horizontal\"></i>\n            <ng-template #isLoadingUrl>\n              <i class=\"loading-icon fa fa-circle-o-notch fa-spin\"></i>\n            </ng-template>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"second-column\">\n        <div class=\"input-group mt-2 align-items-center\">\n          <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  Name\n                </span>\n          </div>\n          <input type=\"text\" class=\"form-control\" id=\"serverName\" formControlName=\"serverName\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row justify-content-between vertical-align mt-2\">\n      <div class=\"first-column\">\n        <div class=\"input-group mt-2 align-items-center\">\n          <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  DeviceID\n                </span>\n          </div>\n          <div class=\"input-form\">\n            <select name=\"option\" class=\"form-control\" formControlName=\"deviceId\">\n              <option *ngFor=\"let sensor of sensorsInfo; let i = index\" [value]=\"sensor.id\">\n                {{sensor.id}}\n              </option>\n            </select>\n            <!--<input type=\"text\" class=\"form-control\" id=\"deviceID\" formControlName=\"deviceID\">-->\n          </div>\n        </div>\n      </div>\n\n      <div class=\"second-column\">\n        <div class=\"input-group mt-2 align-items-center\">\n          <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  Name\n                </span>\n          </div>\n          <input type=\"text\" class=\"form-control\" id=\"deviceName\" formControlName=\"deviceName\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row justify-content-between vertical-align mt-2\">\n      <div class=\"first-column\">\n        <div class=\"input-group mt-2 align-items-center\">\n          <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  Folder\n                </span>\n          </div>\n          <div class=\"input-form\">\n            <input type=\"text\" class=\"form-control\" id=\"folderName\" formControlName=\"folderName\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"second-column\">\n        <div class=\"input-group mt-2 align-items-center\">\n          <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  Period\n                </span>\n          </div>\n          <input type=\"number\" class=\"form-control\" id=\"period\" formControlName=\"period\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"footer mt-4\">\n    <div class=\"row justify-content-between\">\n      <button type=\"button\" class=\"cancel-button\" (click)=\"close()\">Cancel</button>\n      <button type=\"button\" class=\"save-button\" [disabled]=\"!isFormValid()\" (click)=\"save()\">Save</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/home/components/side-bar/adding/adding.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/home/components/side-bar/adding/adding.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 30px;\n  font-weight: bold; }\n\n.row {\n  margin-left: 0;\n  margin-right: 0;\n  width: 650px; }\n\n.row .first-column {\n    width: 400px; }\n\n.row .first-column .input-group-prepend {\n      width: 90px !important; }\n\n.row .first-column .input-form {\n      width: 275px; }\n\n.row .second-column .form-control {\n    width: 150px; }\n\n.form-control {\n  border-radius: 0.25rem !important; }\n\n.cancel-button {\n  background-color: #cc1c35;\n  color: white; }\n\n.save-button {\n  background-color: #009688;\n  color: white; }\n\nbutton {\n  width: 100px;\n  height: 35px;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 0 0.75rem #e4e4e4; }\n"

/***/ }),

/***/ "./src/app/modules/home/components/side-bar/adding/adding.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/home/components/side-bar/adding/adding.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingComponent", function() { return AddingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _services_sensor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/sensor.service */ "./src/app/modules/home/services/sensor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddingComponent = /** @class */ (function () {
    function AddingComponent(modalService, sensorService) {
        this.modalService = modalService;
        this.sensorService = sensorService;
        this.isLoadedLink = false;
        this.sensorsInfo = [];
    }
    AddingComponent.prototype.ngOnInit = function () {
        this.isLoadedLink = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            server: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            serverName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            deviceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            deviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            folderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            period: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)])
        });
    };
    AddingComponent.prototype.close = function () {
        this.modalService.destroy();
    };
    AddingComponent.prototype.loadServer = function () {
        var _this = this;
        this.isLoadedLink = false;
        this.sensorService.getAllSenors().subscribe(function (res) {
            console.log('getAllSensors response from serve', res);
            _this.sensorsInfo = res;
            _this.isLoadedLink = true;
        });
    };
    AddingComponent.prototype.save = function () {
        var formValue = this.form.getRawValue();
        var newValues = {
            id: formValue.deviceId,
            name: formValue.deviceName,
            period: formValue.period
        };
        this.sensorService.updateSensors(newValues).subscribe(function (res) {
            console.log('updateSensors response from server', res);
        });
    };
    AddingComponent.prototype.isFormValid = function () {
        return !this.form.invalid;
    };
    AddingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./adding.component.html */ "./src/app/modules/home/components/side-bar/adding/adding.component.html"),
            styles: [__webpack_require__(/*! ./adding.component.scss */ "./src/app/modules/home/components/side-bar/adding/adding.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _services_sensor_service__WEBPACK_IMPORTED_MODULE_3__["SensorService"]])
    ], AddingComponent);
    return AddingComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/side-bar/side-bar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/side-bar/side-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\n  <div class=\"top-header row\">\n    <div class=\"col text-right\">\n      <button type=\"button\" class=\"add-button mt-3 mr-2\" (click)=\"addToSideBar()\">+</button>\n\n    </div>\n  </div>\n  <div class=\"side-navbar row mt-2\">\n    asdad\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/home/components/side-bar/side-bar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/side-bar/side-bar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-wrapper {\n  min-height: calc(100vh - 81px - 100px + 70px);\n  border-right: 1px solid #e4e4e4; }\n\n.add-button {\n  background-color: #009688;\n  border-radius: 100%;\n  padding: 5px 13px;\n  color: white; }\n\n.row {\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/modules/home/components/side-bar/side-bar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/home/components/side-bar/side-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _adding_adding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adding/adding.component */ "./src/app/modules/home/components/side-bar/adding/adding.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(modalService) {
        this.modalService = modalService;
        this.currentIndex = -1;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.addToSideBar = function () {
        this.modalService.init(_adding_adding_component__WEBPACK_IMPORTED_MODULE_2__["AddingComponent"], {}, {});
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/modules/home/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/modules/home/components/side-bar/side-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/constants/constants.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/constants/constants.ts ***!
  \*****************************************************/
/*! exports provided: actionGetMeasurement, actionGetSensors, actionUpdateSensor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionGetMeasurement", function() { return actionGetMeasurement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionGetSensors", function() { return actionGetSensors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionUpdateSensor", function() { return actionUpdateSensor; });
var actionGetMeasurement = 'query-measurement';
var actionGetSensors = 'query-devices';
var actionUpdateSensor = 'put-device';


/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page.component */ "./src/app/modules/home/pages/home-page.component.ts");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/modules/home/components/side-bar/side-bar.component.ts");
/* harmony import */ var _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-content/main-content.component */ "./src/app/modules/home/components/main-content/main-content.component.ts");
/* harmony import */ var _components_side_bar_adding_adding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/side-bar/adding/adding.component */ "./src/app/modules/home/components/side-bar/adding/adding.component.ts");
/* harmony import */ var _components_main_content_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main-content/filter-bar/filter-bar.component */ "./src/app/modules/home/components/main-content/filter-bar/filter-bar.component.ts");
/* harmony import */ var _components_main_content_graph_summary_graph_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main-content/graph-summary/graph-summary.component */ "./src/app/modules/home/components/main-content/graph-summary/graph-summary.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_sensor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/sensor.service */ "./src/app/modules/home/services/sensor.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                amazing_time_picker__WEBPACK_IMPORTED_MODULE_10__["AmazingTimePickerModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"]
            ],
            declarations: [
                _pages_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
                _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"],
                _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_5__["MainContentComponent"],
                _components_side_bar_adding_adding_component__WEBPACK_IMPORTED_MODULE_6__["AddingComponent"],
                _components_main_content_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_7__["FilterBarComponent"],
                _components_main_content_graph_summary_graph_summary_component__WEBPACK_IMPORTED_MODULE_8__["GraphSummaryComponent"]
            ],
            providers: [
                _services_sensor_service__WEBPACK_IMPORTED_MODULE_12__["SensorService"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/home/pages/home-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/pages/home-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\">\n  <div class=\"row\">\n    <div class=\"col-2\">\n      <app-side-bar></app-side-bar>\n    </div>\n    <div class=\"col-9\">\n      <app-main-content></app-main-content>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/home/pages/home-page.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/pages/home-page.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-page {\n  min-height: calc(100vh - 81px - 100px); }\n"

/***/ }),

/***/ "./src/app/modules/home/pages/home-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/pages/home-page.component.ts ***!
  \***********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/modules/home/pages/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/modules/home/pages/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/services/sensor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/home/services/sensor.service.ts ***!
  \*********************************************************/
/*! exports provided: SensorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorService", function() { return SensorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SensorService = /** @class */ (function () {
    function SensorService(httpClient) {
        this.httpClient = httpClient;
    }
    SensorService.prototype.getData = function (params) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].sensorUrl + "/" + params.id, { params: params });
    };
    SensorService.prototype.getAllSenors = function () {
        return this.httpClient.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].sensorUrl);
    };
    SensorService.prototype.updateSensors = function (body) {
        return this.httpClient.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].sensorUrl, body);
    };
    SensorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SensorService);
    return SensorService;
}());



/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"bounce1\"></div>\n  <div class=\"bounce2\"></div>\n  <div class=\"bounce3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  margin: 0 auto;\n  width: 70px;\n  text-align: center; }\n\n.spinner > div {\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-spinner',
            template: __webpack_require__(/*! ./loading-spinner.component.html */ "./src/app/shared/components/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/shared/components/loading-spinner/loading-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/dom.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/dom.service.ts ***!
  \************************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return DomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DomService = /** @class */ (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.workingChild = '';
    }
    DomService.prototype.appendComponentTo = function (parentId, child, childConfig) {
        // Create a component reference from the component
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(child);
        if (childComponent.componentType.name !== this.workingChild) {
            this.addComponent(parentId, child, childConfig);
            this.workingChild = childComponent.componentType.name;
        }
    };
    DomService.prototype.removeComponent = function () {
        this.appRef.detachView(this.childComponentRef.hostView);
        this.childComponentRef.destroy();
        this.workingChild = '';
    };
    DomService.prototype.attachConfig = function (config, componentRef) {
        var inputs = config.inputs;
        var outputs = config.outputs;
        for (var key in inputs) {
            componentRef.instance[key] = inputs[key];
        }
        var _loop_1 = function (key) {
            //   componentRef.instance[key] = outputs[key];
            // subscribe to output event and invoke function
            // console.log(componentRef.instance[key], outputs[key]);
            if (componentRef.instance[key] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]) {
                componentRef.instance[key].subscribe(function (r) {
                    outputs[key](r);
                });
            }
        };
        for (var key in outputs) {
            _loop_1(key);
        }
    };
    DomService.prototype.addComponent = function (parentId, childComponent, childConfig) {
        var childComponentRef = this.componentFactoryResolver
            .resolveComponentFactory(childComponent)
            .create(this.injector);
        // Check if a component is attached
        if (this.appRef.viewCount < 2) {
            // Attach the config to the child (inputs and outputs)
            this.attachConfig(childConfig, childComponentRef);
            this.childComponentRef = childComponentRef;
            // Attach component to the appRef so that it's inside the ng component tree
            this.appRef.attachView(childComponentRef.hostView);
            // Get DOM element from component
            var childDomElem = childComponentRef.hostView
                .rootNodes[0];
            // Append DOM element to the body
            document.getElementById(parentId).appendChild(childDomElem);
        }
    };
    DomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DomService);
    return DomService;
}());



/***/ }),

/***/ "./src/app/shared/services/modal.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/modal.service.ts ***!
  \**************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.service */ "./src/app/shared/services/dom.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalService = /** @class */ (function () {
    function ModalService(domService) {
        this.domService = domService;
        this.modalElementId = 'modal-container';
        this.overlayElementId = 'modal-background';
        this.wrapperElementId = 'modal-wrapper';
    }
    ModalService.prototype.init = function (component, inputs, outputs) {
        var config = {
            inputs: inputs,
            outputs: outputs
        };
        this.domService.appendComponentTo(this.modalElementId, component, config);
        document.getElementById(this.modalElementId).style.visibility = 'visible';
        document.getElementById(this.overlayElementId).style.visibility = 'visible';
        document.getElementById(this.wrapperElementId).style.display = 'block';
    };
    ModalService.prototype.destroy = function () {
        this.domService.removeComponent();
        document.getElementById(this.modalElementId).style.visibility = 'hidden';
        document.getElementById(this.overlayElementId).style.visibility = 'hidden';
        document.getElementById(this.wrapperElementId).style.display = 'none';
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_dom_service__WEBPACK_IMPORTED_MODULE_1__["DomService"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loading-spinner/loading-spinner.component */ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [
                _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadingSpinnerComponent"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var serverUrl = 'http://0.0.0.0:3000';
var environment = {
    production: false,
    serverUrl: serverUrl,
    sensorUrl: serverUrl + '/sensors'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Data/dev/SmartPowerReader/Frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map