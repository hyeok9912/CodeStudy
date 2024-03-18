function solution(n) {    // 피자조각 : 6 * n(사람수) % 피자판수(i) === 0
    var answer = n;
     for(let i = 1; i<=n; i++){
         if((i*6)%n===0){
             return i
         }
     }
    
    
    
    
    return answer;
}


// 다른사람 코드

function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}


// 다른 사람 코드

const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}


// while 반복문을 사용하면 훨신 간략하고 효율적으로 코드를 짤 수 있음
