package main

// Importamos los paquetes de framework y archivos externos
import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"login_register/database"
	"login_register/routes"
)

func main() {
	database.Connect()
	app := fiber.New() // Instancia del framework
	app.Use(cors.New(cors.Config{ // Importante habilitar cors si se autentica con cookies
		AllowCredentials: true,
	}))
	routes.Setup(app)  // Setear las rutas
	app.Listen(":3000")
}
