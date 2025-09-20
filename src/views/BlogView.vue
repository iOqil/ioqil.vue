<template>
  <PageTitle />

  <div class="blog">
    <div class="card">
      <a class="img-link"><img src="https://placehold.co/400" alt="" /></a>
      <div class="card__body">
        <h5 class="card-title"><a href="">Card title</a></h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat fugiat officiis
          velit vel? Numquam quis nisi sed nihil odit!
        </p>
        <div class="buttons">
          <a href="#" class="view">View</a>
          <Social class="fast-view"><ion-icon name="eye-outline"></ion-icon></Social>
        </div>
      </div>
    </div>
    <div class="card">
      <a class="img-link"><img src="https://placehold.co/400" alt="" /></a>
      <div class="card__body">
        <h5 class="card-title"><a href="">Card title</a></h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat fugiat officiis
          velit vel? Numquam quis nisi sed nihil odit!
        </p>
        <div class="buttons">
          <a href="#" class="view">View</a>
          <Social class="fast-view"><ion-icon name="eye-outline"></ion-icon></Social>
        </div>
      </div>
    </div>
    <div class="card">
      <a class="img-link"><img src="https://placehold.co/400" alt="" /></a>
      <div class="card__body">
        <h5 class="card-title"><a href="">Card title</a></h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat fugiat officiis
          velit vel? Numquam quis nisi sed nihil odit!
        </p>
        <div class="buttons">
          <a href="#" class="view">View</a>
          <Social class="fast-view"><ion-icon name="eye-outline"></ion-icon></Social>
        </div>
      </div>
    </div>
  </div>

  <Pagination />
</template>

<script>
import PageTitle from '@/ui-components/PageTitle.vue'
import Social from '@/ui-components/Social.vue'

export default {
  name: 'BlogView',
}
</script>

<style scoped lang="scss">
.blog {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .card {
    flex: 1 1 300px;
    background: var(--card-color-30);
    backdrop-filter: blur(10px);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: var(--shadow);

    .img-link {
      width: 100%;
      height: 300px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      text-decoration: none;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
      }

      &:hover {
        img {
          transform: scale(1.3);
        }
      }
    }

    &__body {
      padding: 10px;

      h5 a {
        text-decoration: none;
        color: var(--primary-color);
        font-size: 22px;
        font-family: monospace;
      }

      p {
        font-family: monospace;
        color: var(--text-color);
        display: -webkit-box;
        -webkit-line-clamp: 3; /* maksimal qatorlar soni */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
      }

      .buttons {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .view {
          text-decoration: none;
          color: var(--primary-color);
          background: var(--tag-color);
          padding: 5px 15px;
          border-radius: 5px;

          &:hover {
            animation: bulb 0.5s linear;
            animation-iteration-count: 1;
          }
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .blog {
    .card {
      .img-link {
        height: 250px;
      }
    }
  }
}
</style>
