const router = require('express').Router();
const Meta = require('../models/Meta');
const multer = require('multer');
const upload = multer({ dest: './public/images/metas' });
const User = require('../models/User');

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(403);
    res.send("No estás autorizado");
}

router.post('/new', upload.single("picture"), (req, res) => {
    req.body.picture = `${req.protocol}://${req.headers.host}/images/metas/` + req.file.filename;
    req.body.user = req.user._id;
    Meta.create(req.body)
        .then(meta => {
            console.log("meta", meta)
                //req.user.metas.push(meta._id);
            User.findByIdAndUpdate(req.user._id, { $push: { metas: meta._id } }, { new: true })
                //User.findByIdAndUpdate(req.user._id, req.user)
                .then(user => {
                    console.log("aasd", user);
                    res.json(meta)
                })
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

router.delete('/borrar/:id', (req, res) => {
    Meta.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(true)
    })
})

router.get('/:id', function(req, res, next) {
    Meta.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/edit/:id', function(req, res, next) {
    Meta.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;