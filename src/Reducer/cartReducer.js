function cartReducer(state, action) {
  switch (action.type) {
    case "TOTAL_PRICE":
      let updatePrice=state.cart.reduce((acc,item)=>{
        return acc+ (item.price*item.cartCount)
      },0)
      return {
        ...state,
        totalPrice:updatePrice
      }
    case "SET_CART":
      let {
        cartCount,
        singleProduct: { images, price, title, id, stock },
      } = action.payload;
      let findData = state.cart.find((item) => {
        return item.id == id;
      });
      if (findData) {
        let findDataArr = state.cart.map((item) => {
          if (item.id == findData.id) {
            let x = item.cartCount + cartCount;
            let newData = item.stock > x ? x : item.stock;
            return {
              ...item,
              cartCount: newData,
            };
          } else {
            return {
              ...item,
            };
          }
        });
        return { ...state, cart: findDataArr };
      } else {
        let cartData = {
          cartCount,
          images: images[0],
          price,
          title,
          id,
          stock,
        };

        return { ...state, cart: [...state.cart, cartData] };
      }

    case "REMOVE_ITEM":
      let temp = [...state.cart];
      let updatedata = temp.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, cart: updatedata };
    case "TOTAL_COUNT":
      let tempcart = [...state.cart];
      let tempCountValue = tempcart.reduce((acc, item) => {
        return acc + item.cartCount;
      }, 0);
      return {
        ...state,
        totalCount: tempCountValue,
      };
    case "INC_CART":
      let updateCart = state.cart.map((item) => {
        if (item.id == action.payload) {
          let newAmmount =
            item.stock > item.cartCount ? item.cartCount + 1 : item.stock;
          return {
            ...item,
            cartCount: newAmmount,
          };
        } else {
          return {
            ...item,
          };
        }
      });

      return { ...state, cart: updateCart };

    case "DEC_CART":
      console.log("reducer testing dec", action.payload);

      let updatecart2 = state.cart.map((item) => {
        if (item.id == action.payload) {
          let newAmmount = item.cartCount > 1 ? item.cartCount - 1 : 1;
          return {
            ...item,
            cartCount: newAmmount,
          };
        } else {
          return {
            ...item,
          };
        }
      });
      return { ...state, cart: updatecart2 };
    case "CLEAR_ALL":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}

export default cartReducer;
