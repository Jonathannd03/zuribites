<template>
    <div class="min-h-screen bg-amber-50 flex flex-col">
      <NavBar />
      
      <main class="flex-grow flex items-center justify-center p-4">
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div class="text-green-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 class="text-2xl font-bold text-amber-900 mb-4">Order Received!</h1>
          <p class="text-gray-600 mb-6">
            Thank you for your order! We'll contact you via WhatsApp within 24 hours to confirm your order details.
          </p>
          
          <NuxtLink 
            to="/" 
            class="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Back to Menu
          </NuxtLink>
        </div>
      </main>
    </div>
  </template>