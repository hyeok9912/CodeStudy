function solution(s, skip, index) {
    var answer = '';
    const Alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(let char of s){
        if(skip.includes(char)){
            answer += char
            continue;
        }
        
        let currentIndex = Alphabet.indexOf(char) // char의 Alphabet에서의 인덱스
        let newIndex = currentIndex;
        for(let i = 0; i < index; i++){
            newIndex = newIndex +1
            if(newIndex > 25){
                newIndex = 0
            }
                
        while(skip.includes(Alphabet[newIndex])){
            newIndex = newIndex +1
        if(newIndex > 25) newIndex = 0
      }
    }
      
        answer += Alphabet[newIndex]
    }
    
    
    return answer;
}v
