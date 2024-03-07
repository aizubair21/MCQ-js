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
const quizfooterElement = document.getElementsByClassName("footer_body")[0];
const totalMarkElelment = document.getElementsByClassName("total_mark")[0];
const totalTimeElement = document.getElementsByClassName("total_time")[0];
const totalLeftTime = document.getElementsByClassName('tm_left')[0];
const examSetupElement = document.getElementById('setup_exam');
const targetQuestionInputElement = document.getElementById('target_question_input');
const examDurationElement = document.getElementById('examDuration');
const examPassMark = document.getElementById('passMark');
const negativeMarkInput = document.getElementById('negative_mark');
const selectToNextInput = document.getElementById('selectTopNext');
const disabledOptinInput = document.getElementById("optionDisabled");



const totalQuestion = data.length;
let currentQuestionIndex = 0;
let displayQuestionIndex = 10;
let questionLimitation = 10;
let totalTime = 10;
let secound = 60;
let isExamStarted = false;
let isNestQuestionComesBySelectingOption = false;
let disabledOtherOptionWhenOneOptionIsSelected = true;
let negativeMarking = false;
let passMark = 0;

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
    showQuestionList();
    generateExam();
    footerActive();
    disabledOtherOption();
    timeLeft();
}
// init();
// setupExam();

// funciton for next question 
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
    // if (currentQuestionIndex > totalQuestion) {
    //     currentQuestionIndex = 0;
    // }

    const questionDisplay = document.getElementsByClassName("qiz_body")[0];
    // console.log("ci : " + typeof currentQuestionIndex + " qi : " + typeof questionLimitation);

    if (parseInt(currentQuestionIndex) < parseInt(questionLimitation)) {

        currentQuestionIndex++;
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
                    <div class="question_counter">${questionLimitation - currentQuestionIndex} Left</div>
                    <button type="button" onclick="nextEquestion()" class="sub_btn">${currentQuestionIndex == questionLimitation ? "Finish" : "Next"}</button>
                </div>
             </form>
             </div>
            `;
        questionDisplay.innerHTML = htmlIndex;
        setTimeout(() => {
            document.getElementsByClassName("form_wrapper")[0].classList.add('form_active');
        }, 100);
    } else {
        // console.log(' from create exam else block');
        submitExam();
    }


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
    if (questionLimitation && totalLeftTime && secound) {

        let htmlIndex = "";
        let lix = 1;
        for (let li = 0; li < questionLimitation; li++) {
            htmlIndex +=
                `
            <div class="footer_item">${lix}</div>
            `;
            lix++;
        }
        quizfooterElement.innerHTML = htmlIndex;
    }
    // console.log(questionLimitation); 
}

//function to determided footer item to show current item
function footerActive() {
    if (questionLimitation && totalTime && secound) {

        const footerItemElement = document.querySelectorAll(".footer_item");
        // const activeItem = parseInt(window.location.hash.split("#").pop());
        footerItemElement.forEach(fi => {
            fi.classList.remove('footer_active');
        });
        footerItemElement[currentQuestionIndex - 1].classList.add("footer_active")

    }

}

//function disable another option if one selected 
function disabledOtherOption() {
    const allOptions = document.querySelectorAll('.option_input');


    allOptions.forEach((op, index) => {
        op.addEventListener('change', () => {
            if (disabledOtherOptionWhenOneOptionIsSelected && questionLimitation && totalTime && secound) {
                console.log("clicked on optin");

                allOptions.forEach((oP, iNdex) => {
                    oP.checked = false;
                    oP.disabled = true;
                })
                op.disabled = false;
                op.checked = true;
                // setTimeout(() => {

                // }, 100);
            }

            if (isNestQuestionComesBySelectingOption) {
                nextEquestion();
            }
        })

    })

    // function to load event listener when select a option and get next question;
    // allOptions.forEach((oP, iNdex) => {
    // })

}


//time left funtion
function timeLeft() {
    // secound = 10;
    totalTime--;
    if (totalTime < 10) {
        totalTime = "0" + totalTime;
    }
    let lti = setInterval(() => {
        secound--;
        if (secound <= 0) {
            secound = 59;
            totalTime--;
            // clearInterval(lti);
            // clearInterval;
            // alert(`Time is up!`);
            // window.location.href = `./index.html`;
            if (totalTime < 1) {
                secound = 0;
                clearInterval(lti);
                submitExam();
                console.log("from timing funciton");
                document.getElementsByClassName('tm_left')[0].style.backgroundColor = "red";
            }
        }
        if (secound < 10) {
            secound = "0" + secound;
        }
        if (totalTime <= 0) {
            totalTime = 0;
        }
        // document.getElementsByClassName("tm_left")[0].prepend = `<img style="padding:5px; border-radius:50px;" sec="img/clock.png>`;
        document.getElementsByClassName('tm_left_min')[0].innerHTML = totalTime;
        document.getElementsByClassName("tm_left_sec")[0].innerHTML = secound;
        // console.log(totalTime + " - " + secound);
    }, 1000)

}


