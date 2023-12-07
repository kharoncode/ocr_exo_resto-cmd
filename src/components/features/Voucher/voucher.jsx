import { useSelector, useStore } from 'react-redux';
import { isVoucherAvailable } from '../../../app/selectors';
import { cartSlice } from '../Cart/cartSlice';

function Voucher({ name }) {
   const store = useStore();
   const available = useSelector(isVoucherAvailable(name));

   return (
      <div className="Voucher">
         {available && (
            <button
               onClick={() =>
                  store.dispatch(cartSlice.actions.applyVoucher(name))
               }
            >
               Appliquer ma promo {name} à 2 euros
            </button>
         )}
      </div>
   );
}

export default Voucher;
