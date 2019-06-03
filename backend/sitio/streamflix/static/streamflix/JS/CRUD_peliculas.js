$(document).ready(function () {
    // Para pasar la url al form-popup
    $('.btn_editar').click(function () {
        var url = $(this).attr('data-url');

        $(".thisForm").attr("action", url);
    });
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}