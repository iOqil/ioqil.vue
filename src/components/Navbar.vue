<template>
  <header>
    <nav>
      <RouterLink to="/" class="logo-link">
        <ion-icon name="code-slash-outline"></ion-icon>
      </RouterLink>
      <Button id="menu" class="bg-none"><ion-icon name="grid-outline"></ion-icon></Button>
      <ul class="nav-links">
        <li class="dropdown-parent">
          <RouterLink to="/">
            <span>Home</span>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </RouterLink>
          <ul class="dropdown">
            <li><a href="#">Hero</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Testimitionals</a></li>
          </ul>
        </li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li>
          <RouterLink to="/blog">Blog</RouterLink>
        </li>
        <li><a>Contact</a></li>
      </ul>
      <div class="buttons">
        <Button class="bg-none">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',

  mounted() {
    const menuBtn = document.getElementById('menu')
    const navLinks = document.querySelector('.nav-links')

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show')
    })

    window.addEventListener('click', (e) => {
      if (
        e.target !== menuBtn &&
        !menuBtn.contains(e.target) &&
        e.target !== navLinks &&
        !navLinks.contains(e.target)
      ) {
        navLinks.classList.remove('show')
      }
    })
  },
}
</script>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
  min-height: 80px;
  border-bottom: 1px solid var(--border-color-30);
  background: var(--bg-color-30);
  backdrop-filter: blur(12px);
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 40px;

    .logo-link {
      display: grid;
      place-items: center;
      width: 80px;
      height: 80px;
      border-right: 1px solid var(--border-color-30);
      font-size: 32px;
      color: var(--primary-color);
      text-decoration: none;
    }

    #menu {
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      padding: unset;
      font-size: 24px;
      outline: none;
      border: none;
      order: 999;
      display: none;
    }

    ul {
      display: flex;
      gap: 20px;

      list-style: none;

      a {
        font-size: 16px;
        text-decoration: none;
        color: var(--light-color);
        display: flex;
        align-items: center;
        gap: 4px;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: color 0.8s ease;

        &:hover {
          color: var(--primary-color);
          transition: color 0.3s ease;
        }
      }

      .dropdown-parent {
        .dropdown {
          position: absolute;
          background-color: var(--card-color);
          margin-top: 28px;
          display: block;
          flex-direction: column;
          min-width: 150px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.8s ease;

          li {
            width: 100%;

            a {
              height: 40px;
              display: block;
              padding: 0 16px;
              color: var(--light-color);
              text-transform: capitalize;
              display: flex;
              align-items: center;

              &:hover {
                background-color: var(--bg-color);
                color: var(--primary-color);
              }
            }
          }
        }

        &:hover {
          .dropdown {
            max-height: 1000px;
            // transition: max-height 0.3s ease;
          }
        }
      }

      .dropdown-parent:has(.dropdown:hover) > a {
        color: var(--primary-color);
      }
    }
  }

  .buttons {
    margin-left: auto;
    display: flex;
    gap: 16px;
  }
}

@media (max-width: 780px) {
  header {
    min-height: 60px;
    padding-right: 20px;

    nav {
      gap: 20px;
      .logo-link {
        width: 60px;
        height: 60px;
        font-size: 24px;
      }

      #menu {
        display: grid;
        margin-left: auto;
      }

      ul {
        width: calc(100% - 60px);
        background: var(--bg-color);
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 35px;
        right: 0;
        gap: 5px;
        padding: 10px;
        border: 1px solid var(--border-color-30);
        border-left: 0;
        border-right: 0;
        z-index: -1;
        opacity: 0;

        // btn hide
        max-height: 0;
        overflow: hidden;
        transition:
          max-height 0.8s ease,
          opacity 0.8s ease,
          top 0.8s ease;

        li {
          background: var(--card-color);
          padding: 5px 10px;
          border-radius: 5px;
        }

        .dropdown-parent {
          position: relative;
          z-index: 1;
          .dropdown {
            padding: unset;
            width: 100%;
            margin-top: unset;
            background-color: none;
            box-shadow: unset;
            position: relative;
            top: 0;
            display: flex;
            flex-direction: column;
            gap: 5px;
            border-radius: 5px;
            border: unset;
            opacity: 1;

            li {
              padding: unset;
              a {
                background: var(--tag-color);
                border-radius: 5px;
              }

              &:first-child {
                margin-top: 5px;
              }
              &:last-child {
                margin-bottom: 5px;
              }
            }
          }
        }
      }

      ul.show {
        max-height: 1000px;
        z-index: 1;
        opacity: 1;
        top: 60px;
        transition: max-height 1s ease;
      }

      .buttons {
        margin-left: unset;
      }
    }
  }
}
</style>
