import { useEffect, useState } from 'react';

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
}

interface CartProps {
  cart: Item[];
  setCart: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  

  const[price,setPrice] = useState(0)

  function handleRemove(id: number) {
    const del = cart.filter((i) => id !== i.id);
    setCart(del);
  }

  function handlePrice(){
    let ans= 0
    cart.map((item)=> ans+=item.price*item.amount)
    setPrice(ans)
  }
 
  useEffect(()=>{
    handlePrice()
  },[cart])




  

 



  return (
    <div className="cart">
     <center>
     <table border={1} rules="none">
        <thead>
          <tr>
            <td>
              <b>Image</b>
            </td>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b>Remove</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 &&
            cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img height={'50px'} width={'50px'} src={item.image} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                    <td>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Amount ====</td>
            <td colSpan={1}>{price}</td>
            <td>
              <button>Pay</button>
            </td>
          </tr>
        </tfoot>
      </table>
     </center>
    </div>
  );
};

export default Cart;
