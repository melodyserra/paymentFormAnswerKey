document.addEventListener("DOMContentLoaded", function() {

    document
        .getElementById("payment-form")
        .addEventListener("submit", function(event) {
            event.preventDefault();

            //Assign variables for first and last name
            var firstName = document
                .getElementById("firstname")
                .value;

            var lastName = document
                .getElementById("lastname")
                .value;

            //Check to make sure first and last name are not blank
            if (firstName === "" || lastName === "") {
                alert("Please enter a first name and a last name!");
                return;
            }

            // Check to make sure the cc number is 16 digits and only numbers:

            //parseInt() - Takes a string and converts it to an integer OR if it is not a number returns NaN

            //isNaN() - A function that takes a value and returns true or false based on if the value is NOT a number

            //.length - A property that gives you the length of a string

            //Step 1: Use .length to check that CC number is 16 digits

            //Step 2: Convert string from form into number using parseInt

            //Step 3: Use isNaN to check if the resulting number is a number

            var cc = document
                .getElementById("credit-card")
                .value;

            if (cc.length !== 16) {
                alert("Please enter 16 digits for credit card number");
                return;
            }

            var ccNum = parseInt(cc);

            if (isNaN(ccNum)) {
                alert("Please enter only numbers for credit card");
                return;
            }

            // Check expiration date is formatted as MM/DD numbers only
            var expiration = document
                .getElementById("expiration")
                .value;

            var exArray = expiration.split("/");

            var exMonth = exArray[0];
            var exDay = exArray[1];

            if (exMonth.length !== 2 || exDay.length !== 2) {
                alert("Please enter your expiration in format MM/DD");
                return;
            }

            var exMonthInt = parseInt(exMonth);
            var exDayInt = parseInt(exDay);

            if (isNaN(exMonthInt) || isNaN(exDayInt)) {
                alert("Please enter only numbers for expiration date");
                return;
            }

            // Check CVC: 3 Digits only numbers
            var cvc = document
                .getElementById("cvc")
                .value;

            if (cvc.length !== 3) {
                alert("Please enter 3 digits for CVC");
                return;
            }

            var cvcNum = parseInt(cvc);

            if (isNaN(cvcNum)) {
                alert("Please enter only numbers for CVC");
                return;
            }

        });

});







