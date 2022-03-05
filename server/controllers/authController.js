const conn = require('../database');

class AuthController {
    async registration(req, res) {
        try {
            const {userName, userId, admin} = req.body;
            const userRole = admin ? "ADMIN" : "USER";
            conn.query('INSERT INTO `user` (`id`, `name`, `role`) VALUES (?, ?, ?)',
                [userId, userName, userRole],
                (err, result) => {
                    if (err) res.send(err);
                    res.send({id: userId, name: userName, role: userRole});
                })
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'})
        }
    }
    async login(req, res) {
        try {
            const {userId} = req.body;
            conn.query('SELECT * FROM `user` WHERE `id` = ?', [userId], (err, result) => {
                if (err) res.send(err);
                if (result.length) {
                    res.send({...result[0], isAuth: true});
                } else res.send({isAuth: false});
            })
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Login error'})
        }
    }
}

module.exports = new AuthController();