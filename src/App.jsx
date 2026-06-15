import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const preguntas = [
  
  //visual
  {id: 1,categoria: "Visual", texto: "¿Las luces brillantes te causan incomodidad?" },
  {id: 2,categoria: "Visual", texto: "¿Te distraen fácilmente los estímulos visuales?" },
  {id: 3,categoria: "Visual", texto: "¿Prefieres reducir el brillo de las pantallas porque te resultan muy intensas?" },
  {id: 4,categoria: "Visual", texto: "¿Te cuesta concentrarte en lugares con muchos colores o elementos visuales?" },

//auditivo
  { id: 5, categoria: "Auditivo", texto: "¿Los ruidos fuertes te resultan molestos?" },
  { id: 6, categoria: "Auditivo", texto: "¿Te cuesta concentrarte cuando hay ruido?" },
  { id: 7, categoria: "Auditivo", texto: "¿Algunos sonidos cotidianos te parecen demasiado intensos?" },
  { id: 8, categoria: "Auditivo", texto: "¿Te sobresaltas fácilmente con sonidos inesperados?" },

//tacto
  { id: 9, categoria: "Táctil", texto: "¿Algunas texturas de ropa te incomodan?" },
  { id: 10, categoria: "Táctil", texto: "¿Las etiquetas de la ropa suelen molestarte?" },
  { id: 11, categoria: "Táctil", texto: "¿Evitas tocar ciertos materiales por la sensación que producen?" },
  { id: 12, categoria: "Táctil", texto: "¿Te incomoda el contacto físico inesperado?" },

//olfato
  { id: 13, categoria: "Olfativo", texto: "¿Los olores intensos te causan malestar?" },
  { id: 14, categoria: "Olfativo", texto: "¿Percibes olores que otros no notan?" },
  { id: 15, categoria: "Olfativo", texto: "¿Algunos perfumes o productos de limpieza te resultan desagradables?" },
  { id: 16, categoria: "Olfativo", texto: "¿Los olores intensos afectan tu concentración o estado de ánimo?" },

  //gusto
  {id: 17, categoria: "Gusto", texto: "¿Evitas ciertos alimentos debido a su sabor?"},
  {id: 18, categoria: "Gusto", texto: "¿La textura de algunos alimentos te resulta desagradable?"},
  {id: 19, categoria: "Gusto", texto: "¿Eres sensible a sabores muy fuertes o condimentados?"},
  {id: 20, categoria: "Gusto", texto: "¿Prefieres comer siempre alimentos conocidos en lugar de probar nuevos?"},

  //propiosepcion 
  {id: 21, categoria: "Propiocepcion", texto: "¿Sueles chocar accidentalmente con objetos o personas?"},
  {id: 22, categoria: "Propiocepcion", texto: "¿Te cuesta calcular cuánta fuerza aplicar al levantar o sostener algo?"},
  {id: 23, categoria: "Propiocepcion", texto: "¿Necesitas mirar tus manos o pies para realizar ciertos movimientos con precisión?"},
  {id: 24, categoria: "Propiocepcion", texto: "¿A veces tienes dificultad para saber en qué posición se encuentra tu cuerpo sin observarlo?"},

  //Vestivular
  {id: 25, categoria: "Vestibular", texto:"¿Te mareas fácilmente al viajar en automóvil o transporte público?"},
  {id: 26, categoria: "Vestibular", texto:"¿Tienes dificultades para mantener el equilibrio en algunas situaciones?"},
  {id: 27, categoria: "Vestibular", texto:"¿Los movimientos rápidos de la cabeza te provocan incomodidad o mareo?"},
  {id: 28, categoria: "Vestibular", texto:"¿Te sientes inseguro al subir escaleras o caminar sobre superficies irregulares?"},

];

