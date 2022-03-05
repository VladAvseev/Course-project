const conn = require('../database');

class UserController{
    async deleteUser(req, res) {
        try {
            const {userId} = req.body;
            conn.query('DELETE FROM user WHERE id = ?', [userId], (err) => {
                if (err) res.send(err);
                res.send({message: 'User was deleted.'})
            });
        } catch (e) {
            console.log(e);
            res.status(400).send({message: 'Delete user error!'})
        }
    }

    async changeRole(req, res) {
        try {
            const {userRole, userId} = req.body;
            conn.query('UPDATE `user` SET `role` = ? WHERE `id` = ?', [userRole, userId], (err) => {
                if (err) res.send(err);
                res.send({message: 'Role was changed.'})
            });
        } catch (e) {
            console.log(e);
            res.status(400).send({message: 'Change role error!'})
        }
    }

    async getUsers(req, res) {
        try {
            conn.query('SELECT * FROM `user`', (err, result) => {
                if (err) res.send(err);
                res.send(result);
            })
        } catch (e) {
            console.log(e);
            res.status(400).send({message: 'Get users error!'})
        }
    }

    async getUser(req, res) {
        try {
            const {userId} = req.body;
            conn.query('SELECT * FROM `user` WHERE `id` = ?', [userId], (err, result) => {
                if (err) res.send(err);
                res.send(result[0]);
            })
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Get user error!'})
        }
    }
}

module.exports = new UserController();