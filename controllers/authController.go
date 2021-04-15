package controllers

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	_ "github.com/mattn/go-oci8"
	"log"
	"login_register/database"
	"login_register/models"
	"strconv"
	"time"
)

// endpoints

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
	res, _ := database.DB.Query("SELECT COUNT(*) FROM CLIENT")
	for res.Next() {
		var data int
		res.Scan(&data)
		user.Id = data + 1
	}

	query := "INSERT INTO TEST.CLIENT (ID, NAME, EMAIL, PASSWORD) VALUES ('"+strconv.Itoa(user.Id)+"', '" + user.Name + "', '" + user.Email + "', '" + user.Password + "')"
	_, err := database.DB.Query(query)
	if err != nil {
		fmt.Println("Error en la consulta")
		log.Fatal(err)
		return err
	}

	return c.JSON(fiber.Map{
		"res": "Registro agregado correctamente",
	})
}

func Login (c *fiber.Ctx) error {
	var data map[string]string // key: value
	e := c.BodyParser(&data)
	if e != nil {
		return e
	}

	var user models.User
	user.Email = data["email"]
	user.Password = data["pass"]
	rowsId, err := database.DB.Query("SELECT ID FROM TEST.CLIENT WHERE EMAIL = '"+user.Email+"' AND PASSWORD = '"+user.Password+"'")
	rowsName, err := database.DB.Query("SELECT NAME FROM TEST.CLIENT WHERE EMAIL = '"+user.Email+"' AND PASSWORD = '"+user.Password+"'")
	if err != nil {
		fmt.Println("Error en la consulta")
		log.Fatal(err)
		return err
	}

	for rowsName.Next() {
		var data string
		rowsName.Scan(&data)
		user.Name = data
	}

	for rowsId.Next() {
		var data int
		rowsId.Scan(&data)
		user.Id = data
	}

	cookie := fiber.Cookie{
		Name: "user",
		Value: strconv.Itoa(user.Id),
		Expires: time.Now().Add(time.Hour*24), // 1 Día
		HTTPOnly: true,
	}
	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"msg": "success",
	})
}
