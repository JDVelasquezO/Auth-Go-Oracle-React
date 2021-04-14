package controllers

import "github.com/gofiber/fiber/v2"

// Creacion de los endpoint
func Register(c *fiber.Ctx) error {
	return c.SendString("Hello, World 👋!")
}