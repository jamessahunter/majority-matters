const router = require('express').Router();

const { Answer } = require('../../models');

router.get('/:id',async (req,res)=>{
    try {
        const dbAnswerData = await Answer.findAll({
            where: {
              question_id: req.params.id,
            },
            attributes: ['id','total'],
            });
            const answers=dbAnswerData.map((answer)=>answer.get({plain:true}));

            console.log(answers);
            res.send(answers);
    }catch{
        console.log(err);
        res.status(500).json(err);
    }
})



router.put('/:id',async (req,res)=>{
    console.log(req.body.passArr);
    for(let i=0; i<req.body.passArr.length; i++){
        Answer.update(req.body.passArr[i],{
            where:{
                id: i+1,
                question_id: req.params.id,
            }
        })
    }
    res.json('Updated');
})

module.exports = router;