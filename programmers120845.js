//// 내 코드


function solution(box, n) {
    
    let width = parseInt(box[0]/n)
    let row = parseInt(box[1]/n)
    let height = parseInt(box[2]/n)
    
    var answer = width * row * height;
    
    return answer;
}


//// 다른사람 코드
function solution(box, n) {
    return parseInt(box[0]/n) * parseInt(box[1]/n) * parseInt (box[2]/n)
}
//// 다른사람 코드
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

}
//// 다른사람 코드
function solution(box, n) {
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
}
