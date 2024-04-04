function solution(array) {
    var answer = [];
    answer = array.reduce(function(a,b,i){
        if(b > a[0]){
            return [b,i] 
        }else{
            return a
        }
    },[array[0],0])
    
    
    
    
    return answer;
}
