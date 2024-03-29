function solution(my_string) {
    var answer = [];
    for(let i = 0; i < my_string.length; i++){
        if(!isNaN(my_string[i]) && my_string[i] !== ' '){
            answer.push(parseInt(my_string[i]))
        }
    }
    answer.sort(function(a,b){
        return a-b
    })
    
    return answer;
}
/// 
/// 문자열 my_string에서 숫자를 어떻게 추출하지 생각했는데 filter()메서드를 사용해서 걸러내려는 잘못된 방법을 썼다
///for 반복문을 에서 !isNaN()을 사용하여 숫자를 걸러내는것을 생각하지 못했다.


/// 다른 사람의 풀이
function solution(my_string) {
    const regex = /^[0-9]+$/;

    let ans = [];
    
    for(let i = 0; i < my_string.length; i++){
        if(regex.test(my_string[i])){
            ans.push(Number(my_string[i]));
        }
    }
    
    return ans.sort((a,b) => a - b);
}
/// 정규 표현식을 사용했다 . 정규 표현식이 익숙하지 않아 생각하지 못했다 나도 정규표현식을 자주 사용해 봐야겠다.


/// 다른사람의 풀이 (2)
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}
