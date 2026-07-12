<script setup lang="ts">
import { watch, reactive, ref, computed, onMounted, nextTick } from 'vue';
import autoAnimate from '@formkit/auto-animate';
import { faqLocales } from '@/datalists/faqLocales';

const currentLocale = ref<'es' | 'en'>((localStorage.getItem('faq-locale') as 'es' | 'en') || 'es');

const setLocale = (newLocale: 'es' | 'en') => {
  currentLocale.value = newLocale;
  localStorage.setItem('faq-locale', newLocale);
};

const faqs = computed(() => faqLocales[currentLocale.value].faqs);

const searchTerm = ref('');
const randomMessage = ref<string>('');
const messageShown = ref<boolean>(false);
const dropdowns = ref<(HTMLElement | null)[]>([]);
const showStates = reactive<{ [key: number]: boolean }>({});

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

const noResultsMessages = computed(() => faqLocales[currentLocale.value].noResultsMessages);

const getRandomMessage = () => {
  const msgs = noResultsMessages.value;
  const randomIndex = Math.floor(Math.random() * msgs.length);
  return msgs[randomIndex];
};

const lastLanguage = ref(currentLocale.value);

watch([searchTerm, currentLocale], () => {
  const langChanged = lastLanguage.value !== currentLocale.value;
  lastLanguage.value = currentLocale.value;

  if (searchTerm.value === '') {
    randomMessage.value = '';
    messageShown.value = false;
  } else if (filteredFaqs.value.length === 0) {
    if (!messageShown.value || langChanged) {
      randomMessage.value = getRandomMessage();
      messageShown.value = true;
    }
  } else {
    randomMessage.value = '';
    messageShown.value = false;
  }
});

const animationKey = ref(0);
watch(filteredFaqs, () => {
  animationKey.value++;
});

const toggleShow = (id: number) => {
  showStates[id] = !showStates[id];
};
</script>

<template>
  <div>
    <div class="faq-header-controls">
      <div class="search-container">
        <input
          type="text"
          v-model="searchTerm"
          :placeholder="faqLocales[currentLocale].searchPlaceholder"
        />
        <i class="search-icon">🔍</i>
      </div>

      <div class="locale-switcher">
        <button
          @click="setLocale('es')"
          :class="['locale-btn', { active: currentLocale === 'es' }]"
          aria-label="Español"
        >
          <span>🇪🇸</span> ES
        </button>
        <button
          @click="setLocale('en')"
          :class="['locale-btn', { active: currentLocale === 'en' }]"
          aria-label="English"
        >
          <span>🇬🇧</span> EN
        </button>
      </div>
    </div>

    <div id="faqList">
      <div
        v-if="filteredFaqs.length === 0 && randomMessage"
        class="no-results-banner"
      >
        <div class="no-results-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
            />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
            />
            <line
              x1="11"
              y1="8"
              x2="11"
              y2="14"
            />
            <line
              x1="8"
              y1="11"
              x2="14"
              y2="11"
            />
          </svg>
        </div>
        <div class="no-results-content">
          <strong class="no-results-title">{{ faqLocales[currentLocale].noResultsTitle }}</strong>
          <p class="no-results-message">{{ randomMessage }}</p>
        </div>
      </div>

      <div
        v-for="(faq, index) in filteredFaqs"
        :key="`${animationKey}-${faq.id}`"
        class="box faq-item"
        :style="{ '--stagger-delay': `${index * 0.06}s` }"
      >
        <div
          ref="dropdowns"
          class="dropdown"
        >
          <strong
            class="dropdown-label"
            @click="toggleShow(faq.id)"
          >
            <span
              class="dropdown-arrow"
              :class="{ open: showStates[faq.id] }"
              >›</span
            >
            {{ faq.question }}
          </strong>
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
        <p>
          <i>{{ faqLocales[currentLocale].createdBy }}</i>
        </p>
      </h4>
    </footer>
  </div>
</template>

<style>
.faq-header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  max-width: 100%;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.search-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 280px;
  max-width: 500px;
  margin-bottom: 0 !important;
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

