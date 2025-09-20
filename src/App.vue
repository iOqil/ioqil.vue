<script>
import { Navbar, Aside, Footer } from '@/components'
import { RouterView } from 'vue-router'

export default {
  components: { Navbar, Aside, Footer },
}
</script>

<template>
  <Navbar />
  <main>
    <Aside />
    <div class="content">
      <div class="content__data">
        <RouterView />
      </div>
      <Footer />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: calc(100% - 80px);
  margin-left: 80px;

  .content {
    &__data {
      min-height: calc(100vh - 161px);
      padding: 20px;
    }
  }
}

@media (max-width: 780px) {
  main {
    width: calc(100% - 60px);
    margin-left: 60px;
  }
}
</style>
