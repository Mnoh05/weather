import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [texto, seTexto] = useState("");
  const handleChange = (event) =>{
    seTexto(() => event.target.value)
    
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(texto);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(event) => handleChange(event)}
        
      />
      <input type="submit" value="Agregar" />
      
    </form>

    
  );
}
