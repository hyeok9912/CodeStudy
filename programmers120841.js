function solution(dot) {
    var answer = 0;
    if(dot[0]>0 && dot[1]>0){
        return 1
    }else if(dot[0]<0 && dot[1]>0){
        return 2
    }else if(dot[0]<0 && dot[1]<0){
        return 3
    }else{
        return 4
    }
    
    
    return answer;
}


//// 다른 풀이 :  삼항 연산자 사용

function solution(dot) {
	// 배열 비구조화 할당을 이용하여 dot 배열의 첫 번째와 두 번째 요소를 각각 num과 num2에 할당
    const [num,num2] = dot;
    // 두 숫자의 곱이 양수인지 확인하는 변수 check를 선언
    const check = num * num2 > 0;
    // 첫 번째 숫자(num)이 양수인 경우
    // check가 참이면 1을 반환, 거짓이면 4를 반환
    // 첫 번째 숫자(num)이 음수인 경우
	// check가 참이면 3을 반환, 거짓이면 2를 반환
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
