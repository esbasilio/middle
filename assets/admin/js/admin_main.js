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
import '../sass/style.scss';

// Jquery - jQuery is a popular and feature-rich JavaScript library. Learn more: https://jquery.com/
window.jQuery = window.$ = require('jquery');

// Bootstrap - The most popular framework that Metronic uses as the foundation. Learn more: http://getbootstrap.com
require('bootstrap');

// Popper.js - Tooltip & Popover Positioning Engine used by Bootstrap. Learn more: https://popper.js.org
window.Popper = require('popper.js').default;

// Wnumb - Number & Money formatting. Learn more: https://refreshless.com/wnumb/
window.wNumb = require('wnumb');

// Moment - Parse, validate, manipulate, and display dates and times in JavaScript. Learn more: https://momentjs.com/
window.moment = require('moment');

// ES6-Shim - ECMAScript 6 compatibility shims for legacy JS engines.  Learn more: https://github.com/paulmillr/es6-shim
require("es6-shim/es6-shim.min.js");

// Perfect-Scrollbar - Minimalistic but perfect custom scrollbar plugin.  Learn more:  https://github.com/mdbootstrap/perfect-scrollbar
window.PerfectScrollbar = require('perfect-scrollbar/dist/perfect-scrollbar');

// //////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// ///  Optional Plugins Includes(you can remove or add)  ///////////////
// //////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////

// Sticky-js - A library for sticky elements written in vanilla javascript. Learn more: https://rgalus.github.io/sticky-js/
window.Sticky = require('sticky-js');

// Apexcharts - mBdern charting library that helps developers to create beautiful and interactive visualizations for web pages: https://apexcharts.com/
window.ApexCharts = require('apexcharts/dist/apexcharts.min.js');

// FormValidation - Best premium validation library for JavaScript. Zero dependencies. Learn more: https://formvalidation.io/
window.FormValidation = require("../plugins/formvalidation/dist/js/FormValidation.full.min.js");
window.FormValidation.plugins.Bootstrap = require("../plugins/formvalidation/dist/amd/plugins/Bootstrap.js").default;

// jQuery BlockUI - The jQuery BlockUI Plugin lets you simulate synchronous behavior when using AJAX: http://malsup.com/jquery/block/
require('block-ui/jquery.blockUI.js');

// Tempus Dominus - The Tempus Dominus provides a flexible datetimepicker widget in the Bootstrap style: https://tempusdominus.github.io/bootstrap-4/
require('tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4');
require('./vendors/plugins/tempusdominus-bootstrap-4.init.js');

// Typeahead.js - a flexible JavaScript library that provides a strong foundation for building robust typeaheads: https://twitter.github.io/typeahead.js/
window.Bloodhound = require('typeahead.js/dist/typeahead.bundle.js');

// Handlebars - provides the power necessary to let you build semantic templates effectively with no frustration. Mustache-compatible: https://handlebarsjs.com/
window.Handlebars = require('handlebars/dist/handlebars.js');

// Inputmask - is a javascript library which creates an input mask: https://github.com/RobinHerbots/Inputmask
require('inputmask/dist/jquery.inputmask.bundle.js');
require('inputmask/dist/inputmask/inputmask.date.extensions.js');
require('inputmask/dist/inputmask/inputmask.numeric.extensions.js');

// noUiSlider - is a lightweight range slider with multi-touch support and a ton of features. It supports non-linear ranges, requires no external dependencies: https://refreshless.com/nouislider/
window.noUiSlider = require('nouislider/distribute/nouislider.js');

// Owl Carousel - Touch enabled jQuery plugin that lets you create a beautiful responsive carousel slider: https://owlcarousel2.github.io/OwlCarousel2/
require('owl.carousel/dist/owl.carousel');

// The autosize - function accepts a single textarea element, or an array or array-like object (such as a NodeList or jQuery collection) of textarea elements: https://www.jacklmoore.com/autosize/
window.autosize = require('autosize/dist/autosize.js');

// Clipboard - Copy text to the clipboard shouldn't be hard. It shouldn't require dozens of steps to configure or hundreds of KBs to load: https://clipboardjs.com/
window.ClipboardJS = require('clipboard/dist/clipboard.min.js');

// DropzoneJS -  is an open source library that provides drag'n'drop file uploads with image previews: https://www.dropzonejs.com/
window.Dropzone = require('dropzone/dist/dropzone.js');
require('./vendors/plugins/dropzone.init.js');

// Quill - is a free, open source WYSIWYG editor built for the modern web. Completely customize it for any need with its modular architecture and expressive API: https://quilljs.com/
window.Quill = require('quill/dist/quill.js');


// Markdown - A Markdown parser for javascript: https://github.com/evilstreak/markdown-js
require('markdown/lib/markdown.js');

// Bootstrap Markdown - Bootstrap plugin for markdown editing: https://github.com/toopay/bootstrap-markdown
require('bootstrap-markdown/js/bootstrap-markdown.js');
require('./vendors/plugins/bootstrap-markdown.init.js');

// Bootstrap Notify - This plugin helps to turn standard bootstrap alerts into "growl" like notifications: http://bootstrap-notify.remabledesigns.com/
require('bootstrap-notify/bootstrap-notify.min.js');
require('./vendors/plugins/bootstrap-notify.init.js');

