module.exports = function toReadable(number) {
    let uniqueToTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenthToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numbersArray = number.toString().split('');

    if (number == 0) { return 'zero' }
    if (number < 20) { return uniqueToTwenty[number] }
    if (number < 100 && number > 19) {
        return (tenthToNinety[numbersArray[0]] + ' ' + uniqueToTwenty[numbersArray[1]]).trim()
    }
    if (number > 99) {
        return numbersArray[2] == '0' && numbersArray[1] == '0' ? (uniqueToTwenty[numbersArray[0]] + ' hundred ').trim() : (uniqueToTwenty[numbersArray[0]] + ' hundred ' + toReadable(Number(numbersArray[1] + numbersArray[2]))).trim();
    }
}
