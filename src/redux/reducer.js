import * as types from "./actiontypes";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  orders: [],
  loading: false,
  error: null,
  cart: [],
  carttotalquantity: 0,
  carttotalamount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCT_START:
      console.log(state);
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_PRODUCT_SUCCESS:
      console.log("Load Action", action);
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case types.LOAD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_TO_CART_START: {
      const itemincart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemincart) {
        itemincart.stock >= itemincart.quantity + 1
          ? itemincart.quantity++
          : toast.error(`Only ${itemincart.stock} are available`, {
              autoClose: 1000,
            });
      } else {
        action.payload.stock > 0
          ? state.cart.push({ ...action.payload, quantity: 1 })
          : toast.error("Out of Stock", { autoClose: 7000 });
           
      }

      break;
    }
    case types.DELETE_TO_CART_START:
      {
        const removeitem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeitem;
      }
      break;
    case types.DECREMENT_CART_QUANTITY_START:
      {
        const itemindex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        if (state.cart[itemindex].quantity > 1) {
          state.cart[itemindex].quantity -= 1;
        } else if (state.cart[itemindex].quantity === 1) {
          const decrementItem = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
          state.cart = decrementItem;
        }
      }
      break;
    case types.CLEAR_TO_CART_START:
      {
        state.cart = [];
      }
      break;
    case types.GET_TOTAL_CART_START: {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cart) => {
          const { price, quantity } = cart;
          const itemtotal = price * quantity;

          cartTotal.total += itemtotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.carttotalquantity = quantity;
      state.carttotalamount = total;
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
