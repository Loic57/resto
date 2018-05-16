document.addEventListener('DOMContentLoaded', function() {


    /********** Open/Close modal boxs **********/
    if(document.getElementsByClassName("page-modals").length > 0) {
        var triggerOpenModal = document.getElementsByClassName("trigger-open-modal");
        var pageModal = document.getElementsByClassName("page-modals");
        var boxModal = pageModal[0].getElementsByClassName("box-modal");
        var triggerCloseModal = document.getElementsByClassName('trigger-close-modal');


        var openModal = function() {

            var data = this.dataset.modal;

            pageModal[0].classList.add("show");

            for (var i = 0 ; i < boxModal.length; i++) {
                if(boxModal[i].dataset.modal == data) {
                    boxModal[i].classList.add('show');
                }
            }
        };

        for (var i = 0 ; i < triggerOpenModal.length; i++) {
           triggerOpenModal[i].addEventListener('click' , openModal);
        }



        var closeModal = function() {

            pageModal[0].classList.remove('show');

            for (var i = 0 ; i < boxModal.length; i++) {
                boxModal[i].classList.remove('show');
            }
        };

        for (var i = 0 ; i < triggerCloseModal.length; i++) {
           triggerCloseModal[i].addEventListener('click' , closeModal);
        }
      }
    /********** Open/Close modal boxs **********/



    /********** CAROUSEL **********/
        var menuCarousel = tns({
            container: '#menuCarousel',
            controlsContainer: "#customize-controls",
            mouseDrag: true,
            responsive:{
                0:{
                    items:3,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:false
                }
            }
        });

        var sliderStepsCommande = tns({
            container: '#stepsCommandeCarousel',
            mouseDrag: true,
            loop: true,
            controls: false,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                    gutter:0,

                },
                1000:{
                    items:3,
                    nav:false,
                    gutter:20

                }
            }
        });
    /********** CAROUSEL **********/



    /********** Inputs underline animation **********/
        var inputs = document.querySelectorAll('.form-1 textarea, .form-1 input');

        var focusInAnimation = function() {
            this.parentNode.classList.add('active');
        };

        var focusOutAnimation = function() {
            if(this.value == "")
                this.parentNode.classList.remove('active');
        };

        for (var i = 0 ; i < inputs.length; i++) {
            inputs[i].addEventListener('focusin', focusInAnimation);
            inputs[i].addEventListener('focusout', focusOutAnimation);
        }
    /********** Inputs underline animation **********/


    /********** Custom Input Number **********/
       if(document.getElementById("numberQuantite") != null) {
            var customInputNumberField = document.getElementById("numberQuantite");
            var buttonCustomInputNumber = customInputNumberField.getElementsByTagName('button');
            var quantiteInput = document.getElementById("quantiteInput");
            var priceSingleFood = document.getElementById("priceSingleFood");

            var buttonInputNumber = function() {
                var quantiteInputValue = quantiteInput.value;

                if(this.className == 'minus') {
                    quantiteInputValue = parseInt(quantiteInputValue) - 1;

                    priceSingleFood.innerHTML = (parseFloat(priceSingleFood.innerHTML.replace(',', '.')) - parseFloat(priceSingleFood.dataset.price)).toFixed(2).replace(".", ",") + " €";

                    if(quantiteInputValue < 0) {
                        quantiteInputValue = 0;
                        priceSingleFood.innerHTML = "0,00 €";
                    }
                }

                else if(this.className == 'plus') {
                    quantiteInputValue = parseInt(quantiteInputValue) + 1;

                    priceSingleFood.innerHTML = (parseFloat(priceSingleFood.innerHTML.replace(',', '.')) + parseFloat(priceSingleFood.dataset.price)).toFixed(2).replace(".", ",") + " €";
                }

                quantiteInput.setAttribute('value', quantiteInputValue);
            };

            var keyUpInputNumber = function() {
                var quantiteInputValue = quantiteInput.value;

                quantiteInput.onkeydown = function(e) {
                    if(!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || e.keyCode == 8)) {
                        return false;
                    }
                }
                priceSingleFood.innerHTML = parseFloat(priceSingleFood.dataset.price * quantiteInputValue).toFixed(2).replace(".", ",") + " €";
            };




            quantiteInput.addEventListener('keyup', keyUpInputNumber);

            for (var i = 0 ; i < buttonCustomInputNumber.length; i++) {
               buttonCustomInputNumber[i].addEventListener('click', buttonInputNumber);
            }
        }

    /********** Custom Input Number **********/




}, false);



    /*var ChangeValuePlus = function(buttonPlus) {

        var quantiteInput = buttonPlus.previousElementSibling;
        var newquantiteInputValue =  parseInt(quantiteInput.value) + 1;

        quantiteInput.value = newquantiteInputValue;

        var price = buttonPlus.parentElement.parentElement.nextElementSibling.children;
        price.innerHTML = (parseFloat(price.innerHTML.replace(',', '.')) + parseFloat(price.dataset.price)).toFixed(2).replace(".", ",") + " €";
    }

    var ChangeValueMinus = function(buttonMinus) {

        var quantiteInput = buttonMinus.nextElementSibling;
        var newquantiteInputValue =  parseInt(quantiteInput.value) - 1;

        if(newquantiteInputValue <= 0)
            quantiteInput.value = 0;
        else
            quantiteInput.value = newquantiteInputValue;
    }*/
