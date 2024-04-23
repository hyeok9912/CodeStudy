function solution(numlist, n) {
        numlist.sort(function(a,b){
          let distantA = Math.abs(n - a)
          let distantB = Math.abs(n - b)
          
          if(distantA === distantB){
              return b - a  //// sort 의 내림차순 정렬
          }
            
            return distantA - distantB  /// n 과의 절대값 차 오름차순 정렬
        })
    
    var answer = numlist;
    
    
    return answer;
}
