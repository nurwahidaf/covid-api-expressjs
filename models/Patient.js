// import database
const db = require('../config/database');

// buat model Patient
class Patient {
    static all() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM patients';
            db.query(sql, (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });
    }

    static async create(data) {
        const id = await new Promise((resolve, reject) => {
            const sql = 'INSERT INTO patients SET ?';
            db.query(sql, data, (err, res) => {
                if(err) throw err;
                resolve(res.insertId);
            });
        });

        await new Promise((resolve, reject) => {
            const sql = 'UPDATE patients SET created_at = ? WHERE id = ?';
            db.query(sql, [new Date, id], (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });

        const patient = await this.find(id);
        return patient;
    }
    
    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const sql = 'UPDATE patients SET ? WHERE id = ?';
            db.query(sql, [data, id], (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });

        await new Promise((resolve, reject) => {
            const sql = 'UPDATE patients SET updated_at = ? WHERE id = ?';
            db.query(sql, [new Date, id], (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });

        const patient = await this.find(id);
        return patient;
    }
    
    static delete(id) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM patients WHERE id = ?';
            db.query(sql, id, (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        })
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM patients WHERE id = ?';
            db.query(sql, id, (err, res) => {
                if(err) throw err;
                const [patient] = res;
                resolve(patient);
            });
        });
    }

    static search(name) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM patients WHERE name LIKE ?';
            db.query(sql, `%${name}%`, (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });
    }

    static findByStatus(status) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM patients WHERE status = ?';
            db.query(sql, status, (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });
    }
}

// export model
module.exports = Patient;