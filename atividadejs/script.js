// ================================================
// ATIVIDADE 1 — MAIOR_MENOR
// Lê 5 números e encontra o maior e o menor.
// ================================================
function MAIOR_MENOR() {
  // Pega os valores dos campos HTML e converte para número
  let a = Number(document.getElementById("mm_n1").value);
  let b = Number(document.getElementById("mm_n2").value);
  let c = Number(document.getElementById("mm_n3").value);
  let d = Number(document.getElementById("mm_n4").value);
  let e = Number(document.getElementById("mm_n5").value);

  // Esconde resultados anteriores
  document.getElementById("mm_resultado").hidden = true;
  document.getElementById("mm_erro").hidden = true;

  // isNaN = "is Not a Number?" — campo vazio vira NaN
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) ||
      document.getElementById("mm_n1").value === "" ||
      document.getElementById("mm_n2").value === "" ||
      document.getElementById("mm_n3").value === "" ||
      document.getElementById("mm_n4").value === "" ||
      document.getElementById("mm_n5").value === "") {
    document.getElementById("mm_erro").hidden = false;
    return;
  }

  // Começa "chutando" que o primeiro número é o maior e o menor
  let maior = a;
  let menor = a;

  // Array com os outros 4 valores
  let valores = [b, c, d, e];

  // Loop: percorre cada número e compara
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > maior) maior = valores[i];
    if (valores[i] < menor) menor = valores[i];
  }

  // Escreve o resultado na página
  document.getElementById("mm_maior").textContent = maior;
  document.getElementById("mm_menor").textContent = menor;
  document.getElementById("mm_resultado").hidden = false;
}


// ================================================
// ATIVIDADE 2 — VOGAL
// Recebe um caractere e retorna 1 se for vogal, 0 se não for.
// ================================================
function VOGAL(c) {
  // .toLowerCase() transforma em minúsculo para comparar sem se preocupar
  // com maiúsculas. Ex: "A" vira "a"
  let letra = c.toLowerCase();

  // .includes() verifica se a string contém aquele caractere
  if ("aeiouáéíóúàèìòùãõâêîôû".includes(letra)) {
    return 1; // é vogal
  } else {
    return 0; // não é vogal
  }
}

function checarVogal() {
  // Pega o que foi digitado no campo e remove espaços com .trim()
  let entrada = document.getElementById("vg_letra").value.trim();

  document.getElementById("vg_resultado").hidden = true;
  document.getElementById("vg_erro").hidden = true;

  // Verifica se digitou exatamente 1 caractere
  if (entrada.length !== 1) {
    document.getElementById("vg_erro").hidden = false;
    return;
  }

  // Chama a função VOGAL e guarda o retorno (1 ou 0)
  let retorno = VOGAL(entrada);

  // Monta a mensagem com base no retorno
  let msg = retorno === 1
    ? `"${entrada.toUpperCase()}" é uma <strong>vogal</strong>. Retorno: <strong>1</strong>`
    : `"${entrada.toUpperCase()}" <strong>não</strong> é uma vogal. Retorno: <strong>0</strong>`;

  // innerHTML permite colocar HTML dentro do elemento (como o <strong>)
  document.getElementById("vg_texto").innerHTML = msg;
  document.getElementById("vg_resultado").hidden = false;
}


// ================================================
// ATIVIDADE 3 — LIMITES
// Lê limite inferior e superior e imprime todos os
// números PARES no intervalo ABERTO e seu somatório.
// Intervalo aberto = não inclui os extremos (li e ls).
// ================================================
function LIMITES(li, ls) {
  let pares = [];   // lista que vai guardar os números pares encontrados
  let soma  = 0;    // acumulador da soma

  // O intervalo é ABERTO: começa em li+1 e vai até ls-1
  for (let i = li + 1; i < ls; i++) {
    // % é o operador "módulo" (resto da divisão)
    // Se i % 2 === 0, o número é par (resto zero ao dividir por 2)
    if (i % 2 === 0) {
      pares.push(i); // .push() adiciona um item ao final do array
      soma += i;     // soma += i é o mesmo que soma = soma + i
    }
  }

  return { pares, soma }; // retorna um objeto com as duas informações
}

