$(document).ready(function () {
    $('.modal').modal({
        dismissible: true
    });
    $(document).on("click", ".shiny-material-modal-trigger", function () {
        $(this).trigger("shown");
    });
});
