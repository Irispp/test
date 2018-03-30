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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_test_service_client__ = __webpack_require__("./src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_todo_service_client__ = __webpack_require__("./src/app/services/todo.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            // Declare components here
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* Routing */]
            ],
            // Client Side services here
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_7__services_todo_service_client__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_9__services_website_service_client__["a" /* WebsiteService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/**
 * Created by sesha on 7/26/17.
 */















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_1__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/image', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/youtube', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/header', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body style=\"height: 100%\">\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n\n    <!--chevron-left-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/:uid/website/:wid/page\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand thick\">\n        Edit Page\n      </a>\n    </div>\n\n    <!--plus tick-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid/website/:wid/page\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<div class=\"container\">\n\n  <label>Name</label>\n  <input placeholder=\"Blog Post\"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n\n\n\n\n  <label>Title</label>\n  <input placeholder=\"Page Title\"\n         type=\"text\"\n         class=\"form-control\"/>\n\n  <a class=\"btn btn-danger btn-block \"\n     routerLink=\"/user/:uid/website\" >Delete</a>\n\n\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</body>\n\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
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

var PageEditComponent = /** @class */ (function () {
    function PageEditComponent() {
    }
    PageEditComponent.prototype.ngOnInit = function () {
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body style=\"height: 100%;\">\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--chevron-left-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink= \"/user/:uid/website\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\" href = \"widget-list.html\">\n        Pages\n      </a>\n    </div>\n\n    <!--plus-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid/website/:wid/page/new\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Blog Post </div>\n    <div class=\"col-xs-9\">\n      <a href=\"/user/:uid/website/:wid/page/:pid\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</li>\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue \">Blogs</div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid/page/:pid\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</li>\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Home </div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid/page/:pid\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</li>\n\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">About </div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid/page/:pid\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</li>\n\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Contact Us </div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid/page/:pid\" class=\"pull-right\">\n        <a class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </a>\n    </div>\n  </div>\n\n</li>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</body>\n\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
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

var PageListComponent = /** @class */ (function () {
    function PageListComponent() {
    }
    PageListComponent.prototype.ngOnInit = function () {
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body style=\"height: 100%\">\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n\n    <!--chevron-left-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/:uid/website/:wid/page\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand thick\">\n        New Page\n      </a>\n    </div>\n\n    <!--plus tick-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid/website/:wid/page\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<div class=\"container\">\n\n  <label>Name</label>\n  <input placeholder=\"Page Name\"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n\n\n\n\n  <label>Title</label>\n  <input placeholder=\"Page Title\"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid \">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</body>\n\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
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

var PageNewComponent = /** @class */ (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h1>Login</h1>\n  <input placeholder=\"username\"\n         type=\"text\"\n         class=\"form-control\"/>\n\n  <input placeholder=\"password\"\n         type=\"password\"\n         class=\"form-control\"/>\n  <a routerLink=\"/user/:uid\"\n     class=\"btn btn-primary btn-block\">\n    Login\n  </a>\n  <a routerLink=\"register\"\n     class=\"btn btn-success btn-block\">\n    Register\n  </a>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<body>\n\n<nav class=\"navbar navbar-default navbar-fixed-top navbar-blue\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick navbar-white\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid \" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok navbar-white\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\" >\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"walice\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"jannunzi\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"jannunzi@gmail.com\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Jose\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Annunziato\">\n    </div>\n  </form>\n\n  <a routerLink=\"/user/:uid/website\"\n     class=\"btn btn-primary btn-block\">\n    Websites\n  </a>\n\n\n  <a routerLink=\"\"\n     class=\"btn btn-danger btn-block\">\n    Logout\n  </a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom navbar-blue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user navbar-white\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n</body>\n\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <h1>Register</h1>\n\n  <input placeholder=\"username\"\n         type=\"text\"\n         class=\"form-control\"/>\n\n  <input placeholder=\"password\"\n         type=\"password\"\n         class=\"form-control\"/>\n\n  <input placeholder=\"verify password\"\n         type=\"password2\"\n         class=\"form-control\"/>\n  <a routerLink=\"/user/:uid\"\n     class=\"btn btn-primary btn-block\">\n    Register\n  </a>\n\n  <a routerLink=\"\"\n     class=\"btn btn-danger btn-block\">\n    Cancel\n  </a>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<body style=\"width:100%; padding-top:0px\">\n\n<div class=\"container-fluid\" style=\"height: 100%;\">\n\n  <div class=\"row\" style=\"position: relative;height: 100%;\">\n    <div class=\"col-xs-3 hidden-xs margin-top-80 border-right\">\n      <nav class=\"navbar navbar-default navbar-blue navbar-left\">\n        <div class=\"container-fluid\">\n\n          <!--chevron-left-->\n          <p class=\"navbar-text pull-left\">\n            <a routerLink=\"/user/:uid/website\" class=\"navbar-link\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n          </p>\n\n          <!--heading on the nav bar-->\n          <p class=\"navbar-header pull-left\">\n            <a class=\"navbar-brand thick\">\n              <b>Websites</b>\n            </a>\n          </p>\n\n          <!--plus mark-->\n          <p class=\"navbar-text pull-right\">\n            <a routerLink=\"/user/:uid \" class=\"navbar-link\">\n              <span class=\"glyphicon glyphicon-plus\"></span>\n            </a>\n          </p>\n\n        </div>\n      </nav>\n      <ul class=\"list-group\">\n\n        <li class=\"list-group-item\">\n          Blogging App\n          <a class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          Address Book App\n          <a class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          Script Testing App\n          <a class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          Blogger\n          <a class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n\n\n\n      </ul>\n    </div>\n    <div class=\"col-sm-9 col-xs-12 margin-top-80\">\n      <nav class=\"navbar navbar-default navbar-right navbar-blue\">\n\n        <!--plus tick-->\n        <p class=\"navbar-text pull-left show-for-large\">\n          <a routerLink=\"/user/:uid\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Edit Website</b>\n          </a>\n        </p>\n\n        <!--plus tick-->\n        <p class=\"navbar-text pull-right\">\n          <a routerLink=\"/user/:uid\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </nav>\n      <label for=\"name\">\n        Website Name\n      </label>\n      <input class=\"form-control\"\n             id=\"name\"\n             placeholder=\"Blogger\"/>\n      <label for=\"description\">\n        Website Description\n      </label>\n      <textarea class=\"form-control\"\n                id=\"description\"\n                placeholder=\"\" rows=\"4\">Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was developed by Pyra Labs, which was bought by Google in 2003. Generally, the blogs are hosted by Google\"\n\n      </textarea>\n\n      <a class=\"btn btn-danger btn-block \"\n         routerLink=\"user/:uid/website\" >Delete</a>\n    </div>\n\n\n\n\n    <!-- Footer -->\n    <nav class=\"navbar navbar-default navbar-fixed-bottom navbar-blue\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-right\">\n          <a routerLink=\"/user/:uid\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n          </a>\n        </p>\n\n      </div>\n    </nav>\n\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
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

var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent() {
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
    };
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body style=\"height: 100%;\">\n<nav class=\"navbar navbar-default navbar-fixed-top navbar-blue\">\n  <div class=\"container-fluid\">\n\n\n\n\n    <!--chevron-left-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink= \"website\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left navbar-white\"></span>\n      </a>\n    </p>\n\n\n\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\" routerLink=\"user/:uid/website\">\n        Websites\n      </a>\n    </div>\n\n    <!--plus-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"new \">\n        <span class=\"glyphicon glyphicon-plus navbar-white\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <a routerLink=\":wid/page \" class=\"navbar-link\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Address Book </div>\n    </a>\n    <div class=\"col-xs-9\">\n      <a routerLink=\":wid\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</li>\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue \">Blogger</div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\":wid\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</li>\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Blogging App</div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\":wid\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</li>\n\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Scrip Testing App </div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\":wid\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n    </div>\n  </div>\n</li>\n\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom navbar-blue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid\">\n        <span class=\"glyphicon glyphicon-user navbar-white\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</body>\n\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
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

var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent() {
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" style=\"height: 100%;\">\n\n  <div class=\"row\" style=\"position: relative;height: 100%;\">\n    <div class=\"col-xs-3 hidden-xs margin-top-80 border-right\">\n\n      <nav class=\"navbar navbar-default navbar-right navbar-blue\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"/user/:uid\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left navbar-white\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick navbar-white\">\n            <b>Websites</b>\n          </a>\n        </p>\n\n        <!--plus -->\n        <p class=\"navbar-text pull-right\">\n          <a routerLink=\"/user/:uid/website\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus navbar-white\"></span>\n          </a>\n        </p>\n\n      </nav>\n      <ul class=\"list-group\">\n\n        <li class=\"list-group-item\">\n          <div class=\" color-blue \">\n            Blogging App\n            <a class=\"pull-right\">\n              <span class=\" glyphicon glyphicon-cog\"></span>\n            </a>\n\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\" color-blue \">\n            Address Book App\n            <a class=\"pull-right\">\n              <span class=\" glyphicon glyphicon-cog\"></span>\n            </a>\n\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\" color-blue \">\n            Script Testing App\n            <a class=\"pull-right\">\n              <span class=\" glyphicon glyphicon-cog\"></span>\n            </a>\n\n          </div>\n        </li>\n\n\n        <li class=\"list-group-item\">\n          <div class=\" color-blue \">\n            Blogger\n            <a class=\"pull-right\">\n              <span class=\" glyphicon glyphicon-cog\"></span>\n            </a>\n\n          </div>\n        </li>\n\n\n\n\n      </ul>\n    </div>\n\n    <div class=\"col-sm-9 col-xs-12 margin-top-80\">\n      <nav class=\"navbar navbar-default navbar-right navbar-blue\">\n\n\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick navbar-white\">\n            <b>New Website</b>\n          </a>\n        </p>\n\n        <!--tick -->\n        <p class=\"navbar-text pull-right\">\n          <a routerLink=\"/user/:uid/website \" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok navbar-white\"></span>\n          </a>\n        </p>\n\n      </nav>\n\n\n\n\n      <label for=\"name\">\n        Name\n      </label>\n      <input class=\"form-control\"\n             id=\"name\"\n             placeholder=\"Name\"/>\n      <label for=\"description\">\n        Description\n      </label>\n      <textarea class=\"form-control\"\n                id=\"description\"\n                placeholder=\"Description\"\n      ></textarea>\n\n\n    </div>\n  </div>\n\n\n\n\n\n    <!-- Footer -->\n  <nav class=\"navbar navbar-default navbar-fixed-bottom navbar-blue\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a routerLink=\"/user/:uid\">\n          <span class=\"glyphicon glyphicon-user navbar-white\"></span>\n        </a>\n      </p>\n\n    </div>\n  </nav>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
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

var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--chevron-left-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand thick\">\n        Choose Widget\n      </a>\n    </div>\n\n\n  </div>\n</nav>\n\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <a href = \"widget-heading.html\">\n      <div class=\"col-xs-6 col-sm-3 color-blue \">Header </div>\n      <div class=\"col-xs-100\">\n        <a routerLink=\"/user/:uid/website/:wid\" class=\"pull-right\">\n\n        </a>\n      </div>\n    </a>\n  </div>\n</li>\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <a href = \"widget-heading.html\">\n      <div class=\"col-xs-6 col-sm-3 color-blue \">Header </div>\n      <div class=\"col-xs-100\">\n        <a routerLink=\"/user/:uid/website/:wid\" class=\"pull-right\">\n\n        </a>\n      </div>\n    </a>\n  </div>\n</li>\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Label</div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid/header\" class=\"pull-right\">\n      </a>\n    </div>\n  </div>\n</li>\n\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">HTML </div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid\" class=\"pull-right\">\n      </a>\n    </div>\n  </div>\n</li>\n\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Text Input </div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid\" class=\"pull-right\">\n      </a>\n    </div>\n  </div>\n</li>\n\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Link</div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid\" class=\"pull-right\">\n      </a>\n    </div>\n  </div>\n</li>\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Button</div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid\" class=\"pull-right\">\n      </a>\n    </div>\n  </div>\n</li>\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid/image\">\n      <div class=\"col-xs-6 col-sm-3 color-blue\">Image</div>\n      <div class=\"col-xs-9\">\n        <a routerLink=\"/user/:uid/website/:wid\" class=\"pull-right\">\n        </a>\n      </div>\n    </a>>\n  </div>\n</li>\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid/youtube\">\n      <div class=\"col-xs-6 col-sm-3 color-blue\">YouTube</div>\n      <div class=\"col-xs-9\">\n        <a routerLink=\"/user/:uid/website/:wid\" class=\"pull-right\">\n        </a>\n      </div>\n    </a>>\n  </div>\n</li>\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Data Table</div>\n    <div class=\"col-xs-9\">\n      <a routerLink=\"/user/:uid/website/:wid\" class=\"pull-right\">\n      </a>\n    </div>\n  </div>\n</li>\n\n\n<li class=\"list-group-item\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-3 color-blue\">Reapeater</div>\n    <div class=\"col-xs-9\">\n      <a href=\"website-edit.html\" class=\"pull-right\">\n      </a>\n    </div>\n  </div>\n</li>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
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

var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body style=\"height: 100%\">\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n\n    <!--chevron-left-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink= \"/user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        Widget Edit\n      </a>\n    </div>\n\n    <!--tick-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget \" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n\n  </div>\n</nav>\n<div class=\"container\">\n\n  <label>Name</label>\n  <input type=\"text\"\n         class=\"form-control\"/>\n\n  <label>Text</label>\n  <input placeholder=\"US Senate Reaches Compromises on Emerging \"\n         type=\"text\"\n         class=\"form-control\"/>\n\n  <label>Size</label>\n  <input placeholder=\"3\"\n         type=\"text\"\n         class=\"form-control\"/>\n\n  <a class=\"btn btn-danger btn-block \"\n     routerLink=\"/user/:uid/website/:wid/page/:pid/widget \" >\n    Delete</a>\n\n\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</body>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
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

var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n\n    <!--chevron-left-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand thick\">\n        Widget Edit\n      </a>\n    </div>\n\n    <!--plus tick-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<div class=\"container\">\n\n\n  <label>Name</label>\n  <input placeholder=\" \"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n\n  <label>Text</label>\n  <input placeholder=\" \"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n\n  <label>URL</label>\n  <input placeholder=\"http://i.kinja-img.com/gawker-media/image\"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n  <label>Upload</label>\n  <input type=\"file\" value=\"Choose File\"\n         class=\"form-control\"/>\n\n  <a class=\"btn btn-primary btn-block \"\n     routerLink=\"user/:uid/website/:wid/page\" >Upload Image</a>\n\n  <a class=\"btn btn-danger btn-block \"\n     routerLink=\"user/:uid/website/:wid/page/:pid/widget\" >Delete</a>\n\n\n\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n</body>\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
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

var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-toolbar {\n  position: absolute;\n  right: 0px;\n  background-color: grey;\n  padding: 7px;\n  border-bottom-left-radius: 10px;\n  opacity: 0.5;\n}\n\n.jga-widget .jga-content {\n  width: 100%;\n}\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body style=\"height: 100%\">\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n\n    <!--chevron-left-->\n    <p class=\"navbar-text pull-left\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand thick\">\n        Widget Edit\n      </a>\n    </div>\n\n    <!--plus tick-->\n    <p class=\"navbar-text pull-right\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n<div class=\"container\">\n\n  <label>Name</label>\n  <input placeholder=\" \"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n\n  <label>Text</label>\n  <input placeholder=\" \"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n\n  <label>URL</label>\n  <input placeholder=\"http://youtube.be/uLWLashCXHE\"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n  <label>Width</label>\n  <input placeholder=\" \"\n         type=\"text\"\n         class=\"form-control\"/>\n\n\n  <a class=\"btn btn-danger btn-block \"\n     href= \"widget-heading.html\" >Delete</a>\n\n\n\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
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

var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports) {

module.exports = "/*\ninput {\n  margin-bottom: 5px;\n}\n*/\n\nbody {\n  padding-top: 60px;\n\n}\n\n.color-blue{\n  color: #337ab7;\n}\n\n.jga-widget .jga-content {\n   width: 100%;\n }\n\n.list-group-item.active,font\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\ninput{\n  margin-bottom: 8px;\n}\n\n.navbar-blue{\n  background-color: #337ab7;\n  color: #fff;\n}\n\n.navbar-blue a{\n  color: #fff !important;\n}\n\n.margin-top-80{\n  height: 100%;\n  padding-top: 80px;\n}\n\n.navbar-left{\n  top: 0px;\n  width:100%;\n  left: 0px;\n  position: absolute;\n  border: 0;\n  border-radius:0px;\n}\n\n.navbar-right{\n  top: 0px;\n  width:100%;\n  right: 0px;\n  position: absolute;\n  margin-right: 0px;\n  border: 0;\n  border-radius:0px;\n}\n\n.border-right{\n  height:100vh !important;\n  border-right: 1px solid #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .show-for-large {\n    display: none;\n  }\n}\n\n.width-100{\n  width: 100% !important;\n}\n\n.navbar-white {\n  color: #f5f5f5;\n}\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<body>\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--chevron-left-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink= \"/user/:uid/website\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        Widgets\n      </a>\n\n    </div>\n\n    <!--plus-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid/website\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"jga-widget\">\n  <div class=\"jga-toolbar\">\n  </div>\n  <h2>GIZMODO</h2>\n\n</div>\n\n\n<div class=\"jga-widget\">\n  <div class=\"jga-toolbar\">\n    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid/image\">\n      <span class=\"glyphicon glyphicon-menu-hamburger pull-right\"></span>\n      <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n\n    </a>\n\n  <img class=\"jga-content\" src=\"http://lorempixel.com/400/200\"/>\n\n  <div class=\"jga-toolbar\">\n    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid/youtube\">\n      <span class=\"glyphicon glyphicon-menu-hamburger pull-right\"></span>\n      <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n\n    </a>\n  <p>If you’ve heard of Knightscope’s security robots, it was probably due to&nbsp;their high-profile failures:&nbsp;one\n    would-be Robocop failed to detect a staircase and <a\n      href=\"https://www.nytimes.com/2017/07/18/technology/robot-cop-fountain.html?mcubz=0&amp;mtrref=undefined\"\n      target=\"_blank\" rel=\"noopener\">killed itself by driving into a water fountain</a>, another <a\n      href=\"http://abc7news.com/news/parents-upset-after-stanford-mall-robot-injures-child/1423093/\" target=\"_blank\"\n      rel=\"noopener\">ran over a toddler’s foot </a>in a shopping mall. On Wednesday, Knightscope&nbsp;<a\n      href=\"https://www.theverge.com/2017/9/20/16338064/robot-security-guard-knightscope-k7\" target=\"_blank\"\n      rel=\"noopener\">announced two new potential fuckups</a>&nbsp;were joining the force: the K1 and the K5 buggy.\n  </p>\n</div>\n</div>\n\n<div class=\"jga-widget\">\n  <div class=\"jga-toolbar\">\n    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid/header\">\n      <span class=\"glyphicon glyphicon-cog\"></span>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </a>\n  <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/7t2Lu4t6n4E\" frameborder=\"0\" allowfullscreen></iframe>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom light-brand\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header width-100\">\n      <a class=\"navbar-brand pull-left\">\n        <span class=\"glyphicon glyphicon-play black-color\"></span>\n      </a >\n      <a class=\"navbar-brand\">\n        <span class=\"glyphicon glyphicon-eye-open black-color\"></span>\n      </a >\n      <p class=\"navbar-text pull-right\">\n        <a routerLink = \"/user/:uid\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p >\n    </div>\n  </div>\n</nav>\n\n\n\n</div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
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

var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = /** @class */ (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/services/todo.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_mock__ = __webpack_require__("./src/app/todo-list/todo-mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.todos = __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_mock__["a" /* TODOS */];
    }
    // findAllTodos(): Todo[] {
    TodoService.prototype.findAllTodos = function () {
        console.log('findAllTodos');
        return this.http.get('http://localhost:3100/api/todo')
            .map(function (res) {
            var data = res.json();
            return data;
        });
        // return this.todos;
    };
    TodoService.prototype.createTodo = function (todo) {
        var todoCopy = __assign({}, todo);
        this.todos.push(todoCopy);
        return this.http.post('http://localhost:3100/api/todo', todo)
            .map(function (res) {
            return res.json();
        });
    };
    TodoService.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/services/website.mock.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEBSITES; });
var WEBSITES = [
    { _id: '123', name: 'Facebook', description: 'description 123' },
    { _id: '234', name: 'Twitter', description: 'description 234' },
    { _id: '345', name: 'Wikipedia', description: 'description 345' }
];


/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__website_mock_client__ = __webpack_require__("./src/app/services/website.mock.client.ts");

var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = __WEBPACK_IMPORTED_MODULE_0__website_mock_client__["a" /* WEBSITES */];
    }
    WebsiteService.prototype.findAllWebsites = function () {
        return this.websites;
    };
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TODOS; });
var TODOS = [
    { title: 'Pickup milk', description: 'Skim milk' },
    { title: 'Pickup kids', description: 'From school' },
    { title: 'Finish homework', description: 'Math' }
];


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
    production: false,
    baseUrl: 'http://localhost:3100'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map