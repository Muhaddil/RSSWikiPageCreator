<script lang="ts">
import { defineComponent, watch, reactive, ref, computed, watchEffect, onMounted, nextTick } from 'vue';
import autoAnimate from '@formkit/auto-animate';

export default defineComponent({
  name: 'Faq',
  setup() {
    const faqs = ref([
      {
        id: 1,
        question: '¿Qué es la RSS?',
        answer:
          'La RSS es un grupo de jugadores de NMS de habla hispana (aunque también se aceptan miembros de otros idiomas) que tiene una página en la wikipedia de NMS donde se registran los descubrimientos de sus miembros.',
      },
      {
        id: 2,
        question: '¿Cómo funciona la wiki de NMS?',
        answer:
          'La wiki de NMS tiene administradores que han definido una serie de normas para añadir páginas. Estas normas son de cumplimiento obligatorio. Los administradores pueden modificar o eliminar páginas que no respeten las reglas. Para registrar páginas en la wiki, se debe crear una civilización o una compañía dentro del espacio civilizado.',
      },
      {
        id: 3,
        question: '¿Cómo puedo ser miembro de la RSS?',
        answer:
          'Para ser miembro de la RSS debes registrarte como usuario de Fandom y darte de alta en el Censo de Miembros de la RSS.',
      },
      {
        id: 4,
        question: '¿Cómo puedo colaborar con la RSS?',
        answer:
          'Puedes colaborar añadiendo páginas a la wiki con tus descubrimientos, tales como sistemas estelares, planetas, fauna, flora, naves, cargueros o multiherramientas.',
      },
      {
        id: 5,
        question: '¿Hay algún requisito para nombrar los descubrimientos?',
        answer:
          "Para los sistemas estelares, se recomienda añadir 'RSS' al inicio del nombre del sistema. Para los planetas es opcional, pero agradecemos que también se añada.",
      },
      {
        id: 6,
        question: '¿Qué datos e imágenes necesito para dar de alta una página en la wiki?',
        answer:
          'En la herramienta mencionada hay una ayuda para cada campo que necesitas rellenar. Si tienes alguna dificultad, puedes solicitar asistencia en Discord.',
      },
      {
        id: 7,
        question: '¿Qué necesito para dar de alta mi base en el Censo de Bases de la RSS?',
        answer:
          'La base debe estar ubicada en uno de los sistemas registrados por la RSS. Puedes consultar las regiones registradas por la RSS.',
      },
      {
        id: 8,
        question: '¿Qué tipo de base puedo dar de alta en el Censo de Bases de la RSS?',
        answer:
          'Cualquier base puede registrarse, pero recomendamos que sea tu base principal o una base bien desarrollada. Es posible cambiar la base registrada en cualquier momento.',
      },
      {
        id: 9,
        question: '¿Qué tengo que hacer para mantener mi base en el Censo de Bases de la RSS?',
        answer:
          "El censo se actualiza anualmente. Debes renovar tu registro cada año, preferentemente en enero. Para renovar, simplemente edita la página de tu base y cambia el campo 'censusrenewal' al año actual (por ejemplo: 'censusrenewal = 2024').",
      },
      {
        id: 10,
        question:
          '¿Por qué no aparezco en el Censo de Miembros de la RSS si tengo mi base registrada en el Censo de Bases?',
        answer:
          'Los administradores de la wiki decidieron que los jugadores con una base registrada en el Censo de Bases no pueden aparecer en el Censo de Miembros, al igual que solo se puede tener una base por jugador en el censo de bases. Cabe destacar que el censo de bases tiene una mayor importancia para la RSS que el censo de miembros. Además, este registro conlleva el compromiso de actualizar la entrada en el censo de la base cada año.',
      },
      {
        id: 11,
        question: '¿Puedo registrar sistemas, planetas o bases fuera de las regiones registradas por la RSS?',
        answer:
          'No es recomendable registrar elementos fuera de las regiones registradas por la RSS para evitar problemas con los administradores de la wiki.',
      },
      {
        id: 12,
        question: '¿Por qué me da error de Inline Templates?',
        answer:
          'Eso es porque usas un editor que se carga el formato que crea esta web, cambia el editor a editor clásico aquí: <a href="https://nomanssky.fandom.com/wiki/Special:Preferences#mw-prefsection-editing" target="_blank">Editor clásico</a>',
      },
      {
        id: 13,
        question: '¿Cómo me uno al censo de la RSS?',
        answer:
          'Es algo bastante sencillo, basta con ir al link que se proporcionará aquí y rellenar todos los datos. Después, debes copiar ese código y darle a crear, te llevará a una web y solo necesitas pegar el código al final del todo de la página: <a href="https://muhaddil.github.io/RSSWikiPageCreator/census.html" target="_blank">Censo</a>',
      },
      {
        id: 14,
        question: '¿Cuál es el objetivo principal de la RSS?',
        answer:
          "La Royal Space Society (RSS) tiene como objetivo ser una comunidad hispanohablante de apoyo, exploración y documentación en el universo de No Man's Sky. Ofrece recursos, rutas, y ayuda a nuevos jugadores.",
      },
      {
        id: 15,
        question: '¿Quién fundó la RSS y cuándo?',
        answer:
          'La RSS fue fundada por Oskar1up. El sistema capital Urticalia fue descubierto el 25 de enero de 2020 por Kaos1923 y la fundación oficial ocurrió el 8 de febrero de 2020.',
      },
      {
        id: 16,
        question: '¿Por qué se llama Royal Space Society?',
        answer:
          'El nombre fue seleccionado por votación en un directo del fundador, tambien, se dice que el nombre proviene de una nave Royal tipo 7 que usaba uno de los fundadores durante los primeros viajes.',
      },
      {
        id: 17,
        question: '¿Qué significa que la RSS sea un HUB?',
        answer:
          'Significa que ha alcanzado un nivel de actividad suficiente en la wiki (más de 20 miembros y 20 sistemas registrados). Esto le otorga reconocimiento como civilización activa.',
      },
      {
        id: 18,
        question: '¿Qué es un HUB Nexus y por qué quiere alcanzarlo la RSS?',
        answer:
          'Un HUB Nexus es un nivel superior de reconocimiento. Para alcanzarlo, la RSS debe registrar al menos 120 bases principales de miembros activos en la wiki.',
      },
      {
        id: 19,
        question: '¿Qué tipo de gobierno tiene la RSS?',
        answer:
          "La RSS se describe como una 'democracia totalitaria': los miembros pueden proponer ideas, pero las decisiones finales las toma el fundador, Oskar1up.",
      },
      {
        id: 20,
        question: '¿Qué es RSSWikiPageCreator?',
        answer:
          'Es una herramienta, creada por Muhaddil para los miembros de la RSS, que genera automáticamente el código wiki necesario para crear páginas de bases, miembros, naves, etc. Facilita la participación en la wiki sin tener que conocer la sintaxis avanzada.',
      },
      {
        id: 21,
        question: '¿Qué actividades realiza la RSS?',
        answer:
          'Exploración, documentación de sistemas, creación de bases, registro en censos y participación en eventos comunitarios. También ofrecen soporte a nuevos jugadores.',
      },
      {
        id: 22,
        question: '¿Qué es el Censo de Miembros?',
        answer:
          'Es un registro de todos los jugadores activos afiliados a la RSS en la wiki. Incluye datos como nombre de jugador, sistema base, plataforma y fecha de ingreso.',
      },
      {
        id: 23,
        question: '¿Qué es el Censo de Bases?',
        answer:
          'Es un registro de las bases principales de los miembros activos. Cada jugador solo puede registrar una base y debe renovarla anualmente.',
      },
      {
        id: 24,
        question: '¿Dónde están ubicadas las regiones oficiales de la RSS?',
        answer:
          'Principalmente en la galaxia Euclides, aunque se han expandido a otras regiones documentadas en la wiki de NMS, como Eissentam o Hilbert.',
      },
      {
        id: 25,
        question: '¿Qué pasa si mi base no está en una región oficial de la RSS?',
        answer:
          'No se recomienda registrar bases fuera de regiones oficiales, ya que podrían ser eliminadas por los administradores de la wiki.',
      },
      {
        id: 26,
        question: '¿Qué es el espacio civilizado en la wiki?',
        answer:
          'Es una categoría de la wiki que agrupa civilizaciones activas y organizadas como la RSS. Estas civilizaciones siguen reglas específicas y tienen estructuras sociales definidas.',
      },
      {
        id: 27,
        question: '¿Qué plantilla debo usar al registrar una base?',
        answer:
          'Debes usar la plantilla Infobox Base que se puede generar con la herramienta <a href="https://muhaddil.github.io/RSSWikiPageCreator/base.html" target="_blank">RSSWikiPageCreator</a>.',
      },
      {
        id: 28,
        question: '¿Qué errores debo evitar al editar la wiki?',
        answer:
          'Evita el uso de apóstrofes en nombres de páginas, errores de ortografía en los enlaces y no combines múltiples cambios sin una explicación clara en el resumen de edición. También se deben evitar los siguientes símbolos: ][ & : @ * % $ ? # }{ _ / \\ ´ “ ”',
      },
      {
        id: 29,
        question: '¿Puedo registrar fauna o flora descubierta?',
        answer:
          'Sí, puedes crear páginas de criaturas, flora y otros descubrimientos, siempre que uses las plantillas adecuadas y proporciones datos como ubicación y glifos.',
      },
      {
        id: 30,
        question: '¿Cómo obtengo las coordenadas de mi base?',
        answer:
          'Debes usar los glifos del portal y capturar la secuencia de glifos desde el modo foto dentro del juego. Estas se usan para registrar tu base en la wiki.',
      },
      {
        id: 31,
        question: '¿Dónde están listadas todas las páginas relacionadas con la RSS?',
        answer:
          "Puedes consultar la categoría 'Royal Space Society' en la wiki de NMS. Allí se agrupan todas las páginas afiliadas, desde bases hasta naves.",
      },
      {
        id: 32,
        question: '¿Qué idioma se usa en las páginas de la wiki?',
        answer:
          'Las páginas de la RSS están en inglés, pero deben seguir el estilo y formato de la wiki, que utiliza inglés británico y ciertas normas globales.',
      },
      {
        id: 33,
        question: '¿Puedo añadir enlaces externos en la wiki?',
        answer:
          'Sí, pero se recomienda incluir la información principal directamente en el texto, usando los enlaces solo como referencia complementaria.',
      },
      {
        id: 34,
        question: '¿Qué es una región RSS y cómo se define?',
        answer:
          "Una región RSS es un área del espacio dentro del universo de No Man's Sky que ha sido oficialmente adoptada y documentada por la comunidad de la Royal Space Society. Estas regiones se registran en la wiki como parte de su expansión organizada.",
      },
      {
        id: 35,
        question: "¿Qué significa que un sistema esté 'reclamado' por la RSS?",
        answer:
          'Significa que un jugador miembro de la RSS ha registrado ese sistema oficialmente en la wiki, bajo las normas establecidas, y lo ha marcado como parte del territorio explorado por la comunidad.',
      },
      {
        id: 36,
        question: '¿Puedo registrar varios sistemas estelares?',
        answer:
          "Sí, puedes registrar tantos sistemas como quieras, siempre que sigas el formato correcto y uses el prefijo 'RSS' en el nombre del sistema. Asegúrate de que no estén ya registrados y siempre estén dentro de la región de la RSS.",
      },
      {
        id: 37,
        question: '¿Qué diferencia hay entre base y puesto avanzado?',
        answer:
          'Una base es una estructura principal desarrollada por un jugador y registrada en el censo. Un puesto avanzado es una base menor o secundaria, no necesariamente registrada oficialmente.',
      },
      {
        id: 38,
        question: '¿Qué debo hacer si quiero abandonar la RSS?',
        answer:
          'Puedes retirar tus páginas o marcar tu base como inactiva en la wiki. También puedes comunicar tu salida en el Discord oficial para que un encargado de la wiki de la RSS te retire tus bases o las marque como obsoletas.',
      },
      {
        id: 39,
        question: '¿La RSS tiene alguna alianza con otras civilizaciones?',
        answer:
          'No, la RSS no está en ninguna alianza con otro hub, es decir, no está ni en la Un42 ni en la Federación Intergaláctica. Esto es debido a que la comunidad cree que al entrar en una alianza perderíamos nuestra esencia.',
      },
      {
        id: 40,
        question: '¿Cuáles son los eventos comunitarios más destacados organizados por la RSS?',
        answer:
          'La RSS ha organizado exploraciones coordinadas, competiciones de construcción de bases, eventos de fotografía y campañas de expansión hacia nuevas regiones, así como misas en la Iglesia de la Santa Mamadisimidad.',
      },
      {
        id: 41,
        question: '¿Se pueden registrar sistemas en otras galaxias además de Euclides?',
        answer:
          'Sí, pero la prioridad y organización de la RSS está centrada principalmente en Euclides. Se recomienda consultar con los encargados antes de registrar fuera de esa galaxia.',
      },
    ]);

    const searchTerm = ref('');
    const randomMessage = ref<string>('');
    const messageShown = ref<boolean>(false);

    const filteredFaqs = computed(() =>
      faqs.value.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    );

    const applyAnimation = async () => {
      await nextTick();
      dropdowns.value.forEach((el) => {
        if (el) autoAnimate(el);
      });
    };

    onMounted(applyAnimation);

    watch(filteredFaqs, applyAnimation);

    const noResultsMessages = [
      '¿Has probado a buscar algo que tenga sentido?',
      '¿Seguro que escribiste bien? Yo lo encontré a la primera.',
      'Bueno, si no está aquí, será que no era tan importante.',
      '¿No será que estás buscando en el lugar equivocado?',
      '¿Seguro que es algo que existe? Porque yo no veo nada.',
      'A ver si pruebas con otra búsqueda, porque yo lo encontraría en 5 segundos.',
      'No te rindas, pero... ¿estás seguro de que lo escribiste correctamente?',
      'Hmm, eso no parece estar por aquí. ¿Lo estás buscando bien?',
      'Parece que el universo no tiene esa respuesta... ¿Estás seguro de lo que buscas?',
      '¿Revisaste si la ortografía está bien? A veces los detalles importan.',
      'No encuentro nada con eso... Tal vez es una búsqueda demasiado avanzada para mí.',
      '¡Vaya! ¿Estás seguro de que existe algo con esa descripción?',
      '¿Seguro que esa es la pregunta correcta? Yo no lo encuentro por aquí.',
      'A lo mejor intentas buscar en otro lugar... ¡Yo no veo nada!',
      '¿Lo escribiste bien? A veces con una sola letra cambia todo.',
      'Parece que esa información no está aquí, pero ¿has probado con otro término?',
      '¿Has probado a hacer una búsqueda más precisa? Esto se está volviendo difícil.',
      'Nada encontrado... tal vez estamos buscando en el lugar equivocado.',
      'Eso no lo tengo, ¿pero seguro que es algo relevante?',
      '¿Has probado con otro término? Esto se está poniendo interesante.',
      '¿Estás buscando algo que realmente exista? Porque no lo encuentro por aquí.',
      'No sé si me estoy perdiendo algo, pero no encuentro nada relacionado.',
      'Hmm... eso no me suena. Tal vez necesites un mejor término de búsqueda.',
      'Eso de buscar en internet no es tan difícil, ¿eh? Solo tienes que saber cómo hacerlo.',
      'Es que, si supieras cómo funciona esto, lo encontrarías enseguida.',
      'Te lo dije, no hay nada ahí, es obvio. Mejor prueba en otro sitio.',
      'Yo lo busqué y lo encontré en 3 segundos. ¿No estarás escribiendo mal?',
      'Si no encuentras nada, tal vez es porque no estás buscando bien.',
      'Es que, con lo fácil que es buscar esto, no entiendo cómo no lo encuentras.',
      'No sé, yo no tendría muchas esperanzas con eso. Mejor busca algo más sencillo.',
      'Yo me acuerdo que hace años encontré eso sin problema, pero seguro que tú lo complicaste.',
      'La respuesta está ahí, pero claro, si no sabes cómo buscar, es normal que no la encuentres.',
      'Tienes que poner más atención, porque eso que buscas es fácil de encontrar, no sé cómo no lo ves.',
      'Te lo estoy diciendo, eso no existe o ya no está. Mejor busca otra cosa.',
      'Pues si yo lo encontré hace poco, y ahora tú no. ¿Qué hiciste mal?',
      'Yo ni busqué y ya sé lo que hay, ¿cómo no lo encontraste tú?',
      'Claro, la respuesta estaba frente a tus narices, pero ¿quién sabe buscar, no?',
      'Es que no lo entiendo, a mí no me costó nada encontrarlo. ¿Seguiste todos los pasos?',
    ];

    const getRandomMessage = () => {
      const randomIndex = Math.floor(Math.random() * noResultsMessages.length);
      return noResultsMessages[randomIndex];
    };

    watchEffect(() => {
      if (searchTerm.value === '') {
        randomMessage.value = '';
        messageShown.value = false;
      } else if (filteredFaqs.value.length === 0 && !messageShown.value) {
        randomMessage.value = getRandomMessage();
        messageShown.value = true;
      } else if (filteredFaqs.value.length > 0) {
        randomMessage.value = '';
        messageShown.value = false;
      }
    });

    const activeStyles = reactive<{ [key: number]: { height: string; opacity: string } }>({});

    const onToggle = (event: Event) => {
      const details = event.currentTarget as HTMLDetailsElement;
      const id = Number(details.dataset.id);

      const p = details.querySelector('p');
      if (details.open && p) {
        activeStyles[id] = { height: `${p.scrollHeight}px`, opacity: '1' };
      } else {
        activeStyles[id] = { height: '0', opacity: '0' };
      }
    };

    const getStyle = (id: number) => activeStyles[id] || { height: '0', opacity: '0' };

    const showStates = reactive<{ [key: number]: boolean }>({});
    const toggleShow = (id: number) => {
      showStates[id] = !showStates[id];
    };

    const dropdowns = ref<(HTMLElement | null)[]>([]);

    // onMounted(() => {
    //   window.location.href = "/RSSWikiPageCreator/indextest.html";
    // });

    return {
      searchTerm,
      filteredFaqs,
      randomMessage,
      onToggle,
      getStyle,
      showStates,
      toggleShow,
      dropdowns,
    };
  },
});
</script>

