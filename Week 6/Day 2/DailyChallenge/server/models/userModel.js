const pool = require('../config/database');
const bcrypt = require('bcrypt');

class User {
    static async create(userData) {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const { email, username, password, first_name, last_name } = userData;

            // Insert into users table
            const userResult = await client.query(
                'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *',
                [email, username, first_name, last_name]
            );

            // Hash password and insert into hashpwd table
            const hash = await bcrypt.hash(password, 10);
            await client.query(
                'INSERT INTO hashpwd (username, password) VALUES ($1, $2)',
                [username, hash]
            );

            await client.query('COMMIT');
            return userResult.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    }

    static async findByUsername(username) {
        const result = await pool.query(
            'SELECT u.*, h.password FROM users u JOIN hashpwd h ON u.username = h.username WHERE u.username = $1',
            [username]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async getAll() {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    }

    static async update(id, userData) {
        const { email, first_name, last_name } = userData;
        const result = await pool.query(
            'UPDATE users SET email = $1, first_name = $2, last_name = $3 WHERE id = $4 RETURNING *',
            [email, first_name, last_name, id]
        );
        return result.rows[0];
    }
}

module.exports = User; 