// Pega a data e hora atual
let agora = new Date();
let now = new Date();

// Incrementa 5 horas
agora.setHours(agora.getHours() + 5);

// Exibe a data e hora no formato padrão de Date (ISO 8601)
console.log(agora.toISOString());
console.log(now);

if (agora < now) {
  console.log("SIM");
} else {
  console.log("NÃO");
}
