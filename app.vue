<template>
  <div>
    <!-- This is where your page content will be injected -->
    <NuxtPage />
    
    <!-- Notification toast for cart actions -->
    <div v-if="showToast" class="fixed bottom-4 right-4 bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup>
// This would be in your composables/useToast.js
const showToast = ref(false);
const toastMessage = ref('');

// Function to show toast notifications
const showNotification = (message) => {
  toastMessage.value = message;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

// Provide the toast function to all child components
provide('showToast', showNotification);
</script>

<style>
/* Animation for the toast notification */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

/* Smooth scrolling for better UX */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #fef3c7;
}

::-webkit-scrollbar-thumb {
  background: #f59e0b;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d97706;
}
</style>