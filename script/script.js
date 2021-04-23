const data = [
  {
    cardHeadline: "What is Bitcoin?",
    content: "img/bitcoin1.jpg",
    caption: "Credit: CNN",
    answer: "It’s not a physical coin, and it’s not tangible. Bitcoin is a digital currency -meaning it exists only in a digital format. But, to spend Bitcoin, you have to get some first – usually by trading other money, like dollars or euros. Think of it the way you use dollars to buy those Chuck E. Cheese tokens to play games and earn tickets that you redeem for the large stuffed rainbow octopus instead of just buying the plush toy outright with cash.",
    additionalQuestions: ["What is cryptocurrency?", "Who invented Bitcoin?"],
  },

  {
    cardHeadline: "Where do you buy Bitcoin?",
    content: "img/bitcoin4.jpg",
    caption: '',
    answer:
      "You purchase Bitcoin on “bitcoin exchanges,” such as Coinbase, Bitstamp and Bitfinex. You keep the “coins” in a digital wallet, which some people access through an app. If you decide you’d like something that bends and can go in a billfold, well, apps like Coinbase allow you to convert your digital currency into US dollars and transfer them back to your bank account, where you can withdraw them from an ATM.",
  },

  {
    cardHeadline: "3.	What’s Bitcoin worth?",
    content: "img/bitcoin3.jpg",
    answer:
      "Bitcoin’s value changes all the time because its supply is limited, and demand for it changes constantly, sorta like stocks. According to Investopedia, one Bitcoin was worth 2/25 or less than one-tenth of a penny when it started trading in 2009. It jumped to a whopping 8 cents a year later. By April 2021, one Bitcoin rose above $64,000.",
  },

  {
    cardHeadline: "What can I buy with Bitcoin?",
    content: "img/bitcoin6.jpg",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    headline: "Is anyone regulating Bitcoin or cryptocurrency?",
    content: "img/bitcoin2.jpg",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const card = document.querySelector(".card__inner");

const button = document.querySelector("button");

const headline = document.querySelector(".cardHeadline");
console.log(headline);
const imageDiv = document.querySelector("img");
const description = document.getElementById("description");
const imageCaption = document.querySelector(".imageCaption");

let svgImg = document.querySelector(".svgImg");

let nextQuestionButton = document.querySelector('.nextQuestionButton');




let addedQuestions= data[0].additionalQuestions;
addedQuestions.forEach(question=>{
  let questionDiv = document.createElement('div');
  let questionText = document.createElement('p');

})


let divIndex = 0;

imageDiv.src = data[divIndex].content;
imageCaption.textContent = data[divIndex].caption;
headline.textContent = data[divIndex].cardHeadline;
description.textContent = data[divIndex].answer;
nextQuestionButton.textContent = data[divIndex+=1].cardHeadline;



svgImg.classList.add("scale");

card.addEventListener("click", function () {
 
  card.classList.toggle("is-flipped");

  if (card.getAttribute("class") === "card__inner is-flipped") {
 

  }
});

nextQuestionButton.addEventListener('click', function(){

 setTimeout(
    function(){  
        
        
     
        imageDiv.src = data[divIndex].content;
        headline.textContent = data[divIndex].headline;
        description.textContent = data[divIndex].answer;
        nextQuestionButton.textContent = data[divIndex+=1].cardHeadline;
     

        console.log(card);
    
        
    
    
    }, 1000) 


    

}



);
