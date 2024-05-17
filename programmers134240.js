function solution(food) {
    var answer = '';
    let left = ''
    let right = ''
    // index[0]번은 항상 중앙에 배치되어야 함
    for(let i = 0; i < food.length; i++){
        let count = Math.floor(food[i] / 2)
        
        left += i.toString().repeat(count)
        right = i.toString().repeat(count) + right
    }
    answer = left + '0' + right
    
    // food 의 index[0] 번은 물
    // index[1]번부터 음식인데 낮은 순데로 나타나 있으며 인덱스는 각 음식의 갯수
    return answer;
}
