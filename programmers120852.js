function solution(n) {
    var answer = [];
    let e = 2
    while(n >= e){
        if(n % e === 0){
            answer.push(e)
            n = n/e
        }else {
            e ++
        }
    }
    return [...new Set(answer)];
}
//// 1. while 반복문을 통해 n이 2보다 작거나 같을때 까지 2로 나눠준다
//// 2. 만약 n이 2로 나누어 떨어진다면 answer[]에 2를 추가해준다
//// 3. 이후 n을 2로 나누어 준 뒤 while 반복문의 조건이 거짓이 될때까지 반복한다
//// 4. n이 2로 나누어지지 않을 경우 e값을 1 증감시켜 e값을 answer[]에 추가한다
//// 5. answer의 배열에는 중복되는 값들이 있기 때문에 Set을 사용하여 중복되는 값들을 지워준다.
