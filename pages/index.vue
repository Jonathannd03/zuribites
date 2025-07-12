<template>
    <div class="min-h-screen bg-amber-50">
      <!-- Navigation -->
      <NavBar />
      
      <!-- Hero Section -->
      <section class="bg-amber-900 text-amber-50 py-16 px-4">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to ZuriBites JA!</h1>
          <p class="text-xl md:text-2xl mb-8">"A Bite of Joy in Every Slice!"</p>
          <p class="max-w-2xl mx-auto">
            Your go-to destination for fresh, homemade delights including cakes, doughnuts, 
            samosas, mandazi, chapatis, and spring rolls.
          </p>
        </div>
      </section>
  
      <!-- Menu Section -->
      <section class="py-12 px-4">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-amber-900 mb-8 text-center">Our Menu</h2>
          
          <!-- Menu Categories -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MenuItem 
              v-for="item in menuItems"
              :key="item.id"
              :item="item"
              @add-to-cart="addToCart"
            />
          </div>
        </div>
      </section>
  
      <!-- Order Form Section -->
      <section class="py-12 px-4 bg-white">
        <div class="container mx-auto max-w-4xl">
          <h2 class="text-3xl font-bold text-amber-900 mb-8 text-center">Place Your Order</h2>
          <OrderForm :cart="cart" @submit-order="submitOrder" />
        </div>
      </section>
  
      <!-- About Section -->
      <Footer/>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Menu data
  const menuItems = ref([
    {
      id: 1,
      name: 'Samosa',
      price: 2.00,
      description: 'Please inform us if you have any allergies or prefer a specific type of meat (chicken, pork, or beef). If you\'d like your meal mixed with potatoes, kindly let us know once we confirm your order via WhatsApp.',
      image: '/images/samosa.png',
      bulkDiscount: true
    },
    {
      id: 2,
      name: 'Chapati',
      price: 1.50,
      description: 'Soft and delicious homemade chapatis.',
      image: '/images/chapati.png',
      bulkDiscount: true
    },
    {
      id: 3,
      name: 'Spring rolls',
      price: 2.00,
      description: 'Please inform us if you have any allergies or prefer a specific type of meat (chicken, pork, or beef). If you\'d like your meal mixed with potatoes, kindly let us know once we confirm your order via WhatsApp.',
      image: '/images/spring_rolls.png',
      bulkDiscount: true
    },
    {
      id: 4,
      name: 'Crunchy doughnut',
      price: 6.00,
      description: 'NOTE!! For 6€ you get a box of crunchy doughnuts',
      image: '/images/Crunchy_doughnut.png',
      bulkDiscount: false
    },
    {
      id: 5,
      name: 'Mandazi',
      price: 7.00,
      description: 'NOTE!! For mandazi, Price(7€) is per box, NOT per piece. A box has 8 pieces',
      image: '/images/Mandazi.png',
      bulkDiscount: false
    },
    {
      id: 6,
      name: 'Mikate/puff puff/doughnut',
      price: 6.00,
      description: 'NOTE!! For these doughnuts, Price(6€) is per box, NOT per piece. A box has 10 pieces',
      image: '/images/doughnut.png',
      bulkDiscount: false
    },
    {
      id: 7,
      name: 'Unfried Samosa package',
      price: 15.00,
      description: 'Ready-to-fry samosas for you to enjoy fresh at home. 10 pieces per package.',
      image: '/images/unfried_samosa.png',
      bulkDiscount: false
    },
    {
      id: 8,
      name: 'Unfried Spring Rolls (Frozen)',
      price: 15.00,
      description: 'Ready-to-fry spring rolls for you to enjoy fresh at home.',
      image: '/images/unfried_spring.png',
      bulkDiscount: false
    }
  ]);
  
  // Cart functionality
  const { cart, addToCart } = useCart();
  
  // Submit order function
  const submitOrder = async (orderData) => {
    try {
      // In a real app, you would send this to your backend
      console.log('Order submitted:', orderData);
      
      // Redirect to success page
      await navigateTo('/success');
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };
  </script>