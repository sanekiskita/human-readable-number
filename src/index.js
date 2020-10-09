module.exports = function toReadable(number) {
    var num = "";
    if (number === 0) return "zero";
    if (number < 1000 && number >= 100) {
        switch (number.toString().substring(0, 1)) {
            case '1':
                num = num + "one hundred";
                break;
            case '2':
                num = num + "two hundred";
                break;
            case '3':
                num = num + "three hundred";
                break;
            case '4':
                num = num + "four hundred";
                break;
            case '5':
                num = num + "five hundred";
                break;
            case '6':
                num = num + "six hundred";
                break;
            case '7':
                num = num + "seven hundred";
                break;
            case '8':
                num = num + "eight hundred";
                break;
            case '9':
                num = num + "nine hundred";
                break;



        }


        if (number % 100 != 0) {
            num = num + " ";
        }

        number = number.toString().substr(1);
    }



    if (number < 100 && number >= 20 || number == 10) {
        switch (number.toString().substring(0, 1)) {
            case '1':
                num = num + "ten";
                break;
            case '2':
                num = num + "twenty";
                break;
            case '3':
                num = num + "thirty";
                break;
            case '4':
                num = num + "forty";
                break;
            case '5':
                num = num + "fifty";
                break;
            case '6':
                num = num + "sixty";
                break;
            case '7':
                num = num + "seventy";
                break;
            case '8':
                num = num + "eighty";
                break;
            case '9':
                num = num + "ninety";
                break;

        }
        if (number % 10 != 0) {
            num = num + " ";
        }

        number = number.toString().substr(1);
    }

    if (number < 20 && number > 10) {
        switch (number.toString()) {

            case '11':
                num = num + "eleven";
                break;
            case '12':
                num = num + "twelve";
                break;
            case '13':
                num = num + "thirteen";
                break;
            case '14':
                num = num + "fourteen";
                break;
            case '15':
                num = num + "fifteen";
                break;
            case '16':
                num = num + "sixteen";
                break;
            case '17':
                num = num + "seventeen";
                break;
            case '18':
                num = num + "eighteen";
                break;
            case '19':
                num = num + "nineteen";
                break;

        }
        return num;

    }

    if (number < 10) {
        switch ((number % 10).toString()) {

            case '1':
                num = num + "one";
                break;
            case '2':
                num = num + "two";
                break;
            case '3':
                num = num + "three";
                break;
            case '4':
                num = num + "four";
                break;
            case '5':
                num = num + "five";
                break;
            case '6':
                num = num + "six";
                break;
            case '7':
                num = num + "seven";
                break;
            case '8':
                num = num + "eight";
                break;
            case '9':
                num = num + "nine";
                break;



        }
    }
    return num;

}
