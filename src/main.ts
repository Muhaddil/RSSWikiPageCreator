import 'bulma';
import '@/css/styles.css';
import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import { Colours } from './css/stylePreset';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(ConfirmationService);
app.use(PrimeVue, {
  theme: {
    preset: Colours,
    options: {
      darkModeSelector: '.theme-dark',
    },
  },
  locale: {
    startsWith: 'Empieza con',
    contains: 'Contiene',
    notContains: 'No contiene',
    endsWith: 'Termina con',
    equals: 'Es igual a',
    notEquals: 'No es igual a',
    noFilter: 'Sin filtro',
    lt: 'Menor que',
    lte: 'Menor o igual que',
    gt: 'Mayor que',
    gte: 'Mayor o igual que',
    dateIs: 'La fecha es',
    dateIsNot: 'La fecha no es',
    dateBefore: 'La fecha es anterior a',
    dateAfter: 'La fecha es posterior a',
    clear: 'Limpiar',
    apply: 'Aplicar',
    matchAll: 'Coincidir todo',
    matchAny: 'Coincidir cualquiera',
    addRule: 'Agregar regla',
    removeRule: 'Eliminar regla',
    accept: 'Aceptar',
    reject: 'Rechazar',
    choose: 'Elegir',
    upload: 'Subir',
    cancel: 'Cancelar',
    completed: 'Completado',
    pending: 'Pendiente',
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    chooseYear: 'Elegir año',
    chooseMonth: 'Elegir mes',
    chooseDate: 'Elegir fecha',
    prevDecade: 'Década anterior',
    nextDecade: 'Década siguiente',
    prevYear: 'Año anterior',
    nextYear: 'Año siguiente',
    prevMonth: 'Mes anterior',
    nextMonth: 'Mes siguiente',
    prevHour: 'Hora anterior',
    nextHour: 'Hora siguiente',
    prevMinute: 'Minuto anterior',
    nextMinute: 'Minuto siguiente',
    prevSecond: 'Segundo anterior',
    nextSecond: 'Segundo siguiente',
    am: 'a. m.',
    pm: 'p. m.',
    today: 'Hoy',
    weekHeader: 'Sem',
    firstDayOfWeek: 0,
    weak: 'Débil',
    medium: 'Medio',
    strong: 'Fuerte',
    passwordPrompt: 'Introduce una contraseña',
    searchMessage: 'Hay {0} resultados disponibles',
    selectionMessage: 'Se han seleccionado {0} elementos',
    emptySelectionMessage: 'No hay ningún elemento seleccionado',
    emptySearchMessage: 'No se encontraron resultados',
    fileChosenMessage: '{0} archivos',
    noFileChosenMessage: 'No se ha elegido ningún archivo',
    emptyMessage: 'No hay opciones disponibles',
  }
});
app.use(Toast, {
  position: POSITION.BOTTOM_CENTER,
  pauseOnHover: false,
  draggable: true,
  closeOnClick: true,
  maxToasts: 5,
});

app.mount('#app');

// aria.trueLabel: 'Verdadero',
// aria.falseLabel: 'Falso',
// aria.nullLabel: 'No seleccionado',
// aria.star: '1 estrella',
// aria.stars: '{star} estrellas',
// aria.selectAll: 'Todos los elementos seleccionados',
// aria.unselectAll: 'Todos los elementos deseleccionados',
// aria.close: 'Cerrar',
// aria.previous: 'Anterior',
// aria.next: 'Siguiente',
// aria.navigation: 'Navegación',
// aria.scrollTop: 'Desplazar arriba',
// aria.moveTop: 'Mover arriba',
// aria.moveUp: 'Mover hacia arriba',
// aria.moveDown: 'Mover hacia abajo',
// aria.moveBottom: 'Mover abajo',
// aria.moveToTarget: 'Mover al destino',
// aria.moveToSource: 'Mover a la fuente',
// aria.moveAllToTarget: 'Mover todo al destino',
// aria.moveAllToSource: 'Mover todo a la fuente',
// aria.pageLabel: 'Página {page}',
// aria.firstPageLabel: 'Primera página',
// aria.lastPageLabel: 'Última página',
// aria.nextPageLabel: 'Página siguiente',
// aria.prevPageLabel: 'Página anterior',
// aria.rowsPerPageLabel: 'Filas por página',
// aria.jumpToPageDropdownLabel: 'Saltar al menú desplegable de la página',
// aria.jumpToPageInputLabel: 'Saltar al campo de entrada de la página',
// aria.selectRow: 'Fila seleccionada',
// aria.unselectRow: 'Fila deseleccionada',
// aria.expandRow: 'Fila expandida',
// aria.collapseRow: 'Fila colapsada',
// aria.showFilterMenu: 'Mostrar menú de filtro',
// aria.hideFilterMenu: 'Ocultar menú de filtro',
// aria.filterOperator: 'Operador de filtro',
// aria.filterConstraint: 'Restricción de filtro',
// aria.editRow: 'Editar fila',
// aria.saveEdit: 'Guardar edición',
// aria.cancelEdit: 'Cancelar edición',
// aria.listView: 'Vista de lista',
// aria.gridView: 'Vista de cuadrícula',
// aria.slide: 'Diapositiva',
// aria.slideNumber: '{slideNumber}',
// aria.zoomImage: 'Acercar imagen',
// aria.zoomIn: 'Acercar',
// aria.zoomOut: 'Alejar',
// aria.rotateRight: 'Rotar a la derecha',
// aria.rotateLeft: 'Rotar a la izquierda'
