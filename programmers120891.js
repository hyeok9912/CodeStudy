function solution(order) {
    let orderStr = String(order)
    let s = orderStr.split('')
    let result = []
    for(let i = 0; i < s.length; i++){
        if(s[i] === '3' || s[i] === '6' ||s[i] === '9'){
            result.push(s[i])
        }
    } 
    var answer = result.length;
    return answer;
}
//// 결과값을 result 배열에 넣어 배열의 길이를 계산해서 값을 도출하는 것이 아니라
//// count 변수값을 선언하여 반복문의 조건이 성립할때 마다 변수 count의 값이 오르게 쓰면 더 짧게 쓸수 있었을 거 같다\
/// let count = 0
/// for(let i = 0; i < s.length; i++){
///    if(s[i] === '3'|| s[i] === '6' || s[i] === '9'){
///   count ++
///  }
//  }
