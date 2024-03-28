function solution(n) {
    
    let arr = []
    for(let i = 1; i <= n; i++){
        for(let j = 2; j < i; j++){     // for 반복문 안에 for 반복문을 넣어 최대 n 값 까지 이고 i가 n보다 큰 숫자를 교차로 반복하며 i값에서 j값을 나눔
            if(i % j === 0){
                arr.push(i)
            }
        }
    }
    var answer = [...new Set(arr)].length; /// Set 객체는 배열의 중복된 요소들을 제거해준다
                                        /// 이후 배열을 펼친뒤 배열의 length 값을 answer에 할당
    
    return answer;
}
