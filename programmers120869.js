function solution(spell, dic) {
    var answer = 0;
    let s1 = spell.sort()
    let j = s1.join('')
    
    for(let word of dic){
        let sortWord = word.split('').sort().join('')
        if(sortWord === j){
            return 1
        }
    }
    return 2
    
    
    return answer;
}
//// 조건 ) spell 을 한번씩만 사용해야함
////    dic의 배열 안 문자중 spell 의 문자를 모두 사용해야함
