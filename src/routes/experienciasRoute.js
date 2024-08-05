const express = require('express');

const experienciasController = require('../controllers/experienciasControllers');

const router = express.Router();

router.get('/', experienciasController.getExperiencias);
router.get('/:id', experienciasController.getAllExperienciasById);
router.post('/', experienciasController.createExperiencia);
router.put('/:id', experienciasController.updateExperiencia);
router.delete('/:id', experienciasController.deleteExperiencia);

module.exports = router;