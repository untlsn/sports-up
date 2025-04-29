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
    <div class="flex items-center">
      <NuxtIcon
        name="ph:tag"
        class="text-green-600 mr-2 text-4"
      />
      {{ object.category }}
    </div>
    <div class="flex items-center">
      <NuxtIcon
        name="ph:star"
        class="text-orange-600 mr-2 text-4"
      />
      {{ object.rating }} rating
    </div>
    <div class="flex items-center">
      <NuxtIcon
        name="ph:clock"
        class="text-blue-600 mr-2 text-4"
      />
      Created {{ object.createdAt }}
    </div>
    <UiButton
      variant="secondary"
      size="lg"
      class="mt-4 w-full"
    >
      View Details
    </UiButton>
  </HomeCarouselItem>
</template>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
