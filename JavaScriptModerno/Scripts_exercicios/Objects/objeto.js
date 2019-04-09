
// Classe
function Carro()
{

  // Atributos privados
  var Marca = "Sem marca";
  var Modelo = "Sem modelo";

  // Atributos públicos
  this.SetMarca = SetMarca;
  this.SetModelo = SetModelo;
  this.ShowMarca = DisplayMarca;
  this.ShowModelo = DisplayModelo; 
    
  // Métodos
  function DisplayMarca(){
    alert("Marca do carro: " + Marca);
  }
    
  function DisplayModelo(){
    alert("Modelo do carro: " + Modelo);
  }
    
  function SetMarca(_marca) {
    Marca = _marca;
  }
    
  function SetModelo(_modelo) {
      Modelo = _modelo;
  }
    
  }

  // Objeto: Instância da Classe Carro
  var carro = new Carro();

  // Definição dos atributos

  // Isso não funciona, pois os atributos são privados
  //carro.Marca = "Fiat";
  //carro.Modelo = "Uno";

  // Essa é a forma correta
  carro.SetMarca("Fiat");
  carro.SetModelo("Uno");
  
  // Display
  carro.ShowMarca(); 
  carro.ShowModelo(); 
