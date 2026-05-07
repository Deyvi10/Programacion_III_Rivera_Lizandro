// ==========================================
// 1. CREACIÓN Y ACCESO BÁSICO
// ==========================================
// Crear un array — corchetes []
const frutas   = ["manzana", "banana", "cereza"];
const numeros  = [1, 2, 3, 4, 5];
const mixto    = [1, "dos", true, null];          // válido pero poco recomendable
const vacio    = [];

// Acceso por índice — empieza en 0
console.log(frutas[0]);   // "manzana"
console.log(frutas[2]);   // "cereza"
console.log(frutas[9]);   // undefined — no lanza error

// Índice negativo — NO funciona en JS (devuelve undefined)
console.log(frutas[-1]);  // undefined ← en Python sí funciona, en JS no

// at() — acceso con índice negativo (ES2022)
console.log(frutas.at(-1));   // "cereza"  ← el último elemento
console.log(frutas.at(-2));   // "banana"

// Longitud
console.log(frutas.length);   // 3

// Modificar un elemento
frutas[1] = "mango";
console.log(frutas);   // ["manzana", "mango", "cereza"]

// ==========================================
// 2. MÉTODOS DE MUTACIÓN (Modifican el original)
// ==========================================
const arr = [1, 2, 3];

// push — añade al final, devuelve la nueva longitud
arr.push(4);
arr.push(5, 6);           // se pueden añadir varios a la vez
console.log(arr);          // [1, 2, 3, 4, 5, 6]

// pop — elimina el último, devuelve el elemento eliminado
const ultimo = arr.pop();
console.log(ultimo);       // 6
console.log(arr);          // [1, 2, 3, 4, 5]

// unshift — añade al inicio (más lento que push)
arr.unshift(0);
console.log(arr);          // [0, 1, 2, 3, 4, 5]

// shift — elimina el primero, devuelve el elemento eliminado
const primero = arr.shift();
console.log(primero);      // 0
console.log(arr);          // [1, 2, 3, 4, 5]

// splice — elimina, reemplaza o inserta en cualquier posición
// splice(inicio, cuántos_eliminar, ...elementos_a_insertar)
const meses = ["ene", "feb", "abr", "may"];
meses.splice(2, 0, "mar");          // inserta "mar" en posición 2, elimina 0
console.log(meses);                  // ["ene", "feb", "mar", "abr", "may"]

const eliminados = meses.splice(1, 2);  // elimina 2 desde posición 1
console.log(eliminados);             // ["feb", "mar"]
console.log(meses);                  // ["ene", "abr", "may"]

// ==========================================
// 3. BÚSQUEDA
// ==========================================
const numerosBusqueda = [10, 20, 30, 20, 40]; // Renombrado

// indexOf — primera posición del valor, -1 si no existe
console.log(numerosBusqueda.indexOf(20));    // 1
console.log(numerosBusqueda.indexOf(99));    // -1

// lastIndexOf — última posición del valor
console.log(numerosBusqueda.lastIndexOf(20));  // 3

// includes — ¿existe el valor? devuelve boolean
console.log(numerosBusqueda.includes(30));   // true
console.log(numerosBusqueda.includes(99));   // false

// ==========================================
// 4. MÉTODOS DE COPIA Y TRANSFORMACIÓN
// ==========================================
// slice — extrae una porción SIN modificar el original
// slice(inicio, fin_exclusivo)
const letras = ["a", "b", "c", "d", "e"];
console.log(letras.slice(1, 3));    // ["b", "c"]
console.log(letras.slice(2));       // ["c", "d", "e"]
console.log(letras.slice(-2));      // ["d", "e"]
console.log(letras);                // ["a", "b", "c", "d", "e"] — sin cambios

// concat — une arrays, devuelve uno nuevo
const a = [1, 2];
const b = [3, 4];
console.log(a.concat(b));           // [1, 2, 3, 4]
console.log([...a, ...b]);          // igual con spread — forma moderna preferida

// join — une elementos en un string
const palabras = ["Hola", "mundo", "JS"];
console.log(palabras.join(" "));    // "Hola mundo JS"
console.log(palabras.join(", "));   // "Hola, mundo, JS"
console.log(palabras.join(""));     // "HolamundoJS"

// reverse — invierte el array EN SU LUGAR (muta el original)
const nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums);                  // [5, 4, 3, 2, 1]

// sort — ordena EN SU LUGAR (muta el original)
const desordenado = [10, 1, 21, 2];
desordenado.sort((valA, valB) => valA - valB);  // orden ascendente numérico
console.log(desordenado);           // [1, 2, 10, 21]

// ⚠️ sort sin función de comparación convierte a string — bug clásico
const bug = [10, 1, 21, 2];
bug.sort();
console.log(bug);   // [1, 10, 2, 21] ← orden lexicográfico, NO numérico

// ==========================================
// 5. ITERACIÓN (forEach)
// ==========================================
const frutasIteracion = ["manzana", "banana", "cereza"]; // Renombrado

// forEach no devuelve nada (undefined)
frutasIteracion.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});

// Equivalente con for...of (más legible en casos simples)
for (const fruta of frutasIteracion) {
  console.log(fruta);
}   

// ==========================================
// 6. MAP (Transformación)
// ==========================================
const numerosMap = [1, 2, 3, 4, 5]; // Renombrado

