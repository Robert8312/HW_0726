
//取得表格內的值

let val = document.getElementById("user_num").value;
let answer ="";
 answer= creatNum();
let times = 0; //計算玩的次數
let logText = "";
console.log("現在長度是" + val);

//檢查是否符合
function doGuess() {
    times++;
    let guess = document.getElementById("input").value;
    let result = checkAB(answer, guess);
    // 判斷是否字都一樣
    let first = guess.charAt(0);
    let repeat = (guess.split(first)).length - 1;//利用str.split()分割輸入的字串，再用str.lenght-1去看它的長度
    if (repeat == val) {//如果跟輸入的數字長度一樣，就表示使用者都輸入一樣的數字
        alert("數字不得一樣");
        //扣掉這次的次數
        times--;
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
    }
    else {
        logText += (`現在是第${times}次: ${guess}=>${result}     剩下${10-times}次機會`) + "<br>";
        document.getElementById("show").innerHTML = logText
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        if (result == `${val}A0B`) {
            alert("恭喜答對")
            replay();
        } else if (times == 10) {
            alert(`歐不!答案是:${answer} `);
            replay();
        }
    }

}

function replay() {
    val = document.getElementById("user_num").value;
    answer = creatNum(val);
    console.log("重設後答案是" + answer);
    logText = "";
    times = 0;
    document.getElementById("show").innerHTML = "";
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
}

// 猜數字規則 如果數字位置有一模一樣 =A ，位置不一樣但數字一樣 = B

function creatNum(val=4) {
    let num = [];
    let ans_num = "";
    document.getElementById("show").innerHTML = "";
    for (i = 0; i < val; i++) {
        num[i] = parseInt(Math.random() * 10);
        ans_num += num[i];
    }
    answer = ans_num;
    console.log("產生的答案是" + ans_num + "現在答案是" + answer);
    return answer;
}
// 檢查吻合的字
function checkAB(ans, gus) {
    let a = 0,
        b = 0;
    for (let i = 0; i < gus.length; i++) {
        if (gus.charAt(i) == ans.charAt(i)) {
            a++;
        } else if (ans.indexOf(gus.charAt(i)) >= 0) {
            b++;
        }
    }
    return `${a}A${b}B`;
}