package routes

import (
	"github.com/gofiber/fiber/v2"
	"login_register/controllers"
)

// Llamamos el controlador de endpoint en enrutador
func Setup(app *fiber.App) {
	// app.Get("/", controllers.Register)
	app.Get("/", controllers.Register)
}
