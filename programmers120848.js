
// case 1
function solution(n) {
    var answer = 1;
    let i = 1;
    while(answer <= n){
        i++
        answer *= i
        if(answer === n){
            return i
        }else if(answer > n){
            return i-1
        }
    }
    return answer;
}


// case 2
function solution(n) {
    var answer = 1;
    for(let i = 1; i<=n; i++){
        answer *= i //// (1*1)*(1*2)*(1*3)...이 반복 된다
        if(answer === n){
            return i
        }else if(answer > n){
            return i-1
        }
    }
    
    
    
   return answer;
}
