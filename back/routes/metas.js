const router = require('express').Router();
const Meta = require('../models/Meta');
const multer = require('multer');
const upload = multer({ dest: './public/images/metas' });
const User = require('../models/User');

//VERIFÍCAME SI EL USUARIO ESTÁ AUTENTICADO
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(403);
    res.send("No estás autorizado");
}

//NUEVA META
router.post('/new', upload.single("picture"), (req, res) => {
    req.body.picture = `${req.protocol}://${req.headers.host}/images/metas/` + req.file.filename;
    req.body.user = req.user._id;
    Meta.create(req.body)
        .then(meta => {
            console.log("meta", meta)
            User.findByIdAndUpdate(req.user._id, { $push: { metas: meta._id } }, { new: true })
                .then(user => {
                    console.log("aasd", user);
                    res.json(meta)
                })
        }).catch(e => {
            res.send(e);
        })
});

//GET ME ALL LAS METAS
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

//BÓRRAME ESTA META
router.delete('/borrar/:id', (req, res) => {
    Meta.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(true)
    })
})

//DETALLE DE LA META
router.get('/:id', (req, res, next) => {
    Meta.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//EDÍTAME ESTA META
router.put('/edit/:id', (req, res, next) => {
    Meta.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(meta => {
            res.json(meta)
        })
        .catch(e => next(e))
});

module.exports = router;