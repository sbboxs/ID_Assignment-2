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
        if (num1 > num2){
            if (num2 == 0){
                while(num2 == 0){
                    num2 = Math.floor(Math.random() * 15);
                }
            }
            if(num1 % num2 == 0){
                ans = num1 / num2;
            } else{
                console.log(num2);
                while(num1 % num2 != 0){
                    num1 = Math.floor(Math.random() * 255);
                    console.log(num1);
                }
                ans = num1 / num2;
            }
        } else if(num2 > num1){
            if (num1 == 0){
                while(num1 == 0){
                    num1 = Math.floor(Math.random() * 15);
                }
            }
            if(num2 % num1 == 0){
                ans = num2 / num1;
            } else{
                console.log(num1);
                while(num2 % num1 != 0){
                    num2 = Math.floor(Math.random() * 255);
                    console.log(num2);
                }
                ans = num2 / num1;
            }
        } else{
            ans = num1 / num2;
        }
    }
    if (ans == fakeNum1 || ans == fakeNum2 || fakeNum1 == fakeNum2){
        while (ans == fakeNum1 || fakeNum1 == fakeNum2 || ans == fakeNum2){
            if(randomSign == '+' || randomSign == '&#247'){
                fakeNum1 = Math.floor(Math.random() * 15);
                fakeNum2 = Math.floor(Math.random() * 15);
            } else if(randomSign == '-'){
                fakeNum1 = Math.floor(Math.random() * 31) - 15;
                fakeNum2 = Math.floor(Math.random() * 31) - 15;
            } else if(randomSign == 'X'){
                fakeNum1 = Math.floor(Math.random() * multiplier);
                fakeNum2 = Math.floor(Math.random() * multiplier); 
            }
            console.log(fakeNum1);
            console.log(fakeNum2);
            console.log(ans);
        }
    }
    if (randomSign == '&#247' && num2 > num1){
        document.getElementById("first-num").innerHTML = num2;
        document.getElementById("second-num").innerHTML = num1;
    } else{
        document.getElementById("first-num").innerHTML = num1;
        document.getElementById("second-num").innerHTML = num2;
    }
    

    ansArray = [ans, fakeNum1, fakeNum2];
    console.log(ans);
    console.log(fakeNum1);
    console.log(fakeNum2);
    while(randomizeArray.length != ansArray.length){
        let randomOption = ansArray[Math.floor(Math.random() * ansArray.length)];
        if (!randomizeArray.includes(randomOption)){
            randomizeArray.push(randomOption);
        }
        console.log(randomOption);
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