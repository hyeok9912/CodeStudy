function findMode(numbers) {
  const numMap = new Map();
  
  // 숫자별 등장 횟수 카운트 
  numbers.forEach((num) => {
    if (numMap.has(num)) {
      numMap.set(num, numMap.get(num) + 1);
    } else {
      numMap.set(num, 1);
    }
  });
  
  let mode;
  let maxCount = 0;
  
  // 최빈값 찾기
  numMap.forEach((count, num) => {
    if (count > maxCount) {
      maxCount = count;
      mode = num;
    }
  });
  
  return mode;
}

// 사용 예
const numbers = [1, 2, 3, 2, 5, 2, 3, 2];
console.log(findMode(numbers)); // 출력: 2
