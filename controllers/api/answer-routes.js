const router = require('express').Router();
const { Answer } = require('../../models');
const { withAuth } = require('../../utils/auth');
//finds all the answers for a specific question and returns with just the attributes of total and id
router.get('/:id', withAuth, async (req,res)=>{
    try {
        const dbAnswerData = await Answer.findAll({
            where: {
              question_id: req.params.id,
            },
            attributes: ['id','total'],
            });
            const answers=dbAnswerData.map((answer)=>answer.get({plain:true}));

            res.send(answers);
    }catch{
        console.log(err);
        res.status(500).json(err);
    }
})



router.put('/:id', withAuth, async (req,res)=>{
    for(let i=0; i<req.body.length; i++){
        Answer.update({total: req.body[i].total},{
            where:{
                id: req.body[i].id
            }
        })
    }
    res.json('Updated');
})



module.exports = router;