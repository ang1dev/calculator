let currentInput = document.querySelector('.input');
let answerScreen = document.querySelector('.answer');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');


let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'input'
    answerScreen.className = 'answer';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})


for (i = 0; i <= buttons.length; i++) {
    let btn = buttons[i];
    btn.addEventListener("click", () => {
        if (!btn.id.match('erase')) {

            realTimeScreenValue.push(btn.value)


            let currentText = "";

            for (i = 0; i < realTimeScreenValue.length; i++) {
                let item = realTimeScreenValue[i];
                currentText += item;


            }

            currentInput.innerHTML = currentText;

            if (btn.classList.contains('num_btn')) {

                let result = "";
                for (i = 0; i < realTimeScreenValue.length; i++) {
                    result += realTimeScreenValue[i];


                }

                 answerScreen.innerHTML = eval(result);
            }
        }

        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();

            let btnErase = "";
            for (i = 0; i < realTimeScreenValue.length; i++) {
                btnErase += realTimeScreenValue[i];
            }

            currentInput.innerHTML = btnErase;
            answerScreen.innerHTML = eval(btnErase);
        }


        if (btn.id.match('evaluate')) {
            currentInput.className = 'answer';
            answerScreen.className = 'input';
            answerScreen.style.color = "white";
        }



        let unDResult = "";
        for (i = 0; i < realTimeScreenValue.length; i++) {
            unDResult += realTimeScreenValue[i];
        }

        if (typeof eval(unDResult) == 'undefined') {
            answerScreen.innerHTML = 0
        }


    })
}

