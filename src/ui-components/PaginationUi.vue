<template>
  <div class="pagination">
    <a href="#" class="next"><ion-icon name="chevron-back-outline"></ion-icon></a>
    <ul>
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a>...</a>
      </li>
      <li>
        <a href="#">24</a>
      </li>
      <li>
        <a href="#">25</a>
      </li>
    </ul>
    <a href="#" class="previous disabled"><ion-icon name="chevron-forward-outline"></ion-icon></a>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
}
</script>

<style scoped lang="scss">
.pagination {
  margin-top: 20px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    color: var(--bg-color);
    display: grid;
    place-items: center;
    transition: all 0.3s ease;

    &:hover {
      background: var(--tag-color);
      color: var(--text-color);
    }

    &.disabled {
      background: var(--tag-color);
      color: var(--text-color);
      cursor: not-allowed;
    }
  }

  .next {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .previous {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    border: 1px solid var(--tag-color);
    border-top: none;
    border-bottom: none;
    li {
      border-left: 1px solid var(--tag-color);

      &:first-child {
        border: none;
      }
    }
  }
}
</style>
