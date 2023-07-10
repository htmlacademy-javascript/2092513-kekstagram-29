//Функция для проверки длины строки.

function checkStringLength (string, length) {
  return (string.length <= length);
}
checkStringLength('Проверяемая строка', 20);
checkStringLength('Проверяемая строка', 18);
checkStringLength('Проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом.

function checkRalindrom (line) {
  const normalLine = line.replaceAll(' ','').toLowerCase();
  let newLine = '';

  for (let i = normalLine.length - 1; i >= 0; i --) {
    newLine = newLine += normalLine[i];
  }

  return (normalLine === newLine);
}

checkRalindrom('топот');
checkRalindrom('ДовОд');
checkRalindrom('Кекс');
checkRalindrom('Лёша на полке клопа нашёл ');
