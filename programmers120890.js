function solution(array, n) {
    var answer = array.sort(function(a,b){
        return Math.abs(n-a) - Math.abs(n-b) || a-b
    });
    
    return answer[0];
}
