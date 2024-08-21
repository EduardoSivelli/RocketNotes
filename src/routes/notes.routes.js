const { Router } = require("express")

const NotesControllers = require("../controllers/NotesController")

const notesRoutes = Router()

function myMiddleware(request, response, next){
  console.log("Você passou pelo middleware")

  next()
}
const notesControllers = new NotesControllers()

notesRoutes.get("/", notesControllers.index);
notesRoutes.post("/:user_id", myMiddleware, notesControllers.create);
notesRoutes.get("/:id", notesControllers.show);
notesRoutes.delete("/:id", notesControllers.delete);


module.exports = notesRoutes;