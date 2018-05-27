const router = require('express').Router();
const Meta = require('../models/Meta');
const multer = require('multer');
const upload = multer({ dest: './public/images/metas' });

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(403);
    res.send("No estás autorizado");
}

router.post('/new', upload.single("picture"), (req, res) => {
    req.body.picture = `${req.protocol}://${req.headers.host}/images/metas/` + req.file.filename;
    Meta.create(req.body)
        .then(meta => {
            res.json(meta);
            return User.findByIdAndUpdate(req.user._id, req.user)
        }).catch(e => {
            res.send(e);
        })
});

router.get('/', (req, res) => {
    Meta.find()
        .populate("user", "name")
        .then(metas => {
            res.json(metas);
        })
        .catch(e => {
            console.log(e);
            res.send("No sirvo :(")
        })
});

module.exports = router;