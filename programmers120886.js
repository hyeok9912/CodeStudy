
// 처음 코
function solution(before, after) {
    var answer = 0;
    let bs = before.split('')
    let as = after.split('').reverse()
    for(let i = 0; i < bs.length; i++){
        if(bs[i] === as[i] ){
            return 1
        }else {
            return 0
        }
    }

    
    
    
    return answer;
}

//수정 코드

function solution(before, after) {
    var answer = 0;
    let b = before.split('').sort().join('')
    let a = after.split('').sort().join('')
    
    if(a === b){
        return 1
    }
    return 0
    
    return answer;
}
