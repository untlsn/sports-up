<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Mock data for sports objects
interface SportsObject {
  id:        number;
  title:     string;
  category:  string;
  rating:    number;
  createdAt: string;
  image:     string;
}

const objects: SportsObject[] = [
  {
    id:        1,
    title:     'Professional Basketball',
    category:  'Equipment',
    rating:    4.8,
    createdAt: '2 days ago',
    image:     '/placeholder.png',
  },
  {
    id:        2,
    title:     'Indoor Soccer Field',
    category:  'Venue',
    rating:    4.5,
    createdAt: '1 week ago',
    image:     '/placeholder.png',
  },
  {
    id:        3,
    title:     'Tennis Racket Pro',
    category:  'Equipment',
    rating:    4.7,
    createdAt: '3 days ago',
    image:     '/placeholder.png',
  },
  {
    id:        4,
    title:     'Olympic Swimming Pool',
    category:  'Venue',
    rating:    4.9,
    createdAt: '2 weeks ago',
    image:     '/placeholder.png',
  },
  {
    id:        5,
    title:     'Mountain Bike XC-200',
    category:  'Equipment',
    rating:    4.6,
    createdAt: '5 days ago',
    image:     '/placeholder.png',
  },
];

const currentIndex = ref(0);
const mobile = ref(false);

const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

const checkMobile = (): void => {
  mobile.value = isMobile();
};

const visibleItems = computed<number>(() => mobile.value ? 1 : 3);
const maxIndex = computed<number>(() => Math.max(0, objects.length - visibleItems.value));
const translateX = computed<number>(() => -currentIndex.value * (100 / visibleItems.value));

const nextSlide = (): void => {
  currentIndex.value = Math.min(currentIndex.value + 1, maxIndex.value);
};

const prevSlide = (): void => {
  currentIndex.value = Math.max(currentIndex.value - 1, 0);
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(${translateX}%)` }"
      >
        <div
          v-for="object in objects"
          :key="object.id"
          :class="['w-full', mobile ? 'flex-[0_0_100%]' : 'flex-[0_0_33.333%]', 'px-2']"
        >
          <div class="overflow-hidden dark:bg-gray-800 dark:border-gray-700 border rounded-lg">
            <div class="relative h-48">
              <img
                :src="object.image || '/placeholder.svg'"
                :alt="object.title"
                class="object-cover w-full h-full"
              >
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg text-green-700 dark:text-green-500">
                {{ object.title }}
              </h3>
              <div class="mt-2 space-y-1">
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-4 w-4 text-blue-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ><path d="M12.586 2H2v10.586a2 2 0 0 0 .586 1.414l8.414 8.414a2 2 0 0 0 2.828 0l5.656-5.656a2 2 0 0 0 0-2.828L14 2.586A2 2 0 0 0 12.586 2Z" /><circle
                    cx="7.5"
                    cy="7.5"
                    r=".5"
                  /></svg>
                  {{ object.category }}
                </div>
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-4 w-4 text-orange-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  {{ object.rating }} rating
                </div>
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-4 w-4 text-blue-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ><circle
                    cx="12"
                    cy="12"
                    r="10"
                  /><polyline points="12 6 12 12 16 14" /></svg>
                  Created {{ object.createdAt }}
                </div>
              </div>
              <button
                type="button"
                class="mt-4 w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-2 px-4 rounded-md"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-900 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950 hover:text-orange-700 z-10 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentIndex === 0"
      aria-label="Previous slide"
      @click="prevSlide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ><path d="m15 18-6-6 6-6" /></svg>
    </button>
    <button
      type="button"
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-900 text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950 hover:text-orange-700 z-10 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentIndex >= maxIndex"
      aria-label="Next slide"
      @click="nextSlide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ><path d="m9 18 6-6-6-6" /></svg>
    </button>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