//submit exam 
function submitExam() {
    // init();
    // showQuestionList();
    // footerActive();
    // disabledOtherOption();
    // footerItemElement.style.display = 'none';

    const questionDisplay = document.getElementsByClassName("qiz_body")[0];
    // console.log("no more question !");
    htmlIndex =
        `
    <div class="exam_finished_box">
        <button class="fns_btn">Show Result</button>
        <div class="info_text">
            
        <style>
            .button-reload {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px 12px;
            gap: 8px;
            height: 34px;
            width: 112px;
            border: none;
            background: #ff362b34;
            border-radius: 20px;
            cursor: pointer;
            }

            .lable {
            line-height: 20px;
            font-size: 17px;
            color: #fff;
            font-family: sans-serif;
            letter-spacing: 1px;
            }

            .button-reload:hover {
            background: #ff362b52;
            }

            .button-reload:hover .svg-icon {
            animation: spin 2s linear infinite;
            }

            @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(-360deg);
            }
            }
        </style>

        <button class="button-reload" onclick="window.location.reload()">
        <svg class="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" stroke-linecap="round" stroke-width="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
        <span class="lable">Repeat</span>
      </button>
            </div>
    </div>

    `;
    questionDisplay.innerHTML = htmlIndex;
}

//start exam
function startExam() {
    examSetupElement.classList.add('setup_exam_active');
    // console.log("exam started !");
    totalMarkElelment.innerHTML = ` Mark:  ${questionLimitation}`;
    // totalMarkElelment.innerHTML = totalTime + "Min";
    totalTimeElement.innerHTML =
        `
    <img src="img/clock.png" style="padding-right:5px">
    ${totalTime} Min
    `;

    init();
}

//define pass mark to variable
examPassMark.addEventListener('input', (e) => {
    // console.log(e.target.value);
    passMark = e.target.value;
})

//define question target limitation to valiable
targetQuestionInputElement.addEventListener('input', (e) => {
    questionLimitation = parseInt(e.target.value);
    // console.log(questionLimitation);
})

//define exam duration to valiable
examDurationElement.addEventListener('input', (e) => {
    totalTime = e.target.value;
    // console.log(totalTime);
})

negativeMarkInput.addEventListener('input', (e) => {
    negativeMarking = !negativeMarking;
    // console.log(negativeMarking);
})
selectToNextInput.addEventListener('input', () => {
    isNestQuestionComesBySelectingOption = !isNestQuestionComesBySelectingOption;
    console.log(isNestQuestionComesBySelectingOption);
})
disabledOptinInput.addEventListener("input", () => {
    disabledOtherOptionWhenOneOptionIsSelected = !disabledOtherOptionWhenOneOptionIsSelected;
    // console.log(disabledOtherOptionWhenOneOptionIsSelected);
})

//function to set input data to valiable 
function setDataToVariable() {
    passMark = examPassMark.value;
    questionLimitation = targetQuestionInputElement.value;
    totalTime = examDurationElement.value;
}
setDataToVariable();


// function to generate random number between min and max value
function getRandomNumberBetweenMinAndMaxValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
    if (window.innerWidth < 1300) {
        asideLeft.classList.add('aside_left_hide');
        asideLeft.style.marginLeft = -100 + "%";
        asideLeft.style.transition = "all linear .3s";
    } else {

        asideLeft.classList.remove('aside_left_hide');
        asideLeft.style.marginLeft = 0 + '%';
        asideLeft.style.transition = "all linear .3s";
    }
    if (window.innerWidth > 768) {
        document.getElementsByClassName('exam_layout')[0].classList.add('exam_layout_1');
        document.getElementsByClassName('exam_layout')[0].classList.remove('exam_layout_2');
        document.querySelector("#aside_left").classList.remove('aside_left_hide');
    } else {
        document.getElementsByClassName('exam_layout')[0].classList.remove('exam_layout_1');
        document.getElementsByClassName('exam_layout')[0].classList.add('exam_layout_2');
        document.querySelector("#aside_left").classList.add('aside_left_hide');
    }
}, 100);