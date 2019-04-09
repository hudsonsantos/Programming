// Instanciação Básica

/*
package main

func main() {
	user1 := usuario{"Bob"}
	// user1.nome_usuario = "Bob"

	println(user1.nome_usuario)

}

type usuario struct {
	nome_usuario string
}
*/

// Criação de objeto usando Construtor

/*
package main

import "fmt"

func main() {
	user1 := myUser()
	user1.nomeUsuario["Nome_completo"] = "Bob"

	fmt.Println(user1)

}

type usuario struct {
	nomeUsuario map[string]string
}

func myUser() *usuario {
	resultado := usuario{}
	resultado.nomeUsuario = map[string]string{}

	return &resultado
}

*/

// Criando Métodos
package main

func main() {
	mensagem := messagePrinter{"Hello Go"}
	mensagem.printMessage()

}

type messagePrinter struct {
	message string
}

func (mp *messagePrinter) printMessage() {
	println(mp.message)
}
