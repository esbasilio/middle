/*
* @Author: Alberto Urbaez
* @Date:   2020-11-22 15:52:29
* @Last Modified by:   Alberto Urbaez
* @Last Modified time: 2020-11-28 13:53:34
*/
"use strict";

const { console } = require('es6-shim/es6-shim.min');

// require('./components/datatable/core.datatable.js');
// require('./components/datatable/datatable.checkbox.js');
// require('./components/datatable/datatable.rtl.js');

require('datatables.net'); 
require('datatables.net-bs4'); 
// require('datatables.net-fixedheader'); 
// require('datatables.net-select'); 
// require('datatables.net-buttons'); 
require('datatables.net-select-bs4'); 
require('datatables.net-buttons-bs4'); 
require('datatables.net-responsive-bs4');

// require('datatables.net-plugins/i18n/Spanish.lang'); 
// require('datatables.net-plugins/i18n/Portuguese-Brasil.lang'); 
// require('datatables.net-plugins/i18n/English.lang'); 
// 
require('datatables.net/js/jquery.dataTables.js');
// require('datatables.net-bs4/js/dataTables.bootstrap4.js');
// require('datatables.net-autofill/js/dataTables.autoFill.min.js');
// require('datatables.net-autofill-bs4/js/autoFill.bootstrap4.min.js');
require('jszip/dist/jszip.min.js');
require('pdfmake/build/pdfmake.min.js');
require('pdfmake/build/vfs_fonts.js');
require('datatables.net-buttons/js/dataTables.buttons.min.js');
require('datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');

require('datatables.net-colreorder/js/dataTables.colReorder.min.js');
// require('datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js');
// require('datatables.net-fixedheader/js/dataTables.fixedHeader.min.js');
// require('datatables.net-keytable/js/dataTables.keyTable.min.js');
// require('datatables.net-responsive/js/dataTables.responsive.min.js');
// require('datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js');
// require('datatables.net-rowgroup/js/dataTables.rowGroup.min.js');
// require('datatables.net-rowreorder/js/dataTables.rowReorder.min.js');
// require('datatables.net-scroller/js/dataTables.scroller.min.js');
// require('datatables.net-select/js/dataTables.select.min.js');

