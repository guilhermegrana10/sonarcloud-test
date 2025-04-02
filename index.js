function soma(a, b) {
  return a + b;
}

// Função duplicada (code smell)
function somaDuplicada(x, y) {
  return x + y;
}

// Função sem uso (code smell)
function inutil() {
  console.log('Nunca sou chamada');
}

// Uso de var (code smell e má prática)
var resultado = soma(2, 3);

// Comparação perigosa (bug potencial)
if (resultado = 5) {  // aqui usamos "=" ao invés de "==="
  console.log('Resultado é 5');
}

// Vulnerabilidade: função que executa código via eval
function executaCodigo(codigo) {
  eval(codigo);  // vulnerabilidade grave
}

module.exports = {
  soma,
  somaDuplicada,
  inutil,
  executaCodigo
};
