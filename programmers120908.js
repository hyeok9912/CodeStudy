function solution(str1, str2) {
    var answer = 0;
    
    if(str1.indexOf(str2)!== -1){
        return 1
    } else {
        return 2
    }
    
    
    
    return answer;
}

// indexOf 메소드는 지정된 값이 처음 나타나는 인덱스를 반환하며, 값이 문자열에 없는 경우 -1을 반환합니다.
//str1.indexOf(str2)의 결과가 0일 경우 (즉, str2가 str1의 시작에서 바로 발견될 경우), 이는 false로 평가되어 잘못된 분기를 타게 됩니다.
