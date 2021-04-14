package database

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-oci8"
	"log"
)

var DB *sql.DB

func Connect() {
	conn, err := sql.Open("oci8", "TEST/1234@localhost:1521/ORCL18")
	if err != nil {
		fmt.Println("Fallo la conexion a la base de datos")
		log.Fatal(err)
		return
	}

	DB = conn
}
