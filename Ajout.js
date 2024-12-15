// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ajouter } from "./produiteslice";


// export default function Ajout (){
 
//     const [titre,settitre]=useState("b")
//     const [description,setdescription]=useState("c")
   
//       const produit = useSelector((state) => state.xxxx.produit);
//       const com = useSelector((state) => state.xxxx.com);
//       const dispatch = useDispatch();
     
    
   
         
//        function handel(e){
//         e.preventDefault()

//         if (!titre || !description) {
//           alert("Tous les champs sont obligatoires.");
//           return;
//       }
//         dispatch(ajouter({titre, description }));

     
//         settitre("")
//         setdescription("")
//         }
    
    
//         return(
//             <>

//              <h4>ajouter  dans  la  list</h4>
//   {
// (produit) &&<form onSubmit={handel}>
    
// <table>
//      <tr>
//          <td>code</td>
//          <td><input readOnly type="text" value={com} /></td>
//          </tr>
//          <tr>
//          <td>titre</td>
//          <td><input type="text"  onChange={(e)=>{settitre(e.target.value)}} /></td>
//          </tr>
//          <tr>
//          <td>description</td>
//          <td><input type="text"  onChange={(e)=>{setdescription(e.target.value)}} /></td>
//          </tr>
        
//          <tr ><button type="submit" >ajouter</button></tr>
         
//          </table> 
// </form>

//   }
//             </>
//         )
//     }
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouter } from "./produiteslice";

export default function Ajout() {
    const [titre, settitre] = useState("");
    const [description, setdescription] = useState("");
    const dispatch = useDispatch();
    const com = useSelector((state) => state.xxxx.com);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titre || !description) {
            alert("Tous les champs sont obligatoires.");
            return;
        }
        dispatch(ajouter({ titre, description }));
        settitre("");
        setdescription("");
    };

    return (
        <div>
            <h3>Ajouter un Produit</h3>
            <form onSubmit={handleSubmit}>
            <label>
                    code:
                    <input
                        type="text" readOnly
                        value={com}
                    />
                </label><br/>
                <label>
                    Titre:
                    <input
                        type="text"
                        value={titre}
                        onChange={(e) => settitre(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}
