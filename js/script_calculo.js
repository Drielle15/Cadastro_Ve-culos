function calcularSeguro(valor) {
    return valor * 0.10;
  }
  
  function calcularIPVA(valor, combustivel, ano) {
    const atual = new Date().getFullYear();
    const idade = atual - ano;
  
    if (idade > 20) {
      return "Isento";
    }
  
    if (combustivel === "gasolina") return valor * 0.20;
    if (combustivel === "etanol") return valor * 0.15;
    if (combustivel === "flex") return valor * 0.10;
    if (combustivel === "hibrido") return valor * 0.08;
    if (combustivel === "eletrico") return valor * 0.02;
  }