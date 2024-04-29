function solution(A, B) {
    var answer = 0;
    if(A === B){
        return 0
    }
    let tempA = A
    
    for(let i = 1; i<=A.length; i++){
        tempA=tempA[tempA.length-1] + tempA.substring(0,tempA.length-1)
        if(tempA===B){
            return i
        }
        }
    return -1
    
    return answer;
}


/// substring 메서드는 첫번째 매개변수 부터 두번째 매개 변수의 전 인덱스까지 가져옴
