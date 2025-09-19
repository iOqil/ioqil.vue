<template>
  <aside>
    <div class="socials">
      <Social><ion-icon name="logo-github"></ion-icon></Social>
      <Social><ion-icon name="send-outline"></ion-icon></Social>
      <Social><ion-icon name="logo-instagram"></ion-icon></Social>
    </div>
    <div class="actions">
      <div class="contact">
        <Social id="mode">
          <span class="dark"><ion-icon name="moon-outline"></ion-icon></span>
          <span class="light"><ion-icon name="sunny-outline"></ion-icon></span>
        </Social>
        <Social><ion-icon name="mail-outline"></ion-icon></Social>
        <Social><ion-icon name="call-outline"></ion-icon></Social>
      </div>
      <div class="action">
        <Social><ion-icon name="arrow-up-outline"></ion-icon></Social>
      </div>
    </div>
  </aside>
</template>

<script>
import Social from '@/ui-components/Social.vue'

export default {
  name: 'Aside',
  components: { Social },

  mounted() {
    const modeBtn = document.querySelector('#mode')
    const html = document.querySelector('html')

    modeBtn.addEventListener('click', () => {
      if (html.classList.contains('light')) {
        html.classList.remove('light')
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        html.classList.remove('dark')
        html.classList.add('light')
        localStorage.setItem('theme', 'light')
      }
    })

    const userTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      html.classList.add('dark')
    } else {
      html.classList.add('light')
    }

    
  },
}
</script>

<style scoped lang="scss">
aside {
  position: fixed;
  top: 80px;
  left: 0;
  width: 80px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100vh - 80px);
  border-right: 1px solid var(--border-color-30);
  backdrop-filter: blur(10px);

  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }

  .actions {
    display: flex;
    gap: 40px;
    flex-direction: column;

    .contact {
      display: flex;
      align-items: center;
      gap: 15px;
      flex-direction: column;

      span {
        display: inline-block;
        padding-top: 2px;
      }

      .dark {
        display: none;
      }

      .light {
        display: block;
      }
    }

    .action {
      display: flex;
      align-items: center;
      gap: 15px;
      flex-direction: column;
    }
  }
}

html.light{
  aside {
    .actions {
      .contact {
        .dark {
          display: block;
        }

        .light {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 780px) {
  aside {
    top: 60px;
    width: 60px;
    height: calc(100vh - 60px);

    .actions {
      .contact {
        span {
          padding-top: 5px;
        }
      }
    }
  }
}
</style>
