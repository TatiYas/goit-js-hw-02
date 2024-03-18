//function getElementWidth(content, padding, border) {const contentWidth = parseInt(content.slice(0, -2))const paddingWidth = parseInt(padding.slice(0, -2)) * 2;const borderWidth = parseInt(border.slice(0, -2)) * 2;return contentWidth + paddingWidth + borderWidth;}//
  
function getElementWidth(content, padding, border) {
    const result = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
    return (result);
  
    console.log(getElementWidth("50px", "8px", "4px")); // 74
    console.log(getElementWidth("60px", "12px", "8.5px")); // 101
    console.log(getElementWidth("200px", "0px", "0px")); // 200
}


//Завдання #3 вирішено неправильно

//Проблема була частково вирішена правильно, але є покращення, які потрібно внести.Критичні помилки:Вам слід використовувати parseFloat замість parseInt, оскільки parseInt не зможе обробити десяткові дроби, які є допустимими вводами відповідно до вимог завдання, наприклад, у тестовому випадку "8.5px". Використовуючи parseFloat, ви гарантуєте, що функція зможе правильно обробляти значення з десятковими дробами.Є невелике покращення у способі видалення 'px' із рядків. Хоча slice(0, -2) працює, це менш гнучкий метод і базується на припущенні, що всі одиниці будуть рівно двох символів завдовжки.