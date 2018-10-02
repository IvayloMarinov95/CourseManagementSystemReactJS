const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname );
    }
});


const upload = multer({storage: storage});

//Lecture Model
const Lecture = require('../../models/Lecture');

// @route GET api/lectures
//@desc get All Lectures
//@access Public
router.get('/', (req, res) => {
    Lecture.find()
    .sort({date: -1})
    .then(lectures => res.json(lectures))
});

router.get('/:id', (req, res) => {
    Lecture.findById(req.params.id)
    .then(lecture => res.json(lecture))
});

// @route POST api/lectures
//@desc Create a Lecture 
//@access Public
router.post('/', upload.single('myFile'), (req, res) => {
    const lecture = new Lecture({
        name: req.body.name,
        course: req.body.course,
        myFile: req.file.path
    });
    lecture.save().then(lecture => res.json(lecture));
});

router.put('/:id', (req, res) => {
    const lecture = Lecture.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    });
    lecture.update().then(lecture => res.json(lecture))
});

//@route DELETE api/lectures/:id
//@desc Delete a Lecture
//access Public
router.delete('/:id', async(req, res) => {
    try{
    const lecture = await Lecture.findById(req.params.id);
    const nameOfFile = lecture.myFile;
    fs.unlink(nameOfFile, (err) => {
        if (err) throw err;
        console.log('path/file.txt was deleted');
      });
    lecture.remove().then(() => res.json({success:true}));
    // .then(lecture => lecture.remove()
    // .then(() => res.json({succes: true})))
    // .catch(err => res.status(404).json({success:false}));
}catch(error){ 
console.log(error);
}
});

module.exports = router;