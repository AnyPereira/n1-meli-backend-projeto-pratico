const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/colaborador",controller.getColaborador)
router.get("/:id", controller.getById)
router.get('/:id/colaborador', controller.getNomeId)



module.exports = router