// Doblar cada número
const dobles = numerosMap.map(n => n * 2);
console.log(dobles);    // [2, 4, 6, 8, 10]
console.log(numerosMap);   // [1, 2, 3, 4, 5] — original intacto

// Extraer una propiedad de cada objeto
const usuariosMap = [ // Renombrado
  { nombre: "Ana",   edad: 28 },
  { nombre: "Luis",  edad: 31 },
  { nombre: "Marta", edad: 25 }
];

const nombres = usuariosMap.map(u => u.nombre);
console.log(nombres);   // ["Ana", "Luis", "Marta"]

// Transformar la estructura de cada objeto
const resumen = usuariosMap.map(u => ({
  nombre: u.nombre,
  mayorDeEdad: u.edad >= 18
}));
console.log(resumen);

// ==========================================
// 7. FILTER (Filtrado)
// ==========================================
const numerosFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Renombrado

// Solo los pares
const pares = numerosFilter.filter(n => n % 2 === 0);
console.log(pares);   // [2, 4, 6, 8, 10]

// Solo los mayores de 5
const mayores = numerosFilter.filter(n => n > 5);
console.log(mayores); // [6, 7, 8, 9, 10]

// Filtrar objetos
const usuariosFilter = [ // Renombrado
  { nombre: "Ana",   edad: 28, activo: true  },
  { nombre: "Luis",  edad: 16, activo: true  },
  { nombre: "Marta", edad: 31, activo: false },
  { nombre: "Pedro", edad: 22, activo: true  }
];

const adultosActivos = usuariosFilter.filter(u => u.edad >= 18 && u.activo);
console.log(adultosActivos.map(u => u.nombre));   // ["Ana", "Pedro"]




const transacciones = [
  { tipo: "ingreso",  cantidad: 1200 },
  { tipo: "gasto",    cantidad: 350  },
  { tipo: "ingreso",  cantidad: 800  },
  { tipo: "gasto",    cantidad: 120  },
  { tipo: "gasto",    cantidad: 670  },
  { tipo: "ingreso",  cantidad: 500  }
];

// 1. Usamos reduce con un objeto como valor inicial
const totales = transacciones.reduce((acumulador, t) => {
  if (t.tipo === "ingreso") acumulador.ingresos += t.cantidad;
  if (t.tipo === "gasto")   acumulador.gastos += t.cantidad;
  return acumulador;  
}, { ingresos: 0, gastos: 0 }); // <-- Valor inicial

// 2. Calculamos el saldo final
const saldoFinal = totales.ingresos - totales.gastos;

// 3. Mostramos los resultados en consola
console.log(`Ingresos: ${totales.ingresos}€`);
console.log(`Gastos:   ${totales.gastos}€`);
console.log(`Saldo:    ${saldoFinal}€`);





// ==========================================
// 8. REDUCE (Acumulación)
// ==========================================
// reduce(callback, valorInicial)
// callback recibe: (acumulador, elementoActual, indice, array)

const numerosReduce = [1, 2, 3, 4, 5]; // Renombrado (antes decía 'otrosnumeros')

// Suma total
const suma = numerosReduce.reduce((acum, n) => acum + n, 0);
console.log(suma);   // 15

// Producto
const producto = numerosReduce.reduce((acum, n) => acum * n, 1);
console.log(producto);   // 120

// Máximo sin Math.max
const maximo = numerosReduce.reduce((max, n) => n > max ? n : max, -Infinity);
console.log(maximo);   // 5

// Contar ocurrencias — acumulador es un objeto
const frutasReduce = ["manzana", "banana", "manzana", "cereza", "banana", "manzana"]; // Renombrado
const conteo = frutasReduce.reduce((acum, fruta) => {
  acum[fruta] = (acum[fruta] ?? 0) + 1;
  return acum;
}, {});
console.log(conteo);
// { manzana: 3, banana: 2, cereza: 1 }

// Aplanar un array de arrays
const anidado = [[1, 2], [3, 4], [5, 6]];
const plano   = anidado.reduce((acum, arrayInterno) => [...acum, ...arrayInterno], []);
console.log(plano);   // [1, 2, 3, 4, 5, 6]
// alternativa moderna: anidado.flat()

// ==========================================
// 9. EJERCICIO COMPLETO
// ==========================================
const celsius = [0, 15, -5, 22, 37, 100, -10, 28];

// 1. Usa map para convertir todas a Fahrenheit
const fahrenheit = celsius.map(c => (c * 9/5) + 32);

// 2. Usa filter para quedarte solo con las temperaturas entre 0 y 30
const entreCeroYTreinta = celsius.filter(c => c >= 0 && c <= 30);

// 3. Encadena filter + map
const encadenadas = celsius
  .filter(c => c >= 0 && c <= 30)
  .map(c => (c * 9/5) + 32);

// Mostrando los resultados en consola
console.log("Fahrenheit:", fahrenheit);
console.log("Entre 0 y 30°C:", entreCeroYTreinta);
console.log("Entre 0 y 30°C en °F:", encadenadas);






const transacciones = [
  { tipo: "ingreso",  cantidad: 1200 },
  { tipo: "gasto",    cantidad: 350  },
  { tipo: "ingreso",  cantidad: 800  },
  { tipo: "gasto",    cantidad: 120  },
  { tipo: "gasto",    cantidad: 670  },
  { tipo: "ingreso",  cantidad: 500  }
];
