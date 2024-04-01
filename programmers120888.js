function solution(my_string) {
    var answer = Array.from(new Set(my_string.split(''))).join('')
    
    
    return answer;
}


/// Array.form 은 유사 배열을 배열로 변환해주는 역할을 하고 두번째 인자로 각각의 인자를 유사배열에 전달할 함수를 넣을 수 있다.
