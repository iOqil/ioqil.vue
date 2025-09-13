<template>
  <footer>Footer</footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
footer {
  // position: sticky;
  // bottom: 0;
  border-top: 1px solid var(--border-color-30);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  color: white;
  text-align: center;
  padding: 1rem;
  height: 80px;
}

@media (max-width: 780px) {
  footer {
    height: 60px;
  }
}
</style>