<template>
  <div>
    <!-- <h1 class="title" style="text-align: center;">Preguntas Frecuentes</h1> -->
    <div class="search-container">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Buscar preguntas..."
      />
      <i class="search-icon">🔍</i>
    </div>

    <div id="faqList">
      <p
        v-if="filteredFaqs.length === 0 && randomMessage"
        class="no-results-message"
      >
        {{ randomMessage }}
      </p>

      <div
        v-for="faq in filteredFaqs"
        :key="faq.id"
        class="box faq-item"
      >
        <div
          ref="dropdowns"
          class="dropdown"
        >
          <strong
            class="dropdown-label"
            @click="toggleShow(faq.id)"
          >
            {{ faq.question }}
          </strong>
          <br />
          <p
            class="dropdown-content"
            v-if="showStates[faq.id]"
            v-html="faq.answer"
          ></p>
        </div>
      </div>
    </div>

    <footer>
      <h4>
        <p><i>Creado y mantenido por MoonWatcher75</i></p>
      </h4>
    </footer>
  </div>
</template>

<style>
.search-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin-bottom: 1rem;
}

.search-container input {
  width: 100%;
  padding: 0.75rem 2.5rem;
  background-color: var(--input-background);
  color: var(--text-color);
  border: 1px solid #333;
  border-radius: 50px;
  transition:
    background-color 0.2s,
    border-color 0.2s,
    transform 0.2s ease-out;
  font-size: 1rem;
}

