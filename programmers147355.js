function solution(t, p) {
    var answer = 0;
    let targetNum = parseInt(p,10)
    let Plength = p.length
    for(let i = 0; i <= t.length-Plength; i++){ // 여기서 알게된 사실 for 반복문의 두번째 조건식은 반복횟수 라고 생각한다
      let subStr = t.substring(i,i+Plength) 
        let num = parseInt(subStr,10)
        if(num <= targetNum){
            answer++
        }
    }
    

    return answer;
}
