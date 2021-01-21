let express = require('express'); 
let router = express.Router(); 


router.get('/practice', function(req,res) { 
    res.send('Hey!! This is a practice router!');
});

router.get('/about', function(req,res) { 
    res.send('Hey!! This is an about route!');
});

module.exports = router





