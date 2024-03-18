function solution(slice, n) { // 피자조각수 , 먹는 사람 수 n 값이 최소 1일때 몇판의 피자를 시켜야하는지
    var answer = Math.ceil(n/slice);             // slice = 2~10
    
    
    
    return answer;
}


/// slice * answer >= n
///    7   *    2   >= 10

/// 10 / 7 <= 2
/// n/slice <= answer

///Math.ceil 은 반올림 매서드


/// 다른사람 코드

function solution(slice, n) {
    var answer = 0;
    while(n > slice * answer){
        answer++;
    }
    return answer;
}
