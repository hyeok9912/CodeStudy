function solution(my_string, letter) {
    var answer = my_string.replace(new RegExp(letter,'g'),'');
 
    return answer;
}

// 정규 표현식을 알지 못해 쉬운 문제임에도 오래 걸렸다 정규 표현식을 공부하자
