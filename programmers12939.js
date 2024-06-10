function solution(s) {
    var answer = '';
    var arr = s.split(' ').map(Number)
    var min = Math.min(...arr)
    var max = Math.max(...arr)
    
    return min + ' ' + max;
}
