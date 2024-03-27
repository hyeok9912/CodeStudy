function solution(rsp) {
    var answer = '';
    
    
    
    
    let s = rsp.split('') 
    
    
  let result = s.map(function(a){  //// map 객체에서 매개변수 a = function solution의 매개변수 rsp의 값으로 map 객체의 키값으로 들어오게 된다
      if(a==='0') return '5'
      if(a==='2') return '0'
      if(a==='5') return '2'
  })
  
  
    answer = result.join('')

    
    
    
    return answer;
}
