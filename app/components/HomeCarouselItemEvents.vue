<script setup>
const events = [
  {
    id:           1,
    title:        'City Marathon 2023',
    date:         'June 15, 2023',
    location:     'Central Park',
    participants: 1200,
  },
  {
    id:           2,
    title:        'Beach Volleyball Tournament',
    date:         'July 8, 2023',
    location:     'Sunny Beach',
    participants: 48,
  },
  {
    id:           3,
    title:        'Charity Football Match',
    date:         'August 12, 2023',
    location:     'City Stadium',
    participants: 22,
  },
  {
    id:           4,
    title:        'Mountain Biking Challenge',
    date:         'September 5, 2023',
    location:     'Green Hills',
    participants: 75,
  },
  {
    id:           5,
    title:        'Swimming Championship',
    date:         'October 20, 2023',
    location:     'Olympic Pool',
    participants: 120,
  },
];
</script>

<template>
  <HomeCarouselItem
    v-for="event in events"
    :key="event.id"
    :title="event.event"
  >
    <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
      <NuxtIcon
        name="ph:calendar-blank"
        class="text-green-600 mr-2 text-4"
      />
      {{ event.date }}
    </div>
    <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
      <NuxtIcon
        name="ph:map-pin"
        class="text-orange-600 mr-2 text-4"
      />
      {{ event.location }} rating
    </div>
    <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
      <NuxtIcon
        name="ph:users"
        class="text-blue-600 mr-2 text-4"
      />
      Created {{ event.participants }}
    </div>
    <button
      type="button"
      class="mt-4 w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white py-2 px-4 rounded-md"
    >
      View Details
    </button>
  </HomeCarouselItem>
</template>
