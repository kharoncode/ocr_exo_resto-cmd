import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { updateFirstName } from '../../../app/store';

function Owner() {
   const store = useStore();
   const [owner, setOwner] = useState(store.getState().owner);

   const handleSubmit = (e) => {
      e.preventDefault();
      const firstName = e.currentTarget.firstName.value;
      store.dispatch(updateFirstName(firstName));
   };

   useEffect(() => {
      store.subscribe(() => setOwner(store.getState().owner));
   });

   return (
      <form className="OwnerForm" onSubmit={(e) => handleSubmit(e)}>
         <h2>Propriétaire du restaurant</h2>
         <div className="OwnerName">
            {owner?.firstName
               ? `Le prorpriétaire est ${owner.firstName}`
               : "Le propriétaire n'a pas été renseigné"}
         </div>
         <label>
            <input type="text" name="firstName" />
         </label>
         <button type="submit">Configurer le Propriétaire</button>
      </form>
   );
}

export default Owner;
