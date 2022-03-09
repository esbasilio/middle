/*
* @Author: Alberto Urbaez
* @Date:   2020-03-21 20:20:16
* @Last Modified by:   Alberto Urbaez
* @Last Modified time: 2020-11-22 17:22:38
*/

// ACTION CLICK
var events = function() {
    $('body').on('click', 'button[data-toggle=modal-ajax]', function(event){
        event.preventDefault();
        callModalToAjax($(this));
        $(this).unbind(event);
    });

    $('body').on('click', 'button[data-toggle=delete-ajax]', function(event){
        event.preventDefault();
        deleteConfirAjax($(this));
        $(this).unbind(event);
    });

    $('body').on('click', 'a[data-toggle=modal-ajax]', function(event){
        event.preventDefault();
        callModalToAjax($(this));
        $(this).unbind(event);
    });
        
    $(document).on('click', "#submitModalForm", function(event) {
        const form = $('section#ajax-results').children('.modal-body').children("form");
        form.parsley().validate();
        form.submit();
        // $(this).unbind(event);
    });

    $("#generateToken").click(function(event){
        $token = generateToken();
    });
};

var generateToken = function() {
    $url = `${$(location).attr('protocol')}//${$(location).attr('host')}/api/v1/generate_token`;
    console.log($url);
    $.when(setTimeout(function() { KTApp.unblockPage(); }, 500)).done(function() {
        KTApp.blockPage({
            overlayColor : '#000000',
            state        : 'primary',
            message      : 'Procesando...',
            size         : 'lg'
        });
    });
    $.ajax({
        url: `${$url}`,
        type: "GET",
        dataType: "json",
        success: function (data){
            $('input[data-target=generate-token]').val(data.token);
        }
    });
};

// Accion de abrir contenido en modal Ajax
var deleteConfirAjax = function(element) {
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
    }).then(function(result) {
        if (result.value) {
        	deleteAjax($(element).attr('data-url'),$(element).attr("entity-token"),$(element).attr('entity-data'));
        }
    });
};

// Accion de abrir contenido en modal Ajax
var callModalToAjax = function(element) {
    
    if (!$(element).attr('data-url')) {
        return;
    }

    $.ajax({
        url: $(element).attr('data-url'),
        type: "GET",
        dataType: "html",
        async: true,
    })
    .done(function(data) {
        $('section#ajax-results').html(data);
        $form = $('section#ajax-results').children('.modal-body').children("form");
        $form.attr("action",$(element).attr('data-url'));
        $form.attr("novalidate","novalidate");
        // form.formSwitcher.init();
        // modal.default.init();
        $(".select2").select2();
        Default.init();
        $('#modal-dialog').modal('show');
    })
    .fail(function() {
        console.log("error");
        $('section#ajax-results').html('error');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha ocurrido un error inesperado al tratar de abrir el modal!',
          footer: '<a href>Why do I have this issue?</a>'
        })
    })
    .always(function() {
        $(window).trigger('load');
        console.log("complete");
    });
};

// Accion de eliminar via ajax
var deleteAjax = function(url, token, data) {
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
        success: function (data)
        {
		    Swal.fire({
		        icon: "success",
		        title: "Registro eliminado con exito!",
		        showConfirmButton: false,
		        timer: 900
		    });

            setTimeout(function() { 
                location.reload();
            }, 1000);
        }
    });
};

var Default = function () {
    "use strict";
    return {
        init: function () {
            this.events();
        },
        events: function() {
            events();
        }
    };
}();

module.exports = {
    default: Default
}

// Initialize KTApp class on document ready
$(document).ready(function() {
    Default.init();
});