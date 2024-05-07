function solution(n, m, section) {
    var answer = 0;
    var painted = 0;
    for(let continew of section){
        if(painted < continew){
            answer++
            painted = continew+m-1
        }
    }
    
    
    return answer;
}

// for 구문 안에서 ex1)의 경우 continew = [2,3,6] 
// 첫번째 루프에서 painted = 0 이니까 if 구문에 범주에 해당하므로 answer ++
// 두번째 루프에서 painted가 5로 업데이트 됌
// if 구문 범주에 해당하지 않음으로 넘어감
// 세번째 루프에서 continew의 마지막 인덱스인 6과 patined = 5 를 비교하면 if구문의 범주에 해당하기 때문에 answer++
