function solution(cipher, code) {
    var answer = '';
    let password = []
    let split = cipher.split('')
    for(let i = 0; i < split.length; i++){
        if((i+1) % code === 0){
            password.push(split[i])
        }
    }
    answer = password.join('')
    
    return answer;
}
