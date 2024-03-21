const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' '); // input의 문자열을 split 메서드를 사용하여 하나씩 나눔
}).on('close', function () {
    let inputNum = Number(input); /// 전달 받은 문자열을 정수로 변환
    for(let i = 1; i <= inputNum; i++){
        console.log('*'.repeat(i))
    }
});



//// 처음보는 readline 문제라 당황했다.. readline을 사용하는것에 익숙해 져야겠다
