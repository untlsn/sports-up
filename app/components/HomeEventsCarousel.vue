<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const events = [
  {
    id:           1,
    title:        'City Marathon 2023',
    date:         'June 15, 2023',
    location:     'Central Park',
    participants: 1200,
    image:        '/placeholder.png',
  },
  {
    id:           2,
    title:        'Beach Volleyball Tournament',
    date:         'July 8, 2023',
    location:     'Sunny Beach',
    participants: 48,
    image:        '/placeholder.png',
  },
  {
    id:           3,
    title:        'Charity Football Match',
    date:         'August 12, 2023',
    location:     'City Stadium',
    participants: 22,
    image:        '/placeholder.png',
  },
  {
    id:           4,
    title:        'Mountain Biking Challenge',
    date:         'September 5, 2023',
    location:     'Green Hills',
    participants: 75,
    image:        '/placeholder.png',
  },
  {
    id:           5,
    title:        'Swimming Championship',
    date:         'October 20, 2023',
    location:     'Olympic Pool',
    participants: 120,
    image:        '/placeholder.png',
  },
];

const currentIndex = ref(0);
const mobile = ref(false);

const isMobile = () => {
  // Check if window is defined (for SSR compatibility)
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

const checkMobile = () => {
  mobile.value = isMobile();
};

// Computed properties
const visibleItems = computed(() => mobile.value ? 1 : 3);
const maxIndex = computed(() => Math.max(0, events.length - visibleItems.value));
const translateX = computed(() => -currentIndex.value * (100 / visibleItems.value));

// Methods
const nextSlide = () => {
  currentIndex.value = Math.min(currentIndex.value + 1, maxIndex.value);
};

const prevSlide = () => {
  currentIndex.value = Math.max(currentIndex.value - 1, 0);
};

// Lifecycle hooks for window resize listener
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
          v-for="event in events"
          :key="event.id"
          :class="['w-full', mobile ? 'flex-[0_0_100%]' : 'flex-[0_0_33.333%]', 'px-2']"
        >
          <div class="overflow-hidden dark:bg-gray-800 dark:border-gray-700 border rounded-lg">
            <div class="relative h-48">
              <img
                :src="event.image || 'placeholder.png'"
                :alt="event.title"
                class="object-cover w-full h-full"
              >
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg text-green-700 dark:text-green-500">
                {{ event.title }}
              </h3>
              <div class="mt-2 space-y-1">
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
                  ><path d="M8 2v4" /><path d="M16 2v4" /><rect
                    width="18"
                    height="18"
                    x="3"
                    y="4"
                    rx="2"
                  /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M16 14h.01" /></svg>
                  {{ event.date }}
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
                  ><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle
                    cx="12"
                    cy="10"
                    r="3"
                  /></svg>
                  {{ event.location }}
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
                  ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle
                    cx="9"
                    cy="7"
                    r="4"
                  /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  {{ event.participants }} participants
                </div>
              </div>
              <button
                type="button"
                class="mt-4 w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white py-2 px-4 rounded-md"
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
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900 hover:text-green-800 z-10 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900 hover:text-green-800 z-10 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
