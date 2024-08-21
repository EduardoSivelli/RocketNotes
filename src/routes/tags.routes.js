const { Router } = require("express")

const TagsControllers = require("../controllers/TagsController")

const tagsRoutes = Router()

function myMiddleware(request, response, next){
  console.log("Você passou pelo middleware")

  next()
}
const tagsControllers = new TagsControllers()

tagsRoutes.get("/:user_id", tagsControllers.index);



module.exports = tagsRoutes;