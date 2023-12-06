import { useSelector, useStore } from 'react-redux';
import { isVoucherAvailable } from '../../../app/selectors';

function Voucher({ name }) {
   const store = useStore();
   const available = useSelector(isVoucherAvailable(name));

   return (
      <div className="Voucher">
         {available && (
            <button
               onClick={() =>
                  store.dispatch({
                     type: 'APPLY_VOUCHER',
                     payload: { price: 2, title: name },
                  })
               }
            >
               Appliquer ma promo {name} à 2 euros
            </button>
         )}
      </div>
   );
}

export default Voucher;
