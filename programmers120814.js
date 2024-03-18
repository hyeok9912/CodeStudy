// 나의 풀이

function solution(n) {
    var answer = 0;
        if(n % 7 === 0){               
            return n/7
        }else if(n % 7 >= 1){
            return parseInt(n/7)+1
        }
    
    
    return answer;
}


//// 다른사람 풀이

function solution (n){
    if(n % 7 === 0){
        return n / 7
    }else {
       return  parseInt(n / 7) + 1;
    }
}

///// 다른사람 풀이

function solution(n) {
    return Math.ceil(n / 7)
}
// Math.ceil (올림 메서드) 를 알고 있었다면 훨신 간결하게 코드를 짤 수 있었을 거 같다
