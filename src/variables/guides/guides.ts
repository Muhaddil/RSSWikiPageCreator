import { ref } from 'vue';

export const guides = ref([
  {
    id: 1,
    title: 'Creación de una página para una base',
    category: 'Bases',
    steps: [
      {
        text: `Ingresa el nombre de la base en el campo "Nombre". Este será el título principal de la página wiki.`,
        image: '',
      },
      {
        text: `Haz clic en el botón "+ Elegir" bajo "Imagen principal" para subir una imagen que represente visualmente la base.`,
      },
      {
        text: `En el campo "Sistema", selecciona o escribe el nombre del sistema estelar donde se encuentra la base.`,
      },
      {
        text: `Escribe el nombre del planeta en el campo "Nombre del Planeta" donde está ubicada la base.`,
      },
      {
        text: `Si la base está situada en una luna, ingresa el nombre de la luna en "Nombre de la Luna".`,
      },
      {
        text: `Introduce las coordenadas planetarias exactas en los campos de latitud y longitud bajo "Coordenadas planetarias".`,
      },
      {
        text: `Selecciona los glifos que representan la ubicación de tu base. Si recibes un mensaje de error, significa que tu base no se encuentra en una de las regiones de la Royal Space Society, por lo que no se puede subir a la wiki.`,
      },
      {
        text: `En "Tipo de la base", elige el tipo de base que estás creando.`,
      },
      {
        text: `Marca las características específicas de la base, como refinerías, plataformas de aterrizaje, si tiene pista de carreras, etc.`,
      },
      {
        text: `Si el constructor tiene una página wiki, ingresa su nombre en "Nombre en la wiki del constructor". Si no, usa un alias en el campo correspondiente.`,
      },
      {
        text: `Documenta quién está creando la entrada y selecciona el modo de juego y la plataforma en los campos "Modo de juego" y "Plataforma".`,
      },
      {
        text: `Completa la sección "Censo" con la siguiente información:
             <ul>
               <li>Nombre en el juego: Ingresa tu nombre dentro del juego.</li>
               <li>Nombre de Reddit: Si tienes presencia en Reddit, ingresa tu nombre de usuario. (opcional)</li>
               <li>Nombre en redes sociales: Proporciona cualquier nombre de usuario relevante en otras redes sociales. (opcional)</li>
               <li>Nombre de Discord: Si tienes un identificador de Discord relacionado, inclúyelo aquí. (opcional)</li>
               <li>Código de amigo: Ingresa tu código de amigo del No Man's Sky. (opcional)</li>
               <li>Fecha de llegada a la RSS: Especifica la fecha en que la base fue establecida o llegó a la RSS.</li>
             </ul>`,
      },
      {
        text: `En la sección "Distribución de la Base", describe cómo está distribuida la base en inglés.`,
      },
      {
        text: `En la sección "Características de la Base", selecciona todo lo que tenga la base, no hace falta que añadas nada.`,
      },
      {
        text: `En la sección "Información Adicional", proporciona cualquier detalle extra relevante sobre la base en inglés. (opcional)`,
      },
      {
        text: `En la sección "Galería", sube imágenes adicionales de la base. Asegúrate de que las descripciones de las imágenes estén en inglés. (opcional)`,
      },
      {
        text: `Una vez que todos los campos estén completos, haz clic en el botón "Copiar". Esto copiará el código generado al portapapeles.`,
      },
      {
        text: `Después, pulsa el botón de "Crear página" para ser redirigido a la página de creación de la wiki y allí deberás pegar el código que acabas de copiar.`,
      },
      {
        text: `Aquí tienes un video tutorial sobre cómo crear una página para una base. <div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/IsUdAspX8_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`,
      },
    ],
    headerImage: '',
  },
  {
    id: 2,
    title: 'Creación de una página para un sistema estelar',
    category: 'Sistemas Estelares',
    steps: [
      {
        text: `Ingresa el nombre del sistema estelar en el campo "Nombre del sistema". Este será el título principal de la página wiki.`,
        image: '',
      },
      {
        text: `Si el sistema tenía un nombre diferente al que lo has registrado, ingrésalo en el campo "Nombre original antes de registrar (si esta disponible)".`,
      },
      {
        text: `Haz clic en el botón "+ Elegir" bajo "Imagen principal" para subir una imagen que represente visualmente el sistema estelar.`,
      },
      {
        text: `Haz clic en el botón "+ Elegir" bajo "Imagen de mapa galáctico" para subir una imagen que muestre el mapa galáctico del sistema.`,
      },
      {
        text: `Haz clic en el botón "+ Elegir" bajo "Nombre de la imagen de la estación espacial" para subir una imagen de la estación espacial.`,
      },
      {
        text: `Selecciona los glifos que representan la ubicación del sistema estelar.`,
      },
      {
        text: `Escribe el número de estrellas del sistema en el campo "Numero de estrellas", se observa en el modo foto viendo cuantos soles tiene.`,
      },
      {
        text: `Selecciona el color de la estrella primaria del sistema en el campo "Color de la estrella primaria", si tiene Indio sería azul, y así.`,
      },
      {
        text: `Selecciona la clase estelar del sistema en el campo "Clase estelar", se observa en el mapa galáctico.`,
      },
      {
        text: `Introduce la distancia al centro del sistema en el campo "Distancia al centro", se observa en el mapa galáctico.`,
      },
      {
        text: `Escribe el número de planetas en el campo "Número de planetas".`,
      },
      {
        text: `Escribe el número de lunas en el campo "Número de lunas".`,
      },
      {
        text: `Indica si el sistema tiene agua en el campo "¿Agua en el sistema?".`,
      },
      {
        text: `Indica si el sistema es disonante en el campo "¿Sistema disonante?".`,
      },
      {
        text: `Marca si deseas añadir información extra en los planetas en el checkbox de "¿Planetas Completos?".`,
      },
      {
        text: `Rellena cada input de cada planeta con su nombre, fotos, clima, bioma, etc.`,
      },
      {
        text: `Selecciona la facción del sistema en el campo "Facción del sistema".`,
      },
      {
        text: `Selecciona la economía del sistema en los campos "Economía del sistema", "Economía Vendedor", "Economía Comprar".`,
      },
      {
        text: `Selecciona la riqueza del sistema en el campo "Riqueza del sistema".`,
      },
      {
        text: `Selecciona los conflictos del sistema en el campo "Conflictos del sistema".`,
      },
      {
        text: `Indica cuando ha sido descubierto el sistema en el campo "¿Cuándo se descubrió este sistema?".`,
      },
      {
        text: `Indica cuando ha sido documentado el sistema en el campo "¿Cuándo se documentó este sistema?".`,
      },
      {
        text: `Selecciona el modo de juego y la plataforma en los campos "Modo de juego" y "Plataforma".`,
      },
      {
        text: `Si el descubridor tiene cuenta en la wiki, ingresa su nombre en "Nombre en la wiki del descubridor". Si no, usa un alias en el campo correspondiente.`,
      },
      {
        text: `Ingresa el alias del descubridor si no tiene una página wiki en el campo "Alias del descubridor si no tiene wiki".`,
      },
      {
        text: `Ingresa el nombre del documentador si no es el descubridor del sistema en el campo "Nombre del documentador si no es el descubridor".`,
      },
      {
        text: `Haz clic en el botón "Agregar Tradeable" para agregar los objetos característicos de esa economía, es decir, los que se pueden comprar por menos dinero de lo normal en ese sistema.`,
      },
      {
        text: `Completa la sección "Comerciante de modulos de exotraje Clase-S" con todos los modulos clase S que venda ese comerciante.`,
      },
      {
        text: `Completa la sección "Mejoras de multiherramienta Clase-S" con todos los modulos clase S que venda ese comerciante.`,
      },
      {
        text: `Completa la sección "Comerciante de modulos de nave Clase-S" con todos los modulos clase S que venda ese comerciante.`,
      },
      {
        text: `Completa la sección "Comerciante de modulos de exonave Clase-S" con todos los modulos clase S que venda ese comerciante.`,
      },
      {
        text: `Completa la sección "Mejoras del chatarrero Clase-X" con todos los modulos clase X que venda ese comerciante.`,
      },
      {
        text: `En la sección "Información Adicional", proporciona cualquier detalle extra relevante sobre el sistema estelar, es imprescindible que este en inglés. (opcional)`,
      },
      {
        text: `En la sección "Galería", sube imágenes adicionales del sistema estelar. Asegúrate de que las descripciones de las imágenes estén en inglés. (opcional)`,
      },
      {
        text: `Una vez que todos los campos estén completos, haz clic en el botón "Copiar". Esto copiará el código generado al portapapeles.`,
      },
      {
        text: `Después, pulsa el botón de "Crear página" para ser redirigido a la página de creación de la wiki y allí deberás pegar el código que acabas de copiar.`,
      },
    ],
    headerImage: '',
  },
]);
