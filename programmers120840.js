
//// 나의 풀이

function solution(balls, share) {
    var answer = 1;
    while(share){
        answer *= balls/share
        balls --
        share --
    }
    
    
    return Math.round(answer); //// Math.round === 반올림 메서드
}


//// 다른 사람의 풀이

function solution(balls, share) {
  let factorial = [BigInt(1)]; /// 빅인트 함수를 사용하여 큰수가 나왔을때의 정확도를 올림
  for (let i = 1; i <= balls; i++) {
		factorial[i] = factorial[i - 1] * BigInt(i); //// => ★★★★★ 팩토리얼 공식을 for 반복문으로 구현 
	}
  return factorial[balls] / (factorial[balls - share] * factorial[share]);
}


//// 팩토리얼이란?
//// !로 나타내며 5! = 5*4*3*2*1
