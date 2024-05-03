function solution(park, routes) {
    
    let height = park.length;
    let width = park[0].length;
    
    // 시작 좌표
    let current;
    for(let i = 0; i < height; i++){ // i는 height까지
        for(let j = 0; j < width; j++){ // j는 width까지
            if(park[i][j] === 'S'){
                current = [i, j]; // 좌표를 배열로 저장
            }
        }
    }
    
    // routes의 명령에 따라 park의 current 좌표를 수정하는 로직
    const direction = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0],
    };
    
    for(const route of routes){
        const [dir, num] = route.split(' ');
        let Num = parseInt(num);
        let [nx, ny] = current;
        let step = 0;
        while(step < Num){
            nx += direction[dir][0];
            ny += direction[dir][1];
            if(nx < 0 || height <= nx || ny < 0 || width <= ny || park[nx][ny] === 'X') break;
            step++; // step 증가
        }
        if(step === Num){
            current = [nx, ny]; // 현재 위치 갱신
        }
    }
    
    return current; // 수정된 위치 반환
}
