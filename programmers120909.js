function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n)
    if(n % sqrt === 0){
        return 1
    }else {
        return 2
    }
    
    
    return answer;
}


//// Math.sqrt = 제곱근을 구하는 메서드
//// Math.pow = 거듭제곱을 구하는 메서드
