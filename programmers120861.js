//// 내 코드
function solution(keyinput, board) {
    let present = [0,0]
    let boardX = Math.floor(board[0]/2)
    let boardY = Math.floor(board[1]/2)
    
    for(let i = 0; i < keyinput.length; i++){
        if(keyinput[i] === 'left'){
            present[0] = Math.max(present[0] -1,-boardX)   
        }else if(keyinput[i] === 'right'){
            present[0] = Math.min(present[0] +1,boardX)
        }else if(keyinput[i] === 'up'){
            present[1] = Math.min(present[1] +1,boardY)
        }else if(keyinput[i] === 'down'){
            present[1] = Math.max(present[1] -1,-boardY)
        }
    }
    
    var answer = present;
    return answer;
}

// 다른 사람 코드
function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    let xRange = (board[0] / 2);
    let yRange = (board[1] / 2);
    
    for (let i = 0; i < keyinput.length; i ++ ) {

        if (keyinput[i] === "right" && x + 1 < xRange) x++ 
        if (keyinput[i] === "left" && x - 1 > -xRange) x-- 
        
        if (keyinput[i] === "up" && y + 1 < yRange) y++
        if (keyinput[i] === "down" && y - 1 > -yRange) y--

    }
  
    return [x, y]
    
}

// 내 코드에 비해 훨신 간략한 느낌이다
