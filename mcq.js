const data = [{
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Rome", "Paris"],
        "answer": "Paris"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Venus", "Mars", "Jupiter", "Saturn"],
        "answer": "Mars"
    },
    {
        "question": "What is the largest mammal in the world?",
        "options": ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        "answer": "Blue Whale"
    },
    {
        "question": "Which gas do plants absorb from the atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "answer": "Carbon Dioxide"
    },
    {
        "question": "Who wrote the play 'Romeo and Juliet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "F. Scott Fitzgerald"],
        "answer": "William Shakespeare"
    },
    {
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": ["China", "Japan", "South Korea", "Vietnam"],
        "answer": "Japan"
    },
    {
        "question": "What is the chemical symbol for gold?",
        "options": ["Ag", "Ge", "Au", "Fe"],
        "answer": "Au"
    },
    {
        "question": "Which gas makes up the majority of Earth's atmosphere?",
        "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        "answer": "Nitrogen"
    },
    {
        "question": "Who is the author of 'To Kill a Mockingbird'?",
        "options": ["George Orwell", "J.D. Salinger", "Harper Lee", "F. Scott Fitzgerald"],
        "answer": "Harper Lee"
    },
    {
        "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        "options": ["Mercury", "Venus", "Mars", "Jupiter"],
        "answer": "Venus"
    },
    {
        "question": "What is the largest organ in the human body?",
        "options": ["Heart", "Liver", "Skin", "Brain"],
        "answer": "Skin"
    },
    {
        "question": "Which element has the chemical symbol 'H'?",
        "options": ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        "answer": "Hydrogen"
    },
    {
        "question": "What is the capital of Australia?",
        "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        "answer": "Canberra"
    },
    {
        "question": "Who is known as the 'Father of Modern Physics'?",
        "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        "answer": "Albert Einstein"
    },
    {
        "question": "Which gas is used by plants in photosynthesis?",
        "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "answer": "Carbon Dioxide"
    },
    {
        "question": "What is the largest planet in our solar system?",
        "options": ["Venus", "Mars", "Jupiter", "Saturn"],
        "answer": "Jupiter"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        "answer": "Leonardo da Vinci"
    },
    {
        "question": "Which animal is known as the 'King of the Jungle'?",
        "options": ["Giraffe", "Lion", "Elephant", "Tiger"],
        "answer": "Lion"
    },
    {
        "question": "What is the smallest prime number?",
        "options": ["0", "1", "2", "3"],
        "answer": "2"
    },
    {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["Mars", "Venus", "Jupiter", "Saturn"],
        "answer": "Mars"
    },
    {
        "question": "What gas do humans exhale when they breathe?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "answer": "Carbon Dioxide"
    },
    {
        "question": "Who wrote 'The Great Gatsby'?",
        "options": ["George Orwell", "J.D. Salinger", "Harper Lee", "F. Scott Fitzgerald"],
        "answer": "F. Scott Fitzgerald"
    },
    {
        "question": "Which country is known as the 'Land of the Rising Sun'?",
        "options": ["China", "Japan", "South Korea", "Vietnam"],
        "answer": "Japan"
    },
    {
        "question": "What is the chemical symbol for silver?",
        "options": ["Ag", "Ge", "Au", "Fe"],
        "answer": "Ag"
    },
    {
        "question": "Which gas makes up the majority of Earth's atmosphere?",
        "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        "answer": "Nitrogen"
    },
    {
        "question": "Who is the author of '1984'?",
        "options": ["George Orwell", "J.D. Salinger", "Harper Lee", "F. Scott Fitzgerald"],
        "answer": "George Orwell"
    },
    {
        "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        "options": ["Mercury", "Venus", "Mars", "Jupiter"],
        "answer": "Venus"
    },
    {
        "question": "What is the largest organ in the human body?",
        "options": ["Heart", "Liver", "Skin", "Brain"],
        "answer": "Skin"
    },
    {
        "question": "Which element has the chemical symbol 'O'?",
        "options": ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        "answer": "Oxygen"
    },
    {
        "question": "What is the capital of Canada?",
        "options": ["Toronto", "Montreal", "Vancouver", "Ottawa"],
        "answer": "Ottawa"
    },
    {
        "question": "Who is known as the 'Father of Modern Physics'?",
        "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        "answer": "Albert Einstein"
    },
]
const examFormElement = document.getElementsByClassName('exam_form')[0];
const quizfooterElement = document.getElementsByClassName("qiz_footer")[0];

const totalQuestion = data.length;
let currentQuestionIndex = 0;
let displayQuestionIndex = 0;

let score = 0;
let correctAnswer = 0;
let wrongAnser = 0;
let unAnswered = 0;

let selectedOptionByUser = ''; //user given anser
let selectedOptionByDefault = ""; //default answer
const submitBtn = document.getElementsByClassName("sub_btn")[0];

