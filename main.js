const cases = [
  {
    name: "María", gender: "f", ostomy: "ILEOSTOMÍA", category: "Analgésico",
    title: "Una tableta convencional",
    scenario: "María tiene ileostomía y cuenta con una prescripción de acetaminofén por vía oral. No presenta vómito ni dificultad para deglutir.",
    medicine: "Acetaminofén (paracetamol)",
    presentation: "Tableta convencional de liberación inmediata.",
    correct: "verificar",
    feedback: "En una ileostomía, el tránsito intestinal puede ser más rápido. Aunque el acetaminofén se absorbe principalmente en el intestino delgado, es importante confirmar que la presentación específica puede administrarse de la forma prescrita.",
    learning: "Punto clave: antes de triturar o modificar una tableta, verifica que el producto lo permita y consulta al profesional responsable. No todas las tabletas pueden triturarse."
  },
  {
    name: "Juan", gender: "m", ostomy: "ILEOSTOMÍA", category: "Analgésico opioide",
    title: "Liberación prolongada",
    scenario: "Juan tiene ileostomía. En su tratamiento aparece un analgésico de liberación prolongada. La tableta tiene una estructura diseñada para liberar el medicamento durante varias horas.",
    medicine: "Tapentadol",
    presentation: "Tableta de liberación prolongada (LP).",
    correct: "verificar",
    feedback: "En una ileostomía, el tránsito acelerado puede hacer que algunas presentaciones de liberación prolongada salgan por el estoma antes de liberar completamente el medicamento.",
    learning: "Punto clave: nunca triturar, partir ni masticar una presentación de liberación prolongada. Se debe consultar para que el equipo tratante valore una alternativa."
  },
  {
    name: "Laura", gender: "f", ostomy: "COLOSTOMÍA", category: "Analgésico",
    title: "Una presentación con recubrimiento entérico",
    scenario: "Laura tiene colostomía y tiene prescrita una tableta de ácido acetilsalicílico con recubrimiento entérico. No presenta signos de intolerancia ni dificultades para deglutir.",
    medicine: "Ácido acetilsalicílico (ASA)",
    presentation: "Tableta con recubrimiento entérico.",
    correct: "administrar",
    feedback: "En una colostomía, se conserva una mayor parte del tránsito intestinal. Esta presentación puede utilizarse de acuerdo con la prescripción y las condiciones clínicas de la persona.",
    learning: "Punto clave: una tableta con recubrimiento entérico no está automáticamente contraindicada en todas las ostomías. Se debe valorar el tipo de ostomía y la formulación."
  },
  {
    name: "Carlos", gender: "m", ostomy: "ILEOSTOMÍA", category: "Analgésico",
    title: "Una alternativa efervescente",
    scenario: "Carlos tiene ileostomía. Tiene prescrita una presentación efervescente de ácido acetilsalicílico. La orden corresponde a esa presentación específica.",
    medicine: "Ácido acetilsalicílico (ASA)",
    presentation: "Tableta efervescente para disolver antes de ingerir.",
    correct: "administrar",
    feedback: "La presentación efervescente se disuelve antes de ingresar al tubo digestivo. Así, no depende de que una cubierta entérica se abra durante el tránsito intestinal.",
    learning: "Punto clave: identifica la presentación exacta. No sustituyas una presentación por otra sin una orden o autorización correspondiente."
  },
  {
    name: "Ana", gender: "f", ostomy: "ILEOSTOMÍA", category: "Antidiarreico",
    title: "Control del débito",
    scenario: "Ana tiene ileostomía y presenta aumento del débito. Tiene prescrita loperamida por vía oral. Se verifica que la presentación coincide con la orden.",
    medicine: "Loperamida",
    presentation: "Cápsula de liberación inmediata.",
    correct: "administrar",
    feedback: "La loperamida disminuye la motilidad intestinal y puede ser útil para controlar el débito de una ileostomía cuando está prescrita. Se debe vigilar la evolución del débito y los signos de deshidratación.",
    learning: "Punto clave: administra únicamente según la prescripción y observa cambios en el débito del estoma. No modifiques la presentación por cuenta propia."
  },
  {
    name: "Pepito", gender: "m", ostomy: "ILEOSTOMÍA", category: "Antiemético",
    title: "Un medicamento que acelera el tránsito",
    scenario: "Pepito tiene ileostomía y presenta náuseas. Tiene prescrita metoclopramida de liberación prolongada. El débito del estoma ha aumentado durante las últimas horas.",
    medicine: "Metoclopramida",
    presentation: "Tableta de liberación prolongada.",
    correct: "verificar",
    feedback: "La metoclopramida aumenta la motilidad gastrointestinal. En una persona con ileostomía, este efecto puede incrementar la frecuencia o la liquidez del efluente. Además, la presentación de liberación prolongada requiere revisión por el tránsito acelerado.",
    learning: "Punto clave: verifica tanto la forma farmacéutica como el efecto del medicamento sobre la motilidad intestinal."
  },
  {
    name: "Sofía", gender: "f", ostomy: "ILEOSTOMÍA", category: "Protector gástrico",
    title: "Un inhibidor de bomba de protones",
    scenario: "Sofía tiene ileostomía y tiene prescrita una tableta de pantoprazol con recubrimiento entérico. No se observa tránsito excesivamente acelerado ni restos intactos del medicamento en la bolsa.",
    medicine: "Pantoprazol",
    presentation: "Tableta con recubrimiento entérico.",
    correct: "administrar",
    feedback: "El recubrimiento entérico del pantoprazol protege el medicamento del ácido gástrico y permite su liberación en el intestino delgado. Puede utilizarse en ileostomía cuando el tránsito permite su disolución y absorción.",
    learning: "Punto clave: no todos los medicamentos con recubrimiento entérico fallan en ileostomía. La absorción depende del sitio de liberación y del tránsito intestinal."
  },
  {
    name: "Andrés", gender: "m", ostomy: "ILEOSTOMÍA", category: "Laxante",
    title: "Un medicamento de acción colónica",
    scenario: "Andrés tiene ileostomía. En la hoja de tratamiento aparece bisacodilo en tabletas con recubrimiento entérico.",
    medicine: "Bisacodilo",
    presentation: "Tableta con recubrimiento entérico.",
    correct: "verificar",
    feedback: "El bisacodilo actúa principalmente en el colon. En una persona con ileostomía, la ausencia del colon modifica el sitio de acción esperado y hace necesario revisar la indicación.",
    learning: "Punto clave: los medicamentos cuya acción depende del colon requieren especial revisión en personas con ileostomía."
  },
  {
    name: "Camila", gender: "f", ostomy: "ILEOSTOMÍA", category: "Antidepresivo",
    title: "Una presentación de liberación sostenida",
    scenario: "Camila tiene ileostomía y tiene prescrita una tableta de bupropión de liberación sostenida. La presentación indica que libera el medicamento durante un periodo prolongado.",
    medicine: "Bupropión",
    presentation: "Tableta de liberación sostenida.",
    correct: "verificar",
    feedback: "En la ileostomía, el tránsito acelerado puede dificultar la liberación y absorción completa de algunas presentaciones de liberación sostenida. También puede observarse la estructura de la tableta en la bolsa.",
    learning: "Punto clave: ante una presentación de liberación sostenida, consulta al equipo tratante. Nunca la tritures ni la partas por cuenta propia."
  },
  {
    name: "Daniel", gender: "m", ostomy: "ILEOSTOMÍA", category: "Sistema osmótico",
    title: "Una tableta con sistema OROS",
    scenario: "Daniel tiene ileostomía y en su tratamiento aparece un medicamento en una tableta con sistema osmótico oral (OROS). La cubierta es rígida y no se desintegra como una tableta convencional.",
    medicine: "Medicamento con sistema OROS",
    presentation: "Tableta de liberación controlada mediante sistema osmótico.",
    correct: "verificar",
    feedback: "Los sistemas OROS liberan el medicamento de manera controlada mediante una estructura que puede permanecer intacta. En ileostomía, el tránsito acelerado puede impedir que se complete la liberación. Si existe estrechez del estoma, también debe valorarse el riesgo de obstrucción.",
    learning: "Punto clave: identifica las presentaciones con sistemas osmóticos y consulta antes de continuar. Nunca tritures ni partas estas tabletas."
  },
  {
    name: "Valentina", gender: "f", ostomy: "COLOSTOMÍA", category: "Antiemético",
    title: "Una presentación convencional",
    scenario: "Valentina tiene colostomía y tiene prescrita una tableta convencional de ondansetrón. Puede deglutir sin dificultad y no hay cambios recientes en su estado clínico.",
    medicine: "Ondansetrón",
    presentation: "Tableta convencional de liberación inmediata.",
    correct: "administrar",
    feedback: "El ondansetrón se absorbe en las porciones altas del tubo digestivo. La presencia de una colostomía no representa por sí sola una barrera para su absorción.",
    learning: "Punto clave: una ostomía no implica que todos los medicamentos orales deban evitarse. Revisa la prescripción, la presentación y las condiciones clínicas."
  },
  {
    name: "Mateo", gender: "m", ostomy: "ILEOSTOMÍA", category: "Protector gástrico",
    title: "Gránulos con recubrimiento entérico",
    scenario: "Mateo tiene ileostomía y recibe omeprazol en cápsula que contiene gránulos con recubrimiento entérico. Refiere que en ocasiones observa restos de medicamentos en la bolsa.",
    medicine: "Omeprazol",
    presentation: "Cápsula con gránulos de recubrimiento entérico.",
    correct: "verificar",
    feedback: "Los gránulos con recubrimiento entérico pueden liberar el omeprazol en el intestino delgado. Sin embargo, si se observan restos intactos en la bolsa o hay tránsito muy acelerado, es necesario revisar la presentación y consultar una alternativa.",
    learning: "Punto clave: no tritures ni mastiques los gránulos. La posibilidad de abrir la cápsula depende de la ficha técnica del producto específico y debe ser verificada por el equipo responsable."
  }
];

