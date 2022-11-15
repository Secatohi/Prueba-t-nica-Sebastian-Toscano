const { Router } = require('express');
const router = Router();

const data = require('../example.json');

router.get('/api/data', (req, res) => {
    res.json(data);
});

router.post('/api/data', (req, res) => {
    const { Temperatura, UUID, Hora} = req.body;
    if ( Temperatura && UUID && Hora){
        const newData = {...req.body}
        data.push(newData);
        res.json(data);
    }else {
        res.send('Error');
    }
    
});

module.exports = router;