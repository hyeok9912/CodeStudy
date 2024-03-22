function solution(emergency) {
    let sorted = [...emergency].sort(function(a,b){
        return b-a
    })
    
    return emergency.map(function(v){
        return sorted.indexOf(v)+1
    })

}

/// map 객체에 대한 이해도가 더 필요하다고 느낌
