const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"title": "prueba-tecnica-sebastian-toscano"});
});

module.exports = router;