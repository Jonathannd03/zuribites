<template>
    <div class="bg-amber-100 rounded-lg p-6">
      <h3 class="text-xl font-semibold text-amber-900 mb-4">Your Order</h3>
      
      <div v-if="cart.length === 0" class="text-center py-4 text-gray-600">
        Your cart is empty. Please add some items from our menu.
      </div>
      
      <div v-else>
        <div v-for="item in cart" :key="item.id" class="flex justify-between py-2 border-b border-amber-200">
          <div>
            <span class="font-medium">{{ item.name }}</span>
            <span class="text-sm text-gray-600 ml-2">x{{ item.quantity }}</span>
          </div>
          <span class="font-medium">{{ (item.price * item.quantity).toFixed(2) }}€</span>
        </div>
        
        <div class="flex justify-between pt-4 mt-2 border-t border-amber-300">
          <span class="font-bold">Total:</span>
          <span class="font-bold text-amber-800">{{ total.toFixed(2) }}€</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    cart: {
      type: Array,
      required: true
    }
  });
  
  const total = computed(() => {
    return props.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });
  </script>