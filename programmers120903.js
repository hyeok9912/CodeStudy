function solution(s1, s2) {
    var answer = 0;
    let sSet = new Set(s1)  // s1 배열의 원소들로 Set 객체 생성
    for(let item of s2){  // s2 배열을 순회
        if(sSet.has(item)){ // 현재 원소가 set1에 포함되어 있다면
            answer++  // 카운트 증가
        }
    }
    
    return answer;
}
