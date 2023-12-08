import * as ProductList from '@common/models';
import { ProductCard } from '../../productCard/ProductCard';
import { useDispatch } from 'react-redux';
import { addProductThunk } from '../Cart/cartSlice';

function Menu() {
   const dispatch = useDispatch();
   return (
      <div className="Menu">
         {Object.values(ProductList).map((product) => (
            <ProductCard
               key={product.title}
               product={product}
               onSelect={() => dispatch(addProductThunk(product))}
            />
         ))}
      </div>
   );
}

export default Menu;
