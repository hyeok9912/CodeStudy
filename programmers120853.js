function solution(s) {
    let result = []
    let split =  s.split(' ')
    for(let a of split){
        if(a !== 'Z'){
             result.push(parseInt(a))
        }else if(a === 'Z'){
            result.pop()
        }
    }    
    let answer = result.reduce(function(a,b){
       return a+b 
    },0)
    
    return answer;
}
