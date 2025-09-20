<template>
  <div class="page-title">
    <h1>{{ $route.meta.title }}</h1>
    <p>{{ $route.meta.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
}
</script>

<style scoped lang="scss">
.page-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-color);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: -20px;

  h1 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
  }

  p {
    max-width: 50%;
    font-size: 14px;
    color: var(--card-color);
    font-weight: 500;
  }

  &::after {
    content: '';
    position: absolute;
    left: -20px;
    width: calc(100% + 40px);
    height: 100%;
    z-index: -1;
    background: linear-gradient(90deg, var(--tag-color), var(--primary-color));
  }
}

@media (max-width: 1024px) {
  .page-title {
    p {
      max-width: 70%;
    }
  }
}

@media (max-width: 768px) {
  .page-title {
    flex-wrap: wrap;
    p {
      max-width: unset;
    }
  }
}
</style>
