const data = [

   

    { headline: "What is Bitcoin?",
    content: 'img/bitcoin1.jpg',
answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    { headline: "How does Bitcoin work?",
    content: 'img/bitcoin4.jpg',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },

    { headline: "Where can I buy Bitcoin and what can I purchase?",
    content: 'img/bitcoin3.jpg',
answer: "'Bitcoin exchanges' allow people to buy or sell bitcoins using different currencies. Coinbase is a leading exchange."
    },

    { headline: "What is the value of Bitcoin?",
    content: 'img/bitcoin6.jpg',
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },

    { headline: "Is Bitcoin safe?",
    content: 'img/bitcoin2.jpg',
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },

            { headline: "The future of Bitcoin",
            content: 'img/bitcoin7.jpg',
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },

]










const card = document.querySelector('.card__inner');
const button = document.querySelector('button');

let headline = document.querySelector('h2');
let imageDiv = document.querySelector('img');
let description = document.getElementById('description');

let svgImg = document.querySelector('.svgImg');
console.log(svgImg)
let divIndex =0;



 imageDiv.src = data[divIndex].content;
 headline.textContent = data[divIndex].headline;
 description.textContent = data[divIndex].answer;


console.log(description);


let ovals = document.querySelectorAll('use');
let main =document.getElementById('path15_fill');
ovals.forEach(oval=>{ 
oval.classList.add('blink'); 
})

svgImg.classList.add('scale');





card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
    button.removeAttribute('disabled');
    button.style.backgroundColor="rgb(247,147, 26)";
    
   
})


button.addEventListener('click', function(){

if (divIndex === data.length-1){
    alert("You've reached the end");
}
    card.classList.toggle('is-flipped');

    console.log(card.classList);

 
    button.setAttribute('disabled', "");
    button.style.backgroundColor="rgb(202,202,202)";
    divIndex++;
    imageDiv.src = data[divIndex].content;
    headline.textContent = data[divIndex].headline;
    description.textContent = data[divIndex].answer;
    

})


/*
let divIndex =0;

let main = document.querySelector('main');
let h2Text = document.querySelector('h2');
let img = document.querySelector('img');

let svg = document.querySelector('svg');
console.log(svg);

let pText = document.querySelector('p');
let button = document.querySelector('button');

h2Text.textContent= data[divIndex].headline;
img.src = data[divIndex].content;

pText.textContent = data[divIndex].answer;


button.addEventListener('click', function (){
    divIndex++;
    h2Text.textContent= data[divIndex].headline;
    pText.textContent = data[divIndex].answer;
   console.log(divIndex);
   
 

})

*/



















