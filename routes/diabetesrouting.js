const express = require('express');
const router = express.Router();
const FormDataModel = require('../models/diabetesmodel');

// GET route to retrieve all form data
router.get('/formData', async (req, res) => {
    try {
        const formData = await FormDataModel.find();
        res.json(formData);
    } catch (error) {
        console.error('Error fetching form data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST route to create new form data
router.post('/formData', async (req, res) => {
    const formData = req.body;
    try {
        const newFormData = await FormDataModel.create(formData);
        res.status(201).json(newFormData);
    } catch (error) {
        console.error('Error creating form data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
