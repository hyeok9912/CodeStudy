function solution(id_pw, db) {
    var answer = '';
    let pw = id_pw[1]
    let id = id_pw[0]
   
    for(let i = 0; i < db.length; i++){
        if(db[i][0] === id){
            if(db[i][1] === pw){
                return 'login'
            }else{
               return 'wrong pw'
            }
        }
    }
    
    return 'fail'
    return answer;
}
