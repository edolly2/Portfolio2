$(document).ready(() => {
    $('.form-btn').on('click', () => {
        $('#myModal').show();
        $('.modal-content').slideDown(1000);
    });

    $('#submit').on('click', (event) => {
        $('#myModal').hide();
    });
    $('#submit').on('click', () => {
        alert('form sent');
    });

});