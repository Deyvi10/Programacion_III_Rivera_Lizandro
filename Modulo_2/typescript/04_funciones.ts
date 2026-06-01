// problema-sin-tipos.ts

// JavaScript — acepta cualquier cosa sin avisar
function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3));       // 8  ✅
console.log(sumar("5", 3));     // "53"  😕 concatenó en lugar de sumar
console.log(sumar(5));          // NaN  😕 b es undefined

// funciones-basicas.ts

// Recibe dos números, devuelve número
function multiplicar(a: number, b: number): number {
  return a * b;
}

// Recibe un string, devuelve string
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

// Recibe un número, devuelve boolean
function esPar(n: number): boolean {
  return n % 2 === 0;
}

// No devuelve nada — tipo void
function mostrar(mensaje: string): void {
  console.log(`[INFO] ${mensaje}`);
}

console.log(multiplicar(4, 7));    // 28
console.log(saludar("Ana"));       // Hola, Ana!
console.log(esPar(10));            // true
console.log(esPar(7));             // false
mostrar("Todo listo");             // [INFO] Todo listo

// rest-con-flujo.ts

// ...nums captura todos los argumentos en un array
function calcularEstadisticas(...nums: number[]): {
  min:   number;
  max:   number;
  suma:  number;
  media: number;
} {
  if (nums.length === 0) {
    return { min: 0, max: 0, suma: 0, media: 0 };
  }

  let min  = nums[0];
  let max  = nums[0];
  let suma = 0;

  for (const n of nums) {
    if (n < min) min = n;
    if (n > max) max = n;
    suma += n;
  }

  return {
    min,
    max,
    suma,
    media: suma / nums.length
  };
}

const stats = calcularEstadisticas(8, 3, 15, 6, 12, 1, 9);
console.log(`Mínimo: ${stats.min}`);
console.log(`Máximo: ${stats.max}`);
console.log(`Suma:   ${stats.suma}`);
console.log(`Media:  ${stats.media.toFixed(2)}`);

// Función que filtra con rest y condición
function soloPositivos(...nums: number[]): number[] {
  const resultado: number[] = [];
  for (const n of nums) {
    if (n > 0) resultado.push(n);
  }
  return resultado;
}

console.log(soloPositivos(3, -1, 5, -2, 0, 8, -4));  // [3, 5, 8]