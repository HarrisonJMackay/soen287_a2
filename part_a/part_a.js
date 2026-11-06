function tab(tab){
    //get a list of all the HTML elements with the class tab pane.
    const panes = document.querySelectorAll('.tab-pane');
    //iterate through the list and remove the class 'active' hiding all elements.
    panes.forEach(pane => pane.classList.remove('active'));

    console.log(tab);
    
    document.getElementById(tab).classList.add('active');
}

function printEx2(){
    const array = ['word', 1, {key: 'value'}, true, [1, 2, 3, 4]];
    const div = document.getElementById('ex2');
    
    const forEach = array.map((value, index) => `${index}: ${value}`).join("<br>");
    div.innerHTML = `<p>toString<br> ${array.toString()}<br> join<br> ${array.join('&')}<br> forEach<br> ${forEach}</p>`;  

    console.debug("printEx2()")
} 

const numbers = [1, 2, 3, 4, 5, 6, 7];
const mixed = [4,5,"3.0 birds",true,"birds2"];
const sentence = 'See you later';

function addNumbers(numbers){
    let sum = 0;
    numbers.forEach((num) => sum += num);
    return sum;
};

function addOnlyNumbers(mixed){};
function countVowels(str){};
function reverseWords(sentence){};
function getCurrentDate(){};
