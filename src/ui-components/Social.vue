<template>
  <a>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Social',
}
</script>

<style scoped>
a {
  width: 40px;
  height: 40px;
  background: var(--tag-color);
  display: grid;
  place-items: center;
  font-size: 24px;
  border-radius: 5px;
  color: var(--primary-color);
  transition: all 0.3s ease;
  transform: scale(1);

  &:hover {
    background: var(--primary-color);
    color: var(--tag-color);
    animation: bulb 0.5s linear;
    animation-iteration-count: 1;
  }
}


</style>
