function solution(keymap, targets) {
    var answer = [];
    const map = new Map() /// 맵 생성
    
    for(const key of keymap){ /// keymap의 인덱스들을 key로 선언
        for(let i = 0; i < key.length; i++){/// key을 루프함
            if(!map.has(key[i]) || i + 1 < map.get(key[i])){ /// map에 key값이 없으면 key값과 index+1를 넣어줌 // 루프를 한바퀴 돌고 나서 map에 등록된 key의 index 값 보다 keymap의 인덱스인 새로 등록되는 키의 인덱스가 더 작으면 그 새로운 key값을 맵에 새로 등록
                map.set(key[i],i+1)
            }
        }
    }
    
    for(const target of targets){ /// 타겟 배열을 순회
        // count 변수에 타겟의 인덱스와 일치하는 알파벳을 맵에서 가져와 그 인덱스를 더해줌
        let count = 0;
        for(let i = 0; i < target.length; i++){
            count += map.get(target[i])
            
        }
        answer.push(count || -1)
    }
    

    return answer;
}
