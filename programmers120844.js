function solution(numbers, direction) {
    var answer = [];
    if(direction === 'right'){
        numbers.unshift(numbers.pop())
        return numbers
    }else{
        numbers.push(numbers.shift())
        return numbers
    }
    
    return answer;
}

//// unshift 메서드는 배열의 맨 앞에 값을 추가한다
//// pop 메서드는 배열의 마지막 요소를 없애고 그 제거된 요소를 반환
//// shift 메서드는 배열의 첫요소를 제거하고 그 요소를 반환