.search-container input:hover {
  background-color: var(--input-background-hover);
}

.search-container input:focus {
  outline: 1px solid var(--outline-color);
  border-color: var(--border-color-focus);
  transform: scale(1.05);
}

.search-container input::placeholder {
  color: var(--placeholder-color);
  opacity: 0.8;
}

.search-icon {
  position: absolute;
  left: 10px;
  color: #8e9eac;
  font-size: 1.2rem;
  transition:
    font-size 0.2s ease-out,
    left 0.2s ease-out;
}

.search-container input:focus ~ .search-icon {
  font-size: 1.5rem;
  left: -5px;
}

.box.faq-item {
  padding: 20px;
  margin-bottom: 15px;
  background-color: var(--input-background);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  transition:
    var(--theme-transition),
    transform 0.5s ease;
}

.box.faq-item:hover {
  border-color: var(--border-color-hover);
  transform: scale(1.01);
  box-shadow: 0 4px 6px rgb(0 0 0 / 15%);
}

details {
  cursor: pointer;
  position: relative;
}

details summary {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--heading-color);
}

details[open] summary {
  color: var(--link-color);
}

details p {
  margin-top: 10px;
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition:
    opacity 0.5s ease,
    height 0.5s ease;
}

details[open] p {
  opacity: 1;
}

