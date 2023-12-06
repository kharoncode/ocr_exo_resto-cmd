import { useSelector } from 'react-redux';
import { getProductList, getTotalOrder } from '../../../app/selectors';

function Total() {
   const list = useSelector(getProductList);
   const total = useSelector(getTotalOrder);

   return (
      <div className="TotalCommand">
         {list.length > 0 ? (
            <div>Total commande {total} euros</div>
         ) : (
            <div>Aucun produit sélectionné pour le moment</div>
         )}
      </div>
   );
}

export default Total;
