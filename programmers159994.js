function solution(cards1, cards2, goal) {
    var answer = '';
    let i1 = 0
    let i2 = 0
    for(let i = 0; i< goal.length; i++){
        let word = goal[i]
        if(i1 < goal.length && word === cards1[i1]){
            i1++
        }else if(i2 < goal.length && word === cards2[i2]){
            i2++
        }else{
            return 'No'
        }
    }
    
    
    return 'Yes';
}

// 핵심은 포인터를 사용하여 if문이 처음에 바로 끝나지 않게 하는것이다
