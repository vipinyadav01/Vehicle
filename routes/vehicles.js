const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');
const upload = require('../config/multer');

// Get all vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find().sort({ createdAt: -1 });
        res.render('vehicles/index', {
            title: 'All Vehicles',
            vehicles
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Show add form
router.get('/add', (req, res) => {
    res.render('vehicles/add', {
        title: 'Add Vehicle'
    });
});

// Add vehicle - POST
router.post('/', upload.single('image'), async (req, res) => {
    try {
        let image = '';
        if(req.file) {
            image = `/uploads/${req.file.filename}`;
        }
        
        const newVehicle = new Vehicle({
            name: req.body.name,
            price: req.body.price,
            image,
            description: req.body.description,
            brand: req.body.brand
        });

        await newVehicle.save();
        res.redirect('/vehicles');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Show single vehicle
router.get('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        
        if(!vehicle) {
            return res.status(404).send('Vehicle not found');
        }
        
        res.render('vehicles/show', {
            title: vehicle.name,
            vehicle
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Show edit form
router.get('/edit/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        
        if(!vehicle) {
            return res.status(404).send('Vehicle not found');
        }
        
        res.render('vehicles/edit', {
            title: `Edit ${vehicle.name}`,
            vehicle
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Update vehicle - PUT
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        let vehicle = await Vehicle.findById(req.params.id);
        
        if(!vehicle) {
            return res.status(404).send('Vehicle not found');
        }
        
        const data = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            brand: req.body.brand
        };
        
        // If new image uploaded
        if(req.file) {
            data.image = `/uploads/${req.file.filename}`;
        }
        
        vehicle = await Vehicle.findByIdAndUpdate(
            req.params.id,
            data,
            { new: true }
        );
        
        res.redirect(`/vehicles/${vehicle._id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Delete vehicle - DELETE
router.delete('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        
        if(!vehicle) {
            return res.status(404).send('Vehicle not found');
        }
        
        await Vehicle.findByIdAndDelete(req.params.id);
        res.redirect('/vehicles');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
