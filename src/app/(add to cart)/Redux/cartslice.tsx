
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[]; 
}


const loadCartFromLocalStorage = (): CartItem[] => {
  try {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : []; 
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return []; 
  }
};


const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        
        existingItem.quantity += 1;
      } else {
       
        state.items.push({ ...action.payload, quantity: 1 });
      }

      
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;

      
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

  
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;

      
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;

