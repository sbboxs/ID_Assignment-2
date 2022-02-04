const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const eqnSign = document.getElementById("eqn-sign");
let ans = 0;

function createEqn(){
    let num1 = Math.floor(Math.random() * 15);
    let num2 = Math.floor(Math.random() * 15);
    let fakeNum1 = Math.floor(Math.random() * 15);
    let fakeNum2 = Math.floor(Math.random() * 15);
    let ansArray = [];
    let randomizeArray = [];
    let eqnArray = ['+', '-', 'X', '&#247'];
    let multiplier = 255;

    const randomSign = eqnArray[Math.floor(Math.random() * eqnArray.length)];
    document.getElementById("eqn-sign").innerHTML = randomSign;
    if(randomSign == '+'){
        ans = num1 + num2;
    } else if(randomSign == '-'){
        fakeNum1 = Math.floor(Math.random() * 31) - 15;
        fakeNum2 = Math.floor(Math.random() * 31) - 15;
        ans = num1 - num2;
    } else if(randomSign == 'X'){
        if (num1 > num2) multiplier = Math.pow(num1, 2);
        else multiplier = Math.pow(num2, 2);

        fakeNum1 = Math.floor(Math.random() * multiplier);
        fakeNum2 = Math.floor(Math.random() * multiplier);
        ans = num1 * num2;
    } else if(randomSign == '&#247'){
        ans = num1 / num2;
    }
    if (ans == fakeNum1 || ans == fakeNum2 || fakeNum1 == fakeNum2){
        if (ans == fakeNum1){
            while (ans == fakeNum1){
                fakeNum1 = Math.floor(Math.random() * 15);
                console.log(fakeNum1);
            }
            while(fakeNum1 == fakeNum2){
                fakeNum2 = Math.floor(Math.random() * 15);
                console.log(fakeNum2);
            }
        } else if (ans == fakeNum2){
            while (ans == fakeNum2){
                fakeNum2 = Math.floor(Math.random() * 15);
                console.log(fakeNum2);
            }
            while (fakeNum1 == fakeNum2){
                fakeNum1 = Math.floor(Math.random() * 15);
                console.log(fakeNum1);
            }
        } else if (fakeNum1 == fakeNum2){
            while(fakeNum1 == fakeNum2){
                fakeNum2 = Math.floor(Math.random() * 15);
                console.log(fakeNum2);
            }
        }
    }
    document.getElementById("first-num").innerHTML = num1;
    document.getElementById("second-num").innerHTML = num2;

    ansArray = [ans, fakeNum1, fakeNum2];
    while(randomizeArray.length != ansArray.length){
        let randomOption = ansArray[Math.floor(Math.random() * ansArray.length)];
        if (!randomizeArray.includes(randomOption)){
            randomizeArray.push(randomOption);
        }
    }

    document.getElementById("option1").innerHTML = randomizeArray[0];
    document.getElementById("option2").innerHTML = randomizeArray[1];
    document.getElementById("option3").innerHTML = randomizeArray[2];
}
option1.addEventListener("click", function(){
    if(option1.innerHTML == ans){
        createEqn();
    }
});
option2.addEventListener("click", function(){
    if(option2.innerHTML == ans){
        createEqn();
    }
});
option3.addEventListener("click", function(){
    if(option3.innerHTML == ans){
        createEqn();
    }
});

createEqn();