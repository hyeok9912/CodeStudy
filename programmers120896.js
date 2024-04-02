function solution(s) {
    var answer = '';
    let split = s.split('')
    let countMap = new Map()
    for(let str of split){
        if(!countMap.has(str)) countMap.set(str,0)
        if(countMap.has(str)) countMap.set(str, countMap.get(str)+1)
    }
    
    let singlechar = []
    for(let [char,count] of countMap){
        if(count === 1)singlechar.push(char)
    }
    answer = singlechar.sort().join('')
    
    return answer;
}
