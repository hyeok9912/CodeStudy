/// 처음 작성한 코드

/// 작성된 코드의 문제점
/// 1. 최대 공약수를 구하는 로직이 잘못됨
/// 2. 분모를 기약분수로 나누었을때 분모의 소인수가 2와 5만 존재하는지 여부를 판단하지 않음
function solution(a, b) {
    var answer = 0;
    let gcd = 0;
    for(let i =2; i <= Math.min(a,b); i++){
        if(a % i === 0 && b % 2 === 0){
            gcd = i
        }else {
            if(b % 2 === 0 || b % 5 === 0){
                return 1
            }
        }
    }
    let deno = b/gcd
    
    if(deno % 2 === 0 || deno % 5 === 0){
        return 1
    }
    return 2
    
    return answer;
}

/// 수정된 코드

function solution(a, b) {
    var answer = 0;
    function gcd(x,y){
      return y === 0 ? x : gcd(y, x%y)
    }
    
    let gcdValue = gcd(a,b)
    let deno = b/ gcdValue
    
    while(deno % 2 === 0) deno /= 2
    while(deno % 5 === 0) deno /= 5
    
    return deno === 1 ? 1 : 2
    
    return answer;
}