//get the selected input
function getSelectedInput() {
    const inputs = document.getElementsByClassName('option_input');
    for (let index = 0; index < inputs.length; index++) {
        if (inputs[index].checked) {
            selectedOptionByUser = inputs[index].value;
            // console.log(selectedOptionByUser);
        }
    }
    // selectedOptionByDefault = document.getElementById("default").value;
    currentQuestionIndex = document.getElementById('current_index').value;
    // console.log("current index : " + currentQuestionIndex);
    // console.log("default : " + selectedOptionByDefault);
    // console.log('user selecte option: ' + selectedOptionByUser);
}
// console.log(typeof inputs);

// init function 
function init() {
    generateExam();
    showQuestionList();
    footerActive();
    // disabledOtherOption();
}
init();

function nextEquestion() {
    document.getElementsByClassName("form_wrapper")[0].classList.add('form_hide');
    setTimeout(() => {
        getSelectedInput();
        countScore();
        generateExam();
        footerActive();
        disabledOtherOption();
    }, 100);
}


//generate exam with data 
function generateExam() {

    const getQuestionData = data[currentQuestionIndex];
    if (currentQuestionIndex > totalQuestion) {
        currentQuestionIndex = 0;
    }
    currentQuestionIndex++;
    const questionDisplay = document.getElementsByClassName("qiz_body")[0];
    selectedOptionByDefault = getQuestionData.answer;
    // console.log(getQuestionData);
    let htmlIndex =
        `
        <div class="form_wrapper">
        <form action="#" class="exam_form" style="width:100%">
            <input type="hidden" name="current_index" id="current_index" value="${currentQuestionIndex}">
            <div class="question">
                <div class="question_label">question - ${currentQuestionIndex}</div>
                <div class="question_input">${getQuestionData.question}</div>
                <img class="question_img" src="img/icons8-pen-100.png">
            </div>
            <hr style="background-color: gray;">

            <div class="options">
                <div class="option_items">
                    <input class="option_input" type="radio" name="option" value="${getQuestionData.options[0]}" id="option_a">
                    <label class="option_label" for="option_a">${getQuestionData.options[0]}</label>
                </div>
                <div class="option_items">
                    <input class="option_input" type="radio" name="option" value="${getQuestionData.options[1]}" id="option_b">
                    <label class="option_label" for="option_b">${getQuestionData.options[1]}</label>
                </div>
                <div class="option_items">
                    <input class="option_input" type="radio" name="option" value="${getQuestionData.options[2]}" id="option_c">
                    <label class="option_label" for="option_c">${getQuestionData.options[2]}</label>
                </div>
                <div class="option_items">
                    <input class="option_input" type="radio" name="option" value="${getQuestionData.options[3]}" id="option_d">
                    <label class="option_label" for="option_d">${getQuestionData.options[3]}</label>
                </div>
            </div>

            <div class="button">
                <button type="button" onclick="nextEquestion()" class="sub_btn">Next</button>
            </div>
         </form>
         </div>
        `;
    questionDisplay.innerHTML = htmlIndex;

    setTimeout(() => {
        document.getElementsByClassName("form_wrapper")[0].classList.add('form_active');
    }, 100);

}

//count sroce 
function countScore() {
    //count score
    const footerItemElement = document.querySelectorAll(".footer_item");

    if (selectedOptionByUser && selectedOptionByDefault == selectedOptionByUser) {
        correctAnswer++;
        score++;
        footerItemElement[currentQuestionIndex - 1].classList.add("footer_correct")
    }
    if (selectedOptionByUser != "" && selectedOptionByDefault != selectedOptionByUser) {
        wrongAnser++;
        score - 0.10;
        footerItemElement[currentQuestionIndex - 1].classList.add("footer_error")
    }

    console.log("correct: " + correctAnswer + " wrong : " + wrongAnser + " skiff : " + unAnswered);
}

//show question list 
function showQuestionList() {

    let htmlIndex = "";
    for (let li = 1; li < 10; li++) {
        htmlIndex +=
            `
        <div class="footer_item">${li}</div>
        `;
    }
    quizfooterElement.innerHTML = htmlIndex;
}

//function to determided footer item to show current item
function footerActive() {
    const footerItemElement = document.querySelectorAll(".footer_item");
    // const activeItem = parseInt(window.location.hash.split("#").pop());
    footerItemElement.forEach(fi => {
        fi.classList.remove('footer_active');
    });

    footerItemElement[currentQuestionIndex - 1].classList.add("footer_active")
}

//function disable another option if one selected 
function disabledOtherOption() {
    const allOptions = document.querySelectorAll('.option_input');
    allOptions.forEach((op, index) => {
        op.addEventListener('change', () => {
            console.log("clicked on optin");
            allOptions.forEach((oP, iNdex) => {
                oP.checked = false;
                oP.disabled = true;
            })
            op.disabled = false;
            op.checked = true;
            setTimeout(() => {
                // nextEquestion();
            }, 100);
        })
    })

}
disabledOtherOption();