function calcularLimites() {
  let li = Number(document.getElementById("lm_li").value);
  let ls = Number(document.getElementById("lm_ls").value);

  document.getElementById("lm_resultado").hidden = true;
  document.getElementById("lm_erro").hidden = true;

  if (document.getElementById("lm_li").value === "" ||
      document.getElementById("lm_ls").value === "" ||
      isNaN(li) || isNaN(ls)) {
    document.getElementById("lm_erro").textContent = "⚠️ Preencha os dois campos.";
    document.getElementById("lm_erro").hidden = false;
    return;
  }

  if (li >= ls) {
    document.getElementById("lm_erro").textContent = "⚠️ O limite inferior deve ser menor que o superior.";
    document.getElementById("lm_erro").hidden = false;
    return;
  }

  let resultado = LIMITES(li, ls);

  if (resultado.pares.length === 0) {
    document.getElementById("lm_pares").textContent = "Nenhum número par no intervalo.";
  } else {
    // .join(", ") transforma o array em uma string separada por vírgulas
    // Ex: [2, 4, 6] → "2, 4, 6"
    document.getElementById("lm_pares").textContent = resultado.pares.join(", ");
  }

  document.getElementById("lm_soma").textContent = resultado.soma;
  document.getElementById("lm_resultado").hidden = false;
}


// ================================================
// ATIVIDADE 4 — ORDEM
// Recebe 3 números e retorna em ordem crescente.
// ================================================
function ORDEM(a, b, c) {
  // Coloca os 3 números em um array
  let nums = [a, b, c];

  // .sort() ordena. Sem argumento ele ordena como texto (errado para números!).
  // Com (x, y) => x - y ele ordena do menor para o maior (crescente).
  nums.sort((x, y) => x - y);

  // Retorna o array já ordenado
  return nums;
}

function calcularOrdem() {
  let a = Number(document.getElementById("or_n1").value);
  let b = Number(document.getElementById("or_n2").value);
  let c = Number(document.getElementById("or_n3").value);

  document.getElementById("or_resultado").hidden = true;
  document.getElementById("or_erro").hidden = true;

  if (document.getElementById("or_n1").value === "" ||
      document.getElementById("or_n2").value === "" ||
      document.getElementById("or_n3").value === "" ||
      isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("or_erro").hidden = false;
    return;
  }

  let ordenados = ORDEM(a, b, c);

  // ordenados[0] é o 1º elemento, [1] o 2º, [2] o 3º
  document.getElementById("or_texto").textContent =
    `${ordenados[0]}  <  ${ordenados[1]}  <  ${ordenados[2]}`;
  document.getElementById("or_resultado").hidden = false;
}


// ================================================
// ATIVIDADE 5 — POSITIVO_NEGATIVO
// Retorna TRUE se positivo, FALSE se negativo (ou zero).
// ================================================
function POSITIVO_NEGATIVO(x) {
  // O operador > compara. Se x for maior que 0, retorna true, senão false.
  return x > 0;
}

function calcularPosNeg() {
  let x = Number(document.getElementById("pn_num").value);

  document.getElementById("pn_resultado").hidden = true;
  document.getElementById("pn_erro").hidden = true;

  if (document.getElementById("pn_num").value === "" || isNaN(x)) {
    document.getElementById("pn_erro").hidden = false;
    return;
  }

  // Chama a função — ela retorna true ou false
  let ehPositivo = POSITIVO_NEGATIVO(x);

  let emoji = ehPositivo ? "📈" : "📉";
  let palavra = ehPositivo ? "POSITIVO" : (x === 0 ? "ZERO" : "NEGATIVO");

  document.getElementById("pn_emoji").textContent = emoji;
  document.getElementById("pn_palavra").textContent = palavra;
  document.getElementById("pn_resultado").hidden = false;
}


// ================================================
// ATIVIDADE 6 — PAR_IMPAR
// Retorna TRUE se for par, FALSE se for ímpar.
// ================================================
function PAR_IMPAR(x) {
  // x % 2 é o resto da divisão por 2.
  // Se o resto for 0, é par → retorna true
  // Se o resto for 1, é ímpar → retorna false
  return x % 2 === 0;
}

function calcularParImpar() {
  let x = Number(document.getElementById("pi_num").value);

  document.getElementById("pi_resultado").hidden = true;
  document.getElementById("pi_erro").hidden = true;

  if (document.getElementById("pi_num").value === "" || isNaN(x)) {
    document.getElementById("pi_erro").hidden = false;
    return;
  }

  // Chama a função — retorna true ou false
  let ehPar = PAR_IMPAR(x);

  let palavra = ehPar ? "PAR" : "ÍMPAR";


  document.getElementById("pi_palavra").textContent = palavra;
  document.getElementById("pi_resultado").hidden = false;
}
