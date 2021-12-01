const express= require('express')
const router = express.Router()


// Ici nous definissions nos routes pour les differentes requettes du client;
//en associant les chemins de routage aux methodes de demande.

router.post('/add', require("../controller/user.controller").addUser);
router.get('/all', require("../controller/user.controller").getUsers);
router.delete('/delete/:id', require("../controller/user.controller").deleteUser);
router.put('/update/:id', require("../controller/user.controller").updateUser);
router.get('/all/:id',require("../controller/user.controller").getOneUser)


module.exports = router;