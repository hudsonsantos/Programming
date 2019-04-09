package main

/*
 Passagem por referência
*/
func main() {

	mensagem := "Oi, tudo bem!"

	dizerOi(&mensagem)
	println(mensagem)

}

func dizerOi(msg *string) {
	println(*msg)

	*msg = "Hello GoLang"
}

/* Passagem por valor
func main() {

	mensagem := "Oi, tudo bem!"

	dizerOi(mensagem)

}

func dizerOi(msg string) {
	println(msg)
}


*/
