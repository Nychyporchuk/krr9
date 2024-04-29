document.addEventListener("DOMContentLoaded", function (){
    new WOW({
        animateClass:'animate__animated',
    }).init();
    $('.slider').slick({

    });
    $( function() {
        $( "#accordion" ).accordion();
    } );

    $('form').submit((e) => {
        e.preventDefault();

        let firstName = $('#validationCustom01').val();
        let lastName = $('#validationCustom02').val();
        let phone = $('#validationCustomPhone').val();
        let country = $('#validationСountry').val();
        let zip = $('#validationZip').val();
        let address = $('#validationAddress').val();


        if (firstName === '' || lastName === '' || phone === '' || country === '' || zip === '' || address === '') {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }


        if (!/^\d{6}$/.test(zip)) {
            alert('Пожалуйста, введите корректный индекс. Индекс должен содержать ровно 6 цифр.');
            return;
        }


        $('.order-form').hide();
        $('.order-thanks').show();
    });
    document.querySelectorAll('.image-container').forEach(function(imageContainer) {
        imageContainer.addEventListener('click', function() {

            this.classList.toggle('wow');
            this.classList.toggle('full-screen');
        });
    });
});