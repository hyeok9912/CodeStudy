function solution(money) {
    var answer = [];
    let ameri = 5500;
    
    let glass = Math.floor(money / ameri)
    let change = money - (glass * ameri)
    
    
    answer.push(glass,change)
    
    
    return answer;
}
