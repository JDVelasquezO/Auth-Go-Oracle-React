package database

import (
	"database/sql"
	"fmt"
	"log"
)

func Connect() {
	_, err := sql.Open("oci8", "TEST/1234@localhost:1521/ORCL18")
	if err != nil {
		fmt.Println("Fallo la conexion a la base de datos")
		log.Fatal(err)
		return
	}
}
