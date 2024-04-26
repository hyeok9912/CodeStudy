function solution(babbling) {
    var answer = 0;
    var word = ['aya','ye','woo','ma']
    for(let i in babbling){
        let init = babbling[i]
        
        for(let j in word){
            if(babbling[i].includes(word[j])){
                init = init.replace(word[j],'x')
            }
        }
        
        init = init.replace(/x/gi,'')
        if(init === ''){
            answer++
        }
    }
    
    return answer;
}

/// for of 배열의 value 값 까지 반환
/// for in 배열의 key 값 만 반환
