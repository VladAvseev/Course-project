const conn = require('../database');

class PostController {
    async create(req, res) {
        const {themeId, userId, title, text, timeOfCreation, picture_href, tags} = req.body;
        await conn.query('INSERT INTO `post` (`theme_id`, `user_id`, `title`, `text`, `time_of_creation`) VALUES (?, ?, ?, ?, ?)',
            [themeId, userId, title, text, timeOfCreation, picture_href], (err, result, field) => {
                if (err) throw err;
                console.log(field)
                res.json({message: 'post created'});
            })
    }

    async change(req, res) {
        const {themeId, userId, title, text, timeOfCreation, picture_href, tags, postId} = req.body;
        await conn.query('UPDATE `post` SET `theme_id` = ?, `user_id` = ?, `title` = ?, `text` = ?, `time_of_creation` = ?, `picture_href` = ?) WHERE `id` = ?',
            [themeId, userId, title, text, timeOfCreation, picture_href,postId], (err, result, field) => {
                if (err) throw err;
                console.log(field)
                res.json({message: 'post created'});
            })
    }

    async delete(req, res) {
        const {postId} = req.body;
        conn.query('DELETE FROM `post` WHERE `id` = ?', [postId], (err, result) => {
            if (err) throw err;
            res.json({message: 'post deleted'});
        })
    }

    async addComment(req, res) {
        const {postId, userName, text} = req.body;
        conn.query('INSERT INTO `comment` (`post_id`, `user_name`, `text`) VALUES (?, ?, ?)', [postId, userName, text], (err, result) => {
            if (err) throw err;
            res.json({message: 'comment added'});
        })
    }

    async like(req, res) {
        const {postId, userId} = req.body;
        conn.query('INSERT INTO `like` (`post_id`, `user_id`) VALUES (?, ?)', [postId, userId], (err, result) => {
            if (err) throw err;
            res.json({message: 'like is set'});
        })
    }

    async putRating(req, res) {
        const {postId, userId, grade} = req.body;
        conn.query('INSERT INTO `comment` (`post_id`, `user_id`, `grade`) VALUES (?, ?, ?)', [postId, userId, grade], (err, result) => {
            if (err) throw err;
            res.json({message: 'rating is set'});
        })
    }

    async getUserPosts(req, res) {
        const {candidateId} = req.body;
        conn.query('SELECT * FROM `post` WHERE `user_id` = ?', [candidateId], (err, result) => {
            if (err) throw err;
            res.json(result);
        })
    }

    async getAllPosts(req, res) {
        await conn.query('SELECT * FROM `post`', (err, result) => {
            if (err) throw err;
            res.json(result);
        })
    }
}

module.exports = new PostController()

