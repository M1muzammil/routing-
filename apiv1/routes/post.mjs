
import express from 'express';
let router = express.Router()



// GET     /api/feed/:userId
router.get('/post/:userId', (req, res, next) => {
    // console.log('this is signup!', new Date());
    res.send('post created v1');
})


export default router