.locale-switcher {
  display: inline-flex;
  padding: 4px;
  background-color: var(--input-background);
  border: 1px solid var(--border-color);
  border-radius: 30px;
  gap: 4px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

html.theme-dark .locale-switcher {
  box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
}

.locale-switcher:hover {
  border-color: var(--border-color-hover);
}

.locale-btn {
  background: transparent;
  border: none;
  color: var(--text-color);
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.7;
}

.locale-btn:hover {
  opacity: 1;
  background-color: var(--input-background-hover);
}

.locale-btn.active {
  opacity: 1;
  background: linear-gradient(135deg, #990000 0%, #990000 100%);
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(255, 26, 26, 0.3);
}

html.theme-dark .locale-btn.active {
  box-shadow: 0 4px 12px rgba(255, 26, 26, 0.4);
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
    transform 0.5s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  opacity: 0;
  transform: translateY(18px) scale(0.97);
  animation: faqItemIn 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) var(--stagger-delay, 0s) forwards;
}

@keyframes faqItemIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.box.faq-item:hover {
  border-color: var(--border-color-hover);
  transform: scale(1.01);
  box-shadow: 0 4px 6px rgb(0 0 0 / 15%);
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.dropdown-label:hover {
  color: var(--link-color);
}

.dropdown-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--link-color);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.dropdown-arrow.open {
  transform: rotate(90deg);
}

.dropdown-content {
  font-size: 1rem;
  color: var(--text-color);
  background-color: var(--input-background);
  padding: 15px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  animation: faqContentIn 0.25s ease-out;
}

@keyframes faqContentIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-content a {
  color: var(--link-color);
  text-decoration: none;
  position: relative;
}

.dropdown-content a:hover {
  color: var(--link-hover-color);
}

.dropdown-content a::after {
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

.dropdown-content a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.no-results-banner {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.75rem;
  margin-bottom: 1rem;
  border-radius: calc(var(--border-radius) * 2);
  background: var(--rss-bg-secondary);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--link-color);
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  animation: bannerSlideIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

html.theme-dark .no-results-banner {
  border-left-color: var(--link-color);
}

@keyframes bannerSlideIn {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.no-results-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--input-background);
  color: var(--link-color);
  border: 2px solid var(--link-color);
  box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  animation: iconBounce 2.5s ease-in-out infinite;
}

html.theme-dark .no-results-icon {
  box-shadow: 0 2px 6px rgb(0 0 0 / 25%);
}

@keyframes iconBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-4px);
  }
  60% {
    transform: translateY(-2px);
  }
}

.no-results-content {
  flex: 1;
  min-width: 0;
}

.no-results-title {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--heading-color);
  margin: 0 0 0.3rem 0;
  letter-spacing: -0.01em;
}

.no-results-message {
  font-size: 0.88rem;
  color: var(--placeholder-color);
  margin: 0;
  line-height: 1.5;
  font-style: italic;
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

@media screen and (width <= 768px) {
  .container {
    padding: 10px;
  }

  h1.title {
    font-size: 1.5rem;
  }

  .faq-header-controls {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  .search-container {
    max-width: 100%;
    margin-bottom: 0;
  }

  .locale-switcher {
    align-self: center;
  }

  .box.faq-item {
    padding: 15px;
  }

  .no-results-banner {
    padding: 1rem 1.25rem;
    gap: 0.75rem;
  }

  .no-results-icon {
    width: 38px;
    height: 38px;
  }

  .no-results-title {
    font-size: 0.875rem;
  }

  .no-results-message {
    font-size: 0.8rem;
  }
}

footer {
  text-align: center;
  margin-top: 2rem;
}

footer p {
  font-style: italic;
}

@media (prefers-reduced-motion: reduce) {
  .box.faq-item,
  .no-results-banner,
  .no-results-icon,
  .dropdown-arrow,
  .dropdown-content {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

@media (prefers-contrast: high) {
  .no-results-banner {
    border-width: 2px;
    border-left-width: 5px;
  }

  .no-results-icon {
    border-width: 3px;
  }
}
</style>
