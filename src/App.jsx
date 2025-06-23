import { ExternalLinkIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const App = () => {
  // Base de datos de preguntas para licencia A5
  const questions = [
    {
      question: "¿Cuál es el efecto principal de conducir con neumáticos desgastados?",
      options: [
        "Mayor economía de combustible",
        "Pérdida de adherencia, especialmente en superficies mojadas",
        "Mejor maniobrabilidad",
        "Menor ruido del vehículo"
      ],
      correct: 1,
      explanation: "Los neumáticos desgastados pierden adherencia, aumentando la distancia de frenado y el riesgo de derrape, especialmente en condiciones húmedas.",
      image: "🚗💧"
    },
    {
      question: "¿Qué indica el testigo de temperatura del motor cuando se enciende en rojo?",
      options: [
        "El motor está funcionando correctamente",
        "Sobrecalentamiento del motor - debe detenerse inmediatamente",
        "Necesita cambio de aceite",
        "La batería está descargada"
      ],
      correct: 1,
      explanation: "El testigo rojo de temperatura indica sobrecalentamiento del motor. Debe detenerse inmediatamente para evitar daños graves al motor.",
      image: "🌡️🚗"
    },
    {
      question: "¿Cuál es la función del sistema ABS en los frenos?",
      options: [
        "Aumentar la potencia de frenado",
        "Evitar que las ruedas se bloqueen durante el frenado",
        "Reducir el desgaste de las pastillas",
        "Hacer más silencioso el frenado"
      ],
      correct: 1,
      explanation: "El sistema ABS evita que las ruedas se bloqueen durante frenadas bruscas, permitiendo mantener el control direccional del vehículo.",
      image: "🛑⚙️"
    },
    {
      question: "¿Cuándo es obligatorio el uso de cinturón de seguridad?",
      options: [
        "Solo en autopistas",
        "En todos los asientos del vehículo, siempre",
        "Solo para el conductor",
        "Solo en viajes largos"
      ],
      correct: 1,
      explanation: "El uso de cinturón de seguridad es obligatorio para todos los ocupantes del vehículo, en todos los asientos que lo tengan instalado.",
      image: "🔐👥"
    },
    {
      question: "¿Qué debe hacer si el volante vibra mientras conduce?",
      options: [
        "Continuar conduciendo normalmente",
        "Revisar el balanceo y alineación de las ruedas",
        "Acelerar más para estabilizar",
        "Solo revisar los neumáticos"
      ],
      correct: 1,
      explanation: "La vibración del volante indica problemas de balanceo, alineación o desgaste irregular de neumáticos que deben revisarse de inmediato.",
      image: "🚗🔄"
    },
    {
      question: "¿Cuál es la distancia mínima para instalar triángulos de emergencia?",
      options: [
        "10 metros del vehículo",
        "30 metros en ciudad y 100 metros en carretera",
        "Solo al lado del vehículo",
        "No existe distancia mínima"
      ],
      correct: 1,
      explanation: "Los triángulos deben ubicarse a 30 metros en zona urbana y 100 metros en carretera, para dar tiempo de reacción a otros conductores.",
      image: "📐🚗"
    },
    {
      question: "¿Qué significa cuando el testigo del aceite del motor se enciende?",
      options: [
        "El aceite está caliente",
        "Baja presión o falta de aceite - detenerse inmediatamente",
        "Necesita cambio de filtro",
        "El motor está frío"
      ],
      correct: 1,
      explanation: "El testigo de aceite indica baja presión o falta de aceite. Debe detenerse inmediatamente para evitar daño severo al motor.",
      image: "🛢️⚠️"
    },
    {
      question: "¿Cuándo debe un conductor ceder el paso a los peatones?",
      options: [
        "Solo en cruces semaforizados",
        "Siempre, en cualquier cruce peatonal",
        "Solo cuando hay señalización",
        "Únicamente en zonas escolares"
      ],
      correct: 1,
      explanation: "Los conductores deben ceder el paso a los peatones en todos los cruces peatonales, señalizados o no, priorizando siempre la seguridad.",
      image: "🚶‍♂️🚗"
    },
    {
      question: "¿Qué indica una línea amarilla continua en el centro de la calzada?",
      options: [
        "Se puede adelantar con precaución",
        "Prohibido adelantar desde ambos lados",
        "Solo indica separación de pistas",
        "Permitido adelantar solo de día"
      ],
      correct: 1,
      explanation: "La línea amarilla continua prohíbe el adelantamiento desde ambos lados de la vía, indica peligro o visibilidad reducida.",
      image: "🛣️⚠️"
    },
    {
      question: "¿Cuál es la velocidad máxima permitida en zona urbana?",
      options: [
        "40 km/h",
        "50 km/h",
        "60 km/h",
        "Depende de la comuna"
      ],
      correct: 1,
      explanation: "La velocidad máxima en zona urbana es de 50 km/h, salvo señalización que indique otra velocidad específica.",
      image: "🏙️🚗"
    },
    {
      question: "¿Qué debe hacer al aproximarse a un bus escolar detenido con luces intermitentes?",
      options: [
        "Acelerar para pasar rápidamente",
        "Detenerse completamente hasta que apague las luces",
        "Reducir velocidad solamente",
        "Cambiar de pista"
      ],
      correct: 1,
      explanation: "Debe detenerse completamente al aproximarse a un bus escolar con luces intermitentes, ya que pueden bajar o subir niños.",
      image: "🚌👶"
    },
    {
      question: "¿Cuándo es obligatorio usar las luces bajas del vehículo?",
      options: [
        "Solo de noche",
        "Desde media hora antes del atardecer hasta media hora después del amanecer",
        "Solo cuando llueve",
        "Solo en túneles"
      ],
      correct: 1,
      explanation: "Es obligatorio usar luces bajas desde media hora antes del atardecer hasta media hora después del amanecer, y en condiciones de visibilidad reducida.",
      image: "💡🌅"
    },
    {
      question: "¿Qué significa el término 'punto ciego' en la conducción?",
      options: [
        "Una zona sin iluminación",
        "Zona no visible por los espejos retrovisores",
        "Un defecto en la vista del conductor",
        "Una señalización dañada"
      ],
      correct: 1,
      explanation: "El punto ciego es la zona lateral del vehículo que no es visible a través de los espejos retrovisores, donde pueden ocultarse otros vehículos.",
      image: "👁️🚗"
    },
    {
      question: "¿Cuál es la sanción por conducir sin licencia de conducir?",
      options: [
        "Solo una multa menor",
        "Multa de 1,5 a 3 UTM y retención del vehículo",
        "Advertencia verbal",
        "Curso de capacitación"
      ],
      correct: 1,
      explanation: "Conducir sin licencia se sanciona con multa de 1,5 a 3 UTM y retención del vehículo hasta regularizar la situación.",
      image: "📄🚫"
    },
    {
      question: "¿Qué debe hacer si tiene una rueda pinchada en carretera?",
      options: [
        "Detenerse inmediatamente donde esté",
        "Buscar un lugar seguro, señalizar con triángulos y cambiar la rueda",
        "Continuar conduciendo lentamente",
        "Llamar solo a mecánico"
      ],
      correct: 1,
      explanation: "Debe buscar un lugar seguro fuera de la calzada, señalizar con triángulos de emergencia y proceder al cambio de rueda con precaución.",
      image: "🔧🚗"
    },
    {
      question: "¿Cuándo se debe usar la bocina del vehículo?",
      options: [
        "Para saludar a conocidos",
        "Solo para advertir peligro o en caso de emergencia",
        "Al adelantar siempre",
        "En congestión de tráfico"
      ],
      correct: 1,
      explanation: "La bocina debe usarse únicamente para advertir peligro o en situaciones de emergencia, no como saludo o por impaciencia.",
      image: "📯⚠️"
    },
    {
      question: "¿Qué indica una señal de tránsito de color azul?",
      options: [
        "Prohibición",
        "Información u obligación",
        "Advertencia de peligro",
        "Zona de estacionamiento"
      ],
      correct: 1,
      explanation: "Las señales azules indican información (servicios, direcciones) u obligación (dirección obligatoria, pista exclusiva).",
      image: "🔵ℹ️"
    },
    {
      question: "¿Cuál es la distancia de seguimiento recomendada en autopista?",
      options: [
        "1 segundo por cada 10 km/h de velocidad",
        "Mínimo 3 segundos, aumentando con la velocidad",
        "50 metros siempre",
        "La misma que en ciudad"
      ],
      correct: 1,
      explanation: "En autopista se recomienda mínimo 3 segundos de distancia, aumentando proporcionalmente con la velocidad y condiciones climáticas.",
      image: "🛣️⏱️"
    },
    {
      question: "¿Qué debe verificar antes de realizar un adelantamiento?",
      options: [
        "Solo que no venga tráfico de frente",
        "Visibilidad suficiente, espacio libre y señalizar la maniobra",
        "Únicamente la velocidad",
        "Solo el espejo retrovisor"
      ],
      correct: 1,
      explanation: "Antes de adelantar debe verificar: visibilidad completa, espacio suficiente, ausencia de tráfico contrario y señalizar correctamente.",
      image: "🚗➡️"
    },
    {
      question: "¿Qué efecto tiene el alcohol en la conducción?",
      options: [
        "Mejora los reflejos",
        "Reduce el tiempo de reacción y altera el juicio",
        "No afecta la conducción",
        "Solo afecta la vista"
      ],
      correct: 1,
      explanation: "El alcohol reduce significativamente el tiempo de reacción, altera el juicio, disminuye la coordinación y aumenta la confianza excesiva.",
      image: "🍺🚫"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [testStarted, setTestStarted] = useState(false);
  const [testFinished, setTestFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [showExplanation, setShowExplanation] = useState({});

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startTest = () => {
    const shuffled = shuffleArray(questions);
    setShuffledQuestions(shuffled);
    setUserAnswers(new Array(shuffled.length).fill(null));
    setCurrentQuestionIndex(0);
    setTestStarted(true);
    setTestFinished(false);
    setShowExplanation({});
  };

  const selectOption = (optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
    
    // Mostrar explicación después de seleccionar
    setShowExplanation(prev => ({
      ...prev,
      [currentQuestionIndex]: true
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishTest();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishTest = () => {
    setTestFinished(true);
  };

  const restartTest = () => {
    setTestStarted(false);
    setTestFinished(false);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowExplanation({});
  };

  const calculateResults = () => {
    const correctAnswers = userAnswers.filter((answer, index) => 
      answer === shuffledQuestions[index]?.correct
    ).length;
    const percentage = Math.round((correctAnswers / shuffledQuestions.length) * 100);
    return {
      correct: correctAnswers,
      incorrect: shuffledQuestions.length - correctAnswers,
      percentage
    };
  };

  const getScoreClass = (percentage) => {
    if (percentage >= 80) return 'bg-gradient-to-br from-green-500 to-emerald-500';
    if (percentage >= 60) return 'bg-gradient-to-br from-yellow-500 to-orange-500';
    return 'bg-gradient-to-br from-red-500 to-red-600';
  };

  const getResultMessage = (percentage) => {
    if (percentage >= 80) return '¡Excelente! Estás listo para el examen oficial.';
    if (percentage >= 60) return 'Buen trabajo, pero puedes mejorar más.';
    return 'Necesitas estudiar más antes del examen oficial.';
  };

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 text-center">
            <h1 className="text-4xl font-bold mb-3 text-shadow">🚗 Test Licencia A5 Chile</h1>
            <p className="text-xl opacity-90">Simulador del examen teórico oficial - CONASET</p>
          </div>
          
          <div className="p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">¡Prepárate para tu examen teórico!</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Practica con preguntas similares a las del examen oficial de la CONASET para obtener tu licencia clase A5.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">📝 20 Preguntas</h4>
                <p className="text-gray-600">Igual que el examen oficial, tendrás 20 preguntas de selección múltiple.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">✅ Explicaciones</h4>
                <p className="text-gray-600">Cada respuesta incluye una explicación detallada para ayudarte a aprender.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">📊 Resultados</h4>
                <p className="text-gray-600">Obtén tu puntuación final y revisa tu rendimiento detallado.</p>
              </div>
            </div>
            
            <button 
              onClick={startTest}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Comenzar Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (testFinished) {
    const results = calculateResults();
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 text-center">
            <h1 className="text-4xl font-bold mb-3">🚗 Test Licencia A5 Chile</h1>
            <p className="text-xl opacity-90">Resultados del Examen</p>
          </div>
          
          <div className="p-10 text-center">
            <div className={`w-48 h-48 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-5xl font-bold ${getScoreClass(results.percentage)}`}>
              {results.percentage}%
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {results.percentage >= 80 ? '¡Felicitaciones! 🎉' : 
               results.percentage >= 60 ? 'Buen intento 👍' : 'Sigue practicando 📚'}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">{getResultMessage(results.percentage)}</p>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">{results.correct}</div>
                  <div className="text-gray-600 font-medium mt-2">Correctas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600">{results.incorrect}</div>
                  <div className="text-gray-600 font-medium mt-2">Incorrectas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600">{results.percentage}%</div>
                  <div className="text-gray-600 font-medium mt-2">Puntuación</div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={restartTest}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Realizar Nuevo Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-3">🚗 Test Licencia A5 Chile</h1>
          <p className="text-xl opacity-90">Simulador del examen teórico oficial - CONASET</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-50 p-5 border-b border-gray-200">
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-center font-semibold text-gray-700">
            Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}
          </div>
        </div>

        {/* Question */}
        <div className="p-10">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block font-semibold mb-6">
            Pregunta {currentQuestionIndex + 1}
          </div>
          
          {currentQuestion?.image && (
            <div className="text-6xl text-center mb-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200">
              {currentQuestion.image}
            </div>
          )}
          
          <div className="text-2xl text-gray-800 mb-8 font-medium leading-relaxed">
            {currentQuestion?.question}
          </div>
          
          <div className="space-y-4 mb-8">
            {currentQuestion?.options.map((option, index) => {
              const isSelected = userAnswers[currentQuestionIndex] === index;
              const isCorrect = index === currentQuestion.correct;
              const isIncorrect = isSelected && !isCorrect;
              const showAnswer = showExplanation[currentQuestionIndex];
              
              return (
                <div
                  key={index}
                  onClick={() => selectOption(index)}
                  className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-102 ${
                    showAnswer && isCorrect
                      ? 'bg-green-100 border-green-500 text-green-800'
                      : showAnswer && isIncorrect
                      ? 'bg-red-100 border-red-500 text-red-800'
                      : isSelected
                      ? 'bg-blue-100 border-blue-500'
                      : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  <span className="font-bold text-blue-600 mr-4 text-lg">
                    {String.fromCharCode(65 + index)})
                  </span>
                  {option}
                </div>
              );
            })}
          </div>
          
          {/* Explanation */}
          {showExplanation[currentQuestionIndex] && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8 animate-fadeIn">
              <h4 className="font-bold text-yellow-800 mb-3 text-lg">💡 Explicación</h4>
              <p className="text-yellow-800 leading-relaxed">{currentQuestion?.explanation}</p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="px-10 pb-10 flex justify-between items-center">
          <button
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            ← Anterior
          </button>
          
          <button
            onClick={nextQuestion}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
          >
            {currentQuestionIndex === shuffledQuestions.length - 1 ? 'Finalizar Test' : 'Siguiente →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;