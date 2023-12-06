import '@app/App.css';
import Cart from '@components/features/Cart/cart.jsx';
import Voucher from '@components/features/Voucher/voucher';
import Total from '@components/features/Total/total';
import Owner from '@components/features/owner/Owner';
import Menu from '@components/features/menu/Menu';
import * as ProductList from '@common/models';

function App() {
   return (
      <div className="App">
         <Menu />
         <Cart />
         <Total />
         {Object.values(ProductList).map((el) => (
            <Voucher key={el.title} name={el.title} />
         ))}
         <Owner />
      </div>
   );
}

export default App;
