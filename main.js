// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//convert credit card string to number
function creditCardStringToArray(creditCardString) {

    let creditCardArray = [];

    for (let i = 0; i < creditCardString.length; i++) {
        creditCardArray.push(parseInt(creditCardString[i]));
    }

    return creditCardArray;

}

//validate credit card using Luhn algorithm
function validateCred(creditCardNumArray) {

    //default values for sum and check value
    let sum = 0;
    let check = 0;

    //if credit card has 15 digits, make the check value 1
    if (creditCardNumArray.length === 15) {

        check = 1;
    }

    //iterate through the credit number, starting with the second to last number
    for (let i = creditCardNumArray.length - 2; i >= 0; i--) {

        let value = creditCardNumArray[i];
        
        //if the index of the value is odd or even, double value and subtract 9 as needed
        if (i % 2 === check) {

            value = value * 2;

            if (value > 9) {
                value = value - 9;
            }

        }
        
        //sum the values
        sum += value;

    }

    //add back the last digit in the credit number
    sum += creditCardNumArray[creditCardNumArray.length - 1];

    return sum % 10 === 0;

}

//check for invalid cards in an array of cards and output them
function findInvalidCards(creditCards) {

    //create invalidCards array
    let invalidCards = [];

    //iterate through creditCards and check if they are valid
    for (let i = 0; i < creditCards.length; i++) {

        //if the credit card is not valid, push the creditcard to the array
        if (validateCred(creditCards[i]) === false) {

            invalidCards.push(creditCards[i]);

        }

    }

    return invalidCards;
}

//output invalid companies associated with invalid companies
function idInvalidCardCompanies(invalidCards) {

    //create invalidComps array
    let invalidComps = [];

    //iterate through invalidCards and get first digit to determine company
    for (let i = 0; i < invalidCards.length; i++) {

        let invalidCompany = invalidCards[i];
        let compDigit = invalidCompany[0];

        //switch the compDigit to push the value
        let company = '';

        switch(compDigit) {
            case 3:
                company = "American Express (AMEX)";
                break;
            case 4:
                company = "Visa";
                break;
            case 5:
                company = "Mastercard";
                break;
            case 6:
                company = "Discover";
                break;
            default:
                company = "Company not found";
                break;
        }

        //push value if not in array
        if (invalidComps.indexOf(company) === -1) {
            invalidComps.push(company);
        }
    }

    return invalidComps;
}

//corrects card number to make it valid
function correctCardNumber(creditCardNumArray) {

    //default values for sum and check value
    let sum = 0;
    let check = 0;

    //if credit card has 15 digits, make the check value 1
    if (creditCardNumArray.length === 15) {

        check = 1;
    }

    //iterate through the credit number, starting with the second to last number
    for (let i = creditCardNumArray.length - 2; i >= 0; i--) {

        let value = creditCardNumArray[i];
        
        //if the index of the value is odd or even, double value and subtract 9 as needed
        if (i % 2 === check) {

            value = value * 2;

            if (value > 9) {
                value = value - 9;
            }

        }
        
        //sum the values
        sum += value;

    }

    //add back the last digit in the credit number
    sum += creditCardNumArray[creditCardNumArray.length - 1];

    //find modulo
    let remainder = sum % 10;

    //adjust last value
    creditCardNumArray[creditCardNumArray.length - 1] = creditCardNumArray[creditCardNumArray.length - 1] - remainder;

    return creditCardNumArray;

}







