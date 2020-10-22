module.exports = function toReadable (number) {
    const ones = ['null','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['null','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    let zero = 'zero';
    
    
    let newNumber = number.toString();
         let lastTeen = newNumber[newNumber.length - 1];

    if (newNumber == '0') {
      return zero;
    }     
    else if (newNumber.length == '1') { /**Единицы */
      return ones[newNumber];
    
    } else if (newNumber[0] == '1' && newNumber.length == '2') { /* 10-19 */
   
      return teens[lastTeen];

    } else if (newNumber.length == '2' && newNumber[0] != '1' && newNumber[1] == '0') { /* десятки с нулем на конце */
      
      return tens[newNumber[0]];

    } else if (newNumber.length == '2'&& newNumber[0] != '1') { /* десятки с единицами */
      return tens[newNumber[0]] + ' ' + ones[newNumber[1]];
    
    } else if (newNumber.length == '3' && newNumber[1] != '0' && newNumber[2] != '0' && newNumber[1] != '1') { /* Сотни с десятками и единицами */
      return ones[newNumber[0]] + ' ' + hundred + ' ' + tens[newNumber[1]] + ' ' + ones[newNumber[newNumber.length -1]];
    
    } else if (newNumber.length == '3' && newNumber[1] != '0' &&  newNumber[1] != '1') { /* Сотни с десятками */ 
        return ones[newNumber[0]] + ' ' + hundred + ' ' + tens[newNumber[1]];
    } else if (newNumber.length == '3' && newNumber[1] == '0' && newNumber[2] != '0') { /* Сотни с единицами */ 
        return ones[newNumber[0]] + ' ' + hundred + ' ' + ones[newNumber[newNumber.length -1]];

    } else if (newNumber.length == '3' && newNumber[1] == '0' && newNumber[2] == '0') /*Сотни с нулем на конце*/{
        return ones[newNumber[0]] + ' ' + hundred;
    } else if (newNumber.length == '3' && newNumber[1] == '1') {/* Сотни с 10-19 */

        return ones[newNumber[0]] + ' ' + hundred + ' ' + teens[lastTeen];
    } 
}
