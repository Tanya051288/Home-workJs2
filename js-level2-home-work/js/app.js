//  1. Найдите числа в массиве которые делятся на 3 без остатка
 const number = [90, 124, 55, 9213, 159, 225, 1543, 1545];
 const devideArr = []
  for (c = 0; c <= number.length; c++) {
    if (number[c] / 3 === 0);
    devideArr.push(number[c])
  }
    console.log (devideArr)

//  2. Посчитайте финальную стоимость всех продуктов в корзине и выведите результат как переменную в консоль лог

 const shoppingCart = [
   {
     name: 'Cheese',
     count: 4,
     pricePerItem: 100
    
   },
   {
     name: 'Water',
     count: 5,
     pricePerItem: 23
    
   },
   {
     name: 'Banana',
     count: 8,
     pricePerItem: 55
    
   },
   {
     name: 'Choccolate',
     count: 2,
     pricePerItem: 115
    
   }
     
 ];


//3. Посчитайте сумму всех чисел внутри массива массивов. Присвойте переменной и выведете в консоль.
 const numbers = [
   [100, 1230, 1293123, 1236478, 9816],
   [9932, 2123123, 1293123, 1203123, 1239],
   [12391, 1235, 1123994, 1203123, 5543243],
   [1203, 92346, 288, 12309, 5543243],
   [94324, 8236, 123, 86231, 8455322],
   [2340123, 172, 123, 321, 38421340],
 ]
   let sum=0;
   for(let x of numbers){
   for( let y of x){
      sum +=y;
   }   
   }
      console.log(`Total score: ${sum}`)


//4. Добавить в массив uniqueArray только не повторяющиеся значения из arr
 const arr = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java", "java", "go", "Python", "Python"
 ];
 const uniqueArray =arr.slice [10,11,12]
   console.log (arr.slice(10,11,12))
     
     

//5. В объекте result должны быть свойства в которых ключ это элемент массива arr а значение - количество этих элементов в массиве arr
 const Arr = ['Jane','Bob','Bob','Luci','Jane','Bob','Peter','Felix','Felix','Bob','Andrew'];
 const result = {
        Jane: 2,
        Bob: 4,
        Luci:1,
        Peter:1,
        Felix:2,
        Andrew:1
 }
    for(let i of Object.keys(result)){
       console.log(i);
       console.log(result[i]);
   }

 
 
