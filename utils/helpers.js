module.exports={
    //checks if values are odd
    isOdd: (value) =>{
        return value % 2 !== 0;
    },
    //checks if values are even
    isEven: (value)=>{
        return value % 2 ==0;
    },
    //checks to see if team scores are equal
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
    //checks to see if team 1 scored more that team 2
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
    //gets the score for the team
    teamScore: (user)=>{
        let score=0;
        for(let i=0;i<user.length;i++){
            score += user[i].user_score;
        }
        return score/user.length;
    },
    //checks if the genre is 11
    genre11: (genre)=>{
        return genre!==11
    },
}