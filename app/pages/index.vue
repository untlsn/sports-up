<script setup lang="ts">

</script>

<template>
  <main class="flex-1">
    <HomeSectionWithImage
      title="Create Sports Events & Objects with Ease"
      description="Sports-Up is your all-in-one platform for organizing sports events and creating sports objects. Connect with athletes, find venues, and grow your sports community."
      img="/landing-page-1.png"
    >
      <UiButton>
        Create Event
      </UiButton>
      <UiButton
        variant="outline"
        class="ml-4 border-secondary text-secondary hover:bg-secondary-foreground hover:text-secondary"
      >
        Browse Objects
      </UiButton>
    </HomeSectionWithImage>
    <HomeCarouselRecent
      title="Recent Events"
      subtitle="Discover and join upcoming sports events in your area"
      class="bg-white dark:bg-gray-950"
    >
      <HomeCarouselItemEvents />
    </HomeCarouselRecent>
    <HomeCarouselRecent
      title="Sports Objects"
      subtitle="Browse and create sports equipment, venues, and more"
      class="bg-blue-50 dark:bg-gray-900"
    >
      <HomeCarouselItemObjects />
    </HomeCarouselRecent>

    <section class="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div class="flex flex-wrap justify-evenly gap-4">
        <HomeInfoBlock
          icon="ph:calendar-blank"
          color="--color-green-600"
          title="Create Events"
        >
          Easily organize sports events, set schedules, <br>and manage registrations all in one place.
        </HomeInfoBlock>
        <HomeInfoBlock
          icon="ph:trophy"
          color="--color-orange-600"
          title="Sports Objects"
        >
          Create and manage sports equipment, venues, <br>and other objects for your events.
        </HomeInfoBlock>
        <HomeInfoBlock
          icon="ph:users"
          color="--color-blue-600"
          title="Community"
        >
          Connect with athletes, coaches, <br>and sports enthusiasts to grow your network.
        </HomeInfoBlock>
      </div>
    </section>
    <HomeSectionWithImage
      title="Ready to elevate your sports experience?"
      description="Join Sports-Up today and start creating memorable sports events and managing sports objects with ease."
      img="/landing-page-2.png"
    >
      <UiButton
        variant="secondary"
        as-child
      >
        <NuxtLink to="/sign/up">Sign Up Now</NuxtLink>
      </UiButton>
      <UiButton
        variant="outline"
        class="ml-4 border-green-500 text-green-600 hover:bg-green-50"
      >
        Learn More
      </UiButton>
    </HomeSectionWithImage>
  </main>
</template>

<style scoped>

</style>