let order = [], current = 0, score = 0, answered = false;

function character(gender) {
  if(gender === "f") {
    return `<svg viewBox="0 0 160 170" role="img" aria-label="Avatar femenino">
      <path d="M35 72 Q24 22 79 15 Q137 18 126 78 L132 145 Q111 159 105 119 L53 119 Q49 151 28 143Z" fill="#513b36"/>
      <path d="M18 170 Q22 116 80 116 Q138 116 142 170Z" fill="#e99a63"/>
      <path d="M54 120 L80 146 L106 120 L117 170 L43 170Z" fill="#fff"/>
      <path d="M69 111 L80 126 L91 111" fill="#c98765"/>
      <rect x="67" y="98" width="26" height="27" rx="10" fill="#c98765"/>
      <ellipse cx="80" cy="68" rx="37" ry="45" fill="#d99a72"/>
      <path d="M43 63 Q38 19 82 19 Q124 20 118 65 Q107 45 91 42 Q67 51 43 63Z" fill="#513b36"/>
      <path d="M44 64 Q40 93 49 111" stroke="#513b36" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M116 62 Q121 91 111 111" stroke="#513b36" stroke-width="10" fill="none" stroke-linecap="round"/>
      <circle cx="66" cy="70" r="3.8" fill="#263746"/>
      <circle cx="94" cy="70" r="3.8" fill="#263746"/>
      <path d="M70 89 Q80 97 90 89" stroke="#8d4e3e" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="42" cy="91" r="4" fill="#f2a65a"/>
      <circle cx="118" cy="91" r="4" fill="#f2a65a"/>
    </svg>`;
  }

  return `<svg viewBox="0 0 160 170" role="img" aria-label="Avatar masculino">
    <path d="M17 170 Q23 115 80 115 Q137 115 143 170Z" fill="#168b8a"/>
    <path d="M56 119 L80 143 L104 119 L116 170 L44 170Z" fill="#fff"/>
    <path d="M68 111 L80 127 L92 111" fill="#b97858"/>
    <rect x="67" y="96" width="26" height="28" rx="9" fill="#b97858"/>
    <circle cx="41" cy="69" r="8" fill="#b97858"/>
    <circle cx="119" cy="69" r="8" fill="#b97858"/>
    <ellipse cx="80" cy="68" rx="38" ry="45" fill="#c98765"/>
    <path d="M42 62 Q35 20 79 18 Q122 17 119 61 Q105 45 91 43 Q68 49 42 62Z" fill="#263746"/>
    <path d="M44 48 Q57 22 84 24 Q105 24 116 43" stroke="#263746" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M59 61 L72 59 M88 59 L101 61" stroke="#263746" stroke-width="3" stroke-linecap="round"/>
    <circle cx="66" cy="70" r="3.8" fill="#263746"/>
    <circle cx="94" cy="70" r="3.8" fill="#263746"/>
    <path d="M62 91 Q80 105 98 91 Q95 112 80 113 Q65 111 62 91Z" fill="#263746"/>
    <path d="M72 94 Q80 98 88 94" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`;
}

