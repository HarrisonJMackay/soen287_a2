const numbers = [1, 2, 3, 4, 5, 6, 7];
const mixed = [4,5,"3.0 birds",true,"birds2"];
const sentence = 'See you later';

function printEx2(){
    const array = ['word', 1, {key: 'value'}, true, [1, 2, 3, 4]];
    const div = document.getElementById('ex2');
    
    const forEach = array.map((value, index) => `${index}: ${value}`).join("<br>");
    div.innerHTML = `<p>toString<br> ${array.toString()}<br> join<br> ${array.join('&')}<br> forEach<br> ${forEach}</p>`;  

    console.debug("printEx2()")
} 

//EX 3
function printEx3(){
    const divs = Array.from({length: 5}, () => document.createElement('div'));

    divs[0].innerHTML = addNumbers(numbers);
    divs[1].innerHTML = addOnlyNumbers(mixed);
    divs[2].innerHTML = countVowels(sentence)
    divs[3].innerHTML = reverseWords(sentence)
    divs[4].innerHTML = getCurrentDate()
    
    const doc = document.getElementById('ex3');

    divs.forEach(div => doc.append(div));
}


function addNumbers(numbers){
    let sum = 0;
    numbers.forEach((num) => sum += num);
    return sum;
};

function addOnlyNumbers(mixed){;
    let sum = 0;
    mixed.forEach((num) => sum += parseFloat(num));
    return sum;
}
function countVowels(str){
    const vowels = str.match(/[aeiou]/gi);
    return vowels.length;
};

function reverseWords(sentence){ 
    let wordArray = sentence.split(" ").reverse();
    return wordArray;
};

function getCurrentDate(){
    return new Date();
};


//EX 4
try {
    const form = document.getElementById('orderForm');
    form.addEventListener('submit', (e) => validate(e));
}catch(error){
    console.log(error.message);
}

function validate(e){
    e.preventDefault();
    const data = new FormData(form);    
    
    data.forEach((item) => {
        const isPos =  /^\d+$/.test(item);
        console.log(isPos);
        if (!isPos){
            window.alert('No negative values!');
        }
    })
};

//EX 5
function ex5(){
    let fname = prompt("Enter first name: ", "UNKOWN");
    let lname = prompt("Enter last name: ", "UNKOWN");

    const div = document.getElementById('ex5');

    div.innerHTML = `${fname} ${lname}`;
}

//EX 6
const image = document.getElementById('slideshow');
let pos = 0;
function slideShow(){
    pos += 1;
    console.log(pos);
    const pics = ['./1.jpeg', './2.jpeg'];
    image.src = pics[pos%2];
    console.log(image.src);
}
