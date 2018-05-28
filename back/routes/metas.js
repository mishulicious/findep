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

router.post('/editarmeta', (req, res) => {
    Meta.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
})

router.delete('/borrar/:id', (req, res) => {
    let _id = req.params.id;
    Meta.findByIdAndRemove(_id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(true)
    })
})

/* router.post('/edit/:id', (req, res, next) => {
    let _id = req.body.id;
    Meta.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json(meta);
        })
        .catch(e => next(e))
}) */

module.exports = router;