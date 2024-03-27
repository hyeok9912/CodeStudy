function solution(num_list, n) {
    var answer = [];
    let tempArray = [];
    
    for(let i = 0; i < num_list.length; i++){
        tempArray.push(num_list[i])
        if(tempArray.length === n){
            answer.push(tempArray);
            tempArray = []
        }
    }
    
    return answer;
}

// 1. 임시 배열과 정답 배열 생성
//2. for 함수로 임시 배열에 n의 갯수만큼 집어넣고 n과 같아지면 정답 배열로 이동 한 뒤 임시배열 초기화