// Toastr - is a Javascript library for non-blocking notifications. jQuery is required. The goal is to create a simple core library that can be customized and extended: https://github.com/CodeSeven/toastr
window.toastr = require('toastr/build/toastr.min.js');

// Dual Listbox - Make your multi select pretty and easy to use with only javascript: https://github.com/maykinmedia/dual-listbox
window.DualListbox = require('dual-listbox').default;

// Bootstrap Session Timeout - Session timeout and keep-alive control with a nice Bootstrap warning dialog: https://github.com/orangehill/bootstrap-session-timeout
window.sessionTimeout = require('../plugins/bootstrap-session-timeout/dist/bootstrap-session-timeout.min.js');

// JQuery Idletimer - provides you a way to monitor user activity with a page: https://github.com/thorst/jquery-idletimer
require('../plugins/jquery-idletimer/idle-timer.min.js');

// Waypoints - is the easiest way to trigger a function when you scroll to an element: http://imakewebthings.com/waypoints/
require('waypoints/lib/jquery.waypoints.js');

// Counter-Up - is a jQuery plugin that animates a number from zero (counting up towards it). It supports counting up: https://github.com/bfintal/Counter-Up
require('counterup/jquery.counterup.js');

// ES6 Promise Polyfill - This is a polyfill of the ES6 Promise: https://github.com/lahmatiy/es6-promise-polyfill
require('es6-promise-polyfill/promise.min.js');

// Sweetalert2 - a beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes: https://sweetalert2.github.io/
window.Swal = window.swal = require('sweetalert2/dist/sweetalert2.min.js');
require('./vendors/plugins/sweetalert2.init.js');

// JQuery Repeater - Create a repeatable group of input elements: https://github.com/DubFriend/jquery.repeater
require('jquery.repeater');

require("./components/_forms.js")

// Keenthemes' plugins
window.KTUtil       = require('./components/util.js');
window.KTApp        = require('./components/app.js');
window.KTCard       = require('./components/card.js');
window.KTCookie     = require('./components/cookie.js');
window.KTDialog     = require('./components/dialog.js');
window.KTHeader     = require('./components/header.js');
window.KTImageInput = require('./components/image-input.js');
window.KTMenu       = require('./components/menu.js');
window.KTOffcanvas  = require('./components/offcanvas.js');
window.KTScrolltop  = require('./components/scrolltop.js');
window.KTToggle     = require('./components/toggle.js');
window.KTWizard     = require('./components/wizard.js');



// Metronic layout base js
window.KTLayoutAside         = require('./layout/base/aside.js');
window.KTLayoutAsideMenu     = require('./layout/base/aside-menu.js');
window.KTLayoutAsideToggle   = require('./layout/base/aside-toggle.js');
window.KTLayoutBrand         = require('./layout/base/brand.js');
window.KTLayoutContent       = require('./layout/base/content.js');
window.KTLayoutFooter        = require('./layout/base/footer.js');
window.KTLayoutHeader        = require('./layout/base/header.js');
window.KTLayoutHeaderMenu    = require('./layout/base/header-menu.js');
window.KTLayoutHeaderTopbar  = require('./layout/base/header-topbar.js');
window.KTLayoutStickyCard    = require('./layout/base/sticky-card.js');
window.KTLayoutStretchedCard = require('./layout/base/stretched-card.js');
window.KTLayoutSubheader     = require('./layout/base/subheader.js');

// Metronic layout extended js
window.KTLayoutChat               = require('./layout/extended/chat.js');
window.KTLayoutDemoPanel          = require('./layout/extended/demo-panel.js');
window.KTLayoutExamples           = require('./layout/extended/examples.js');
window.KTLayoutQuickActions       = require('./layout/extended/quick-actions.js');
window.KTLayoutQuickCartPanel     = require('./layout/extended/quick-cart.js');
window.KTLayoutQuickNotifications = require('./layout/extended/quick-notifications.js');
window.KTLayoutQuickPanel         = require('./layout/extended/quick-panel.js');
window.KTLayoutQuickSearch        = require('./layout/extended/quick-search.js');
window.KTLayoutQuickUser          = require('./layout/extended/quick-user.js');
window.KTLayoutScrolltop          = require('./layout/extended/scrolltop.js');
window.KTLayoutSearch             = window.KTLayoutSearchOffcanvas = require('./layout/extended/search.js');

require('./layout/initialize.js');
require('./pages/widgets.js');

require('./components/_ajax.js');
window.Datatables = require('./components/_datatable.js');

require('./pages/features/miscellaneous/blockui.js');
require('./pages/widgets.js');
require('./pages/features/charts/apexcharts.js');

// require('./pages/custom/login/login-general.js');
$(window).on('load', function() {
    $.when(setTimeout(function() { KTApp.unblockPage(); }, 500)).done(function() {
	    KTApp.blockPage({
			overlayColor : '#000000',
			state        : 'primary',
			message      : 'Procesando...',
			size 		 : 'lg'
        });
	});
});

console.log('Hello Webpack Encore! Edit me in assets/admin/js/admin_main.js');