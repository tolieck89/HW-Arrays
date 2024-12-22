let array_second = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum_pluses = 0;
let quantity_pluses = 0;
let min = array_second[0];
let max = array_second[0];
let quantity_minuses = 0;
let even_pluses = 0;
let odd_pluses = 0;
let sum_even_pluses = 0;
let sum_odd_pluses = 0;
let product_pluses = 1;

for (element of array_second){
    if (element>0){
        sum_pluses+=element;
        quantity_pluses++;
        product_pluses*=element;
        if (element%2===0){
            even_pluses++;
            sum_even_pluses+=element;
        } else {
            odd_pluses++;
            sum_odd_pluses+=element;
        }
    }
    if (element<min){
        min = element;
    }
    if (element>max){
        max = element;
    } 
    if (element<0){
        quantity_minuses++;
    }
    
}

document.write(
    `<p> Сума додатних елементів складає: ${sum_pluses}. </p> 
    <p> Кількість же додатних елементів в масиві складає: ${quantity_pluses}. </p> 
    <p>Мінімальним елементом є число ${min}, а його індекс - ${array_second.indexOf(element)}. </p> 
    <p> Найбільшим же елементом масиву є число ${max}, а індекс його - ${array_second.indexOf(element)}. </p>
    <p> Кількість від'ємних елементів в масиві складає ${quantity_minuses}. </p>
    <p> Кількість непарних додатних елементів в масиві складає ${odd_pluses}. </p>
    <p> Кількість парних додатних елементів в масиві складає ${even_pluses}. </p>
    <p> Сума парних додатних елементів в масиві складає ${sum_even_pluses}. </p>
    <p> Сума непарних додатних елементів в масиві складає ${sum_odd_pluses}. </p>
    <p> Добуток усіх додатних елементів в масиві складає ${product_pluses}. </p>
    `);

    for (let i = 0; i < array_second.length; i++) {
        if (array_second[i] !== max) {
            array_second[i] = 0; 
        }
    }
document.write("<p>" + array_second + "</p>");


