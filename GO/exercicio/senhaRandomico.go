package main

import "fmt"

func main() {
	mensagem := printValorSenha{"Digite um valor para senha:"}
	mensagem.printSenha()

	var valor int
	fmt.Scanln(&valor)

//entrada do valor do usuário
	mensagemValor := printValorSenha{"Você digitou:"  }
	mensagemValor.printSenha()
	fmt.Println(valor)


}


// Monta envio de mensagens
type printValorSenha struct {
	message string
}
func (pvs *printValorSenha) printSenha() {
	fmt.Println(pvs.message)
}


0123456789'-!"#$%&()*,./:;?@[\]^_`+<=>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

