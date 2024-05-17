function solution(ingredient) {
    let stack = []; // 재료를 쌓을 스택
    let count = 0; // 포장된 햄버거의 개수

    // 햄버거를 구성하는 재료의 순서
    const burgerOrder = [1, 2, 3, 1];

    // 주어진 재료들을 순차적으로 처리
    ingredient.forEach(ing => {
        stack.push(ing); // 현재 재료를 스택에 쌓음

        // 스택의 마지막 4개 재료가 햄버거 구성 순서와 일치하는지 확인
        if (stack.length >= 4) {
            const lastFour = stack.slice(-4); // 스택의 마지막 4개 재료 추출
            if (JSON.stringify(lastFour) === JSON.stringify(burgerOrder)) {
                count++; // 햄버거 개수 증가
                stack.splice(-4); // 구성된 햄버거 재료 제거
            }
        }
    });

    return count; // 포장된 햄버거의 총 개수 반환
}
//JSON.stringify() 함수는 JavaScript 객체나 배열을 JSON 문자열로 변환합니다. 따라서 JSON.stringify(lastFour) === JSON.stringify(burgerOrder) 부분은 lastFour 배열과 burgerOrder 배열을 각각 JSON 문자열로 변환한 후, 이 두 문자열이 완전히 동일한지 비교합니다. 만약 두 문자열이 완전히 동일하다면, 그것은 두 배열의 내용과 순서가 완전히 같다는 것을 의미합니다.
