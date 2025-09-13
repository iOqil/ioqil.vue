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
      <RouterView />
      <Footer />
    </div>
  </main>
</template>

<style scoped>
.content {
  height: calc(100dvh - 80px);
  overflow-y: auto;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #003800, #00ff0080);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: blue;
  }
}

@media (max-width: 780px) {
  .content {
    height: calc(100dvh - 60px);
  }
}
</style>
