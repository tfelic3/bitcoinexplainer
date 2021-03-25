const data = [

   

    { headline: "What is Bitcoin?",
    content: 'img/bitcoin1.jpg',
answer: "Bitcoin is a completely digital currency created in 2009 by an anonymous programmer using the alias Satoshi Nakamoto. Nakamoto proposed an open-source ‘peer-to-peer payment system with no central authority or banks. Each Bitcoin is stored in a digital wallet on a computer or smartphone."
    },

    { headline: "How does Bitcoin work?",
    content: 'img/bitcoin4.jpg',
    answer: 'The Bitcoin network relies on a shared public space where balances and transactions are recorded on a database called a blockchain.'
        },

    { headline: "Where can I buy Bitcoin and what is the value?",
    content: 'img/bitcoin3.jpg',
answer: "You can acquire bitcoin by purchasing coins through 'Bitcoin exchanges.' These exchanges allow people to buy or sell bitcoins using different currencies. Bitcoins can be mined using a computer algorithm. Bitcoin prices are volatile. They are determined by the bidding on Bitcoin exchanges."
    },

    { headline: "What can you purchase with Bitcoin?",
    content: 'img/bitcoin6.jpg',
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },

    { headline: "Is Bitcoin secure?/Bitcoin backlash?",
    content: 'img/bitcoin2.jpg',
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




    card.classList.toggle('is-flipped');
    button.setAttribute('disabled', "");
    button.style.backgroundColor="rgb(202,202,202)";
    divIndex++;
    
    imageDiv.src = data[divIndex].content;
    headline.textContent = data[divIndex].headline;
    description.textContent = data[divIndex].answer;
    


    if (divIndex === data.length){
        alert("You've reached the end");
    }
       
    

})









