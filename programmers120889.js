function solution(sides) {
    var answer = 0;
    let s = sides.sort()
    
    
    let [num,num1,num2] = sides
    
    if(num+num1 > num2){
        return 1
    }else {
        return 2
    }
    
    
    return answer;
}
