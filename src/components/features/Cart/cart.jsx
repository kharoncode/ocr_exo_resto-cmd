import { useSelector } from 'react-redux';
import { getListQuantityProductPerName } from '../../../app/selectors';

function Cart() {
   const list = useSelector(getListQuantityProductPerName);
   return (
      <div className="Selection">
         <h1>Vos produits sélectionnés</h1>
         {list
            .filter((product) => product.quantity !== 0)
            .map((el, index) => {
               return (
                  <span key={index} className="SelectedProduct">
                     {el.quantity} x {el.title}
                  </span>
               );
            })}
         <ul></ul>
      </div>
   );
}

export default Cart;
