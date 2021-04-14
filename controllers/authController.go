package controllers

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	_ "github.com/mattn/go-oci8"
	"log"
	"login_register/database"
	"login_register/models"
)

// Creacion de los endpoint
func Register(c *fiber.Ctx) error {
	var data map[string]string // key: value
	e := c.BodyParser(&data)
	if e != nil {
		return e
	}

	//password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: data["pass"],
	}

	query := "INSERT INTO TEST.CLIENT (ID, NAME, EMAIL, PASSWORD) VALUES (3, '" + user.Name + "', '" + user.Email + "', '" + user.Password + "')"
	// rows, err := database.DB.Query("SELECT NAME FROM TEST.CLIENT")
	_, err := database.DB.Query(query)
	if err != nil {
		fmt.Println("Error en la consulta")
		log.Fatal(err)
		return err
	}

	return c.JSON("Registro agregado correctamente")
}
