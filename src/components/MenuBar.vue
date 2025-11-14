<template>
    <div class="menubar-wrapper">
      <Menubar :model="items" />
    </div>
</template>

<script setup>

import { ref } from 'vue';
import Menubar from 'primevue/menubar';

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      console.log('Home clicked');
    }
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    items: [
      {
        label: 'General',
        icon: 'pi pi-sliders-h',
        command: () => {
          console.log('General Settings');
        }
      },
      {
        label: 'Account',
        icon: 'pi pi-user',
        command: () => {
          console.log('Account Settings');
        }
      }
    ]
  },
  {
    label: 'Help',
    icon: 'pi pi-question-circle',
    command: () => {
      console.log('Help clicked');
    }
  }
]);
</script>

<style scoped>
.app-container {
  min-height: 100vh;
}

.menubar-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--p-surface-0);
}

.content {
  padding: 2rem;
}
</style>
