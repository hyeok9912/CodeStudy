function solution(numer1, denom1, numer2, denom2) {
    let a = numer1 * denom2 + numer2 * denom1
    let b = denom1 * denom2
    
    // 유클리드 호제법을 사용해 최대공약수(GCD)를 찾는 함수
    function gcd(x, y) {
        while(y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    let c = gcd(a, b); // a와 b의 최대공약수를 c에 할당
    a = a / c; // 분자를 최대공약수로 나눈다
    b = b / c; // 분모를 최대공약수로 나눈다
    
    var answer = [a, b];
    return answer;
}