var Datatables = function() {

    var initTableBasic = function() {
        var table = $('table[data-table=basic]');
        table.DataTable({
            responsive: true,
            paging: true,
            // scrollCollapse: true,
            pagingType: 'full_numbers',
            colReorder: true,
            dom:
                // "<'row py-3'<'col-sm-12 col-md-12'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
            lengthMenu: [5, 10, 25, 50],
            pageLength: 10,
            language: {
                'lengthMenu': 'Display _MENU_',
                "zeroRecords": "Nothing found - sorry",
                "infoEmpty": "No records available",
            },
            buttons: [
                'print',
                'copyHtml5',
                'csvHtml5'
            ],
            processing: true,
            // serverSide: true,
            headerCallback: function(thead, data, start, end, display) {
                thead.getElementsByTagName('th')[0].innerHTML = `
                    <label class="checkbox checkbox-single">
                        <input type="checkbox" value="" class="group-checkable"/>
                        <span></span>
                    </label>`;
            },
            columnDefs: [
                {
                    targets: 0,
                    width: '30px',
                    className: 'dt-left',
                    orderable: false,
                    render: function(data, type, full, meta) {
                        return `
                        <label class="checkbox checkbox-single">
                            <input type="checkbox" value="" class="checkable"/>
                            <span></span>
                        </label>`;
                    },
                }
            ]
        });

        // Mshow || hide Columns
        $('a[data-toggle=column-vis]').on( 'click', function (e) {
            e.preventDefault();
            var column = table.DataTable().column($(this).attr('data-column'));
            // Toggle the visibility
            column.visible(!column.visible());
            $(this).attr("data-visible",column.visible());
            if (column.visible() === true) {
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        } );

        $('a[data-toggle=column-vis]').each(function() {
            if ($(this).attr('data-visible') == 'false') {
                table.DataTable().column($(this).attr('data-column')).visible(false);
            }else{
                $(this).addClass('active');
            }
        });
        
        // CHECKABLE
        table.on('change', '.group-checkable', function() {
            var set = $(this).closest('table').find('td:first-child .checkable');
            var checked = $(this).is(':checked');

            $(set).each(function() {
                if (checked) {
                    $(this).prop('checked', true);
                    $(this).closest('tr').addClass('active');
                }
                else {
                    $(this).prop('checked', false);
                    $(this).closest('tr').removeClass('active');
                }
            });
        });

        table.on('change', 'tbody tr .checkbox', function() {
            $(this).parents('tr').toggleClass('active');
        });

        // FILTRADO
        $('input[data-toggle=global_filter]').on( 'keyup click', function () {
            table.DataTable().search($(this).val()).draw();
        } );

        // CLEAR FILTER
        $('button[data-toggle=global_clean_filter]').on('click', function(e) {
            e.preventDefault();
            table.DataTable().search('').draw();
            $('input[data-toggle=global_filter]').val('');
        });

        // EXPORT
        $('a[data-table=export_print]').on('click', function(e) {
            e.preventDefault();
            table.DataTable().button(0).trigger();
        });

        $('a[data-table=export_copy]').on('click', function(e) {
            e.preventDefault();
            table.DataTable().button(1).trigger();
        });

        $('a[data-table=export_csv]').on('click', function(e) {
            e.preventDefault();
            table.DataTable().button(2).trigger();
        });
    };

    return {    
        init: function() {
            initTableBasic();
        },
        
    };
    
}();

var initTableAjax = function(path,columns, columnDefs) {
    var tableajax = $('table[data-table=ajax]');
    tableajax.DataTable({
        responsive: true,
        paging: true,
        // scrollCollapse: true,
        pagingType: 'full_numbers',
        colReorder: true,
        dom:
        // "<'row py-3'<'col-sm-12 col-md-12'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
        lengthMenu: [10, 25, 50],
        pageLength: 10,
        language: {
            'lengthMenu': 'Display _MENU_',
            "zeroRecords": "Nothing found - sorry",
            "infoEmpty": "No records available",
        },
        buttons: [
            'print',
            'copyHtml5',
            'csvHtml5'
        ],
        searchDelay: 500,
        processing: true,
        serverSide: true,
        ajax: {
            url: `${path}`,
            type: 'POST',
            headers: {
                'X-AUTH-TOKEN': _USERTOKEN
            },
            data: {
                user_id: _USERID
                // pagination: { perpage: 50, },
                // columnsDef: [ "name", "stock", "price", "special_price", 'status'],
            },
        },
        columns: columns,
        columnDefs: columnDefs
    });

    // FILTRADO
    $('input[data-toggle=global_filter]').on('keyup', function () {
        tableajax.DataTable().search($(this).val()).draw();
    } );

    // CLEAR FILTER
    $('button[data-toggle=global_clean_filter]').on('click', function(e) {
        e.preventDefault();
        tableajax.DataTable().search('').draw();
        $('input[data-toggle=global_filter]').val('');
    });

    // EXPORT
    $('a[data-table=export_print]').on('click', function(e) {
        e.preventDefault();
        tableajax.DataTable().button(0).trigger();
    });

    $('a[data-table=export_copy]').on('click', function(e) {
        e.preventDefault();
        tableajax.DataTable().button(1).trigger();
    });

    $('a[data-table=export_csv]').on('click', function(e) {
        e.preventDefault();
        tableajax.DataTable().button(2).trigger();
    });



};

var actions = function(actions = null, data, extra) {
    if (actions != null) {
        var response = '';
        actions.forEach(action => {
            // console.log(action);
            switch (action.view_type) {
                case "view":
                    response += `
                        <a href="${_HOST}${replaceParameters(action.url, [{"{id}":data.id}])}" class="btn btn-sm btn-icon btn-text-${action.color} btn-hover-light-${action.color} font-weight-bold mr-2" title="${action.name}">
                            <i class="${action.icon}"></i>
                        </a>
                    `;
                    break;
                case "modal":
                    response += `
                        <button data-toggle="${action.name == 'delete' ? 'delete-ajax' : 'modal-ajax' }" data-url="${_HOST}${replaceParameters(action.url, [{"{id}":data.id}])}" entity-token="${extra}" entity-data="${data.id}" class="btn btn-sm btn-icon btn-text-${action.color} btn-hover-light-${action.color} font-weight-bold mr-2" title="${action.name}">
                            <i class="${action.icon}"></i>
                        </button>
                    `;
                    break;
                default:
                    response += `
                        <a href="${_HOST}${replaceParameters(action.url, [{"{id}":data.id}])}" class="btn btn-sm btn-icon btn-text-${action.color} btn-hover-light-${action.color} font-weight-bold mr-2" title="${action.name}">
                            <i class="${action.icon}"></i>
                        </a>
                    `;
                    break;
            }
        });
    }
    return response;
};

var render_cel = function(type, data) {
    if (actions != null) {
        switch (type) {
            case "icon":
                return `<i class="${data.icon}"></i>`;
            case "color":
                return `<span class="label label-${data.color} label-inline mr-2">${data.color}</span>`;
            default:
                return `
                    <a href="${_HOST}${replaceParameters(action.url, [{"{id}":data.id}])}" class="btn btn-xs btn-icon btn-text-${action.color} btn-hover-light-${action.color} font-weight-bold mr-2" title="${action.name}">
                        <i class="${action.icon}"></i>
                    </a>
                `;
        }
    }
    return response;
};

module.exports = {
    actions: actions,
    render_cel: render_cel,
    initTableAjax : initTableAjax
}

jQuery(document).ready(function() {
    Datatables.init();
});