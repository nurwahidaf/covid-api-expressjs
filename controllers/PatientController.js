// import model Patient
const Patient = require('../models/Patient');

// buat class PatientController
class PatientController {
    // method index - Get all patients
    async index(req, res) {
        const patient = await Patient.all();
        
        if (patient.length > 0) {
            const data = {
                message: `Get all resource`,
                data: patient,
            };
            return res.status(200).json(data);
        }

        const data = {
            message: `Data is empty`,
        };
        return res.status(200).json(data);
    }
    
    // method store - Add patient
    async store(req, res) {
        const { name, phone, address, status, in_date_at, out_date_at } = req.body;
        
        // validasi data
        if (!name || !phone || !address || !status || !in_date_at || !out_date_at) {
            const data = {
                message: `All fields must be filled correctly`,
            };
            return res.status(422).json(data);
        }
        
        const patient = await Patient.create(req.body);

        const data = {
            message: `Resource is added successfully`,
            data: patient,
        };
        return res.status(201).json(data);
    }
    
    // method update - Update patient
    async update(req, res) {
        const { id } = req.params;
        const patient = await Patient.find(id);

        if (patient) {
            const patientUpdated = await Patient.update(id, req.body);

            const data = {
                message: `Resource is updated successfully`,
                data: patientUpdated,
            };
            return res.status(200).json(data);
        }

        const data = {
            message: `Resource not found`,
        };
        return res.status(404).json(data);
    }
    
    // method destroy - Delete patient
    async destroy(req, res) {
        const { id } = req.params;
        const patient = await Patient.find(id);

        if (patient) {
            await Patient.delete(id);

            const data = {
                message: `Resource is deleted successfully`,
            };
            return res.status(200).json(data);
        }

        const data = {
            message: `Resource not found`,
        };
        return res.status(404).json(data);
    }

    // method show - Get one patient
    async show(req, res) {
        const { id } = req.params;
        const patient = await Patient.find(id);

        if (patient) {
            const data = {
                message: `Get detail resource`,
                data: patient,
            };
            return res.status(200).json(data);
        }

        const data = {
            message: `Resource not found`,
        };
        return res.status(404).json(data);
    }

    // method search - Search patient by name
    async search(req, res) {
        const { name } = req.params;
        const patient = await Patient.search(name);
        
        if (patient) {
            const data = {
                message: `Get searched resource`,
                data: patient,
            };
            return res.status(200).json(data);
        }

        const data = {
            message: `Resource not found`,
        };
        return res.status(404).json(data);
    }

    // method positive - Get positive patient
    async positive(req, res) {
        const status = 'positive';
        const patient = await Patient.findByStatus(status);

        if (patient) {
            const data = {
                message: `Get positive resource`,
                total: patient.length,
                data: patient,
            };
            return res.status(200).json(data);
        }

        const data = {
            message: `Resource not found`,
        };
        return res.status(404).json(data);
    }

    // method recovered - Get recovered patient
    async recovered(req, res) {
        const status = 'recovered';
        const patient = await Patient.findByStatus(status);

        if (patient) {
            const data = {
                message: `Get recovered resource`,
                total: patient.length,
                data: patient,
            };
            return res.status(200).json(data);
        }

        const data = {
            message: `Resource not found`,
        };
        return res.status(404).json(data);
    }

    // method dead - Get dead patient
    async dead(req, res) {
        const status = 'dead';
        const patient = await Patient.findByStatus(status);

        if (patient) {
            const data = {
                message: `Get dead resource`,
                total: patient.length,
                data: patient,
            };
            return res.status(200).json(data);
        }

        const data = {
            message: `Resource not found`,
        };
        return res.status(404).json(data);
    }
}

// buat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;