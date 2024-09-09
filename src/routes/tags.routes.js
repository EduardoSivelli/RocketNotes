const { Router } = require("express")

const TagsControllers = require("../controllers/TagsController")
const ensureAuthenticated = require("../middleware/ensureAuthenticated");


const tagsRoutes = Router()

function myMiddleware(request, response, next){
  console.log("Você passou pelo middleware")

  next()
}
const tagsControllers = new TagsControllers()

tagsRoutes.get("/", ensureAuthenticated, tagsControllers.index);



module.exports = tagsRoutes;