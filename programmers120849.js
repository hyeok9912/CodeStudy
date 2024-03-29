function solution(my_string) {
    var answer = '';
    let a = ['a','e','i','o','u']
   for(let i of my_string){   //// 1.for of 문을 사용하여 매개변수의 배열을 순회한다
       if(!a.includes(i)){  /// if 문과 includes 메서드를 사용하여 /// 변수 i가 변수 a를 포함하고 있지 않으면
           answer += i      /// answer 에 i값 추가
       }
   }
    
    return answer;
}

//// for in 문과 for of 문의 차이점
//// for in 문은 객체를 순회하고
//// for of 문은 배열을 순회한다
/// 객체에 for of 문을 사용할 경우 오류가 발생하고
//// 배열에 for in 문을 사용할 경우 해당배열의 키값인 인덱스 값을 반환한다
