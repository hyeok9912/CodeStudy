function solution(my_string) {
    var answer = 0;
    for(let i = 0; i < my_string.length; i++){
        if(!isNaN(my_string[i]) && my_string[i] !== ' '){
            answer += (parseInt(my_string[i]))
        }
    }
    return answer;
}
