<template>
  <div class="input-table-row">
    <div class="input-table-label">
      <slot name="label"></slot>
    </div>
    <div class="input-table-field">
      <slot name="input"></slot>
    </div>
  </div>
</template>

<style scoped>
.input-table-row {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0;
  width: 100%;
}

.input-table-label {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  min-width: 0;
}

.input-table-field {
  flex: 1;
  min-width: 0;
}

@media (max-width: 600px) {
  .input-table-row {
    flex-direction: column;
    gap: 0.35rem;
  }

  .input-table-label {
    flex: none;
    width: 100%;
  }
}
</style>
