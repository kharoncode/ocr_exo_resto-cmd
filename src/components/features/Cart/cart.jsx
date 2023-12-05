import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { SuperCremeux } from '@common/models';

function Cart() {
   const store = useStore();

   const [list, setList] = useState(store.getState().list);
   useEffect(() => {
      store.subscribe(() => {
         setList(store.getState().list);
      });
   });
   return (
      <div className="container">
         <div className="catNavBar">
            <button
               onClick={() =>
                  store.dispatch({ type: 'ADD_PRODUCT', payload: SuperCremeux })
               }
            >
               Ajouter un super crémeux
            </button>
         </div>
         <div className="Selection">
            <h1>Liste de produits sélectionnés:</h1>
            <ul>
               {list.map((el, index) => (
                  <li key={index} className="selectedProduct">
                     {el.title} : {el.price}€
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default Cart;
