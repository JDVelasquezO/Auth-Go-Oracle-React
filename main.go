package main

// Importamos los paquetes de framework y archivos externos
import (
	"github.com/gofiber/fiber/v2"
	_ "github.com/mattn/go-oci8"
	"login_register/database"
	"login_register/routes"
)

func main() {
	database.Connect()
	app := fiber.New() // Instancia del framework
	routes.Setup(app)
	app.Listen(":3000")
}