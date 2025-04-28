<script setup lang="ts">
const objects = [
  {
    id:        1,
    title:     'Professional Basketball',
    category:  'Equipment',
    rating:    4.8,
    createdAt: '2 days ago',
  },
  {
    id:        2,
    title:     'Indoor Soccer Field',
    category:  'Venue',
    rating:    4.5,
    createdAt: '1 week ago',
  },
  {
    id:        3,
    title:     'Tennis Racket Pro',
    category:  'Equipment',
    rating:    4.7,
    createdAt: '3 days ago',
  },
  {
    id:        4,
    title:     'Olympic Swimming Pool',
    category:  'Venue',
    rating:    4.9,
    createdAt: '2 weeks ago',
  },
  {
    id:        5,
    title:     'Mountain Bike XC-200',
    category:  'Equipment',
    rating:    4.6,
    createdAt: '5 days ago',
  },
];
</script>

<template>
  <HomeCarouselItem
    v-for="object in objects"
    :key="object.id"
    :title="object.title"
  >
    <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
      <NuxtIcon
        name="ph:tag"
        class="text-green-600 mr-2 text-4"
      />
      {{ object.category }}
    </div>
    <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
      <NuxtIcon
        name="ph:star"
        class="text-orange-600 mr-2 text-4"
      />
      {{ object.rating }} rating
    </div>
    <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
      <NuxtIcon
        name="ph:clock"
        class="text-blue-600 mr-2 text-4"
      />
      Created {{ object.createdAt }}
    </div>
    <button
      type="button"
      class="mt-4 w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-2 px-4 rounded-md"
    >
      View Details
    </button>
  </HomeCarouselItem>
</template>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
