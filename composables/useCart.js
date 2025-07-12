export const useCart = () => {
    const cart = ref([]);
    
    const addToCart = (item) => {
      const existingItem = cart.value.find(i => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        cart.value.push({ ...item });
      }
    };
    
    // In a real app, you'd also have functions to remove items, clear cart, etc.
    
    return {
      cart,
      addToCart
    };
  };