function solution(angle) {
    var answer = 0;
    if(angle< 90){
        return 1
    }else if(angle === 180){
        return 4
    } else if(angle === 90){
        return 2
    } else {
        return 3
    }
    
    
    return answer;
}
