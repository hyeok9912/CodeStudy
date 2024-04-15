function solution(board) {
    var answer = 0;
    let n = board.length
    const dangerArea = [[-1,-1],[-1,0],[-1,1],
                     [0,-1],          [0,1],
                       [1,-1],[1,0],[1,1]];
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] === 1)continue
            let isSafe = true;
            
            for(let dan of dangerArea){
                const ni =  i+dan[0]
                const nj = j +dan[1]
                
                if(ni >= 0 && ni < n && nj >= 0 && nj < n){
                    if(board[ni][nj]===1){
                        isSafe = false
                        break
                    }
                }
            }
            if(isSafe) answer ++
        }
    }
    return answer;
}

//// 아직 2중 배열에 대한 접근이 어려운거같다
/// 2차원 배열에 대해 좀 더 공부해야겠다
