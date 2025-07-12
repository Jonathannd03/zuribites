<template>
  <header class="sticky top-0 z-50 bg-amber-900 shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-3">
        <!-- Logo and Brand -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img 
            src="/images/logo.png" 
            alt="ZuriBites JA Logo"
            class="h-10 w-10 object-contain"
          />
          <span class="text-2xl font-bold  font-serif">ZuriBites JA</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-amber-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-white bg-amber-700"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="#menu" 
            class="text-amber-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Menu
          </NuxtLink>
          <NuxtLink 
            to="#about" 
            class="text-amber-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="#contact" 
            class="text-amber-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Contact
          </NuxtLink>
        </nav>

        <!-- Contact Button -->
        <div class="flex items-center space-x-4">
          <a 
            href="https://wa.me/358465664100" 
            target="_blank"
            class="hidden md:flex items-center bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.03c.545-1.5.887-2.453.887-2.453l-.364-1.892s-.46-1.41-1.74-1.41H5.577c-1.28 0-1.74 1.41-1.74 1.41v14.305s.46 1.41 1.74 1.41h10.056c1.28 0 1.74-1.41 1.74-1.41v-6.365s-2.095.066-3.81-1.55c0 0-1.097-1.232-1.502-2.545z"/>
            </svg>
            WhatsApp Order
          </a>

          <!-- Mobile menu button -->
          <button 
            @click="isOpen = !isOpen"
            class="md:hidden text-amber-100 hover:text-white focus:outline-none"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div 
      v-show="isOpen"
      class="md:hidden bg-amber-800 px-2 pt-2 pb-3 space-y-1"
    >
      <NuxtLink 
        to="/" 
        class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
        @click="isOpen = false"
      >
        Home
      </NuxtLink>
      <a 
        href="#menu" 
        class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
        @click="isOpen = false"
      >
        Menu
      </a>
      <a 
        href="#about" 
        class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
        @click="isOpen = false"
      >
        About
      </a>
      <a 
        href="#contact" 
        class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
        @click="isOpen = false"
      >
        Contact
      </a>
      <a 
        href="https://wa.me/358465664100" 
        target="_blank"
        class="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
        @click="isOpen = false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.03c.545-1.5.887-2.453.887-2.453l-.364-1.892s-.46-1.41-1.74-1.41H5.577c-1.28 0-1.74 1.41-1.74 1.41v14.305s.46 1.41 1.74 1.41h10.056c1.28 0 1.74-1.41 1.74-1.41v-6.365s-2.095.066-3.81-1.55c0 0-1.097-1.232-1.502-2.545z"/>
        </svg>
        WhatsApp Order
      </a>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false);
</script>

<style scoped>
.router-link-active {
  @apply text-white bg-amber-700;
}
</style>