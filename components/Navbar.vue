<script setup>
const isAuthenticated = ref(false);
const isMobileMenuOpen = ref(false);
</script>

<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center justify-between w-full">
          <div class="flex-shrink-0">
            <a href="/" class="text-white font-bold text-xl">
              Role Based Access Control
            </a>
          </div>
          <div class="hidden md-block">
            <div class="ml-10 flex items-baseline">
              <NuxtLink
                to="/"
                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                >Home
              </NuxtLink>
              <NuxtLink
                to="/books"
                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                >Books
              </NuxtLink>
              <NuxtLink
                to="#"
                v-if="isAuthenticated"
                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                >Dashboard
              </NuxtLink>
            </div>
          </div>
          <template v-if="!isAuthenticated" >
            <div class="ml-4 flex items-center md:ml-6 justify-end">
              <NuxtLink
                class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                to="#"
              >
                Login
              </NuxtLink>
              <NuxtLink
                class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 ml-4 rounded"
                to="#"
              >
                Register
              </NuxtLink>
            </div>
          </template>
          <div class="md:hidden z-50">
            <!-- Mobile menu button -->
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              type="button"
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                :class="{
                  hidden: isMobileMenuOpen,
                  'inline-flex': !isMobileMenuOpen,
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                :class="{
                  hidden: !isMobileMenuOpen,
                  'inline-flex': isMobileMenuOpen,
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div
              v-if="isMobileMenuOpen"
              class="absolute top-0 inset-x-0 transition transform md:hidden mt-16"
            >
              <div
                class="shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <NuxtLink
                    to="/"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    @click="isMobileMenuOpen = false"
                    >Home</NuxtLink
                  >
                  <NuxtLink
                    to="/Books"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    @click="isMobileMenuOpen = false"
                    >Books</NuxtLink
                  >
                  <NuxtLink
                    to="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    @click="isMobileMenuOpen = false"
                    v-if="isAuthenticated"
                    >Dashboard
                  </NuxtLink>
                </div>
                <template v-if="!isAuthenticated">
                  <div class="px-5 py-2 mb-5">
                    <NuxtLink
                      to="/account/login"
                      class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full"
                      @click="isMobileMenuOpen = false"
                    >
                      Login
                    </NuxtLink>
                    <NuxtLink
                      to="/account/register"
                      class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 mt-2 rounded w-full ml-4"
                      @click="isMobileMenuOpen = false"
                    >
                      Register
                    </NuxtLink>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="css" scoped>
.router-link-active {
  background-color: chartreuse;
  color: black;
}
</style>
