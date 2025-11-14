<template>
  <div class="min-h-screen">
    <div class="sticky top-0 z-[1000]" style="background-color: var(--p-surface-0);">
      <div class="max-w-[1000px] mx-auto">
        <menu-bar />
      </div>
    </div>
    <div class="max-w-[1000px] mx-auto px-8 py-8">
      <h1>You did it!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ipsum modi harum reprehenderit corrupti eius similique, aliquam veritatis ab deserunt hic quidem at suscipit facere quisquam! Commodi consectetur facilis nostrum!</p>
      <order-form />
      <order-table />
    </div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import OrderForm from './components/OrderForm.vue';
import OrderTable from './components/OrderTable.vue';

export default {
  components: {
    MenuBar,
    OrderForm,
    OrderTable
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped>
</style>
