<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-40 border-b bg-white dark:bg-gray-950 dark:border-gray-800">
      <div class="container flex h-16 items-center justify-between py-4">
        <div class="flex items-center gap-2">
          <NuxtIcon
            name="ph:trophy"
            class="h-8 w-8 text-orange-500"
          />
          <span class="text-xl font-bold text-green-600">Sports-Up</span>
        </div>
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink
            to="#"
            class="text-sm font-medium text-green-700 hover:text-green-500"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-sm font-medium text-gray-600 hover:text-green-500"
          >
            Events
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-sm font-medium text-gray-600 hover:text-green-500"
          >
            Objects
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-sm font-medium text-gray-600 hover:text-green-500"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-sm font-medium text-gray-600 hover:text-green-500"
          >
            Contact
          </NuxtLink>
        </nav>
        <div class="flex items-center gap-4">
          <HeaderOptionsMenu />
          <UiButton
            variant="outline"
            class="hidden md:flex border-green-500 text-green-600 hover:bg-green-50 dark:text-green-400 dark:border-green-400 dark:hover:bg-green-950"
          >
            Sign In
          </UiButton>
          <UiButton class="bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
            Get Started
          </UiButton>
        </div>
      </div>
    </header>
    <main class="flex-1">
      <section class="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-950">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div class="flex flex-col justify-center space-y-4">
              <div class="space-y-2">
                <h1 class="text-3xl font-bold tracking-tighter text-green-700 dark:text-green-500 sm:text-5xl xl:text-6xl/none">
                  Create Sports Events & Objects with Ease
                </h1>
                <p class="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Sports-Up is your all-in-one platform for organizing sports events and creating sports objects.
                  Connect with athletes, find venues, and grow your sports community.
                </p>
              </div>
              <div class="flex flex-col gap-2 min-[400px]:flex-row">
                <UiButton class="bg-green-600 text-white hover:bg-green-700">
                  Create Event
                </UiButton>
                <UiButton
                  variant="outline"
                  class="border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  Browse Objects
                </UiButton>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <img
                src="/placeholder.png"
                width="550"
                height="550"
                alt="Sports activities"
                class="rounded-xl object-cover"
                priority
              >
            </div>
          </div>
        </div>
      </section>

      <section class="w-full py-12 bg-white dark:bg-gray-950">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter text-green-700 dark:text-green-500 sm:text-4xl">
                Recent Events
              </h2>
              <p class="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed">
                Discover and join upcoming sports events in your area
              </p>
            </div>
          </div>
          <div class="mt-8">
            <HomeEventsCarousel />
          </div>
        </div>
      </section>

      <section class="w-full py-12 bg-blue-50 dark:bg-gray-900">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter text-green-700 dark:text-green-500 sm:text-4xl">
                Sports Objects
              </h2>
              <p class="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed">
                Browse and create sports equipment, venues, and more
              </p>
            </div>
          </div>
          <div class="mt-8">
            <HomeObjectsCarousel />
          </div>
        </div>
      </section>

      <section class="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-3">
            <div class="flex flex-col items-center space-y-4 text-center">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <NuxtIcon
                  name="ph:calendar-blank"
                  class="h-8 w-8 text-green-600"
                />
              </div>
              <h3 class="text-xl font-bold text-green-700">
                Create Events
              </h3>
              <p class="text-gray-600">
                Easily organize sports events, set schedules, and manage registrations all in one place.
              </p>
            </div>
            <div class="flex flex-col items-center space-y-4 text-center">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <NuxtIcon
                  name="ph:trophy"
                  class="h-8 w-8 text-orange-500"
                />
              </div>
              <h3 class="text-xl font-bold text-green-700">
                Sports Objects
              </h3>
              <p class="text-gray-600">
                Create and manage sports equipment, venues, and other objects for your events.
              </p>
            </div>
            <div class="flex flex-col items-center space-y-4 text-center">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <NuxtIcon
                  name="ph:users"
                  class="h-8 w-8 text-blue-500"
                />
              </div>
              <h3 class="text-xl font-bold text-green-700">
                Community
              </h3>
              <p class="text-gray-600">
                Connect with athletes, coaches, and sports enthusiasts to grow your network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-900">
        <div class="container px-4 md:px-6">
          <div class="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div class="space-y-4">
              <h2 class="text-3xl font-bold tracking-tighter text-green-700 sm:text-4xl">
                Ready to elevate your sports experience?
              </h2>
              <p class="text-gray-600 md:text-xl">
                Join Sports-Up today and start creating memorable sports events and managing sports objects with ease.
              </p>
              <div class="flex flex-col gap-2 min-[400px]:flex-row">
                <UiButton class="bg-orange-500 text-white hover:bg-orange-600">
                  Sign Up Now
                </UiButton>
                <UiButton
                  variant="outline"
                  class="border-green-500 text-green-600 hover:bg-green-50"
                >
                  Learn More
                </UiButton>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <img
                src="/placeholder.png"
                width="600"
                height="400"
                alt="Sports team"
                class="rounded-xl object-cover"
              >
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="border-t bg-white dark:bg-gray-950 dark:border-gray-800">
      <div class="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div class="flex items-center gap-2">
          <NuxtIcon
            name="ph:trophy"
            class="h-6 w-6 text-orange-500"
          />
          <span class="text-lg font-bold text-green-600">Sports-Up</span>
        </div>
        <nav class="flex gap-4 sm:gap-6">
          <NuxtLink
            to="#"
            class="text-sm font-medium text-gray-600 hover:text-green-500"
          >
            Terms
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-sm font-medium text-gray-600 hover:text-green-500"
          >
            Privacy
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-sm font-medium text-gray-600 hover:text-green-500"
          >
            Cookies
          </NuxtLink>
        </nav>
        <div class="flex items-center gap-4">
          <p class="text-sm text-gray-500">
            © 2023 Sports-Up. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
