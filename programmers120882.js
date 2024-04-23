function solution(score) {
    
    let aver = score.map(function(v){
        return (v[0]+v[1])/2
    })
    let sort = aver.slice().sort(function(a,b){
        return b-a
    })
    
    
    var answer = aver.map(function(v){
       return sort.indexOf(v)+1
    });
    return answer;
}
//slice() 메서드의 인수를 모두 생략하면 원본 배열의 복사본(얕은 복사)을 생성하여 반환한다고 한다.
//sort() 메서드는 원본 배열을 직접 변경한다.
//slice() 메서드는 원본 배열을 변경하지 않는다. 인수를 생략할 경우에는 얕은 복사를 한다.
//따라서 원본 배열을 변경하지 않고 sort() 메서드를 사용하여 배열을 정렬하고 싶은 경우에는 slice()를 사용하여 얕은 복사로 배열을 정렬한다.
