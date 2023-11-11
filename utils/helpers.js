module.exports={
    isOdd: (value) =>{
        return value % 2 !== 0;
    },
    isEven: (value)=>{
        return value % 2 ==0;
    },
    compare: (team1, team2)=>{
        if(team1>team2){
            return true;
        } else {
            return false;
        }
    }
}