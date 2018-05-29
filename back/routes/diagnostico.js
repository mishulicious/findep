/* const router = require('express').Router();
const Diagnostico = require('../models/Diagnostico');

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

module.exports = router; */