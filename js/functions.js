// Функция для проверки длины строки
const checkLength = (string, maxLength) => (string.length <= maxLength);

checkLength('Проверяемая строка', 20);
checkLength('Проверяемая строка', 18);
checkLength('Проверяемая строка', 10);

// Функция для проверки является ли строка палиндромом
const isPalindrome = function(string) {
  const normolizeString = string.replaceAll(' ', '').toUpperCase();
  let reversedString = '';
  for (let i = normolizeString.length - 1; i >= 0; i--){
    reversedString += normolizeString[i];
  }
  return reversedString === normolizeString;
};

isPalindrome('Кекс');
isPalindrome('Довод');

// Дополнительное задание

const getString = (string) => {
  string = string.toString();
  let result = '';

  for (let i = 0; i < string.length; i++){
    const number = parseInt(string[i], 10);
    if (!Number.isNaN(number)) {
      result += number;
    }
  }

  return Number (result) || NaN;
};

getString('ECMAScript 2022');
