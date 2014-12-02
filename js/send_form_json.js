$(document).ready(function(){
    function submitFormDataAJAX (url, formData, callback) {
        $.ajax({
            url: url,
            data: formData,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data) {
                callback(data, null);
            },
            error: function(err) {
                callback(null, err);
            }
        });
    };

    $("#contact").submit(function() {
        var $form = $(this),
            $loadingMsg = $('.loading'),
            url = $form.attr('action'),
            formData = new FormData( $form[0] );

        //$loadingMsg.show();

        submitFormDataAJAX(url, formData, function(data, err) {
            if (err) 
                return alert("Error...");
            alert("Cargado correctamente.")
            $('#contact')[0].reset();
           // $loadingMsg.hide();
        });

        return false; // avoid to execute the actual submit of the form.
    });

});