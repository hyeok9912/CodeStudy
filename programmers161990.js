function solution(wallpaper) {
  // 좌표를 정리할 배열 선언
  const X = []; /// j
  const Y = [];/// i 

  // 현재 파일의 위치
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {

      if (wallpaper[i][j] === "#") {
        Y.push(i);
        X.push(j);
      }

    }
  }


  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  // 가장 상단 좌표값은 Y 최솟값
  // 가장 좌측 좌표값은 X 최솟값
  // 가장 하단 좌표값은 Y의 최댓값에 1을 더한 값이고 (파일을 포함해야하기 때문)
  // 가장 우측 좌표값은 X의 최댓값에 1을 더한 값이 됩니다.
  return [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1];
}
