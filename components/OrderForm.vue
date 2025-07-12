<template>
  <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
    <h2 class="text-2xl font-bold text-amber-900 mb-6">Complete Your Order</h2>
    
    <!-- Order Summary -->
    <div class="mb-8">
      <h3 class="text-lg font-semibold text-amber-800 mb-4 flex items-center">
        <ShoppingCartIcon class="w-5 h-5 mr-2" />
        Your Selection
      </h3>
      <div v-if="cart.length === 0" class="text-center py-4 text-gray-500">
        No items added yet
      </div>
      <div v-else>
        <div v-for="item in cart" :key="item.id" class="flex justify-between py-3 border-b border-amber-100">
          <div class="flex items-center">
            <span class="font-medium text-amber-900">{{ item.name }}</span>
            <span class="text-sm text-gray-500 ml-2">×{{ item.quantity }}</span>
          </div>
          <span class="font-medium">{{ (item.price * item.quantity).toFixed(2) }}€</span>
        </div>
        
        <div class="flex justify-between pt-4 mt-2 border-t border-amber-200">
          <span class="font-bold text-lg">Total:</span>
          <span class="font-bold text-lg text-amber-700">{{ total.toFixed(2) }}€</span>
        </div>
      </div>
    </div>

    <!-- Customer Information Form -->
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <h3 class="text-lg font-semibold text-amber-800 flex items-center">
        <UserCircleIcon class="w-5 h-5 mr-2" />
        Your Details
      </h3>

      <!-- Personal Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span class="text-amber-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
            placeholder="John Doe"
          >
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span class="text-amber-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
            placeholder="+358 123 456 789"
          >
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
            placeholder="your@email.com"
          >
        </div>

        <div>
          <label for="delivery-date" class="block text-sm font-medium text-gray-700 mb-1">
            Preferred Delivery Date
          </label>
          <input
            type="date"
            id="delivery-date"
            v-model="form.deliveryDate"
            min="2025-01-01"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
          >
        </div>
      </div>

      <!-- Delivery Address -->
      <div>
        <label for="address" class="block text-sm font-medium text-gray-700 mb-1">
          Delivery Address <span class="text-amber-600">*</span>
        </label>
        <textarea
          id="address"
          v-model="form.address"
          required
          rows="2"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
          placeholder="Street, City, Postal Code"
        ></textarea>
      </div>

      <!-- Special Instructions -->
      <div>
        <label for="instructions" class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
          <ExclamationCircleIcon class="w-4 h-4 mr-1" />
          Special Instructions
        </label>
        <textarea
          id="instructions"
          v-model="form.instructions"
          rows="3"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
          placeholder="Allergies, meat preferences, special requests..."
        ></textarea>
        <p class="text-xs text-gray-500 mt-1">
          Please specify if you have any allergies or prefer a specific type of meat (chicken, pork, or beef).
        </p>
      </div>

      <!-- Payment Method -->
      <div>
        <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
          <CreditCardIcon class="w-4 h-4 mr-1" />
          Payment Method
        </h4>
        <div class="space-y-2">
          <label class="flex items-center space-x-3">
            <input
              type="radio"
              v-model="form.paymentMethod"
              value="cash"
              class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
              checked
            >
            <span>Cash on Delivery</span>
          </label>
          <label class="flex items-center space-x-3">
            <input
              type="radio"
              v-model="form.paymentMethod"
              value="mobilepay"
              class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
            >
            <span>MobilePay</span>
          </label>
        </div>
      </div>

      <!-- Terms Agreement -->
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            required
            class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
          >
        </div>
        <div class="ml-3 text-sm">
          <label for="terms" class="text-gray-700">
            I agree that my order will be confirmed via WhatsApp within 24 hours. 
            <NuxtLink to="/terms" class="text-amber-600 hover:underline">Terms & Conditions</NuxtLink>
          </label>
        </div>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg shadow-sm text-lg font-medium transition-colors flex items-center justify-center"
        :disabled="cart.length === 0 || isSubmitting"
        :class="{ 'opacity-50 cursor-not-allowed': cart.length === 0 }"
      >
        <template v-if="!isSubmitting">
          <PaperAirplaneIcon class="w-5 h-5 mr-2" />
          Place Order
        </template>
        <template v-else>
          <ArrowPathIcon class="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </template>
      </button>

      <p class="text-sm text-gray-500 text-center">
        <PhoneIcon class="w-4 h-4 inline mr-1" />
        Need help? Call <a href="tel:+358465664100" class="text-amber-600 hover:underline">+358 465 664 100</a>
      </p>
    </form>
  </div>
</template>

<script setup>
import {
  ShoppingCartIcon,
  UserCircleIcon,
  ExclamationCircleIcon,
  CreditCardIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline';

const props = defineProps({
  cart: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['submit-order']);

const form = ref({
  name: '',
  phone: '',
  email: '',
  address: '',
  deliveryDate: '',
  instructions: '',
  paymentMethod: 'cash'
});

const isSubmitting = ref(false);

const total = computed(() => {
  return props.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const handleSubmit = async () => {
  if (props.cart.length === 0) return;
  
  isSubmitting.value = true;
  
  try {
    const orderData = {
      ...form.value,
      items: props.cart.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total: total.value,
      orderDate: new Date().toISOString(),
      status: 'pending'
    };
    
    // In a real app, you would send this to your backend/API
    console.log('Submitting order:', orderData);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    emit('submit-order', orderData);
  } catch (error) {
    console.error('Order submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.5);
}

input[type="date"]:focus::-webkit-calendar-picker-indicator {
  filter: invert(0.7);
}
</style>