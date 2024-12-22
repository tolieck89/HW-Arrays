let custom_array = [];
let i = 0;
do {
    i = parseInt(prompt("Введіть розумір масиву, який ви бажаєте створити:"));
} while (i<1 || i === null || isNaN(i));

for (k = 0;k<i;k++){
    custom_array[k] = parseInt(prompt(`Введіть ${k+1}-й елемент масиву: `));
}

document.write("<p>" + custom_array + "</p>");


custom_array.sort((a, b) => a - b);

document.write("<p>" + custom_array + "</p>");

custom_array.splice(1, 3);

document.write("<p>" + custom_array + "</p>");



