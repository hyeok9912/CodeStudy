function solution(chicken) {
    var answer = 0;
    let coupon = chicken
    let servicechi = 0
    
    while(coupon >= 10){
        servicechi = parseInt(coupon / 10)  
        answer += servicechi
        
        coupon = coupon - servicechi * 10 + servicechi
    }
    return answer;
}
