import Profile from './component/Profile';
import "./App.css"
export default  function App () {
  function handleName(name) {
    alert(name +"☺");
  }
  return (
   <div
  
   style={{
    display: "flex",
    justifyContent: "center",
    position: "relative"
  
  }}
  >
   <Profile 
   name="Marwen Barhoumi"
    adress="Tozeur"
     Image="" 
     Profession="Full Stack JS" 
     handleName={handleName}>
     </Profile>
   </div>
  );
}