export default function App() {
  const [indice, setIndice] = useState(0);
  const [respuestas, setRespuestas] = useState(
    Array(preguntas.length).fill(null)
  );
  const [finalizado, setFinalizado] = useState(false);

   const calcularTotal = () => {
    return respuestas.reduce(
      (acumulado,valor) => acumulado + (valor || 0),0  
    );
  };

   const obtenerResultado = (puntaje) => {
     if (puntaje <= 28) {
    return "Sensibilidad sensorial baja";
  }

  if (puntaje <= 56) {
    return "Sensibilidad sensorial moderada";
  }

  if (puntaje <= 84) {
    return "Sensibilidad sensorial elevada";
  }

  return "Alta sensibilidad sensorial";
  };

   const calcularPorCategoria = () => {
    const categorias = {};

    preguntas.forEach((pregunta) => {
      const valor = respuestas[pregunta.id - 1] || 0;

      if (!categorias[pregunta.categoria]) {
        categorias[pregunta.categoria] = 0;
      }

      categorias[pregunta.categoria] += valor;
    });

    return categorias;
  };

  const responder = (valor) => {
    const nuevas = [...respuestas];
    nuevas[indice] = Number(valor);
    setRespuestas(nuevas);
  };

  const siguiente = () => {
    if (respuestas[indice] === null) return;

    if (indice < preguntas.length - 1) {
      setIndice(indice + 1);
    } else {
      setFinalizado(true);
    }
  };

  const anterior = () => {
    if (indice > 0) setIndice(indice - 1);
  };

  const progreso = ((indice + 1) / preguntas.length) * 100;

  if (finalizado) {
    const total = calcularTotal();
    const resultado = obtenerResultado(total);
    const categorias = calcularPorCategoria();

    return (
      <div className="contenedor">
        <h1>Muchas gracias por realizar la encuenta
        </h1>
        <h2>Recuerda que los resultados no definen ciertas areas pscologicas, para un mejor analisis acude a un experto </h2>
        <h1>Encuesta completada </h1>
        <h2>Puntaje total: {total}</h2>
         <h2>{resultado}</h2>

      <h3>Resultados por categoría</h3>

      {Object.entries(categorias).map(([nombre, valor]) => (
        <p key={nombre}>
          <strong>{nombre}:</strong> {valor}
        </p>
      ))}
      </div>
    );
  }

  return (
    <>
      <div className="bubble b1"></div>
      <div className="bubble b2"></div>
      <div className="bubble b3"></div>
      <div className="bubble b4"></div>
      <div className="bubble b5"></div>
      <div className="bubble b6"></div>

      <div className="contenedor">

        <h1>Encuesta Sensorial</h1>

        <div className="barra">
          <div
            className="progreso"
            style={{ width: `${progreso}%` }}
          ></div>
        </div>

        <p>
          Pregunta {indice + 1} de {preguntas.length}
        </p>

        <motion.div
          key={indice}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2>{preguntas[indice].texto}</h2>

          <div className="opciones">

            <button
              className={respuestas[indice] === 0 ? "seleccionado" : ""}
              onClick={() => responder(0)}
            >
              Nunca
            </button>

            <button
              className={respuestas[indice] === 1 ? "seleccionado" : ""}
              onClick={() => responder(1)}
            >
              Rara vez
            </button>

            <button
              className={respuestas[indice] === 2 ? "seleccionado" : ""}
              onClick={() => responder(2)}
            >
              A veces
            </button>

            <button
              className={respuestas[indice] === 3 ? "seleccionado" : ""}
              onClick={() => responder(3)}
            >
              Frecuentemente
            </button>

            <button
              className={respuestas[indice] === 4 ? "seleccionado" : ""}
              onClick={() => responder(4)}
            >
              Siempre
            </button>

          </div>
        </motion.div>

        <div className="botones">
          <button onClick={anterior} disabled={indice === 0}>
            ← Anterior
          </button>

          <button onClick={siguiente}>
            {indice === preguntas.length - 1
              ? "Finalizar"
              : "Siguiente →"}
          </button>
        </div>

      </div>
    </>
  );
}

//