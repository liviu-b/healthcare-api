const express = require('express');
const { createPatient, getAllPatients, getPatientById, updatePatient, deletePatient } = require('../controllers/patientController');

const router = express.Router();

router.post('/', createPatient);
router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

module.exports = router;
