const form = document.getElementById("form-veiculo");
const lista = document.getElementById("lista-dos-veiculos");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const modelo = document.getElementById("modelo").value;
  const marca = document.getElementById("marca").value;
  const placa = document.getElementById("placa").value;
  const ano = Number(document.getElementById("ano").value);
  const valor = Number(document.getElementById("valor").value);
  const combustivel = document.querySelector("input[name='comb']:checked").value;

  const atual = new Date().getFullYear();
  const idade = atual - ano;

  const seguro = calcularSeguro(valor);
  const ipva = calcularIPVA(valor, combustivel, ano);

  let total;

  if (ipva === "Isento") {
    total = seguro;
  } else {
    total = seguro + ipva;
  }

  const div = document.createElement("div");

  div.innerHTML = `
    <p><strong>Modelo:</strong> ${modelo}</p>
    <p><strong>Marca:</strong> ${marca}</p>
    <p><strong>Placa:</strong> ${placa}</p>
    <p><strong>Idade:</strong> ${idade} anos</p>
    <p><strong>Seguro:</strong> R$ ${seguro.toFixed(2)}</p>
    <p><strong>IPVA:</strong> ${ipva === "Isento" ? "Isento" : "R$ " + ipva.toFixed(2)}</p>
    <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
    <hr>
  `;

  lista.appendChild(div);

  form.reset();
});