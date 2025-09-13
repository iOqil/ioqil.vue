<template>
  <header>
    <nav>
      <a href="" class="logo-link">L</a>
      <ul class="nav-links">
        <li class="dropdown-parent">
          <a href="">
            <span>Home</span>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </a>
          <ul class="dropdown">
            <li><a href="#">Hero</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Testimitionals</a></li>
          </ul>
        </li>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
    <div class="buttons">
      <Button class="bg-none">Login</Button>
      <Button>Sign Up</Button>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
  min-height: 80px;
  border-bottom: 1px solid var(--border-color-30);
  backdrop-filter: blur(12px);
  nav {
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
    ul {
      display: flex;
      gap: 20px;

      list-style: none;

      a {
        font-size: 16px;
        text-decoration: none;
        color: #fff;
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
              color: #fff;
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
    display: flex;
    gap: 16px;
  }
}

@media (max-width: 780px) {
  header {
    min-height: 60px;

    nav {
      .logo-link {
        width: 60px;
        height: 60px;
        font-size: 24px;
      }

      ul {
        .dropdown-parent {
          .dropdown {
            // display: none;
          }
        }
      }
    }
  }
}
</style>
