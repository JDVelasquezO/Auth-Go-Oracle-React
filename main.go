package main

// Importamos los paquetes de framework y archivos externos
import (
	"github.com/gofiber/fiber/v2"
	"login_register/database"
	"login_register/routes"
)

func main() {
	database.Connect()
	app := fiber.New() // Instancia del framework
	routes.Setup(app)  // Setear las rutas
	app.Listen(":3000")
}
