function solution(array) {
    let str = String(array)
    let arr = str.split('')
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '7'){
            result.push(arr[i])
        }
    }
    let j = result.join('')
    var answer = j.length;
    
    return answer;
}
