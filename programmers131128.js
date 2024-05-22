function solution(X, Y) {
    var answer = '';
    let countX = {}
    let countY = {}
    
    for(let char of X){
        countX[char] = (countX[char] || 0)+1
    }
    for(let char of Y){
        countY[char] = (countY[char] || 0)+1
    }
    // 각각의 countX countY는 객체이기 때문에 in 문을 사용
    
    for(let char in countX){
        if(char in countY){
            const min = Math.min(countX[char],countY[char])
            answer+= char.repeat(min)
        }
    }
    answer = answer.split('').sort((a,b)=> b-a).join('')
    
    if(answer === '') return '-1'
    if(answer[0] === '0') return '0'
    
    return answer;
}
