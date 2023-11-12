module.exports={
    isOdd: (value) =>{
        return value % 2 !== 0;
    },
    isEven: (value)=>{
        return value % 2 ==0;
    },
    equal: (user1, user2)=>{
        let score1=0;
        let score2=0;
        for(let i=0;i<user1.length;i++){
            score1 += user1[i].user_score;
        }
        for(let i=0;i<user2.length;i++){
            score2 += user2[i].user_score;
        }
        return score1/user1.length===score2/user2.length;
    },
    compare: (user1, user2)=>{
        let score1=0;
        let score2=0;
        for(let i=0;i<user1.length;i++){
            score1 += user1[i].user_score;
        }
        for(let i=0;i<user2.length;i++){
            score2 += user2[i].user_score;
        }
        return score1/user1.length>score2/user2.length
    },
    teamScore: (user)=>{
        let score=0;
        for(let i=0;i<user.length;i++){
            score += user[i].user_score;
        }
        return score/user.length;
    },
    genre11: (genre)=>{
        return genre!==11
    },
    json: (context)=> {
        return JSON.stringify(context);
    },
}