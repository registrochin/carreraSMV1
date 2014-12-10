var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Bienvenido', encabezado: 'Carrera San Martin 2015' });
});

/* GET recorrido page. */
router.get('/recorrido', function(req, res) {
  res.render('recorrido', { title: 'Recorrido', encabezado: 'Ruta de la carrera' });
});

/* GET catel page. */
router.get('/cartel', function(req, res) {
  res.render('cartel', { title: 'Cartel', encabezado: ''  });
});

/* GET inscripciones page. */
router.get('/inscripciones', function(req, res) {
  res.render('inscripciones', { title: 'Inscripciones', encabezado: ''  });
});

/* GET resultados page. */
router.get('/resultados', function(req, res) {
  res.render('resultados', { title: 'Resultados', encabezado: 'Tabla de resultados:'  });
});


/* GET userlist page. 
router.get('/userlist', function(req, res) {

	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
	});
});*/


/* POST to Add User Service 
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});*/

module.exports = router;
