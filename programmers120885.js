function solution(bin1, bin2) {
    var answer = '';
    while(bin1.length < bin2.length) bin1 = '0' + bin1
    while(bin2.length < bin1.length) bin2 = '0' + bin2
    
    let carry = 0
    
    for(let i = bin1.length -1; i >= 0; i--){
        let sum = parseInt(bin1[i])+parseInt(bin2[i])+carry
        if(sum >= 2){
            answer = (sum %2) + answer
            carry = 1
        }else{
            answer = sum + answer
            carry = 0
        }
    }
    if(carry === 1){
        answer = '1' +answer
    }
    
    
    return answer;
}

////첫 번째 자리(가장 오른쪽):
//bin1 = 1, bin2 = 1, carry = 0
//sum = 1 + 1 + 0 = 2
//sum >= 2이므로, 결과는 sum % 2 = 0이 되고, carry = 1로 업데이트됩니다.
//결과 문자열: "0"

//두 번째 자리:
//bin1 = 0, bin2 = 1, carry = 1
//sum = 0 + 1 + 1 = 2
//sum >= 2이므로, 결과는 sum % 2 = 0이 되고, carry = 1로 유지됩니다.
//결과 문자열: "00"

//세 번째 자리:
//bin1 = 0, bin2 = 1, carry = 1
//sum = 0 + 1 + 1 = 2
//sum >= 2이므로, 결과는 sum % 2 = 0이 되고, carry = 1로 유지됩니다.
//결과 문자열: "000"

//네 번째 자리(가장 왼쪽):
//bin1 = 1, bin2 = 1, carry = 1
//sum = 1 + 1 + 1 = 3
//sum >= 2이므로, 결과는 sum % 2 = 1이 되고, carry = 1로 유지됩니다.
//결과 문자열: "1000"
