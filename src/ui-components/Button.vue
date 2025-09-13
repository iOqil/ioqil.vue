<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style scoped lang="scss">
button {
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--bg-color);
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    border-color: var(--border-color-30);
    color: var(--primary-color);
  }

  &.bg-none {
    background: transparent;
    border-color: var(--border-color-30);
    color: var(--primary-color);

    &:hover {
      background-color: var(--primary-color);
      color: var(--bg-color);
    }
  }
}
</style>
