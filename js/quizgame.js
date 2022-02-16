const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
let ans = 0;
let count = 0;

function createEqn(){
    let num1 = Math.floor(Math.random() * 15);
    let num2 = Math.floor(Math.random() * 15);
    let fakeNum1 = Math.floor(Math.random() * 15);
    let fakeNum2 = Math.floor(Math.random() * 15);
    let ansArray = [];
    let randomizeArray = [];
    let eqnArray = ['+', '-', 'X', '&#247'];
    let multiplier = 255;

    // Initiating an equation answer based on the operator chosen
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
        // Checking for divide by 0 error and dvisibility
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
    // Checking if the dummy options are the same as answer
    if (ans == fakeNum1 || ans == fakeNum2 || fakeNum1 == fakeNum2){
        while (ans == fakeNum1 || fakeNum1 == fakeNum2 || ans == fakeNum2){
            if(randomSign == '+' || randomSign == '&#247'){
                fakeNum1 = Math.floor(Math.random() * 15);
                fakeNum2 = Math.floor(Math.random() * 15);
                console.log("divide or add");
            } else if(randomSign == '-'){
                fakeNum1 = Math.floor(Math.random() * 31) - 15;
                fakeNum2 = Math.floor(Math.random() * 31) - 15;
                console.log("subtract");
            } else if(randomSign == 'X'){
                fakeNum1 = Math.floor(Math.random() * multiplier);
                fakeNum2 = Math.floor(Math.random() * multiplier);
                console.log(multiplier + " this is multiplier");
                if (multiplier == 0 || multiplier == 1){
                    fakeNum1 = Math.floor(Math.random() * 15);
                    fakeNum2 = Math.floor(Math.random() * 15);
                }
                console.log("multiply");
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

    // Randomizing options
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

// Pop-up modal to show end screen
function EndQuiz() {
    $(".modal-content").html(`
    <button type="button" class="btn-close" id="quizModal" data-bs-dismiss="modal" aria-label="Close" style="position:absolute;top:0;right:0;"></button>
    <h1 class="my-4 text-center" style="font-family:Luckiest Guy, cursive;">Well Done!</h1>
    <h1 class="my-4 text-center" style="font-family:Luckiest Guy, cursive;">You got <span id="scorePoints" style="color:pink;"></span> pts</h1>`);
    $("#scorePoints").text(count);
    $(".modal").modal("toggle");
    
    $("#quizModal").on("click", function(){
        location.reload();
    });
    $(".modal").on('hidden.bs.modal', function() {
        location.reload();
    });
    
}

// Click triggers for generating new equations, calculating score and lives
option1.addEventListener("click", function(){
    if(option1.innerHTML == ans){
        count += 1;
        $("#scoreCount").text(count);
        createEqn();
    }
    else {
        $(".lives-container").children().last().remove();
        if($(".lives-container").is(":empty")) {
            EndQuiz();
        }
    }
});
option2.addEventListener("click", function(){
    if(option2.innerHTML == ans){
        count += 1;
        $("#scoreCount").text(count);
        createEqn();
    }
    else {
        $(".lives-container").children().last().remove();
        if($(".lives-container").is(":empty")) {
            EndQuiz();
        }
    }
});
option3.addEventListener("click", function(){
    if(option3.innerHTML == ans){
        count += 1;
        $("#scoreCount").text(count);
        createEqn();
    }
    else {
        $(".lives-container").children().last().remove();
        if($(".lives-container").is(":empty")) {
            EndQuiz();
        }
    }
});

createEqn();