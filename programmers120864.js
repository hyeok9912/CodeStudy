function solution(my_string) {
    const numbers = my_string.match(/[0-9]+/g);
    if(!numbers){
        return 0
    }
    let sum = numbers.reduce(function(a,b){
       return a + Number(b)
    },0)
    
    return sum
}


/// match() 메소드는 주어진 정규 표현식과 일치하는 모든 결과를 배열로 반환합니다
/// /[0-9]+/g = 숫자만 찾는 정규표현식
