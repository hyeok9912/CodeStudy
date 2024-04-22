
function solution(lines) {
    let line = new Array(200).fill(0);

    lines.forEach(([a, b]) => { //lines를 순회하며 각각의 선분의 시작점 끝점을 매개 변수로 가지고 시작점 부터 끝점까지 1씩 더해주며 반복한다 겹치는 부분은 1보다 숫자가 커진다  line[a+100] = a는 line의 100번째 인덱스 99 부터 시작하여 증감한다 라는 뜻 line 배열은 -100 부터 99까지의 인덱스를 가짐
        for(; a < b; a++) line[a+100]++;
    });

    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0) // line를 순회하며 c 값이 1보다 크면 겹치는 부분이므로 1을 더해주고 아니라면 그냥 둠
}