details a {
  color: var(--link-color);
  text-decoration: none;
  position: relative;
}

details a:hover {
  color: var(--link-hover-color);
}

details a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: var(--link-hover-color);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 1.3s ease;
}

details a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

code {
  background-color: var(--input-background-hover);
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 0.9rem;
  color: var(--code-color);
  opacity: 0;
  animation: fadeIn 0.6s ease 0.5s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes inputFocus {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.05);
  }
}

@media screen and (width <= 768px) {
  .container {
    padding: 10px;
  }

  h1.title {
    font-size: 1.5rem;
  }

  .search-container {
    margin-bottom: 20px;
  }

  .box.faq-item {
    padding: 15px;
  }
}

footer {
  text-align: center;
  margin-top: 2rem;
}

footer p {
  font-style: italic;
}

.no-results-message {
  text-align: center;
  font-size: 1.3rem;
  color: #f00;
  margin-top: 1rem;
  padding: 10px;
}

.no-results-message p {
  margin: 0;
}

.dropdown {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: transparent;
}

.dropdown-label {
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: var(--heading-color);
  user-select: none;
}

.dropdown-content {
  font-size: 1rem;
  color: var(--text-color);
  background-color: var(--input-background);
  padding: 15px;

  /* margin-top: 5px; */
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}
</style>
