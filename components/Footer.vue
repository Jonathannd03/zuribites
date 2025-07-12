<template>
    <footer class="bg-amber-900 text-amber-50">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand Info -->
          <div class="md:col-span-2">
            <NuxtLink to="/" class="flex items-center space-x-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="ZuriBites JA Logo"
                class="h-12 w-12 object-contain"
              />
              <span class="text-2xl font-bold font-serif">ZuriBites JA</span>
            </NuxtLink>
            <p class="mb-4 text-amber-100">
              "A Bite of Joy in Every Slice!" - Your go-to destination for fresh, homemade delights.
            </p>
            <div class="flex space-x-4">
              <a 
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="text-amber-200 hover:text-white transition-colors"
              >
                <component :is="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
  
          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4 border-b border-amber-700 pb-2">
              Quick Links
            </h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink 
                  to="/" 
                  class="text-amber-100 hover:text-white transition-colors"
                >
                  Home
                </NuxtLink>
              </li>
              <li>
                <a 
                  href="#menu" 
                  class="text-amber-100 hover:text-white transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  class="text-amber-100 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  class="text-amber-100 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4 border-b border-amber-700 pb-2">
              Contact Us
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <PhoneIcon class="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <a href="tel:+358465664100" class="hover:underline">+358 465 664 100</a>
              </li>
              <li class="flex items-start">
                <EnvelopeIcon class="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <a href="mailto:zuribitesja2025@gmail.com" class="hover:underline">zuribitesja2025@gmail.com</a>
              </li>
              <li class="flex items-start">
                <MapPinIcon class="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <span>Local delivery available</span>
              </li>
            </ul>
          </div>
  
          <!-- Newsletter -->
          <div class="md:col-span-2 lg:col-span-1">
            <h3 class="text-lg font-semibold mb-4 border-b border-amber-700 pb-2">
              Stay Updated
            </h3>
            <p class="mb-4 text-amber-100">
              Subscribe to our newsletter for special offers and new menu items.
            </p>
            <form class="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                class="bg-amber-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 w-full placeholder-amber-300"
                required
              >
              <button 
                type="submit"
                class="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        <!-- Copyright -->
        <div class="border-t border-amber-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p class="text-amber-200 text-sm">
            &copy; {{ new Date().getFullYear() }} ZuriBites JA. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <NuxtLink to="/privacy" class="text-amber-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-amber-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/cookies" class="text-amber-200 hover:text-white text-sm transition-colors">
              Cookie Policy
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline';
  
  const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'FacebookIcon' },
    { name: 'Instagram', url: '#', icon: 'InstagramIcon' },
    { name: 'Twitter', url: '#', icon: 'TwitterIcon' },
    { name: 'WhatsApp', url: 'https://wa.me/358465664100', icon: 'WhatsAppIcon' }
  ];
  </script>