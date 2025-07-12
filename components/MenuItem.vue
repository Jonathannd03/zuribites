<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
      <img 
        :src="item.image" 
        :alt="item.name" 
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold text-amber-900">{{ item.name }}</h3>
          <span class="text-lg font-semibold text-amber-700">{{ item.price }}€</span>
        </div>
        <p class="text-gray-600 text-sm mb-4">{{ item.description }}</p>
        <div v-if="item.bulkDiscount" class="text-xs text-amber-600 mb-4">
          ⭐ Bulk orders: Discounts available!
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <button 
              @click="updateQuantity(-1)"
              class="bg-amber-200 text-amber-800 w-8 h-8 rounded-full flex items-center justify-center"
              :disabled="quantity <= 0"
            >
              -
            </button>
            <span class="mx-4">{{ quantity }}</span>
            <button 
              @click="updateQuantity(1)"
              class="bg-amber-200 text-amber-800 w-8 h-8 rounded-full flex items-center justify-center"
            >
              +
            </button>
          </div>
          <button 
            @click="addItemToCart"
            class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['add-to-cart']);
  
  const quantity = ref(0);
  
  const updateQuantity = (change) => {
    quantity.value = Math.max(0, quantity.value + change);
  };
  
  const addItemToCart = () => {
    if (quantity.value > 0) {
      emit('add-to-cart', {
        ...props.item,
        quantity: quantity.value
      });
      quantity.value = 0;
    }
  };
  </script>