const { Router } = require("express")

const UsersControllers = require("../controllers/UsersControllers")

const usersRoutes = Router()

function myMiddleware(request, response, next){
  console.log("Você passou pelo middleware")

  next()
}







const usersControllers = new UsersControllers()

usersRoutes.post("/", myMiddleware, usersControllers.create);
usersRoutes.put("/:id", usersControllers.update)

module.exports = usersRoutes;