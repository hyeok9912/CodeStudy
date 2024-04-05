// 수정된 코드

function solution(quiz) {
    var answer = [];
    quiz.forEach(function(q){
        let part = q.split(' ')
        let x = parseInt(part[0])
        let oper = part[1]
        let y = parseInt(part[2])
        let z = parseInt(part[4])
        
        
        
        let result = 0
        if(oper === '+'){
          result += x+y  
        }  else if(oper === '-'){
            result += x-y
        } 
       
        
        
        if(result === z){
            answer.push('O')
        }else if(result !== z){
            answer.push('X')
        }
    })
    
    
    
    return answer;
}


//// 잘못 작성한 코드

function solution(quiz) {
    var answer = [];
    let firNum = parseInt(quiz[0])
    let resultNum = 0;
    for(let i = 1; i < quiz.length; i+=2){
        let oper = quiz[i]
        let num = parseInt(quiz[i+1])
        let result = parseInt(quiz[i+4])
        if(oper === '+'){
            resultNum += num
            if(resultNum === result){
                answer.push('O')
            } else{
                answer.push('X')
            }
            
        }else if(oper === '-'){
            resultNum -= num
            if(resultNum === result){
                answer.push('O')
            }else {
                answer.push('X')
            }
            resultNum = 0
        }
    }
    
    return answer;
}