function startGame() {
  order = cases.map((_, i) => i);
  for(let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  current = 0;
  score = 0;
  show("game");
  renderCase();
}

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function renderCase() {
  answered = false;
  const c = cases[order[current]];
  document.getElementById("counter").textContent = `Situación ${current + 1} de ${order.length}`;
  document.getElementById("progress").style.width = `${current / order.length * 100}%`;
  document.getElementById("avatar").innerHTML = character(c.gender);
  document.getElementById("personName").textContent = c.name;
  document.getElementById("ostomy").textContent = c.ostomy;
  document.getElementById("category").textContent = c.category;
  document.getElementById("caseTitle").textContent = c.title;
  document.getElementById("scenario").textContent = c.scenario;
  document.getElementById("medicine").textContent = c.medicine;
  document.getElementById("presentation").textContent = c.presentation;
  document.getElementById("choices").style.display = "grid";
  document.getElementById("feedback").className = "feedback";
  
  document.getElementById("nextButton").textContent = current === order.length - 1 ? "Ver resultado →" : "Siguiente →";
}

function answer(choice) {
  if(answered) return;
  answered = true;
  
  const c = cases[order[current]];
  const correct = choice === c.correct;
  if(correct) score++;
  
  document.getElementById("choices").style.display = "none";
  const box = document.getElementById("feedback");
  box.className = "feedback show " + (correct ? "correct" : "incorrect");
  
  document.getElementById("feedbackTitle").textContent = correct ? "¡Decisión correcta!" : "Revisa esta decisión";
  document.getElementById("feedbackText").textContent = c.feedback;
  document.getElementById("learningPoint").textContent = c.learning;
  document.getElementById("progress").style.width = `${(current + 1) / order.length * 100}%`;
}

function nextCase() {
  if(!answered) return;
  current++;
  if(current < order.length) renderCase();
  else finish();
}

function finish() {
  show("finish");
  document.getElementById("score").textContent = `${score}/${order.length}`;
  
  let msg = score >= 10 ? "¡Excelente criterio de seguridad!" :
            score >= 7 ? "Buen trabajo. Refuerza los casos que requieren verificación." :
            "Sigue practicando: reconocer una duda también es una acción segura.";
            
  document.getElementById("scoreMessage").textContent = msg;
  document.getElementById("summary").innerHTML = `<strong>Tu resultado:</strong> ${score} respuestas correctas de ${order.length}.<br><br><strong>Recuerda:</strong> la ileostomía puede modificar el tránsito y la absorción de algunas presentaciones. La colostomía suele conservar un patrón de absorción más cercano al habitual. Sin embargo, la decisión depende del medicamento, su formulación y la situación clínica.`;
}