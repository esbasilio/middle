(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/admin/js/admin_main.js":
/*!***************************************!*\
  !*** ./assets/admin/js/admin_main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ "./assets/admin/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_1__);


/*
* @Author: Alberto Urbaez
* @Date:   2020-04-26 17:54:45
* @Last Modified by:   Alberto Urbaez
* @Last Modified time: 2020-11-22 17:19:18
*/
// IMPORT STYLE

/*
* @Author: Beto
* @Date:   2020-10-07 20:46:18
* @Last Modified by:   Beto
* @Last Modified time: 2020-10-17 15:19:46
*/
// IMPORT STYLE
 // Jquery - jQuery is a popular and feature-rich JavaScript library. Learn more: https://jquery.com/

window.jQuery = window.$ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // Bootstrap - The most popular framework that Metronic uses as the foundation. Learn more: http://getbootstrap.com

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); // Popper.js - Tooltip & Popover Positioning Engine used by Bootstrap. Learn more: https://popper.js.org


window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"]; // Wnumb - Number & Money formatting. Learn more: https://refreshless.com/wnumb/

window.wNumb = __webpack_require__(/*! wnumb */ "./node_modules/wnumb/wNumb.js"); // Moment - Parse, validate, manipulate, and display dates and times in JavaScript. Learn more: https://momentjs.com/

window.moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js"); // ES6-Shim - ECMAScript 6 compatibility shims for legacy JS engines.  Learn more: https://github.com/paulmillr/es6-shim

__webpack_require__(/*! es6-shim/es6-shim.min.js */ "./node_modules/es6-shim/es6-shim.min.js"); // Perfect-Scrollbar - Minimalistic but perfect custom scrollbar plugin.  Learn more:  https://github.com/mdbootstrap/perfect-scrollbar


window.PerfectScrollbar = __webpack_require__(/*! perfect-scrollbar/dist/perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.js"); // //////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// ///  Optional Plugins Includes(you can remove or add)  ///////////////
// //////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// Sticky-js - A library for sticky elements written in vanilla javascript. Learn more: https://rgalus.github.io/sticky-js/

window.Sticky = __webpack_require__(/*! sticky-js */ "./node_modules/sticky-js/index.js"); // Apexcharts - mBdern charting library that helps developers to create beautiful and interactive visualizations for web pages: https://apexcharts.com/

window.ApexCharts = __webpack_require__(/*! apexcharts/dist/apexcharts.min.js */ "./node_modules/apexcharts/dist/apexcharts.min.js"); // FormValidation - Best premium validation library for JavaScript. Zero dependencies. Learn more: https://formvalidation.io/

window.FormValidation = __webpack_require__(/*! ../plugins/formvalidation/dist/js/FormValidation.full.min.js */ "./assets/admin/plugins/formvalidation/dist/js/FormValidation.full.min.js");
window.FormValidation.plugins.Bootstrap = __webpack_require__(/*! ../plugins/formvalidation/dist/amd/plugins/Bootstrap.js */ "./assets/admin/plugins/formvalidation/dist/amd/plugins/Bootstrap.js")["default"]; // jQuery BlockUI - The jQuery BlockUI Plugin lets you simulate synchronous behavior when using AJAX: http://malsup.com/jquery/block/

__webpack_require__(/*! block-ui/jquery.blockUI.js */ "./node_modules/block-ui/jquery.blockUI.js"); // Tempus Dominus - The Tempus Dominus provides a flexible datetimepicker widget in the Bootstrap style: https://tempusdominus.github.io/bootstrap-4/


__webpack_require__(/*! tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4 */ "./node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.js");

__webpack_require__(/*! ./vendors/plugins/tempusdominus-bootstrap-4.init.js */ "./assets/admin/js/vendors/plugins/tempusdominus-bootstrap-4.init.js"); // Typeahead.js - a flexible JavaScript library that provides a strong foundation for building robust typeaheads: https://twitter.github.io/typeahead.js/


window.Bloodhound = __webpack_require__(/*! typeahead.js/dist/typeahead.bundle.js */ "./node_modules/typeahead.js/dist/typeahead.bundle.js"); // Handlebars - provides the power necessary to let you build semantic templates effectively with no frustration. Mustache-compatible: https://handlebarsjs.com/

window.Handlebars = __webpack_require__(/*! handlebars/dist/handlebars.js */ "./node_modules/handlebars/dist/handlebars.js"); // Inputmask - is a javascript library which creates an input mask: https://github.com/RobinHerbots/Inputmask

__webpack_require__(/*! inputmask/dist/jquery.inputmask.bundle.js */ "./node_modules/inputmask/dist/jquery.inputmask.bundle.js");

__webpack_require__(/*! inputmask/dist/inputmask/inputmask.date.extensions.js */ "./node_modules/inputmask/dist/inputmask/inputmask.date.extensions.js");

__webpack_require__(/*! inputmask/dist/inputmask/inputmask.numeric.extensions.js */ "./node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions.js"); // noUiSlider - is a lightweight range slider with multi-touch support and a ton of features. It supports non-linear ranges, requires no external dependencies: https://refreshless.com/nouislider/


window.noUiSlider = __webpack_require__(/*! nouislider/distribute/nouislider.js */ "./node_modules/nouislider/distribute/nouislider.js"); // Owl Carousel - Touch enabled jQuery plugin that lets you create a beautiful responsive carousel slider: https://owlcarousel2.github.io/OwlCarousel2/

__webpack_require__(/*! owl.carousel/dist/owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js"); // The autosize - function accepts a single textarea element, or an array or array-like object (such as a NodeList or jQuery collection) of textarea elements: https://www.jacklmoore.com/autosize/


window.autosize = __webpack_require__(/*! autosize/dist/autosize.js */ "./node_modules/autosize/dist/autosize.js"); // Clipboard - Copy text to the clipboard shouldn't be hard. It shouldn't require dozens of steps to configure or hundreds of KBs to load: https://clipboardjs.com/

window.ClipboardJS = __webpack_require__(/*! clipboard/dist/clipboard.min.js */ "./node_modules/clipboard/dist/clipboard.min.js"); // DropzoneJS -  is an open source library that provides drag'n'drop file uploads with image previews: https://www.dropzonejs.com/

window.Dropzone = __webpack_require__(/*! dropzone/dist/dropzone.js */ "./node_modules/dropzone/dist/dropzone.js");

__webpack_require__(/*! ./vendors/plugins/dropzone.init.js */ "./assets/admin/js/vendors/plugins/dropzone.init.js"); // Quill - is a free, open source WYSIWYG editor built for the modern web. Completely customize it for any need with its modular architecture and expressive API: https://quilljs.com/


window.Quill = __webpack_require__(/*! quill/dist/quill.js */ "./node_modules/quill/dist/quill.js"); // Markdown - A Markdown parser for javascript: https://github.com/evilstreak/markdown-js

__webpack_require__(/*! markdown/lib/markdown.js */ "./node_modules/markdown/lib/markdown.js"); // Bootstrap Markdown - Bootstrap plugin for markdown editing: https://github.com/toopay/bootstrap-markdown


__webpack_require__(/*! bootstrap-markdown/js/bootstrap-markdown.js */ "./node_modules/bootstrap-markdown/js/bootstrap-markdown.js");

__webpack_require__(/*! ./vendors/plugins/bootstrap-markdown.init.js */ "./assets/admin/js/vendors/plugins/bootstrap-markdown.init.js"); // Bootstrap Notify - This plugin helps to turn standard bootstrap alerts into "growl" like notifications: http://bootstrap-notify.remabledesigns.com/


__webpack_require__(/*! bootstrap-notify/bootstrap-notify.min.js */ "./node_modules/bootstrap-notify/bootstrap-notify.min.js");

__webpack_require__(/*! ./vendors/plugins/bootstrap-notify.init.js */ "./assets/admin/js/vendors/plugins/bootstrap-notify.init.js"); // Toastr - is a Javascript library for non-blocking notifications. jQuery is required. The goal is to create a simple core library that can be customized and extended: https://github.com/CodeSeven/toastr


window.toastr = __webpack_require__(/*! toastr/build/toastr.min.js */ "./node_modules/toastr/build/toastr.min.js"); // Dual Listbox - Make your multi select pretty and easy to use with only javascript: https://github.com/maykinmedia/dual-listbox

window.DualListbox = __webpack_require__(/*! dual-listbox */ "./node_modules/dual-listbox/dist/dual-listbox.js")["default"]; // Bootstrap Session Timeout - Session timeout and keep-alive control with a nice Bootstrap warning dialog: https://github.com/orangehill/bootstrap-session-timeout

window.sessionTimeout = __webpack_require__(/*! ../plugins/bootstrap-session-timeout/dist/bootstrap-session-timeout.min.js */ "./assets/admin/plugins/bootstrap-session-timeout/dist/bootstrap-session-timeout.min.js"); // JQuery Idletimer - provides you a way to monitor user activity with a page: https://github.com/thorst/jquery-idletimer

__webpack_require__(/*! ../plugins/jquery-idletimer/idle-timer.min.js */ "./assets/admin/plugins/jquery-idletimer/idle-timer.min.js"); // Waypoints - is the easiest way to trigger a function when you scroll to an element: http://imakewebthings.com/waypoints/


__webpack_require__(/*! waypoints/lib/jquery.waypoints.js */ "./node_modules/waypoints/lib/jquery.waypoints.js"); // Counter-Up - is a jQuery plugin that animates a number from zero (counting up towards it). It supports counting up: https://github.com/bfintal/Counter-Up


__webpack_require__(/*! counterup/jquery.counterup.js */ "./node_modules/counterup/jquery.counterup.js"); // ES6 Promise Polyfill - This is a polyfill of the ES6 Promise: https://github.com/lahmatiy/es6-promise-polyfill


__webpack_require__(/*! es6-promise-polyfill/promise.min.js */ "./node_modules/es6-promise-polyfill/promise.min.js"); // Sweetalert2 - a beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes: https://sweetalert2.github.io/


window.Swal = window.swal = __webpack_require__(/*! sweetalert2/dist/sweetalert2.min.js */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");

__webpack_require__(/*! ./vendors/plugins/sweetalert2.init.js */ "./assets/admin/js/vendors/plugins/sweetalert2.init.js"); // JQuery Repeater - Create a repeatable group of input elements: https://github.com/DubFriend/jquery.repeater


__webpack_require__(/*! jquery.repeater */ "./node_modules/jquery.repeater/jquery.repeater.js");

__webpack_require__(/*! ./components/_forms.js */ "./assets/admin/js/components/_forms.js"); // Keenthemes' plugins


window.KTUtil = __webpack_require__(/*! ./components/util.js */ "./assets/admin/js/components/util.js");
window.KTApp = __webpack_require__(/*! ./components/app.js */ "./assets/admin/js/components/app.js");
window.KTCard = __webpack_require__(/*! ./components/card.js */ "./assets/admin/js/components/card.js");
window.KTCookie = __webpack_require__(/*! ./components/cookie.js */ "./assets/admin/js/components/cookie.js");
window.KTDialog = __webpack_require__(/*! ./components/dialog.js */ "./assets/admin/js/components/dialog.js");
window.KTHeader = __webpack_require__(/*! ./components/header.js */ "./assets/admin/js/components/header.js");
window.KTImageInput = __webpack_require__(/*! ./components/image-input.js */ "./assets/admin/js/components/image-input.js");
window.KTMenu = __webpack_require__(/*! ./components/menu.js */ "./assets/admin/js/components/menu.js");
window.KTOffcanvas = __webpack_require__(/*! ./components/offcanvas.js */ "./assets/admin/js/components/offcanvas.js");
window.KTScrolltop = __webpack_require__(/*! ./components/scrolltop.js */ "./assets/admin/js/components/scrolltop.js");
window.KTToggle = __webpack_require__(/*! ./components/toggle.js */ "./assets/admin/js/components/toggle.js");
window.KTWizard = __webpack_require__(/*! ./components/wizard.js */ "./assets/admin/js/components/wizard.js"); // Metronic layout base js

window.KTLayoutAside = __webpack_require__(/*! ./layout/base/aside.js */ "./assets/admin/js/layout/base/aside.js");
window.KTLayoutAsideMenu = __webpack_require__(/*! ./layout/base/aside-menu.js */ "./assets/admin/js/layout/base/aside-menu.js");
window.KTLayoutAsideToggle = __webpack_require__(/*! ./layout/base/aside-toggle.js */ "./assets/admin/js/layout/base/aside-toggle.js");
window.KTLayoutBrand = __webpack_require__(/*! ./layout/base/brand.js */ "./assets/admin/js/layout/base/brand.js");
window.KTLayoutContent = __webpack_require__(/*! ./layout/base/content.js */ "./assets/admin/js/layout/base/content.js");
window.KTLayoutFooter = __webpack_require__(/*! ./layout/base/footer.js */ "./assets/admin/js/layout/base/footer.js");
window.KTLayoutHeader = __webpack_require__(/*! ./layout/base/header.js */ "./assets/admin/js/layout/base/header.js");
window.KTLayoutHeaderMenu = __webpack_require__(/*! ./layout/base/header-menu.js */ "./assets/admin/js/layout/base/header-menu.js");
window.KTLayoutHeaderTopbar = __webpack_require__(/*! ./layout/base/header-topbar.js */ "./assets/admin/js/layout/base/header-topbar.js");
window.KTLayoutStickyCard = __webpack_require__(/*! ./layout/base/sticky-card.js */ "./assets/admin/js/layout/base/sticky-card.js");
window.KTLayoutStretchedCard = __webpack_require__(/*! ./layout/base/stretched-card.js */ "./assets/admin/js/layout/base/stretched-card.js");
window.KTLayoutSubheader = __webpack_require__(/*! ./layout/base/subheader.js */ "./assets/admin/js/layout/base/subheader.js"); // Metronic layout extended js

window.KTLayoutChat = __webpack_require__(/*! ./layout/extended/chat.js */ "./assets/admin/js/layout/extended/chat.js");
window.KTLayoutDemoPanel = __webpack_require__(/*! ./layout/extended/demo-panel.js */ "./assets/admin/js/layout/extended/demo-panel.js");
window.KTLayoutExamples = __webpack_require__(/*! ./layout/extended/examples.js */ "./assets/admin/js/layout/extended/examples.js");
window.KTLayoutQuickActions = __webpack_require__(/*! ./layout/extended/quick-actions.js */ "./assets/admin/js/layout/extended/quick-actions.js");
window.KTLayoutQuickCartPanel = __webpack_require__(/*! ./layout/extended/quick-cart.js */ "./assets/admin/js/layout/extended/quick-cart.js");
window.KTLayoutQuickNotifications = __webpack_require__(/*! ./layout/extended/quick-notifications.js */ "./assets/admin/js/layout/extended/quick-notifications.js");
window.KTLayoutQuickPanel = __webpack_require__(/*! ./layout/extended/quick-panel.js */ "./assets/admin/js/layout/extended/quick-panel.js");
window.KTLayoutQuickSearch = __webpack_require__(/*! ./layout/extended/quick-search.js */ "./assets/admin/js/layout/extended/quick-search.js");
window.KTLayoutQuickUser = __webpack_require__(/*! ./layout/extended/quick-user.js */ "./assets/admin/js/layout/extended/quick-user.js");
window.KTLayoutScrolltop = __webpack_require__(/*! ./layout/extended/scrolltop.js */ "./assets/admin/js/layout/extended/scrolltop.js");
window.KTLayoutSearch = window.KTLayoutSearchOffcanvas = __webpack_require__(/*! ./layout/extended/search.js */ "./assets/admin/js/layout/extended/search.js");

__webpack_require__(/*! ./layout/initialize.js */ "./assets/admin/js/layout/initialize.js");

__webpack_require__(/*! ./pages/widgets.js */ "./assets/admin/js/pages/widgets.js");

__webpack_require__(/*! ./components/_ajax.js */ "./assets/admin/js/components/_ajax.js");

window.Datatables = __webpack_require__(/*! ./components/_datatable.js */ "./assets/admin/js/components/_datatable.js");

__webpack_require__(/*! ./pages/features/miscellaneous/blockui.js */ "./assets/admin/js/pages/features/miscellaneous/blockui.js");

__webpack_require__(/*! ./pages/widgets.js */ "./assets/admin/js/pages/widgets.js");

__webpack_require__(/*! ./pages/features/charts/apexcharts.js */ "./assets/admin/js/pages/features/charts/apexcharts.js"); // require('./pages/custom/login/login-general.js');


$(window).on('load', function () {
  $.when(setTimeout(function () {
    KTApp.unblockPage();
  }, 500)).done(function () {
    KTApp.blockPage({
      overlayColor: '#000000',
      state: 'primary',
      message: 'Procesando...',
      size: 'lg'
    });
  });
});
console.log('Hello Webpack Encore! Edit me in assets/admin/js/admin_main.js');

/***/ }),

/***/ "./assets/admin/js/components/_ajax.js":
/*!*********************************************!*\
  !*** ./assets/admin/js/components/_ajax.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

/*
* @Author: Alberto Urbaez
* @Date:   2020-03-21 20:20:16
* @Last Modified by:   Alberto Urbaez
* @Last Modified time: 2020-11-22 17:22:38
*/
// ACTION CLICK
var _events = function events() {
  $('body').on('click', 'button[data-toggle=modal-ajax]', function (event) {
    event.preventDefault();
    callModalToAjax($(this));
    $(this).unbind(event);
  });
  $('body').on('click', 'button[data-toggle=delete-ajax]', function (event) {
    event.preventDefault();
    deleteConfirAjax($(this));
    $(this).unbind(event);
  });
  $('body').on('click', 'a[data-toggle=modal-ajax]', function (event) {
    event.preventDefault();
    callModalToAjax($(this));
    $(this).unbind(event);
  });
  $(document).on('click', "#submitModalForm", function (event) {
    var form = $('section#ajax-results').children('.modal-body').children("form");
    form.parsley().validate();
    form.submit(); // $(this).unbind(event);
  });
  $("#generateToken").click(function (event) {
    $token = generateToken();
  });
};

var generateToken = function generateToken() {
  $url = "".concat($(location).attr('protocol'), "//").concat($(location).attr('host'), "/api/v1/generate_token");
  console.log($url);
  $.when(setTimeout(function () {
    KTApp.unblockPage();
  }, 500)).done(function () {
    KTApp.blockPage({
      overlayColor: '#000000',
      state: 'primary',
      message: 'Procesando...',
      size: 'lg'
    });
  });
  $.ajax({
    url: "".concat($url),
    type: "GET",
    dataType: "json",
    success: function success(data) {
      $('input[data-target=generate-token]').val(data.token);
    }
  });
}; // Accion de abrir contenido en modal Ajax


var deleteConfirAjax = function deleteConfirAjax(element) {
  if (!$(element).attr('data-url') || !$(element).attr('entity-token')) {
    return;
  }
  /*    Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
          if (willDelete) {
              deleteAjax($(element).attr('data-url'),$(element).attr("entity-token"),$(element).attr('entity-data'));
          }
      });*/


  Swal.fire({
    title: "Estas Seguro?",
    text: "No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, delete!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then(function (result) {
    if (result.value) {
      deleteAjax($(element).attr('data-url'), $(element).attr("entity-token"), $(element).attr('entity-data'));
    }
  });
}; // Accion de abrir contenido en modal Ajax


var callModalToAjax = function callModalToAjax(element) {
  if (!$(element).attr('data-url')) {
    return;
  }

  $.ajax({
    url: $(element).attr('data-url'),
    type: "GET",
    dataType: "html",
    async: true
  }).done(function (data) {
    $('section#ajax-results').html(data);
    $form = $('section#ajax-results').children('.modal-body').children("form");
    $form.attr("action", $(element).attr('data-url'));
    $form.attr("novalidate", "novalidate"); // form.formSwitcher.init();
    // modal.default.init();

    $(".select2").select2();
    Default.init();
    $('#modal-dialog').modal('show');
  }).fail(function () {
    console.log("error");
    $('section#ajax-results').html('error');
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ha ocurrido un error inesperado al tratar de abrir el modal!',
      footer: '<a href>Why do I have this issue?</a>'
    });
  }).always(function () {
    $(window).trigger('load');
    console.log("complete");
  });
}; // Accion de eliminar via ajax


var deleteAjax = function deleteAjax(url, token, data) {
  $.ajax({
    url: url,
    type: "POST",
    headers: {
      'X-AUTH-TOKEN': _USERTOKEN
    },
    data: {
      '_method': 'DELETE',
      '_token': token,
      'id': data
    },
    dataType: "html",
    // async: true,
    success: function success(data) {
      Swal.fire({
        icon: "success",
        title: "Registro eliminado con exito!",
        showConfirmButton: false,
        timer: 900
      });
      setTimeout(function () {
        location.reload();
      }, 1000);
    }
  });
};

var Default = function () {
  "use strict";

  return {
    init: function init() {
      this.events();
    },
    events: function events() {
      _events();
    }
  };
}();

module.exports = {
  "default": Default
}; // Initialize KTApp class on document ready

$(document).ready(function () {
  Default.init();
});

/***/ }),

/***/ "./assets/admin/js/components/_datatable.js":
/*!**************************************************!*\
  !*** ./assets/admin/js/components/_datatable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* @Author: Alberto Urbaez
* @Date:   2020-11-22 15:52:29
* @Last Modified by:   Alberto Urbaez
* @Last Modified time: 2020-11-28 13:53:34
*/


__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

var _require = __webpack_require__(/*! es6-shim/es6-shim.min */ "./node_modules/es6-shim/es6-shim.min.js"),
    console = _require.console; // require('./components/datatable/core.datatable.js');
// require('./components/datatable/datatable.checkbox.js');
// require('./components/datatable/datatable.rtl.js');


__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");

__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js"); // require('datatables.net-fixedheader'); 
// require('datatables.net-select'); 
// require('datatables.net-buttons'); 


__webpack_require__(/*! datatables.net-select-bs4 */ "./node_modules/datatables.net-select-bs4/js/select.bootstrap4.js");

__webpack_require__(/*! datatables.net-buttons-bs4 */ "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");

__webpack_require__(/*! datatables.net-responsive-bs4 */ "./node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.js"); // require('datatables.net-plugins/i18n/Spanish.lang'); 
// require('datatables.net-plugins/i18n/Portuguese-Brasil.lang'); 
// require('datatables.net-plugins/i18n/English.lang'); 
// 


__webpack_require__(/*! datatables.net/js/jquery.dataTables.js */ "./node_modules/datatables.net/js/jquery.dataTables.js"); // require('datatables.net-bs4/js/dataTables.bootstrap4.js');
// require('datatables.net-autofill/js/dataTables.autoFill.min.js');
// require('datatables.net-autofill-bs4/js/autoFill.bootstrap4.min.js');


__webpack_require__(/*! jszip/dist/jszip.min.js */ "./node_modules/jszip/dist/jszip.min.js");

__webpack_require__(/*! pdfmake/build/pdfmake.min.js */ "./node_modules/pdfmake/build/pdfmake.min.js");

__webpack_require__(/*! pdfmake/build/vfs_fonts.js */ "./node_modules/pdfmake/build/vfs_fonts.js");

__webpack_require__(/*! datatables.net-buttons/js/dataTables.buttons.min.js */ "./node_modules/datatables.net-buttons/js/dataTables.buttons.min.js");

__webpack_require__(/*! datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js */ "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.colVis.js */ "./node_modules/datatables.net-buttons/js/buttons.colVis.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.flash.js */ "./node_modules/datatables.net-buttons/js/buttons.flash.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.html5.js */ "./node_modules/datatables.net-buttons/js/buttons.html5.js");

__webpack_require__(/*! datatables.net-buttons/js/buttons.print.js */ "./node_modules/datatables.net-buttons/js/buttons.print.js");

__webpack_require__(/*! datatables.net-colreorder/js/dataTables.colReorder.min.js */ "./node_modules/datatables.net-colreorder/js/dataTables.colReorder.min.js"); // require('datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js');
// require('datatables.net-fixedheader/js/dataTables.fixedHeader.min.js');
// require('datatables.net-keytable/js/dataTables.keyTable.min.js');
// require('datatables.net-responsive/js/dataTables.responsive.min.js');
// require('datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js');
// require('datatables.net-rowgroup/js/dataTables.rowGroup.min.js');
// require('datatables.net-rowreorder/js/dataTables.rowReorder.min.js');
// require('datatables.net-scroller/js/dataTables.scroller.min.js');
// require('datatables.net-select/js/dataTables.select.min.js');


var Datatables = function () {
  var initTableBasic = function initTableBasic() {
    var table = $('table[data-table=basic]');
    table.DataTable({
      responsive: true,
      paging: true,
      // scrollCollapse: true,
      pagingType: 'full_numbers',
      colReorder: true,
      dom: // "<'row py-3'<'col-sm-12 col-md-12'f>>" +
      "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
      lengthMenu: [5, 10, 25, 50],
      pageLength: 10,
      language: {
        'lengthMenu': 'Display _MENU_',
        "zeroRecords": "Nothing found - sorry",
        "infoEmpty": "No records available"
      },
      buttons: ['print', 'copyHtml5', 'csvHtml5'],
      processing: true,
      // serverSide: true,
      headerCallback: function headerCallback(thead, data, start, end, display) {
        thead.getElementsByTagName('th')[0].innerHTML = "\n                    <label class=\"checkbox checkbox-single\">\n                        <input type=\"checkbox\" value=\"\" class=\"group-checkable\"/>\n                        <span></span>\n                    </label>";
      },
      columnDefs: [{
        targets: 0,
        width: '30px',
        className: 'dt-left',
        orderable: false,
        render: function render(data, type, full, meta) {
          return "\n                        <label class=\"checkbox checkbox-single\">\n                            <input type=\"checkbox\" value=\"\" class=\"checkable\"/>\n                            <span></span>\n                        </label>";
        }
      }]
    }); // Mshow || hide Columns

    $('a[data-toggle=column-vis]').on('click', function (e) {
      e.preventDefault();
      var column = table.DataTable().column($(this).attr('data-column')); // Toggle the visibility

      column.visible(!column.visible());
      $(this).attr("data-visible", column.visible());

      if (column.visible() === true) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
    $('a[data-toggle=column-vis]').each(function () {
      if ($(this).attr('data-visible') == 'false') {
        table.DataTable().column($(this).attr('data-column')).visible(false);
      } else {
        $(this).addClass('active');
      }
    }); // CHECKABLE

    table.on('change', '.group-checkable', function () {
      var set = $(this).closest('table').find('td:first-child .checkable');
      var checked = $(this).is(':checked');
      $(set).each(function () {
        if (checked) {
          $(this).prop('checked', true);
          $(this).closest('tr').addClass('active');
        } else {
          $(this).prop('checked', false);
          $(this).closest('tr').removeClass('active');
        }
      });
    });
    table.on('change', 'tbody tr .checkbox', function () {
      $(this).parents('tr').toggleClass('active');
    }); // FILTRADO

    $('input[data-toggle=global_filter]').on('keyup click', function () {
      table.DataTable().search($(this).val()).draw();
    }); // CLEAR FILTER

    $('button[data-toggle=global_clean_filter]').on('click', function (e) {
      e.preventDefault();
      table.DataTable().search('').draw();
      $('input[data-toggle=global_filter]').val('');
    }); // EXPORT

    $('a[data-table=export_print]').on('click', function (e) {
      e.preventDefault();
      table.DataTable().button(0).trigger();
    });
    $('a[data-table=export_copy]').on('click', function (e) {
      e.preventDefault();
      table.DataTable().button(1).trigger();
    });
    $('a[data-table=export_csv]').on('click', function (e) {
      e.preventDefault();
      table.DataTable().button(2).trigger();
    });
  };

  return {
    init: function init() {
      initTableBasic();
    }
  };
}();

var initTableAjax = function initTableAjax(path, columns, columnDefs) {
  var tableajax = $('table[data-table=ajax]');
  tableajax.DataTable({
    responsive: true,
    paging: true,
    // scrollCollapse: true,
    pagingType: 'full_numbers',
    colReorder: true,
    dom: // "<'row py-3'<'col-sm-12 col-md-12'f>>" +
    "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
    lengthMenu: [10, 25, 50],
    pageLength: 10,
    language: {
      'lengthMenu': 'Display _MENU_',
      "zeroRecords": "Nothing found - sorry",
      "infoEmpty": "No records available"
    },
    buttons: ['print', 'copyHtml5', 'csvHtml5'],
    searchDelay: 500,
    processing: true,
    serverSide: true,
    ajax: {
      url: "".concat(path),
      type: 'POST',
      headers: {
        'X-AUTH-TOKEN': _USERTOKEN
      },
      data: {
        user_id: _USERID // pagination: { perpage: 50, },
        // columnsDef: [ "name", "stock", "price", "special_price", 'status'],

      }
    },
    columns: columns,
    columnDefs: columnDefs
  }); // FILTRADO

  $('input[data-toggle=global_filter]').on('keyup', function () {
    tableajax.DataTable().search($(this).val()).draw();
  }); // CLEAR FILTER

  $('button[data-toggle=global_clean_filter]').on('click', function (e) {
    e.preventDefault();
    tableajax.DataTable().search('').draw();
    $('input[data-toggle=global_filter]').val('');
  }); // EXPORT

  $('a[data-table=export_print]').on('click', function (e) {
    e.preventDefault();
    tableajax.DataTable().button(0).trigger();
  });
  $('a[data-table=export_copy]').on('click', function (e) {
    e.preventDefault();
    tableajax.DataTable().button(1).trigger();
  });
  $('a[data-table=export_csv]').on('click', function (e) {
    e.preventDefault();
    tableajax.DataTable().button(2).trigger();
  });
};

var actions = function actions() {
  var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var data = arguments.length > 1 ? arguments[1] : undefined;
  var extra = arguments.length > 2 ? arguments[2] : undefined;

  if (actions != null) {
    var response = '';
    actions.forEach(function (action) {
      // console.log(action);
      switch (action.view_type) {
        case "view":
          response += "\n                        <a href=\"".concat(_HOST).concat(replaceParameters(action.url, [{
            "{id}": data.id
          }]), "\" class=\"btn btn-sm btn-icon btn-text-").concat(action.color, " btn-hover-light-").concat(action.color, " font-weight-bold mr-2\" title=\"").concat(action.name, "\">\n                            <i class=\"").concat(action.icon, "\"></i>\n                        </a>\n                    ");
          break;

        case "modal":
          response += "\n                        <button data-toggle=\"".concat(action.name == 'delete' ? 'delete-ajax' : 'modal-ajax', "\" data-url=\"").concat(_HOST).concat(replaceParameters(action.url, [{
            "{id}": data.id
          }]), "\" entity-token=\"").concat(extra, "\" entity-data=\"").concat(data.id, "\" class=\"btn btn-sm btn-icon btn-text-").concat(action.color, " btn-hover-light-").concat(action.color, " font-weight-bold mr-2\" title=\"").concat(action.name, "\">\n                            <i class=\"").concat(action.icon, "\"></i>\n                        </button>\n                    ");
          break;

        default:
          response += "\n                        <a href=\"".concat(_HOST).concat(replaceParameters(action.url, [{
            "{id}": data.id
          }]), "\" class=\"btn btn-sm btn-icon btn-text-").concat(action.color, " btn-hover-light-").concat(action.color, " font-weight-bold mr-2\" title=\"").concat(action.name, "\">\n                            <i class=\"").concat(action.icon, "\"></i>\n                        </a>\n                    ");
          break;
      }
    });
  }

  return response;
};

var render_cel = function render_cel(type, data) {
  if (actions != null) {
    switch (type) {
      case "icon":
        return "<i class=\"".concat(data.icon, "\"></i>");

      case "color":
        return "<span class=\"label label-".concat(data.color, " label-inline mr-2\">").concat(data.color, "</span>");

      default:
        return "\n                    <a href=\"".concat(_HOST).concat(replaceParameters(action.url, [{
          "{id}": data.id
        }]), "\" class=\"btn btn-xs btn-icon btn-text-").concat(action.color, " btn-hover-light-").concat(action.color, " font-weight-bold mr-2\" title=\"").concat(action.name, "\">\n                        <i class=\"").concat(action.icon, "\"></i>\n                    </a>\n                ");
    }
  }

  return response;
};

module.exports = {
  actions: actions,
  render_cel: render_cel,
  initTableAjax: initTableAjax
};
jQuery(document).ready(function () {
  Datatables.init();
});

/***/ }),

/***/ "./assets/admin/js/components/_forms.js":
/*!**********************************************!*\
  !*** ./assets/admin/js/components/_forms.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
* @Author: Alberto Urbaez
* @Date:   2020-11-15 14:52:39
* @Last Modified by:   Alberto Urbaez
* @Last Modified time: 2020-11-21 12:21:46
*/
// JQuery Mask Plugin - is a jQuery plugin which create an input mask. An input mask helps the user with the input by ensuring a predefined format: https://igorescobar.github.io/jQuery-Mask-Plugin/
__webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js"); // Bootstrap Datepicker - Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style: https://bootstrap-datepicker.readthedocs.io/en/latest/


__webpack_require__(/*! bootstrap-datepicker/dist/js/bootstrap-datepicker.js */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");

__webpack_require__(/*! ../vendors/plugins/bootstrap-datepicker.init.js */ "./assets/admin/js/vendors/plugins/bootstrap-datepicker.init.js"); // Bootstrap Timepicker - Easily select a time for a text input using your mouse or keyboards arrow keys: https://jdewit.github.io/bootstrap-timepicker/


__webpack_require__(/*! bootstrap-timepicker/js/bootstrap-timepicker.js */ "./node_modules/bootstrap-timepicker/js/bootstrap-timepicker.js");

__webpack_require__(/*! ../vendors/plugins/bootstrap-timepicker.init.js */ "./assets/admin/js/vendors/plugins/bootstrap-timepicker.init.js"); // Date Range Picker - A JavaScript component for choosing date ranges, dates and times: https://www.daterangepicker.com/


__webpack_require__(/*! bootstrap-daterangepicker/daterangepicker.js */ "./node_modules/bootstrap-daterangepicker/daterangepicker.js"); // Bootstrap Touchspin - A mobile and touch friendly input spinner component for Bootstrap 3: https://www.virtuosoft.eu/code/bootstrap-touchspin/


__webpack_require__(/*! bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js */ "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js"); // Bootstrap Maxlength - This plugin integrates by default with Twitter bootstrap using badges to display the maximum length of the field where the user is inserting text: https://github.com/mimo84/bootstrap-maxlength


__webpack_require__(/*! bootstrap-maxlength/src/bootstrap-maxlength.js */ "./node_modules/bootstrap-maxlength/src/bootstrap-maxlength.js");

__webpack_require__(/*! ../../plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js */ "./assets/admin/plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js"); // Bootstrap Select - The jQuery plugin that brings select elements into the 21st century with intuitive multiselection, searching, and much more: https://developer.snapappointments.com/bootstrap-select/


__webpack_require__(/*! bootstrap-select/dist/js/bootstrap-select.js */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js"); // Bootstrap Switch - Bootstrap switch/toggle is a simple component used for activating one of two predefined options: https://mdbootstrap.com/docs/jquery/forms/switch/


__webpack_require__(/*! bootstrap-switch/dist/js/bootstrap-switch.js */ "./node_modules/bootstrap-switch/dist/js/bootstrap-switch.js");

__webpack_require__(/*! ../vendors/plugins/bootstrap-switch.init.js */ "./assets/admin/js/vendors/plugins/bootstrap-switch.init.js"); // Select2 - Select2 is a jQuery based replacement for select boxes: https://select2.org/


__webpack_require__(/*! select2/dist/js/select2.full.js */ "./node_modules/select2/dist/js/select2.full.js"); // Ion Rangeslider - Is an easy, flexible and responsive range slider with tons of options: http://ionden.com/a/plugins/ion.rangeSlider/


__webpack_require__(/*! ion-rangeslider/js/ion.rangeSlider.js */ "./node_modules/ion-rangeslider/js/ion.rangeSlider.js"); // Tagify - Transforms an input field or a textarea into a Tags component, in an easy, customizable way, with great performance and small code footprint, exploded with features: https://github.com/yairEO/tagify


__webpack_require__(/*! @yaireo/tagify/dist/tagify.polyfills.min */ "./node_modules/@yaireo/tagify/dist/tagify.polyfills.min.js");

window.Tagify = __webpack_require__(/*! @yaireo/tagify/dist/tagify.min */ "./node_modules/@yaireo/tagify/dist/tagify.min.js"); // Summernote - Super Simple WYSIWYG Editor on Bootstrap Summernote is a JavaScript library that helps you create WYSIWYG editors online: https://summernote.org/

__webpack_require__(/*! summernote/dist/summernote.js */ "./node_modules/summernote/dist/summernote.js");

__webpack_require__(/*! ../pages/crud/forms/widgets/select2.js */ "./assets/admin/js/pages/crud/forms/widgets/select2.js"); // validacion


window.Parsley = __webpack_require__(/*! parsleyjs */ "./node_modules/parsleyjs/dist/parsley.js");

__webpack_require__(/*! parsleyjs/src/i18n/pt-br */ "./node_modules/parsleyjs/src/i18n/pt-br.js");

__webpack_require__(/*! parsleyjs/src/i18n/es */ "./node_modules/parsleyjs/src/i18n/es.js");

__webpack_require__(/*! parsleyjs/src/i18n/en */ "./node_modules/parsleyjs/src/i18n/en.js");

__webpack_require__(/*! ../pages/crud/forms/widgets/bootstrap-switch.js */ "./assets/admin/js/pages/crud/forms/widgets/bootstrap-switch.js"); // VALIDATION
// require('jquery-validation');

/***/ }),

/***/ "./assets/admin/js/components/app.js":
/*!*******************************************!*\
  !*** ./assets/admin/js/components/app.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

var KTApp = function () {
  /** @type {object} colors State colors **/
  var settings = {};

  var _initTooltip = function initTooltip(el) {
    var theme = el.data('theme') ? 'tooltip-' + el.data('theme') : '';
    var width = el.data('width') == 'auto' ? 'tooltop-auto-width' : '';
    var trigger = el.data('trigger') ? el.data('trigger') : 'hover';
    $(el).tooltip({
      trigger: trigger,
      template: '<div class="tooltip ' + theme + ' ' + width + '" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>'
    });
  };

  var _initTooltips = function initTooltips() {
    // init bootstrap tooltips
    $('[data-toggle="tooltip"]').each(function () {
      _initTooltip($(this));
    });
  };

  var _initPopover = function initPopover(el) {
    var skin = el.data('skin') ? 'popover-' + el.data('skin') : '';
    var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
    el.popover({
      trigger: triggerValue,
      template: '\
            <div class="popover ' + skin + '" role="tooltip">\
                <div class="arrow"></div>\
                <h3 class="popover-header"></h3>\
                <div class="popover-body"></div>\
            </div>'
    });
  };

  var _initPopovers = function initPopovers() {
    // init bootstrap popover
    $('[data-toggle="popover"]').each(function () {
      _initPopover($(this));
    });
  };

  var initFileInput = function initFileInput() {
    // init bootstrap popover
    $('.custom-file-input').on('change', function () {
      var fileName = $(this).val();
      $(this).next('.custom-file-label').addClass("selected").html(fileName);
    });
  };

  var initScroll = function initScroll() {
    $('[data-scroll="true"]').each(function () {
      var el = $(this);
      KTUtil.scrollInit(this, {
        mobileNativeScroll: true,
        handleWindowResize: true,
        rememberPosition: el.data('remember-position') == 'true' ? true : false
      });
    });
  };

  var initAlerts = function initAlerts() {
    // init bootstrap popover
    $('body').on('click', '[data-close=alert]', function () {
      $(this).closest('.alert').hide();
    });
  };

  var _initCard = function initCard(el, options) {
    // init card tools
    var el = $(el);
    var card = new KTCard(el[0], options);
  };

  var _initCards = function initCards() {
    // init card tools
    $('[data-card="true"]').each(function () {
      var el = $(this);
      var options = {};

      if (el.data('data-card-initialized') !== true) {
        _initCard(el, options);

        el.data('data-card-initialized', true);
      }
    });
  };

  var initStickyCard = function initStickyCard() {
    if (typeof Sticky === 'undefined') {
      return;
    }

    var sticky = new Sticky('[data-sticky="true"]');
  };

  var _initAbsoluteDropdown = function initAbsoluteDropdown(context) {
    var dropdownMenu;

    if (!context) {
      return;
    }

    $('body').on('show.bs.dropdown', context, function (e) {
      dropdownMenu = $(e.target).find('.dropdown-menu');
      $('body').append(dropdownMenu.detach());
      dropdownMenu.css('display', 'block');
      dropdownMenu.position({
        'my': 'right top',
        'at': 'right bottom',
        'of': $(e.relatedTarget)
      });
    }).on('hide.bs.dropdown', context, function (e) {
      $(e.target).append(dropdownMenu.detach());
      dropdownMenu.hide();
    });
  };

  var initAbsoluteDropdowns = function initAbsoluteDropdowns() {
    $('body').on('show.bs.dropdown', function (e) {
      // e.target is always parent (contains toggler and menu)
      var $toggler = $(e.target).find("[data-attach='body']");

      if ($toggler.length === 0) {
        return;
      }

      var $dropdownMenu = $(e.target).find('.dropdown-menu'); // save detached menu

      var $detachedDropdownMenu = $dropdownMenu.detach(); // save reference to detached menu inside data of toggler

      $toggler.data('dropdown-menu', $detachedDropdownMenu);
      $('body').append($detachedDropdownMenu);
      $detachedDropdownMenu.css('display', 'block');
      $detachedDropdownMenu.position({
        my: 'right top',
        at: 'right bottom',
        of: $(e.relatedTarget)
      });
    });
    $('body').on('hide.bs.dropdown', function (e) {
      var $toggler = $(e.target).find("[data-attach='body']");

      if ($toggler.length === 0) {
        return;
      } // access to reference of detached menu from data of toggler


      var $detachedDropdownMenu = $toggler.data('dropdown-menu'); // re-append detached menu inside parent

      $(e.target).append($detachedDropdownMenu.detach()); // hide dropdown

      $detachedDropdownMenu.hide();
    });
  };

  return {
    init: function init(settingsArray) {
      if (settingsArray) {
        settings = settingsArray;
      }

      KTApp.initComponents();
    },
    initComponents: function initComponents() {
      initScroll();

      _initTooltips();

      _initPopovers();

      initAlerts();
      initFileInput();

      _initCards();

      initStickyCard();
      initAbsoluteDropdowns();
    },
    initTooltips: function initTooltips() {
      _initTooltips();
    },
    initTooltip: function initTooltip(el) {
      _initTooltip(el);
    },
    initPopovers: function initPopovers() {
      _initPopovers();
    },
    initPopover: function initPopover(el) {
      _initPopover(el);
    },
    initCard: function initCard(el, options) {
      _initCard(el, options);
    },
    initCards: function initCards() {
      _initCards();
    },
    initSticky: function (_initSticky) {
      function initSticky() {
        return _initSticky.apply(this, arguments);
      }

      initSticky.toString = function () {
        return _initSticky.toString();
      };

      return initSticky;
    }(function () {
      initSticky();
    }),
    initAbsoluteDropdown: function initAbsoluteDropdown(context) {
      _initAbsoluteDropdown(context);
    },
    block: function block(target, options) {
      var el = $(target);
      options = $.extend(true, {
        opacity: 0.05,
        overlayColor: '#000000',
        type: '',
        size: '',
        state: 'primary',
        centerX: true,
        centerY: true,
        message: '',
        shadow: true,
        width: 'auto'
      }, options);
      var html;
      var version = options.type ? 'spinner-' + options.type : '';
      var state = options.state ? 'spinner-' + options.state : '';
      var size = options.size ? 'spinner-' + options.size : '';
      var spinner = '<span class="spinner ' + version + ' ' + state + ' ' + size + '"></span';

      if (options.message && options.message.length > 0) {
        var classes = 'blockui ' + (options.shadow === false ? 'blockui' : '');
        html = '<div class="' + classes + '"><span>' + options.message + '</span>' + spinner + '</div>';
        var el = document.createElement('div');
        $('body').prepend(el);
        KTUtil.addClass(el, classes);
        el.innerHTML = html;
        options.width = KTUtil.actualWidth(el) + 10;
        KTUtil.remove(el);

        if (target == 'body') {
          html = '<div class="' + classes + '" style="margin-left:-' + options.width / 2 + 'px;"><span>' + options.message + '</span><span>' + spinner + '</span></div>';
        }
      } else {
        html = spinner;
      }

      var params = {
        message: html,
        centerY: options.centerY,
        centerX: options.centerX,
        css: {
          top: '30%',
          left: '50%',
          border: '0',
          padding: '0',
          backgroundColor: 'none',
          width: options.width
        },
        overlayCSS: {
          backgroundColor: options.overlayColor,
          opacity: options.opacity,
          cursor: 'wait',
          zIndex: target == 'body' ? 1100 : 10
        },
        onUnblock: function onUnblock() {
          if (el && el[0]) {
            KTUtil.css(el[0], 'position', '');
            KTUtil.css(el[0], 'zoom', '');
          }
        }
      };

      if (target == 'body') {
        params.css.top = '50%';
        $.blockUI(params);
      } else {
        var el = $(target);
        el.block(params);
      }
    },
    unblock: function unblock(target) {
      if (target && target != 'body') {
        $(target).unblock();
      } else {
        $.unblockUI();
      }
    },
    blockPage: function blockPage(options) {
      return KTApp.block('body', options);
    },
    unblockPage: function unblockPage() {
      return KTApp.unblock('body');
    },
    getSettings: function getSettings() {
      return settings;
    }
  };
}(); // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTApp;
} // Initialize KTApp class on document ready


$(document).ready(function () {
  KTApp.init(KTAppSettings);
});

/***/ }),

/***/ "./assets/admin/js/components/card.js":
/*!********************************************!*\
  !*** ./assets/admin/js/components/card.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTCard = function KTCard(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.getById(elementId);
  var body = KTUtil.getBody();

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    toggleSpeed: 400,
    sticky: {
      releseOnReverse: false,
      offset: 300,
      zIndex: 101
    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('card')) {
        the = KTUtil.data(element).get('card');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('card', the);
      }

      return the;
    },

    /**
     * Init card
     */
    init: function init(options) {
      the.element = element;
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.header = KTUtil.child(element, '.card-header');
      the.footer = KTUtil.child(element, '.card-footer');

      if (KTUtil.child(element, '.card-body')) {
        the.body = KTUtil.child(element, '.card-body');
      } else if (KTUtil.child(element, '.form')) {
        the.body = KTUtil.child(element, '.form');
      }
    },

    /**
     * Build Form Wizard
     */
    build: function build() {
      // Remove
      var remove = KTUtil.find(the.header, '[data-card-tool=remove]');

      if (remove) {
        KTUtil.addEvent(remove, 'click', function (e) {
          e.preventDefault();
          Plugin.remove();
        });
      } // Reload


      var reload = KTUtil.find(the.header, '[data-card-tool=reload]');

      if (reload) {
        KTUtil.addEvent(reload, 'click', function (e) {
          e.preventDefault();
          Plugin.reload();
        });
      } // Toggle


      var toggle = KTUtil.find(the.header, '[data-card-tool=toggle]');

      if (toggle) {
        KTUtil.addEvent(toggle, 'click', function (e) {
          e.preventDefault();
          Plugin.toggle();
        });
      }
    },

    /**
     * Enable stickt mode
     */
    initSticky: function initSticky() {
      var lastScrollTop = 0;
      var offset = the.options.sticky.offset;

      if (!the.header) {
        return;
      }

      window.addEventListener('scroll', Plugin.onScrollSticky);
    },

    /**
     * Window scroll handle event for sticky card
     */
    onScrollSticky: function onScrollSticky(e) {
      var offset = the.options.sticky.offset;
      if (isNaN(offset)) return;
      var st = KTUtil.getScrollTop();

      if (st >= offset && KTUtil.hasClass(body, 'card-sticky-on') === false) {
        Plugin.eventTrigger('stickyOn');
        KTUtil.addClass(body, 'card-sticky-on');
        Plugin.updateSticky();
      } else if (st * 1.5 <= offset && KTUtil.hasClass(body, 'card-sticky-on')) {
        // Back scroll mode
        Plugin.eventTrigger('stickyOff');
        KTUtil.removeClass(body, 'card-sticky-on');
        Plugin.resetSticky();
      }
    },
    updateSticky: function updateSticky() {
      if (!the.header) {
        return;
      }

      var top;

      if (KTUtil.hasClass(body, 'card-sticky-on')) {
        if (the.options.sticky.position.top instanceof Function) {
          top = parseInt(the.options.sticky.position.top.call(this, the));
        } else {
          top = parseInt(the.options.sticky.position.top);
        }

        var left;

        if (the.options.sticky.position.left instanceof Function) {
          left = parseInt(the.options.sticky.position.left.call(this, the));
        } else {
          left = parseInt(the.options.sticky.position.left);
        }

        var right;

        if (the.options.sticky.position.right instanceof Function) {
          right = parseInt(the.options.sticky.position.right.call(this, the));
        } else {
          right = parseInt(the.options.sticky.position.right);
        }

        KTUtil.css(the.header, 'z-index', the.options.sticky.zIndex);
        KTUtil.css(the.header, 'top', top + 'px');
        KTUtil.css(the.header, 'left', left + 'px');
        KTUtil.css(the.header, 'right', right + 'px');
      }
    },
    resetSticky: function resetSticky() {
      if (!the.header) {
        return;
      }

      if (KTUtil.hasClass(body, 'card-sticky-on') === false) {
        KTUtil.css(the.header, 'z-index', '');
        KTUtil.css(the.header, 'top', '');
        KTUtil.css(the.header, 'left', '');
        KTUtil.css(the.header, 'right', '');
      }
    },

    /**
     * Remove card
     */
    remove: function remove() {
      if (Plugin.eventTrigger('beforeRemove') === false) {
        return;
      }

      KTUtil.remove(element);
      Plugin.eventTrigger('afterRemove');
    },

    /**
     * Set content
     */
    setContent: function setContent(html) {
      if (html) {
        the.body.innerHTML = html;
      }
    },

    /**
     * Get body
     */
    getBody: function getBody() {
      return the.body;
    },

    /**
     * Get self
     */
    getSelf: function getSelf() {
      return element;
    },

    /**
     * Reload
     */
    reload: function reload() {
      Plugin.eventTrigger('reload');
    },

    /**
     * Toggle
     */
    toggle: function toggle() {
      if (KTUtil.hasClass(element, 'card-collapse') || KTUtil.hasClass(element, 'card-collapsed')) {
        Plugin.expand();
      } else {
        Plugin.collapse();
      }
    },

    /**
     * Collapse
     */
    collapse: function collapse() {
      if (Plugin.eventTrigger('beforeCollapse') === false) {
        return;
      }

      KTUtil.slideUp(the.body, the.options.toggleSpeed, function () {
        Plugin.eventTrigger('afterCollapse');
      });
      KTUtil.addClass(element, 'card-collapse');
    },

    /**
     * Expand
     */
    expand: function expand() {
      if (Plugin.eventTrigger('beforeExpand') === false) {
        return;
      }

      KTUtil.slideDown(the.body, the.options.toggleSpeed, function () {
        Plugin.eventTrigger('afterExpand');
      });
      KTUtil.removeClass(element, 'card-collapse');
      KTUtil.removeClass(element, 'card-collapsed');
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      //KTUtil.triggerCustomEvent(name);
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Remove card
   */


  the.remove = function () {
    return Plugin.remove(html);
  };
  /**
   * Init sticky card
   */


  the.initSticky = function () {
    return Plugin.initSticky();
  };
  /**
   * Rerender sticky layout
   */


  the.updateSticky = function () {
    return Plugin.updateSticky();
  };
  /**
   * Reset the sticky
   */


  the.resetSticky = function () {
    return Plugin.resetSticky();
  };
  /**
   * Destroy sticky card
   */


  the.destroySticky = function () {
    Plugin.resetSticky();
    window.removeEventListener('scroll', Plugin.onScrollSticky);
  };
  /**
   * Reload card
   */


  the.reload = function () {
    return Plugin.reload();
  };
  /**
   * Set card content
   */


  the.setContent = function (html) {
    return Plugin.setContent(html);
  };
  /**
   * Toggle card
   */


  the.toggle = function () {
    return Plugin.toggle();
  };
  /**
   * Collapse card
   */


  the.collapse = function () {
    return Plugin.collapse();
  };
  /**
   * Expand card
   */


  the.expand = function () {
    return Plugin.expand();
  };
  /**
   * Get cardbody
   * @returns {jQuery}
   */


  the.getBody = function () {
    return Plugin.getBody();
  };
  /**
   * Get cardbody
   * @returns {jQuery}
   */


  the.getSelf = function () {
    return Plugin.getSelf();
  };
  /**
   * Attach event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTCard;
}

/***/ }),

/***/ "./assets/admin/js/components/cookie.js":
/*!**********************************************!*\
  !*** ./assets/admin/js/components/cookie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // DOCS: https://javascript.info/cookie
// Component Definition

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

var KTCookie = function () {
  return {
    // returns the cookie with the given name,
    // or undefined if not found
    getCookie: function getCookie(name) {
      var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    // Please note that a cookie value is encoded,
    // so getCookie uses a built-in decodeURIComponent function to decode it.
    setCookie: function setCookie(name, value, options) {
      if (!options) {
        options = {};
      }

      options = Object.assign({}, {
        path: '/'
      }, options);

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (var optionKey in options) {
        if (!options.hasOwnProperty(optionKey)) {
          continue;
        }

        updatedCookie += "; " + optionKey;
        var optionValue = options[optionKey];

        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    },
    // To delete a cookie, we can call it with a negative expiration date:
    deleteCookie: function deleteCookie(name) {
      setCookie(name, "", {
        'max-age': -1
      });
    }
  };
}(); // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTCookie;
}

/***/ }),

/***/ "./assets/admin/js/components/dialog.js":
/*!**********************************************!*\
  !*** ./assets/admin/js/components/dialog.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition 

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

var KTDialog = function KTDialog(options) {
  // Main object
  var the = this; // Get element object

  var element;
  var body = KTUtil.getBody(); // Default options

  var defaultOptions = {
    'placement': 'top center',
    'type': 'loader',
    'width': 100,
    'state': 'default',
    'message': 'Loading...'
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      Plugin.init(options);
      return the;
    },

    /**
     * Handles subtoggle click toggle
     */
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.state = false;
    },

    /**
     * Show dialog
     */
    show: function show() {
      Plugin.eventTrigger('show');
      element = document.createElement("DIV");
      KTUtil.setHTML(element, the.options.message);
      KTUtil.addClass(element, 'dialog dialog-shown');
      KTUtil.addClass(element, 'dialog-' + the.options.state);
      KTUtil.addClass(element, 'dialog-' + the.options.type);

      if (the.options.placement == 'top center') {
        KTUtil.addClass(element, 'dialog-top-center');
      }

      body.appendChild(element);
      the.state = 'shown';
      Plugin.eventTrigger('shown');
      return the;
    },

    /**
     * Hide dialog
     */
    hide: function hide() {
      if (element) {
        Plugin.eventTrigger('hide');
        element.remove();
        the.state = 'hidden';
        Plugin.eventTrigger('hidden');
      }

      return the;
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Check shown state
   */


  the.shown = function () {
    return the.state == 'shown';
  };
  /**
   * Check hidden state
   */


  the.hidden = function () {
    return the.state == 'hidden';
  };
  /**
   * Show dialog
   */


  the.show = function () {
    return Plugin.show();
  };
  /**
   * Hide dialog
   */


  the.hide = function () {
    return Plugin.hide();
  };
  /**
   * Attach event
   * @returns {KTToggle}
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   * @returns {KTToggle}
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTDialog;
}

/***/ }),

/***/ "./assets/admin/js/components/header.js":
/*!**********************************************!*\
  !*** ./assets/admin/js/components/header.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

var KTHeader = function KTHeader(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.getById(elementId);
  var body = KTUtil.getBody();

  if (element === undefined) {
    return;
  } // Default options


  var defaultOptions = {
    offset: {
      desktop: true,
      tabletAndMobile: true
    },
    releseOnReverse: {
      desktop: false,
      tabletAndMobile: false
    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {KTHeader}
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('header')) {
        the = KTUtil.data(element).get('header');
      } else {
        // reset header
        Plugin.init(options); // build header

        Plugin.build();
        KTUtil.data(element).set('header', the);
      }

      return the;
    },

    /**
     * Handles subheader click toggle
     * @returns {KTHeader}
     */
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
    },

    /**
     * Reset header
     * @returns {KTHeader}
     */
    build: function build() {
      var eventTriggerState = true;
      var lastScrollTop = 0;
      window.addEventListener('scroll', function () {
        var offset = 0,
            st,
            attrName;

        if (KTUtil.isBreakpointDown('lg') && the.options.offset.tabletAndMobile === false) {
          return;
        }

        if (KTUtil.isBreakpointUp('lg') && the.options.offset.desktop === false) {
          return;
        }

        if (KTUtil.isBreakpointUp('lg')) {
          offset = the.options.offset.desktop;
        } else if (KTUtil.isBreakpointDown('lg')) {
          offset = the.options.offset.tabletAndMobile;
        }

        st = KTUtil.getScrollTop();

        if (KTUtil.isBreakpointDown('lg') && the.options.releseOnReverse.tabletAndMobile || KTUtil.isBreakpointUp('lg') && the.options.releseOnReverse.desktop) {
          if (st > offset && lastScrollTop < st) {
            // down scroll mode
            if (body.hasAttribute('data-header-scroll') === false) {
              body.setAttribute('data-header-scroll', 'on');
            }

            if (eventTriggerState) {
              Plugin.eventTrigger('scrollOn', the);
              eventTriggerState = false;
            }
          } else {
            // back scroll mode
            if (body.hasAttribute('data-header-scroll') === true) {
              body.removeAttribute('data-header-scroll');
            }

            if (eventTriggerState == false) {
              Plugin.eventTrigger('scrollOff', the);
              eventTriggerState = true;
            }
          }

          lastScrollTop = st;
        } else {
          if (st > offset) {
            // down scroll mode
            if (body.hasAttribute('data-header-scroll') === false) {
              body.setAttribute('data-header-scroll', 'on');
            }

            if (eventTriggerState) {
              Plugin.eventTrigger('scrollOn', the);
              eventTriggerState = false;
            }
          } else {
            // back scroll mode
            if (body.hasAttribute('data-header-scroll') === true) {
              body.removeAttribute('data-header-scroll');
            }

            if (eventTriggerState == false) {
              Plugin.eventTrigger('scrollOff', the);
              eventTriggerState = true;
            }
          }
        }
      });
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Register event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTHeader;
}

/***/ }),

/***/ "./assets/admin/js/components/image-input.js":
/*!***************************************************!*\
  !*** ./assets/admin/js/components/image-input.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition 

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

var KTImageInput = function KTImageInput(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.getById(elementId);
  var body = KTUtil.getBody();

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    editMode: false
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('imageinput')) {
        the = KTUtil.data(element).get('imageinput');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('imageinput', the);
      }

      return the;
    },

    /**
     * Init avatar
     */
    init: function init(options) {
      the.element = element;
      the.events = [];
      the.input = KTUtil.find(element, 'input[type="file"]');
      the.wrapper = KTUtil.find(element, '.image-input-wrapper');
      the.cancel = KTUtil.find(element, '[data-action="cancel"]');
      the.remove = KTUtil.find(element, '[data-action="remove"]');
      the.src = KTUtil.css(the.wrapper, 'backgroundImage');
      the.hidden = KTUtil.find(element, 'input[type="hidden"]'); // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
    },

    /**
     * Build
     */
    build: function build() {
      // Handle change
      KTUtil.addEvent(the.input, 'change', function (e) {
        e.preventDefault();

        if (the.input && the.input.files && the.input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            KTUtil.css(the.wrapper, 'background-image', 'url(' + e.target.result + ')');
          };

          reader.readAsDataURL(the.input.files[0]);
          KTUtil.addClass(the.element, 'image-input-changed');
          KTUtil.removeClass(the.element, 'image-input-empty'); // Fire change event

          Plugin.eventTrigger('change');
        }
      }); // Handle cancel

      KTUtil.addEvent(the.cancel, 'click', function (e) {
        e.preventDefault(); // Fire cancel event

        Plugin.eventTrigger('cancel');
        KTUtil.removeClass(the.element, 'image-input-changed');
        KTUtil.removeClass(the.element, 'image-input-empty');
        KTUtil.css(the.wrapper, 'background-image', the.src);
        the.input.value = "";

        if (the.hidden) {
          the.hidden.value = "0";
        }
      }); // Handle remove

      KTUtil.addEvent(the.remove, 'click', function (e) {
        e.preventDefault(); // Fire cancel event

        Plugin.eventTrigger('remove');
        KTUtil.removeClass(the.element, 'image-input-changed');
        KTUtil.addClass(the.element, 'image-input-empty');
        KTUtil.css(the.wrapper, 'background-image', "none");
        the.input.value = "";

        if (the.hidden) {
          the.hidden.value = "1";
        }
      });
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      //KTUtil.triggerCustomEvent(name);
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Attach event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTImageInput;
}

/***/ }),

/***/ "./assets/admin/js/components/menu.js":
/*!********************************************!*\
  !*** ./assets/admin/js/components/menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

var KTMenu = function KTMenu(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.getById(elementId);
  var body = KTUtil.getBody();

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    // scrollable area with Perfect Scroll
    scroll: {
      rememberPosition: false
    },
    // accordion submenu mode
    accordion: {
      slideSpeed: 200,
      // accordion toggle slide speed in milliseconds
      autoScroll: false,
      // enable auto scrolling(focus) to the clicked menu item
      autoScrollSpeed: 1200,
      expandAll: true // allow having multiple expanded accordions in the menu

    },
    // dropdown submenu mode
    dropdown: {
      timeout: 500 // timeout in milliseconds to show and hide the hoverable submenu dropdown

    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {KTMenu}
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('menu')) {
        the = KTUtil.data(element).get('menu');
      } else {
        // reset menu
        Plugin.init(options); // reset menu

        Plugin.reset(); // build menu

        Plugin.build();
        KTUtil.data(element).set('menu', the);
      }

      return the;
    },

    /**
     * Handles submenu click toggle
     * @returns {KTMenu}
     */
    init: function init(options) {
      the.events = [];
      the.eventHandlers = {}; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options); // pause menu

      the.pauseDropdownHoverTime = 0;
      the.uid = KTUtil.getUniqueID();
    },
    update: function update(options) {
      // merge default and user defined options
      the.options = KTUtil.deepExtend({}, defaultOptions, options); // pause menu

      the.pauseDropdownHoverTime = 0; // reset menu

      Plugin.reset();
      the.eventHandlers = {}; // build menu

      Plugin.build();
      KTUtil.data(element).set('menu', the);
    },
    reload: function reload() {
      // reset menu
      Plugin.reset(); // build menu

      Plugin.build(); // reset submenu props

      Plugin.resetSubmenuProps();
    },

    /**
     * Reset menu
     * @returns {KTMenu}
     */
    build: function build() {
      // General accordion submenu toggle
      the.eventHandlers['event_1'] = KTUtil.on(element, '.menu-toggle', 'click', Plugin.handleSubmenuAccordion); // Dropdown mode(hoverable)

      if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) {
        // dropdown submenu - hover toggle
        the.eventHandlers['event_2'] = KTUtil.on(element, '[data-menu-toggle="hover"]', 'mouseover', Plugin.handleSubmenuDrodownHoverEnter);
        the.eventHandlers['event_3'] = KTUtil.on(element, '[data-menu-toggle="hover"]', 'mouseout', Plugin.handleSubmenuDrodownHoverExit); // dropdown submenu - click toggle

        the.eventHandlers['event_4'] = KTUtil.on(element, '[data-menu-toggle="click"] > .menu-toggle, [data-menu-toggle="click"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownClick);
        the.eventHandlers['event_5'] = KTUtil.on(element, '[data-menu-toggle="tab"] > .menu-toggle, [data-menu-toggle="tab"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownTabClick);
      } // Handle general link click


      the.eventHandlers['event_6'] = KTUtil.on(element, '.menu-item > .menu-link:not(.menu-toggle):not(.menu-link-toggle-skip)', 'click', Plugin.handleLinkClick); // Init scrollable menu

      if (the.options.scroll && the.options.scroll.height) {
        Plugin.scrollInit();
      }
    },

    /**
     * Reset menu
     * @returns {KTMenu}
     */
    reset: function reset() {
      KTUtil.off(element, 'click', the.eventHandlers['event_1']); // dropdown submenu - hover toggle

      KTUtil.off(element, 'mouseover', the.eventHandlers['event_2']);
      KTUtil.off(element, 'mouseout', the.eventHandlers['event_3']); // dropdown submenu - click toggle

      KTUtil.off(element, 'click', the.eventHandlers['event_4']);
      KTUtil.off(element, 'click', the.eventHandlers['event_5']); // handle link click

      KTUtil.off(element, 'click', the.eventHandlers['event_6']);
    },

    /**
     * Init scroll menu
     *
    */
    scrollInit: function scrollInit() {
      if (the.options.scroll && the.options.scroll.height) {
        KTUtil.scrollDestroy(element, true);
        KTUtil.scrollInit(element, {
          mobileNativeScroll: true,
          windowScroll: false,
          resetHeightOnDestroy: true,
          handleWindowResize: true,
          height: the.options.scroll.height,
          rememberPosition: the.options.scroll.rememberPosition
        });
      } else {
        KTUtil.scrollDestroy(element, true);
      }
    },

    /**
     * Update scroll menu
    */
    scrollUpdate: function scrollUpdate() {
      if (the.options.scroll && the.options.scroll.height) {
        KTUtil.scrollUpdate(element);
      }
    },

    /**
     * Scroll top
    */
    scrollTop: function scrollTop() {
      if (the.options.scroll && the.options.scroll.height) {
        KTUtil.scrollTop(element);
      }
    },

    /**
     * Get submenu mode for current breakpoint and menu state
     * @returns {KTMenu}
     */
    getSubmenuMode: function getSubmenuMode(el) {
      if (KTUtil.isBreakpointUp('lg')) {
        if (el && KTUtil.hasAttr(el, 'data-menu-toggle') && KTUtil.attr(el, 'data-menu-toggle') == 'hover') {
          return 'dropdown';
        }

        if (KTUtil.isset(the.options.submenu, 'desktop.state.body')) {
          if (KTUtil.hasClasses(body, the.options.submenu.desktop.state.body)) {
            return the.options.submenu.desktop.state.mode;
          } else {
            return the.options.submenu.desktop["default"];
          }
        } else if (KTUtil.isset(the.options.submenu, 'desktop')) {
          return the.options.submenu.desktop;
        }
      } else if (KTUtil.isBreakpointUp('md') && KTUtil.isBreakpointDown('lg') && KTUtil.isset(the.options.submenu, 'tablet')) {
        return the.options.submenu.tablet;
      } else if (KTUtil.isBreakpointDown('md') && KTUtil.isset(the.options.submenu, 'mobile')) {
        return the.options.submenu.mobile;
      } else {
        return false;
      }
    },

    /**
     * Get submenu mode for current breakpoint and menu state
     * @returns {KTMenu}
     */
    isConditionalSubmenuDropdown: function isConditionalSubmenuDropdown() {
      if (KTUtil.isBreakpointUp('lg') && KTUtil.isset(the.options.submenu, 'desktop.state.body')) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Reset submenu attributes
     * @returns {KTMenu}
     */
    resetSubmenuProps: function resetSubmenuProps(e) {
      var submenus = KTUtil.findAll(element, '.menu-submenu');

      if (submenus) {
        for (var i = 0, len = submenus.length; i < len; i++) {
          var submenu = submenus[0];
          KTUtil.css(submenu, 'display', '');
          KTUtil.css(submenu, 'overflow', '');

          if (submenu.hasAttribute('data-hor-direction')) {
            KTUtil.removeClass(submenu, 'menu-submenu-left');
            KTUtil.removeClass(submenu, 'menu-submenu-right');
            KTUtil.addClass(submenu, submenu.getAttribute('data-hor-direction'));
          }
        }
      }
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    handleSubmenuDrodownHoverEnter: function handleSubmenuDrodownHoverEnter(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      if (the.resumeDropdownHover() === false) {
        return;
      }

      var item = this;

      if (item.getAttribute('data-hover') == '1') {
        item.removeAttribute('data-hover');
        clearTimeout(item.getAttribute('data-timeout'));
        item.removeAttribute('data-timeout');
      }

      Plugin.showSubmenuDropdown(item);
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    handleSubmenuDrodownHoverExit: function handleSubmenuDrodownHoverExit(e) {
      if (the.resumeDropdownHover() === false) {
        return;
      }

      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this;
      var time = the.options.dropdown.timeout;
      var timeout = setTimeout(function () {
        if (item.getAttribute('data-hover') == '1') {
          Plugin.hideSubmenuDropdown(item, true);
        }
      }, time);
      item.setAttribute('data-hover', '1');
      item.setAttribute('data-timeout', timeout);
    },

    /**
     * Handles submenu click toggle
     * @returns {KTMenu}
     */
    handleSubmenuDropdownClick: function handleSubmenuDropdownClick(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this.closest('.menu-item'); // Trigger click event handlers

      var result = Plugin.eventTrigger('submenuToggle', this, e);

      if (result === false) {
        return;
      }

      if (item.getAttribute('data-menu-submenu-mode') == 'accordion') {
        return;
      }

      if (KTUtil.hasClass(item, 'menu-item-hover') === false) {
        KTUtil.addClass(item, 'menu-item-open-dropdown');
        Plugin.showSubmenuDropdown(item);
      } else {
        KTUtil.removeClass(item, 'menu-item-open-dropdown');
        Plugin.hideSubmenuDropdown(item, true);
      }

      e.preventDefault();
    },

    /**
     * Handles tab click toggle
     * @returns {KTMenu}
     */
    handleSubmenuDropdownTabClick: function handleSubmenuDropdownTabClick(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this.closest('.menu-item'); // Trigger click event handlers

      var result = Plugin.eventTrigger('submenuToggle', this, e);

      if (result === false) {
        return;
      }

      if (item.getAttribute('data-menu-submenu-mode') == 'accordion') {
        return;
      }

      if (KTUtil.hasClass(item, 'menu-item-hover') == false) {
        KTUtil.addClass(item, 'menu-item-open-dropdown');
        Plugin.showSubmenuDropdown(item);
      }

      e.preventDefault();
    },

    /**
     * Handles link click
     * @returns {KTMenu}
     */
    handleLinkClick: function handleLinkClick(e) {
      var submenu = this.closest('.menu-item.menu-item-submenu'); // Trigger click event handlers

      var result = Plugin.eventTrigger('linkClick', this, e);

      if (result === false) {
        return;
      }

      if (submenu && Plugin.getSubmenuMode(submenu) === 'dropdown') {
        Plugin.hideSubmenuDropdowns();
      }
    },

    /**
     * Handles submenu dropdown close on link click
     * @returns {KTMenu}
     */
    handleSubmenuDropdownClose: function handleSubmenuDropdownClose(e, el) {
      // exit if its not submenu dropdown mode
      if (Plugin.getSubmenuMode(el) === 'accordion') {
        return;
      }

      var shown = element.querySelectorAll('.menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)'); // check if currently clicked link's parent item ha

      if (shown.length > 0 && KTUtil.hasClass(el, 'menu-toggle') === false && el.querySelectorAll('.menu-toggle').length === 0) {
        // close opened dropdown menus
        for (var i = 0, len = shown.length; i < len; i++) {
          Plugin.hideSubmenuDropdown(shown[0], true);
        }
      }
    },

    /**
     * helper functions
     * @returns {KTMenu}
     */
    handleSubmenuAccordion: function handleSubmenuAccordion(e, el) {
      var query;
      var item = el ? el : this; // Trigger click event handlers

      var result = Plugin.eventTrigger('submenuToggle', this, e);

      if (result === false) {
        return;
      }

      if (Plugin.getSubmenuMode(el) === 'dropdown' && (query = item.closest('.menu-item'))) {
        if (query.getAttribute('data-menu-submenu-mode') != 'accordion') {
          e.preventDefault();
          return;
        }
      }

      var li = item.closest('.menu-item');
      var submenu = KTUtil.child(li, '.menu-submenu, .menu-inner');

      if (KTUtil.hasClass(item.closest('.menu-item'), 'menu-item-open-always')) {
        return;
      }

      if (li && submenu) {
        e.preventDefault();
        var speed = the.options.accordion.slideSpeed;
        var hasClosables = false;

        if (KTUtil.hasClass(li, 'menu-item-open') === false) {
          // hide other accordions
          if (the.options.accordion.expandAll === false) {
            var subnav = item.closest('.menu-nav, .menu-subnav');
            var closables = KTUtil.children(subnav, '.menu-item.menu-item-open.menu-item-submenu:not(.menu-item-here):not(.menu-item-open-always)');

            if (subnav && closables) {
              for (var i = 0, len = closables.length; i < len; i++) {
                var el_ = closables[0];
                var submenu_ = KTUtil.child(el_, '.menu-submenu');

                if (submenu_) {
                  KTUtil.slideUp(submenu_, speed, function () {
                    Plugin.scrollUpdate();
                    KTUtil.removeClass(el_, 'menu-item-open');
                  });
                }
              }
            }
          }

          KTUtil.slideDown(submenu, speed, function () {
            Plugin.scrollToItem(item);
            Plugin.scrollUpdate();
            Plugin.eventTrigger('submenuToggle', submenu, e);
          });
          KTUtil.addClass(li, 'menu-item-open');
        } else {
          KTUtil.slideUp(submenu, speed, function () {
            Plugin.scrollToItem(item);
            Plugin.eventTrigger('submenuToggle', submenu, e);
          });
          KTUtil.removeClass(li, 'menu-item-open');
        }
      }
    },

    /**
     * scroll to item function
     * @returns {KTMenu}
     */
    scrollToItem: function scrollToItem(item) {
      // handle auto scroll for accordion submenus
      if (KTUtil.isBreakpointUp('lg') && the.options.accordion.autoScroll && element.getAttribute('data-menu-scroll') !== '1') {
        KTUtil.scrollTo(item, the.options.accordion.autoScrollSpeed);
      }
    },

    /**
     * Hide submenu dropdown
     * @returns {KTMenu}
     */
    hideSubmenuDropdown: function hideSubmenuDropdown(item, classAlso) {
      // remove submenu activation class
      if (classAlso) {
        KTUtil.removeClass(item, 'menu-item-hover');
        KTUtil.removeClass(item, 'menu-item-active-tab');
      } // clear timeout


      item.removeAttribute('data-hover');

      if (item.getAttribute('data-menu-toggle-class')) {
        KTUtil.removeClass(body, item.getAttribute('data-menu-toggle-class'));
      }

      var timeout = item.getAttribute('data-timeout');
      item.removeAttribute('data-timeout');
      clearTimeout(timeout);
    },

    /**
     * Hide submenu dropdowns
     * @returns {KTMenu}
     */
    hideSubmenuDropdowns: function hideSubmenuDropdowns() {
      var items;

      if (items = element.querySelectorAll('.menu-item-submenu.menu-item-hover:not(.menu-item-tabs):not([data-menu-toggle="tab"])')) {
        for (var j = 0, cnt = items.length; j < cnt; j++) {
          Plugin.hideSubmenuDropdown(items[j], true);
        }
      }
    },

    /**
     * helper functions
     * @returns {KTMenu}
     */
    showSubmenuDropdown: function showSubmenuDropdown(item) {
      // close active submenus
      var list = element.querySelectorAll('.menu-item-submenu.menu-item-hover, .menu-item-submenu.menu-item-active-tab');

      if (list) {
        for (var i = 0, len = list.length; i < len; i++) {
          var el = list[i];

          if (item !== el && el.contains(item) === false && item.contains(el) === false) {
            Plugin.hideSubmenuDropdown(el, true);
          }
        }
      } // add submenu activation class


      KTUtil.addClass(item, 'menu-item-hover'); // Change the alignment of submenu is offscreen.

      var submenu = KTUtil.find(item, '.menu-submenu');

      if (submenu && submenu.hasAttribute('data-hor-direction') === false) {
        if (KTUtil.hasClass(submenu, 'menu-submenu-left')) {
          submenu.setAttribute('data-hor-direction', 'menu-submenu-left');
        } else if (KTUtil.hasClass(submenu, 'menu-submenu-right')) {
          submenu.setAttribute('data-hor-direction', 'menu-submenu-right');
        }
      }

      if (submenu && KTUtil.isOffscreen(submenu, 'left', 15) === true) {
        KTUtil.removeClass(submenu, 'menu-submenu-left');
        KTUtil.addClass(submenu, 'menu-submenu-right');
      } else if (submenu && KTUtil.isOffscreen(submenu, 'right', 15) === true) {
        KTUtil.removeClass(submenu, 'menu-submenu-right');
        KTUtil.addClass(submenu, 'menu-submenu-left');
      }

      if (item.getAttribute('data-menu-toggle-class')) {
        KTUtil.addClass(body, item.getAttribute('data-menu-toggle-class'));
      }
    },

    /**
     * Handles submenu slide toggle
     * @returns {KTMenu}
     */
    createSubmenuDropdownClickDropoff: function createSubmenuDropdownClickDropoff(el) {
      var query;
      var zIndex = (query = KTUtil.child(el, '.menu-submenu') ? KTUtil.css(query, 'z-index') : 0) - 1;
      var dropoff = document.createElement('<div class="menu-dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + zIndex + '"></div>');
      body.appendChild(dropoff);
      KTUtil.addEvent(dropoff, 'click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        KTUtil.remove(this);
        Plugin.hideSubmenuDropdown(el, true);
      });
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    pauseDropdownHover: function pauseDropdownHover(time) {
      var date = new Date();
      the.pauseDropdownHoverTime = date.getTime() + time;
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    resumeDropdownHover: function resumeDropdownHover() {
      var date = new Date();
      return date.getTime() > the.pauseDropdownHoverTime ? true : false;
    },

    /**
     * Reset menu's current active item
     * @returns {KTMenu}
     */
    resetActiveItem: function resetActiveItem(item) {
      var list;
      var parents;
      list = element.querySelectorAll('.menu-item-active');

      for (var i = 0, len = list.length; i < len; i++) {
        var el = list[0];
        KTUtil.removeClass(el, 'menu-item-active');
        KTUtil.hide(KTUtil.child(el, '.menu-submenu'));
        parents = KTUtil.parents(el, '.menu-item-submenu') || [];

        for (var i_ = 0, len_ = parents.length; i_ < len_; i_++) {
          var el_ = parents[i];
          KTUtil.removeClass(el_, 'menu-item-open');
          KTUtil.hide(KTUtil.child(el_, '.menu-submenu'));
        }
      } // close open submenus


      if (the.options.accordion.expandAll === false) {
        if (list = element.querySelectorAll('.menu-item-open')) {
          for (var i = 0, len = list.length; i < len; i++) {
            KTUtil.removeClass(parents[0], 'menu-item-open');
          }
        }
      }
    },

    /**
     * Sets menu's active item
     * @returns {KTMenu}
     */
    setActiveItem: function setActiveItem(item) {
      // reset current active item
      Plugin.resetActiveItem();
      var parents = KTUtil.parents(item, '.menu-item-submenu') || [];

      for (var i = 0, len = parents.length; i < len; i++) {
        KTUtil.addClass(parents[i], 'menu-item-open');
      }

      KTUtil.addClass(item, 'menu-item-active');
    },

    /**
     * Returns page breadcrumbs for the menu's active item
     * @returns {KTMenu}
     */
    getBreadcrumbs: function getBreadcrumbs(item) {
      var query;
      var breadcrumbs = [];
      var link = KTUtil.child(item, '.menu-link');
      breadcrumbs.push({
        text: query = KTUtil.child(link, '.menu-text') ? query.innerHTML : '',
        title: link.getAttribute('title'),
        href: link.getAttribute('href')
      });
      var parents = KTUtil.parents(item, '.menu-item-submenu');

      for (var i = 0, len = parents.length; i < len; i++) {
        var submenuLink = KTUtil.child(parents[i], '.menu-link');
        breadcrumbs.push({
          text: query = KTUtil.child(submenuLink, '.menu-text') ? query.innerHTML : '',
          title: submenuLink.getAttribute('title'),
          href: submenuLink.getAttribute('href')
        });
      }

      return breadcrumbs.reverse();
    },

    /**
     * Returns page title for the menu's active item
     * @returns {KTMenu}
     */
    getPageTitle: function getPageTitle(item) {
      var query;
      return query = KTUtil.child(item, '.menu-text') ? query.innerHTML : '';
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, target, e) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, target, e);
            }
          } else {
            return event.handler.call(this, target, e);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    },
    removeEvent: function removeEvent(name) {
      if (the.events[name]) {
        delete the.events[name];
      }
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Update scroll
   */


  the.scrollUpdate = function () {
    return Plugin.scrollUpdate();
  };
  /**
   * Re-init scroll
   */


  the.scrollReInit = function () {
    return Plugin.scrollInit();
  };
  /**
   * Scroll top
   */


  the.scrollTop = function () {
    return Plugin.scrollTop();
  };
  /**
   * Set active menu item
   */


  the.setActiveItem = function (item) {
    return Plugin.setActiveItem(item);
  };

  the.reload = function () {
    return Plugin.reload();
  };

  the.update = function (options) {
    return Plugin.update(options);
  };
  /**
   * Set breadcrumb for menu item
   */


  the.getBreadcrumbs = function (item) {
    return Plugin.getBreadcrumbs(item);
  };
  /**
   * Set page title for menu item
   */


  the.getPageTitle = function (item) {
    return Plugin.getPageTitle(item);
  };
  /**
   * Get submenu mode
   */


  the.getSubmenuMode = function (el) {
    return Plugin.getSubmenuMode(el);
  };
  /**
   * Hide dropdown
   * @returns {Object}
   */


  the.hideDropdown = function (item) {
    Plugin.hideSubmenuDropdown(item, true);
  };
  /**
   * Hide dropdowns
   * @returns {Object}
   */


  the.hideDropdowns = function () {
    Plugin.hideSubmenuDropdowns();
  };
  /**
   * Disable menu for given time
   * @returns {Object}
   */


  the.pauseDropdownHover = function (time) {
    Plugin.pauseDropdownHover(time);
  };
  /**
   * Disable menu for given time
   * @returns {Object}
   */


  the.resumeDropdownHover = function () {
    return Plugin.resumeDropdownHover();
  };
  /**
   * Register event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };

  the.off = function (name) {
    return Plugin.removeEvent(name);
  };

  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Handle plugin on window resize

  KTUtil.addResizeHandler(function () {
    if (init) {
      the.reload();
    }
  }); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTMenu;
} // Plugin global lazy initialization


document.addEventListener("click", function (e) {
  var body = KTUtil.getByTagName('body')[0];
  var query;

  if (query = body.querySelectorAll('.menu-nav .menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)[data-menu-toggle="click"]')) {
    for (var i = 0, len = query.length; i < len; i++) {
      var element = query[i].closest('.menu-nav').parentNode;

      if (element) {
        var the = KTUtil.data(element).get('menu');

        if (!the) {
          break;
        }

        if (!the || the.getSubmenuMode() !== 'dropdown') {
          break;
        }

        if (e.target !== element && element.contains(e.target) === false) {
          the.hideDropdowns();
        }
      }
    }
  }
});

/***/ }),

/***/ "./assets/admin/js/components/offcanvas.js":
/*!*************************************************!*\
  !*** ./assets/admin/js/components/offcanvas.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

var KTOffcanvas = function KTOffcanvas(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.getById(elementId);
  var body = KTUtil.getBody();

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    attrCustom: ''
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    construct: function construct(options) {
      if (KTUtil.data(element).has('offcanvas')) {
        the = KTUtil.data(element).get('offcanvas');
      } else {
        // Reset offcanvas
        Plugin.init(options); // Build offcanvas

        Plugin.build();
        KTUtil.data(element).set('offcanvas', the);
      }

      return the;
    },
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.classBase = the.options.baseClass;
      the.attrCustom = the.options.attrCustom;
      the.classShown = the.classBase + '-on';
      the.classOverlay = the.classBase + '-overlay';
      the.target;
      the.state = KTUtil.hasClass(element, the.classShown) ? 'shown' : 'hidden';
    },
    build: function build() {
      // offcanvas toggle
      if (the.options.toggleBy) {
        if (typeof the.options.toggleBy === 'string') {
          KTUtil.addEvent(KTUtil.getById(the.options.toggleBy), 'click', function (e) {
            e.preventDefault();
            the.target = this;
            Plugin.toggle();
          });
        } else if (the.options.toggleBy && the.options.toggleBy[0]) {
          if (the.options.toggleBy[0].target) {
            for (var i in the.options.toggleBy) {
              KTUtil.addEvent(KTUtil.getById(the.options.toggleBy[i].target), 'click', function (e) {
                e.preventDefault();
                the.target = this;
                Plugin.toggle();
              });
            }
          } else {
            for (var i in the.options.toggleBy) {
              KTUtil.addEvent(KTUtil.getById(the.options.toggleBy[i]), 'click', function (e) {
                e.preventDefault();
                the.target = this;
                Plugin.toggle();
              });
            }
          }
        } else if (the.options.toggleBy && the.options.toggleBy.target) {
          KTUtil.addEvent(KTUtil.getById(the.options.toggleBy.target), 'click', function (e) {
            e.preventDefault();
            the.target = this;
            Plugin.toggle();
          });
        }
      } // offcanvas close


      var closeBy = KTUtil.getById(the.options.closeBy);

      if (closeBy) {
        KTUtil.addEvent(closeBy, 'click', function (e) {
          e.preventDefault();
          the.target = this;
          Plugin.hide();
        });
      }
    },
    isShown: function isShown() {
      return the.state == 'shown' ? true : false;
    },
    toggle: function toggle() {
      ;
      Plugin.eventTrigger('toggle');

      if (the.state == 'shown') {
        Plugin.hide();
      } else {
        Plugin.show();
      }
    },
    show: function show() {
      if (the.state == 'shown') {
        return;
      }

      Plugin.eventTrigger('beforeShow');
      Plugin.toggleClass('show'); // Offcanvas panel

      KTUtil.attr(body, 'data-offcanvas-' + the.classBase, 'on');
      KTUtil.addClass(element, the.classShown);

      if (the.attrCustom.length > 0) {
        KTUtil.attr(body, 'data-offcanvas-' + the.classCustom, 'on'); //KTUtil.addClass(body, the.classCustom);
      }

      the.state = 'shown';

      if (the.options.overlay) {
        the.overlay = KTUtil.insertAfter(document.createElement('DIV'), element);
        KTUtil.addClass(the.overlay, the.classOverlay);
        KTUtil.addEvent(the.overlay, 'click', function (e) {
          //e.stopPropagation();
          e.preventDefault();
          Plugin.hide(the.target);
        });
      }

      Plugin.eventTrigger('afterShow');
    },
    hide: function hide() {
      if (the.state == 'hidden') {
        return;
      }

      Plugin.eventTrigger('beforeHide');
      Plugin.toggleClass('hide');
      KTUtil.removeAttr(body, 'data-offcanvas-' + the.classBase);
      KTUtil.removeClass(element, the.classShown);

      if (the.attrCustom.length > 0) {
        KTUtil.removeAttr(body, 'data-offcanvas-' + the.attrCustom);
      }

      the.state = 'hidden';

      if (the.options.overlay && the.overlay) {
        KTUtil.remove(the.overlay);
      }

      Plugin.eventTrigger('afterHide');
    },
    toggleClass: function toggleClass(mode) {
      var id = KTUtil.attr(the.target, 'id');
      var toggleBy;

      if (the.options.toggleBy && the.options.toggleBy[0] && the.options.toggleBy[0].target) {
        for (var i in the.options.toggleBy) {
          if (the.options.toggleBy[i].target === id) {
            toggleBy = the.options.toggleBy[i];
          }
        }
      } else if (the.options.toggleBy && the.options.toggleBy.target) {
        toggleBy = the.options.toggleBy;
      }

      if (toggleBy) {
        var el = KTUtil.getById(toggleBy.target);

        if (mode === 'show') {
          KTUtil.addClass(el, toggleBy.state);
        }

        if (mode === 'hide') {
          KTUtil.removeClass(el, toggleBy.state);
        }
      }
    },
    eventTrigger: function eventTrigger(name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   * @param options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Check if canvas is shown
   * @returns {boolean}
   */


  the.isShown = function () {
    return Plugin.isShown();
  };
  /**
   * Set to hide the canvas
   */


  the.hide = function () {
    return Plugin.hide();
  };
  /**
   * Set to show the canvas
   */


  the.show = function () {
    return Plugin.show();
  };
  /**
   * Attach event
   * @param name
   * @param handler
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   * @param name
   * @param handler
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTOffcanvas;
}

/***/ }),

/***/ "./assets/admin/js/components/scrolltop.js":
/*!*************************************************!*\
  !*** ./assets/admin/js/components/scrolltop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

var KTScrolltop = function KTScrolltop(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.getById(elementId);
  var body = KTUtil.getBody();

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    offset: 300,
    speed: 6000
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {mscrolltop}
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('scrolltop')) {
        the = KTUtil.data(element).get('scrolltop');
      } else {
        // reset scrolltop
        Plugin.init(options); // build scrolltop

        Plugin.build();
        KTUtil.data(element).set('scrolltop', the);
      }

      return the;
    },

    /**
     * Handles subscrolltop click toggle
     * @returns {mscrolltop}
     */
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
    },
    build: function build() {
      var timer;
      window.addEventListener('scroll', function () {
        KTUtil.throttle(timer, function () {
          Plugin.handle();
        }, 200);
      }); // handle button click

      KTUtil.addEvent(element, 'click', Plugin.scroll);
    },

    /**
     * Handles scrolltop click scrollTop
     */
    handle: function handle() {
      var pos = KTUtil.getScrollTop(); // current vertical position

      if (pos > the.options.offset) {
        if (body.hasAttribute('data-scrolltop') === false) {
          body.setAttribute('data-scrolltop', 'on');
        }
      } else {
        if (body.hasAttribute('data-scrolltop') === true) {
          body.removeAttribute('data-scrolltop');
        }
      }
    },

    /**
     * Handles scrolltop click scrollTop
     */
    scroll: function scroll(e) {
      e.preventDefault();
      KTUtil.scrollTop(0, the.options.speed);
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Get subscrolltop mode
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Set scrolltop content
   * @returns {mscrolltop}
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTScrolltop;
}

/***/ }),

/***/ "./assets/admin/js/components/toggle.js":
/*!**********************************************!*\
  !*** ./assets/admin/js/components/toggle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

var KTToggle = function KTToggle(toggleElement, targetElement, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = toggleElement;
  var target = targetElement;

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    targetToggleMode: 'class' // class|attribute

  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('toggle')) {
        the = KTUtil.data(element).get('toggle');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('toggle', the);
      }

      return the;
    },

    /**
     * Handles subtoggle click toggle
     */
    init: function init(options) {
      the.element = element;
      the.events = []; // Merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options); //alert(the.options.target.tagName);

      the.target = target;
      the.targetState = the.options.targetState;
      the.toggleState = the.options.toggleState;

      if (the.options.targetToggleMode == 'class') {
        the.state = KTUtil.hasClasses(the.target, the.targetState) ? 'on' : 'off';
      } else {
        the.state = KTUtil.hasAttr(the.target, 'data-' + the.targetState) ? KTUtil.attr(the.target, 'data-' + the.targetState) : 'off';
      }
    },

    /**
     * Setup toggle
     */
    build: function build() {
      KTUtil.addEvent(element, 'mouseup', Plugin.toggle);
    },

    /**
     * Handles offcanvas click toggle
     */
    toggle: function toggle(e) {
      Plugin.eventTrigger('beforeToggle');

      if (the.state == 'off') {
        Plugin.toggleOn();
      } else {
        Plugin.toggleOff();
      }

      Plugin.eventTrigger('afterToggle');
      e.preventDefault();
      return the;
    },

    /**
     * Handles toggle click toggle
     */
    toggleOn: function toggleOn() {
      Plugin.eventTrigger('beforeOn');

      if (the.options.targetToggleMode == 'class') {
        KTUtil.addClass(the.target, the.targetState);
      } else {
        KTUtil.attr(the.target, 'data-' + the.targetState, 'on');
      }

      if (the.toggleState) {
        KTUtil.addClass(element, the.toggleState);
      }

      the.state = 'on';
      Plugin.eventTrigger('afterOn');
      Plugin.eventTrigger('toggle');
      return the;
    },

    /**
     * Handles toggle click toggle
     */
    toggleOff: function toggleOff() {
      Plugin.eventTrigger('beforeOff');

      if (the.options.targetToggleMode == 'class') {
        KTUtil.removeClass(the.target, the.targetState);
      } else {
        KTUtil.removeAttr(the.target, 'data-' + the.targetState);
      }

      if (the.toggleState) {
        KTUtil.removeClass(element, the.toggleState);
      }

      the.state = 'off';
      Plugin.eventTrigger('afterOff');
      Plugin.eventTrigger('toggle');
      return the;
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Get toggle state
   */


  the.getState = function () {
    return the.state;
  };
  /**
   * Toggle
   */


  the.toggle = function () {
    return Plugin.toggle();
  };
  /**
   * Toggle on
   */


  the.toggleOn = function () {
    return Plugin.toggleOn();
  };
  /**
   * Toggle off
   */


  the.toggleOff = function () {
    return Plugin.toggleOff();
  };
  /**
   * Attach event
   * @returns {KTToggle}
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   * @returns {KTToggle}
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTToggle;
}

/***/ }),

/***/ "./assets/admin/js/components/util.js":
/*!********************************************!*\
  !*** ./assets/admin/js/components/util.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @class KTUtil  base utilize class that privides helper functions
 */
// Polyfills

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */


if (!Element.prototype.closest) {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  Element.prototype.closest = function (s) {
    var el = this;
    var ancestor = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);

    return null;
  };
}
/**
 * ChildNode.remove() polyfill
 * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
 * @author Chris Ferdinandi
 * @license MIT
 */


(function (elem) {
  for (var i = 0; i < elem.length; i++) {
    if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;

    window[elem[i]].prototype.remove = function () {
      this.parentNode.removeChild(this);
    };
  }
})(['Element', 'CharacterData', 'DocumentType']); //
// requestAnimationFrame polyfill by Erik Möller.
//  With fixes from Paul Irish and Tino Zijdel
//
//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//
//  MIT license
//


(function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})(); // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }

    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]); // getAttributeNames


if (Element.prototype.getAttributeNames == undefined) {
  Element.prototype.getAttributeNames = function () {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = attributes[i].name;
    }

    return result;
  };
} // Global variables


window.KTUtilElementDataStore = {};
window.KTUtilElementDataStoreID = 0;
window.KTUtilDelegatedEventHandlers = {};

var KTUtil = function () {
  var resizeHandlers = [];
  /** @type {object} breakpoints The device width breakpoints **/

  var breakpoints = {
    sm: 544,
    // Small screen / phone
    md: 768,
    // Medium screen / tablet
    lg: 992,
    // Large screen / desktop
    xl: 1200 // Extra large screen / wide desktop

  };
  /**
   * Handle window resize event with some
   * delay to attach event handlers upon resize complete
   */

  var _windowResizeHandler = function _windowResizeHandler() {
    var _runResizeHandlers = function _runResizeHandlers() {
      // reinitialize other subscribed elements
      for (var i = 0; i < resizeHandlers.length; i++) {
        var each = resizeHandlers[i];
        each.call();
      }
    };

    var timer;
    window.addEventListener('resize', function () {
      KTUtil.throttle(timer, function () {
        _runResizeHandlers();
      }, 200);
    });
  };

  return {
    /**
     * Class main initializer.
     * @param {object} settings.
     * @returns null
     */
    //main function to initiate the theme
    init: function init(settings) {
      if (settings && settings.breakpoints) {
        breakpoints = settings.breakpoints;
      }

      _windowResizeHandler();
    },

    /**
     * Adds window resize event handler.
     * @param {function} callback function.
     */
    addResizeHandler: function addResizeHandler(callback) {
      resizeHandlers.push(callback);
    },

    /**
     * Removes window resize event handler.
     * @param {function} callback function.
     */
    removeResizeHandler: function removeResizeHandler(callback) {
      for (var i = 0; i < resizeHandlers.length; i++) {
        if (callback === resizeHandlers[i]) {
          delete resizeHandlers[i];
        }
      }
    },

    /**
     * Trigger window resize handlers.
     */
    runResizeHandlers: function runResizeHandlers() {
      _runResizeHandlers();
    },
    resize: function resize() {
      if (typeof Event === 'function') {
        // modern browsers
        window.dispatchEvent(new Event('resize'));
      } else {
        // for IE and other old browsers
        // causes deprecation warning on modern browsers
        var evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
      }
    },

    /**
     * Get GET parameter value from URL.
     * @param {string} paramName Parameter name.
     * @returns {string}
     */
    getURLParam: function getURLParam(paramName) {
      var searchString = window.location.search.substring(1),
          i,
          val,
          params = searchString.split("&");

      for (i = 0; i < params.length; i++) {
        val = params[i].split("=");

        if (val[0] == paramName) {
          return unescape(val[1]);
        }
      }

      return null;
    },

    /**
     * Checks whether current device is mobile touch.
     * @returns {boolean}
     */
    isMobileDevice: function isMobileDevice() {
      var test = this.getViewPort().width < this.getBreakpoint('lg') ? true : false;

      if (test === false) {
        // For use within normal web clients
        test = navigator.userAgent.match(/iPad/i) != null;
      }

      return test;
    },

    /**
     * Checks whether current device is desktop.
     * @returns {boolean}
     */
    isDesktopDevice: function isDesktopDevice() {
      return KTUtil.isMobileDevice() ? false : true;
    },

    /**
     * Gets browser window viewport size. Ref:
     * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
     * @returns {object}
     */
    getViewPort: function getViewPort() {
      var e = window,
          a = 'inner';

      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }

      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    },

    /**
     * Checks whether given device mode is currently activated.
     * @param {string} mode Responsive mode name(e.g: desktop,
     *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
     * @returns {boolean}
     */
    isInResponsiveRange: function isInResponsiveRange(mode) {
      var breakpoint = this.getViewPort().width;

      if (mode == 'general') {
        return true;
      } else if (mode == 'desktop' && breakpoint >= this.getBreakpoint('lg') + 1) {
        return true;
      } else if (mode == 'tablet' && breakpoint >= this.getBreakpoint('md') + 1 && breakpoint < this.getBreakpoint('lg')) {
        return true;
      } else if (mode == 'mobile' && breakpoint <= this.getBreakpoint('md')) {
        return true;
      } else if (mode == 'desktop-and-tablet' && breakpoint >= this.getBreakpoint('md') + 1) {
        return true;
      } else if (mode == 'tablet-and-mobile' && breakpoint <= this.getBreakpoint('lg')) {
        return true;
      } else if (mode == 'minimal-desktop-and-below' && breakpoint <= this.getBreakpoint('xl')) {
        return true;
      }

      return false;
    },

    /**
           * Checks whether given device mode is currently activated.
           * @param {string} mode Responsive mode name(e.g: desktop,
           *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
           * @returns {boolean}
           */
    isBreakpointUp: function isBreakpointUp(mode) {
      var width = this.getViewPort().width;
      var breakpoint = this.getBreakpoint(mode);
      return width >= breakpoint;
    },
    isBreakpointDown: function isBreakpointDown(mode) {
      var width = this.getViewPort().width;
      var breakpoint = this.getBreakpoint(mode);
      return width < breakpoint;
    },

    /**
     * Generates unique ID for give prefix.
     * @param {string} prefix Prefix for generated ID
     * @returns {boolean}
     */
    getUniqueID: function getUniqueID(prefix) {
      return prefix + Math.floor(Math.random() * new Date().getTime());
    },

    /**
     * Gets window width for give breakpoint mode.
     * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)
     * @returns {number}
     */
    getBreakpoint: function getBreakpoint(mode) {
      return breakpoints[mode];
    },

    /**
     * Checks whether object has property matchs given key path.
     * @param {object} obj Object contains values paired with given key path
     * @param {string} keys Keys path seperated with dots
     * @returns {object}
     */
    isset: function isset(obj, keys) {
      var stone;
      keys = keys || '';

      if (keys.indexOf('[') !== -1) {
        throw new Error('Unsupported object path notation.');
      }

      keys = keys.split('.');

      do {
        if (obj === undefined) {
          return false;
        }

        stone = keys.shift();

        if (!obj.hasOwnProperty(stone)) {
          return false;
        }

        obj = obj[stone];
      } while (keys.length);

      return true;
    },

    /**
     * Gets highest z-index of the given element parents
     * @param {object} el jQuery element object
     * @returns {number}
     */
    getHighestZindex: function getHighestZindex(el) {
      var position, value;

      while (el && el !== document) {
        // Ignore z-index if position is set to a value where z-index is ignored by the browser
        // This makes behavior of this function consistent across browsers
        // WebKit always returns auto if the element is positioned
        position = KTUtil.css(el, 'position');

        if (position === "absolute" || position === "relative" || position === "fixed") {
          // IE returns 0 when zIndex is not specified
          // other browsers return a string
          // we ignore the case of nested elements with an explicit value of 0
          // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
          value = parseInt(KTUtil.css(el, 'z-index'));

          if (!isNaN(value) && value !== 0) {
            return value;
          }
        }

        el = el.parentNode;
      }

      return null;
    },

    /**
     * Checks whether the element has any parent with fixed positionfreg
     * @param {object} el jQuery element object
     * @returns {boolean}
     */
    hasFixedPositionedParent: function hasFixedPositionedParent(el) {
      var position;

      while (el && el !== document) {
        position = KTUtil.css(el, 'position');

        if (position === "fixed") {
          return true;
        }

        el = el.parentNode;
      }

      return false;
    },

    /**
     * Simulates delay
     */
    sleep: function sleep(milliseconds) {
      var start = new Date().getTime();

      for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break;
        }
      }
    },

    /**
     * Gets randomly generated integer value within given min and max range
     * @param {number} min Range start value
     * @param {number} max Range end value
     * @returns {number}
     */
    getRandomInt: function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Checks whether Angular library is included
     * @returns {boolean}
     */
    isAngularVersion: function isAngularVersion() {
      return window.Zone !== undefined ? true : false;
    },
    // jQuery Workarounds
    // Deep extend:  $.extend(true, {}, objA, objB);
    deepExtend: function deepExtend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj) continue;

        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (_typeof(obj[key]) === 'object') out[key] = KTUtil.deepExtend(out[key], obj[key]);else out[key] = obj[key];
          }
        }
      }

      return out;
    },
    // extend:  $.extend({}, objA, objB);
    extend: function extend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i]) continue;

        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
        }
      }

      return out;
    },
    getById: function getById(el) {
      if (typeof el === 'string') {
        return document.getElementById(el);
      } else {
        return el;
      }
    },
    getByTag: function getByTag(query) {
      return document.getElementsByTagName(query);
    },
    getByTagName: function getByTagName(query) {
      return document.getElementsByTagName(query);
    },
    getByClass: function getByClass(query) {
      return document.getElementsByClassName(query);
    },
    getBody: function getBody() {
      return document.getElementsByTagName('body')[0];
    },

    /**
     * Checks whether the element has given classes
     * @param {object} el jQuery element object
     * @param {string} Classes string
     * @returns {boolean}
     */
    hasClasses: function hasClasses(el, classes) {
      if (!el) {
        return;
      }

      var classesArr = classes.split(" ");

      for (var i = 0; i < classesArr.length; i++) {
        if (KTUtil.hasClass(el, KTUtil.trim(classesArr[i])) == false) {
          return false;
        }
      }

      return true;
    },
    hasClass: function hasClass(el, className) {
      if (!el) {
        return;
      }

      return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    },
    addClass: function addClass(el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          if (classNames[i] && classNames[i].length > 0) {
            el.classList.add(KTUtil.trim(classNames[i]));
          }
        }
      } else if (!KTUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className += ' ' + KTUtil.trim(classNames[x]);
        }
      }
    },
    removeClass: function removeClass(el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          el.classList.remove(KTUtil.trim(classNames[i]));
        }
      } else if (KTUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className = el.className.replace(new RegExp('\\b' + KTUtil.trim(classNames[x]) + '\\b', 'g'), '');
        }
      }
    },
    triggerCustomEvent: function triggerCustomEvent(el, eventName, data) {
      var event;

      if (window.CustomEvent) {
        event = new CustomEvent(eventName, {
          detail: data
        });
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
      }

      el.dispatchEvent(event);
    },
    triggerEvent: function triggerEvent(node, eventName) {
      // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
      var doc;

      if (node.ownerDocument) {
        doc = node.ownerDocument;
      } else if (node.nodeType == 9) {
        // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
        doc = node;
      } else {
        throw new Error("Invalid node passed to fireEvent: " + node.id);
      }

      if (node.dispatchEvent) {
        // Gecko-style approach (now the standard) takes more work
        var eventClass = ""; // Different events have different event classes.
        // If this switch statement can't map an eventName to an eventClass,
        // the event firing is going to fail.

        switch (eventName) {
          case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.

          case "mouseenter":
          case "mouseleave":
          case "mousedown":
          case "mouseup":
            eventClass = "MouseEvents";
            break;

          case "focus":
          case "change":
          case "blur":
          case "select":
            eventClass = "HTMLEvents";
            break;

          default:
            throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
            break;
        }

        var event = doc.createEvent(eventClass);
        var bubbles = eventName == "change" ? false : true;
        event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

        event.synthetic = true; // allow detection of synthetic events
        // The second parameter says go ahead with the default action

        node.dispatchEvent(event, true);
      } else if (node.fireEvent) {
        // IE-old school style
        var event = doc.createEventObject();
        event.synthetic = true; // allow detection of synthetic events

        node.fireEvent("on" + eventName, event);
      }
    },
    index: function index(el) {
      var c = el.parentNode.children,
          i = 0;

      for (; i < c.length; i++) {
        if (c[i] == el) return i;
      }
    },
    trim: function trim(string) {
      return string.trim();
    },
    eventTriggered: function eventTriggered(e) {
      if (e.currentTarget.dataset.triggered) {
        return true;
      } else {
        e.currentTarget.dataset.triggered = true;
        return false;
      }
    },
    remove: function remove(el) {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    },
    find: function find(parent, query) {
      parent = KTUtil.getById(parent);

      if (parent) {
        return parent.querySelector(query);
      }
    },
    findAll: function findAll(parent, query) {
      parent = KTUtil.getById(parent);

      if (parent) {
        return parent.querySelectorAll(query);
      }
    },
    insertAfter: function insertAfter(el, referenceNode) {
      return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    },
    parents: function parents(elem, selector) {
      // Element.matches() polyfill
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i = matches.length;

          while (--i >= 0 && matches.item(i) !== this) {}

          return i > -1;
        };
      } // Set up a parent array


      var parents = []; // Push each parent element to the array

      for (; elem && elem !== document; elem = elem.parentNode) {
        if (selector) {
          if (elem.matches(selector)) {
            parents.push(elem);
          }

          continue;
        }

        parents.push(elem);
      } // Return our parent array


      return parents;
    },
    children: function children(el, selector, log) {
      if (!el || !el.childNodes) {
        return;
      }

      var result = [],
          i = 0,
          l = el.childNodes.length;

      for (var i; i < l; ++i) {
        if (el.childNodes[i].nodeType == 1 && KTUtil.matches(el.childNodes[i], selector, log)) {
          result.push(el.childNodes[i]);
        }
      }

      return result;
    },
    child: function child(el, selector, log) {
      var children = KTUtil.children(el, selector, log);
      return children ? children[0] : null;
    },
    matches: function matches(el, selector, log) {
      var p = Element.prototype;

      var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      };

      if (el && el.tagName) {
        return f.call(el, selector);
      } else {
        return false;
      }
    },
    data: function data(el) {
      return {
        set: function set(name, data) {
          if (!el) {
            return;
          }

          if (el.customDataTag === undefined) {
            window.KTUtilElementDataStoreID++;
            el.customDataTag = window.KTUtilElementDataStoreID;
          }

          if (window.KTUtilElementDataStore[el.customDataTag] === undefined) {
            window.KTUtilElementDataStore[el.customDataTag] = {};
          }

          window.KTUtilElementDataStore[el.customDataTag][name] = data;
        },
        get: function get(name) {
          if (!el) {
            return;
          }

          if (el.customDataTag === undefined) {
            return null;
          }

          return this.has(name) ? window.KTUtilElementDataStore[el.customDataTag][name] : null;
        },
        has: function has(name) {
          if (!el) {
            return false;
          }

          if (el.customDataTag === undefined) {
            return false;
          }

          return window.KTUtilElementDataStore[el.customDataTag] && window.KTUtilElementDataStore[el.customDataTag][name] ? true : false;
        },
        remove: function remove(name) {
          if (el && this.has(name)) {
            delete window.KTUtilElementDataStore[el.customDataTag][name];
          }
        }
      };
    },
    outerWidth: function outerWidth(el, margin) {
      var width;

      if (margin === true) {
        width = parseFloat(el.offsetWidth);
        width += parseFloat(KTUtil.css(el, 'margin-left')) + parseFloat(KTUtil.css(el, 'margin-right'));
        return parseFloat(width);
      } else {
        width = parseFloat(el.offsetWidth);
        return width;
      }
    },
    offset: function offset(el) {
      var rect, win;

      if (!el) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!el.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = el.getBoundingClientRect();
      win = el.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    height: function height(el) {
      return KTUtil.css(el, 'height');
    },
    outerHeight: function outerHeight(el, withMargin) {
      var height = el.offsetHeight;
      var style;

      if (typeof withMargin !== 'undefined' && withMargin === true) {
        style = getComputedStyle(el);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
      } else {
        return height;
      }
    },
    visible: function visible(el) {
      return !(el.offsetWidth === 0 && el.offsetHeight === 0);
    },
    attr: function attr(el, name, value) {
      if (el == undefined) {
        return;
      }

      if (value !== undefined) {
        el.setAttribute(name, value);
      } else {
        return el.getAttribute(name);
      }
    },
    hasAttr: function hasAttr(el, name) {
      if (el == undefined) {
        return;
      }

      return el.getAttribute(name) ? true : false;
    },
    removeAttr: function removeAttr(el, name) {
      if (el == undefined) {
        return;
      }

      el.removeAttribute(name);
    },
    animate: function animate(from, to, duration, update, easing, done) {
      /**
       * TinyAnimate.easings
       *  Adapted from jQuery Easing
       */
      var easings = {};
      var easing;

      easings.linear = function (t, b, c, d) {
        return c * t / d + b;
      };

      easing = easings.linear; // Early bail out if called incorrectly

      if (typeof from !== 'number' || typeof to !== 'number' || typeof duration !== 'number' || typeof update !== 'function') {
        return;
      } // Create mock done() function if necessary


      if (typeof done !== 'function') {
        done = function done() {};
      } // Pick implementation (requestAnimationFrame | setTimeout)


      var rAF = window.requestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 50);
      }; // Animation loop


      var canceled = false;
      var change = to - from;

      function loop(timestamp) {
        var time = (timestamp || +new Date()) - start;

        if (time >= 0) {
          update(easing(time, from, change, duration));
        }

        if (time >= 0 && time >= duration) {
          update(to);
          done();
        } else {
          rAF(loop);
        }
      }

      update(from); // Start animation loop

      var start = window.performance && window.performance.now ? window.performance.now() : +new Date();
      rAF(loop);
    },
    actualCss: function actualCss(el, prop, cache) {
      var css = '';

      if (el instanceof HTMLElement === false) {
        return;
      }

      if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
        var value; // the element is hidden so:
        // making the el block so we can meassure its height but still be hidden

        css = el.style.cssText;
        el.style.cssText = 'position: absolute; visibility: hidden; display: block;';

        if (prop == 'width') {
          value = el.offsetWidth;
        } else if (prop == 'height') {
          value = el.offsetHeight;
        }

        el.style.cssText = css; // store it in cache

        el.setAttribute('kt-hidden-' + prop, value);
        return parseFloat(value);
      } else {
        // store it in cache
        return parseFloat(el.getAttribute('kt-hidden-' + prop));
      }
    },
    actualHeight: function actualHeight(el, cache) {
      return KTUtil.actualCss(el, 'height', cache);
    },
    actualWidth: function actualWidth(el, cache) {
      return KTUtil.actualCss(el, 'width', cache);
    },
    getScroll: function getScroll(element, method) {
      // The passed in `method` value should be 'Top' or 'Left'
      method = 'scroll' + method;
      return element == window || element == document ? self[method == 'scrollTop' ? 'pageYOffset' : 'pageXOffset'] || browserSupportsBoxModel && document.documentElement[method] || document.body[method] : element[method];
    },
    css: function css(el, styleProp, value) {
      if (!el) {
        return;
      }

      if (value !== undefined) {
        el.style[styleProp] = value;
      } else {
        var defaultView = (el.ownerDocument || document).defaultView; // W3C standard way:

        if (defaultView && defaultView.getComputedStyle) {
          // sanitize property name to css notation
          // (hyphen separated words eg. font-Size)
          styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
          return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        } else if (el.currentStyle) {
          // IE
          // sanitize property name to camelCase
          styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
            return letter.toUpperCase();
          });
          value = el.currentStyle[styleProp]; // convert other units to pixels on IE

          if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return function (value) {
              var oldLeft = el.style.left,
                  oldRsLeft = el.runtimeStyle.left;
              el.runtimeStyle.left = el.currentStyle.left;
              el.style.left = value || 0;
              value = el.style.pixelLeft + "px";
              el.style.left = oldLeft;
              el.runtimeStyle.left = oldRsLeft;
              return value;
            }(value);
          }

          return value;
        }
      }
    },
    slide: function slide(el, dir, speed, callback, recalcMaxHeight) {
      if (!el || dir == 'up' && KTUtil.visible(el) === false || dir == 'down' && KTUtil.visible(el) === true) {
        return;
      }

      speed = speed ? speed : 600;
      var calcHeight = KTUtil.actualHeight(el);
      var calcPaddingTop = false;
      var calcPaddingBottom = false;

      if (KTUtil.css(el, 'padding-top') && KTUtil.data(el).has('slide-padding-top') !== true) {
        KTUtil.data(el).set('slide-padding-top', KTUtil.css(el, 'padding-top'));
      }

      if (KTUtil.css(el, 'padding-bottom') && KTUtil.data(el).has('slide-padding-bottom') !== true) {
        KTUtil.data(el).set('slide-padding-bottom', KTUtil.css(el, 'padding-bottom'));
      }

      if (KTUtil.data(el).has('slide-padding-top')) {
        calcPaddingTop = parseInt(KTUtil.data(el).get('slide-padding-top'));
      }

      if (KTUtil.data(el).has('slide-padding-bottom')) {
        calcPaddingBottom = parseInt(KTUtil.data(el).get('slide-padding-bottom'));
      }

      if (dir == 'up') {
        // up
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          KTUtil.animate(0, calcPaddingTop, speed, function (value) {
            el.style.paddingTop = calcPaddingTop - value + 'px';
          }, 'linear');
        }

        if (calcPaddingBottom) {
          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = calcPaddingBottom - value + 'px';
          }, 'linear');
        }

        KTUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = calcHeight - value + 'px';
        }, 'linear', function () {
          el.style.height = '';
          el.style.display = 'none';

          if (typeof callback === 'function') {
            callback();
          }
        });
      } else if (dir == 'down') {
        // down
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          KTUtil.animate(0, calcPaddingTop, speed, function (value) {
            //
            el.style.paddingTop = value + 'px';
          }, 'linear', function () {
            el.style.paddingTop = '';
          });
        }

        if (calcPaddingBottom) {
          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = value + 'px';
          }, 'linear', function () {
            el.style.paddingBottom = '';
          });
        }

        KTUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = value + 'px';
        }, 'linear', function () {
          el.style.height = '';
          el.style.display = '';
          el.style.overflow = '';

          if (typeof callback === 'function') {
            callback();
          }
        });
      }
    },
    slideUp: function slideUp(el, speed, callback) {
      KTUtil.slide(el, 'up', speed, callback);
    },
    slideDown: function slideDown(el, speed, callback) {
      KTUtil.slide(el, 'down', speed, callback);
    },
    show: function show(el, display) {
      if (typeof el !== 'undefined') {
        el.style.display = display ? display : 'block';
      }
    },
    hide: function hide(el) {
      if (typeof el !== 'undefined') {
        el.style.display = 'none';
      }
    },
    addEvent: function addEvent(el, type, handler, one) {
      if (typeof el !== 'undefined' && el !== null) {
        el.addEventListener(type, handler);
      }
    },
    removeEvent: function removeEvent(el, type, handler) {
      if (el !== null) {
        el.removeEventListener(type, handler);
      }
    },
    on: function on(element, selector, event, handler) {
      if (!selector) {
        return;
      }

      var eventId = KTUtil.getUniqueID('event');

      window.KTUtilDelegatedEventHandlers[eventId] = function (e) {
        var targets = element.querySelectorAll(selector);
        var target = e.target;

        while (target && target !== element) {
          for (var i = 0, j = targets.length; i < j; i++) {
            if (target === targets[i]) {
              handler.call(target, e);
            }
          }

          target = target.parentNode;
        }
      };

      KTUtil.addEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
      return eventId;
    },
    off: function off(element, event, eventId) {
      if (!element || !window.KTUtilDelegatedEventHandlers[eventId]) {
        return;
      }

      KTUtil.removeEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
      delete window.KTUtilDelegatedEventHandlers[eventId];
    },
    one: function onetime(el, type, callback) {
      el.addEventListener(type, function callee(e) {
        // remove event
        if (e.target && e.target.removeEventListener) {
          e.target.removeEventListener(e.type, callee);
        } // need to verify from https://themeforest.net/author_dashboard#comment_23615588


        if (el && el.removeEventListener) {
          e.currentTarget.removeEventListener(e.type, callee);
        } // call handler


        return callback(e);
      });
    },
    hash: function hash(str) {
      var hash = 0,
          i,
          chr;
      if (str.length === 0) return hash;

      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
      }

      return hash;
    },
    animateClass: function animateClass(el, animationName, callback) {
      var animation;
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
        msAnimation: 'msAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          animation = animations[t];
        }
      }

      KTUtil.addClass(el, 'animated ' + animationName);
      KTUtil.one(el, animation, function () {
        KTUtil.removeClass(el, 'animated ' + animationName);
      });

      if (callback) {
        KTUtil.one(el, animation, callback);
      }
    },
    transitionEnd: function transitionEnd(el, callback) {
      var transition;
      var transitions = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        WebkitTransition: 'webkitTransitionEnd',
        msTransition: 'msTransitionEnd'
      };

      for (var t in transitions) {
        if (el.style[t] !== undefined) {
          transition = transitions[t];
        }
      }

      KTUtil.one(el, transition, callback);
    },
    animationEnd: function animationEnd(el, callback) {
      var animation;
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
        msAnimation: 'msAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          animation = animations[t];
        }
      }

      KTUtil.one(el, animation, callback);
    },
    animateDelay: function animateDelay(el, value) {
      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];

      for (var i = 0; i < vendors.length; i++) {
        KTUtil.css(el, vendors[i] + 'animation-delay', value);
      }
    },
    animateDuration: function animateDuration(el, value) {
      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];

      for (var i = 0; i < vendors.length; i++) {
        KTUtil.css(el, vendors[i] + 'animation-duration', value);
      }
    },
    scrollTo: function scrollTo(target, offset, duration) {
      var duration = duration ? duration : 500;
      var targetPos = target ? KTUtil.offset(target).top : 0;
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var from, to;

      if (offset) {
        scrollPos += offset;
      }

      from = scrollPos;
      to = targetPos;
      KTUtil.animate(from, to, duration, function (value) {
        document.documentElement.scrollTop = value;
        document.body.parentNode.scrollTop = value;
        document.body.scrollTop = value;
      }); //, easing, done
    },
    scrollTop: function scrollTop(offset, duration) {
      KTUtil.scrollTo(null, offset, duration);
    },
    isArray: function isArray(obj) {
      return obj && Array.isArray(obj);
    },
    ready: function ready(callback) {
      if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        callback();
      } else {
        document.addEventListener('DOMContentLoaded', callback);
      }
    },
    isEmpty: function isEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }

      return true;
    },
    numberString: function numberString(nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;

      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }

      return x1 + x2;
    },
    detectIE: function detectIE() {
      var ua = window.navigator.userAgent; // Test values; Uncomment to check result …
      // IE 10
      // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
      // IE 11
      // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
      // Edge 12 (Spartan)
      // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
      // Edge 13
      // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

      var msie = ua.indexOf('MSIE ');

      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');

      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');

      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      } // other browser


      return false;
    },
    isRTL: function isRTL() {
      var html = KTUtil.getByTagName('html')[0];

      if (html) {
        return KTUtil.attr(html, 'direction') == 'rtl';
      }
    },
    // Scroller
    scrollInit: function scrollInit(element, options) {
      if (!element) {
        return;
      } // Learn more: https://github.com/mdbootstrap/perfect-scrollbar#options


      var pluginDefOptions = {
        wheelSpeed: 0.5,
        swipeEasing: true,
        wheelPropagation: false,
        minScrollbarLength: 40,
        maxScrollbarLength: 300,
        suppressScrollX: true
      };
      options = KTUtil.deepExtend({}, pluginDefOptions, options); // Define init function

      function init() {
        var ps;
        var height; // Get extra options via data attributes

        var attrs = element.getAttributeNames();

        if (attrs.length > 0) {
          attrs.forEach(function (attrName) {
            // more options; https://github.com/ganlanyuan/tiny-slider#options
            if (/^data-.*/g.test(attrName)) {
              if (['scroll', 'height', 'mobile-height'].includes(optionName) == false) {
                var optionName = attrName.replace('data-', '').toLowerCase().replace(/(?:[\s-])\w/g, function (match) {
                  return match.replace('-', '').toUpperCase();
                });
                options[optionName] = KTUtil.filterBoolean(element.getAttribute(attrName));
              }
            }
          });
        }

        if (options.height instanceof Function) {
          height = options.height.call();
        } else {
          if (KTUtil.isMobileDevice() === true && options.mobileHeight) {
            height = parseInt(options.mobileHeight);
          } else if (options.height) {
            height = parseInt(options.height);
          } else {
            height = parseInt(KTUtil.css(element, 'height'));
          }
        }

        if (height === false) {
          KTUtil.scrollDestroy(element, true);
          return;
        }

        height = parseInt(height); // Destroy scroll on table and mobile modes

        if ((options.mobileNativeScroll || options.disableForMobile) && KTUtil.isMobileDevice() === true) {
          ps = KTUtil.data(element).get('ps');

          if (ps) {
            if (options.resetHeightOnDestroy) {
              KTUtil.css(element, 'height', 'auto');
            } else {
              KTUtil.css(element, 'overflow', 'auto');

              if (height > 0) {
                KTUtil.css(element, 'height', height + 'px');
              }
            }

            ps.destroy();
            ps = KTUtil.data(element).remove('ps');
          } else if (height > 0) {
            KTUtil.css(element, 'overflow', 'auto');
            KTUtil.css(element, 'height', height + 'px');
          }

          return;
        }

        if (height > 0) {
          KTUtil.css(element, 'height', height + 'px');
        }

        if (options.desktopNativeScroll) {
          KTUtil.css(element, 'overflow', 'auto');
          return;
        } // Pass options via HTML Attributes


        if (KTUtil.attr(element, 'data-window-scroll') == 'true') {
          options.windowScroll = true;
        } // Init scroll


        ps = KTUtil.data(element).get('ps');

        if (ps) {
          ps.update();
        } else {
          KTUtil.css(element, 'overflow', 'hidden');
          KTUtil.addClass(element, 'scroll');
          ps = new PerfectScrollbar(element, options);
          KTUtil.data(element).set('ps', ps);
        } // Remember scroll position in cookie


        var uid = KTUtil.attr(element, 'id'); // Todo:Consider using Localstorage

        if (options.rememberPosition === true && KTCookie && uid) {
          if (KTCookie.getCookie(uid)) {
            var pos = parseInt(KTCookie.getCookie(uid));

            if (pos > 0) {
              element.scrollTop = pos;
            }
          }

          element.addEventListener('ps-scroll-y', function () {
            KTCookie.setCookie(uid, element.scrollTop);
          });
        }
      } // Init


      init(); // Handle window resize

      if (options.handleWindowResize) {
        KTUtil.addResizeHandler(function () {
          init();
        });
      }
    },
    scrollUpdate: function scrollUpdate(element) {
      var ps = KTUtil.data(element).get('ps');

      if (ps) {
        ps.update();
      }
    },
    scrollUpdateAll: function scrollUpdateAll(parent) {
      var scrollers = KTUtil.findAll(parent, '.ps');

      for (var i = 0, len = scrollers.length; i < len; i++) {
        KTUtil.scrollUpdate(scrollers[i]);
      }
    },
    scrollDestroy: function scrollDestroy(element, resetAll) {
      var ps = KTUtil.data(element).get('ps');

      if (ps) {
        ps.destroy();
        ps = KTUtil.data(element).remove('ps');
      }

      if (element && resetAll) {
        element.style.setProperty('overflow', '');
        element.style.setProperty('height', '');
      }
    },
    filterBoolean: function filterBoolean(val) {
      // Convert string boolean
      if (val === true || val === 'true') {
        return true;
      }

      if (val === false || val === 'false') {
        return false;
      }

      return val;
    },
    setHTML: function setHTML(el, html) {
      el.innerHTML = html;
    },
    getHTML: function getHTML(el) {
      if (el) {
        return el.innerHTML;
      }
    },
    getDocumentHeight: function getDocumentHeight() {
      var body = document.body;
      var html = document.documentElement;
      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    },
    getScrollTop: function getScrollTop() {
      return (document.scrollingElement || document.documentElement).scrollTop;
    },
    changeColor: function changeColor(col, amt) {
      var usePound = false;

      if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
      }

      var num = parseInt(col, 16);
      var r = (num >> 16) + amt;
      if (r > 255) r = 255;else if (r < 0) r = 0;
      var b = (num >> 8 & 0x00FF) + amt;
      if (b > 255) b = 255;else if (b < 0) b = 0;
      var g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255;else if (g < 0) g = 0;
      return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
    },
    // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
    throttle: function throttle(timer, func, delay) {
      // If setTimeout is already scheduled, no need to do anything
      if (timer) {
        return;
      } // Schedule a setTimeout after delay seconds


      timer = setTimeout(function () {
        func(); // Once setTimeout function execution is finished, timerId = undefined so that in <br>
        // the next scroll event function execution can be scheduled by the setTimeout

        timer = undefined;
      }, delay);
    },
    // Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
    debounce: function debounce(timer, func, delay) {
      // Cancels the setTimeout method execution
      clearTimeout(timer); // Executes the func after delay time.

      timer = setTimeout(func, delay);
    },
    btnWait: function btnWait(el, cls, message, disable) {
      if (!el) {
        return;
      }

      if (typeof disable !== 'undefined' && disable === true) {
        KTUtil.attr(el, "disabled", true);
      }

      if (cls) {
        KTUtil.addClass(el, cls);
        KTUtil.attr(el, "wait-class", cls);
      }

      if (message) {
        var caption = KTUtil.find(el, '.btn-caption');

        if (caption) {
          KTUtil.data(caption).set('caption', KTUtil.getHTML(caption));
          KTUtil.setHTML(caption, message);
        } else {
          KTUtil.data(el).set('caption', KTUtil.getHTML(el));
          KTUtil.setHTML(el, message);
        }
      }
    },
    btnRelease: function btnRelease(el) {
      if (!el) {
        return;
      } /// Show loading state on button


      KTUtil.removeAttr(el, "disabled");

      if (KTUtil.hasAttr(el, "wait-class")) {
        KTUtil.removeClass(el, KTUtil.attr(el, "wait-class"));
      }

      var caption = KTUtil.find(el, '.btn-caption');

      if (caption && KTUtil.data(caption).has('caption')) {
        KTUtil.setHTML(caption, KTUtil.data(caption).get('caption'));
      } else if (KTUtil.data(el).has('caption')) {
        KTUtil.setHTML(el, KTUtil.data(el).get('caption'));
      }
    },
    isOffscreen: function isOffscreen(el, direction, offset) {
      offset = offset || 0;
      var windowWidth = KTUtil.getViewPort().width;
      var windowHeight = KTUtil.getViewPort().height;
      var top = KTUtil.offset(el).top;
      var height = KTUtil.outerHeight(el) + offset;
      var left = KTUtil.offset(el).left;
      var width = KTUtil.outerWidth(el) + offset;

      if (direction == 'bottom') {
        if (windowHeight < top + height) {
          return true;
        } else if (windowHeight > top + height * 1.5) {
          return true;
        }
      }

      if (direction == 'top') {
        if (top < 0) {
          return true;
        } else if (top > height) {
          return true;
        }
      }

      if (direction == 'left') {
        if (left < 0) {
          return true;
        } else if (left * 2 > width) {//console.log('left 2');
          //return true;
        }
      }

      if (direction == 'right') {
        if (windowWidth < left + width) {
          return true;
        } else {//console.log('right 2');
          //return true;
        }
      }

      return false;
    }
  };
}(); // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTUtil;
} // Initialize KTUtil class on document ready


KTUtil.ready(function () {
  if (typeof KTAppSettings !== 'undefined') {
    KTUtil.init(KTAppSettings);
  } else {
    KTUtil.init();
  }
}); // CSS3 Transitions only after page load(.page-loading class added to body tag and remove with JS on page load)

window.onload = function () {
  var result = KTUtil.getByTagName('body');

  if (result && result[0]) {
    KTUtil.removeClass(result[0], 'page-loading');
  }
};

/***/ }),

/***/ "./assets/admin/js/components/wizard.js":
/*!**********************************************!*\
  !*** ./assets/admin/js/components/wizard.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Component Definition

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTWizard = function KTWizard(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.getById(elementId);
  var body = KTUtil.getBody();

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    startStep: 1,
    clickableSteps: false // to make steps clickable this set value true and add data-wizard-clickable="true" in HTML for class="wizard" element

  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('wizard')) {
        the = KTUtil.data(element).get('wizard');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('wizard', the);
      }

      return the;
    },

    /**
     * Init wizard
     */
    init: function init(options) {
      the.element = element;
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options); // Elements

      the.steps = KTUtil.findAll(element, '[data-wizard-type="step"]');
      the.btnNext = KTUtil.find(element, '[data-wizard-type="action-next"]');
      the.btnPrev = KTUtil.find(element, '[data-wizard-type="action-prev"]');
      the.btnSubmit = KTUtil.find(element, '[data-wizard-type="action-submit"]'); // Variables

      the.events = [];
      the.lastStep = 0;
      the.currentStep = 1;
      the.newStep = 0;
      the.stopped = false;
      the.totalSteps = the.steps.length; // Init current step

      if (the.options.startStep > 1) {
        Plugin.goTo(the.options.startStep);
      } // Init UI


      Plugin.updateUI();
    },

    /**
     * Build Form Wizard
     */
    build: function build() {
      // Next button event handler
      KTUtil.addEvent(the.btnNext, 'click', function (e) {
        e.preventDefault(); // Set new step number

        Plugin.setNewStep(Plugin.getNextStep()); // Trigger change event

        if (Plugin.eventTrigger('change') !== false) {
          Plugin.goTo(Plugin.getNextStep());
        }
      }); // Prev button event handler

      KTUtil.addEvent(the.btnPrev, 'click', function (e) {
        e.preventDefault(); // Set new step number

        Plugin.setNewStep(Plugin.getPrevStep()); // Trigger change event

        if (Plugin.eventTrigger('change') !== false) {
          Plugin.goTo(Plugin.getPrevStep());
        }
      });

      if (the.options.clickableSteps === true) {
        KTUtil.on(element, '[data-wizard-type="step"]', 'click', function () {
          var index = KTUtil.index(this) + 1;

          if (index !== the.currentStep) {
            Plugin.setNewStep(index); // Trigger change event

            if (Plugin.eventTrigger('change') !== false) {
              Plugin.goTo(index);
            }
          }
        });
      } // Submit button event handler


      KTUtil.addEvent(the.btnSubmit, 'click', function (e) {
        e.preventDefault();
        Plugin.eventTrigger('submit');
      });
    },

    /**
     * Handles wizard click wizard
     */
    goTo: function goTo(number) {
      // Skip if stopped
      if (the.stopped === true) {
        the.stopped = false;
        return;
      } // Skip if this step is already shown


      if (number === the.currentStep || number > the.totalSteps || number < 0) {
        return;
      } // Validate step number


      number = parseInt(number); // Set current step

      the.lastStep = the.currentStep;
      the.currentStep = number;
      the.newStep = 0;
      Plugin.updateUI();
      Plugin.eventTrigger('changed');
      return the;
    },

    /**
     * Stop wizard
     */
    stop: function stop() {
      the.stopped = true;
    },

    /**
     * Resume wizard
     */
    resume: function resume() {
      the.stopped = false;
    },

    /**
     * Check last step
     */
    isLastStep: function isLastStep() {
      return the.currentStep === the.totalSteps;
    },

    /**
     * Check first step
     */
    isFirstStep: function isFirstStep() {
      return the.currentStep === 1;
    },

    /**
     * Check between step
     */
    isBetweenStep: function isBetweenStep() {
      return Plugin.isLastStep() === false && Plugin.isFirstStep() === false;
    },

    /**
     * Update wizard UI after step change
     */
    updateUI: function updateUI() {
      var stepType = '';
      var index = the.currentStep - 1;

      if (Plugin.isLastStep()) {
        stepType = 'last';
      } else if (Plugin.isFirstStep()) {
        stepType = 'first';
      } else {
        stepType = 'between';
      }

      KTUtil.attr(the.element, 'data-wizard-state', stepType); // Steps

      var steps = KTUtil.findAll(the.element, '[data-wizard-type="step"]');

      if (steps && steps.length > 0) {
        for (var i = 0, len = steps.length; i < len; i++) {
          if (i == index) {
            KTUtil.attr(steps[i], 'data-wizard-state', 'current');
          } else {
            if (i < index) {
              KTUtil.attr(steps[i], 'data-wizard-state', 'done');
            } else {
              KTUtil.attr(steps[i], 'data-wizard-state', 'pending');
            }
          }
        }
      } // Steps Info


      var stepsInfo = KTUtil.findAll(the.element, '[data-wizard-type="step-info"]');

      if (stepsInfo && stepsInfo.length > 0) {
        for (var i = 0, len = stepsInfo.length; i < len; i++) {
          if (i == index) {
            KTUtil.attr(stepsInfo[i], 'data-wizard-state', 'current');
          } else {
            KTUtil.removeAttr(stepsInfo[i], 'data-wizard-state');
          }
        }
      } // Steps Content


      var stepsContent = KTUtil.findAll(the.element, '[data-wizard-type="step-content"]');

      if (stepsContent && stepsContent.length > 0) {
        for (var i = 0, len = stepsContent.length; i < len; i++) {
          if (i == index) {
            KTUtil.attr(stepsContent[i], 'data-wizard-state', 'current');
          } else {
            KTUtil.removeAttr(stepsContent[i], 'data-wizard-state');
          }
        }
      }
    },

    /**
     * Get next step number
     */
    getNextStep: function getNextStep() {
      if (the.totalSteps >= the.currentStep + 1) {
        return the.currentStep + 1;
      } else {
        return the.totalSteps;
      }
    },

    /**
     * Get prev step number
     */
    getPrevStep: function getPrevStep() {
      if (the.currentStep - 1 >= 1) {
        return the.currentStep - 1;
      } else {
        return 1;
      }
    },

    /**
     * Get new step number
     */
    getNewStep: function getNewStep() {
      return the.newStep;
    },

    /**
     * Set new step
     */
    setNewStep: function setNewStep(step) {
      the.newStep = step;
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, nested) {
      //KTUtil.triggerCustomEvent(name);
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Go to the next step
   */


  the.goNext = function () {
    return Plugin.goTo(Plugin.getNextStep());
  };
  /**
   * Go to the prev step
   */


  the.goPrev = function () {
    return Plugin.goTo(Plugin.getPrevStep());
  };
  /**
   * Go to the last step
   */


  the.goLast = function () {
    return Plugin.goTo(Plugin.getLastStep());
  };
  /**
   * Go to the first step
   */


  the.goFirst = function () {
    return Plugin.goTo(Plugin.getFirstStep());
  };
  /**
   * Go to a step
   */


  the.goTo = function (number) {
    return Plugin.goTo(number);
  };
  /**
   * Stop wizard
   */


  the.stop = function () {
    return Plugin.stop();
  };
  /**
   * Resume wizard
   */


  the.resume = function () {
    return Plugin.resume();
  };
  /**
   * Get current step number
   */


  the.getStep = function () {
    return the.currentStep;
  };
  /**
   * Get new step number
   */


  the.getNewStep = function () {
    return Plugin.getNewStep();
  };
  /**
   * Set new step number
   */


  the.setNewStep = function (number) {
    Plugin.setNewStep(number);
  };
  /**
   * Check last step
   */


  the.isLastStep = function () {
    return Plugin.isLastStep();
  };
  /**
   * Check first step
   */


  the.isFirstStep = function () {
    return Plugin.isFirstStep();
  };
  /**
   * Attach event("change", "changed", "submit")
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTWizard;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/aside-menu.js":
/*!***************************************************!*\
  !*** ./assets/admin/js/layout/base/aside-menu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

var KTLayoutAsideMenu = function () {
  // Private properties
  var _body;

  var _element;

  var _menuObject; // Initialize


  var _init = function _init() {
    var menuDesktopMode = KTUtil.attr(_element, 'data-menu-dropdown') === '1' ? 'dropdown' : 'accordion';
    var scroll;

    if (KTUtil.attr(_element, 'data-menu-scroll') === '1') {
      scroll = {
        rememberPosition: true,
        // remember position on page reload
        height: function height() {
          // calculate available scrollable area height
          var height = parseInt(KTUtil.getViewPort().height);

          if (KTUtil.isBreakpointUp('lg')) {
            height = height - KTLayoutBrand.getHeight();
          }

          height = height - (parseInt(KTUtil.css(_element, 'marginBottom')) + parseInt(KTUtil.css(_element, 'marginTop')));
          return height;
        }
      };
    }

    _menuObject = new KTMenu(_element, {
      // Vertical scroll
      scroll: scroll,
      // Submenu setup
      submenu: {
        desktop: menuDesktopMode,
        tablet: 'accordion',
        // menu set to accordion in tablet mode
        mobile: 'accordion' // menu set to accordion in mobile mode

      },
      // Accordion setup
      accordion: {
        expandAll: false // allow having multiple expanded accordions in the menu

      }
    });
  };

  var _initHover = function _initHover() {
    // Handle Minimized Aside Hover
    if (KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize-hoverable')) {
      var insideTm;
      var outsideTm; // Handle Aside Hover Mode

      KTUtil.addEvent(_element, 'mouseenter', function (e) {
        e.preventDefault();

        if (KTUtil.isBreakpointUp('lg') === false) {
          return;
        }

        if (outsideTm) {
          clearTimeout(outsideTm);
          outsideTm = null;
        }

        if (insideTm) {
          clearTimeout(insideTm);
          insideTm = null;
        }

        insideTm = setTimeout(function () {
          if (KTUtil.hasClass(_body, 'aside-minimize') && KTUtil.isBreakpointUp('lg')) {
            // Hover class
            KTUtil.addClass(_body, 'aside-minimize-hover');
            KTLayoutAsideMenu.getMenu().scrollUpdate();
            KTLayoutAsideMenu.getMenu().scrollTop();
          }
        }, 50);
      });
      KTUtil.addEvent(KTLayoutAside.getElement(), 'mouseleave', function (e) {
        e.preventDefault();

        if (KTUtil.isBreakpointUp('lg') === false) {
          return;
        }

        if (insideTm) {
          clearTimeout(insideTm);
          insideTm = null;
        }

        if (outsideTm) {
          clearTimeout(outsideTm);
          outsideTm = null;
        }

        outsideTm = setTimeout(function () {
          if (KTUtil.hasClass(_body, 'aside-minimize-hover') && KTUtil.isBreakpointUp('lg')) {
            KTUtil.removeClass(_body, 'aside-minimize-hover'); // Hover class

            KTLayoutAsideMenu.getMenu().scrollUpdate();
            KTLayoutAsideMenu.getMenu().scrollTop();
          }
        }, 100);
      });
    }
  }; // Public methods


  return {
    init: function init(id) {
      _body = KTUtil.getBody();
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize menu


      _init();

      _initHover();
    },
    getElement: function getElement() {
      return _element;
    },
    getMenu: function getMenu() {
      return _menuObject;
    },
    pauseDropdownHover: function pauseDropdownHover(time) {
      if (_menuObject) {
        _menuObject.pauseDropdownHover(time);
      }
    },
    closeMobileOffcanvas: function closeMobileOffcanvas() {
      if (_menuObject && KTUtil.isMobileDevice()) {
        _menuObject.hide();
      }
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutAsideMenu;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/aside-toggle.js":
/*!*****************************************************!*\
  !*** ./assets/admin/js/layout/base/aside-toggle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayoutAsideToggle = function () {
  // Private properties
  var _body;

  var _element;

  var _toggleObject; // Initialize


  var _init = function _init() {
    _toggleObject = new KTToggle(_element, _body, {
      targetState: 'aside-minimize',
      toggleState: 'active'
    });

    _toggleObject.on('toggle', function (toggle) {
      // Update sticky card
      if (typeof KTLayoutStickyCard !== 'undefined') {
        KTLayoutStickyCard.update();
      } // Pause header menu dropdowns


      if (typeof KTLayoutHeaderMenu !== 'undefined') {
        KTLayoutHeaderMenu.pauseDropdownHover(800);
      } // Pause aside menu dropdowns


      if (typeof KTLayoutAsideMenu !== 'undefined') {
        KTLayoutAsideMenu.pauseDropdownHover(800);
      } // Remember state in cookie


      KTCookie.setCookie('kt_aside_toggle_state', toggle.getState()); // to set default minimized left aside use this cookie value in your
      // server side code and add "kt-primary--minimize aside-minimize" classes to
      // the body tag in order to initialize the minimized left aside mode during page loading.
    });

    _toggleObject.on('beforeToggle', function (toggle) {
      if (KTUtil.hasClass(_body, 'aside-minimize') === false && KTUtil.hasClass(_body, 'aside-minimize-hover')) {
        KTUtil.removeClass(_body, 'aside-minimize-hover');
      }
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);
      _body = KTUtil.getBody();

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    getElement: function getElement() {
      return _element;
    },
    getToggle: function getToggle() {
      return _toggleObject;
    },
    onToggle: function onToggle(handler) {
      if (typeof _toggleObject.element !== 'undefined') {
        _toggleObject.on('toggle', handler);
      }
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutAsideToggle;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/aside.js":
/*!**********************************************!*\
  !*** ./assets/admin/js/layout/base/aside.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayoutAside = function () {
  // Private properties
  var _body;

  var _element;

  var _offcanvasObject; // Private functions
  // Initialize


  var _init = function _init() {
    var offcanvasClass = KTUtil.hasClass(_element, 'aside-offcanvas-default') ? 'aside-offcanvas-default' : 'aside'; // Initialize mobile aside offcanvas

    _offcanvasObject = new KTOffcanvas(_element, {
      baseClass: offcanvasClass,
      overlay: true,
      closeBy: 'kt_aside_close_btn',
      toggleBy: {
        target: 'kt_aside_mobile_toggle',
        state: 'mobile-toggle-active'
      }
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);
      _body = KTUtil.getBody();

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    getElement: function getElement() {
      return _element;
    },
    getOffcanvas: function getOffcanvas() {
      return _offcanvasObject;
    },
    isFixed: function isFixed() {
      return KTUtil.hasClass(_body, 'aside-fixed');
    },
    isMinimized: function isMinimized() {
      return KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize');
    },
    isHoverable: function isHoverable() {
      return KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize-hoverable');
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutAside;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/brand.js":
/*!**********************************************!*\
  !*** ./assets/admin/js/layout/base/brand.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayoutBrand = function () {
  // Private properties
  var _element; // Private functions


  var _getHeight = function _getHeight() {
    var height = 0;

    if (_element) {
      height = KTUtil.actualHeight(_element);
    }

    return height;
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      }
    },
    getElement: function getElement() {
      return _element;
    },
    getHeight: function getHeight() {
      return _getHeight();
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutBrand;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/content.js":
/*!************************************************!*\
  !*** ./assets/admin/js/layout/base/content.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTLayoutContent = function () {
  // Private properties
  var _element; // Private functions


  var _getHeight = function _getHeight() {
    var height;
    height = KTUtil.getViewPort().height;

    if (_element) {
      height = height - parseInt(KTUtil.css(_element, 'paddingTop')) - parseInt(KTUtil.css(_element, 'paddingBottom'));
    }

    height = height - KTLayoutHeader.getHeight();
    height = height - KTLayoutSubheader.getHeight();
    height = height - KTLayoutFooter.getHeight();
    return height;
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);
    },
    getHeight: function getHeight() {
      return _getHeight();
    },
    getElement: function getElement() {
      return _element;
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutContent;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/footer.js":
/*!***********************************************!*\
  !*** ./assets/admin/js/layout/base/footer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayoutFooter = function () {
  // Private properties
  var _element; // Private functions


  var _getHeight = function _getHeight() {
    var height = 0;

    if (_element) {
      height = KTUtil.actualHeight(_element);
    }

    return height;
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);
    },
    getHeight: function getHeight() {
      return _getHeight();
    },
    getElement: function getElement() {
      return _element;
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutFooter;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/header-menu.js":
/*!****************************************************!*\
  !*** ./assets/admin/js/layout/base/header-menu.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayoutHeaderMenu = function () {
  // Private properties
  var _menuElement;

  var _menuObject;

  var _offcanvasElement;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    _offcanvasObject = new KTOffcanvas(_offcanvasElement, {
      overlay: true,
      baseClass: 'header-menu-wrapper',
      closeBy: 'kt_header_menu_mobile_close_btn',
      toggleBy: {
        target: 'kt_header_mobile_toggle',
        state: 'mobile-toggle-active'
      }
    });
    _menuObject = new KTMenu(_menuElement, {
      submenu: {
        desktop: 'dropdown',
        tablet: 'accordion',
        mobile: 'accordion'
      },
      accordion: {
        slideSpeed: 200,
        // accordion toggle slide speed in milliseconds
        expandAll: false // allow having multiple expanded accordions in the menu

      }
    }); // Close aside offcanvas panel before page reload On tablet and mobile

    _menuObject.on('linkClick', function (menu) {
      if (KTUtil.isBreakpointDown('lg')) {
        // Tablet and mobile mode
        _offcanvasObject.hide(); // Hide offcanvas after general link click

      }
    });
  }; // Public methods


  return {
    init: function init(menuId, offcanvasId) {
      _menuElement = KTUtil.getById(menuId);
      _offcanvasElement = KTUtil.getById(offcanvasId);

      if (!_menuElement) {
        return;
      } // Initialize menu


      _init();
    },
    getMenuElement: function getMenuElement() {
      return _menuElement;
    },
    getOffcanvasElement: function getOffcanvasElement() {
      return _offcanvasElement;
    },
    getMenu: function getMenu() {
      return _menuObject;
    },
    pauseDropdownHover: function pauseDropdownHover(time) {
      if (_menuObject) {
        _menuObject.pauseDropdownHover(time);
      }
    },
    getOffcanvas: function getOffcanvas() {
      return _offcanvasObject;
    },
    closeMobileOffcanvas: function closeMobileOffcanvas() {
      if (_menuObject && KTUtil.isMobileDevice()) {
        _offcanvasObject.hide();
      }
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutHeaderMenu;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/header-topbar.js":
/*!******************************************************!*\
  !*** ./assets/admin/js/layout/base/header-topbar.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayoutHeaderTopbar = function () {
  // Private properties
  var _toggleElement;

  var _toggleObject; // Private functions


  var _init = function _init() {
    _toggleObject = new KTToggle(_toggleElement, KTUtil.getBody(), {
      targetState: 'topbar-mobile-on',
      toggleState: 'active'
    });
  }; // Public methods


  return {
    init: function init(id) {
      _toggleElement = KTUtil.getById(id);

      if (!_toggleElement) {
        return;
      } // Initialize


      _init();
    },
    getToggleElement: function getToggleElement() {
      return _toggleElement;
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutHeaderTopbar;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/header.js":
/*!***********************************************!*\
  !*** ./assets/admin/js/layout/base/header.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayoutHeader = function () {
  // Private properties
  var _element;

  var _elementForMobile;

  var _object; // Private functions
  // Get Height


  var _getHeight = function _getHeight() {
    var height = 0;

    if (_element) {
      height = KTUtil.actualHeight(_element) + 1;
    }

    return height;
  }; // Get Height


  var _getHeightForMobile = function _getHeightForMobile() {
    var height;
    height = KTUtil.actualHeight(_elementForMobile);
    return height;
  }; // Public Methods


  return {
    init: function init(id, idForMobile) {
      _element = KTUtil.getById(id);
      _elementForMobile = KTUtil.getById(idForMobile);

      if (!_element) {
        return;
      }
    },
    isFixed: function isFixed() {
      return KTUtil.hasClass(KTUtil.getBody(), 'header-fixed');
    },
    isFixedForMobile: function isFixedForMobile() {
      return KTUtil.hasClass(KTUtil.getBody(), 'header-mobile-fixed');
    },
    getElement: function getElement() {
      return _element;
    },
    getElementForMobile: function getElementForMobile() {
      return _elementForMobile;
    },
    getHeader: function getHeader() {
      return _object;
    },
    getHeight: function getHeight() {
      return _getHeight();
    },
    getHeightForMobile: function getHeightForMobile() {
      return _getHeightForMobile();
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutHeader;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/sticky-card.js":
/*!****************************************************!*\
  !*** ./assets/admin/js/layout/base/sticky-card.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTLayoutStickyCard = function () {
  // Private properties
  var _element;

  var _object; // Private functions


  var _init = function _init() {
    var offset = 300;

    if (typeof KTLayoutHeader !== 'undefined') {
      offset = KTLayoutHeader.getHeight();
    }

    _object = new KTCard(_element, {
      sticky: {
        offset: offset,
        zIndex: 90,
        position: {
          top: function top() {
            var pos = 0;
            var body = KTUtil.getBody();

            if (KTUtil.isBreakpointUp('lg')) {
              if (typeof KTLayoutHeader !== 'undefined' && KTLayoutHeader.isFixed()) {
                pos = pos + KTLayoutHeader.getHeight();
              }

              if (typeof KTLayoutSubheader !== 'undefined' && KTLayoutSubheader.isFixed()) {
                pos = pos + KTLayoutSubheader.getHeight();
              }
            } else {
              if (typeof KTLayoutHeader !== 'undefined' && KTLayoutHeader.isFixedForMobile()) {
                pos = pos + KTLayoutHeader.getHeightForMobile();
              }
            }

            pos = pos - 1; // remove header border width

            return pos;
          },
          left: function left(card) {
            return KTUtil.offset(_element).left;
          },
          right: function right(card) {
            var body = KTUtil.getBody();
            var cardWidth = parseInt(KTUtil.css(_element, 'width'));
            var bodyWidth = parseInt(KTUtil.css(body, 'width'));
            var cardOffsetLeft = KTUtil.offset(_element).left;
            return bodyWidth - cardWidth - cardOffsetLeft;
          }
        }
      }
    });

    _object.initSticky();

    KTUtil.addResizeHandler(function () {
      _object.updateSticky();
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    update: function update() {
      if (_object) {
        _object.updateSticky();
      }
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutStickyCard;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/stretched-card.js":
/*!*******************************************************!*\
  !*** ./assets/admin/js/layout/base/stretched-card.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTLayoutStretchedCard = function () {
  // Private properties
  var _element; // Private functions


  var _init = function _init() {
    var scroll = KTUtil.find(_element, '.card-scroll');
    var cardBody = KTUtil.find(_element, '.card-body');
    var cardHeader = KTUtil.find(_element, '.card-header');
    var height = KTLayoutContent.getHeight();
    height = height - parseInt(KTUtil.actualHeight(cardHeader));
    height = height - parseInt(KTUtil.css(_element, 'marginTop')) - parseInt(KTUtil.css(_element, 'marginBottom'));
    height = height - parseInt(KTUtil.css(_element, 'paddingTop')) - parseInt(KTUtil.css(_element, 'paddingBottom'));
    height = height - parseInt(KTUtil.css(cardBody, 'paddingTop')) - parseInt(KTUtil.css(cardBody, 'paddingBottom'));
    height = height - parseInt(KTUtil.css(cardBody, 'marginTop')) - parseInt(KTUtil.css(cardBody, 'marginBottom'));
    height = height - 3;
    KTUtil.css(scroll, 'height', height + 'px');
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init(); // Re-calculate on window resize


      KTUtil.addResizeHandler(function () {
        _init();
      });
    },
    update: function update() {
      _init();
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutStretchedCard;
}

/***/ }),

/***/ "./assets/admin/js/layout/base/subheader.js":
/*!**************************************************!*\
  !*** ./assets/admin/js/layout/base/subheader.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayoutSubheader = function () {
  // Private properties
  var _element; // Private functions


  var _getHeight = function _getHeight() {
    var height = 0;

    if (_element) {
      height = KTUtil.actualHeight(_element);
    }

    return height;
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      }
    },
    isFixed: function isFixed() {
      return KTUtil.hasClass(KTUtil.getBody(), 'subheader-fixed');
    },
    getElement: function getElement() {
      return _element;
    },
    getHeight: function getHeight() {
      return _getHeight();
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutSubheader;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/chat.js":
/*!*************************************************!*\
  !*** ./assets/admin/js/layout/extended/chat.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

var KTLayoutChat = function () {
  // Private functions
  var _init = function _init(element) {
    var scrollEl = KTUtil.find(element, '.scroll');
    var cardBodyEl = KTUtil.find(element, '.card-body');
    var cardHeaderEl = KTUtil.find(element, '.card-header');
    var cardFooterEl = KTUtil.find(element, '.card-footer');

    if (!scrollEl) {
      return;
    } // initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)


    KTUtil.scrollInit(scrollEl, {
      windowScroll: false,
      // allow browser scroll when the scroll reaches the end of the side
      mobileNativeScroll: true,
      // enable native scroll for mobile
      desktopNativeScroll: false,
      // disable native scroll and use custom scroll for desktop
      resetHeightOnDestroy: true,
      // reset css height on scroll feature destroyed
      handleWindowResize: true,
      // recalculate hight on window resize
      rememberPosition: true,
      // remember scroll position in cookie
      height: function height() {
        // calculate height
        var height;

        if (KTUtil.isBreakpointDown('lg')) {
          // Mobile mode
          return KTUtil.hasAttr(scrollEl, 'data-mobile-height') ? parseInt(KTUtil.attr(scrollEl, 'data-mobile-height')) : 400;
        } else if (KTUtil.isBreakpointUp('lg') && KTUtil.hasAttr(scrollEl, 'data-height')) {
          // Desktop Mode
          return parseInt(KTUtil.attr(scrollEl, 'data-height'));
        } else {
          height = KTLayoutContent.getHeight();

          if (scrollEl) {
            height = height - parseInt(KTUtil.css(scrollEl, 'margin-top')) - parseInt(KTUtil.css(scrollEl, 'margin-bottom'));
          }

          if (cardHeaderEl) {
            height = height - parseInt(KTUtil.css(cardHeaderEl, 'height'));
            height = height - parseInt(KTUtil.css(cardHeaderEl, 'margin-top')) - parseInt(KTUtil.css(cardHeaderEl, 'margin-bottom'));
          }

          if (cardBodyEl) {
            height = height - parseInt(KTUtil.css(cardBodyEl, 'padding-top')) - parseInt(KTUtil.css(cardBodyEl, 'padding-bottom'));
          }

          if (cardFooterEl) {
            height = height - parseInt(KTUtil.css(cardFooterEl, 'height'));
            height = height - parseInt(KTUtil.css(cardFooterEl, 'margin-top')) - parseInt(KTUtil.css(cardFooterEl, 'margin-bottom'));
          }
        } // Remove additional space


        height = height - 2;
        return height;
      }
    }); // attach events

    KTUtil.on(element, '.card-footer textarea', 'keydown', function (e) {
      if (e.keyCode == 13) {
        _handeMessaging(element);

        e.preventDefault();
        return false;
      }
    });
    KTUtil.on(element, '.card-footer .chat-send', 'click', function (e) {
      _handeMessaging(element);
    });
  };

  var _handeMessaging = function _handeMessaging(element) {
    var messagesEl = KTUtil.find(element, '.messages');
    var scrollEl = KTUtil.find(element, '.scroll');
    var textarea = KTUtil.find(element, 'textarea');

    if (textarea.value.length === 0) {
      return;
    }

    var node = document.createElement("DIV");
    KTUtil.addClass(node, 'd-flex flex-column mb-5 align-items-end');
    var html = '';
    html += '<div class="d-flex align-items-center">';
    html += '	<div>';
    html += '		<span class="text-muted font-size-sm">2 Hours</span>';
    html += '		<a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>';
    html += '	</div>';
    html += '	<div class="symbol symbol-circle symbol-40 ml-3">';
    html += '		<img alt="Pic" src="assets/media/users/300_12.jpg"/>';
    html += '	</div>';
    html += '</div>';
    html += '<div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">' + textarea.value + '</div>';
    KTUtil.setHTML(node, html);
    messagesEl.appendChild(node);
    textarea.value = '';
    scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));
    var ps;

    if (ps = KTUtil.data(scrollEl).get('ps')) {
      ps.update();
    }

    setTimeout(function () {
      var node = document.createElement("DIV");
      KTUtil.addClass(node, 'd-flex flex-column mb-5 align-items-start');
      var html = '';
      html += '<div class="d-flex align-items-center">';
      html += '	<div class="symbol symbol-circle symbol-40 mr-3">';
      html += '		<img alt="Pic" src="assets/media/users/300_12.jpg"/>';
      html += '	</div>';
      html += '	<div>';
      html += '		<a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>';
      html += '		<span class="text-muted font-size-sm">Just now</span>';
      html += '	</div>';
      html += '</div>';
      html += '<div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">';
      html += 'Right before vacation season we have the next Big Deal for you.';
      html += '</div>';
      KTUtil.setHTML(node, html);
      messagesEl.appendChild(node);
      textarea.value = '';
      scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));
      var ps;

      if (ps = KTUtil.data(scrollEl).get('ps')) {
        ps.update();
      }
    }, 2000);
  }; // Public methods


  return {
    init: function init(id) {
      // Init modal chat example
      _init(KTUtil.getById(id)); // Trigger click to show popup modal chat on page load


      if (encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com') {
        setTimeout(function () {
          if (!KTCookie.getCookie('kt_app_chat_shown')) {
            var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now

            KTCookie.setCookie('kt_app_chat_shown', 1, {
              expires: expires
            });

            if (KTUtil.getById('kt_app_chat_launch_btn')) {
              KTUtil.getById('kt_app_chat_launch_btn').click();
            }
          }
        }, 2000);
      }
    },
    setup: function setup(element) {
      _init(element);
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutChat;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/demo-panel.js":
/*!*******************************************************!*\
  !*** ./assets/admin/js/layout/extended/demo-panel.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

var KTLayoutDemoPanel = function () {
  // Private properties
  var _element;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_demo_panel_close',
      toggleBy: 'kt_demo_panel_toggle'
    });
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    var wrapper = KTUtil.find(_element, '.offcanvas-wrapper');
    var footer = KTUtil.find(_element, '.offcanvas-footer');
    KTUtil.scrollInit(wrapper, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (header) {
          height = height - parseInt(KTUtil.actualHeight(header));
          height = height - parseInt(KTUtil.css(header, 'marginTop'));
          height = height - parseInt(KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
          height = height - parseInt(KTUtil.css(content, 'marginTop'));
          height = height - parseInt(KTUtil.css(content, 'marginBottom'));
        }

        if (wrapper) {
          height = height - parseInt(KTUtil.css(wrapper, 'marginTop'));
          height = height - parseInt(KTUtil.css(wrapper, 'marginBottom'));
        }

        if (footer) {
          height = height - parseInt(KTUtil.actualHeight(footer));
          height = height - parseInt(KTUtil.css(footer, 'marginTop'));
          height = height - parseInt(KTUtil.css(footer, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
        height = height - 2;
        return height;
      }
    });

    if (typeof offcanvas !== 'undefined' && offcanvas.length === 0) {
      offcanvas.on('hide', function () {
        var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now

        KTCookie.setCookie('kt_demo_panel_shown', 1, {
          expires: expires
        });
      });
    }
  };

  var _remind = function _remind() {
    if (!(encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com')) {
      return;
    }

    setTimeout(function () {
      if (!KTCookie.getCookie('kt_demo_panel_shown')) {
        var expires = new Date(new Date().getTime() + 15 * 60 * 1000); // expire in 15 minutes from now

        KTCookie.setCookie('kt_demo_panel_shown', 1, {
          expires: expires
        });

        if (typeof _offcanvasObject !== 'undefined') {
          _offcanvasObject.show();
        }
      }
    }, 4000);
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init(); // Remind


      _remind();
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutDemoPanel;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/examples.js":
/*!*****************************************************!*\
  !*** ./assets/admin/js/layout/extended/examples.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

var KTLayoutExamples = function () {
  var initDefaultMode = function initDefaultMode(element) {
    var elements = element;

    if (typeof elements === 'undefined') {
      elements = document.querySelectorAll('.example:not(.example-compact):not(.example-hover):not(.example-basic)');
    }

    for (var i = 0; i < elements.length; ++i) {
      var example = elements[i];
      var copy = KTUtil.find(example, '.example-copy');
      var clipboard = new ClipboardJS(copy, {
        target: function target(trigger) {
          var example = trigger.closest('.example');
          var el = KTUtil.find(example, '.example-code .tab-pane.active');

          if (!el) {
            el = KTUtil.find(example, '.example-code');
          }

          return el;
        }
      });
      clipboard.on('success', function (e) {
        KTUtil.addClass(e.trigger, 'example-copied');
        e.clearSelection();
        setTimeout(function () {
          KTUtil.removeClass(e.trigger, 'example-copied');
        }, 2000);
      });
    }
  };

  var initCompactMode = function initCompactMode(element) {
    var example, code, toggle, copy, clipboard;
    var elements = element;

    if (typeof elements === 'undefined') {
      var elements = document.querySelectorAll('.example.example-compact');
    }

    for (var i = 0; i < elements.length; ++i) {
      var example = elements[i];
      var toggle = KTUtil.find(example, '.example-toggle');
      var copy = KTUtil.find(example, '.example-copy'); // Handle toggle

      KTUtil.addEvent(toggle, 'click', function () {
        var example = this.closest('.example');
        var code = KTUtil.find(example, '.example-code');
        var the = this;

        if (KTUtil.hasClass(this, 'example-toggled')) {
          KTUtil.slideUp(code, 300, function () {
            KTUtil.removeClass(the, 'example-toggled');
            KTUtil.removeClass(code, 'example-code-on');
            KTUtil.hide(code);
          });
        } else {
          KTUtil.addClass(code, 'example-code-on');
          KTUtil.addClass(this, 'example-toggled');
          KTUtil.slideDown(code, 300, function () {
            KTUtil.show(code);
          });
        }
      }); // Handle copy

      var clipboard = new ClipboardJS(copy, {
        target: function target(trigger) {
          var example = trigger.closest('.example');
          var el = KTUtil.find(example, '.example-code .tab-pane.active');

          if (!el) {
            el = KTUtil.find(example, '.example-code');
          }

          return el;
        }
      });
      clipboard.on('success', function (e) {
        KTUtil.addClass(e.trigger, 'example-copied');
        e.clearSelection();
        setTimeout(function () {
          KTUtil.removeClass(e.trigger, 'example-copied');
        }, 2000);
      });
    }
  };

  return {
    init: function init(element, options) {
      initDefaultMode(element);
      initCompactMode(element);
    }
  };
}(); // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTLayoutExamples;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/quick-actions.js":
/*!**********************************************************!*\
  !*** ./assets/admin/js/layout/extended/quick-actions.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTLayoutQuickActions = function () {
  // Private properties
  var _element;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_quick_actions_close',
      toggleBy: 'kt_quick_actions_toggle'
    });
    KTUtil.scrollInit(content, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (header) {
          height = height - parseInt(KTUtil.actualHeight(header));
          height = height - parseInt(KTUtil.css(header, 'marginTop'));
          height = height - parseInt(KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
          height = height - parseInt(KTUtil.css(content, 'marginTop'));
          height = height - parseInt(KTUtil.css(content, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
        height = height - 2;
        return height;
      }
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    getElement: function getElement() {
      return _element;
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutQuickActions;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/quick-cart.js":
/*!*******************************************************!*\
  !*** ./assets/admin/js/layout/extended/quick-cart.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTLayoutQuickCartPanel = function () {
  // Private properties
  var _element;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_quick_cart_close',
      toggleBy: 'kt_quick_cart_toggle'
    });
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    var wrapper = KTUtil.find(_element, '.offcanvas-wrapper');
    var footer = KTUtil.find(_element, '.offcanvas-footer');
    KTUtil.scrollInit(wrapper, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (header) {
          height = height - parseInt(KTUtil.actualHeight(header));
          height = height - parseInt(KTUtil.css(header, 'marginTop'));
          height = height - parseInt(KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
          height = height - parseInt(KTUtil.css(content, 'marginTop'));
          height = height - parseInt(KTUtil.css(content, 'marginBottom'));
        }

        if (wrapper) {
          height = height - parseInt(KTUtil.css(wrapper, 'marginTop'));
          height = height - parseInt(KTUtil.css(wrapper, 'marginBottom'));
        }

        if (footer) {
          height = height - parseInt(KTUtil.actualHeight(footer));
          height = height - parseInt(KTUtil.css(footer, 'marginTop'));
          height = height - parseInt(KTUtil.css(footer, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
        height = height - 2;
        return height;
      }
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init();
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutQuickCartPanel;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/quick-notifications.js":
/*!****************************************************************!*\
  !*** ./assets/admin/js/layout/extended/quick-notifications.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTLayoutQuickNotifications = function () {
  // Private properties
  var _element;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_quick_notifications_close',
      toggleBy: 'kt_quick_notifications_toggle'
    });
    KTUtil.scrollInit(content, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (header) {
          height = height - parseInt(KTUtil.actualHeight(header));
          height = height - parseInt(KTUtil.css(header, 'marginTop'));
          height = height - parseInt(KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
          height = height - parseInt(KTUtil.css(content, 'marginTop'));
          height = height - parseInt(KTUtil.css(content, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
        height = height - 2;
        return height;
      }
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    getElement: function getElement() {
      return _element;
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutQuickNotifications;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/quick-panel.js":
/*!********************************************************!*\
  !*** ./assets/admin/js/layout/extended/quick-panel.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTLayoutQuickPanel = function () {
  // Private properties
  var _element;

  var _offcanvasObject;

  var _notificationsElement;

  var _logsElement;

  var _settingsElement; // Private functions


  var _getContentHeight = function _getContentHeight() {
    var height;
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    var height = parseInt(KTUtil.getViewPort().height);

    if (header) {
      height = height - parseInt(KTUtil.actualHeight(header));
      height = height - parseInt(KTUtil.css(header, 'marginTop'));
      height = height - parseInt(KTUtil.css(header, 'marginBottom'));
    }

    if (content) {
      height = height - parseInt(KTUtil.css(content, 'marginTop'));
      height = height - parseInt(KTUtil.css(content, 'marginBottom'));
    }

    height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
    height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
    height = height - 2;
    return height;
  };

  var _init = function _init() {
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_quick_panel_close',
      toggleBy: 'kt_quick_panel_toggle'
    });
  };

  var _initNotifications = function _initNotifications() {
    KTUtil.scrollInit(_notificationsElement, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return _getContentHeight();
      }
    });
  };

  var _initLogs = function _initLogs() {
    KTUtil.scrollInit(_logsElement, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return _getContentHeight();
      }
    });
  };

  var _initSettings = function _initSettings() {
    KTUtil.scrollInit(_settingsElement, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return _getContentHeight();
      }
    });
  };

  var _updateScrollbars = function _updateScrollbars() {
    $(_element).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      KTUtil.scrollUpdate(_notificationsElement);
      KTUtil.scrollUpdate(_logsElement);
      KTUtil.scrollUpdate(_settingsElement);
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);
      _notificationsElement = KTUtil.getById('kt_quick_panel_notifications');
      _logsElement = KTUtil.getById('kt_quick_panel_logs');
      _settingsElement = KTUtil.getById('kt_quick_panel_settings');

      _init();

      _initNotifications();

      _initLogs();

      _initSettings();

      _updateScrollbars();
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutQuickPanel;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/quick-search.js":
/*!*********************************************************!*\
  !*** ./assets/admin/js/layout/extended/quick-search.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTLayoutQuickSearch = function () {
  // Private properties
  var _element;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    var form = KTUtil.find(_element, '.quick-search-form');
    var results = KTUtil.find(_element, '.quick-search-wrapper');
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_quick_search_close',
      toggleBy: 'kt_quick_search_toggle'
    });
    KTUtil.scrollInit(results, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (header) {
          height = height - parseInt(KTUtil.actualHeight(header));
          height = height - parseInt(KTUtil.css(header, 'marginTop'));
          height = height - parseInt(KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
          height = height - parseInt(KTUtil.css(content, 'marginTop'));
          height = height - parseInt(KTUtil.css(content, 'marginBottom'));
        }

        if (results) {
          height = height - parseInt(KTUtil.actualHeight(form));
          height = height - parseInt(KTUtil.css(form, 'marginTop'));
          height = height - parseInt(KTUtil.css(form, 'marginBottom'));
          height = height - parseInt(KTUtil.css(results, 'marginTop'));
          height = height - parseInt(KTUtil.css(results, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
        height = height - 2;
        return height;
      }
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    getElement: function getElement() {
      return _element;
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutQuickSearch;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/quick-user.js":
/*!*******************************************************!*\
  !*** ./assets/admin/js/layout/extended/quick-user.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

var KTLayoutQuickUser = function () {
  // Private properties
  var _element;

  var _offcanvasObject; // Private functions


  var _init = function _init() {
    var header = KTUtil.find(_element, '.offcanvas-header');
    var content = KTUtil.find(_element, '.offcanvas-content');
    _offcanvasObject = new KTOffcanvas(_element, {
      overlay: true,
      baseClass: 'offcanvas',
      placement: 'right',
      closeBy: 'kt_quick_user_close',
      toggleBy: 'kt_quick_user_toggle'
    });
    KTUtil.scrollInit(content, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (header) {
          height = height - parseInt(KTUtil.actualHeight(header));
          height = height - parseInt(KTUtil.css(header, 'marginTop'));
          height = height - parseInt(KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
          height = height - parseInt(KTUtil.css(content, 'marginTop'));
          height = height - parseInt(KTUtil.css(content, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));
        height = height - 2;
        return height;
      }
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    getElement: function getElement() {
      return _element;
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutQuickUser;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/scrolltop.js":
/*!******************************************************!*\
  !*** ./assets/admin/js/layout/extended/scrolltop.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTLayoutScrolltop = function () {
  // Private properties
  var _element;

  var _object; // Private functions


  var _init = function _init() {
    _object = new KTScrolltop(_element, {
      offset: 300,
      speed: 600
    });
  }; // Public methods


  return {
    init: function init(id) {
      _element = KTUtil.getById(id);

      if (!_element) {
        return;
      } // Initialize


      _init();
    },
    getElement: function getElement() {
      return _element;
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTLayoutScrolltop;
}

/***/ }),

/***/ "./assets/admin/js/layout/extended/search.js":
/*!***************************************************!*\
  !*** ./assets/admin/js/layout/extended/search.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //
// Handle User Quick Search For Dropdown, Inline and Offcanvas Search Panels
//

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

var KTLayoutSearch = function KTLayoutSearch() {
  // Private properties
  var _target;

  var _form;

  var _input;

  var _closeIcon;

  var _resultWrapper;

  var _resultDropdown;

  var _resultDropdownToggle;

  var _closeIconContainer;

  var _inputGroup;

  var _query = '';
  var _hasResult = false;
  var _timeout = false;
  var _isProcessing = false;
  var _requestTimeout = 200; // ajax request fire timeout in milliseconds

  var _spinnerClass = 'spinner spinner-sm spinner-primary';
  var _resultClass = 'quick-search-has-result';
  var _minLength = 2; // Private functions

  var _showProgress = function _showProgress() {
    _isProcessing = true;
    KTUtil.addClass(_closeIconContainer, _spinnerClass);

    if (_closeIcon) {
      KTUtil.hide(_closeIcon);
    }
  };

  var _hideProgress = function _hideProgress() {
    _isProcessing = false;
    KTUtil.removeClass(_closeIconContainer, _spinnerClass);

    if (_closeIcon) {
      if (_input.value.length < _minLength) {
        KTUtil.hide(_closeIcon);
      } else {
        KTUtil.show(_closeIcon, 'flex');
      }
    }
  };

  var _showDropdown = function _showDropdown() {
    if (_resultDropdownToggle && !KTUtil.hasClass(_resultDropdown, 'show')) {
      $(_resultDropdownToggle).dropdown('toggle');
      $(_resultDropdownToggle).dropdown('update');
    }
  };

  var _hideDropdown = function _hideDropdown() {
    if (_resultDropdownToggle && KTUtil.hasClass(_resultDropdown, 'show')) {
      $(_resultDropdownToggle).dropdown('toggle');
    }
  };

  var _processSearch = function _processSearch() {
    if (_hasResult && _query === _input.value) {
      _hideProgress();

      KTUtil.addClass(_target, _resultClass);

      _showDropdown();

      KTUtil.scrollUpdate(_resultWrapper);
      return;
    }

    _query = _input.value;
    KTUtil.removeClass(_target, _resultClass);

    _showProgress();

    _hideDropdown();

    setTimeout(function () {
      $.ajax({
        url: HOST_URL + '/api/quick_search.php',
        data: {
          query: _query
        },
        dataType: 'html',
        success: function success(res) {
          _hasResult = true;

          _hideProgress();

          KTUtil.addClass(_target, _resultClass);
          KTUtil.setHTML(_resultWrapper, res);

          _showDropdown();

          KTUtil.scrollUpdate(_resultWrapper);
        },
        error: function error(res) {
          _hasResult = false;

          _hideProgress();

          KTUtil.addClass(_target, _resultClass);
          KTUtil.setHTML(_resultWrapper, '<span class="font-weight-bold text-muted">Connection error. Please try again later..</div>');

          _showDropdown();

          KTUtil.scrollUpdate(_resultWrapper);
        }
      });
    }, 1000);
  };

  var _handleCancel = function _handleCancel(e) {
    _input.value = '';
    _query = '';
    _hasResult = false;
    KTUtil.hide(_closeIcon);
    KTUtil.removeClass(_target, _resultClass);

    _hideDropdown();
  };

  var _handleSearch = function _handleSearch() {
    if (_input.value.length < _minLength) {
      _hideProgress();

      _hideDropdown();

      return;
    }

    if (_isProcessing == true) {
      return;
    }

    if (_timeout) {
      clearTimeout(_timeout);
    }

    _timeout = setTimeout(function () {
      _processSearch();
    }, _requestTimeout);
  }; // Public methods


  return {
    init: function init(id) {
      _target = KTUtil.getById(id);

      if (!_target) {
        return;
      }

      _form = KTUtil.find(_target, '.quick-search-form');
      _input = KTUtil.find(_target, '.form-control');
      _closeIcon = KTUtil.find(_target, '.quick-search-close');
      _resultWrapper = KTUtil.find(_target, '.quick-search-wrapper');
      _resultDropdown = KTUtil.find(_target, '.dropdown-menu');
      _resultDropdownToggle = KTUtil.find(_target, '[data-toggle="dropdown"]');
      _inputGroup = KTUtil.find(_target, '.input-group');
      _closeIconContainer = KTUtil.find(_target, '.input-group .input-group-append'); // Attach input keyup handler

      KTUtil.addEvent(_input, 'keyup', _handleSearch);
      KTUtil.addEvent(_input, 'focus', _handleSearch); // Prevent enter click

      _form.onkeypress = function (e) {
        var key = e.charCode || e.keyCode || 0;

        if (key == 13) {
          e.preventDefault();
        }
      };

      KTUtil.addEvent(_closeIcon, 'click', _handleCancel);
    }
  };
}; // Webpack support


if (true) {
  module.exports = KTLayoutSearch;
}

var KTLayoutSearchInline = KTLayoutSearch;
var KTLayoutSearchOffcanvas = KTLayoutSearch;

/***/ }),

/***/ "./assets/admin/js/layout/initialize.js":
/*!**********************************************!*\
  !*** ./assets/admin/js/layout/initialize.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Initialization

KTUtil.ready(function () {
  ////////////////////////////////////////////////////
  // Layout Base Partials(mandatory for core layout)//
  ////////////////////////////////////////////////////
  // Init Desktop & Mobile Headers
  if (typeof KTLayoutHeader !== 'undefined') {
    KTLayoutHeader.init('kt_header', 'kt_header_mobile');
  } // Init Header Menu


  if (typeof KTLayoutHeaderMenu !== 'undefined') {
    KTLayoutHeaderMenu.init('kt_header_menu', 'kt_header_menu_wrapper');
  } // Init Header Topbar For Mobile Mode


  if (typeof KTLayoutHeaderTopbar !== 'undefined') {
    KTLayoutHeaderTopbar.init('kt_header_mobile_topbar_toggle');
  } // Init Brand Panel For Logo


  if (typeof KTLayoutBrand !== 'undefined') {
    KTLayoutBrand.init('kt_brand');
  } // Init Aside


  if (typeof KTLayoutAside !== 'undefined') {
    KTLayoutAside.init('kt_aside');
  } // Init Aside Menu Toggle


  if (typeof KTLayoutAsideToggle !== 'undefined') {
    KTLayoutAsideToggle.init('kt_aside_toggle');
  } // Init Aside Menu


  if (typeof KTLayoutAsideMenu !== 'undefined') {
    KTLayoutAsideMenu.init('kt_aside_menu');
  } // Init Subheader


  if (typeof KTLayoutSubheader !== 'undefined') {
    KTLayoutSubheader.init('kt_subheader');
  } // Init Content


  if (typeof KTLayoutContent !== 'undefined') {
    KTLayoutContent.init('kt_content');
  } // Init Footer


  if (typeof KTLayoutFooter !== 'undefined') {
    KTLayoutFooter.init('kt_footer');
  } //////////////////////////////////////////////
  // Layout Extended Partials(optional to use)//
  //////////////////////////////////////////////
  // Init Scrolltop


  if (typeof KTLayoutScrolltop !== 'undefined') {
    KTLayoutScrolltop.init('kt_scrolltop');
  } // Init Sticky Card


  if (typeof KTLayoutStickyCard !== 'undefined') {
    KTLayoutStickyCard.init('kt_page_sticky_card');
  } // Init Stretched Card


  if (typeof KTLayoutStretchedCard !== 'undefined') {
    KTLayoutStretchedCard.init('kt_page_stretched_card');
  } // Init Code Highlighter & Preview Blocks(used to demonstrate the theme features)


  if (typeof KTLayoutExamples !== 'undefined') {
    KTLayoutExamples.init();
  } // Init Demo Selection Panel


  if (typeof KTLayoutDemoPanel !== 'undefined') {
    KTLayoutDemoPanel.init('kt_demo_panel');
  } // Init Chat App(quick modal chat)


  if (typeof KTLayoutChat !== 'undefined') {
    KTLayoutChat.init('kt_chat_modal');
  } // Init Quick Actions Offcanvas Panel


  if (typeof KTLayoutQuickActions !== 'undefined') {
    KTLayoutQuickActions.init('kt_quick_actions');
  } // Init Quick Notifications Offcanvas Panel


  if (typeof KTLayoutQuickNotifications !== 'undefined') {
    KTLayoutQuickNotifications.init('kt_quick_notifications');
  } // Init Quick Offcanvas Panel


  if (typeof KTLayoutQuickPanel !== 'undefined') {
    KTLayoutQuickPanel.init('kt_quick_panel');
  } // Init Quick User Panel


  if (typeof KTLayoutQuickUser !== 'undefined') {
    KTLayoutQuickUser.init('kt_quick_user');
  } // Init Quick Search Panel


  if (typeof KTLayoutQuickSearch !== 'undefined') {
    KTLayoutQuickSearch.init('kt_quick_search');
  } // Init Quick Cart Panel


  if (typeof KTLayoutQuickCartPanel !== 'undefined') {
    KTLayoutQuickCartPanel.init('kt_quick_cart');
  } // Init Search For Quick Search Dropdown


  if (typeof KTLayoutSearch !== 'undefined') {
    KTLayoutSearch().init('kt_quick_search_dropdown');
  } // Init Search For Quick Search Offcanvas Panel


  if (typeof KTLayoutSearchOffcanvas !== 'undefined') {
    KTLayoutSearchOffcanvas().init('kt_quick_search_offcanvas');
  }
});

/***/ }),

/***/ "./assets/admin/js/pages/crud/forms/widgets/bootstrap-switch.js":
/*!**********************************************************************!*\
  !*** ./assets/admin/js/pages/crud/forms/widgets/bootstrap-switch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Class definition
var KTBootstrapSwitch = function () {
  // Private functions
  var demos = function demos() {
    // minimum setup
    $('[data-switch=true]').bootstrapSwitch();
  };

  return {
    // public functions
    init: function init() {
      demos();
    }
  };
}();

jQuery(document).ready(function () {
  KTBootstrapSwitch.init();
});

/***/ }),

/***/ "./assets/admin/js/pages/crud/forms/widgets/select2.js":
/*!*************************************************************!*\
  !*** ./assets/admin/js/pages/crud/forms/widgets/select2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

// Class definition
var KTSelect2 = function () {
  // Private functions
  var demos = function demos() {
    // basic
    $('#kt_select2_1, #kt_select2_1_validate').select2({
      placeholder: 'Select a state'
    }); // nested

    $('[data-id="select2"]').each(function () {
      $(this).select2({
        placeholder: 'Select a state'
      });
    });
    $('#kt_select2_2, #kt_select2_2_validate').select2({
      placeholder: 'Select a state'
    }); // multi select

    $('#kt_select2_3, #kt_select2_3_validate').select2({
      placeholder: 'Select a state'
    }); // basic

    $('#kt_select2_4').select2({
      placeholder: "Select a state",
      allowClear: true
    }); // loading data from array

    var data = [{
      id: 0,
      text: 'Enhancement'
    }, {
      id: 1,
      text: 'Bug'
    }, {
      id: 2,
      text: 'Duplicate'
    }, {
      id: 3,
      text: 'Invalid'
    }, {
      id: 4,
      text: 'Wontfix'
    }];
    $('#kt_select2_5').select2({
      placeholder: "Select a value",
      data: data
    }); // loading remote data

    function formatRepo(repo) {
      if (repo.loading) return repo.text;
      var markup = "<div class='select2-result-repository clearfix'>" + "<div class='select2-result-repository__meta'>" + "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";

      if (repo.description) {
        markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
      }

      markup += "<div class='select2-result-repository__statistics'>" + "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" + "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" + "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" + "</div>" + "</div></div>";
      return markup;
    }

    function formatRepoSelection(repo) {
      return repo.full_name || repo.text;
    }

    $("#kt_select2_6").select2({
      placeholder: "Search for git repositories",
      allowClear: true,
      ajax: {
        url: "https://api.github.com/search/repositories",
        dataType: 'json',
        delay: 250,
        data: function data(params) {
          return {
            q: params.term,
            // search term
            page: params.page
          };
        },
        processResults: function processResults(data, params) {
          // parse the results into the format expected by Select2
          // since we are using custom formatting functions we do not need to
          // alter the remote JSON data, except to indicate that infinite
          // scrolling can be used
          params.page = params.page || 1;
          return {
            results: data.items,
            pagination: {
              more: params.page * 30 < data.total_count
            }
          };
        },
        cache: true
      },
      escapeMarkup: function escapeMarkup(markup) {
        return markup;
      },
      // let our custom formatter work
      minimumInputLength: 1,
      templateResult: formatRepo,
      // omitted for brevity, see the source of this page
      templateSelection: formatRepoSelection // omitted for brevity, see the source of this page

    }); // custom styles
    // tagging support

    $('#kt_select2_12_1, #kt_select2_12_2, #kt_select2_12_3, #kt_select2_12_4').select2({
      placeholder: "Select an option"
    }); // disabled mode

    $('#kt_select2_7').select2({
      placeholder: "Select an option"
    }); // disabled results

    $('#kt_select2_8').select2({
      placeholder: "Select an option"
    }); // limiting the number of selections

    $('#kt_select2_9').select2({
      placeholder: "Select an option",
      maximumSelectionLength: 2
    }); // hiding the search box

    $('#kt_select2_10').select2({
      placeholder: "Select an option",
      minimumResultsForSearch: Infinity
    }); // tagging support

    $('#kt_select2_11').select2({
      placeholder: "Add a tag",
      tags: true
    }); // disabled results

    $('.kt-select2-general').select2({
      placeholder: "Select an option"
    });
  };

  var modalDemos = function modalDemos() {
    $('#kt_select2_modal').on('shown.bs.modal', function () {
      // basic
      $('#kt_select2_1_modal').select2({
        placeholder: "Select a state"
      }); // nested

      $('#kt_select2_2_modal').select2({
        placeholder: "Select a state"
      }); // multi select

      $('#kt_select2_3_modal').select2({
        placeholder: "Select a state"
      }); // basic

      $('#kt_select2_4_modal').select2({
        placeholder: "Select a state",
        allowClear: true
      });
    });
  }; // Public functions


  return {
    init: function init() {
      demos();
      modalDemos();
    }
  };
}(); // Initialization


jQuery(document).ready(function () {
  KTSelect2.init();
});

/***/ }),

/***/ "./assets/admin/js/pages/features/charts/apexcharts.js":
/*!*************************************************************!*\
  !*** ./assets/admin/js/pages/features/charts/apexcharts.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Shared Colors Definition

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

var primary = '#6993FF';
var success = '#1BC5BD';
var info = '#8950FC';
var warning = '#FFA800';
var danger = '#F64E60'; // Class definition

function generateBubbleData(baseval, count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    ;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }

  return series;
}

function generateData(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = 'w' + (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    });
    i++;
  }

  return series;
}

var KTApexChartsDemo = function () {
  // Private functions
  var _demo1 = function _demo1() {
    var apexChart = "#chart_1";
    var options = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      colors: [primary]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo2 = function _demo2() {
    var apexChart = "#chart_2";
    var options = {
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      },
      colors: [primary, success]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo3 = function _demo3() {
    var apexChart = "#chart_3";
    var options = {
      series: [{
        name: 'Mercado Libre',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Magento',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Dafiti',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      },
      yaxis: {
        title: {
          text: 'products'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function formatter(val) {
            return val + " products";
          }
        }
      },
      colors: [primary, success, warning]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo4 = function _demo4() {
    var apexChart = "#chart_4";
    var options = {
      series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Fiction Books Sales'
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: function formatter(val) {
            return val + "K";
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function formatter(val) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      },
      colors: [primary, success, warning, danger, info]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo5 = function _demo5() {
    var apexChart = "#chart_5";
    var options = {
      series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }],
      chart: {
        height: 350,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: 'XYZ - Stock Analysis (2009 - 2016)',
        align: 'left',
        offsetX: 110
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
      },
      yaxis: [{
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: primary
        },
        labels: {
          style: {
            colors: primary
          }
        },
        title: {
          text: "Income (thousand crores)",
          style: {
            color: primary
          }
        },
        tooltip: {
          enabled: true
        }
      }, {
        seriesName: 'Income',
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: success
        },
        labels: {
          style: {
            colors: success
          }
        },
        title: {
          text: "Operating Cashflow (thousand crores)",
          style: {
            color: success
          }
        }
      }, {
        seriesName: 'Revenue',
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: warning
        },
        labels: {
          style: {
            colors: warning
          }
        },
        title: {
          text: "Revenue (thousand crores)",
          style: {
            color: warning
          }
        }
      }],
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft',
          // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        }
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      }
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo6 = function _demo6() {
    var apexChart = "#chart_6";
    var options = {
      series: [{
        data: [{
          x: 'Analysis',
          y: [new Date('2019-02-27').getTime(), new Date('2019-03-04').getTime()],
          fillColor: primary
        }, {
          x: 'Design',
          y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()],
          fillColor: success
        }, {
          x: 'Coding',
          y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()],
          fillColor: info
        }, {
          x: 'Testing',
          y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()],
          fillColor: warning
        }, {
          x: 'Deployment',
          y: [new Date('2019-03-12').getTime(), new Date('2019-03-17').getTime()],
          fillColor: danger
        }]
      }],
      chart: {
        height: 350,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function formatter(val, opts) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          var a = moment(val[0]);
          var b = moment(val[1]);
          var diff = b.diff(a, 'days');
          return label + ': ' + diff + (diff > 1 ? ' days' : ' day');
        },
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        show: false
      },
      grid: {
        row: {
          colors: ['#f3f4f5', '#fff'],
          opacity: 1
        }
      }
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo7 = function _demo7() {
    var apexChart = "#chart_7";
    var options = {
      series: [{
        data: [{
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        }, {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        }, {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        }, {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        }, {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        }, {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        }, {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        }, {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        }, {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        }, {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        }, {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        }, {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        }, {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        }, {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        }, {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        }, {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        }, {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        }, {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        }, {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        }, {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        }, {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        }, {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        }, {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        }, {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        }, {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        }, {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86]
        }, {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16]
        }, {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4]
        }, {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81]
        }, {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578]
        }, {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579]
        }, {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        }, {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92]
        }, {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22]
        }, {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        }, {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25]
        }, {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97]
        }, {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602]
        }, {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95]
        }, {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        }, {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591]
        }, {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592]
        }, {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34]
        }, {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        }, {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        }, {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        }, {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99]
        }, {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81]
        }, {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96]
        }, {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39]
        }, {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        }, {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55]
        }, {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02]
        }, {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01]
        }, {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06]
        }, {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        }, {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5]
        }, {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        }, {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07]
        }, {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        }]
      }],
      chart: {
        type: 'candlestick',
        height: 350
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },
      colors: [success, danger]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo8 = function _demo8() {
    var apexChart = "#chart_8";
    var options = {
      series: [{
        name: 'Bubble1',
        data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Bubble2',
        data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Bubble3',
        data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Bubble4',
        data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }],
      chart: {
        height: 350,
        type: 'bubble'
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.8
      },
      xaxis: {
        tickAmount: 12,
        type: 'category'
      },
      yaxis: {
        max: 70
      },
      colors: [primary, success, warning, danger]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo9 = function _demo9() {
    var apexChart = "#chart_9";
    var options = {
      series: [{
        name: "SAMPLE A",
        data: [[16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
      }, {
        name: "SAMPLE B",
        data: [[36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
      }, {
        name: "SAMPLE C",
        data: [[21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
      }],
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function formatter(val) {
            return parseFloat(val).toFixed(1);
          }
        }
      },
      yaxis: {
        tickAmount: 7
      },
      colors: [primary, success, warning]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo10 = function _demo10() {
    var apexChart = "#chart_10";
    var options = {
      series: [{
        name: 'Jan',
        data: generateData(20, {
          min: -30,
          max: 55
        })
      }, {
        name: 'Feb',
        data: generateData(20, {
          min: -30,
          max: 55
        })
      }, {
        name: 'Mar',
        data: generateData(20, {
          min: -30,
          max: 55
        })
      }, {
        name: 'Apr',
        data: generateData(20, {
          min: -30,
          max: 55
        })
      }, {
        name: 'May',
        data: generateData(20, {
          min: -30,
          max: 55
        })
      }, {
        name: 'Jun',
        data: generateData(20, {
          min: -30,
          max: 55
        })
      }, {
        name: 'Jul',
        data: generateData(20, {
          min: -30,
          max: 55
        })
      }, {
        name: 'Aug',
        data: generateData(20, {
          min: -30,
          max: 55
        })
      }, {
        name: 'Sep',
        data: generateData(20, {
          min: -30,
          max: 55
        })
      }],
      chart: {
        height: 350,
        type: 'heatmap'
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          colorScale: {
            ranges: [{
              from: -30,
              to: 5,
              name: 'low',
              color: success
            }, {
              from: 6,
              to: 20,
              name: 'medium',
              color: primary
            }, {
              from: 21,
              to: 45,
              name: 'high',
              color: warning
            }, {
              from: 46,
              to: 55,
              name: 'extreme',
              color: danger
            }]
          }
        }
      },
      dataLabels: {
        enabled: false
      }
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo11 = function _demo11() {
    var apexChart = "#chart_11";
    var options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 380,
        type: 'donut'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      colors: [primary, success, warning, danger, info]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo12 = function _demo12() {
    var apexChart = "#chart_12";
    var options = {
      series: [44, 55, 13],
      chart: {
        width: 380,
        type: 'pie'
      },
      labels: ['Dafiti', 'Magento', 'Mercado Libre'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      colors: [primary, success, warning]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo13 = function _demo13() {
    var apexChart = "#chart_13";
    var options = {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px'
            },
            value: {
              fontSize: '16px'
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function formatter(w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      colors: [primary, success, warning, danger]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  var _demo14 = function _demo14() {
    var apexChart = "#chart_14";
    var options = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80]
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10]
      }],
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016']
      },
      colors: [primary, success, warning]
    };
    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
  };

  return {
    // public functions
    init: function init() {
      _demo1();

      _demo2();

      _demo3();

      _demo4();

      _demo5();

      _demo6();

      _demo7();

      _demo8();

      _demo9();

      _demo10();

      _demo11();

      _demo12();

      _demo13();

      _demo14();
    }
  };
}();

jQuery(document).ready(function () {
  KTApexChartsDemo.init();
});

/***/ }),

/***/ "./assets/admin/js/pages/features/miscellaneous/blockui.js":
/*!*****************************************************************!*\
  !*** ./assets/admin/js/pages/features/miscellaneous/blockui.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

var KTBlockUIDemo = function () {
  // Private functions
  // Basic demo
  var _demo1 = function _demo1() {
    // default
    $('#kt_blockui_default').click(function () {
      KTApp.block('#kt_blockui_content', {});
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_content');
      }, 2000);
    });
    $('#kt_blockui_overlay_color').click(function () {
      KTApp.block('#kt_blockui_content', {
        overlayColor: 'red',
        opacity: 0.1,
        state: 'primary' // a bootstrap color

      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_content');
      }, 2000);
    });
    $('#kt_blockui_custom_spinner').click(function () {
      KTApp.block('#kt_blockui_content', {
        overlayColor: '#000000',
        state: 'warning',
        // a bootstrap color
        size: 'lg' //available custom sizes: sm|lg

      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_content');
      }, 2000);
    });
    $('#kt_blockui_custom_text_1').click(function () {
      KTApp.block('#kt_blockui_content', {
        overlayColor: '#000000',
        state: 'danger',
        message: 'Please wait...'
      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_content');
      }, 2000);
    });
    $('#kt_blockui_custom_text_2').click(function () {
      KTApp.block('#kt_blockui_content', {
        overlayColor: '#000000',
        state: 'primary',
        message: 'Processing...'
      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_content');
      }, 2000);
    });
  }; // modal blocking


  var _demo2 = function _demo2() {
    // default
    $('#kt_blockui_modal_default_btn').click(function () {
      KTApp.block('#kt_blockui_modal_default .modal-dialog', {});
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_modal_default .modal-content');
      }, 2000);
    });
    $('#kt_blockui_modal_overlay_color_btn').click(function () {
      KTApp.block('#kt_blockui_modal_overlay_color .modal-content', {
        overlayColor: 'red',
        opacity: 0.1,
        state: 'primary' // a bootstrap color

      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_modal_overlay_color .modal-content');
      }, 2000);
    });
    $('#kt_blockui_modal_custom_spinner_btn').click(function () {
      KTApp.block('#kt_blockui_modal_custom_spinner .modal-content', {
        overlayColor: '#000000',
        state: 'warning',
        // a bootstrap color
        size: 'lg' //available custom sizes: sm|lg

      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_modal_custom_spinner .modal-content');
      }, 2000);
    });
    $('#kt_blockui_modal_custom_text_1_btn').click(function () {
      KTApp.block('#kt_blockui_modal_custom_text_1 .modal-content', {
        overlayColor: '#000000',
        state: 'danger',
        message: 'Please wait...'
      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_modal_custom_text_1 .modal-content');
      }, 2000);
    });
    $('#kt_blockui_modal_custom_text_2_btn').click(function () {
      KTApp.block('#kt_blockui_modal_custom_text_2 .modal-content', {
        overlayColor: '#000000',
        state: 'primary',
        message: 'Processing...'
      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_modal_custom_text_2 .modal-content');
      }, 2000);
    });
  }; // card blocking


  var _demo3 = function _demo3() {
    // default
    $('#kt_blockui_card_default').click(function () {
      KTApp.block('#kt_blockui_card');
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_card');
      }, 2000);
    });
    $('#kt_blockui_card_overlay_color').click(function () {
      KTApp.block('#kt_blockui_card', {
        overlayColor: 'red',
        opacity: 0.1,
        state: 'primary' // a bootstrap color

      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_card');
      }, 2000);
    });
    $('#kt_blockui_card_custom_spinner').click(function () {
      KTApp.block('#kt_blockui_card', {
        overlayColor: '#000000',
        state: 'warning',
        // a bootstrap color
        size: 'lg' //available custom sizes: sm|lg

      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_card');
      }, 2000);
    });
    $('#kt_blockui_card_custom_text_1').click(function () {
      KTApp.block('#kt_blockui_card', {
        overlayColor: '#000000',
        state: 'danger',
        message: 'Please wait...'
      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_card');
      }, 2000);
    });
    $('#kt_blockui_card_custom_text_2').click(function () {
      KTApp.block('#kt_blockui_card', {
        overlayColor: '#000000',
        state: 'primary',
        message: 'Processing...'
      });
      setTimeout(function () {
        KTApp.unblock('#kt_blockui_card');
      }, 2000);
    });
  }; // page blocking


  var _demo4 = function _demo4() {
    $('#kt_blockui_page_default').click(function () {
      KTApp.blockPage();
      setTimeout(function () {
        KTApp.unblockPage();
      }, 2000);
    });
    $('#kt_blockui_page_overlay_color').click(function () {
      KTApp.blockPage({
        overlayColor: 'red',
        opacity: 0.1,
        state: 'primary' // a bootstrap color

      });
      setTimeout(function () {
        KTApp.unblockPage();
      }, 2000);
    });
    $('#kt_blockui_page_custom_spinner').click(function () {
      KTApp.blockPage({
        overlayColor: '#000000',
        state: 'warning',
        // a bootstrap color
        size: 'lg' //available custom sizes: sm|lg

      });
      setTimeout(function () {
        KTApp.unblockPage();
      }, 2000);
    });
    $('#kt_blockui_page_custom_text_1').click(function () {
      KTApp.blockPage({
        overlayColor: '#000000',
        state: 'danger',
        message: 'Please wait...'
      });
      setTimeout(function () {
        KTApp.unblockPage();
      }, 2000);
    });
    $('#kt_blockui_page_custom_text_2').click(function () {
      KTApp.blockPage({
        overlayColor: '#000000',
        state: 'primary',
        message: 'Processing...'
      });
      setTimeout(function () {
        KTApp.unblockPage();
      }, 2000);
    });
  };

  return {
    // public functions
    init: function init() {
      _demo1();

      _demo2();

      _demo3();

      _demo4();
    }
  };
}();

jQuery(document).ready(function () {
  KTBlockUIDemo.init();
});

/***/ }),

/***/ "./assets/admin/js/pages/widgets.js":
/*!******************************************!*\
  !*** ./assets/admin/js/pages/widgets.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Class definition

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

var KTWidgets = function () {
  // Private properties
  // General Controls
  var _initDaterangepicker = function _initDaterangepicker() {
    if ($('#kt_dashboard_daterangepicker').length == 0) {
      return;
    }

    var picker = $('#kt_dashboard_daterangepicker');
    var start = moment();
    var end = moment();

    function cb(start, end, label) {
      var title = '';
      var range = '';

      if (end - start < 100 || label == 'Today') {
        title = 'Today:';
        range = start.format('MMM D');
      } else if (label == 'Yesterday') {
        title = 'Yesterday:';
        range = start.format('MMM D');
      } else {
        range = start.format('MMM D') + ' - ' + end.format('MMM D');
      }

      $('#kt_dashboard_daterangepicker_date').html(range);
      $('#kt_dashboard_daterangepicker_title').html(title);
    }

    picker.daterangepicker({
      direction: KTUtil.isRTL(),
      startDate: start,
      endDate: end,
      opens: 'left',
      applyClass: 'btn-primary',
      cancelClass: 'btn-light-primary',
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, cb);
    cb(start, end, '');
  }; // Stats widgets


  var _initStatsWidget7 = function _initStatsWidget7() {
    var element = document.getElementById("kt_stats_widget_7_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['success']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['success']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['success']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['success']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget8 = function _initStatsWidget8() {
    var element = document.getElementById("kt_stats_widget_8_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['danger']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['danger']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget9 = function _initStatsWidget9() {
    var element = document.getElementById("kt_stats_widget_9_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['primary']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['primary']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['primary']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['primary']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget10 = function _initStatsWidget10() {
    var element = document.getElementById("kt_stats_widget_10_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'info';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [40, 40, 30, 30, 35, 35, 50]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 55,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget11 = function _initStatsWidget11() {
    var element = document.getElementById("kt_stats_widget_11_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'success';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [40, 40, 30, 30, 35, 35, 50]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 55,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget12 = function _initStatsWidget12() {
    var element = document.getElementById("kt_stats_widget_12_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'primary';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [40, 40, 30, 30, 35, 35, 50]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 55,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  }; // Charts widgets


  var _initChartsWidget1 = function _initChartsWidget1() {
    var element = document.getElementById("kt_charts_widget_1_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['gray']['gray-300']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget2 = function _initChartsWidget2() {
    var element = document.getElementById("kt_charts_widget_2_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['warning'], KTApp.getSettings()['colors']['gray']['gray-300']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget3 = function _initChartsWidget3() {
    var element = document.getElementById("kt_charts_widget_3_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 40, 40, 90, 90, 70, 70]
      }],
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['info']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['theme']['base']['info'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['info']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        //size: 5,
        //colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: KTApp.getSettings()['colors']['theme']['base']['info'],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget4 = function _initChartsWidget4() {
    var element = document.getElementById("kt_charts_widget_4_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [60, 50, 80, 40, 100, 60]
      }, {
        name: 'Revenue',
        data: [70, 60, 110, 40, 50, 70]
      }],
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['theme']['light']['success'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['theme']['base']['warning']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['success'], KTApp.getSettings()['colors']['theme']['light']['warning']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['light']['success'], KTApp.getSettings()['colors']['theme']['light']['warning']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget5 = function _initChartsWidget5() {
    var element = document.getElementById("kt_charts_widget_5_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [40, 50, 65, 70, 50, 30]
      }, {
        name: 'Revenue',
        data: [-30, -40, -55, -60, -40, -20]
      }],
      chart: {
        type: 'bar',
        stacked: true,
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['12%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: -80,
        max: 80,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['theme']['base']['primary']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget6 = function _initChartsWidget6() {
    var element = document.getElementById("kt_charts_widget_6_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        type: 'bar',
        stacked: true,
        data: [40, 50, 65, 70, 50, 30]
      }, {
        name: 'Revenue',
        type: 'bar',
        stacked: true,
        data: [20, 20, 25, 30, 30, 20]
      }, {
        name: 'Expenses',
        type: 'area',
        data: [50, 80, 60, 90, 50, 70]
      }],
      chart: {
        stacked: true,
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          stacked: true,
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: ['12%']
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        max: 120,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['theme']['base']['primary'], KTApp.getSettings()['colors']['theme']['light']['primary']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget7 = function _initChartsWidget7() {
    var element = document.getElementById("kt_charts_widget_7_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 30, 50, 50, 35, 35]
      }, {
        name: 'Revenue',
        data: [55, 20, 20, 20, 70, 70]
      }, {
        name: 'Expenses',
        data: [60, 60, 40, 40, 30, 30]
      }],
      chart: {
        type: 'area',
        height: 300,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: [KTApp.getSettings()['colors']['theme']['base']['warning'], 'transparent', 'transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['warning'], KTApp.getSettings()['colors']['theme']['light']['info'], KTApp.getSettings()['colors']['gray']['gray-100']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['warning'], KTApp.getSettings()['colors']['theme']['light']['info'], KTApp.getSettings()['colors']['gray']['gray-100']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['warning'], KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['gray']['gray-500']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget8 = function _initChartsWidget8() {
    var element = document.getElementById("kt_charts_widget_8_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 30, 50, 50, 35, 35]
      }, {
        name: 'Revenue',
        data: [55, 20, 20, 20, 70, 70]
      }, {
        name: 'Expenses',
        data: [60, 60, 40, 40, 30, 30]
      }],
      chart: {
        type: 'area',
        height: 300,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: ['transparent', 'transparent', 'transparent']
      },
      xaxis: {
        x: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0,
          top: 0
        },
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['success'], KTApp.getSettings()['colors']['theme']['light']['danger'], KTApp.getSettings()['colors']['theme']['light']['info']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      },
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['success'], KTApp.getSettings()['colors']['theme']['light']['danger'], KTApp.getSettings()['colors']['theme']['light']['info']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['theme']['base']['danger'], KTApp.getSettings()['colors']['theme']['base']['info']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget9 = function _initChartsWidget9() {
    var element = document.getElementById("kt_charts_widget_9_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [20, 30, 45, 35, 25]
      }, {
        name: 'Revenue',
        data: [-20, -30, -45, -35, -25]
      }],
      chart: {
        type: 'bar',
        stacked: true,
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['17%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0,
        colors: ['transparent']
      },
      xaxis: {
        lines: {
          show: false
        },
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        lines: {
          show: false
        },
        min: -50,
        max: 50,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['theme']['base']['primary']],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  }; // Mixed widgets


  var _initMixedWidget1 = function _initMixedWidget1() {
    var element = document.getElementById("kt_mixed_widget_1_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var strokeColor = '#D13647';
    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40, 40, 40]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: strokeColor,
          opacity: 0.5
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 0
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        }
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['transparent'],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: [strokeColor],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget2 = function _initMixedWidget2() {
    var element = document.getElementById("kt_mixed_widget_2_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var strokeColor = '#287ED7';
    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40, 40, 40]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: strokeColor,
          opacity: 0.5
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 0
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['transparent'],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['info']],
        strokeColor: [strokeColor],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget3 = function _initMixedWidget3() {
    var element = document.getElementById("kt_mixed_widget_3_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var strokeColor = KTApp.getSettings()['colors']['theme']['base']['white'];
    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40, 40, 40]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: strokeColor,
          opacity: 0.3
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 0
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['transparent'],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['dark']],
        strokeColor: [strokeColor],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget4 = function _initMixedWidget4() {
    var element = document.getElementById("kt_mixed_widget_4_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [35, 65, 75, 55, 45, 60, 55]
      }, {
        name: 'Revenue',
        data: [40, 70, 80, 60, 50, 65, 60]
      }],
      chart: {
        type: 'bar',
        height: height,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        type: ['solid', 'solid'],
        opacity: [0.25, 1]
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff'],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          left: 20,
          right: 20
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget5 = function _initMixedWidget5() {
    var element = document.getElementById("kt_mixed_widget_5_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [35, 65, 75, 55, 45, 60, 55]
      }, {
        name: 'Revenue',
        data: [40, 70, 80, 60, 50, 65, 60]
      }],
      chart: {
        type: 'bar',
        height: height,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        type: ['solid', 'solid'],
        opacity: [0.25, 1]
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff'],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          left: 20,
          right: 20
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget6 = function _initMixedWidget6() {
    var element = document.getElementById("kt_mixed_widget_6_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [35, 65, 75, 55, 45, 60, 55]
      }, {
        name: 'Revenue',
        data: [40, 70, 80, 60, 50, 65, 60]
      }],
      chart: {
        type: 'bar',
        height: height,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: {
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      fill: {
        type: ['solid', 'solid'],
        opacity: [0.25, 1]
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff'],
      grid: {
        borderColor: KTApp.getSettings()['colors']['gray']['gray-200'],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          left: 20,
          right: 20
        }
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget13 = function _initMixedWidget13() {
    var element = document.getElementById("kt_mixed_widget_13_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 25, 45, 30, 55, 55]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['info']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 60,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['info']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['info']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['info']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget14 = function _initMixedWidget14() {
    var element = document.getElementById("kt_mixed_widget_14_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [0],
      chart: {
        height: height,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: '700'
            },
            value: {
              color: KTApp.getSettings()['colors']['gray']['gray-700'],
              fontSize: "30px",
              fontWeight: '700',
              offsetY: 12,
              show: true,
              formatter: function formatter(val) {
                return val + '%';
              }
            }
          },
          track: {
            background: KTApp.getSettings()['colors']['theme']['light']['success'],
            strokeWidth: '100%'
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['success']],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget15 = function _initMixedWidget15() {
    var element = document.getElementById("kt_mixed_widget_15_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 30, 60, 25, 25, 40]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        opacity: 1,
        gradient: {
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.375,
          stops: [25, 50, 100],
          colorStops: []
        }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['danger']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 65,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['danger']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget16 = function _initMixedWidget16() {
    var element = document.getElementById("kt_mixed_widget_16_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [60, 50, 75, 80],
      chart: {
        height: height,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "30%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: "700"
            },
            value: {
              color: KTApp.getSettings()['colors']['gray']['gray-700'],
              fontSize: "18px",
              fontWeight: "700",
              offsetY: 10,
              show: true
            },
            total: {
              show: true,
              label: 'Total',
              fontWeight: "bold",
              formatter: function formatter(w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return '60%';
              }
            }
          },
          track: {
            background: KTApp.getSettings()['colors']['gray']['gray-100'],
            strokeWidth: '100%'
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['info'], KTApp.getSettings()['colors']['theme']['base']['danger'], KTApp.getSettings()['colors']['theme']['base']['success'], KTApp.getSettings()['colors']['theme']['base']['primary']],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget17 = function _initMixedWidget17() {
    var element = document.getElementById("kt_mixed_widget_17_chart");
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'warning';
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 25, 45, 30, 55, 55]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 60,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget18 = function _initMixedWidget18() {
    var element = document.getElementById("kt_mixed_widget_18_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [74],
      chart: {
        height: height,
        type: 'radialBar',
        offsetY: 0
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 0,
            size: "70%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "13px",
              fontWeight: "700",
              offsetY: -5,
              color: KTApp.getSettings()['colors']['gray']['gray-500']
            },
            value: {
              color: KTApp.getSettings()['colors']['gray']['gray-700'],
              fontSize: "30px",
              fontWeight: "700",
              offsetY: -40,
              show: true
            }
          },
          track: {
            background: KTApp.getSettings()['colors']['theme']['light']['primary'],
            strokeWidth: '100%'
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['base']['primary']],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  }; // Tiles


  var _initTilesWidget1 = function _initTilesWidget1() {
    var element = document.getElementById("kt_tiles_widget_1_chart");
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'primary';
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [20, 22, 30, 28, 25, 26, 30, 28, 22, 24, 25, 35]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        opacity: 1,
        gradient: {
          type: "vertical",
          shadeIntensity: 0.55,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.2,
          stops: [25, 50, 100],
          colorStops: []
        }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 37,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      },
      padding: {
        top: 0,
        bottom: 0
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget2 = function _initTilesWidget2() {
    var element = document.getElementById("kt_tiles_widget_2_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var strokeColor = KTUtil.changeColor(KTApp.getSettings()['colors']['theme']['base']['danger']);
    var fillColor = KTUtil.changeColor(KTApp.getSettings()['colors']['theme']['base']['danger']);
    var options = {
      series: [{
        name: 'Net Profit',
        data: [10, 10, 20, 20, 12, 12]
      }],
      chart: {
        type: 'area',
        height: height,
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        padding: {
          top: 0,
          bottom: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        }
      },
      yaxis: {
        min: 0,
        max: 22,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return val + "";
            }
          }
        }
      },
      colors: [fillColor],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: [strokeColor],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget5 = function _initTilesWidget5() {
    var element = document.getElementById("kt_tiles_widget_5_chart");
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [10, 15, 18, 14]
      }, {
        name: 'Revenue',
        data: [8, 13, 16, 12]
      }],
      chart: {
        type: 'bar',
        height: height,
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        padding: {
          left: 20,
          right: 20
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['25%'],
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: ['solid', 'gradient'],
        opacity: 0.25
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May']
      },
      yaxis: {
        min: 0,
        max: 20
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return val + "";
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff']
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget8 = function _initTilesWidget8() {
    var element = document.getElementById("kt_tiles_widget_8_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'danger';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [20, 20, 30, 15, 40, 30]
      }],
      chart: {
        type: 'area',
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid'
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 45,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      },
      padding: {
        top: 0,
        bottom: 0
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget17 = function _initTilesWidget17() {
    var element = document.getElementById("kt_tiles_widget_17_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [10, 20, 20, 8]
      }],
      chart: {
        type: 'area',
        height: 150,
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        padding: {
          top: 0,
          bottom: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base']['success']]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        }
      },
      yaxis: {
        min: 0,
        max: 22,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return val + "";
            }
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light']['success']],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light']['success']],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base']['success']],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initTilesWidget20 = function _initTilesWidget20() {
    var element = document.getElementById("kt_tiles_widget_20_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [74],
      chart: {
        height: 250,
        type: 'radialBar',
        offsetY: 0
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 0,
            size: "70%"
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              fontSize: "13px",
              fontWeight: "400",
              offsetY: -5,
              color: KTApp.getSettings()['colors']['gray']['gray-300']
            },
            value: {
              color: KTApp.getSettings()['colors']['theme']['inverse']['primary'],
              fontSize: "22px",
              fontWeight: "bold",
              offsetY: -40,
              show: true
            }
          },
          track: {
            background: KTUtil.changeColor(KTApp.getSettings()['colors']['theme']['base']['primary'], -7),
            strokeWidth: '100%'
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['inverse']['primary']],
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget21 = function _initMixedWidget21() {
    var element = document.getElementById("kt_tiles_widget_21_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'info';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [20, 20, 30, 15, 30, 30]
      }],
      chart: {
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 32,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget23 = function _initMixedWidget23() {
    var element = document.getElementById("kt_tiles_widget_23_chart");
    var height = parseInt(KTUtil.css(element, 'height'));
    var color = KTUtil.hasAttr(element, 'data-color') ? KTUtil.attr(element, 'data-color') : 'primary';

    if (!element) {
      return;
    }

    var options = {
      series: [{
        name: 'Net Profit',
        data: [15, 25, 15, 40, 20, 50]
      }],
      chart: {
        type: 'area',
        height: 125,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [KTApp.getSettings()['colors']['theme']['base'][color]]
      },
      xaxis: {
        categories: ['Jan, 2020', 'Feb, 2020', 'Mar, 2020', 'Apr, 2020', 'May, 2020', 'Jun, 2020'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: KTApp.getSettings()['colors']['gray']['gray-300'],
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 55,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()['colors']['gray']['gray-500'],
            fontSize: '12px',
            fontFamily: KTApp.getSettings()['font-family']
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: KTApp.getSettings()['font-family']
        },
        y: {
          formatter: function formatter(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
      markers: {
        colors: [KTApp.getSettings()['colors']['theme']['light'][color]],
        strokeColor: [KTApp.getSettings()['colors']['theme']['base'][color]],
        strokeWidth: 3
      }
    };
    var chart = new ApexCharts(element, options);
    chart.render();
  }; // Forms


  var _initFormsWidget1 = function _initFormsWidget1() {
    var inputEl = KTUtil.getById("kt_forms_widget_1_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget2 = function _initFormsWidget2() {
    var formEl = KTUtil.getById("kt_forms_widget_2_form");
    var editorId = 'kt_forms_widget_2_editor'; // init editor

    var options = {
      modules: {
        toolbar: {
          container: "#kt_forms_widget_2_editor_toolbar"
        }
      },
      placeholder: 'Type message...',
      theme: 'snow'
    };

    if (!formEl) {
      return;
    } // Init editor


    var editorObj = new Quill('#' + editorId, options);
  };

  var _initFormsWidget3 = function _initFormsWidget3() {
    var inputEl = KTUtil.getById("kt_forms_widget_3_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget4 = function _initFormsWidget4() {
    var inputEl = KTUtil.getById("kt_forms_widget_4_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget5 = function _initFormsWidget5() {
    var inputEl = KTUtil.getById("kt_forms_widget_5_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget6 = function _initFormsWidget6() {
    var inputEl = KTUtil.getById("kt_forms_widget_6_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget7 = function _initFormsWidget7() {
    var inputEl = KTUtil.getById("kt_forms_widget_7_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget8 = function _initFormsWidget8() {
    var inputEl = KTUtil.getById("kt_forms_widget_8_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget9 = function _initFormsWidget9() {
    var inputEl = KTUtil.getById("kt_forms_widget_9_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget10 = function _initFormsWidget10() {
    var inputEl = KTUtil.getById("kt_forms_widget_10_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget11 = function _initFormsWidget11() {
    var inputEl = KTUtil.getById("kt_forms_widget_11_input");

    if (inputEl) {
      autosize(inputEl);
    }
  };

  var _initFormsWidget12 = function _initFormsWidget12() {
    var inputEl = KTUtil.getById("kt_forms_widget_12_input");

    if (inputEl) {
      autosize(inputEl);
    }
  }; // Advance Tables


  var _initAdvancedTableGroupSelection = function _initAdvancedTableGroupSelection(element) {
    var table = KTUtil.getById(element);

    if (!table) {
      return;
    }

    KTUtil.on(table, 'thead th .checkbox > input', 'change', function (e) {
      var checkboxes = KTUtil.findAll(table, 'tbody td .checkbox > input');

      for (var i = 0, len = checkboxes.length; i < len; i++) {
        checkboxes[i].checked = this.checked;
      }
    });
  };

  var _initPriceSlider = function _initPriceSlider(element) {
    // init slider
    var slider = document.getElementById(element);

    if (typeof slider === 'undefined') {
      return;
    }

    if (!slider) {
      return;
    }

    noUiSlider.create(slider, {
      start: [20, 60],
      connect: true,
      range: {
        'min': 0,
        'max': 100
      }
    });
  }; // Education Show More Demo


  var _initEducationShowMoreBtn = function _initEducationShowMoreBtn() {
    var el = KTUtil.getById('kt_app_education_more_feeds_btn');

    if (!el) {
      return;
    }

    KTUtil.addEvent(el, 'click', function (e) {
      var elements = document.getElementsByClassName('education-more-feeds');

      if (!elements || elements.length <= 0) {
        return;
      }

      KTUtil.btnWait(el, 'spinner spinner-right spinner-white pr-15', 'Please wait...', true);
      setTimeout(function () {
        KTUtil.btnRelease(el);
        KTUtil.addClass(el, 'd-none');
        var item;

        for (var i = 0, len = elements.length; i < len; i++) {
          item = elements[0];
          KTUtil.removeClass(elements[i], 'd-none');
          var textarea = KTUtil.find(item, 'textarea');

          if (textarea) {
            autosize(textarea);
          }
        }

        KTUtil.scrollTo(item);
      }, 1000);
    });
  }; // Public methods


  return {
    init: function init() {
      // General Controls
      _initDaterangepicker(); // Stats Widgets


      _initStatsWidget7();

      _initStatsWidget8();

      _initStatsWidget9();

      _initStatsWidget10();

      _initStatsWidget11();

      _initStatsWidget12(); // Charts Widgets


      _initChartsWidget1();

      _initChartsWidget2();

      _initChartsWidget3();

      _initChartsWidget4();

      _initChartsWidget5();

      _initChartsWidget6();

      _initChartsWidget7();

      _initChartsWidget8();

      _initChartsWidget9(); // Mixed Widgets


      _initMixedWidget1();

      _initMixedWidget2();

      _initMixedWidget3();

      _initMixedWidget4();

      _initMixedWidget5();

      _initMixedWidget6();

      _initMixedWidget13();

      _initMixedWidget14();

      _initMixedWidget15();

      _initMixedWidget16();

      _initMixedWidget17();

      _initMixedWidget18(); // Tiles Widgets


      _initTilesWidget1();

      _initTilesWidget2();

      _initTilesWidget5();

      _initTilesWidget8();

      _initTilesWidget17();

      _initTilesWidget20();

      _initMixedWidget21();

      _initMixedWidget23(); // Table Widgets


      _initAdvancedTableGroupSelection('kt_advance_table_widget_1');

      _initAdvancedTableGroupSelection('kt_advance_table_widget_2');

      _initAdvancedTableGroupSelection('kt_advance_table_widget_3');

      _initAdvancedTableGroupSelection('kt_advance_table_widget_4'); // Form Widgets


      _initPriceSlider('kt_price_slider'); // Forms widgets


      _initFormsWidget1();

      _initFormsWidget2();

      _initFormsWidget3();

      _initFormsWidget4();

      _initFormsWidget5();

      _initFormsWidget6();

      _initFormsWidget7();

      _initFormsWidget8();

      _initFormsWidget9();

      _initFormsWidget10();

      _initFormsWidget11(); // Education App


      _initEducationShowMoreBtn();
    }
  };
}(); // Webpack support


if (true) {
  module.exports = KTWidgets;
}

jQuery(document).ready(function () {
  KTWidgets.init();
});

/***/ }),

/***/ "./assets/admin/js/vendors/plugins/bootstrap-datepicker.init.js":
/*!**********************************************************************!*\
  !*** ./assets/admin/js/vendors/plugins/bootstrap-datepicker.init.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.datepicker.defaults.zIndexOffset = 10;

/***/ }),

/***/ "./assets/admin/js/vendors/plugins/bootstrap-markdown.init.js":
/*!********************************************************************!*\
  !*** ./assets/admin/js/vendors/plugins/bootstrap-markdown.init.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.markdown.defaults.iconlibrary = 'fa';
$.fn.markdown.defaults.buttons[0][0]['data'][2]['icon']['fa'] = 'fa fa-heading';
$.fn.markdown.defaults.buttons[0][1]['data'][1]['icon']['fa'] = 'fa fa-image';
$.fn.markdown.defaults.buttons[0][2]['data'][1]['icon']['fa'] = 'fa fa-list-ol';

/***/ }),

/***/ "./assets/admin/js/vendors/plugins/bootstrap-notify.init.js":
/*!******************************************************************!*\
  !*** ./assets/admin/js/vendors/plugins/bootstrap-notify.init.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//== Set defaults
$.notifyDefaults({
  template: '' + '<div data-notify="container" class="alert alert-{0}" role="alert">' + '<button type="button" aria-hidden="true" class="close" data-notify="dismiss"></button>' + '<span data-notify="icon"></span>' + '<span data-notify="title">{1}</span>' + '<span data-notify="message">{2}</span>' + '<div class="progress" data-notify="progressbar">' + '<div class="progress-bar progress-bar-animated bg-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' + '</div>' + '<a href="{3}" target="{4}" data-notify="url"></a>' + '</div>'
});

/***/ }),

/***/ "./assets/admin/js/vendors/plugins/bootstrap-switch.init.js":
/*!******************************************************************!*\
  !*** ./assets/admin/js/vendors/plugins/bootstrap-switch.init.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//$.fn.bootstrapSwitch.defaults.size = 'large';
//$.fn.bootstrapSwitch.defaults.onColor = 'success';

/***/ }),

/***/ "./assets/admin/js/vendors/plugins/bootstrap-timepicker.init.js":
/*!**********************************************************************!*\
  !*** ./assets/admin/js/vendors/plugins/bootstrap-timepicker.init.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.timepicker.defaults = $.extend(true, {}, $.fn.timepicker.defaults, {
  icons: {
    up: 'ki ki-arrow-up',
    down: 'ki ki-arrow-down'
  }
});

/***/ }),

/***/ "./assets/admin/js/vendors/plugins/dropzone.init.js":
/*!**********************************************************!*\
  !*** ./assets/admin/js/vendors/plugins/dropzone.init.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Dropzone.autoDiscover = false;

/***/ }),

/***/ "./assets/admin/js/vendors/plugins/sweetalert2.init.js":
/*!*************************************************************!*\
  !*** ./assets/admin/js/vendors/plugins/sweetalert2.init.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Set defaults

swal.mixin({
  width: 400,
  heightAuto: false,
  padding: '2.5rem',
  buttonsStyling: false,
  confirmButtonClass: 'btn btn-success',
  confirmButtonColor: null,
  cancelButtonClass: 'btn btn-secondary',
  cancelButtonColor: null
});

/***/ }),

/***/ "./assets/admin/js/vendors/plugins/tempusdominus-bootstrap-4.init.js":
/*!***************************************************************************!*\
  !*** ./assets/admin/js/vendors/plugins/tempusdominus-bootstrap-4.init.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.fn.datetimepicker.Constructor.Default = $.extend({}, $.fn.datetimepicker.Constructor.Default, {
  icons: {
    time: 'ki ki-clock',
    date: 'ki ki-calendar',
    up: 'ki ki-arrow-up',
    down: 'ki ki-arrow-down',
    previous: 'ki ki-arrow-back',
    next: 'ki ki-arrow-next',
    today: 'ki ki-calendar-today',
    clear: 'ki ki-close',
    close: 'ki ki-close'
  }
});

/***/ }),

/***/ "./assets/admin/plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js":
/*!*************************************************************************************************!*\
  !*** ./assets/admin/plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

+function (a) {
  "use strict";

  function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("multiselectsplitter"),
          f = "object" == _typeof(c) && c;
      (e || "destroy" != c) && (e || d.data("multiselectsplitter", e = new b(this, f)), "string" == typeof c && e[c]());
    });
  }

  var b = function b(a, _b) {
    this.init("multiselectsplitter", a, _b);
  };

  b.DEFAULTS = {
    selectSize: null,
    maxSelectSize: null,
    clearOnFirstChange: !1,
    onlySameGroup: !1,
    groupCounter: !1,
    maximumSelected: null,
    afterInitialize: null,
    maximumAlert: function maximumAlert(a) {
      alert("Only " + a + " values can be selected");
    },
    createFirstSelect: function createFirstSelect(a, b) {
      return "<option>" + a + "</option>";
    },
    createSecondSelect: function createSecondSelect(a, b) {
      return "<option>" + a + "</option>";
    },
    template: '<div class="row" data-multiselectsplitter-wrapper-selector><div class="col-xs-6 col-sm-6"><select class="form-control" data-multiselectsplitter-firstselect-selector></select></div> <!-- Add the extra clearfix for only the required viewport --><div class="col-xs-6 col-sm-6"><select class="form-control" data-multiselectsplitter-secondselect-selector></select></div></div>'
  }, b.prototype.init = function (c, d, e) {
    var f = this;
    f.type = c, f.last$ElementSelected = [], f.initialized = !1, f.$element = a(d), f.$element.hide(), f.options = a.extend({}, b.DEFAULTS, e), f.$element.after(f.options.template), f.$wrapper = f.$element.next("div[data-multiselectsplitter-wrapper-selector]"), f.$firstSelect = a("select[data-multiselectsplitter-firstselect-selector]", f.$wrapper), f.$secondSelect = a("select[data-multiselectsplitter-secondselect-selector]", f.$wrapper);
    var g = 0,
        h = 0;

    if (0 != f.$element.find("optgroup").length) {
      f.$element.find("optgroup").each(function () {
        var b = a(this).attr("label"),
            c = a(f.options.createFirstSelect(b, f.$element));
        c.val(b), c.attr("data-current-label", c.text()), f.$firstSelect.append(c);
        var d = a(this).find("option").length;
        d > h && (h = d), g++;
      });
      var i = Math.max(g, h);
      i = Math.min(i, 10), f.options.selectSize ? i = f.options.selectSize : f.options.maxSelectSize && (i = Math.min(i, f.options.maxSelectSize)), f.$firstSelect.attr("size", i), f.$secondSelect.attr("size", i), f.$element.attr("multiple") && f.$secondSelect.attr("multiple", "multiple"), f.$element.is(":disabled") && f.disable(), f.$firstSelect.on("change", a.proxy(f.updateParentCategory, f)), f.$secondSelect.on("click change", a.proxy(f.updateChildCategory, f)), f.update = function () {
        if (!(f.$element.find("option").length < 1)) {
          var b,
              a = f.$element.find("option:selected:first");
          b = a.length ? a.parent().attr("label") : f.$element.find("option:first").parent().attr("label"), f.$firstSelect.find('option[value="' + b + '"]').prop("selected", !0), f.$firstSelect.trigger("change");
        }
      }, f.update(), f.initialized = !0, f.options.afterInitialize && f.options.afterInitialize(f.$firstSelect, f.$secondSelect);
    }
  }, b.prototype.disable = function () {
    this.$secondSelect.prop("disabled", !0), this.$firstSelect.prop("disabled", !0);
  }, b.prototype.enable = function () {
    this.$secondSelect.prop("disabled", !1), this.$firstSelect.prop("disabled", !1);
  }, b.prototype.createSecondSelect = function () {
    var b = this;
    b.$secondSelect.empty(), a.each(b.$element.find('optgroup[label="' + b.$firstSelect.val() + '"] option'), function (c, d) {
      var e = a(this).val(),
          f = a(this).text(),
          g = a(b.options.createSecondSelect(f, b.$firstSelect));
      g.val(e), a.each(b.$element.find("option:selected"), function (b, c) {
        a(c).val() == e && g.prop("selected", !0);
      }), b.$secondSelect.append(g);
    });
  }, b.prototype.updateParentCategory = function () {
    var a = this;
    a.last$ElementSelected = a.$element.find("option:selected"), a.options.clearOnFirstChange && a.initialized && a.$element.find("option:selected").prop("selected", !1), a.createSecondSelect(), a.checkSelected(), a.updateCounter();
  }, b.prototype.updateCounter = function () {
    var b = this;
    b.$element.attr("multiple") && b.options.groupCounter && a.each(b.$firstSelect.find("option"), function (c, d) {
      var e = a(d).val(),
          f = a(d).data("currentLabel"),
          g = b.$element.find('optgroup[label="' + e + '"] option:selected').length;
      g > 0 && (f += " (" + g + ")"), a(d).html(f);
    });
  }, b.prototype.checkSelected = function () {
    var b = this;

    if (b.$element.attr("multiple") && b.options.maximumSelected) {
      var c = 0;

      if (c = "function" == typeof b.options.maximumSelected ? b.options.maximumSelected(b.$firstSelect, b.$secondSelect) : b.options.maximumSelected, !(c < 1)) {
        var d = b.$element.find("option:selected");

        if (d.length > c) {
          b.$firstSelect.find("option:selected").prop("selected", !1), b.$secondSelect.find("option:selected").prop("selected", !1), b.initialized ? (b.$element.find("option:selected").prop("selected", !1), b.last$ElementSelected.prop("selected", !0)) : a.each(b.$element.find("option:selected"), function (b, d) {
            b > c - 1 && a(d).prop("selected", !1);
          });
          var e = b.last$ElementSelected.first().parent().attr("label");
          b.$firstSelect.find('option[value="' + e + '"]').prop("selected", !0), b.createSecondSelect(), b.options.maximumAlert(c);
        }
      }
    }
  }, b.prototype.basicUpdateChildCategory = function (b, c) {
    var d = this;
    d.last$ElementSelected = d.$element.find("option:selected");
    var e = d.$secondSelect.val();
    a.isArray(e) || (e = [e]);
    var f = d.$firstSelect.val(),
        g = !1;
    d.$element.attr("multiple") ? d.options.onlySameGroup ? a.each(d.$element.find("option:selected"), function (b, c) {
      if (a(c).parent().attr("label") != f) return g = !0, !1;
    }) : c || (g = !0) : g = !0, g ? d.$element.find("option:selected").prop("selected", !1) : a.each(d.$element.find("option:selected"), function (b, c) {
      f == a(c).parent().attr("label") && a.inArray(a(c).val(), e) == -1 && a(c).prop("selected", !1);
    }), a.each(e, function (a, b) {
      d.$element.find('option[value="' + b + '"]').prop("selected", !0);
    }), d.checkSelected(), d.updateCounter(), d.$element.trigger("change");
  }, b.prototype.updateChildCategory = function (b) {
    "change" == b.type ? this.timeOut = setTimeout(a.proxy(function () {
      this.basicUpdateChildCategory(b, b.ctrlKey);
    }, this), 10) : "click" == b.type && (clearTimeout(this.timeOut), this.basicUpdateChildCategory(b, b.ctrlKey));
  }, b.prototype.destroy = function () {
    this.$wrapper.remove(), this.$element.removeData(this.type), this.$element.show();
  }, a.fn.multiselectsplitter = c, a.fn.multiselectsplitter.Constructor = b, a.fn.multiselectsplitter.VERSION = "1.0.1";
}(jQuery);

/***/ }),

/***/ "./assets/admin/plugins/bootstrap-session-timeout/dist/bootstrap-session-timeout.min.js":
/*!**********************************************************************************************!*\
  !*** ./assets/admin/plugins/bootstrap-session-timeout/dist/bootstrap-session-timeout.min.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

!function (a) {
  "use strict";

  a.sessionTimeout = function (b) {
    function c() {
      n || (a.ajax({
        type: i.ajaxType,
        url: i.keepAliveUrl,
        data: i.ajaxData
      }), n = !0, setTimeout(function () {
        n = !1;
      }, i.keepAliveInterval));
    }

    function d() {
      clearTimeout(g), (i.countdownMessage || i.countdownBar) && f("session", !0), "function" == typeof i.onStart && i.onStart(i), i.keepAlive && c(), g = setTimeout(function () {
        "function" != typeof i.onWarn ? a("#session-timeout-dialog").modal("show") : i.onWarn(i), e();
      }, i.warnAfter);
    }

    function e() {
      clearTimeout(g), a("#session-timeout-dialog").hasClass("in") || !i.countdownMessage && !i.countdownBar || f("dialog", !0), g = setTimeout(function () {
        "function" != typeof i.onRedir ? window.location = i.redirUrl : i.onRedir(i);
      }, i.redirAfter - i.warnAfter);
    }

    function f(b, c) {
      clearTimeout(j.timer), "dialog" === b && c ? j.timeLeft = Math.floor((i.redirAfter - i.warnAfter) / 1e3) : "session" === b && c && (j.timeLeft = Math.floor(i.redirAfter / 1e3)), i.countdownBar && "dialog" === b ? j.percentLeft = Math.floor(j.timeLeft / ((i.redirAfter - i.warnAfter) / 1e3) * 100) : i.countdownBar && "session" === b && (j.percentLeft = Math.floor(j.timeLeft / (i.redirAfter / 1e3) * 100));
      var d = a(".countdown-holder"),
          e = j.timeLeft >= 0 ? j.timeLeft : 0;

      if (i.countdownSmart) {
        var g = Math.floor(e / 60),
            h = e % 60,
            k = g > 0 ? g + "m" : "";
        k.length > 0 && (k += " "), k += h + "s", d.text(k);
      } else d.text(e + "s");

      i.countdownBar && a(".countdown-bar").css("width", j.percentLeft + "%"), j.timeLeft = j.timeLeft - 1, j.timer = setTimeout(function () {
        f(b);
      }, 1e3);
    }

    var g,
        h = {
      title: "Your Session is About to Expire!",
      message: "Your session is about to expire.",
      logoutButton: "Logout",
      keepAliveButton: "Stay Connected",
      keepAliveUrl: "/keep-alive",
      ajaxType: "POST",
      ajaxData: "",
      redirUrl: "/timed-out",
      logoutUrl: "/log-out",
      warnAfter: 9e5,
      redirAfter: 12e5,
      keepAliveInterval: 5e3,
      keepAlive: !0,
      ignoreUserActivity: !1,
      onStart: !1,
      onWarn: !1,
      onRedir: !1,
      countdownMessage: !1,
      countdownBar: !1,
      countdownSmart: !1
    },
        i = h,
        j = {};
    if (b && (i = a.extend(h, b)), i.warnAfter >= i.redirAfter) return console.error('Bootstrap-session-timeout plugin is miss-configured. Option "redirAfter" must be equal or greater than "warnAfter".'), !1;

    if ("function" != typeof i.onWarn) {
      var k = i.countdownMessage ? "<p>" + i.countdownMessage.replace(/{timer}/g, '<span class="countdown-holder"></span>') + "</p>" : "",
          l = i.countdownBar ? '<div class="progress">                   <div class="progress-bar progress-bar-striped countdown-bar active" role="progressbar" style="min-width: 15px; width: 100%;">                     <span class="countdown-holder"></span>                   </div>                 </div>' : "";
      a("body").append('<div class="modal fade" id="session-timeout-dialog">               <div class="modal-dialog">                 <div class="modal-content">                   <div class="modal-header">                     <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>                     <h4 class="modal-title">' + i.title + '</h4>                   </div>                   <div class="modal-body">                     <p>' + i.message + "</p>                     " + k + "                     " + l + '                   </div>                   <div class="modal-footer">                     <button id="session-timeout-dialog-logout" type="button" class="btn btn-default">' + i.logoutButton + '</button>                     <button id="session-timeout-dialog-keepalive" type="button" class="btn btn-primary" data-dismiss="modal">' + i.keepAliveButton + "</button>                   </div>                 </div>               </div>              </div>"), a("#session-timeout-dialog-logout").on("click", function () {
        window.location = i.logoutUrl;
      }), a("#session-timeout-dialog").on("hide.bs.modal", function () {
        d();
      });
    }

    if (!i.ignoreUserActivity) {
      var m = [-1, -1];
      a(document).on("keyup mouseup mousemove touchend touchmove", function (b) {
        if ("mousemove" === b.type) {
          if (b.clientX === m[0] && b.clientY === m[1]) return;
          m[0] = b.clientX, m[1] = b.clientY;
        }

        d(), a("#session-timeout-dialog").length > 0 && a("#session-timeout-dialog").data("bs.modal") && a("#session-timeout-dialog").data("bs.modal").isShown && (a("#session-timeout-dialog").modal("hide"), a("body").removeClass("modal-open"), a("div.modal-backdrop").remove());
      });
    }

    var n = !1;
    d();
  };
}(jQuery);

/***/ }),

/***/ "./assets/admin/plugins/formvalidation/dist/amd/core/Plugin.js":
/*!*********************************************************************!*\
  !*** ./assets/admin/plugins/formvalidation/dist/amd/core/Plugin.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Plugin = function () {
    function Plugin(opts) {
      this.opts = opts;
    }

    Plugin.prototype.setCore = function (core) {
      this.core = core;
      return this;
    };

    Plugin.prototype.install = function () {};

    Plugin.prototype.uninstall = function () {};

    return Plugin;
  }();

  exports["default"] = Plugin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/admin/plugins/formvalidation/dist/amd/plugins/Bootstrap.js":
/*!***************************************************************************!*\
  !*** ./assets/admin/plugins/formvalidation/dist/amd/plugins/Bootstrap.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/classSet */ "./assets/admin/plugins/formvalidation/dist/amd/utils/classSet.js"), __webpack_require__(/*! ../utils/hasClass */ "./assets/admin/plugins/formvalidation/dist/amd/utils/hasClass.js"), __webpack_require__(/*! ./Framework */ "./assets/admin/plugins/formvalidation/dist/amd/plugins/Framework.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, classSet_1, hasClass_1, Framework_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Bootstrap = function (_super) {
    __extends(Bootstrap, _super);

    function Bootstrap(opts) {
      return _super.call(this, Object.assign({}, {
        eleInvalidClass: 'is-invalid',
        eleValidClass: 'is-valid',
        formClass: 'fv-plugins-bootstrap',
        messageClass: 'fv-help-block',
        rowInvalidClass: 'has-danger',
        rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
        rowSelector: '.form-group',
        rowValidClass: 'has-success'
      }, opts)) || this;
    }

    Bootstrap.prototype.onIconPlaced = function (e) {
      var parent = e.element.parentElement;

      if (hasClass_1["default"](parent, 'input-group')) {
        parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
      }

      var type = e.element.getAttribute('type');

      if ('checkbox' === type || 'radio' === type) {
        var grandParent = parent.parentElement;

        if (hasClass_1["default"](parent, 'form-check')) {
          classSet_1["default"](e.iconElement, {
            'fv-plugins-icon-check': true
          });
          parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
        } else if (hasClass_1["default"](parent.parentElement, 'form-check')) {
          classSet_1["default"](e.iconElement, {
            'fv-plugins-icon-check': true
          });
          grandParent.parentElement.insertBefore(e.iconElement, grandParent.nextSibling);
        }
      }
    };

    return Bootstrap;
  }(Framework_1["default"]);

  exports["default"] = Bootstrap;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/admin/plugins/formvalidation/dist/amd/plugins/Framework.js":
/*!***************************************************************************!*\
  !*** ./assets/admin/plugins/formvalidation/dist/amd/plugins/Framework.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./assets/admin/plugins/formvalidation/dist/amd/core/Plugin.js"), __webpack_require__(/*! ../utils/classSet */ "./assets/admin/plugins/formvalidation/dist/amd/utils/classSet.js"), __webpack_require__(/*! ../utils/closest */ "./assets/admin/plugins/formvalidation/dist/amd/utils/closest.js"), __webpack_require__(/*! ./Message */ "./assets/admin/plugins/formvalidation/dist/amd/plugins/Message.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1, classSet_1, closest_1, Message_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Framework = function (_super) {
    __extends(Framework, _super);

    function Framework(opts) {
      var _this = _super.call(this, opts) || this;

      _this.results = new Map();
      _this.containers = new Map();
      _this.opts = Object.assign({}, {
        defaultMessageContainer: true,
        eleInvalidClass: '',
        eleValidClass: '',
        rowClasses: '',
        rowValidatingClass: ''
      }, opts);
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
      _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
      _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
      _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
      return _this;
    }

    Framework.prototype.install = function () {
      var _a;

      var _this = this;

      classSet_1["default"](this.core.getFormElement(), (_a = {}, _a[this.opts.formClass] = true, _a['fv-plugins-framework'] = true, _a));
      this.core.on('core.element.ignored', this.elementIgnoredHandler).on('core.element.validating', this.elementValidatingHandler).on('core.element.validated', this.elementValidatedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('plugins.icon.placed', this.iconPlacedHandler).on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);

      if (this.opts.defaultMessageContainer) {
        this.core.registerPlugin('___frameworkMessage', new Message_1["default"]({
          clazz: this.opts.messageClass,
          container: function container(field, element) {
            var selector = 'string' === typeof _this.opts.rowSelector ? _this.opts.rowSelector : _this.opts.rowSelector(field, element);
            var groupEle = closest_1["default"](element, selector);
            return Message_1["default"].getClosestContainer(element, groupEle, _this.opts.rowPattern);
          }
        }));
      }
    };

    Framework.prototype.uninstall = function () {
      var _a;

      this.results.clear();
      this.containers.clear();
      classSet_1["default"](this.core.getFormElement(), (_a = {}, _a[this.opts.formClass] = false, _a['fv-plugins-framework'] = false, _a));
      this.core.off('core.element.ignored', this.elementIgnoredHandler).off('core.element.validating', this.elementValidatingHandler).off('core.element.validated', this.elementValidatedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('plugins.icon.placed', this.iconPlacedHandler).off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
    };

    Framework.prototype.onIconPlaced = function (e) {};

    Framework.prototype.onFieldAdded = function (e) {
      var _this = this;

      var elements = e.elements;

      if (elements) {
        elements.forEach(function (ele) {
          var _a;

          var groupEle = _this.containers.get(ele);

          if (groupEle) {
            classSet_1["default"](groupEle, (_a = {}, _a[_this.opts.rowInvalidClass] = false, _a[_this.opts.rowValidatingClass] = false, _a[_this.opts.rowValidClass] = false, _a['fv-plugins-icon-container'] = false, _a));

            _this.containers["delete"](ele);
          }
        });
        this.prepareFieldContainer(e.field, elements);
      }
    };

    Framework.prototype.onFieldRemoved = function (e) {
      var _this = this;

      e.elements.forEach(function (ele) {
        var _a;

        var groupEle = _this.containers.get(ele);

        if (groupEle) {
          classSet_1["default"](groupEle, (_a = {}, _a[_this.opts.rowInvalidClass] = false, _a[_this.opts.rowValidatingClass] = false, _a[_this.opts.rowValidClass] = false, _a));
        }
      });
    };

    Framework.prototype.prepareFieldContainer = function (field, elements) {
      var _this = this;

      if (elements.length) {
        var type = elements[0].getAttribute('type');

        if ('radio' === type || 'checkbox' === type) {
          this.prepareElementContainer(field, elements[0]);
        } else {
          elements.forEach(function (ele) {
            return _this.prepareElementContainer(field, ele);
          });
        }
      }
    };

    Framework.prototype.prepareElementContainer = function (field, element) {
      var _a;

      var selector = 'string' === typeof this.opts.rowSelector ? this.opts.rowSelector : this.opts.rowSelector(field, element);
      var groupEle = closest_1["default"](element, selector);

      if (groupEle !== element) {
        classSet_1["default"](groupEle, (_a = {}, _a[this.opts.rowClasses] = true, _a['fv-plugins-icon-container'] = true, _a));
        this.containers.set(element, groupEle);
      }
    };

    Framework.prototype.onElementValidating = function (e) {
      var _a;

      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
      var groupEle = this.containers.get(element);

      if (groupEle) {
        classSet_1["default"](groupEle, (_a = {}, _a[this.opts.rowInvalidClass] = false, _a[this.opts.rowValidatingClass] = true, _a[this.opts.rowValidClass] = false, _a));
      }
    };

    Framework.prototype.onElementNotValidated = function (e) {
      this.removeClasses(e.element, e.elements);
    };

    Framework.prototype.onElementIgnored = function (e) {
      this.removeClasses(e.element, e.elements);
    };

    Framework.prototype.removeClasses = function (element, elements) {
      var _a, _b;

      var type = element.getAttribute('type');
      var ele = 'radio' === type || 'checkbox' === type ? elements[0] : element;
      classSet_1["default"](ele, (_a = {}, _a[this.opts.eleValidClass] = false, _a[this.opts.eleInvalidClass] = false, _a));
      var groupEle = this.containers.get(ele);

      if (groupEle) {
        classSet_1["default"](groupEle, (_b = {}, _b[this.opts.rowInvalidClass] = false, _b[this.opts.rowValidatingClass] = false, _b[this.opts.rowValidClass] = false, _b));
      }
    };

    Framework.prototype.onElementValidated = function (e) {
      var _a, _b, _c;

      var _this = this;

      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
      classSet_1["default"](element, (_a = {}, _a[this.opts.eleValidClass] = e.valid, _a[this.opts.eleInvalidClass] = !e.valid, _a));
      var groupEle = this.containers.get(element);

      if (groupEle) {
        if (!e.valid) {
          this.results.set(element, false);
          classSet_1["default"](groupEle, (_b = {}, _b[this.opts.rowInvalidClass] = true, _b[this.opts.rowValidatingClass] = false, _b[this.opts.rowValidClass] = false, _b));
        } else {
          this.results["delete"](element);
          var isValid_1 = true;
          this.containers.forEach(function (value, key) {
            if (value === groupEle && _this.results.get(key) === false) {
              isValid_1 = false;
            }
          });

          if (isValid_1) {
            classSet_1["default"](groupEle, (_c = {}, _c[this.opts.rowInvalidClass] = false, _c[this.opts.rowValidatingClass] = false, _c[this.opts.rowValidClass] = true, _c));
          }
        }
      }
    };

    return Framework;
  }(Plugin_1["default"]);

  exports["default"] = Framework;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/admin/plugins/formvalidation/dist/amd/plugins/Message.js":
/*!*************************************************************************!*\
  !*** ./assets/admin/plugins/formvalidation/dist/amd/plugins/Message.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../core/Plugin */ "./assets/admin/plugins/formvalidation/dist/amd/core/Plugin.js"), __webpack_require__(/*! ../utils/classSet */ "./assets/admin/plugins/formvalidation/dist/amd/utils/classSet.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Plugin_1, classSet_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Message = function (_super) {
    __extends(Message, _super);

    function Message(opts) {
      var _this = _super.call(this, opts) || this;

      _this.messages = new Map();
      _this.defaultContainer = document.createElement('div');
      _this.opts = Object.assign({}, {
        container: function container(field, element) {
          return _this.defaultContainer;
        }
      }, opts);
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
      _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
      _this.validatorNotValidatedHandler = _this.onValidatorNotValidated.bind(_this);
      return _this;
    }

    Message.getClosestContainer = function (element, upper, pattern) {
      var ele = element;

      while (ele) {
        if (ele === upper) {
          break;
        }

        ele = ele.parentElement;

        if (pattern.test(ele.className)) {
          break;
        }
      }

      return ele;
    };

    Message.prototype.install = function () {
      this.core.getFormElement().appendChild(this.defaultContainer);
      this.core.on('core.element.ignored', this.elementIgnoredHandler).on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler).on('core.validator.validated', this.validatorValidatedHandler).on('core.validator.notvalidated', this.validatorNotValidatedHandler);
    };

    Message.prototype.uninstall = function () {
      this.core.getFormElement().removeChild(this.defaultContainer);
      this.messages.forEach(function (message) {
        return message.parentNode.removeChild(message);
      });
      this.messages.clear();
      this.core.off('core.element.ignored', this.elementIgnoredHandler).off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler).off('core.validator.validated', this.validatorValidatedHandler).off('core.validator.notvalidated', this.validatorNotValidatedHandler);
    };

    Message.prototype.onFieldAdded = function (e) {
      var _this = this;

      var elements = e.elements;

      if (elements) {
        elements.forEach(function (ele) {
          var msg = _this.messages.get(ele);

          if (msg) {
            msg.parentNode.removeChild(msg);

            _this.messages["delete"](ele);
          }
        });
        this.prepareFieldContainer(e.field, elements);
      }
    };

    Message.prototype.onFieldRemoved = function (e) {
      var _this = this;

      if (!e.elements.length || !e.field) {
        return;
      }

      var type = e.elements[0].getAttribute('type');
      var elements = 'radio' === type || 'checkbox' === type ? [e.elements[0]] : e.elements;
      elements.forEach(function (ele) {
        if (_this.messages.has(ele)) {
          var container = _this.messages.get(ele);

          container.parentNode.removeChild(container);

          _this.messages["delete"](ele);
        }
      });
    };

    Message.prototype.prepareFieldContainer = function (field, elements) {
      var _this = this;

      if (elements.length) {
        var type = elements[0].getAttribute('type');

        if ('radio' === type || 'checkbox' === type) {
          this.prepareElementContainer(field, elements[0], elements);
        } else {
          elements.forEach(function (ele) {
            return _this.prepareElementContainer(field, ele, elements);
          });
        }
      }
    };

    Message.prototype.prepareElementContainer = function (field, element, elements) {
      var container;

      switch (true) {
        case 'string' === typeof this.opts.container:
          var selector = this.opts.container;
          selector = '#' === selector.charAt(0) ? "[id=\"" + selector.substring(1) + "\"]" : selector;
          container = this.core.getFormElement().querySelector(selector);
          break;

        default:
          container = this.opts.container(field, element);
          break;
      }

      var message = document.createElement('div');
      container.appendChild(message);
      classSet_1["default"](message, {
        'fv-plugins-message-container': true
      });
      this.core.emit('plugins.message.placed', {
        element: element,
        elements: elements,
        field: field,
        messageElement: message
      });
      this.messages.set(element, message);
    };

    Message.prototype.getMessage = function (result) {
      return typeof result.message === 'string' ? result.message : result.message[this.core.getLocale()];
    };

    Message.prototype.onValidatorValidated = function (e) {
      var _a;

      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;

      if (this.messages.has(element)) {
        var container = this.messages.get(element);
        var messageEle = container.querySelector("[data-field=\"" + e.field + "\"][data-validator=\"" + e.validator + "\"]");

        if (!messageEle && !e.result.valid) {
          var ele = document.createElement('div');
          ele.innerHTML = this.getMessage(e.result);
          ele.setAttribute('data-field', e.field);
          ele.setAttribute('data-validator', e.validator);

          if (this.opts.clazz) {
            classSet_1["default"](ele, (_a = {}, _a[this.opts.clazz] = true, _a));
          }

          container.appendChild(ele);
          this.core.emit('plugins.message.displayed', {
            element: e.element,
            field: e.field,
            message: e.result.message,
            messageElement: ele,
            meta: e.result.meta,
            validator: e.validator
          });
        } else if (messageEle && !e.result.valid) {
          messageEle.innerHTML = this.getMessage(e.result);
          this.core.emit('plugins.message.displayed', {
            element: e.element,
            field: e.field,
            message: e.result.message,
            messageElement: messageEle,
            meta: e.result.meta,
            validator: e.validator
          });
        } else if (messageEle && e.result.valid) {
          container.removeChild(messageEle);
        }
      }
    };

    Message.prototype.onValidatorNotValidated = function (e) {
      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;

      if (this.messages.has(element)) {
        var container = this.messages.get(element);
        var messageEle = container.querySelector("[data-field=\"" + e.field + "\"][data-validator=\"" + e.validator + "\"]");

        if (messageEle) {
          container.removeChild(messageEle);
        }
      }
    };

    Message.prototype.onElementIgnored = function (e) {
      var elements = e.elements;
      var type = e.element.getAttribute('type');
      var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;

      if (this.messages.has(element)) {
        var container_1 = this.messages.get(element);
        var messageElements = [].slice.call(container_1.querySelectorAll("[data-field=\"" + e.field + "\"]"));
        messageElements.forEach(function (messageEle) {
          container_1.removeChild(messageEle);
        });
      }
    };

    return Message;
  }(Plugin_1["default"]);

  exports["default"] = Message;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/admin/plugins/formvalidation/dist/amd/utils/classSet.js":
/*!************************************************************************!*\
  !*** ./assets/admin/plugins/formvalidation/dist/amd/utils/classSet.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function addClass(element, classes) {
    classes.split(' ').forEach(function (clazz) {
      if (element.classList) {
        element.classList.add(clazz);
      } else if ((" " + element.className + " ").indexOf(" " + clazz + " ")) {
        element.className += " " + clazz;
      }
    });
  }

  function removeClass(element, classes) {
    classes.split(' ').forEach(function (clazz) {
      element.classList ? element.classList.remove(clazz) : element.className = element.className.replace(clazz, '');
    });
  }

  function classSet(element, classes) {
    var adding = [];
    var removing = [];
    Object.keys(classes).forEach(function (clazz) {
      if (clazz) {
        classes[clazz] ? adding.push(clazz) : removing.push(clazz);
      }
    });
    removing.forEach(function (clazz) {
      return removeClass(element, clazz);
    });
    adding.forEach(function (clazz) {
      return addClass(element, clazz);
    });
  }

  exports["default"] = classSet;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/admin/plugins/formvalidation/dist/amd/utils/closest.js":
/*!***********************************************************************!*\
  !*** ./assets/admin/plugins/formvalidation/dist/amd/utils/closest.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element['mozMatchesSelector'] || element['msMatchesSelector'];

    if (nativeMatches) {
      return nativeMatches.call(element, selector);
    }

    var nodes = [].slice.call(element.parentElement.querySelectorAll(selector));
    return nodes.indexOf(element) >= 0;
  }

  function closest(element, selector) {
    var ele = element;

    while (ele) {
      if (matches(ele, selector)) {
        break;
      }

      ele = ele.parentElement;
    }

    return ele;
  }

  exports["default"] = closest;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/admin/plugins/formvalidation/dist/amd/utils/hasClass.js":
/*!************************************************************************!*\
  !*** ./assets/admin/plugins/formvalidation/dist/amd/utils/hasClass.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function hasClass(element, clazz) {
    return element.classList ? element.classList.contains(clazz) : new RegExp("(^| )" + clazz + "( |$)", 'gi').test(element.className);
  }

  exports["default"] = hasClass;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/admin/plugins/formvalidation/dist/js/FormValidation.full.min.js":
/*!********************************************************************************!*\
  !*** ./assets/admin/plugins/formvalidation/dist/js/FormValidation.full.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.every */ "./node_modules/core-js/modules/es.array.every.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.flags */ "./node_modules/core-js/modules/es.regexp.flags.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(this, function (e) {
  "use strict";

  function t(e) {
    var t = e.length,
        n = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
        r = 0,
        a = 0;

    while (t--) {
      a += n[r][parseInt(e.charAt(t), 10)], r = 1 - r;
    }

    return a % 10 === 0 && a > 0;
  }

  function n(e) {
    var t = e.length,
        n = 5;

    for (var r = 0; r < t; r++) {
      n = ((n || 10) * 2 % 11 + parseInt(e.charAt(r), 10)) % 10;
    }

    return n === 1;
  }

  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        n = e.length,
        r = t.length,
        a = Math.floor(r / 2);

    for (var l = 0; l < n; l++) {
      a = ((a || r) * 2 % (r + 1) + t.indexOf(e.charAt(l))) % r;
    }

    return a === 1;
  }

  function a(e) {
    var t = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]],
        n = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]],
        r = e.reverse(),
        a = 0;

    for (var l = 0; l < r.length; l++) {
      a = t[a][n[l % 8][r[l]]];
    }

    return a === 0;
  }

  var l = {
    luhn: t,
    mod11And10: n,
    mod37And36: r,
    verhoeff: a
  };

  function i(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1;
      r.configurable = !0;
      "value" in r && (r.writable = !0);
      Object.defineProperty(e, r.key, r);
    }
  }

  function s(e, t, n) {
    t && o(e.prototype, t);
    n && o(e, n);
    return e;
  }

  function c(e, t, n) {
    t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n;
    return e;
  }

  function u(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    });
    t && f(e, t);
  }

  function d(e) {
    d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    };
    return d(e);
  }

  function f(e, t) {
    f = Object.setPrototypeOf || function (e, t) {
      e.__proto__ = t;
      return e;
    };

    return f(e, t);
  }

  function m(e) {
    if (e === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return e;
  }

  function g(e, t) {
    if (t && (_typeof(t) === "object" || typeof t === "function")) {
      return t;
    }

    return m(e);
  }

  function p() {
    return {
      fns: {},
      clear: function clear() {
        this.fns = {};
      },
      emit: function emit(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
          n[r - 1] = arguments[r];
        }

        (this.fns[e] || []).map(function (e) {
          return e.apply(e, n);
        });
      },
      off: function off(e, t) {
        if (this.fns[e]) {
          var n = this.fns[e].indexOf(t);
          n >= 0 && this.fns[e].splice(n, 1);
        }
      },
      on: function on(e, t) {
        (this.fns[e] = this.fns[e] || []).push(t);
      }
    };
  }

  function h() {
    return {
      filters: {},
      add: function add(e, t) {
        (this.filters[e] = this.filters[e] || []).push(t);
      },
      clear: function clear() {
        this.filters = {};
      },
      execute: function execute(e, t, n) {
        if (!this.filters[e] || !this.filters[e].length) {
          return t;
        }

        var r = t,
            a = this.filters[e],
            l = a.length;

        for (var i = 0; i < l; i++) {
          r = a[i].apply(r, n);
        }

        return r;
      },
      remove: function remove(e, t) {
        this.filters[e] && (this.filters[e] = this.filters[e].filter(function (e) {
          return e !== t;
        }));
      }
    };
  }

  function v(e, t, n, r) {
    var a = (n.getAttribute('type') || '').toLowerCase(),
        l = n.tagName.toLowerCase();

    switch (l) {
      case 'textarea':
        return n.value;

      case 'select':
        var s = n;
        var o = s.selectedIndex;
        return o >= 0 ? s.options.item(o).value : '';

      case 'input':
        if ('radio' === a || 'checkbox' === a) {
          var i = r.filter(function (e) {
            return e.checked;
          }).length;
          return i === 0 ? '' : i + '';
        } else {
          return n.value;
        }

        ;

      default:
        return '';
    }
  }

  function A(e, t) {
    var n = Array.isArray(t) ? t : [t],
        r = e;
    n.forEach(function (e) {
      r = r.replace('%s', e);
    });
    return r;
  }

  function b() {
    var e = function e(_e2) {
      return parseFloat("".concat(_e2).replace(',', '.'));
    };

    return {
      validate: function validate(t) {
        var n = t.value;

        if (n === '') {
          return {
            valid: !0
          };
        }

        var r = Object.assign({}, {
          inclusive: !0,
          message: ''
        }, t.options),
            a = e(r.min),
            l = e(r.max);
        return r.inclusive ? {
          message: A(t.l10n ? r.message || t.l10n.between["default"] : r.message, ["".concat(a), "".concat(l)]),
          valid: parseFloat(n) >= a && parseFloat(n) <= l
        } : {
          message: A(t.l10n ? r.message || t.l10n.between.notInclusive : r.message, ["".concat(a), "".concat(l)]),
          valid: parseFloat(n) > a && parseFloat(n) < l
        };
      }
    };
  }

  function E() {
    return {
      validate: function validate(e) {
        return {
          valid: !0
        };
      }
    };
  }

  function C(e, t) {
    if ('function' === typeof e) {
      return e.apply(this, t);
    } else if ('string' === typeof e) {
      var n = e;
      '()' === n.substring(n.length - 2) && (n = n.substring(0, n.length - 2));
      var r = n.split('.'),
          a = r.pop(),
          l = window,
          i = !0,
          o = !1,
          s = void 0;

      try {
        for (var c = r[Symbol.iterator](), u; !(i = (u = c.next()).done); i = !0) {
          var d = u.value;
          l = l[d];
        }
      } catch (e) {
        o = !0, s = e;
      } finally {
        try {
          !i && c["return"] != null && c["return"]();
        } finally {
          if (o) {
            throw s;
          }
        }
      }

      ;
      return typeof l[a] === 'undefined' ? null : l[a].apply(this, t);
    }
  }

  function V() {
    return {
      validate: function validate(e) {
        var t = C(e.options.callback, [e]);
        return 'boolean' === typeof t ? {
          valid: t
        } : t;
      }
    };
  }

  function S() {
    return {
      validate: function validate(e) {
        var t = 'select' === e.element.tagName.toLowerCase() ? e.element.querySelectorAll('option:checked').length : e.elements.filter(function (e) {
          return e.checked;
        }).length,
            n = e.options.min ? "".concat(e.options.min) : '',
            r = e.options.max ? "".concat(e.options.max) : '',
            a = e.l10n ? e.options.message || e.l10n.choice["default"] : e.options.message,
            l = !(n && t < parseInt(n, 10) || r && t > parseInt(r, 10));

        switch (!0) {
          case !!n && !!r:
            a = A(e.l10n ? e.l10n.choice.between : e.options.message, [n, r]);
            break;

          case !!n:
            a = A(e.l10n ? e.l10n.choice.more : e.options.message, n);
            break;

          case !!r:
            a = A(e.l10n ? e.l10n.choice.less : e.options.message, r);
            break;
        }

        return {
          message: a,
          valid: l
        };
      }
    };
  }

  var H = {
    AMERICAN_EXPRESS: {
      length: [15],
      prefix: ['34', '37']
    },
    DANKORT: {
      length: [16],
      prefix: ['5019']
    },
    DINERS_CLUB: {
      length: [14],
      prefix: ['300', '301', '302', '303', '304', '305', '36']
    },
    DINERS_CLUB_US: {
      length: [16],
      prefix: ['54', '55']
    },
    DISCOVER: {
      length: [16],
      prefix: ['6011', '622126', '622127', '622128', '622129', '62213', '62214', '62215', '62216', '62217', '62218', '62219', '6222', '6223', '6224', '6225', '6226', '6227', '6228', '62290', '62291', '622920', '622921', '622922', '622923', '622924', '622925', '644', '645', '646', '647', '648', '649', '65']
    },
    ELO: {
      length: [16],
      prefix: ['4011', '4312', '4389', '4514', '4573', '4576', '5041', '5066', '5067', '509', '6277', '6362', '6363', '650', '6516', '6550']
    },
    FORBRUGSFORENINGEN: {
      length: [16],
      prefix: ['600722']
    },
    JCB: {
      length: [16],
      prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
    },
    LASER: {
      length: [16, 17, 18, 19],
      prefix: ['6304', '6706', '6771', '6709']
    },
    MAESTRO: {
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
    },
    MASTERCARD: {
      length: [16],
      prefix: ['51', '52', '53', '54', '55']
    },
    SOLO: {
      length: [16, 18, 19],
      prefix: ['6334', '6767']
    },
    UNIONPAY: {
      length: [16, 17, 18, 19],
      prefix: ['622126', '622127', '622128', '622129', '62213', '62214', '62215', '62216', '62217', '62218', '62219', '6222', '6223', '6224', '6225', '6226', '6227', '6228', '62290', '62291', '622920', '622921', '622922', '622923', '622924', '622925']
    },
    VISA: {
      length: [16],
      prefix: ['4']
    },
    VISA_ELECTRON: {
      length: [16],
      prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917']
    }
  };

  function y() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            meta: {
              type: null
            },
            valid: !0
          };
        }

        if (/[^0-9-\s]+/.test(e.value)) {
          return {
            meta: {
              type: null
            },
            valid: !1
          };
        }

        var n = e.value.replace(/\D/g, '');

        if (!t(n)) {
          return {
            meta: {
              type: null
            },
            valid: !1
          };
        }

        for (var r = 0, a = Object.keys(H); r < a.length; r++) {
          var l = a[r];

          for (var i in H[l].prefix) {
            if (e.value.substr(0, H[l].prefix[i].length) === H[l].prefix[i] && H[l].length.indexOf(n.length) !== -1) {
              return {
                meta: {
                  type: l
                },
                valid: !0
              };
            }
          }
        }

        return {
          meta: {
            type: null
          },
          valid: !1
        };
      }
    };
  }

  function F(e, t, n, r) {
    if (isNaN(e) || isNaN(t) || isNaN(n)) {
      return !1;
    }

    if (e < 1e3 || e > 9999 || t <= 0 || t > 12) {
      return !1;
    }

    var a = [31, e % 400 === 0 || e % 100 !== 0 && e % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (n <= 0 || n > a[t - 1]) {
      return !1;
    }

    if (r === !0) {
      var l = new Date(),
          i = l.getFullYear(),
          o = l.getMonth(),
          s = l.getDate();
      return e < i || e === i && t - 1 < o || e === i && t - 1 === o && n < s;
    }

    return !0;
  }

  function I() {
    var e = function e(_e3, t, n) {
      var r = t.indexOf('YYYY'),
          a = t.indexOf('MM'),
          l = t.indexOf('DD');

      if (r === -1 || a === -1 || l === -1) {
        return null;
      }

      var i = _e3.split(' '),
          o = i[0].split(n);

      if (o.length < 3) {
        return null;
      }

      var s = new Date(parseInt(o[r], 10), parseInt(o[a], 10) - 1, parseInt(o[l], 10));

      if (i.length > 1) {
        var c = i[1].split(':');
        s.setHours(c.length > 0 ? parseInt(c[0], 10) : 0);
        s.setMinutes(c.length > 1 ? parseInt(c[1], 10) : 0);
        s.setSeconds(c.length > 2 ? parseInt(c[2], 10) : 0);
      }

      return s;
    },
        t = function t(e, _t2) {
      var n = _t2.replace(/Y/g, 'y').replace(/M/g, 'm').replace(/D/g, 'd').replace(/:m/g, ':M').replace(/:mm/g, ':MM').replace(/:S/, ':s').replace(/:SS/, ':ss'),
          r = e.getDate(),
          a = r < 10 ? "0".concat(r) : r,
          l = e.getMonth() + 1,
          i = l < 10 ? "0".concat(l) : l,
          o = "".concat(e.getFullYear()).substr(2),
          s = e.getFullYear(),
          c = e.getHours() % 12 || 12,
          u = c < 10 ? "0".concat(c) : c,
          d = e.getHours(),
          f = d < 10 ? "0".concat(d) : d,
          m = e.getMinutes(),
          g = m < 10 ? "0".concat(m) : m,
          p = e.getSeconds(),
          h = p < 10 ? "0".concat(p) : p,
          v = {
        H: "".concat(d),
        HH: "".concat(f),
        M: "".concat(m),
        MM: "".concat(g),
        d: "".concat(r),
        dd: "".concat(a),
        h: "".concat(c),
        hh: "".concat(u),
        m: "".concat(l),
        mm: "".concat(i),
        s: "".concat(p),
        ss: "".concat(h),
        yy: "".concat(o),
        yyyy: "".concat(s)
      };

      return n.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function (e) {
        return v[e] ? v[e] : e.slice(1, e.length - 1);
      });
    };

    return {
      validate: function validate(n) {
        if (n.value === '') {
          return {
            meta: {
              date: null
            },
            valid: !0
          };
        }

        var r = Object.assign({}, {
          format: n.element && n.element.getAttribute('type') === 'date' ? 'YYYY-MM-DD' : 'MM/DD/YYYY',
          message: ''
        }, n.options),
            a = n.l10n ? n.l10n.date["default"] : r.message,
            l = {
          message: "".concat(a),
          meta: {
            date: null
          },
          valid: !1
        },
            i = r.format.split(' '),
            o = i.length > 1 ? i[1] : null,
            s = i.length > 2 ? i[2] : null,
            c = n.value.split(' '),
            u = c[0],
            d = c.length > 1 ? c[1] : null;

        if (i.length !== c.length) {
          return l;
        }

        var f = r.separator || (u.indexOf('/') !== -1 ? '/' : u.indexOf('-') !== -1 ? '-' : u.indexOf('.') !== -1 ? '.' : '/');

        if (f === null || u.indexOf(f) === -1) {
          return l;
        }

        var m = u.split(f),
            g = i[0].split(f);

        if (m.length !== g.length) {
          return l;
        }

        var p = m[g.indexOf('YYYY')],
            h = m[g.indexOf('MM')],
            v = m[g.indexOf('DD')];

        if (!/^\d+$/.test(p) || !/^\d+$/.test(h) || !/^\d+$/.test(v) || p.length > 4 || h.length > 2 || v.length > 2) {
          return l;
        }

        var b = parseInt(p, 10),
            E = parseInt(h, 10),
            C = parseInt(v, 10);

        if (!F(b, E, C)) {
          return l;
        }

        var V = new Date(b, E - 1, C);

        if (o) {
          var S = d.split(':');

          if (o.split(':').length !== S.length) {
            return l;
          }

          var H = S.length > 0 ? S[0].length <= 2 && /^\d+$/.test(S[0]) ? parseInt(S[0], 10) : -1 : 0,
              y = S.length > 1 ? S[1].length <= 2 && /^\d+$/.test(S[1]) ? parseInt(S[1], 10) : -1 : 0,
              I = S.length > 2 ? S[2].length <= 2 && /^\d+$/.test(S[2]) ? parseInt(S[2], 10) : -1 : 0;

          if (H === -1 || y === -1 || I === -1) {
            return l;
          }

          if (I < 0 || I > 60) {
            return l;
          }

          if (H < 0 || H >= 24 || s && H > 12) {
            return l;
          }

          if (y < 0 || y > 59) {
            return l;
          }

          V.setHours(H);
          V.setMinutes(y);
          V.setSeconds(I);
        }

        var O = typeof r.min === 'function' ? r.min() : r.min,
            w = O instanceof Date ? O : O ? e(O, g, f) : V,
            L = typeof r.max === 'function' ? r.max() : r.max,
            N = L instanceof Date ? L : L ? e(L, g, f) : V,
            x = O instanceof Date ? t(w, r.format) : O,
            M = L instanceof Date ? t(N, r.format) : L;

        switch (!0) {
          case !!x && !M:
            return {
              message: A(n.l10n ? n.l10n.date.min : a, x),
              meta: {
                date: V
              },
              valid: V.getTime() >= w.getTime()
            };

          case !!M && !x:
            return {
              message: A(n.l10n ? n.l10n.date.max : a, M),
              meta: {
                date: V
              },
              valid: V.getTime() <= N.getTime()
            };

          case !!M && !!x:
            return {
              message: A(n.l10n ? n.l10n.date.range : a, [x, M]),
              meta: {
                date: V
              },
              valid: V.getTime() <= N.getTime() && V.getTime() >= w.getTime()
            };

          default:
            return {
              message: "".concat(a),
              meta: {
                date: V
              },
              valid: !0
            };
        }
      }
    };
  }

  function O() {
    return {
      validate: function validate(e) {
        var t = 'function' === typeof e.options.compare ? e.options.compare.call(this) : e.options.compare;
        return {
          valid: t === '' || e.value !== t
        };
      }
    };
  }

  function w() {
    return {
      validate: function validate(e) {
        return {
          valid: e.value === '' || /^\d+$/.test(e.value)
        };
      }
    };
  }

  function L() {
    var e = function e(_e4, t) {
      var n = _e4.split(/"/),
          r = n.length,
          a = [],
          l = '';

      for (var i = 0; i < r; i++) {
        if (i % 2 === 0) {
          var o = n[i].split(t),
              s = o.length;
          if (s === 1) l += o[0];else {
            a.push(l + o[0]);

            for (var c = 1; c < s - 1; c++) {
              a.push(o[c]);
            }

            l = o[s - 1];
          }
        } else l += '"' + n[i], i < r - 1 && (l += '"');
      }

      a.push(l);
      return a;
    };

    return {
      validate: function validate(t) {
        if (t.value === '') {
          return {
            valid: !0
          };
        }

        var n = Object.assign({}, {
          multiple: !1,
          separator: /[,;]/
        }, t.options),
            r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            a = n.multiple === !0 || "".concat(n.multiple) === 'true';

        if (a) {
          var l = n.separator || /[,;]/,
              i = e(t.value, l),
              o = i.length;

          for (var s = 0; s < o; s++) {
            if (!r.test(i[s])) {
              return {
                valid: !1
              };
            }
          }

          return {
            valid: !0
          };
        } else {
          return {
            valid: r.test(t.value)
          };
        }
      }
    };
  }

  function N() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t,
            n = e.options.extension ? e.options.extension.toLowerCase().split(',') : null,
            r = e.options.type ? e.options.type.toLowerCase().split(',') : null,
            a = window.File && window.FileList && window.FileReader;

        if (a) {
          var l = e.element.files,
              i = l.length,
              o = 0;

          if (e.options.maxFiles && i > parseInt("".concat(e.options.maxFiles), 10)) {
            return {
              meta: {
                error: 'INVALID_MAX_FILES'
              },
              valid: !1
            };
          }

          if (e.options.minFiles && i < parseInt("".concat(e.options.minFiles), 10)) {
            return {
              meta: {
                error: 'INVALID_MIN_FILES'
              },
              valid: !1
            };
          }

          var s = {};

          for (var c = 0; c < i; c++) {
            o += l[c].size;
            t = l[c].name.substr(l[c].name.lastIndexOf('.') + 1);
            s = {
              ext: t,
              file: l[c],
              size: l[c].size,
              type: l[c].type
            };

            if (e.options.minSize && l[c].size < parseInt("".concat(e.options.minSize), 10)) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_MIN_SIZE'
                }, s),
                valid: !1
              };
            }

            if (e.options.maxSize && l[c].size > parseInt("".concat(e.options.maxSize), 10)) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_MAX_SIZE'
                }, s),
                valid: !1
              };
            }

            if (n && n.indexOf(t.toLowerCase()) === -1) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_EXTENSION'
                }, s),
                valid: !1
              };
            }

            if (l[c].type && r && r.indexOf(l[c].type.toLowerCase()) === -1) {
              return {
                meta: Object.assign({}, {
                  error: 'INVALID_TYPE'
                }, s),
                valid: !1
              };
            }
          }

          if (e.options.maxTotalSize && o > parseInt("".concat(e.options.maxTotalSize), 10)) {
            return {
              meta: Object.assign({}, {
                error: 'INVALID_MAX_TOTAL_SIZE',
                totalSize: o
              }, s),
              valid: !1
            };
          }

          if (e.options.minTotalSize && o < parseInt("".concat(e.options.minTotalSize), 10)) {
            return {
              meta: Object.assign({}, {
                error: 'INVALID_MIN_TOTAL_SIZE',
                totalSize: o
              }, s),
              valid: !1
            };
          }
        } else {
          t = e.value.substr(e.value.lastIndexOf('.') + 1);

          if (n && n.indexOf(t.toLowerCase()) === -1) {
            return {
              meta: {
                error: 'INVALID_EXTENSION',
                ext: t
              },
              valid: !1
            };
          }
        }

        return {
          valid: !0
        };
      }
    };
  }

  function x() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = Object.assign({}, {
          inclusive: !0,
          message: ''
        }, e.options),
            n = parseFloat("".concat(t.min).replace(',', '.'));
        return t.inclusive ? {
          message: A(e.l10n ? t.message || e.l10n.greaterThan["default"] : t.message, "".concat(n)),
          valid: parseFloat(e.value) >= n
        } : {
          message: A(e.l10n ? t.message || e.l10n.greaterThan.notInclusive : t.message, "".concat(n)),
          valid: parseFloat(e.value) > n
        };
      }
    };
  }

  function M() {
    return {
      validate: function validate(e) {
        var t = 'function' === typeof e.options.compare ? e.options.compare.call(this) : e.options.compare;
        return {
          valid: t === '' || e.value === t
        };
      }
    };
  }

  function T() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = Object.assign({}, {
          decimalSeparator: '.',
          thousandsSeparator: ''
        }, e.options),
            n = t.decimalSeparator === '.' ? '\\.' : t.decimalSeparator,
            r = t.thousandsSeparator === '.' ? '\\.' : t.thousandsSeparator,
            a = new RegExp("^-?[0-9]{1,3}(".concat(r, "[0-9]{3})*(").concat(n, "[0-9]+)?$")),
            l = new RegExp(r, 'g'),
            i = "".concat(e.value);

        if (!a.test(i)) {
          return {
            valid: !1
          };
        }

        r && (i = i.replace(l, ''));
        n && (i = i.replace(n, '.'));
        var o = parseFloat(i);
        return {
          valid: !isNaN(o) && isFinite(o) && Math.floor(o) === o
        };
      }
    };
  }

  function k() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = Object.assign({}, {
          ipv4: !0,
          ipv6: !0
        }, e.options),
            n = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,
            r = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;

        switch (!0) {
          case t.ipv4 && !t.ipv6:
            return {
              message: e.l10n ? t.message || e.l10n.ip.ipv4 : t.message,
              valid: n.test(e.value)
            };

          case !t.ipv4 && t.ipv6:
            return {
              message: e.l10n ? t.message || e.l10n.ip.ipv6 : t.message,
              valid: r.test(e.value)
            };

          case t.ipv4 && t.ipv6:
            ;

          default:
            return {
              message: e.l10n ? t.message || e.l10n.ip["default"] : t.message,
              valid: n.test(e.value) || r.test(e.value)
            };
        }
      }
    };
  }

  function R() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = Object.assign({}, {
          inclusive: !0,
          message: ''
        }, e.options),
            n = parseFloat("".concat(t.max).replace(',', '.'));
        return t.inclusive ? {
          message: A(e.l10n ? t.message || e.l10n.lessThan["default"] : t.message, "".concat(n)),
          valid: parseFloat(e.value) <= n
        } : {
          message: A(e.l10n ? t.message || e.l10n.lessThan.notInclusive : t.message, "".concat(n)),
          valid: parseFloat(e.value) < n
        };
      }
    };
  }

  function B() {
    return {
      validate: function validate(e) {
        return {
          valid: e.value !== ''
        };
      }
    };
  }

  function Z() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = Object.assign({}, {
          decimalSeparator: '.',
          thousandsSeparator: ''
        }, e.options),
            n = "".concat(e.value);
        n.substr(0, 1) === t.decimalSeparator ? n = "0".concat(t.decimalSeparator).concat(n.substr(1)) : n.substr(0, 2) === "-".concat(t.decimalSeparator) && (n = "-0".concat(t.decimalSeparator).concat(n.substr(2)));
        var r = t.decimalSeparator === '.' ? '\\.' : t.decimalSeparator,
            a = t.thousandsSeparator === '.' ? '\\.' : t.thousandsSeparator,
            l = new RegExp("^-?[0-9]{1,3}(".concat(a, "[0-9]{3})*(").concat(r, "[0-9]+)?$")),
            i = new RegExp(a, 'g');

        if (!l.test(n)) {
          return {
            valid: !1
          };
        }

        a && (n = n.replace(i, ''));
        r && (n = n.replace(r, '.'));
        var o = parseFloat(n);
        return {
          valid: !isNaN(o) && isFinite(o)
        };
      }
    };
  }

  function G() {
    return {
      validate: function validate(e) {
        return C(e.options.promise, [e]);
      }
    };
  }

  function P() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = e.options.regexp;

        if (t instanceof RegExp) {
          return {
            valid: t.test(e.value)
          };
        } else {
          var n = t.toString(),
              r = e.options.flags ? new RegExp(n, e.options.flags) : new RegExp(n);
          return {
            valid: r.test(e.value)
          };
        }
      }
    };
  }

  function D(e, t) {
    var n = function n(e) {
      return Object.keys(e).map(function (t) {
        return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t]));
      }).join('&');
    };

    return new Promise(function (r, a) {
      var l = Object.assign({}, {
        crossDomain: !1,
        headers: {},
        method: 'GET',
        params: {}
      }, t),
          i = Object.keys(l.params).map(function (e) {
        return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(l.params[e]));
      }).join('&'),
          o = e.indexOf('?'),
          s = 'GET' === l.method ? "".concat(e).concat(o ? '?' : '&').concat(i) : e;

      if (l.crossDomain) {
        var c = document.createElement('script'),
            u = "___fetch".concat(Date.now(), "___");

        window[u] = function (e) {
          delete window[u];
          r(e);
        };

        c.src = "".concat(s).concat(o ? '&' : '?', "callback=").concat(u);
        c.async = !0;
        c.addEventListener('load', function () {
          c.parentNode.removeChild(c);
        });
        c.addEventListener('error', function () {
          return a;
        });
        document.head.appendChild(c);
      } else {
        var d = new XMLHttpRequest();
        d.open(l.method, s);
        d.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        'POST' === l.method && d.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        Object.keys(l.headers).forEach(function (e) {
          return d.setRequestHeader(e, l.headers[e]);
        });
        d.addEventListener('load', function () {
          r(JSON.parse(this.responseText));
        });
        d.addEventListener('error', function () {
          return a;
        });
        d.send(n(l.params));
      }
    });
  }

  function K() {
    var e = {
      crossDomain: !1,
      data: {},
      headers: {},
      method: 'GET',
      validKey: 'valid'
    };
    return {
      validate: function validate(t) {
        if (t.value === '') {
          return Promise.resolve({
            valid: !0
          });
        }

        var n = Object.assign({}, e, t.options),
            r = n.data;
        'function' === typeof n.data && (r = n.data.call(this, t));
        'string' === typeof r && (r = JSON.parse(r));
        r[n.name || t.field] = t.value;
        var a = 'function' === typeof n.url ? n.url.call(this, t) : n.url;
        return D(a, {
          crossDomain: n.crossDomain,
          headers: n.headers,
          method: n.method,
          params: r
        }).then(function (e) {
          return Promise.resolve({
            message: e.message,
            meta: e,
            valid: "".concat(e[n.validKey]) === 'true'
          });
        })["catch"](function (e) {
          return Promise.reject({
            valid: !1
          });
        });
      }
    };
  }

  function U() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = Object.assign({}, {
          "case": 'lower'
        }, e.options),
            n = (t["case"] || 'lower').toLowerCase();
        return {
          message: t.message || (e.l10n ? 'upper' === n ? e.l10n.stringCase.upper : e.l10n.stringCase["default"] : t.message),
          valid: 'upper' === n ? e.value === e.value.toUpperCase() : e.value === e.value.toLowerCase()
        };
      }
    };
  }

  function Y() {
    var e = function e(_e5) {
      var t = _e5.length;

      for (var n = _e5.length - 1; n >= 0; n--) {
        var r = _e5.charCodeAt(n);

        r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2);
        r >= 56320 && r <= 57343 && n--;
      }

      return "".concat(t);
    };

    return {
      validate: function validate(t) {
        var n = Object.assign({}, {
          message: '',
          trim: !1,
          utf8Bytes: !1
        }, t.options),
            r = n.trim === !0 || "".concat(n.trim) === 'true' ? t.value.trim() : t.value;

        if (r === '') {
          return {
            valid: !0
          };
        }

        var a = n.min ? "".concat(n.min) : '',
            l = n.max ? "".concat(n.max) : '',
            i = n.utf8Bytes ? e(r) : r.length,
            o = !0,
            s = t.l10n ? n.message || t.l10n.stringLength["default"] : n.message;
        (a && i < parseInt(a, 10) || l && i > parseInt(l, 10)) && (o = !1);

        switch (!0) {
          case !!a && !!l:
            s = A(t.l10n ? n.message || t.l10n.stringLength.between : n.message, [a, l]);
            break;

          case !!a:
            s = A(t.l10n ? n.message || t.l10n.stringLength.more : n.message, "".concat(parseInt(a, 10) - 1));
            break;

          case !!l:
            s = A(t.l10n ? n.message || t.l10n.stringLength.less : n.message, "".concat(parseInt(l, 10) + 1));
            break;
        }

        return {
          message: s,
          valid: o
        };
      }
    };
  }

  function J() {
    var e = {
      allowEmptyProtocol: !1,
      allowLocal: !1,
      protocol: 'http, https, ftp'
    };
    return {
      validate: function validate(t) {
        if (t.value === '') {
          return {
            valid: !0
          };
        }

        var n = Object.assign({}, e, t.options),
            r = n.allowLocal === !0 || "".concat(n.allowLocal) === 'true',
            a = n.allowEmptyProtocol === !0 || "".concat(n.allowEmptyProtocol) === 'true',
            l = n.protocol.split(',').join('|').replace(/\s/g, ''),
            i = new RegExp("^(?:(?:" + l + ")://)" + (a ? '?' : '') + "(?:\\S+(?::\\S*)?@)?" + "(?:" + (r ? '' : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" + "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" + "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" + "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (r ? '?' : '') + ")" + "(?::\\d{2,5})?" + "(?:/[^\\s]*)?$", "i");
        return {
          valid: i.test(t.value)
        };
      }
    };
  }

  function W() {
    return {
      validate: function validate(e) {
        return {
          valid: e.value === '' || /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(e.value)
        };
      }
    };
  }

  function z() {
    return {
      validate: function validate(e) {
        return {
          valid: e.value === '' || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(e.value)
        };
      }
    };
  }

  function _() {
    var e = ['hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'],
        t = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'transparent', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'],
        n = function n(e) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
    },
        r = function r(e) {
      return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(e);
    },
        a = function a(e) {
      return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(e);
    },
        l = function l(e) {
      return t.indexOf(e) >= 0;
    },
        i = function i(e) {
      return /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(e) || /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(e);
    },
        o = function o(e) {
      return /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(e) || /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(e);
    };

    return {
      validate: function validate(t) {
        if (t.value === '') {
          return {
            valid: !0
          };
        }

        var s = typeof t.options.type === 'string' ? t.options.type.toString().replace(/s/g, '').split(',') : t.options.type || e,
            c = !0,
            u = !1,
            d = void 0;

        try {
          for (var f = s[Symbol.iterator](), m; !(c = (m = f.next()).done); c = !0) {
            var g = m.value,
                p = g.toLowerCase();

            if (e.indexOf(p) === -1) {
              continue;
            }

            var h = !0;

            switch (p) {
              case 'hex':
                h = n(t.value);
                break;

              case 'hsl':
                h = r(t.value);
                break;

              case 'hsla':
                h = a(t.value);
                break;

              case 'keyword':
                h = l(t.value);
                break;

              case 'rgb':
                h = i(t.value);
                break;

              case 'rgba':
                h = o(t.value);
                break;
            }

            if (h) {
              return {
                valid: !0
              };
            }
          }
        } catch (e) {
          u = !0, d = e;
        } finally {
          try {
            !c && f["return"] != null && f["return"]();
          } finally {
            if (u) {
              throw d;
            }
          }
        }

        ;
        return {
          valid: !1
        };
      }
    };
  }

  function X() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = e.value.toUpperCase();

        if (!/^[0-9A-Z]{9}$/.test(t)) {
          return {
            valid: !1
          };
        }

        var n = t.split('').map(function (e) {
          var t = e.charCodeAt(0);
          return t >= 65 && t <= 90 ? t - 65 + 10 + '' : e;
        }),
            r = n.length,
            a = 0;

        for (var l = 0; l < r - 1; l++) {
          var i = parseInt(n[l], 10);
          l % 2 !== 0 && (i *= 2);
          i > 9 && (i -= 9);
          a += i;
        }

        a = (10 - a % 10) % 10;
        return {
          valid: a === parseInt(n[r - 1], 10)
        };
      }
    };
  }

  function Q() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(e.value)) {
          return {
            valid: !1
          };
        }

        var t = e.value.length,
            n = 0,
            r = t === 8 ? [3, 1] : [1, 3];

        for (var a = 0; a < t - 1; a++) {
          n += parseInt(e.value.charAt(a), 10) * r[a % 2];
        }

        n = (10 - n % 10) % 10;
        return {
          valid: "".concat(n) === e.value.charAt(t - 1)
        };
      }
    };
  }

  function q() {
    var e = {
      ANDOVER: ['10', '12'],
      ATLANTA: ['60', '67'],
      AUSTIN: ['50', '53'],
      BROOKHAVEN: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
      CINCINNATI: ['30', '32', '35', '36', '37', '38', '61'],
      FRESNO: ['15', '24'],
      INTERNET: ['20', '26', '27', '45', '46', '47'],
      KANSAS_CITY: ['40', '44'],
      MEMPHIS: ['94', '95'],
      OGDEN: ['80', '90'],
      PHILADELPHIA: ['33', '39', '41', '42', '43', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
      SMALL_BUSINESS_ADMINISTRATION: ['31']
    };
    return {
      validate: function validate(t) {
        if (t.value === '') {
          return {
            meta: null,
            valid: !0
          };
        }

        if (!/^[0-9]{2}-?[0-9]{7}$/.test(t.value)) {
          return {
            meta: null,
            valid: !1
          };
        }

        var n = "".concat(t.value.substr(0, 2));

        for (var r in e) {
          if (e[r].indexOf(n) !== -1) {
            return {
              meta: {
                campus: r
              },
              valid: !0
            };
          }
        }

        return {
          meta: null,
          valid: !1
        };
      }
    };
  }

  function $() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = e.value.toUpperCase();

        if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(t)) {
          return {
            valid: !1
          };
        }

        t = t.replace(/\s/g, '').replace(/-/g, '');
        'GRID:' === t.substr(0, 5) && (t = t.substr(5));
        return {
          valid: r(t)
        };
      }
    };
  }

  function j() {
    return {
      validate: function validate(e) {
        return {
          valid: e.value === '' || /^[0-9a-fA-F]+$/.test(e.value)
        };
      }
    };
  }

  function ee() {
    var e = {
      AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',
      AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',
      AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',
      AO: 'AO[0-9]{2}[0-9]{21}',
      AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',
      AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',
      BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',
      BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',
      BF: 'BF[0-9]{2}[0-9]{23}',
      BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',
      BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',
      BI: 'BI[0-9]{2}[0-9]{12}',
      BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',
      BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',
      CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
      CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',
      CM: 'CM[0-9]{2}[0-9]{23}',
      CR: 'CR[0-9]{2}[0-9][0-9]{3}[0-9]{14}',
      CV: 'CV[0-9]{2}[0-9]{21}',
      CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',
      CZ: 'CZ[0-9]{2}[0-9]{20}',
      DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',
      DK: 'DK[0-9]{2}[0-9]{14}',
      DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',
      DZ: 'DZ[0-9]{2}[0-9]{20}',
      EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',
      ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',
      FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',
      FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
      FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
      GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
      GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',
      GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',
      GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
      GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',
      GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',
      HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',
      HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',
      IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
      IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',
      IR: 'IR[0-9]{2}[0-9]{22}',
      IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',
      IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
      JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',
      KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',
      KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
      LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',
      LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
      LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',
      LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
      LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',
      MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
      MD: 'MD[0-9]{2}[A-Z0-9]{20}',
      ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
      MG: 'MG[0-9]{2}[0-9]{23}',
      MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',
      ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',
      MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',
      MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',
      MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',
      MZ: 'MZ[0-9]{2}[0-9]{21}',
      NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',
      NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',
      PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
      PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',
      PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
      PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',
      QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
      RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
      RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
      SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',
      SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',
      SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',
      SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',
      SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
      SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',
      TL: 'TL38[0-9]{3}[0-9]{14}[0-9]{2}',
      TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
      TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',
      VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}',
      XK: 'XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}'
    },
        t = ['AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GI', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK', 'SM'];
    return {
      validate: function validate(n) {
        if (n.value === '') {
          return {
            valid: !0
          };
        }

        var r = Object.assign({}, {
          message: ''
        }, n.options),
            a = n.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(),
            l = r.country || a.substr(0, 2);

        if (!e[l]) {
          return {
            message: r.message,
            valid: !1
          };
        }

        if (r.sepa !== void 0) {
          var i = t.indexOf(l) !== -1;

          if ((r.sepa === 'true' || r.sepa === !0) && !i || (r.sepa === 'false' || r.sepa === !1) && i) {
            return {
              message: r.message,
              valid: !1
            };
          }
        }

        var o = A(n.l10n ? r.message || n.l10n.iban.country : r.message, n.l10n ? n.l10n.iban.countries[l] : l);

        if (!new RegExp("^".concat(e[l], "$")).test(n.value)) {
          return {
            message: o,
            valid: !1
          };
        }

        a = "".concat(a.substr(4)).concat(a.substr(0, 4));
        a = a.split('').map(function (e) {
          var t = e.charCodeAt(0);
          return t >= 65 && t <= 90 ? t - 65 + 10 : e;
        }).join('');
        var s = parseInt(a.substr(0, 1), 10),
            c = a.length;

        for (var u = 1; u < c; ++u) {
          s = (s * 10 + parseInt(a.substr(u, 1), 10)) % 97;
        }

        return {
          message: o,
          valid: s === 1
        };
      }
    };
  }

  function te(e) {
    var t = e.replace(/\./g, '');
    return {
      meta: {},
      valid: /^\d{7,8}$/.test(t)
    };
  }

  function ne(e, t) {
    if (!/^\d{13}$/.test(e)) {
      return !1;
    }

    var n = parseInt(e.substr(0, 2), 10),
        r = parseInt(e.substr(2, 2), 10),
        a = parseInt(e.substr(7, 2), 10),
        l = parseInt(e.substr(12, 1), 10);

    if (n > 31 || r > 12) {
      return !1;
    }

    var i = 0;

    for (var o = 0; o < 6; o++) {
      i += (7 - o) * (parseInt(e.charAt(o), 10) + parseInt(e.charAt(o + 6), 10));
    }

    i = 11 - i % 11;
    (i === 10 || i === 11) && (i = 0);

    if (i !== l) {
      return !1;
    }

    switch (t.toUpperCase()) {
      case 'BA':
        return 10 <= a && a <= 19;

      case 'MK':
        return 41 <= a && a <= 49;

      case 'ME':
        return 20 <= a && a <= 29;

      case 'RS':
        return 70 <= a && a <= 99;

      case 'SI':
        return 50 <= a && a <= 59;

      default:
        return !0;
    }
  }

  function re(e) {
    return {
      meta: {},
      valid: ne(e, 'BA')
    };
  }

  function ae(e) {
    if (!/^\d{10}$/.test(e) && !/^\d{6}\s\d{3}\s\d{1}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = e.replace(/\s/g, ''),
        n = parseInt(t.substr(0, 2), 10) + 1900,
        r = parseInt(t.substr(2, 2), 10),
        a = parseInt(t.substr(4, 2), 10);
    r > 40 ? (n += 100, r -= 40) : r > 20 && (n -= 100, r -= 20);

    if (!F(n, r, a)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var l = 0,
        i = [2, 4, 8, 5, 10, 9, 7, 3, 6];

    for (var o = 0; o < 9; o++) {
      l += parseInt(t.charAt(o), 10) * i[o];
    }

    l = l % 11 % 10;
    return {
      meta: {},
      valid: "".concat(l) === t.substr(9, 1)
    };
  }

  function le(e) {
    var t = e.replace(/\D/g, '');

    if (!/^\d{11}$/.test(t) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 0,
        r;

    for (r = 0; r < 9; r++) {
      n += (10 - r) * parseInt(t.charAt(r), 10);
    }

    n = 11 - n % 11;
    (n === 10 || n === 11) && (n = 0);

    if ("".concat(n) !== t.charAt(9)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var a = 0;

    for (r = 0; r < 10; r++) {
      a += (11 - r) * parseInt(t.charAt(r), 10);
    }

    a = 11 - a % 11;
    (a === 10 || a === 11) && (a = 0);
    return {
      meta: {},
      valid: "".concat(a) === t.charAt(10)
    };
  }

  function ie(e) {
    if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = e.replace(/\D/g, '').substr(3),
        n = t.length,
        r = n === 8 ? [3, 1] : [1, 3],
        a = 0;

    for (var l = 0; l < n - 1; l++) {
      a += parseInt(t.charAt(l), 10) * r[l % 2];
    }

    a = 10 - a % 10;
    return {
      meta: {},
      valid: "".concat(a) === t.charAt(n - 1)
    };
  }

  function oe(e) {
    if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = e.replace(/\-/g, '');

    while (t.length < 9) {
      t = "0".concat(t);
    }

    var n = [3, 2, 7, 6, 5, 4, 3, 2],
        r = 0;

    for (var a = 0; a < 8; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    r = 11 - r % 11;
    var l = "".concat(r);
    r === 11 ? l = '0' : r === 10 && (l = 'K');
    return {
      meta: {},
      valid: l === t.charAt(8).toUpperCase()
    };
  }

  function se(e) {
    var t = e.trim();

    if (!/^\d{15}$/.test(t) && !/^\d{17}[\dXx]{1}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = {
      11: {
        0: [0],
        1: [[0, 9], [11, 17]],
        2: [0, 28, 29]
      },
      12: {
        0: [0],
        1: [[0, 16]],
        2: [0, 21, 23, 25]
      },
      13: {
        0: [0],
        1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
        2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
        3: [[0, 4], [21, 24]],
        4: [[0, 4], 6, 21, [23, 35], 81],
        5: [[0, 3], [21, 35], 81, 82],
        6: [[0, 4], [21, 38], [81, 84]],
        7: [[0, 3], 5, 6, [21, 33]],
        8: [[0, 4], [21, 28]],
        9: [[0, 3], [21, 30], [81, 84]],
        10: [[0, 3], [22, 26], 28, 81, 82],
        11: [[0, 2], [21, 28], 81, 82]
      },
      14: {
        0: [0],
        1: [0, 1, [5, 10], [21, 23], 81],
        2: [[0, 3], 11, 12, [21, 27]],
        3: [[0, 3], 11, 21, 22],
        4: [[0, 2], 11, 21, [23, 31], 81],
        5: [[0, 2], 21, 22, 24, 25, 81],
        6: [[0, 3], [21, 24]],
        7: [[0, 2], [21, 29], 81],
        8: [[0, 2], [21, 30], 81, 82],
        9: [[0, 2], [21, 32], 81],
        10: [[0, 2], [21, 34], 81, 82],
        11: [[0, 2], [21, 30], 81, 82],
        23: [[0, 3], 22, 23, [25, 30], 32, 33]
      },
      15: {
        0: [0],
        1: [[0, 5], [21, 25]],
        2: [[0, 7], [21, 23]],
        3: [[0, 4]],
        4: [[0, 4], [21, 26], [28, 30]],
        5: [[0, 2], [21, 26], 81],
        6: [[0, 2], [21, 27]],
        7: [[0, 3], [21, 27], [81, 85]],
        8: [[0, 2], [21, 26]],
        9: [[0, 2], [21, 29], 81],
        22: [[0, 2], [21, 24]],
        25: [[0, 2], [22, 31]],
        26: [[0, 2], [24, 27], [29, 32], 34],
        28: [0, 1, [22, 27]],
        29: [0, [21, 23]]
      },
      21: {
        0: [0],
        1: [[0, 6], [11, 14], [22, 24], 81],
        2: [[0, 4], [11, 13], 24, [81, 83]],
        3: [[0, 4], 11, 21, 23, 81],
        4: [[0, 4], 11, [21, 23]],
        5: [[0, 5], 21, 22],
        6: [[0, 4], 24, 81, 82],
        7: [[0, 3], 11, 26, 27, 81, 82],
        8: [[0, 4], 11, 81, 82],
        9: [[0, 5], 11, 21, 22],
        10: [[0, 5], 11, 21, 81],
        11: [[0, 3], 21, 22],
        12: [[0, 2], 4, 21, 23, 24, 81, 82],
        13: [[0, 3], 21, 22, 24, 81, 82],
        14: [[0, 4], 21, 22, 81]
      },
      22: {
        0: [0],
        1: [[0, 6], 12, 22, [81, 83]],
        2: [[0, 4], 11, 21, [81, 84]],
        3: [[0, 3], 22, 23, 81, 82],
        4: [[0, 3], 21, 22],
        5: [[0, 3], 21, 23, 24, 81, 82],
        6: [[0, 2], 4, 5, [21, 23], 25, 81],
        7: [[0, 2], [21, 24], 81],
        8: [[0, 2], 21, 22, 81, 82],
        24: [[0, 6], 24, 26]
      },
      23: {
        0: [0],
        1: [[0, 12], 21, [23, 29], [81, 84]],
        2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
        3: [[0, 7], 21, 81, 82],
        4: [[0, 7], 21, 22],
        5: [[0, 3], 5, 6, [21, 24]],
        6: [[0, 6], [21, 24]],
        7: [[0, 16], 22, 81],
        8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
        9: [[0, 4], 21],
        10: [[0, 5], 24, 25, 81, [83, 85]],
        11: [[0, 2], 21, 23, 24, 81, 82],
        12: [[0, 2], [21, 26], [81, 83]],
        27: [[0, 4], [21, 23]]
      },
      31: {
        0: [0],
        1: [0, 1, [3, 10], [12, 20]],
        2: [0, 30]
      },
      32: {
        0: [0],
        1: [[0, 7], 11, [13, 18], 24, 25],
        2: [[0, 6], 11, 81, 82],
        3: [[0, 5], 11, 12, [21, 24], 81, 82],
        4: [[0, 2], 4, 5, 11, 12, 81, 82],
        5: [[0, 9], [81, 85]],
        6: [[0, 2], 11, 12, 21, 23, [81, 84]],
        7: [0, 1, 3, 5, 6, [21, 24]],
        8: [[0, 4], 11, 26, [29, 31]],
        9: [[0, 3], [21, 25], 28, 81, 82],
        10: [[0, 3], 11, 12, 23, 81, 84, 88],
        11: [[0, 2], 11, 12, [81, 83]],
        12: [[0, 4], [81, 84]],
        13: [[0, 2], 11, [21, 24]]
      },
      33: {
        0: [0],
        1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
        2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
        3: [[0, 4], 22, 24, [26, 29], 81, 82],
        4: [[0, 2], 11, 21, 24, [81, 83]],
        5: [[0, 3], [21, 23]],
        6: [[0, 2], 21, 24, [81, 83]],
        7: [[0, 3], 23, 26, 27, [81, 84]],
        8: [[0, 3], 22, 24, 25, 81],
        9: [[0, 3], 21, 22],
        10: [[0, 4], [21, 24], 81, 82],
        11: [[0, 2], [21, 27], 81]
      },
      34: {
        0: [0],
        1: [[0, 4], 11, [21, 24], 81],
        2: [[0, 4], 7, 8, [21, 23], 25],
        3: [[0, 4], 11, [21, 23]],
        4: [[0, 6], 21],
        5: [[0, 4], 6, [21, 23]],
        6: [[0, 4], 21],
        7: [[0, 3], 11, 21],
        8: [[0, 3], 11, [22, 28], 81],
        10: [[0, 4], [21, 24]],
        11: [[0, 3], 22, [24, 26], 81, 82],
        12: [[0, 4], 21, 22, 25, 26, 82],
        13: [[0, 2], [21, 24]],
        14: [[0, 2], [21, 24]],
        15: [[0, 3], [21, 25]],
        16: [[0, 2], [21, 23]],
        17: [[0, 2], [21, 23]],
        18: [[0, 2], [21, 25], 81]
      },
      35: {
        0: [0],
        1: [[0, 5], 11, [21, 25], 28, 81, 82],
        2: [[0, 6], [11, 13]],
        3: [[0, 5], 22],
        4: [[0, 3], 21, [23, 30], 81],
        5: [[0, 5], 21, [24, 27], [81, 83]],
        6: [[0, 3], [22, 29], 81],
        7: [[0, 2], [21, 25], [81, 84]],
        8: [[0, 2], [21, 25], 81],
        9: [[0, 2], [21, 26], 81, 82]
      },
      36: {
        0: [0],
        1: [[0, 5], 11, [21, 24]],
        2: [[0, 3], 22, 81],
        3: [[0, 2], 13, [21, 23]],
        4: [[0, 3], 21, [23, 30], 81, 82],
        5: [[0, 2], 21],
        6: [[0, 2], 22, 81],
        7: [[0, 2], [21, 35], 81, 82],
        8: [[0, 3], [21, 30], 81],
        9: [[0, 2], [21, 26], [81, 83]],
        10: [[0, 2], [21, 30]],
        11: [[0, 2], [21, 30], 81]
      },
      37: {
        0: [0],
        1: [[0, 5], 12, 13, [24, 26], 81],
        2: [[0, 3], 5, [11, 14], [81, 85]],
        3: [[0, 6], [21, 23]],
        4: [[0, 6], 81],
        5: [[0, 3], [21, 23]],
        6: [[0, 2], [11, 13], 34, [81, 87]],
        7: [[0, 5], 24, 25, [81, 86]],
        8: [[0, 2], 11, [26, 32], [81, 83]],
        9: [[0, 3], 11, 21, 23, 82, 83],
        10: [[0, 2], [81, 83]],
        11: [[0, 3], 21, 22],
        12: [[0, 3]],
        13: [[0, 2], 11, 12, [21, 29]],
        14: [[0, 2], [21, 28], 81, 82],
        15: [[0, 2], [21, 26], 81],
        16: [[0, 2], [21, 26]],
        17: [[0, 2], [21, 28]]
      },
      41: {
        0: [0],
        1: [[0, 6], 8, 22, [81, 85]],
        2: [[0, 5], 11, [21, 25]],
        3: [[0, 7], 11, [22, 29], 81],
        4: [[0, 4], 11, [21, 23], 25, 81, 82],
        5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
        6: [[0, 3], 11, 21, 22],
        7: [[0, 4], 11, 21, [24, 28], 81, 82],
        8: [[0, 4], 11, [21, 23], 25, [81, 83]],
        9: [[0, 2], 22, 23, [26, 28]],
        10: [[0, 2], [23, 25], 81, 82],
        11: [[0, 4], [21, 23]],
        12: [[0, 2], 21, 22, 24, 81, 82],
        13: [[0, 3], [21, 30], 81],
        14: [[0, 3], [21, 26], 81],
        15: [[0, 3], [21, 28]],
        16: [[0, 2], [21, 28], 81],
        17: [[0, 2], [21, 29]],
        90: [0, 1]
      },
      42: {
        0: [0],
        1: [[0, 7], [11, 17]],
        2: [[0, 5], 22, 81],
        3: [[0, 3], [21, 25], 81],
        5: [[0, 6], [25, 29], [81, 83]],
        6: [[0, 2], 6, 7, [24, 26], [82, 84]],
        7: [[0, 4]],
        8: [[0, 2], 4, 21, 22, 81],
        9: [[0, 2], [21, 23], 81, 82, 84],
        10: [[0, 3], [22, 24], 81, 83, 87],
        11: [[0, 2], [21, 27], 81, 82],
        12: [[0, 2], [21, 24], 81],
        13: [[0, 3], 21, 81],
        28: [[0, 2], 22, 23, [25, 28]],
        90: [0, [4, 6], 21]
      },
      43: {
        0: [0],
        1: [[0, 5], 11, 12, 21, 22, 24, 81],
        2: [[0, 4], 11, 21, [23, 25], 81],
        3: [[0, 2], 4, 21, 81, 82],
        4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
        5: [[0, 3], 11, [21, 25], [27, 29], 81],
        6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
        7: [[0, 3], [21, 26], 81],
        8: [[0, 2], 11, 21, 22],
        9: [[0, 3], [21, 23], 81],
        10: [[0, 3], [21, 28], 81],
        11: [[0, 3], [21, 29]],
        12: [[0, 2], [21, 30], 81],
        13: [[0, 2], 21, 22, 81, 82],
        31: [0, 1, [22, 27], 30]
      },
      44: {
        0: [0],
        1: [[0, 7], [11, 16], 83, 84],
        2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
        3: [0, 1, [3, 8]],
        4: [[0, 4]],
        5: [0, 1, [6, 15], 23, 82, 83],
        6: [0, 1, [4, 8]],
        7: [0, 1, [3, 5], 81, [83, 85]],
        8: [[0, 4], 11, 23, 25, [81, 83]],
        9: [[0, 3], 23, [81, 83]],
        12: [[0, 3], [23, 26], 83, 84],
        13: [[0, 3], [22, 24], 81],
        14: [[0, 2], [21, 24], 26, 27, 81],
        15: [[0, 2], 21, 23, 81],
        16: [[0, 2], [21, 25]],
        17: [[0, 2], 21, 23, 81],
        18: [[0, 3], 21, 23, [25, 27], 81, 82],
        19: [0],
        20: [0],
        51: [[0, 3], 21, 22],
        52: [[0, 3], 21, 22, 24, 81],
        53: [[0, 2], [21, 23], 81]
      },
      45: {
        0: [0],
        1: [[0, 9], [21, 27]],
        2: [[0, 5], [21, 26]],
        3: [[0, 5], 11, 12, [21, 32]],
        4: [0, 1, [3, 6], 11, [21, 23], 81],
        5: [[0, 3], 12, 21],
        6: [[0, 3], 21, 81],
        7: [[0, 3], 21, 22],
        8: [[0, 4], 21, 81],
        9: [[0, 3], [21, 24], 81],
        10: [[0, 2], [21, 31]],
        11: [[0, 2], [21, 23]],
        12: [[0, 2], [21, 29], 81],
        13: [[0, 2], [21, 24], 81],
        14: [[0, 2], [21, 25], 81]
      },
      46: {
        0: [0],
        1: [0, 1, [5, 8]],
        2: [0, 1],
        3: [0, [21, 23]],
        90: [[0, 3], [5, 7], [21, 39]]
      },
      50: {
        0: [0],
        1: [[0, 19]],
        2: [0, [22, 38], [40, 43]],
        3: [0, [81, 84]]
      },
      51: {
        0: [0],
        1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
        3: [[0, 4], 11, 21, 22],
        4: [[0, 3], 11, 21, 22],
        5: [[0, 4], 21, 22, 24, 25],
        6: [0, 1, 3, 23, 26, [81, 83]],
        7: [0, 1, 3, 4, [22, 27], 81],
        8: [[0, 2], 11, 12, [21, 24]],
        9: [[0, 4], [21, 23]],
        10: [[0, 2], 11, 24, 25, 28],
        11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
        13: [[0, 4], [21, 25], 81],
        14: [[0, 2], [21, 25]],
        15: [[0, 3], [21, 29]],
        16: [[0, 3], [21, 23], 81],
        17: [[0, 3], [21, 25], 81],
        18: [[0, 3], [21, 27]],
        19: [[0, 3], [21, 23]],
        20: [[0, 2], 21, 22, 81],
        32: [0, [21, 33]],
        33: [0, [21, 38]],
        34: [0, 1, [22, 37]]
      },
      52: {
        0: [0],
        1: [[0, 3], [11, 15], [21, 23], 81],
        2: [0, 1, 3, 21, 22],
        3: [[0, 3], [21, 30], 81, 82],
        4: [[0, 2], [21, 25]],
        5: [[0, 2], [21, 27]],
        6: [[0, 3], [21, 28]],
        22: [0, 1, [22, 30]],
        23: [0, 1, [22, 28]],
        24: [0, 1, [22, 28]],
        26: [0, 1, [22, 36]],
        27: [[0, 2], 22, 23, [25, 32]]
      },
      53: {
        0: [0],
        1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
        3: [[0, 2], [21, 26], 28, 81],
        4: [[0, 2], [21, 28]],
        5: [[0, 2], [21, 24]],
        6: [[0, 2], [21, 30]],
        7: [[0, 2], [21, 24]],
        8: [[0, 2], [21, 29]],
        9: [[0, 2], [21, 27]],
        23: [0, 1, [22, 29], 31],
        25: [[0, 4], [22, 32]],
        26: [0, 1, [21, 28]],
        27: [0, 1, [22, 30]],
        28: [0, 1, 22, 23],
        29: [0, 1, [22, 32]],
        31: [0, 2, 3, [22, 24]],
        34: [0, [21, 23]],
        33: [0, 21, [23, 25]],
        35: [0, [21, 28]]
      },
      54: {
        0: [0],
        1: [[0, 2], [21, 27]],
        21: [0, [21, 29], 32, 33],
        22: [0, [21, 29], [31, 33]],
        23: [0, 1, [22, 38]],
        24: [0, [21, 31]],
        25: [0, [21, 27]],
        26: [0, [21, 27]]
      },
      61: {
        0: [0],
        1: [[0, 4], [11, 16], 22, [24, 26]],
        2: [[0, 4], 22],
        3: [[0, 4], [21, 24], [26, 31]],
        4: [[0, 4], [22, 31], 81],
        5: [[0, 2], [21, 28], 81, 82],
        6: [[0, 2], [21, 32]],
        7: [[0, 2], [21, 30]],
        8: [[0, 2], [21, 31]],
        9: [[0, 2], [21, 29]],
        10: [[0, 2], [21, 26]]
      },
      62: {
        0: [0],
        1: [[0, 5], 11, [21, 23]],
        2: [0, 1],
        3: [[0, 2], 21],
        4: [[0, 3], [21, 23]],
        5: [[0, 3], [21, 25]],
        6: [[0, 2], [21, 23]],
        7: [[0, 2], [21, 25]],
        8: [[0, 2], [21, 26]],
        9: [[0, 2], [21, 24], 81, 82],
        10: [[0, 2], [21, 27]],
        11: [[0, 2], [21, 26]],
        12: [[0, 2], [21, 28]],
        24: [0, 21, [24, 29]],
        26: [0, 21, [23, 30]],
        29: [0, 1, [21, 27]],
        30: [0, 1, [21, 27]]
      },
      63: {
        0: [0],
        1: [[0, 5], [21, 23]],
        2: [0, 2, [21, 25]],
        21: [0, [21, 23], [26, 28]],
        22: [0, [21, 24]],
        23: [0, [21, 24]],
        25: [0, [21, 25]],
        26: [0, [21, 26]],
        27: [0, 1, [21, 26]],
        28: [[0, 2], [21, 23]]
      },
      64: {
        0: [0],
        1: [0, 1, [4, 6], 21, 22, 81],
        2: [[0, 3], 5, [21, 23]],
        3: [[0, 3], [21, 24], 81],
        4: [[0, 2], [21, 25]],
        5: [[0, 2], 21, 22]
      },
      65: {
        0: [0],
        1: [[0, 9], 21],
        2: [[0, 5]],
        21: [0, 1, 22, 23],
        22: [0, 1, 22, 23],
        23: [[0, 3], [23, 25], 27, 28],
        28: [0, 1, [22, 29]],
        29: [0, 1, [22, 29]],
        30: [0, 1, [22, 24]],
        31: [0, 1, [21, 31]],
        32: [0, 1, [21, 27]],
        40: [0, 2, 3, [21, 28]],
        42: [[0, 2], 21, [23, 26]],
        43: [0, 1, [21, 26]],
        90: [[0, 4]],
        27: [[0, 2], 22, 23]
      },
      71: {
        0: [0]
      },
      81: {
        0: [0]
      },
      82: {
        0: [0]
      }
    },
        r = parseInt(t.substr(0, 2), 10),
        a = parseInt(t.substr(2, 2), 10),
        l = parseInt(t.substr(4, 2), 10);

    if (!n[r] || !n[r][a]) {
      return {
        meta: {},
        valid: !1
      };
    }

    var i = !1,
        o = n[r][a],
        s;

    for (s = 0; s < o.length; s++) {
      if (Array.isArray(o[s]) && o[s][0] <= l && l <= o[s][1] || !Array.isArray(o[s]) && l === o[s]) {
        i = !0;
        break;
      }
    }

    if (!i) {
      return {
        meta: {},
        valid: !1
      };
    }

    var c;
    t.length === 18 ? c = t.substr(6, 8) : c = "19".concat(t.substr(6, 6));
    var u = parseInt(c.substr(0, 4), 10),
        d = parseInt(c.substr(4, 2), 10),
        f = parseInt(c.substr(6, 2), 10);

    if (!F(u, d, f)) {
      return {
        meta: {},
        valid: !1
      };
    }

    if (t.length === 18) {
      var m = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
          g = 0;

      for (s = 0; s < 17; s++) {
        g += parseInt(t.charAt(s), 10) * m[s];
      }

      g = (12 - g % 11) % 11;
      var p = t.charAt(17).toUpperCase() !== 'X' ? parseInt(t.charAt(17), 10) : 10;
      return {
        meta: {},
        valid: p === g
      };
    }

    return {
      meta: {},
      valid: !0
    };
  }

  function ce(e) {
    var t = e.replace(/\./g, '').replace('-', '');

    if (!/^\d{8,16}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = t.length,
        r = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71],
        a = 0;

    for (var l = n - 2; l >= 0; l--) {
      a += parseInt(t.charAt(l), 10) * r[l];
    }

    a %= 11;
    a >= 2 && (a = 11 - a);
    return {
      meta: {},
      valid: "".concat(a) === t.substr(n - 1)
    };
  }

  function ue(e) {
    if (!/^\d{9,10}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = 1900 + parseInt(e.substr(0, 2), 10),
        n = parseInt(e.substr(2, 2), 10) % 50 % 20,
        r = parseInt(e.substr(4, 2), 10);

    if (e.length === 9) {
      t >= 1980 && (t -= 100);

      if (t > 1953) {
        return {
          meta: {},
          valid: !1
        };
      }
    } else t < 1954 && (t += 100);

    if (!F(t, n, r)) {
      return {
        meta: {},
        valid: !1
      };
    }

    if (e.length === 10) {
      var a = parseInt(e.substr(0, 9), 10) % 11;
      t < 1985 && (a %= 10);
      return {
        meta: {},
        valid: "".concat(a) === e.substr(9, 1)
      };
    }

    return {
      meta: {},
      valid: !0
    };
  }

  function de(e) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = e.replace(/-/g, ''),
        n = parseInt(t.substr(0, 2), 10),
        r = parseInt(t.substr(2, 2), 10),
        a = parseInt(t.substr(4, 2), 10);

    switch (!0) {
      case '5678'.indexOf(t.charAt(6)) !== -1 && a >= 58:
        a += 1800;
        break;

      case '0123'.indexOf(t.charAt(6)) !== -1:
        ;

      case '49'.indexOf(t.charAt(6)) !== -1 && a >= 37:
        a += 1900;
        break;

      default:
        a += 2e3;
        break;
    }

    return {
      meta: {},
      valid: F(a, r, n)
    };
  }

  function fe(e) {
    var t = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(e),
        n = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(e),
        r = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(e);

    if (!t && !n && !r) {
      return {
        meta: {},
        valid: !1
      };
    }

    var a = e.replace(/-/g, ''),
        l,
        i,
        o = !0;

    if (t || n) {
      i = 'DNI';
      var s = 'XYZ'.indexOf(a.charAt(0));
      s !== -1 && (a = s + a.substr(1) + '', i = 'NIE');
      l = parseInt(a.substr(0, 8), 10);
      l = 'TRWAGMYFPDXBNJZSQVHLCKE'[l % 23];
      return {
        meta: {
          type: i
        },
        valid: l === a.substr(8, 1)
      };
    } else {
      l = a.substr(1, 7);
      i = 'CIF';
      var c = a[0],
          u = a.substr(-1),
          d = 0;

      for (var f = 0; f < l.length; f++) {
        if (f % 2 !== 0) d += parseInt(l[f], 10);else {
          var m = '' + parseInt(l[f], 10) * 2;
          d += parseInt(m[0], 10);
          m.length === 2 && (d += parseInt(m[1], 10));
        }
      }

      var g = d - Math.floor(d / 10) * 10;
      g !== 0 && (g = 10 - g);
      'KQS'.indexOf(c) !== -1 ? o = u === 'JABCDEFGHI'[g] : 'ABEH'.indexOf(c) !== -1 ? o = u === '' + g : o = u === '' + g || u === 'JABCDEFGHI'[g];
      return {
        meta: {
          type: i
        },
        valid: o
      };
    }
  }

  function me(e) {
    if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = parseInt(e.substr(0, 2), 10),
        n = parseInt(e.substr(2, 2), 10),
        r = parseInt(e.substr(4, 2), 10),
        a = {
      '+': 1800,
      '-': 1900,
      'A': 2e3
    };
    r = a[e.charAt(6)] + r;

    if (!F(r, n, t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var l = parseInt(e.substr(7, 3), 10);

    if (l < 2) {
      return {
        meta: {},
        valid: !1
      };
    }

    var i = parseInt(e.substr(0, 6) + e.substr(7, 3) + '', 10);
    return {
      meta: {},
      valid: '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(i % 31) === e.charAt(10)
    };
  }

  function ge(e) {
    var t = e.toUpperCase();

    if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = t.substr(5, 2);

    switch (!0) {
      case /^\d{2}$/.test(n):
        t = e;
        break;

      case n === '2A':
        t = "".concat(e.substr(0, 5), "19").concat(e.substr(7));
        break;

      case n === '2B':
        t = "".concat(e.substr(0, 5), "18").concat(e.substr(7));
        break;

      default:
        return {
          meta: {},
          valid: !1
        };
    }

    var r = 97 - parseInt(t.substr(0, 13), 10) % 97,
        a = r < 10 ? "0".concat(r) : "".concat(r);
    return {
      meta: {},
      valid: a === t.substr(13)
    };
  }

  function pe(e) {
    var t = e.toUpperCase();

    if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        r = t.charAt(0),
        a = t.charAt(1),
        l = 0,
        i = t;
    /^[A-Z]$/.test(a) ? (l += 9 * (10 + n.indexOf(r)), l += 8 * (10 + n.indexOf(a)), i = t.substr(2)) : (l += 324, l += 8 * (10 + n.indexOf(r)), i = t.substr(1));
    var o = i.length;

    for (var s = 0; s < o - 1; s++) {
      l += (7 - s) * parseInt(i.charAt(s), 10);
    }

    var c = l % 11,
        u = c === 0 ? '0' : 11 - c === 10 ? 'A' : "".concat(11 - c);
    return {
      meta: {},
      valid: u === i.charAt(o - 1)
    };
  }

  function he(e) {
    return {
      meta: {},
      valid: /^[0-9]{11}$/.test(e) && n(e)
    };
  }

  function ve(e) {
    if (!/^[2-9]\d{11}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = e.split("").map(function (e) {
      return parseInt(e, 10);
    });
    return {
      meta: {},
      valid: a(t)
    };
  }

  function Ae(e) {
    if (!/^\d{7}[A-W][AHWTX]?$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = function t(e) {
      var t = e;

      while (t.length < 7) {
        t = "0".concat(t);
      }

      var n = 'WABCDEFGHIJKLMNOPQRSTUV',
          r = 0;

      for (var a = 0; a < 7; a++) {
        r += parseInt(t.charAt(a), 10) * (8 - a);
      }

      r += 9 * n.indexOf(t.substr(7));
      return n[r % 23];
    },
        n = e.length === 9 && ('A' === e.charAt(8) || 'H' === e.charAt(8)) ? e.charAt(7) === t(e.substr(0, 7) + e.substr(8) + '') : e.charAt(7) === t(e.substr(0, 7));

    return {
      meta: {},
      valid: n
    };
  }

  function be(e) {
    if (!/^\d{1,9}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    return {
      meta: {},
      valid: t(e)
    };
  }

  function Ee(e) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = e.replace(/-/g, ''),
        n = parseInt(t.substr(0, 2), 10),
        r = parseInt(t.substr(2, 2), 10),
        a = parseInt(t.substr(4, 2), 10),
        l = parseInt(t.charAt(9), 10);
    a = l === 9 ? 1900 + a : (20 + l) * 100 + a;

    if (!F(a, r, n, !0)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var i = [3, 2, 7, 6, 5, 4, 3, 2],
        o = 0;

    for (var s = 0; s < 8; s++) {
      o += parseInt(t.charAt(s), 10) * i[s];
    }

    o = 11 - o % 11;
    return {
      meta: {},
      valid: "".concat(o) === t.charAt(8)
    };
  }

  function Ce(e) {
    var t = e.replace('-', '');

    if (!/^\d{13}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = t.charAt(6),
        r = parseInt(t.substr(0, 2), 10),
        a = parseInt(t.substr(2, 2), 10),
        l = parseInt(t.substr(4, 2), 10);

    switch (n) {
      case '1':
        ;

      case '2':
        ;

      case '5':
        ;

      case '6':
        r += 1900;
        break;

      case '3':
        ;

      case '4':
        ;

      case '7':
        ;

      case '8':
        r += 2e3;
        break;

      default:
        r += 1800;
        break;
    }

    if (!F(r, a, l)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var i = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5],
        o = t.length,
        s = 0;

    for (var c = 0; c < o - 1; c++) {
      s += i[c] * parseInt(t.charAt(c), 10);
    }

    var u = (11 - s % 11) % 10;
    return {
      meta: {},
      valid: "".concat(u) === t.charAt(o - 1)
    };
  }

  function Ve(e) {
    if (!/^[0-9]{11}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = parseInt(e.charAt(0), 10),
        n = parseInt(e.substr(1, 2), 10),
        r = parseInt(e.substr(3, 2), 10),
        a = parseInt(e.substr(5, 2), 10),
        l = t % 2 === 0 ? 17 + t / 2 : 17 + (t + 1) / 2;
    n = l * 100 + n;

    if (!F(n, r, a, !0)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
        o = 0,
        s;

    for (s = 0; s < 10; s++) {
      o += parseInt(e.charAt(s), 10) * i[s];
    }

    o %= 11;

    if (o !== 10) {
      return {
        meta: {},
        valid: "".concat(o) === e.charAt(10)
      };
    }

    o = 0;
    i = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

    for (s = 0; s < 10; s++) {
      o += parseInt(e.charAt(s), 10) * i[s];
    }

    o %= 11;
    o === 10 && (o = 0);
    return {
      meta: {},
      valid: "".concat(o) === e.charAt(10)
    };
  }

  function Se(e) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = e.replace(/\D/g, ''),
        n = parseInt(t.substr(0, 2), 10),
        r = parseInt(t.substr(2, 2), 10),
        a = parseInt(t.substr(4, 2), 10);
    a = a + 1800 + parseInt(t.charAt(6), 10) * 100;

    if (!F(a, r, n, !0)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var l = 0,
        i = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];

    for (var o = 0; o < 10; o++) {
      l += parseInt(t.charAt(o), 10) * i[o];
    }

    l = (l + 1) % 11 % 10;
    return {
      meta: {},
      valid: "".concat(l) === t.charAt(10)
    };
  }

  function He(e) {
    return {
      meta: {},
      valid: ne(e, 'ME')
    };
  }

  function ye(e) {
    return {
      meta: {},
      valid: ne(e, 'MK')
    };
  }

  function Fe(e) {
    var t = e.toUpperCase();

    if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = ['BACA', 'BAKA', 'BUEI', 'BUEY', 'CACA', 'CACO', 'CAGA', 'CAGO', 'CAKA', 'CAKO', 'COGE', 'COGI', 'COJA', 'COJE', 'COJI', 'COJO', 'COLA', 'CULO', 'FALO', 'FETO', 'GETA', 'GUEI', 'GUEY', 'JETA', 'JOTO', 'KACA', 'KACO', 'KAGA', 'KAGO', 'KAKA', 'KAKO', 'KOGE', 'KOGI', 'KOJA', 'KOJE', 'KOJI', 'KOJO', 'KOLA', 'KULO', 'LILO', 'LOCA', 'LOCO', 'LOKA', 'LOKO', 'MAME', 'MAMO', 'MEAR', 'MEAS', 'MEON', 'MIAR', 'MION', 'MOCO', 'MOKO', 'MULA', 'MULO', 'NACA', 'NACO', 'PEDA', 'PEDO', 'PENE', 'PIPI', 'PITO', 'POPO', 'PUTA', 'PUTO', 'QULO', 'RATA', 'ROBA', 'ROBE', 'ROBO', 'RUIN', 'SENO', 'TETA', 'VACA', 'VAGA', 'VAGO', 'VAKA', 'VUEI', 'VUEY', 'WUEI', 'WUEY'],
        r = t.substr(0, 4);

    if (n.indexOf(r) >= 0) {
      return {
        meta: {},
        valid: !1
      };
    }

    var a = parseInt(t.substr(4, 2), 10),
        l = parseInt(t.substr(6, 2), 10),
        i = parseInt(t.substr(6, 2), 10);
    /^[0-9]$/.test(t.charAt(16)) ? a += 1900 : a += 2e3;

    if (!F(a, l, i)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var o = t.charAt(10);

    if (o !== 'H' && o !== 'M') {
      return {
        meta: {},
        valid: !1
      };
    }

    var s = t.substr(11, 2),
        c = ['AS', 'BC', 'BS', 'CC', 'CH', 'CL', 'CM', 'CS', 'DF', 'DG', 'GR', 'GT', 'HG', 'JC', 'MC', 'MN', 'MS', 'NE', 'NL', 'NT', 'OC', 'PL', 'QR', 'QT', 'SL', 'SP', 'SR', 'TC', 'TL', 'TS', 'VZ', 'YN', 'ZS'];

    if (c.indexOf(s) === -1) {
      return {
        meta: {},
        valid: !1
      };
    }

    var u = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ',
        d = 0,
        f = t.length;

    for (var m = 0; m < f - 1; m++) {
      d += (18 - m) * u.indexOf(t.charAt(m));
    }

    d = (10 - d % 10) % 10;
    return {
      meta: {},
      valid: "".concat(d) === t.charAt(f - 1)
    };
  }

  function Ie(e) {
    if (!/^\d{12}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = parseInt(e.substr(0, 2), 10),
        n = parseInt(e.substr(2, 2), 10),
        r = parseInt(e.substr(4, 2), 10);

    if (!F(t + 1900, n, r) && !F(t + 2e3, n, r)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var a = e.substr(6, 2),
        l = ["17", "18", "19", "20", "69", "70", "73", "80", "81", "94", "95", "96", "97"];
    return {
      meta: {},
      valid: l.indexOf(a) === -1
    };
  }

  function Oe(e) {
    if (e.length < 8) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = e;
    t.length === 8 && (t = "0".concat(t));

    if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    t = t.replace(/\./g, '');

    if (parseInt(t, 10) === 0) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 0,
        r = t.length;

    for (var a = 0; a < r - 1; a++) {
      n += (9 - a) * parseInt(t.charAt(a), 10);
    }

    n %= 11;
    n === 10 && (n = 0);
    return {
      meta: {},
      valid: "".concat(n) === t.charAt(r - 1)
    };
  }

  function we(e) {
    if (!/^\d{11}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = function t(e) {
      var t = [3, 7, 6, 1, 8, 9, 4, 5, 2],
          n = 0;

      for (var r = 0; r < 9; r++) {
        n += t[r] * parseInt(e.charAt(r), 10);
      }

      return 11 - n % 11;
    },
        n = function n(e) {
      var t = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2],
          n = 0;

      for (var r = 0; r < 10; r++) {
        n += t[r] * parseInt(e.charAt(r), 10);
      }

      return 11 - n % 11;
    };

    return {
      meta: {},
      valid: "".concat(t(e)) === e.substr(-2, 1) && "".concat(n(e)) === e.substr(-1)
    };
  }

  function Le(e) {
    if (!/^\d{8}[0-9A-Z]*$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    if (e.length === 8) {
      return {
        meta: {},
        valid: !0
      };
    }

    var t = [3, 2, 7, 6, 5, 4, 3, 2],
        n = 0;

    for (var r = 0; r < 8; r++) {
      n += t[r] * parseInt(e.charAt(r), 10);
    }

    var a = n % 11,
        l = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][a],
        i = "KJIHGFEDCBA".charAt(a);
    return {
      meta: {},
      valid: e.charAt(8) === "".concat(l) || e.charAt(8) === i
    };
  }

  function Ne(e) {
    if (!/^[0-9]{11}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = 0,
        n = e.length,
        r = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];

    for (var a = 0; a < n - 1; a++) {
      t += r[a] * parseInt(e.charAt(a), 10);
    }

    t %= 10;
    t === 0 && (t = 10);
    t = 10 - t;
    return {
      meta: {},
      valid: "".concat(t) === e.charAt(n - 1)
    };
  }

  function xe(e) {
    if (!/^[0-9]{13}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = parseInt(e.charAt(0), 10);

    if (t === 0 || t === 7 || t === 8) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = parseInt(e.substr(1, 2), 10),
        r = parseInt(e.substr(3, 2), 10),
        a = parseInt(e.substr(5, 2), 10),
        l = {
      1: 1900,
      2: 1900,
      3: 1800,
      4: 1800,
      5: 2e3,
      6: 2e3
    };

    if (a > 31 && r > 12) {
      return {
        meta: {},
        valid: !1
      };
    }

    if (t !== 9) {
      n = l[t + ''] + n;

      if (!F(n, r, a)) {
        return {
          meta: {},
          valid: !1
        };
      }
    }

    var i = 0,
        o = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
        s = e.length;

    for (var c = 0; c < s - 1; c++) {
      i += parseInt(e.charAt(c), 10) * o[c];
    }

    i %= 11;
    i === 10 && (i = 1);
    return {
      meta: {},
      valid: "".concat(i) === e.charAt(s - 1)
    };
  }

  function Me(e) {
    return {
      meta: {},
      valid: ne(e, 'RS')
    };
  }

  function Te(e) {
    if (!/^[0-9]{10}$/.test(e) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = e.replace(/[^0-9]/g, ''),
        r = parseInt(n.substr(0, 2), 10) + 1900,
        a = parseInt(n.substr(2, 2), 10),
        l = parseInt(n.substr(4, 2), 10);

    if (!F(r, a, l)) {
      return {
        meta: {},
        valid: !1
      };
    }

    return {
      meta: {},
      valid: t(n)
    };
  }

  function ke(e) {
    return {
      meta: {},
      valid: ne(e, 'SI')
    };
  }

  function Re(e) {
    return {
      meta: {},
      valid: /^\d{5}$/.test(e)
    };
  }

  function Be(e) {
    if (e.length !== 13) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = 0;

    for (var n = 0; n < 12; n++) {
      t += parseInt(e.charAt(n), 10) * (13 - n);
    }

    return {
      meta: {},
      valid: (11 - t % 11) % 10 === parseInt(e.charAt(12), 10)
    };
  }

  function Ze(e) {
    if (e.length !== 11) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = 0;

    for (var n = 0; n < 10; n++) {
      t += parseInt(e.charAt(n), 10);
    }

    return {
      meta: {},
      valid: t % 10 === parseInt(e.charAt(10), 10)
    };
  }

  function Ge(e) {
    var t = e.toUpperCase();

    if (!/^[A-Z][12][0-9]{8}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = t.length,
        r = 'ABCDEFGHJKLMNPQRSTUVXYWZIO',
        a = r.indexOf(t.charAt(0)) + 10,
        l = Math.floor(a / 10) + a % 10 * (n - 1),
        i = 0;

    for (var o = 1; o < n - 1; o++) {
      i += parseInt(t.charAt(o), 10) * (n - 1 - o);
    }

    return {
      meta: {},
      valid: (l + i + parseInt(t.charAt(n - 1), 10)) % 10 === 0
    };
  }

  function Pe(e) {
    if (!/^\d{8}$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var t = [2, 9, 8, 7, 6, 3, 4],
        n = 0;

    for (var r = 0; r < 7; r++) {
      n += parseInt(e.charAt(r), 10) * t[r];
    }

    n %= 10;
    n > 0 && (n = 10 - n);
    return {
      meta: {},
      valid: "".concat(n) === e.charAt(7)
    };
  }

  function De(e) {
    if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(e)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = parseInt(e.substr(0, 2), 10),
        r = new Date.getFullYear() % 100,
        a = parseInt(e.substr(2, 2), 10),
        l = parseInt(e.substr(4, 2), 10);
    n = n >= r ? n + 1900 : n + 2e3;

    if (!F(n, a, l)) {
      return {
        meta: {},
        valid: !1
      };
    }

    return {
      meta: {},
      valid: t(e)
    };
  }

  function Ke() {
    var e = ['AR', 'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CO', 'CZ', 'DK', 'EE', 'ES', 'FI', 'FR', 'HK', 'HR', 'ID', 'IE', 'IL', 'IS', 'KR', 'LT', 'LV', 'ME', 'MK', 'MX', 'MY', 'NL', 'NO', 'PE', 'PL', 'RO', 'RS', 'SE', 'SI', 'SK', 'SM', 'TH', 'TR', 'TW', 'UY', 'ZA'];
    return {
      validate: function validate(t) {
        if (t.value === '') {
          return {
            valid: !0
          };
        }

        var n = Object.assign({}, {
          message: ''
        }, t.options),
            r = t.value.substr(0, 2);
        'function' === typeof n.country ? r = n.country.call(this) : r = n.country;

        if (e.indexOf(r) === -1) {
          return {
            valid: !0
          };
        }

        var a = {
          meta: {},
          valid: !0
        };

        switch (r.toLowerCase()) {
          case 'ar':
            a = te(t.value);
            break;

          case 'ba':
            a = re(t.value);
            break;

          case 'bg':
            a = ae(t.value);
            break;

          case 'br':
            a = le(t.value);
            break;

          case 'ch':
            a = ie(t.value);
            break;

          case 'cl':
            a = oe(t.value);
            break;

          case 'cn':
            a = se(t.value);
            break;

          case 'co':
            a = ce(t.value);
            break;

          case 'cz':
            a = ue(t.value);
            break;

          case 'dk':
            a = de(t.value);
            break;

          case 'ee':
            a = Ve(t.value);
            break;

          case 'es':
            a = fe(t.value);
            break;

          case 'fi':
            a = me(t.value);
            break;

          case 'fr':
            a = ge(t.value);
            break;

          case 'hk':
            a = pe(t.value);
            break;

          case 'hr':
            a = he(t.value);
            break;

          case 'id':
            a = ve(t.value);
            break;

          case 'ie':
            a = Ae(t.value);
            break;

          case 'il':
            a = be(t.value);
            break;

          case 'is':
            a = Ee(t.value);
            break;

          case 'kr':
            a = Ce(t.value);
            break;

          case 'lt':
            a = Ve(t.value);
            break;

          case 'lv':
            a = Se(t.value);
            break;

          case 'me':
            a = He(t.value);
            break;

          case 'mk':
            a = ye(t.value);
            break;

          case 'mx':
            a = Fe(t.value);
            break;

          case 'my':
            a = Ie(t.value);
            break;

          case 'nl':
            a = Oe(t.value);
            break;

          case 'no':
            a = we(t.value);
            break;

          case 'pe':
            a = Le(t.value);
            break;

          case 'pl':
            a = Ne(t.value);
            break;

          case 'ro':
            a = xe(t.value);
            break;

          case 'rs':
            a = Me(t.value);
            break;

          case 'se':
            a = Te(t.value);
            break;

          case 'si':
            a = ke(t.value);
            break;

          case 'sk':
            a = ue(t.value);
            break;

          case 'sm':
            a = Re(t.value);
            break;

          case 'th':
            a = Be(t.value);
            break;

          case 'tr':
            a = Ze(t.value);
            break;

          case 'tw':
            a = Ge(t.value);
            break;

          case 'uy':
            a = Pe(t.value);
            break;

          case 'za':
            a = De(t.value);
            break;
        }

        var l = A(t.l10n ? n.message || t.l10n.id.country : n.message, t.l10n ? t.l10n.id.countries[r.toUpperCase()] : r.toUpperCase());
        return Object.assign({}, {
          message: l
        }, a);
      }
    };
  }

  function Ue() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        switch (!0) {
          case /^\d{15}$/.test(e.value):
            ;

          case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(e.value):
            ;

          case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(e.value):
            var n = e.value.replace(/[^0-9]/g, '');
            return {
              valid: t(n)
            };

          case /^\d{14}$/.test(e.value):
            ;

          case /^\d{16}$/.test(e.value):
            ;

          case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(e.value):
            ;

          case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(e.value):
            return {
              valid: !0
            };

          default:
            return {
              valid: !1
            };
        }
      }
    };
  }

  function Ye() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        if (!/^IMO \d{7}$/i.test(e.value)) {
          return {
            valid: !1
          };
        }

        var t = e.value.replace(/^.*(\d{7})$/, '$1'),
            n = 0;

        for (var r = 6; r >= 1; r--) {
          n += parseInt(t.slice(6 - r, -r), 10) * (r + 1);
        }

        return {
          valid: n % 10 === parseInt(t.charAt(6), 10)
        };
      }
    };
  }

  function Je() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            meta: {
              type: null
            },
            valid: !0
          };
        }

        var t;

        switch (!0) {
          case /^\d{9}[\dX]$/.test(e.value):
            ;

          case e.value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value):
            ;

          case e.value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value):
            t = 'ISBN10';
            break;

          case /^(978|979)\d{9}[\dX]$/.test(e.value):
            ;

          case e.value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value):
            ;

          case e.value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value):
            t = 'ISBN13';
            break;

          default:
            return {
              meta: {
                type: null
              },
              valid: !1
            };
        }

        var n = e.value.replace(/[^0-9X]/gi, '').split(''),
            r = n.length,
            a = 0,
            l,
            i;

        switch (t) {
          case 'ISBN10':
            a = 0;

            for (l = 0; l < r - 1; l++) {
              a += parseInt(n[l], 10) * (10 - l);
            }

            i = 11 - a % 11;
            i === 11 ? i = 0 : i === 10 && (i = 'X');
            return {
              meta: {
                type: t
              },
              valid: "".concat(i) === n[r - 1]
            };

          case 'ISBN13':
            a = 0;

            for (l = 0; l < r - 1; l++) {
              a += l % 2 === 0 ? parseInt(n[l], 10) : parseInt(n[l], 10) * 3;
            }

            i = 10 - a % 10;
            i === 10 && (i = '0');
            return {
              meta: {
                type: t
              },
              valid: "".concat(i) === n[r - 1]
            };
        }
      }
    };
  }

  function We() {
    var e = "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW";
    return {
      validate: function validate(t) {
        if (t.value === '') {
          return {
            valid: !0
          };
        }

        var n = t.value.toUpperCase(),
            r = new RegExp('^(' + e + ')[0-9A-Z]{10}$');

        if (!r.test(t.value)) {
          return {
            valid: !1
          };
        }

        var a = n.length,
            l = '',
            i;

        for (i = 0; i < a - 1; i++) {
          var o = n.charCodeAt(i);
          l += o > 57 ? (o - 55).toString() : n.charAt(i);
        }

        var s = '',
            c = l.length,
            u = c % 2 !== 0 ? 0 : 1;

        for (i = 0; i < c; i++) {
          s += parseInt(l[i], 10) * (i % 2 === u ? 2 : 1) + '';
        }

        var d = 0;

        for (i = 0; i < s.length; i++) {
          d += parseInt(s.charAt(i), 10);
        }

        d = (10 - d % 10) % 10;
        return {
          valid: "".concat(d) === n.charAt(a - 1)
        };
      }
    };
  }

  function ze() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            meta: null,
            valid: !0
          };
        }

        var t;

        switch (!0) {
          case /^M\d{9}$/.test(e.value):
            ;

          case /^M-\d{4}-\d{4}-\d{1}$/.test(e.value):
            ;

          case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):
            t = 'ISMN10';
            break;

          case /^9790\d{9}$/.test(e.value):
            ;

          case /^979-0-\d{4}-\d{4}-\d{1}$/.test(e.value):
            ;

          case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):
            t = 'ISMN13';
            break;

          default:
            return {
              meta: null,
              valid: !1
            };
        }

        var n = e.value;
        'ISMN10' === t && (n = "9790".concat(n.substr(1)));
        n = n.replace(/[^0-9]/gi, '');
        var r = 0,
            a = n.length,
            l = [1, 3];

        for (var i = 0; i < a - 1; i++) {
          r += parseInt(n.charAt(i), 10) * l[i % 2];
        }

        r = (10 - r % 10) % 10;
        return {
          meta: {
            type: t
          },
          valid: "".concat(r) === n.charAt(a - 1)
        };
      }
    };
  }

  function _e() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        if (!/^\d{4}\-\d{3}[\dX]$/.test(e.value)) {
          return {
            valid: !1
          };
        }

        var t = e.value.replace(/[^0-9X]/gi, '').split(''),
            n = t.length,
            r = 0;
        t[7] === 'X' && (t[7] = '10');

        for (var a = 0; a < n; a++) {
          r += parseInt(t[a], 10) * (8 - a);
        }

        return {
          valid: r % 11 === 0
        };
      }
    };
  }

  function Xe() {
    return {
      validate: function validate(e) {
        return {
          valid: e.value === '' || /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(e.value) || /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(e.value)
        };
      }
    };
  }

  function Qe() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var n = e.value;

        switch (!0) {
          case /^[0-9A-F]{15}$/i.test(n):
            ;

          case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(n):
            ;

          case /^\d{19}$/.test(n):
            ;

          case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(n):
            var i = n.charAt(n.length - 1).toUpperCase();
            n = n.replace(/[- ]/g, '');

            if (n.match(/^\d*$/i)) {
              return {
                valid: t(n)
              };
            }

            ;
            n = n.slice(0, -1);
            var l = '';
            var a;

            for (a = 1; a <= 13; a += 2) {
              l += (parseInt(n.charAt(a), 16) * 2).toString(16);
            }

            var r = 0;

            for (a = 0; a < l.length; a++) {
              r += parseInt(l.charAt(a), 16);
            }

            return {
              valid: r % 10 === 0 ? i === '0' : i === ((Math.floor((r + 10) / 10) * 10 - r) * 2).toString(16).toUpperCase()
            };

          case /^[0-9A-F]{14}$/i.test(n):
            ;

          case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(n):
            ;

          case /^\d{18}$/.test(n):
            ;

          case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(n):
            return {
              valid: !0
            };

          default:
            return {
              valid: !1
            };
        }
      }
    };
  }

  function qe() {
    var e = ['AE', 'BG', 'BR', 'CN', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IN', 'MA', 'NL', 'PK', 'RO', 'RU', 'SK', 'TH', 'US', 'VE'];
    return {
      validate: function validate(t) {
        if (t.value === '') {
          return {
            valid: !0
          };
        }

        var n = Object.assign({}, {
          message: ''
        }, t.options),
            r = t.value.trim(),
            a = r.substr(0, 2);
        'function' === typeof n.country ? a = n.country.call(this) : a = n.country;

        if (!a || e.indexOf(a.toUpperCase()) === -1) {
          return {
            valid: !0
          };
        }

        var l = !0;

        switch (a.toUpperCase()) {
          case 'AE':
            l = /^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(r);
            break;

          case 'BG':
            l = /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(r.replace(/\+|\s|-|\/|\(|\)/gi, ''));
            break;

          case 'BR':
            l = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(r);
            break;

          case 'CN':
            l = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(r);
            break;

          case 'CZ':
            l = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r);
            break;

          case 'DE':
            l = /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(r);
            break;

          case 'DK':
            l = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(r);
            break;

          case 'ES':
            l = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(r);
            break;

          case 'FR':
            l = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(r);
            break;

          case 'GB':
            l = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(r);
            break;

          case 'IN':
            l = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(r);
            break;

          case 'MA':
            l = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(r);
            break;

          case 'NL':
            l = /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(r);
            break;

          case 'PK':
            l = /^0?3[0-9]{2}[0-9]{7}$/.test(r);
            break;

          case 'RO':
            l = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(r);
            break;

          case 'RU':
            l = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(r);
            break;

          case 'SK':
            l = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r);
            break;

          case 'TH':
            l = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(r);
            break;

          case 'VE':
            l = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(r);
            break;

          case 'US':
            ;

          default:
            l = /^(?:(1\-?)|(\+1 ?))?\(?\d{3}\)?[\-\.\s]?\d{3}[\-\.\s]?\d{4}$/.test(r);
            break;
        }

        return {
          message: A(t.l10n ? n.message || t.l10n.phone.country : n.message, t.l10n ? t.l10n.phone.countries[a] : a),
          valid: l
        };
      }
    };
  }

  function $e() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        if (!/^\d{9}$/.test(e.value)) {
          return {
            valid: !1
          };
        }

        var t = 0;

        for (var n = 0; n < e.value.length; n += 3) {
          t += parseInt(e.value.charAt(n), 10) * 3 + parseInt(e.value.charAt(n + 1), 10) * 7 + parseInt(e.value.charAt(n + 2), 10);
        }

        return {
          valid: t !== 0 && t % 10 === 0
        };
      }
    };
  }

  function je() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = e.value.toUpperCase();

        if (!/^[0-9A-Z]{7}$/.test(t)) {
          return {
            valid: !1
          };
        }

        var n = [1, 3, 1, 7, 3, 9, 1],
            r = t.length,
            a = 0;

        for (var l = 0; l < r - 1; l++) {
          a += n[l] * parseInt(t.charAt(l), 36);
        }

        a = (10 - a % 10) % 10;
        return {
          valid: "".concat(a) === t.charAt(r - 1)
        };
      }
    };
  }

  function et() {
    return {
      validate: function validate(e) {
        return {
          valid: e.value === '' || /^\d{9}$/.test(e.value) && t(e.value)
        };
      }
    };
  }

  function tt() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = e.value.length,
            n = 0,
            r;

        for (var a = 0; a < t; a++) {
          r = parseInt(e.value.charAt(a), 10), a % 2 === 0 && (r *= 2, r > 9 && (r -= 9)), n += r;
        }

        return {
          valid: n % 10 === 0
        };
      }
    };
  }

  function nt() {
    var e = function e(_e6, t) {
      var n = Math.pow(10, t),
          r = _e6 * n,
          a;

      switch (!0) {
        case r === 0:
          a = 0;
          break;

        case r > 0:
          a = 1;
          break;

        case r < 0:
          a = -1;
          break;
      }

      var l = r % 1 === .5 * a;
      return l ? (Math.floor(r) + (a > 0 ? 1 : 0)) / n : Math.round(r) / n;
    },
        t = function t(_t3, n) {
      if (n === 0) {
        return 1;
      }

      var r = "".concat(_t3).split('.'),
          a = "".concat(n).split('.'),
          l = (r.length === 1 ? 0 : r[1].length) + (a.length === 1 ? 0 : a[1].length);
      return e(_t3 - n * Math.floor(_t3 / n), l);
    };

    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var n = parseFloat(e.value);

        if (isNaN(n) || !isFinite(n)) {
          return {
            valid: !1
          };
        }

        var r = Object.assign({}, {
          baseValue: 0,
          message: '',
          step: 1
        }, e.options),
            a = t(n - r.baseValue, r.step);
        return {
          message: A(e.l10n ? r.message || e.l10n.step["default"] : r.message, "".concat(r.step)),
          valid: a === 0 || a === r.step
        };
      }
    };
  }

  function rt() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        var t = Object.assign({}, {
          message: ''
        }, e.options),
            n = {
          3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
          4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
          5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
          all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
        },
            r = t.version ? "".concat(t.version) : 'all';
        return {
          message: t.version ? A(e.l10n ? t.message || e.l10n.uuid.version : t.message, t.version) : e.l10n ? e.l10n.uuid["default"] : t.message,
          valid: null === n[r] ? !0 : n[r].test(e.value)
        };
      }
    };
  }

  function at(e) {
    var t = e.replace('-', '');
    /^AR[0-9]{11}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{11}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2],
        r = 0;

    for (var a = 0; a < 10; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    r = 11 - r % 11;
    r === 11 && (r = 0);
    return {
      meta: {},
      valid: "".concat(r) === t.substr(10)
    };
  }

  function lt(e) {
    var t = e;
    /^ATU[0-9]{8}$/.test(t) && (t = t.substr(2));

    if (!/^U[0-9]{8}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    t = t.substr(1);
    var n = [1, 2, 1, 2, 1, 2, 1],
        r = 0,
        a = 0;

    for (var l = 0; l < 7; l++) {
      a = parseInt(t.charAt(l), 10) * n[l], a > 9 && (a = Math.floor(a / 10) + a % 10), r += a;
    }

    r = 10 - (r + 4) % 10;
    r === 10 && (r = 0);
    return {
      meta: {},
      valid: "".concat(r) === t.substr(7, 1)
    };
  }

  function it(e) {
    var t = e;
    /^BE[0]?[0-9]{9}$/.test(t) && (t = t.substr(2));

    if (!/^[0]?[0-9]{9}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    t.length === 9 && (t = "0".concat(t));

    if (t.substr(1, 1) === '0') {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10);
    return {
      meta: {},
      valid: n % 97 === 0
    };
  }

  function ot(e) {
    var t = e;
    /^BG[0-9]{9,10}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{9,10}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 0,
        r = 0;

    if (t.length === 9) {
      for (r = 0; r < 8; r++) {
        n += parseInt(t.charAt(r), 10) * (r + 1);
      }

      n %= 11;

      if (n === 10) {
        n = 0;

        for (r = 0; r < 8; r++) {
          n += parseInt(t.charAt(r), 10) * (r + 3);
        }
      }

      n %= 10;
      return {
        meta: {},
        valid: "".concat(n) === t.substr(8)
      };
    } else {
      var a = function a(e) {
        var t = parseInt(e.substr(0, 2), 10) + 1900,
            n = parseInt(e.substr(2, 2), 10),
            r = parseInt(e.substr(4, 2), 10);
        n > 40 ? (t += 100, n -= 40) : n > 20 && (t -= 100, n -= 20);

        if (!F(t, n, r)) {
          return !1;
        }

        var a = [2, 4, 8, 5, 10, 9, 7, 3, 6],
            l = 0;

        for (var i = 0; i < 9; i++) {
          l += parseInt(e.charAt(i), 10) * a[i];
        }

        l = l % 11 % 10;
        return "".concat(l) === e.substr(9, 1);
      },
          l = function l(e) {
        var t = [21, 19, 17, 13, 11, 9, 7, 3, 1],
            n = 0;

        for (var r = 0; r < 9; r++) {
          n += parseInt(e.charAt(r), 10) * t[r];
        }

        n %= 10;
        return "".concat(n) === e.substr(9, 1);
      },
          i = function i(e) {
        var t = [4, 3, 2, 7, 6, 5, 4, 3, 2],
            n = 0;

        for (var r = 0; r < 9; r++) {
          n += parseInt(e.charAt(r), 10) * t[r];
        }

        n = 11 - n % 11;

        if (n === 10) {
          return !1;
        }

        n === 11 && (n = 0);
        return "".concat(n) === e.substr(9, 1);
      };

      return {
        meta: {},
        valid: a(t) || l(t) || i(t)
      };
    }
  }

  function st(e) {
    if (e === '') {
      return {
        meta: {},
        valid: !0
      };
    }

    var t = e.replace(/[^\d]+/g, '');

    if (t === '' || t.length !== 14) {
      return {
        meta: {},
        valid: !1
      };
    }

    if (t === '00000000000000' || t === '11111111111111' || t === '22222222222222' || t === '33333333333333' || t === '44444444444444' || t === '55555555555555' || t === '66666666666666' || t === '77777777777777' || t === '88888888888888' || t === '99999999999999') {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = t.length - 2,
        r = t.substring(0, n),
        a = t.substring(n),
        l = 0,
        i = n - 7,
        o;

    for (o = n; o >= 1; o--) {
      l += parseInt(r.charAt(n - o), 10) * i--, i < 2 && (i = 9);
    }

    var s = l % 11 < 2 ? 0 : 11 - l % 11;

    if (s !== parseInt(a.charAt(0), 10)) {
      return {
        meta: {},
        valid: !1
      };
    }

    n += 1;
    r = t.substring(0, n);
    l = 0;
    i = n - 7;

    for (o = n; o >= 1; o--) {
      l += parseInt(r.charAt(n - o), 10) * i--, i < 2 && (i = 9);
    }

    s = l % 11 < 2 ? 0 : 11 - l % 11;
    return {
      meta: {},
      valid: s === parseInt(a.charAt(1), 10)
    };
  }

  function ct(e) {
    var t = e;
    /^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(t) && (t = t.substr(2));

    if (!/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    t = t.substr(1);
    var n = [5, 4, 3, 2, 7, 6, 5, 4],
        r = 0;

    for (var a = 0; a < 8; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    r = 11 - r % 11;

    if (r === 10) {
      return {
        meta: {},
        valid: !1
      };
    }

    r === 11 && (r = 0);
    return {
      meta: {},
      valid: "".concat(r) === t.substr(8, 1)
    };
  }

  function ut(e) {
    var t = e;
    /^CY[0-5|9][0-9]{7}[A-Z]$/.test(t) && (t = t.substr(2));

    if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    if (t.substr(0, 2) === '12') {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 0,
        r = {
      0: 1,
      1: 0,
      2: 5,
      3: 7,
      4: 9,
      5: 13,
      6: 15,
      7: 17,
      8: 19,
      9: 21
    };

    for (var a = 0; a < 8; a++) {
      var l = parseInt(t.charAt(a), 10);
      a % 2 === 0 && (l = r["".concat(l)]);
      n += l;
    }

    return {
      meta: {},
      valid: "".concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]) === t.substr(8, 1)
    };
  }

  function dt(e) {
    var t = e;
    /^CZ[0-9]{8,10}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{8,10}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 0,
        r = 0;

    if (t.length === 8) {
      if ("".concat(t.charAt(0)) === '9') {
        return {
          meta: {},
          valid: !1
        };
      }

      n = 0;

      for (r = 0; r < 7; r++) {
        n += parseInt(t.charAt(r), 10) * (8 - r);
      }

      n = 11 - n % 11;
      n === 10 && (n = 0);
      n === 11 && (n = 1);
      return {
        meta: {},
        valid: "".concat(n) === t.substr(7, 1)
      };
    } else if (t.length === 9 && "".concat(t.charAt(0)) === '6') {
      n = 0;

      for (r = 0; r < 7; r++) {
        n += parseInt(t.charAt(r + 1), 10) * (8 - r);
      }

      n = 11 - n % 11;
      n === 10 && (n = 0);
      n === 11 && (n = 1);
      n = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][n - 1];
      return {
        meta: {},
        valid: "".concat(n) === t.substr(8, 1)
      };
    } else if (t.length === 9 || t.length === 10) {
      var a = 1900 + parseInt(t.substr(0, 2), 10),
          l = parseInt(t.substr(2, 2), 10) % 50 % 20,
          i = parseInt(t.substr(4, 2), 10);

      if (t.length === 9) {
        a >= 1980 && (a -= 100);

        if (a > 1953) {
          return {
            meta: {},
            valid: !1
          };
        }
      } else a < 1954 && (a += 100);

      if (!F(a, l, i)) {
        return {
          meta: {},
          valid: !1
        };
      }

      if (t.length === 10) {
        var o = parseInt(t.substr(0, 9), 10) % 11;
        a < 1985 && (o %= 10);
        return {
          meta: {},
          valid: "".concat(o) === t.substr(9, 1)
        };
      }

      return {
        meta: {},
        valid: !0
      };
    }

    return {
      meta: {},
      valid: !1
    };
  }

  function ft(e) {
    var t = e;
    /^DE[0-9]{9}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{9}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    return {
      meta: {},
      valid: n(t)
    };
  }

  function mt(e) {
    var t = e;
    /^DK[0-9]{8}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{8}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 0,
        r = [2, 7, 6, 5, 4, 3, 2, 1];

    for (var a = 0; a < 8; a++) {
      n += parseInt(t.charAt(a), 10) * r[a];
    }

    return {
      meta: {},
      valid: n % 11 === 0
    };
  }

  function gt(e) {
    var t = e;
    /^EE[0-9]{9}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{9}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 0,
        r = [3, 7, 1, 3, 7, 1, 3, 7, 1];

    for (var a = 0; a < 9; a++) {
      n += parseInt(t.charAt(a), 10) * r[a];
    }

    return {
      meta: {},
      valid: n % 10 === 0
    };
  }

  function pt(e) {
    var t = e;
    /^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2));

    if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = function n(e) {
      var t = parseInt(e.substr(0, 8), 10);
      return "".concat('TRWAGMYFPDXBNJZSQVHLCKE'[t % 23]) === e.substr(8, 1);
    },
        r = function r(e) {
      var t = ['XYZ'.indexOf(e.charAt(0)), e.substr(1)].join(''),
          n = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(t, 10) % 23];
      return "".concat(n) === e.substr(8, 1);
    },
        a = function a(e) {
      var t = e.charAt(0),
          n;

      if ('KLM'.indexOf(t) !== -1) {
        n = parseInt(e.substr(1, 8), 10);
        n = 'TRWAGMYFPDXBNJZSQVHLCKE'[n % 23];
        return "".concat(n) === e.substr(8, 1);
      } else if ('ABCDEFGHJNPQRSUVW'.indexOf(t) !== -1) {
        var r = [2, 1, 2, 1, 2, 1, 2],
            a = 0,
            l = 0;

        for (var i = 0; i < 7; i++) {
          l = parseInt(e.charAt(i + 1), 10) * r[i], l > 9 && (l = Math.floor(l / 10) + l % 10), a += l;
        }

        a = 10 - a % 10;
        a === 10 && (a = 0);
        return "".concat(a) === e.substr(8, 1) || 'JABCDEFGHI'[a] === e.substr(8, 1);
      }

      return !1;
    },
        l = t.charAt(0);

    if (/^[0-9]$/.test(l)) {
      return {
        meta: {
          type: 'DNI'
        },
        valid: n(t)
      };
    } else if (/^[XYZ]$/.test(l)) {
      return {
        meta: {
          type: 'NIE'
        },
        valid: r(t)
      };
    } else {
      return {
        meta: {
          type: 'CIF'
        },
        valid: a(t)
      };
    }
  }

  function ht(e) {
    var t = e;
    /^FI[0-9]{8}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{8}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = [7, 9, 10, 5, 8, 4, 2, 1],
        r = 0;

    for (var a = 0; a < 8; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    return {
      meta: {},
      valid: r % 11 === 0
    };
  }

  function vt(e) {
    var n = e;
    /^FR[0-9A-Z]{2}[0-9]{9}$/.test(n) && (n = n.substr(2));

    if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(n)) {
      return {
        meta: {},
        valid: !1
      };
    }

    if (!t(n.substr(2))) {
      return {
        meta: {},
        valid: !1
      };
    }

    if (/^[0-9]{2}$/.test(n.substr(0, 2))) {
      return {
        meta: {},
        valid: n.substr(0, 2) === "".concat(parseInt(n.substr(2) + '12', 10) % 97)
      };
    } else {
      var r = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
          a;
      /^[0-9]$/.test(n.charAt(0)) ? a = r.indexOf(n.charAt(0)) * 24 + r.indexOf(n.charAt(1)) - 10 : a = r.indexOf(n.charAt(0)) * 34 + r.indexOf(n.charAt(1)) - 100;
      return {
        meta: {},
        valid: (parseInt(n.substr(2), 10) + 1 + Math.floor(a / 11)) % 11 === a % 11
      };
    }
  }

  function At(e) {
    var t = e;
    (/^GB[0-9]{9}$/.test(t) || /^GB[0-9]{12}$/.test(t) || /^GBGD[0-9]{3}$/.test(t) || /^GBHA[0-9]{3}$/.test(t) || /^GB(GD|HA)8888[0-9]{5}$/.test(t)) && (t = t.substr(2));

    if (!/^[0-9]{9}$/.test(t) && !/^[0-9]{12}$/.test(t) && !/^GD[0-9]{3}$/.test(t) && !/^HA[0-9]{3}$/.test(t) && !/^(GD|HA)8888[0-9]{5}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = t.length;

    if (n === 5) {
      var r = t.substr(0, 2),
          a = parseInt(t.substr(2), 10);
      return {
        meta: {},
        valid: 'GD' === r && a < 500 || 'HA' === r && a >= 500
      };
    } else if (n === 11 && ('GD8888' === t.substr(0, 6) || 'HA8888' === t.substr(0, 6))) {
      if ('GD' === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) >= 500 || 'HA' === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) < 500) {
        return {
          meta: {},
          valid: !1
        };
      }

      return {
        meta: {},
        valid: parseInt(t.substr(6, 3), 10) % 97 === parseInt(t.substr(9, 2), 10)
      };
    } else if (n === 9 || n === 12) {
      var l = [8, 7, 6, 5, 4, 3, 2, 10, 1],
          i = 0;

      for (var o = 0; o < 9; o++) {
        i += parseInt(t.charAt(o), 10) * l[o];
      }

      i %= 97;
      var s = parseInt(t.substr(0, 3), 10) >= 100 ? i === 0 || i === 42 || i === 55 : i === 0;
      return {
        meta: {},
        valid: s
      };
    }

    return {
      meta: {},
      valid: !0
    };
  }

  function bt(e) {
    var t = e;
    /^(GR|EL)[0-9]{9}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{9}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    t.length === 8 && (t = "0".concat(t));
    var n = [256, 128, 64, 32, 16, 8, 4, 2],
        r = 0;

    for (var a = 0; a < 8; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    r = r % 11 % 10;
    return {
      meta: {},
      valid: "".concat(r) === t.substr(8, 1)
    };
  }

  function Et(e) {
    var t = e;
    /^HR[0-9]{11}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{11}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    return {
      meta: {},
      valid: n(t)
    };
  }

  function Ct(e) {
    var t = e;
    /^HU[0-9]{8}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{8}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = [9, 7, 3, 1, 9, 7, 3, 1],
        r = 0;

    for (var a = 0; a < 8; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    return {
      meta: {},
      valid: r % 10 === 0
    };
  }

  function Vt(e) {
    var t = e;
    /^IE[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9][0-9A-Z\*\+][0-9]{5}[A-Z]{1,2}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = function n(e) {
      var t = e;

      while (t.length < 7) {
        t = "0".concat(t);
      }

      var n = 'WABCDEFGHIJKLMNOPQRSTUV',
          r = 0;

      for (var a = 0; a < 7; a++) {
        r += parseInt(t.charAt(a), 10) * (8 - a);
      }

      r += 9 * n.indexOf(t.substr(7));
      return n[r % 23];
    };

    if (/^[0-9]+$/.test(t.substr(0, 7))) {
      return {
        meta: {},
        valid: t.charAt(7) === n("".concat(t.substr(0, 7)).concat(t.substr(8)))
      };
    } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(t.charAt(1)) !== -1) {
      return {
        meta: {},
        valid: t.charAt(7) === n("".concat(t.substr(2, 5)).concat(t.substr(0, 1)))
      };
    }

    return {
      meta: {},
      valid: !0
    };
  }

  function St(e) {
    var t = e;
    /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2));
    return {
      meta: {},
      valid: /^[0-9]{5,6}$/.test(t)
    };
  }

  function Ht(e) {
    var n = e;
    /^IT[0-9]{11}$/.test(n) && (n = n.substr(2));

    if (!/^[0-9]{11}$/.test(n)) {
      return {
        meta: {},
        valid: !1
      };
    }

    if (parseInt(n.substr(0, 7), 10) === 0) {
      return {
        meta: {},
        valid: !1
      };
    }

    var r = parseInt(n.substr(7, 3), 10);

    if (r < 1 || r > 201 && r !== 999 && r !== 888) {
      return {
        meta: {},
        valid: !1
      };
    }

    return {
      meta: {},
      valid: t(n)
    };
  }

  function yt(e) {
    var t = e;
    /^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(t) && (t = t.substr(2));

    if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = t.length,
        r = 0,
        a;

    for (a = 0; a < n - 1; a++) {
      r += parseInt(t.charAt(a), 10) * (1 + a % 9);
    }

    var l = r % 11;

    if (l === 10) {
      r = 0;

      for (a = 0; a < n - 1; a++) {
        r += parseInt(t.charAt(a), 10) * (1 + (a + 2) % 9);
      }
    }

    l = l % 11 % 10;
    return {
      meta: {},
      valid: "".concat(l) === t.charAt(n - 1)
    };
  }

  function Ft(e) {
    var t = e;
    /^LU[0-9]{8}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{8}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    return {
      meta: {},
      valid: "".concat(parseInt(t.substr(0, 6), 10) % 89) === t.substr(6, 2)
    };
  }

  function It(e) {
    var t = e;
    /^LV[0-9]{11}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{11}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = parseInt(t.charAt(0), 10),
        r = t.length,
        a = 0,
        l = [],
        i;

    if (n > 3) {
      a = 0;
      l = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];

      for (i = 0; i < r; i++) {
        a += parseInt(t.charAt(i), 10) * l[i];
      }

      a %= 11;
      return {
        meta: {},
        valid: a === 3
      };
    } else {
      var o = parseInt(t.substr(0, 2), 10),
          s = parseInt(t.substr(2, 2), 10),
          c = parseInt(t.substr(4, 2), 10);
      c = c + 1800 + parseInt(t.charAt(6), 10) * 100;

      if (!F(c, s, o)) {
        return {
          meta: {},
          valid: !1
        };
      }

      a = 0;
      l = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];

      for (i = 0; i < r - 1; i++) {
        a += parseInt(t.charAt(i), 10) * l[i];
      }

      a = (a + 1) % 11 % 10;
      return {
        meta: {},
        valid: "".concat(a) === t.charAt(r - 1)
      };
    }
  }

  function Ot(e) {
    var t = e;
    /^MT[0-9]{8}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{8}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = [3, 4, 6, 7, 8, 9, 10, 1],
        r = 0;

    for (var a = 0; a < 8; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    return {
      meta: {},
      valid: r % 37 === 0
    };
  }

  function wt(e) {
    var t = e;
    /^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{9}B[0-9]{2}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = [9, 8, 7, 6, 5, 4, 3, 2],
        r = 0;

    for (var a = 0; a < 8; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    r %= 11;
    r > 9 && (r = 0);
    return {
      meta: {},
      valid: "".concat(r) === t.substr(8, 1)
    };
  }

  function Lt(e) {
    var t = e;
    /^NO[0-9]{9}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{9}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = [3, 2, 7, 6, 5, 4, 3, 2],
        r = 0;

    for (var a = 0; a < 8; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    r = 11 - r % 11;
    r === 11 && (r = 0);
    return {
      meta: {},
      valid: "".concat(r) === t.substr(8, 1)
    };
  }

  function Nt(e) {
    var t = e;
    /^PL[0-9]{10}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{10}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1],
        r = 0;

    for (var a = 0; a < 10; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    return {
      meta: {},
      valid: r % 11 === 0
    };
  }

  function xt(e) {
    var t = e;
    /^PT[0-9]{9}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{9}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = [9, 8, 7, 6, 5, 4, 3, 2],
        r = 0;

    for (var a = 0; a < 8; a++) {
      r += parseInt(t.charAt(a), 10) * n[a];
    }

    r = 11 - r % 11;
    r > 9 && (r = 0);
    return {
      meta: {},
      valid: "".concat(r) === t.substr(8, 1)
    };
  }

  function Mt(e) {
    var t = e;
    /^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2));

    if (!/^[1-9][0-9]{1,9}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = t.length,
        r = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - n),
        a = 0;

    for (var l = 0; l < n - 1; l++) {
      a += parseInt(t.charAt(l), 10) * r[l];
    }

    a = 10 * a % 11 % 10;
    return {
      meta: {},
      valid: "".concat(a) === t.substr(n - 1, 1)
    };
  }

  function Tt(e) {
    var t = e;
    /^RS[0-9]{9}$/.test(t) && (t = t.substr(2));

    if (!/^[0-9]{9}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 10,
        r = 0;

    for (var a = 0; a < 8; a++) {
      r = (parseInt(t.charAt(a), 10) + n) % 10, r === 0 && (r = 10), n = 2 * r % 11;
    }

    return {
      meta: {},
      valid: (n + parseInt(t.substr(8, 1), 10)) % 10 === 1
    };
  }

  function kt(e) {
    var t = e;
    /^RU([0-9]{10}|[0-9]{12})$/.test(t) && (t = t.substr(2));

    if (!/^([0-9]{10}|[0-9]{12})$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = 0;

    if (t.length === 10) {
      var r = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
          a = 0;

      for (n = 0; n < 10; n++) {
        a += parseInt(t.charAt(n), 10) * r[n];
      }

      a %= 11;
      a > 9 && (a %= 10);
      return {
        meta: {},
        valid: "".concat(a) === t.substr(9, 1)
      };
    } else if (t.length === 12) {
      var l = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
          i = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
          o = 0,
          s = 0;

      for (n = 0; n < 11; n++) {
        o += parseInt(t.charAt(n), 10) * l[n], s += parseInt(t.charAt(n), 10) * i[n];
      }

      o %= 11;
      o > 9 && (o %= 10);
      s %= 11;
      s > 9 && (s %= 10);
      return {
        meta: {},
        valid: "".concat(o) === t.substr(10, 1) && "".concat(s) === t.substr(11, 1)
      };
    }

    return {
      meta: {},
      valid: !0
    };
  }

  function Rt(e) {
    var n = e;
    /^SE[0-9]{10}01$/.test(n) && (n = n.substr(2));

    if (!/^[0-9]{10}01$/.test(n)) {
      return {
        meta: {},
        valid: !1
      };
    }

    n = n.substr(0, 10);
    return {
      meta: {},
      valid: t(n)
    };
  }

  function Bt(e) {
    var t = e.match(/^(SI)?([1-9][0-9]{7})$/);

    if (!t) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = t[1] ? e.substr(2) : e,
        r = [8, 7, 6, 5, 4, 3, 2],
        a = 0;

    for (var l = 0; l < 7; l++) {
      a += parseInt(n.charAt(l), 10) * r[l];
    }

    a = 11 - a % 11;
    a === 10 && (a = 0);
    return {
      meta: {},
      valid: "".concat(a) === n.substr(7, 1)
    };
  }

  function Zt(e) {
    var t = e;
    /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2));

    if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    return {
      meta: {},
      valid: parseInt(t, 10) % 11 === 0
    };
  }

  function Gt(e) {
    var t = e;
    /^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2));

    if (!/^[VEJPG][0-9]{9}$/.test(t)) {
      return {
        meta: {},
        valid: !1
      };
    }

    var n = {
      E: 8,
      G: 20,
      J: 12,
      P: 16,
      V: 4
    },
        r = [3, 2, 7, 6, 5, 4, 3, 2],
        a = n[t.charAt(0)];

    for (var l = 0; l < 8; l++) {
      a += parseInt(t.charAt(l + 1), 10) * r[l];
    }

    a = 11 - a % 11;
    (a === 11 || a === 10) && (a = 0);
    return {
      meta: {},
      valid: "".concat(a) === t.substr(9, 1)
    };
  }

  function Pt(e) {
    var t = e;
    /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2));
    return {
      meta: {},
      valid: /^4[0-9]{9}$/.test(t)
    };
  }

  function Dt() {
    var e = ['AR', 'AT', 'BE', 'BG', 'BR', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'RS', 'SE', 'SK', 'SI', 'VE', 'ZA'];
    return {
      validate: function validate(t) {
        var n = t.value;

        if (n === '') {
          return {
            valid: !0
          };
        }

        var r = Object.assign({}, {
          message: ''
        }, t.options),
            a = n.substr(0, 2);
        'function' === typeof r.country ? a = r.country.call(this) : a = r.country;

        if (e.indexOf(a) === -1) {
          return {
            valid: !0
          };
        }

        var l = {
          meta: {},
          valid: !0
        };

        switch (a.toLowerCase()) {
          case 'ar':
            l = at(n);
            break;

          case 'at':
            l = lt(n);
            break;

          case 'be':
            l = it(n);
            break;

          case 'bg':
            l = ot(n);
            break;

          case 'br':
            l = st(n);
            break;

          case 'ch':
            l = ct(n);
            break;

          case 'cy':
            l = ut(n);
            break;

          case 'cz':
            l = dt(n);
            break;

          case 'de':
            l = ft(n);
            break;

          case 'dk':
            l = mt(n);
            break;

          case 'ee':
            l = gt(n);
            break;

          case 'el':
            l = bt(n);
            break;

          case 'es':
            l = pt(n);
            break;

          case 'fi':
            l = ht(n);
            break;

          case 'fr':
            l = vt(n);
            break;

          case 'gb':
            l = At(n);
            break;

          case 'gr':
            l = bt(n);
            break;

          case 'hr':
            l = Et(n);
            break;

          case 'hu':
            l = Ct(n);
            break;

          case 'ie':
            l = Vt(n);
            break;

          case 'is':
            l = St(n);
            break;

          case 'it':
            l = Ht(n);
            break;

          case 'lt':
            l = yt(n);
            break;

          case 'lu':
            l = Ft(n);
            break;

          case 'lv':
            l = It(n);
            break;

          case 'mt':
            l = Ot(n);
            break;

          case 'nl':
            l = wt(n);
            break;

          case 'no':
            l = Lt(n);
            break;

          case 'pl':
            l = Nt(n);
            break;

          case 'pt':
            l = xt(n);
            break;

          case 'ro':
            l = Mt(n);
            break;

          case 'rs':
            l = Tt(n);
            break;

          case 'ru':
            l = kt(n);
            break;

          case 'se':
            l = Rt(n);
            break;

          case 'si':
            l = Bt(n);
            break;

          case 'sk':
            l = Zt(n);
            break;

          case 've':
            l = Gt(n);
            break;

          case 'za':
            l = Pt(n);
            break;
        }

        var i = A(t.l10n ? r.message || t.l10n.vat.country : r.message, t.l10n ? t.l10n.vat.countries[a.toUpperCase()] : a.toUpperCase());
        return Object.assign({}, {
          message: i
        }, l);
      }
    };
  }

  function Kt() {
    return {
      validate: function validate(e) {
        if (e.value === '') {
          return {
            valid: !0
          };
        }

        if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(e.value)) {
          return {
            valid: !1
          };
        }

        var t = e.value.toUpperCase(),
            n = {
          A: 1,
          B: 2,
          C: 3,
          D: 4,
          E: 5,
          F: 6,
          G: 7,
          H: 8,
          J: 1,
          K: 2,
          L: 3,
          M: 4,
          N: 5,
          P: 7,
          R: 9,
          S: 2,
          T: 3,
          U: 4,
          V: 5,
          W: 6,
          X: 7,
          Y: 8,
          Z: 9,
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9
        },
            r = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
            a = t.length,
            l = 0;

        for (var i = 0; i < a; i++) {
          l += n["".concat(t.charAt(i))] * r[i];
        }

        var o = "".concat(l % 11);
        o === '10' && (o = 'X');
        return {
          valid: o === t.charAt(8)
        };
      }
    };
  }

  function Ut() {
    var e = ['AT', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IE', 'IN', 'IT', 'MA', 'NL', 'PL', 'PT', 'RO', 'RU', 'SE', 'SG', 'SK', 'US'],
        t = function t(e) {
      var t = '[ABCDEFGHIJKLMNOPRSTUWYZ]',
          n = '[ABCDEFGHKLMNOPQRSTUVWXY]',
          r = '[ABCDEFGHJKPMNRSTUVWXY]',
          a = '[ABEHMNPRVWXY]',
          l = '[ABDEFGHJLNPQRSTUWXYZ]',
          i = [new RegExp("^(".concat(t, "{1}").concat(n, "?[0-9]{1,2})(\\s*)([0-9]{1}").concat(l, "{2})$"), 'i'), new RegExp("^(".concat(t, "{1}[0-9]{1}").concat(r, "{1})(\\s*)([0-9]{1}").concat(l, "{2})$"), 'i'), new RegExp("^(".concat(t, "{1}").concat(n, "{1}?[0-9]{1}").concat(a, "{1})(\\s*)([0-9]{1}").concat(l, "{2})$"), 'i'), new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$', 'i'), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i];

      for (var o = 0, s = i; o < s.length; o++) {
        var c = s[o];

        if (c.test(e)) {
          return !0;
        }
      }

      return !1;
    };

    return {
      validate: function validate(n) {
        var r = Object.assign({}, n.options);

        if (n.value === '' || !r.country) {
          return {
            valid: !0
          };
        }

        var a = n.value.substr(0, 2);
        'function' === typeof r.country ? a = r.country.call(this) : a = r.country;

        if (!a || e.indexOf(a.toUpperCase()) === -1) {
          return {
            valid: !0
          };
        }

        var l = !1;
        a = a.toUpperCase();

        switch (a) {
          case 'AT':
            l = /^([1-9]{1})(\d{3})$/.test(n.value);
            break;

          case 'BG':
            l = /^([1-9]{1}[0-9]{3})$/.test(n.value);
            break;

          case 'BR':
            l = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(n.value);
            break;

          case 'CA':
            l = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(n.value);
            break;

          case 'CH':
            l = /^([1-9]{1})(\d{3})$/.test(n.value);
            break;

          case 'CZ':
            l = /^(\d{3})([ ]?)(\d{2})$/.test(n.value);
            break;

          case 'DE':
            l = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(n.value);
            break;

          case 'DK':
            l = /^(DK(-|\s)?)?\d{4}$/i.test(n.value);
            break;

          case 'ES':
            l = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(n.value);
            break;

          case 'FR':
            l = /^[0-9]{5}$/i.test(n.value);
            break;

          case 'GB':
            l = t(n.value);
            break;

          case 'IN':
            l = /^\d{3}\s?\d{3}$/.test(n.value);
            break;

          case 'IE':
            l = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(n.value);
            break;

          case 'IT':
            l = /^(I-|IT-)?\d{5}$/i.test(n.value);
            break;

          case 'MA':
            l = /^[1-9][0-9]{4}$/i.test(n.value);
            break;

          case 'NL':
            l = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(n.value);
            break;

          case 'PL':
            l = /^[0-9]{2}\-[0-9]{3}$/.test(n.value);
            break;

          case 'PT':
            l = /^[1-9]\d{3}-\d{3}$/.test(n.value);
            break;

          case 'RO':
            l = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(n.value);
            break;

          case 'RU':
            l = /^[0-9]{6}$/i.test(n.value);
            break;

          case 'SE':
            l = /^(S-)?\d{3}\s?\d{2}$/i.test(n.value);
            break;

          case 'SG':
            l = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(n.value);
            break;

          case 'SK':
            l = /^(\d{3})([ ]?)(\d{2})$/.test(n.value);
            break;

          case 'US':
            ;

          default:
            l = /^\d{4,5}([\-]?\d{4})?$/.test(n.value);
            break;
        }

        return {
          message: A(n.l10n ? r.message || n.l10n.zipCode.country : r.message, n.l10n ? n.l10n.zipCode.countries[a] : a),
          valid: l
        };
      }
    };
  }

  var Yt = {
    between: b,
    blank: E,
    callback: V,
    choice: S,
    creditCard: y,
    date: I,
    different: O,
    digits: w,
    emailAddress: L,
    file: N,
    greaterThan: x,
    identical: M,
    integer: T,
    ip: k,
    lessThan: R,
    notEmpty: B,
    numeric: Z,
    promise: G,
    regexp: P,
    remote: K,
    stringCase: U,
    stringLength: Y,
    uri: J,
    base64: W,
    bic: z,
    color: _,
    cusip: X,
    ean: Q,
    ein: q,
    grid: $,
    hex: j,
    iban: ee,
    id: Ke,
    imei: Ue,
    imo: Ye,
    isbn: Je,
    isin: We,
    ismn: ze,
    issn: _e,
    mac: Xe,
    meid: Qe,
    phone: qe,
    rtn: $e,
    sedol: je,
    siren: et,
    siret: tt,
    step: nt,
    uuid: rt,
    vat: Dt,
    vin: Kt,
    zipCode: Ut
  },
      Jt = function () {
    function e(t, n) {
      i(this, e);
      this.elements = {};
      this.ee = p();
      this.filter = h();
      this.plugins = {};
      this.results = new Map();
      this.validators = {};
      this.form = t;
      this.fields = n;
    }

    s(e, [{
      key: "on",
      value: function value(e, t) {
        this.ee.on(e, t);
        return this;
      }
    }, {
      key: "off",
      value: function value(e, t) {
        this.ee.off(e, t);
        return this;
      }
    }, {
      key: "emit",
      value: function value(e) {
        var t;

        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) {
          r[a - 1] = arguments[a];
        }

        (t = this.ee).emit.apply(t, [e].concat(r));
        return this;
      }
    }, {
      key: "registerPlugin",
      value: function value(e, t) {
        if (this.plugins[e]) {
          throw new Error("The plguin ".concat(e, " is registered"));
        }

        t.setCore(this);
        t.install();
        this.plugins[e] = t;
        return this;
      }
    }, {
      key: "deregisterPlugin",
      value: function value(e) {
        var t = this.plugins[e];
        t && t.uninstall();
        delete this.plugins[e];
        return this;
      }
    }, {
      key: "registerValidator",
      value: function value(e, t) {
        if (this.validators[e]) {
          throw new Error("The validator ".concat(e, " is registered"));
        }

        this.validators[e] = t;
        return this;
      }
    }, {
      key: "registerFilter",
      value: function value(e, t) {
        this.filter.add(e, t);
        return this;
      }
    }, {
      key: "deregisterFilter",
      value: function value(e, t) {
        this.filter.remove(e, t);
        return this;
      }
    }, {
      key: "executeFilter",
      value: function value(e, t, n) {
        return this.filter.execute(e, t, n);
      }
    }, {
      key: "addField",
      value: function value(e, t) {
        var n = Object.assign({}, {
          selector: '',
          validators: {}
        }, t);
        this.fields[e] = this.fields[e] ? {
          selector: n.selector || this.fields[e].selector,
          validators: Object.assign({}, this.fields[e].validators, n.validators)
        } : n;
        this.elements[e] = this.queryElements(e);
        this.emit('core.field.added', {
          elements: this.elements[e],
          field: e,
          options: this.fields[e]
        });
        return this;
      }
    }, {
      key: "removeField",
      value: function value(e) {
        if (!this.fields[e]) {
          throw new Error("The field ".concat(e, " validators are not defined. Please ensure the field is added first"));
        }

        var t = this.elements[e],
            n = this.fields[e];
        delete this.elements[e];
        delete this.fields[e];
        this.emit('core.field.removed', {
          elements: t,
          field: e,
          options: n
        });
        return this;
      }
    }, {
      key: "validate",
      value: function value() {
        var e = this;
        this.emit('core.form.validating');
        return this.filter.execute('validate-pre', Promise.resolve(), []).then(function () {
          return Promise.all(Object.keys(e.fields).map(function (t) {
            return e.validateField(t);
          })).then(function (t) {
            switch (!0) {
              case t.indexOf('Invalid') !== -1:
                e.emit('core.form.invalid');
                return Promise.resolve('Invalid');

              case t.indexOf('NotValidated') !== -1:
                e.emit('core.form.notvalidated');
                return Promise.resolve('NotValidated');

              default:
                e.emit('core.form.valid');
                return Promise.resolve('Valid');
            }
          });
        });
      }
    }, {
      key: "validateField",
      value: function value(e) {
        var t = this,
            n = this.results.get(e);

        if (n === 'Valid' || n === 'Invalid') {
          return Promise.resolve(n);
        }

        this.emit('core.field.validating', e);
        var r = this.elements[e];

        if (r.length === 0) {
          this.emit('core.field.valid', e);
          return Promise.resolve('Valid');
        }

        var a = r[0].getAttribute('type');

        if ('radio' === a || 'checkbox' === a || r.length === 1) {
          return this.validateElement(e, r[0]);
        } else {
          return Promise.all(r.map(function (n) {
            return t.validateElement(e, n);
          })).then(function (n) {
            switch (!0) {
              case n.indexOf('Invalid') !== -1:
                t.emit('core.field.invalid', e);
                t.results.set(e, 'Invalid');
                return Promise.resolve('Invalid');

              case n.indexOf('NotValidated') !== -1:
                t.emit('core.field.notvalidated', e);
                t.results["delete"](e);
                return Promise.resolve('NotValidated');

              default:
                t.emit('core.field.valid', e);
                t.results.set(e, 'Valid');
                return Promise.resolve('Valid');
            }
          });
        }
      }
    }, {
      key: "validateElement",
      value: function value(e, t) {
        var n = this;
        this.results["delete"](e);
        var r = this.elements[e],
            a = this.filter.execute('element-ignored', !1, [e, t, r]);

        if (a) {
          this.emit('core.element.ignored', {
            element: t,
            elements: r,
            field: e
          });
          return Promise.resolve('Ignored');
        }

        var l = this.fields[e].validators;
        this.emit('core.element.validating', {
          element: t,
          elements: r,
          field: e
        });
        var i = Object.keys(l).map(function (r) {
          return function () {
            return n.executeValidator(e, t, r, l[r]);
          };
        });
        return this.waterfall(i).then(function (a) {
          var l = a.indexOf('Invalid') === -1;
          n.emit('core.element.validated', {
            element: t,
            elements: r,
            field: e,
            valid: l
          });
          var i = t.getAttribute('type');
          ('radio' === i || 'checkbox' === i || r.length === 1) && n.emit(l ? 'core.field.valid' : 'core.field.invalid', e);
          return Promise.resolve(l ? 'Valid' : 'Invalid');
        })["catch"](function (a) {
          n.emit('core.element.notvalidated', {
            element: t,
            elements: r,
            field: e
          });
          return Promise.resolve(a);
        });
      }
    }, {
      key: "executeValidator",
      value: function value(e, t, n, r) {
        var a = this,
            l = this.elements[e],
            i = this.filter.execute('validator-name', n, [n, e]);
        r.message = this.filter.execute('validator-message', r.message, [this.locale, e, i]);

        if (!this.validators[i] || r.enabled === !1) {
          this.emit('core.validator.validated', {
            element: t,
            elements: l,
            field: e,
            result: this.normalizeResult(e, i, {
              valid: !0
            }),
            validator: i
          });
          return Promise.resolve('Valid');
        }

        var o = this.validators[i],
            s = this.getElementValue(e, t, i),
            c = this.filter.execute('field-should-validate', !0, [e, t, s, n]);

        if (!c) {
          this.emit('core.validator.notvalidated', {
            element: t,
            elements: l,
            field: e,
            validator: n
          });
          return Promise.resolve('NotValidated');
        }

        this.emit('core.validator.validating', {
          element: t,
          elements: l,
          field: e,
          validator: n
        });
        var u = o().validate({
          element: t,
          elements: l,
          field: e,
          l10n: this.localization,
          options: r,
          value: s
        }),
            d = 'function' === typeof u.then;

        if (d) {
          return u.then(function (r) {
            var i = a.normalizeResult(e, n, r);
            a.emit('core.validator.validated', {
              element: t,
              elements: l,
              field: e,
              result: i,
              validator: n
            });
            return i.valid ? 'Valid' : 'Invalid';
          });
        } else {
          var f = this.normalizeResult(e, n, u);
          this.emit('core.validator.validated', {
            element: t,
            elements: l,
            field: e,
            result: f,
            validator: n
          });
          return Promise.resolve(f.valid ? 'Valid' : 'Invalid');
        }
      }
    }, {
      key: "getElementValue",
      value: function value(e, t, n) {
        var r = v(this.form, e, t, this.elements[e]);
        return this.filter.execute('field-value', r, [r, e, t, n]);
      }
    }, {
      key: "getElements",
      value: function value(e) {
        return this.elements[e];
      }
    }, {
      key: "getFields",
      value: function value() {
        return this.fields;
      }
    }, {
      key: "getFormElement",
      value: function value() {
        return this.form;
      }
    }, {
      key: "getLocale",
      value: function value() {
        return this.locale;
      }
    }, {
      key: "getPlugin",
      value: function value(e) {
        return this.plugins[e];
      }
    }, {
      key: "updateFieldStatus",
      value: function value(e, t, n) {
        var r = this,
            a = this.elements[e],
            l = a[0].getAttribute('type'),
            i = 'radio' === l || 'checkbox' === l ? [a[0]] : a;
        i.forEach(function (a) {
          return r.updateElementStatus(e, a, t, n);
        });

        if (!n) {
          switch (t) {
            case 'NotValidated':
              this.emit('core.field.notvalidated', e);
              this.results["delete"](e);
              break;

            case 'Validating':
              this.emit('core.field.validating', e);
              this.results["delete"](e);
              break;

            case 'Valid':
              this.emit('core.field.valid', e);
              this.results.set(e, 'Valid');
              break;

            case 'Invalid':
              this.emit('core.field.invalid', e);
              this.results.set(e, 'Invalid');
              break;
          }
        }

        return this;
      }
    }, {
      key: "updateElementStatus",
      value: function value(e, t, n, r) {
        var a = this,
            l = this.elements[e],
            i = this.fields[e].validators,
            o = r ? [r] : Object.keys(i);

        switch (n) {
          case 'NotValidated':
            o.forEach(function (n) {
              return a.emit('core.validator.notvalidated', {
                element: t,
                elements: l,
                field: e,
                validator: n
              });
            });
            this.emit('core.element.notvalidated', {
              element: t,
              elements: l,
              field: e
            });
            break;

          case 'Validating':
            o.forEach(function (n) {
              return a.emit('core.validator.validating', {
                element: t,
                elements: l,
                field: e,
                validator: n
              });
            });
            this.emit('core.element.validating', {
              element: t,
              elements: l,
              field: e
            });
            break;

          case 'Valid':
            o.forEach(function (n) {
              return a.emit('core.validator.validated', {
                element: t,
                field: e,
                result: {
                  message: i[n].message,
                  valid: !0
                },
                validator: n
              });
            });
            this.emit('core.element.validated', {
              element: t,
              elements: l,
              field: e,
              valid: !0
            });
            break;

          case 'Invalid':
            o.forEach(function (n) {
              return a.emit('core.validator.validated', {
                element: t,
                field: e,
                result: {
                  message: i[n].message,
                  valid: !1
                },
                validator: n
              });
            });
            this.emit('core.element.validated', {
              element: t,
              elements: l,
              field: e,
              valid: !1
            });
            break;
        }

        return this;
      }
    }, {
      key: "resetForm",
      value: function value(e) {
        var t = this;
        Object.keys(this.fields).forEach(function (n) {
          return t.resetField(n, e);
        });
        this.emit('core.form.reset', {
          reset: e
        });
        return this;
      }
    }, {
      key: "resetField",
      value: function value(e, t) {
        if (t) {
          var n = this.elements[e],
              r = n[0].getAttribute('type');
          n.forEach(function (e) {
            'radio' === r || 'checkbox' === r ? (e.removeAttribute('selected'), e.removeAttribute('checked'), e.checked = !1) : (e.setAttribute('value', ''), (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && (e.value = ''));
          });
        }

        this.updateFieldStatus(e, 'NotValidated');
        this.emit('core.field.reset', {
          field: e,
          reset: t
        });
        return this;
      }
    }, {
      key: "revalidateField",
      value: function value(e) {
        this.updateFieldStatus(e, 'NotValidated');
        return this.validateField(e);
      }
    }, {
      key: "disableValidator",
      value: function value(e, t) {
        return this.toggleValidator(!1, e, t);
      }
    }, {
      key: "enableValidator",
      value: function value(e, t) {
        return this.toggleValidator(!0, e, t);
      }
    }, {
      key: "updateValidatorOption",
      value: function value(e, t, n, r) {
        this.fields[e] && this.fields[e].validators && this.fields[e].validators[t] && (this.fields[e].validators[t][n] = r);
        return this;
      }
    }, {
      key: "destroy",
      value: function value() {
        var e = this;
        Object.keys(this.plugins).forEach(function (t) {
          return e.plugins[t].uninstall();
        });
        this.ee.clear();
        this.filter.clear();
        this.results.clear();
        this.plugins = {};
        return this;
      }
    }, {
      key: "setLocale",
      value: function value(e, t) {
        this.locale = e;
        this.localization = t;
        return this;
      }
    }, {
      key: "waterfall",
      value: function value(e) {
        return e.reduce(function (e, t, n, r) {
          return e.then(function (e) {
            return t().then(function (t) {
              e.push(t);
              return e;
            });
          });
        }, Promise.resolve([]));
      }
    }, {
      key: "queryElements",
      value: function value(e) {
        var t = this.fields[e].selector ? '#' === this.fields[e].selector.charAt(0) ? "[id=\"".concat(this.fields[e].selector.substring(1), "\"]") : this.fields[e].selector : "[name=\"".concat(e, "\"]");
        return [].slice.call(this.form.querySelectorAll(t));
      }
    }, {
      key: "normalizeResult",
      value: function value(e, t, n) {
        var r = this.fields[e].validators[t];
        return Object.assign({}, n, {
          message: n.message || (r ? r.message : '') || (this.localization && this.localization[t] && this.localization[t]["default"] ? this.localization[t]["default"] : '') || "The field ".concat(e, " is not valid")
        });
      }
    }, {
      key: "toggleValidator",
      value: function value(e, t, n) {
        var r = this,
            a = this.fields[t].validators;
        n && a && a[n] ? this.fields[t].validators[n].enabled = e : n || Object.keys(a).forEach(function (n) {
          return r.fields[t].validators[n].enabled = e;
        });
        return this.updateFieldStatus(t, 'NotValidated', n);
      }
    }]);
    return e;
  }();

  function Wt(e, t) {
    var n = Object.assign({}, {
      fields: {},
      locale: 'en_US',
      plugins: {}
    }, t),
        r = new Jt(e, n.fields);
    r.setLocale(n.locale, n.localization);
    Object.keys(n.plugins).forEach(function (e) {
      return r.registerPlugin(e, n.plugins[e]);
    });
    Object.keys(Yt).forEach(function (e) {
      return r.registerValidator(e, Yt[e]);
    });
    Object.keys(n.fields).forEach(function (e) {
      return r.addField(e, n.fields[e]);
    });
    return r;
  }

  var zt = function () {
    function e(t) {
      i(this, e);
      this.opts = t;
    }

    s(e, [{
      key: "setCore",
      value: function value(e) {
        this.core = e;
        return this;
      }
    }, {
      key: "install",
      value: function value() {}
    }, {
      key: "uninstall",
      value: function value() {}
    }]);
    return e;
  }(),
      _t = {
    getFieldValue: v
  },
      Xt = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.opts = e || {};
      n.validatorNameFilter = n.getValidatorName.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.core.registerFilter('validator-name', this.validatorNameFilter);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.core.deregisterFilter('validator-name', this.validatorNameFilter);
      }
    }, {
      key: "getValidatorName",
      value: function value(e, t) {
        return this.opts[e] || e;
      }
    }]);
    return t;
  }(zt),
      Qt = function (e) {
    u(t, e);

    function t() {
      var e;
      i(this, t);
      e = g(this, d(t).call(this, {}));
      e.elementValidatedHandler = e.onElementValidated.bind(m(e));
      e.fieldValidHandler = e.onFieldValid.bind(m(e));
      e.fieldInvalidHandler = e.onFieldInvalid.bind(m(e));
      e.messageDisplayedHandler = e.onMessageDisplayed.bind(m(e));
      return e;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.core.on('core.field.valid', this.fieldValidHandler).on('core.field.invalid', this.fieldInvalidHandler).on('core.element.validated', this.elementValidatedHandler).on('plugins.message.displayed', this.messageDisplayedHandler);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.core.off('core.field.valid', this.fieldValidHandler).off('core.field.invalid', this.fieldInvalidHandler).off('core.element.validated', this.elementValidatedHandler).off('plugins.message.displayed', this.messageDisplayedHandler);
      }
    }, {
      key: "onElementValidated",
      value: function value(e) {
        e.valid && (e.element.setAttribute('aria-invalid', 'false'), e.element.removeAttribute('aria-describedby'));
      }
    }, {
      key: "onFieldValid",
      value: function value(e) {
        var t = this.core.getElements(e);
        t && t.forEach(function (e) {
          e.setAttribute('aria-invalid', 'false');
          e.removeAttribute('aria-describedby');
        });
      }
    }, {
      key: "onFieldInvalid",
      value: function value(e) {
        var t = this.core.getElements(e);
        t && t.forEach(function (e) {
          return e.setAttribute('aria-invalid', 'true');
        });
      }
    }, {
      key: "onMessageDisplayed",
      value: function value(e) {
        e.messageElement.setAttribute('role', 'alert');
        e.messageElement.setAttribute('aria-hidden', 'false');
        var t = this.core.getElements(e.field),
            n = t.indexOf(e.element),
            r = "js-fv-".concat(e.field, "-").concat(n, "-").concat(Date.now(), "-message");
        e.messageElement.setAttribute('id', r);
        e.element.setAttribute('aria-describedby', r);
        var a = e.element.getAttribute('type');
        ('radio' === a || 'checkbox' === a) && t.forEach(function (e) {
          return e.setAttribute('aria-describedby', r);
        });
      }
    }]);
    return t;
  }(zt),
      qt = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.opts = Object.assign({}, {
        html5Input: !1,
        pluginPrefix: 'data-fvp-',
        prefix: 'data-fv-'
      }, e);
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        var e = this;
        this.parsePlugins();
        var t = this.parseOptions();
        Object.keys(t).forEach(function (n) {
          return e.core.addField(n, t[n]);
        });
      }
    }, {
      key: "parseOptions",
      value: function value() {
        var e = this,
            t = this.opts.prefix,
            n = {},
            r = this.core.getFields(),
            a = this.core.getFormElement(),
            l = [].slice.call(a.querySelectorAll("[name], [".concat(t, "field]")));
        l.forEach(function (r) {
          var a = e.parseElement(r);

          if (!e.isEmptyOption(a)) {
            var l = r.getAttribute('name') || r.getAttribute("".concat(t, "field"));
            n[l] = Object.assign({}, n[l], a);
          }
        });
        Object.keys(n).forEach(function (e) {
          Object.keys(n[e].validators).forEach(function (t) {
            n[e].validators[t].enabled = n[e].validators[t].enabled || !1;
            r[e] && r[e].validators && r[e].validators[t] && Object.assign(n[e].validators[t], r[e].validators[t]);
          });
        });
        return Object.assign({}, r, n);
      }
    }, {
      key: "createPluginInstance",
      value: function value(e, t) {
        var n = e.split('.'),
            r = window || this;

        for (var a = 0, l = n.length; a < l; a++) {
          r = r[n[a]];
        }

        if (typeof r !== 'function') {
          throw new Error("the plugin ".concat(e, " doesn't exist"));
        }

        return new r(t);
      }
    }, {
      key: "parsePlugins",
      value: function value() {
        var e = this,
            t = this.core.getFormElement(),
            n = new RegExp("^".concat(this.opts.pluginPrefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$")),
            r = t.attributes.length,
            a = {};

        for (var l = 0; l < r; l++) {
          var i = t.attributes[l].name,
              o = t.attributes[l].value,
              s = n.exec(i);

          if (s && s.length === 4) {
            var u = this.toCamelCase(s[1]);
            a[u] = Object.assign({}, s[3] ? c({}, this.toCamelCase(s[3]), o) : {
              enabled: '' === o || 'true' === o
            }, a[u]);
          }
        }

        Object.keys(a).forEach(function (t) {
          var n = a[t],
              r = n.enabled,
              l = n['class'];

          if (r && l) {
            delete n.enabled;
            delete n.clazz;
            var i = e.createPluginInstance(l, n);
            e.core.registerPlugin(t, i);
          }
        });
      }
    }, {
      key: "isEmptyOption",
      value: function value(e) {
        var t = e.validators;
        return Object.keys(t).length === 0 && t.constructor === Object;
      }
    }, {
      key: "parseElement",
      value: function value(e) {
        var t = new RegExp("^".concat(this.opts.prefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$")),
            n = e.attributes.length,
            r = {},
            a = e.getAttribute('type');

        for (var l = 0; l < n; l++) {
          var i = e.attributes[l].name,
              o = e.attributes[l].value;

          if (this.opts.html5Input) {
            switch (!0) {
              case 'minlength' === i:
                r.stringLength = Object.assign({}, {
                  enabled: !0,
                  min: parseInt(o, 10)
                }, r.stringLength);
                break;

              case 'maxlength' === i:
                r.stringLength = Object.assign({}, {
                  enabled: !0,
                  max: parseInt(o, 10)
                }, r.stringLength);
                break;

              case 'pattern' === i:
                r.regexp = Object.assign({}, {
                  enabled: !0,
                  regexp: o
                }, r.regexp);
                break;

              case 'required' === i:
                r.notEmpty = Object.assign({}, {
                  enabled: !0
                }, r.notEmpty);
                break;

              case 'type' === i && 'color' === o:
                r.color = Object.assign({}, {
                  enabled: !0,
                  type: 'hex'
                }, r.color);
                break;

              case 'type' === i && 'email' === o:
                r.emailAddress = Object.assign({}, {
                  enabled: !0
                }, r.emailAddress);
                break;

              case 'type' === i && 'url' === o:
                r.uri = Object.assign({}, {
                  enabled: !0
                }, r.uri);
                break;

              case 'type' === i && 'range' === o:
                r.between = Object.assign({}, {
                  enabled: !0,
                  max: parseFloat(e.getAttribute('max')),
                  min: parseFloat(e.getAttribute('min'))
                }, r.between);
                break;

              case 'min' === i && a !== 'date' && a !== 'range':
                r.greaterThan = Object.assign({}, {
                  enabled: !0,
                  min: parseFloat(o)
                }, r.greaterThan);
                break;

              case 'max' === i && a !== 'date' && a !== 'range':
                r.lessThan = Object.assign({}, {
                  enabled: !0,
                  max: parseFloat(o)
                }, r.lessThan);
                break;
            }
          }

          var s = t.exec(i);

          if (s && s.length === 4) {
            var u = this.toCamelCase(s[1]);
            r[u] = Object.assign({}, s[3] ? c({}, this.toCamelCase(s[3]), o) : {
              enabled: '' === o || 'true' === o
            }, r[u]);
          }
        }

        return {
          validators: r
        };
      }
    }, {
      key: "toUpperCase",
      value: function value(e) {
        return e.charAt(1).toUpperCase();
      }
    }, {
      key: "toCamelCase",
      value: function value(e) {
        return e.replace(/-./g, this.toUpperCase);
      }
    }]);
    return t;
  }(zt),
      $t = function (e) {
    u(t, e);

    function t() {
      var e;
      i(this, t);
      e = g(this, d(t).call(this, {}));
      e.onValidHandler = e.onFormValid.bind(m(e));
      return e;
    }

    s(t, [{
      key: "install",
      value: function value() {
        var e = this.core.getFormElement();

        if (e.querySelectorAll('[type="submit"][name="submit"]').length) {
          throw new Error('Do not use `submit` for the name attribute of submit button');
        }

        this.core.on('core.form.valid', this.onValidHandler);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.core.off('core.form.valid', this.onValidHandler);
      }
    }, {
      key: "onFormValid",
      value: function value() {
        var e = this.core.getFormElement();
        e instanceof HTMLFormElement && e.submit();
      }
    }]);
    return t;
  }(zt),
      jt = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.opts = e || {};
      n.triggerExecutedHandler = n.onTriggerExecuted.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
      }
    }, {
      key: "onTriggerExecuted",
      value: function value(e) {
        if (this.opts[e.field]) {
          var t = this.opts[e.field].split(' '),
              n = !0,
              r = !1,
              a = void 0;

          try {
            for (var l = t[Symbol.iterator](), i; !(n = (i = l.next()).done); n = !0) {
              var o = i.value,
                  s = o.trim();
              this.opts[s] && this.core.revalidateField(s);
            }
          } catch (e) {
            r = !0, a = e;
          } finally {
            try {
              !n && l["return"] != null && l["return"]();
            } finally {
              if (r) {
                throw a;
              }
            }
          }
        }
      }
    }]);
    return t;
  }(zt),
      en = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.opts = Object.assign({}, {
        excluded: t.defaultIgnore
      }, e);
      n.ignoreValidationFilter = n.ignoreValidation.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
      }
    }, {
      key: "ignoreValidation",
      value: function value(e, t, n) {
        return this.opts.excluded.apply(this, [e, t, n]);
      }
    }], [{
      key: "defaultIgnore",
      value: function value(e, t, n) {
        var r = !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length),
            a = t.getAttribute('disabled');
        return a === '' || a === 'disabled' || t.getAttribute('type') === 'hidden' || !r;
      }
    }]);
    return t;
  }(zt),
      tn = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.statuses = new Map();
      n.opts = Object.assign({}, {
        onStatusChanged: function onStatusChanged() {}
      }, e);
      n.elementValidatingHandler = n.onElementValidating.bind(m(n));
      n.elementValidatedHandler = n.onElementValidated.bind(m(n));
      n.elementNotValidatedHandler = n.onElementNotValidated.bind(m(n));
      n.elementIgnoredHandler = n.onElementIgnored.bind(m(n));
      n.fieldAddedHandler = n.onFieldAdded.bind(m(n));
      n.fieldRemovedHandler = n.onFieldRemoved.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.core.on('core.element.validating', this.elementValidatingHandler).on('core.element.validated', this.elementValidatedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('core.element.ignored', this.elementIgnoredHandler).on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.statuses.clear();
        this.core.off('core.element.validating', this.elementValidatingHandler).off('core.element.validated', this.elementValidatedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('core.element.ignored', this.elementIgnoredHandler).off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
      }
    }, {
      key: "areFieldsValid",
      value: function value() {
        return Array.from(this.statuses.values()).every(function (e) {
          return e === 'Valid' || e === 'NotValidated' || e === 'Ignored';
        });
      }
    }, {
      key: "getStatuses",
      value: function value() {
        return this.statuses;
      }
    }, {
      key: "onFieldAdded",
      value: function value(e) {
        this.statuses.set(e.field, 'NotValidated');
      }
    }, {
      key: "onFieldRemoved",
      value: function value(e) {
        this.statuses.has(e.field) && this.statuses["delete"](e.field);
        this.opts.onStatusChanged(this.areFieldsValid());
      }
    }, {
      key: "onElementValidating",
      value: function value(e) {
        this.statuses.set(e.field, 'Validating');
        this.opts.onStatusChanged(!1);
      }
    }, {
      key: "onElementValidated",
      value: function value(e) {
        this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid');
        e.valid ? this.opts.onStatusChanged(this.areFieldsValid()) : this.opts.onStatusChanged(!1);
      }
    }, {
      key: "onElementNotValidated",
      value: function value(e) {
        this.statuses.set(e.field, 'NotValidated');
        this.opts.onStatusChanged(!1);
      }
    }, {
      key: "onElementIgnored",
      value: function value(e) {
        this.statuses.set(e.field, 'Ignored');
        this.opts.onStatusChanged(this.areFieldsValid());
      }
    }]);
    return t;
  }(zt);

  function nn(e, t) {
    t.split(' ').forEach(function (t) {
      e.classList ? e.classList.add(t) : " ".concat(e.className, " ").indexOf(" ".concat(t, " ")) && (e.className += " ".concat(t));
    });
  }

  function rn(e, t) {
    t.split(' ').forEach(function (t) {
      e.classList ? e.classList.remove(t) : e.className = e.className.replace(t, '');
    });
  }

  function an(e, t) {
    var n = [],
        r = [];
    Object.keys(t).forEach(function (e) {
      e && (t[e] ? n.push(e) : r.push(e));
    });
    r.forEach(function (t) {
      return rn(e, t);
    });
    n.forEach(function (t) {
      return nn(e, t);
    });
  }

  function ln(e, t) {
    var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;

    if (n) {
      return n.call(e, t);
    }

    var r = [].slice.call(e.parentElement.querySelectorAll(t));
    return r.indexOf(e) >= 0;
  }

  function on(e, t) {
    var n = e;

    while (n) {
      if (ln(n, t)) {
        break;
      }

      n = n.parentElement;
    }

    return n;
  }

  var sn = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.messages = new Map();
      n.defaultContainer = document.createElement('div');
      n.opts = Object.assign({}, {
        container: function container(e, t) {
          return n.defaultContainer;
        }
      }, e);
      n.elementIgnoredHandler = n.onElementIgnored.bind(m(n));
      n.fieldAddedHandler = n.onFieldAdded.bind(m(n));
      n.fieldRemovedHandler = n.onFieldRemoved.bind(m(n));
      n.validatorValidatedHandler = n.onValidatorValidated.bind(m(n));
      n.validatorNotValidatedHandler = n.onValidatorNotValidated.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.core.getFormElement().appendChild(this.defaultContainer);
        this.core.on('core.element.ignored', this.elementIgnoredHandler).on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler).on('core.validator.validated', this.validatorValidatedHandler).on('core.validator.notvalidated', this.validatorNotValidatedHandler);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.core.getFormElement().removeChild(this.defaultContainer);
        this.messages.forEach(function (e) {
          return e.parentNode.removeChild(e);
        });
        this.messages.clear();
        this.core.off('core.element.ignored', this.elementIgnoredHandler).off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler).off('core.validator.validated', this.validatorValidatedHandler).off('core.validator.notvalidated', this.validatorNotValidatedHandler);
      }
    }, {
      key: "onFieldAdded",
      value: function value(e) {
        var t = this,
            n = e.elements;
        n && (n.forEach(function (e) {
          var n = t.messages.get(e);
          n && (n.parentNode.removeChild(n), t.messages["delete"](e));
        }), this.prepareFieldContainer(e.field, n));
      }
    }, {
      key: "onFieldRemoved",
      value: function value(e) {
        var t = this;

        if (!e.elements.length || !e.field) {
          return;
        }

        var n = e.elements[0].getAttribute('type'),
            r = 'radio' === n || 'checkbox' === n ? [e.elements[0]] : e.elements;
        r.forEach(function (e) {
          if (t.messages.has(e)) {
            var n = t.messages.get(e);
            n.parentNode.removeChild(n);
            t.messages["delete"](e);
          }
        });
      }
    }, {
      key: "prepareFieldContainer",
      value: function value(e, t) {
        var n = this;

        if (t.length) {
          var r = t[0].getAttribute('type');
          'radio' === r || 'checkbox' === r ? this.prepareElementContainer(e, t[0], t) : t.forEach(function (r) {
            return n.prepareElementContainer(e, r, t);
          });
        }
      }
    }, {
      key: "prepareElementContainer",
      value: function value(e, t, n) {
        var r;

        switch (!0) {
          case 'string' === typeof this.opts.container:
            var a = this.opts.container;
            a = '#' === a.charAt(0) ? "[id=\"".concat(a.substring(1), "\"]") : a;
            r = this.core.getFormElement().querySelector(a);
            break;

          default:
            r = this.opts.container(e, t);
            break;
        }

        var l = document.createElement('div');
        r.appendChild(l);
        an(l, {
          'fv-plugins-message-container': !0
        });
        this.core.emit('plugins.message.placed', {
          element: t,
          elements: n,
          field: e,
          messageElement: l
        });
        this.messages.set(t, l);
      }
    }, {
      key: "getMessage",
      value: function value(e) {
        return typeof e.message === 'string' ? e.message : e.message[this.core.getLocale()];
      }
    }, {
      key: "onValidatorValidated",
      value: function value(e) {
        var t = e.elements,
            n = e.element.getAttribute('type'),
            r = 'radio' === n || 'checkbox' === n ? t[0] : e.element;

        if (this.messages.has(r)) {
          var a = this.messages.get(r),
              l = a.querySelector("[data-field=\"".concat(e.field, "\"][data-validator=\"").concat(e.validator, "\"]"));

          if (!l && !e.result.valid) {
            var i = document.createElement('div');
            i.innerHTML = this.getMessage(e.result);
            i.setAttribute('data-field', e.field);
            i.setAttribute('data-validator', e.validator);
            this.opts.clazz && an(i, c({}, this.opts.clazz, !0));
            a.appendChild(i);
            this.core.emit('plugins.message.displayed', {
              element: e.element,
              field: e.field,
              message: e.result.message,
              messageElement: i,
              meta: e.result.meta,
              validator: e.validator
            });
          } else l && !e.result.valid ? (l.innerHTML = this.getMessage(e.result), this.core.emit('plugins.message.displayed', {
            element: e.element,
            field: e.field,
            message: e.result.message,
            messageElement: l,
            meta: e.result.meta,
            validator: e.validator
          })) : l && e.result.valid && a.removeChild(l);
        }
      }
    }, {
      key: "onValidatorNotValidated",
      value: function value(e) {
        var t = e.elements,
            n = e.element.getAttribute('type'),
            r = 'radio' === n || 'checkbox' === n ? t[0] : e.element;

        if (this.messages.has(r)) {
          var a = this.messages.get(r),
              l = a.querySelector("[data-field=\"".concat(e.field, "\"][data-validator=\"").concat(e.validator, "\"]"));
          l && a.removeChild(l);
        }
      }
    }, {
      key: "onElementIgnored",
      value: function value(e) {
        var t = e.elements,
            n = e.element.getAttribute('type'),
            r = 'radio' === n || 'checkbox' === n ? t[0] : e.element;

        if (this.messages.has(r)) {
          var a = this.messages.get(r),
              l = [].slice.call(a.querySelectorAll("[data-field=\"".concat(e.field, "\"]")));
          l.forEach(function (e) {
            a.removeChild(e);
          });
        }
      }
    }], [{
      key: "getClosestContainer",
      value: function value(e, t, n) {
        var r = e;

        while (r) {
          if (r === t) {
            break;
          }

          r = r.parentElement;

          if (n.test(r.className)) {
            break;
          }
        }

        return r;
      }
    }]);
    return t;
  }(zt),
      cn = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.results = new Map();
      n.containers = new Map();
      n.opts = Object.assign({}, {
        defaultMessageContainer: !0,
        eleInvalidClass: '',
        eleValidClass: '',
        rowClasses: '',
        rowValidatingClass: ''
      }, e);
      n.elementIgnoredHandler = n.onElementIgnored.bind(m(n));
      n.elementValidatingHandler = n.onElementValidating.bind(m(n));
      n.elementValidatedHandler = n.onElementValidated.bind(m(n));
      n.elementNotValidatedHandler = n.onElementNotValidated.bind(m(n));
      n.iconPlacedHandler = n.onIconPlaced.bind(m(n));
      n.fieldAddedHandler = n.onFieldAdded.bind(m(n));
      n.fieldRemovedHandler = n.onFieldRemoved.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        var e,
            t = this;
        an(this.core.getFormElement(), (e = {}, c(e, this.opts.formClass, !0), c(e, 'fv-plugins-framework', !0), e));
        this.core.on('core.element.ignored', this.elementIgnoredHandler).on('core.element.validating', this.elementValidatingHandler).on('core.element.validated', this.elementValidatedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('plugins.icon.placed', this.iconPlacedHandler).on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
        this.opts.defaultMessageContainer && this.core.registerPlugin('___frameworkMessage', new sn({
          clazz: this.opts.messageClass,
          container: function container(e, n) {
            var r = 'string' === typeof t.opts.rowSelector ? t.opts.rowSelector : t.opts.rowSelector(e, n),
                a = on(n, r);
            return sn.getClosestContainer(n, a, t.opts.rowPattern);
          }
        }));
      }
    }, {
      key: "uninstall",
      value: function value() {
        var e;
        this.results.clear();
        this.containers.clear();
        an(this.core.getFormElement(), (e = {}, c(e, this.opts.formClass, !1), c(e, 'fv-plugins-framework', !1), e));
        this.core.off('core.element.ignored', this.elementIgnoredHandler).off('core.element.validating', this.elementValidatingHandler).off('core.element.validated', this.elementValidatedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('plugins.icon.placed', this.iconPlacedHandler).off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
      }
    }, {
      key: "onIconPlaced",
      value: function value(e) {}
    }, {
      key: "onFieldAdded",
      value: function value(e) {
        var t = this,
            n = e.elements;
        n && (n.forEach(function (e) {
          var n = t.containers.get(e);

          if (n) {
            var r;
            an(n, (r = {}, c(r, t.opts.rowInvalidClass, !1), c(r, t.opts.rowValidatingClass, !1), c(r, t.opts.rowValidClass, !1), c(r, 'fv-plugins-icon-container', !1), r));
            t.containers["delete"](e);
          }
        }), this.prepareFieldContainer(e.field, n));
      }
    }, {
      key: "onFieldRemoved",
      value: function value(e) {
        var t = this;
        e.elements.forEach(function (e) {
          var n = t.containers.get(e);

          if (n) {
            var r;
            an(n, (r = {}, c(r, t.opts.rowInvalidClass, !1), c(r, t.opts.rowValidatingClass, !1), c(r, t.opts.rowValidClass, !1), r));
          }
        });
      }
    }, {
      key: "prepareFieldContainer",
      value: function value(e, t) {
        var n = this;

        if (t.length) {
          var r = t[0].getAttribute('type');
          'radio' === r || 'checkbox' === r ? this.prepareElementContainer(e, t[0]) : t.forEach(function (t) {
            return n.prepareElementContainer(e, t);
          });
        }
      }
    }, {
      key: "prepareElementContainer",
      value: function value(e, t) {
        var n = 'string' === typeof this.opts.rowSelector ? this.opts.rowSelector : this.opts.rowSelector(e, t),
            r = on(t, n);

        if (r !== t) {
          var a;
          an(r, (a = {}, c(a, this.opts.rowClasses, !0), c(a, 'fv-plugins-icon-container', !0), a));
          this.containers.set(t, r);
        }
      }
    }, {
      key: "onElementValidating",
      value: function value(e) {
        var t = e.elements,
            n = e.element.getAttribute('type'),
            r = 'radio' === n || 'checkbox' === n ? t[0] : e.element,
            a = this.containers.get(r);

        if (a) {
          var l;
          an(a, (l = {}, c(l, this.opts.rowInvalidClass, !1), c(l, this.opts.rowValidatingClass, !0), c(l, this.opts.rowValidClass, !1), l));
        }
      }
    }, {
      key: "onElementNotValidated",
      value: function value(e) {
        this.removeClasses(e.element, e.elements);
      }
    }, {
      key: "onElementIgnored",
      value: function value(e) {
        this.removeClasses(e.element, e.elements);
      }
    }, {
      key: "removeClasses",
      value: function value(e, t) {
        var n,
            r = e.getAttribute('type'),
            a = 'radio' === r || 'checkbox' === r ? t[0] : e;
        an(a, (n = {}, c(n, this.opts.eleValidClass, !1), c(n, this.opts.eleInvalidClass, !1), n));
        var l = this.containers.get(a);

        if (l) {
          var i;
          an(l, (i = {}, c(i, this.opts.rowInvalidClass, !1), c(i, this.opts.rowValidatingClass, !1), c(i, this.opts.rowValidClass, !1), i));
        }
      }
    }, {
      key: "onElementValidated",
      value: function value(e) {
        var t,
            n = this,
            r = e.elements,
            a = e.element.getAttribute('type'),
            l = 'radio' === a || 'checkbox' === a ? r[0] : e.element;
        an(l, (t = {}, c(t, this.opts.eleValidClass, e.valid), c(t, this.opts.eleInvalidClass, !e.valid), t));
        var i = this.containers.get(l);

        if (i) {
          if (!e.valid) {
            var o;
            this.results.set(l, !1);
            an(i, (o = {}, c(o, this.opts.rowInvalidClass, !0), c(o, this.opts.rowValidatingClass, !1), c(o, this.opts.rowValidClass, !1), o));
          } else {
            this.results["delete"](l);
            var s = !0;
            this.containers.forEach(function (e, t) {
              e === i && n.results.get(t) === !1 && (s = !1);
            });

            if (s) {
              var u;
              an(i, (u = {}, c(u, this.opts.rowInvalidClass, !1), c(u, this.opts.rowValidatingClass, !1), c(u, this.opts.rowValidClass, !0), u));
            }
          }
        }
      }
    }]);
    return t;
  }(zt),
      un = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.icons = new Map();
      n.opts = Object.assign({}, {
        invalid: 'fv-plugins-icon--invalid',
        onPlaced: function onPlaced() {},
        onSet: function onSet() {},
        valid: 'fv-plugins-icon--valid',
        validating: 'fv-plugins-icon--validating'
      }, e);
      n.elementValidatingHandler = n.onElementValidating.bind(m(n));
      n.elementValidatedHandler = n.onElementValidated.bind(m(n));
      n.elementNotValidatedHandler = n.onElementNotValidated.bind(m(n));
      n.elementIgnoredHandler = n.onElementIgnored.bind(m(n));
      n.fieldAddedHandler = n.onFieldAdded.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.core.on('core.element.validating', this.elementValidatingHandler).on('core.element.validated', this.elementValidatedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('core.element.ignored', this.elementIgnoredHandler).on('core.field.added', this.fieldAddedHandler);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.icons.forEach(function (e) {
          return e.parentNode.removeChild(e);
        });
        this.icons.clear();
        this.core.off('core.element.validating', this.elementValidatingHandler).off('core.element.validated', this.elementValidatedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('core.element.ignored', this.elementIgnoredHandler).off('core.field.added', this.fieldAddedHandler);
      }
    }, {
      key: "onFieldAdded",
      value: function value(e) {
        var t = this,
            n = e.elements;
        n && (n.forEach(function (e) {
          var n = t.icons.get(e);
          n && (n.parentNode.removeChild(n), t.icons["delete"](e));
        }), this.prepareFieldIcon(e.field, n));
      }
    }, {
      key: "prepareFieldIcon",
      value: function value(e, t) {
        var n = this;

        if (t.length) {
          var r = t[0].getAttribute('type');
          'radio' === r || 'checkbox' === r ? this.prepareElementIcon(e, t[0]) : t.forEach(function (t) {
            return n.prepareElementIcon(e, t);
          });
        }
      }
    }, {
      key: "prepareElementIcon",
      value: function value(e, t) {
        var n = document.createElement('i');
        n.setAttribute('data-field', e);
        t.parentNode.insertBefore(n, t.nextSibling);
        an(n, {
          'fv-plugins-icon': !0
        });
        var r = {
          classes: {
            invalid: this.opts.invalid,
            valid: this.opts.valid,
            validating: this.opts.validating
          },
          element: t,
          field: e,
          iconElement: n
        };
        this.core.emit('plugins.icon.placed', r);
        this.opts.onPlaced(r);
        this.icons.set(t, n);
      }
    }, {
      key: "onElementValidating",
      value: function value(e) {
        var t,
            n = this.setClasses(e.field, e.element, e.elements, (t = {}, c(t, this.opts.invalid, !1), c(t, this.opts.valid, !1), c(t, this.opts.validating, !0), t)),
            r = {
          element: e.element,
          field: e.field,
          iconElement: n,
          status: 'Validating'
        };
        this.core.emit('plugins.icon.set', r);
        this.opts.onSet(r);
      }
    }, {
      key: "onElementValidated",
      value: function value(e) {
        var t,
            n = this.setClasses(e.field, e.element, e.elements, (t = {}, c(t, this.opts.invalid, !e.valid), c(t, this.opts.valid, e.valid), c(t, this.opts.validating, !1), t)),
            r = {
          element: e.element,
          field: e.field,
          iconElement: n,
          status: e.valid ? 'Valid' : 'Invalid'
        };
        this.core.emit('plugins.icon.set', r);
        this.opts.onSet(r);
      }
    }, {
      key: "onElementNotValidated",
      value: function value(e) {
        var t,
            n = this.setClasses(e.field, e.element, e.elements, (t = {}, c(t, this.opts.invalid, !1), c(t, this.opts.valid, !1), c(t, this.opts.validating, !1), t)),
            r = {
          element: e.element,
          field: e.field,
          iconElement: n,
          status: 'NotValidated'
        };
        this.core.emit('plugins.icon.set', r);
        this.opts.onSet(r);
      }
    }, {
      key: "onElementIgnored",
      value: function value(e) {
        var t,
            n = this.setClasses(e.field, e.element, e.elements, (t = {}, c(t, this.opts.invalid, !1), c(t, this.opts.valid, !1), c(t, this.opts.validating, !1), t)),
            r = {
          element: e.element,
          field: e.field,
          iconElement: n,
          status: 'Ignored'
        };
        this.core.emit('plugins.icon.set', r);
        this.opts.onSet(r);
      }
    }, {
      key: "setClasses",
      value: function value(e, t, n, r) {
        var a = t.getAttribute('type'),
            l = 'radio' === a || 'checkbox' === a ? n[0] : t;

        if (this.icons.has(l)) {
          var i = this.icons.get(l);
          an(i, r);
          return i;
        } else {
          return null;
        }
      }
    }]);
    return t;
  }(zt),
      dn = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.invalidFields = new Map();
      n.opts = Object.assign({}, {
        enabled: !0
      }, e);
      n.validatorHandler = n.onValidatorValidated.bind(m(n));
      n.shouldValidateFilter = n.shouldValidate.bind(m(n));
      n.fieldAddedHandler = n.onFieldAdded.bind(m(n));
      n.elementNotValidatedHandler = n.onElementNotValidated.bind(m(n));
      n.elementValidatingHandler = n.onElementValidating.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.core.on('core.validator.validated', this.validatorHandler).on('core.field.added', this.fieldAddedHandler).on('core.element.notvalidated', this.elementNotValidatedHandler).on('core.element.validating', this.elementValidatingHandler).registerFilter('field-should-validate', this.shouldValidateFilter);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.invalidFields.clear();
        this.core.off('core.validator.validated', this.validatorHandler).off('core.field.added', this.fieldAddedHandler).off('core.element.notvalidated', this.elementNotValidatedHandler).off('core.element.validating', this.elementValidatingHandler).deregisterFilter('field-should-validate', this.shouldValidateFilter);
      }
    }, {
      key: "shouldValidate",
      value: function value(e, t, n, r) {
        var a = (this.opts.enabled === !0 || this.opts.enabled[e] === !0) && this.invalidFields.has(t) && !!this.invalidFields.get(t).length && this.invalidFields.get(t).indexOf(r) === -1;
        return !a;
      }
    }, {
      key: "onValidatorValidated",
      value: function value(e) {
        var t = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [],
            n = t.indexOf(e.validator);
        e.result.valid && n >= 0 ? t.splice(n, 1) : !e.result.valid && n === -1 && t.push(e.validator);
        this.invalidFields.set(e.element, t);
      }
    }, {
      key: "onFieldAdded",
      value: function value(e) {
        e.elements && this.clearInvalidFields(e.elements);
      }
    }, {
      key: "onElementNotValidated",
      value: function value(e) {
        this.clearInvalidFields(e.elements);
      }
    }, {
      key: "onElementValidating",
      value: function value(e) {
        this.clearInvalidFields(e.elements);
      }
    }, {
      key: "clearInvalidFields",
      value: function value(e) {
        var t = this;
        e.forEach(function (e) {
          return t.invalidFields["delete"](e);
        });
      }
    }]);
    return t;
  }(zt),
      fn = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.isFormValid = !1;
      n.opts = Object.assign({}, {
        aspNetButton: !1,
        selector: '[type="submit"]:not([formnovalidate])'
      }, e);
      n.submitHandler = n.handleSubmitEvent.bind(m(n));
      n.buttonClickHandler = n.handleClickEvent.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        var e = this;

        if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
          return;
        }

        var t = this.core.getFormElement();
        this.selectorButtons = [].slice.call(t.querySelectorAll(this.opts.selector));
        this.submitButtons = [].slice.call(t.querySelectorAll('[type="submit"]'));
        t.setAttribute('novalidate', 'novalidate');
        t.addEventListener('submit', this.submitHandler);
        this.hiddenClickedEle = document.createElement('input');
        this.hiddenClickedEle.setAttribute('type', 'hidden');
        t.appendChild(this.hiddenClickedEle);
        this.submitButtons.forEach(function (t) {
          t.addEventListener('click', e.buttonClickHandler);
        });
      }
    }, {
      key: "uninstall",
      value: function value() {
        var e = this,
            t = this.core.getFormElement();
        t instanceof HTMLFormElement && t.removeEventListener('submit', this.submitHandler);
        this.submitButtons.forEach(function (t) {
          t.removeEventListener('click', e.buttonClickHandler);
        });
        this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle);
      }
    }, {
      key: "handleSubmitEvent",
      value: function value(e) {
        this.validateForm(e);
      }
    }, {
      key: "handleClickEvent",
      value: function value(e) {
        var t = e.currentTarget;

        if (t instanceof HTMLElement && this.selectorButtons.indexOf(t) !== -1) {
          if (!(this.opts.aspNetButton && this.isFormValid === !0)) {
            var n = this.core.getFormElement();
            n.removeEventListener('submit', this.submitHandler);
            this.clickedButton = e.target;
            var r = this.clickedButton.getAttribute('name'),
                a = this.clickedButton.getAttribute('value');
            r && a && (this.hiddenClickedEle.setAttribute('name', r), this.hiddenClickedEle.setAttribute('value', a));
            this.validateForm(e);
          }
        }
      }
    }, {
      key: "validateForm",
      value: function value(e) {
        var t = this;
        e.preventDefault();
        this.core.validate().then(function (e) {
          e === 'Valid' && t.opts.aspNetButton && !t.isFormValid && t.clickedButton && (t.isFormValid = !0, t.clickedButton.removeEventListener('click', t.buttonClickHandler), t.clickedButton.click());
        });
      }
    }]);
    return t;
  }(zt),
      mn = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.messages = new Map();
      n.opts = Object.assign({}, {
        placement: 'top',
        trigger: 'click'
      }, e);
      n.iconPlacedHandler = n.onIconPlaced.bind(m(n));
      n.validatorValidatedHandler = n.onValidatorValidated.bind(m(n));
      n.elementValidatedHandler = n.onElementValidated.bind(m(n));
      n.documentClickHandler = n.onDocumentClicked.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.tip = document.createElement('div');
        an(this.tip, c({
          'fv-plugins-tooltip': !0
        }, "fv-plugins-tooltip--".concat(this.opts.placement), !0));
        document.body.appendChild(this.tip);
        this.core.on('plugins.icon.placed', this.iconPlacedHandler).on('core.validator.validated', this.validatorValidatedHandler).on('core.element.validated', this.elementValidatedHandler);
        'click' === this.opts.trigger && document.addEventListener('click', this.documentClickHandler);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.messages.clear();
        document.body.removeChild(this.tip);
        this.core.off('plugins.icon.placed', this.iconPlacedHandler).off('core.validator.validated', this.validatorValidatedHandler).off('core.element.validated', this.elementValidatedHandler);
        'click' === this.opts.trigger && document.removeEventListener('click', this.documentClickHandler);
      }
    }, {
      key: "onIconPlaced",
      value: function value(e) {
        var t = this;
        an(e.iconElement, {
          'fv-plugins-tooltip-icon': !0
        });

        switch (this.opts.trigger) {
          case 'hover':
            e.iconElement.addEventListener('mouseenter', function (n) {
              return t.show(e.element, n);
            });
            e.iconElement.addEventListener('mouseleave', function (e) {
              return t.hide();
            });
            break;

          case 'click':
            ;

          default:
            e.iconElement.addEventListener('click', function (n) {
              return t.show(e.element, n);
            });
            break;
        }
      }
    }, {
      key: "onValidatorValidated",
      value: function value(e) {
        if (!e.result.valid) {
          var t = e.elements,
              n = e.element.getAttribute('type'),
              r = 'radio' === n || 'checkbox' === n ? t[0] : e.element,
              a = typeof e.result.message === 'string' ? e.result.message : e.result.message[this.core.getLocale()];
          this.messages.set(r, a);
        }
      }
    }, {
      key: "onElementValidated",
      value: function value(e) {
        if (e.valid) {
          var t = e.elements,
              n = e.element.getAttribute('type'),
              r = 'radio' === n || 'checkbox' === n ? t[0] : e.element;
          this.messages["delete"](r);
        }
      }
    }, {
      key: "onDocumentClicked",
      value: function value(e) {
        this.hide();
      }
    }, {
      key: "show",
      value: function value(e, t) {
        t.preventDefault();
        t.stopPropagation();

        if (!this.messages.has(e)) {
          return;
        }

        an(this.tip, {
          'fv-plugins-tooltip--hide': !1
        });
        this.tip.innerHTML = "<span class=\"fv-plugins-tooltip__content\">".concat(this.messages.get(e), "</span>");
        var n = t.target,
            r = n.getBoundingClientRect(),
            a = 0,
            l = 0;

        switch (this.opts.placement) {
          case 'top':
            ;

          default:
            a = r.top - r.height;
            l = r.left + r.width / 2 - this.tip.clientWidth / 2;
            break;

          case 'top-left':
            a = r.top - r.height;
            l = r.left;
            break;

          case 'top-right':
            a = r.top - r.height;
            l = r.left + r.width - this.tip.clientWidth;
            break;

          case 'bottom':
            a = r.top + r.height;
            l = r.left + r.width / 2 - this.tip.clientWidth / 2;
            break;

          case 'bottom-left':
            a = r.top + r.height;
            l = r.left;
            break;

          case 'bottom-right':
            a = r.top + r.height;
            l = r.left + r.width - this.tip.clientWidth;
            break;

          case 'left':
            a = r.top + r.height / 2 - this.tip.clientHeight / 2;
            l = r.left - this.tip.clientWidth;
            break;

          case 'right':
            a = r.top + r.height / 2 - this.tip.clientHeight / 2;
            l = r.left + r.width;
            break;
        }

        var i = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            o = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        a += i;
        l += o;
        this.tip.setAttribute('style', "top: ".concat(a, "px; left: ").concat(l, "px"));
      }
    }, {
      key: "hide",
      value: function value() {
        an(this.tip, {
          'fv-plugins-tooltip--hide': !0
        });
      }
    }]);
    return t;
  }(zt),
      gn = function (e) {
    u(t, e);

    function t(e) {
      var n;
      i(this, t);
      n = g(this, d(t).call(this, e));
      n.handlers = [];
      n.timers = new Map();

      n.ieVersion = function () {
        var e = 3,
            t = document.createElement('div'),
            n = t.all || [];

        while (t.innerHTML = '<!--[if gt IE ' + ++e + ']><br><![endif]-->', n[0]) {
          ;
        }

        ;
        return e > 4 ? e : document.documentMode;
      }();

      var r = document.createElement('div');
      n.defaultEvent = n.ieVersion === 9 || !('oninput' in r) ? 'keyup' : 'input';
      n.opts = Object.assign({}, {
        delay: 0,
        event: n.defaultEvent,
        threshold: 0
      }, e);
      n.fieldAddedHandler = n.onFieldAdded.bind(m(n));
      n.fieldRemovedHandler = n.onFieldRemoved.bind(m(n));
      return n;
    }

    s(t, [{
      key: "install",
      value: function value() {
        this.core.on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
      }
    }, {
      key: "uninstall",
      value: function value() {
        this.handlers.forEach(function (e) {
          return e.element.removeEventListener(e.event, e.handler);
        });
        this.handlers = [];
        this.timers.forEach(function (e) {
          return window.clearTimeout(e);
        });
        this.timers.clear();
        this.core.off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
      }
    }, {
      key: "prepareHandler",
      value: function value(e, t) {
        var n = this;
        t.forEach(function (t) {
          var r = [];

          switch (!0) {
            case !!n.opts.event && n.opts.event[e] === !1:
              r = [];
              break;

            case !!n.opts.event && !!n.opts.event[e]:
              r = n.opts.event[e].split(' ');
              break;

            case 'string' === typeof n.opts.event && n.opts.event !== n.defaultEvent:
              r = n.opts.event.split(' ');
              break;

            default:
              var i = t.getAttribute('type');
              var l = t.tagName.toLowerCase();
              var a = 'radio' === i || 'checkbox' === i || 'file' === i || 'select' === l ? 'change' : n.ieVersion >= 10 && t.getAttribute('placeholder') ? 'keyup' : n.defaultEvent;
              r = [a];
              break;
          }

          r.forEach(function (r) {
            var a = function a(r) {
              return n.handleEvent(r, e, t);
            };

            n.handlers.push({
              element: t,
              event: r,
              field: e,
              handler: a
            });
            t.addEventListener(r, a);
          });
        });
      }
    }, {
      key: "handleEvent",
      value: function value(e, t, n) {
        var r = this;

        if (this.exceedThreshold(t, n) && this.core.executeFilter('plugins-trigger-should-validate', !0, [t, n])) {
          var a = function a() {
            return r.core.validateElement(t, n).then(function (a) {
              r.core.emit('plugins.trigger.executed', {
                element: n,
                event: e,
                field: t
              });
            });
          },
              l = this.opts.delay[t] || this.opts.delay;

          if (l === 0) a();else {
            var i = this.timers.get(n);
            i && window.clearTimeout(i);
            this.timers.set(n, window.setTimeout(a, l * 1e3));
          }
        }
      }
    }, {
      key: "onFieldAdded",
      value: function value(e) {
        this.handlers.filter(function (t) {
          return t.field === e.field;
        }).forEach(function (e) {
          return e.element.removeEventListener(e.event, e.handler);
        });
        this.prepareHandler(e.field, e.elements);
      }
    }, {
      key: "onFieldRemoved",
      value: function value(e) {
        this.handlers.filter(function (t) {
          return t.field === e.field && e.elements.indexOf(t.element) >= 0;
        }).forEach(function (e) {
          return e.element.removeEventListener(e.event, e.handler);
        });
      }
    }, {
      key: "exceedThreshold",
      value: function value(e, t) {
        var n = this.opts.threshold[e] === 0 || this.opts.threshold === 0 ? !1 : this.opts.threshold[e] || this.opts.threshold;

        if (!n) {
          return !0;
        }

        var r = t.getAttribute('type');

        if (['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit'].indexOf(r) !== -1) {
          return !0;
        }

        var a = this.core.getElementValue(e, t);
        return a.length >= n;
      }
    }]);
    return t;
  }(zt),
      pn = {
    Alias: Xt,
    Aria: Qt,
    Declarative: qt,
    DefaultSubmit: $t,
    Dependency: jt,
    Excluded: en,
    FieldStatus: tn,
    Framework: cn,
    Icon: un,
    Message: sn,
    Sequence: dn,
    SubmitButton: fn,
    Tooltip: mn,
    Trigger: gn
  };

  function hn(e, t) {
    return e.classList ? e.classList.contains(t) : new RegExp("(^| )".concat(t, "( |$)"), 'gi').test(e.className);
  }

  var vn = {
    call: C,
    classSet: an,
    closest: on,
    fetch: D,
    format: A,
    hasClass: hn,
    isValidDate: F
  },
      An = {};
  e.Plugin = zt;
  e.algorithms = l;
  e.filters = _t;
  e.formValidation = Wt;
  e.locales = An;
  e.plugins = pn;
  e.utils = vn;
  e.validators = Yt;
  Object.defineProperty(e, '__esModule', {
    value: !0
  });
});

/***/ }),

/***/ "./assets/admin/plugins/jquery-idletimer/idle-timer.min.js":
/*!*****************************************************************!*\
  !*** ./assets/admin/plugins/jquery-idletimer/idle-timer.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Idle Timer v1.1.0 2016-03-21 | https://github.com/thorst/jquery-idletimer | (c) 2016 Paul Irish | Licensed MIT */
!function (a) {
  a.idleTimer = function (b, c) {
    var d;
    "object" == _typeof(b) ? (d = b, b = null) : "number" == typeof b && (d = {
      timeout: b
    }, b = null), c = c || document, d = a.extend({
      idle: !1,
      timeout: 3e4,
      events: "mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove"
    }, d);

    var e = a(c),
        f = e.data("idleTimerObj") || {},
        g = function g(b) {
      var d = a.data(c, "idleTimerObj") || {};
      d.idle = !d.idle, d.olddate = +new Date();
      var e = a.Event((d.idle ? "idle" : "active") + ".idleTimer");
      a(c).trigger(e, [c, a.extend({}, d), b]);
    },
        h = function h(b) {
      var d = a.data(c, "idleTimerObj") || {};

      if (("storage" !== b.type || b.originalEvent.key === d.timerSyncId) && null == d.remaining) {
        if ("mousemove" === b.type) {
          if (b.pageX === d.pageX && b.pageY === d.pageY) return;
          if ("undefined" == typeof b.pageX && "undefined" == typeof b.pageY) return;
          var e = +new Date() - d.olddate;
          if (200 > e) return;
        }

        clearTimeout(d.tId), d.idle && g(b), d.lastActive = +new Date(), d.pageX = b.pageX, d.pageY = b.pageY, "storage" !== b.type && d.timerSyncId && "undefined" != typeof localStorage && localStorage.setItem(d.timerSyncId, d.lastActive), d.tId = setTimeout(g, d.timeout);
      }
    },
        i = function i() {
      var b = a.data(c, "idleTimerObj") || {};
      b.idle = b.idleBackup, b.olddate = +new Date(), b.lastActive = b.olddate, b.remaining = null, clearTimeout(b.tId), b.idle || (b.tId = setTimeout(g, b.timeout));
    },
        j = function j() {
      var b = a.data(c, "idleTimerObj") || {};
      null == b.remaining && (b.remaining = b.timeout - (+new Date() - b.olddate), clearTimeout(b.tId));
    },
        k = function k() {
      var b = a.data(c, "idleTimerObj") || {};
      null != b.remaining && (b.idle || (b.tId = setTimeout(g, b.remaining)), b.remaining = null);
    },
        l = function l() {
      var b = a.data(c, "idleTimerObj") || {};
      clearTimeout(b.tId), e.removeData("idleTimerObj"), e.off("._idleTimer");
    },
        m = function m() {
      var b = a.data(c, "idleTimerObj") || {};
      if (b.idle) return 0;
      if (null != b.remaining) return b.remaining;
      var d = b.timeout - (+new Date() - b.lastActive);
      return 0 > d && (d = 0), d;
    };

    if (null === b && "undefined" != typeof f.idle) return i(), e;
    if (null === b) ;else {
      if (null !== b && "undefined" == typeof f.idle) return !1;
      if ("destroy" === b) return l(), e;
      if ("pause" === b) return j(), e;
      if ("resume" === b) return k(), e;
      if ("reset" === b) return i(), e;
      if ("getRemainingTime" === b) return m();
      if ("getElapsedTime" === b) return +new Date() - f.olddate;
      if ("getLastActiveTime" === b) return f.lastActive;
      if ("isIdle" === b) return f.idle;
    }
    return e.on(a.trim((d.events + " ").split(" ").join("._idleTimer ")), function (a) {
      h(a);
    }), d.timerSyncId && a(window).bind("storage", h), f = a.extend({}, {
      olddate: +new Date(),
      lastActive: +new Date(),
      idle: d.idle,
      idleBackup: d.idle,
      timeout: d.timeout,
      remaining: null,
      timerSyncId: d.timerSyncId,
      tId: null,
      pageX: null,
      pageY: null
    }), f.idle || (f.tId = setTimeout(g, f.timeout)), a.data(c, "idleTimerObj", f), e;
  }, a.fn.idleTimer = function (b) {
    return this[0] ? a.idleTimer(b, this[0]) : this;
  };
}(jQuery);

/***/ }),

/***/ "./assets/admin/sass/style.scss":
/*!**************************************!*\
  !*** ./assets/admin/sass/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},[["./assets/admin/js/admin_main.js","runtime","vendors~admin"]]]);