function solution(numbers) {
    var answer = numbers;
    let numMap = new Map()
    numMap.set('zero',0)
    numMap.set('one',1)
    numMap.set('two',2)
    numMap.set('three',3)
    numMap.set('four',4)
    numMap.set('five',5)
    numMap.set('six',6)
    numMap.set('seven',7)
    numMap.set('eight',8)
    numMap.set('nine',9)
    
    for(let [word,num] of numMap){
        let regex = RegExp(word,'g')
        answer = answer.replace(regex , num)
    }
    
    
    return Number(answer);
}
