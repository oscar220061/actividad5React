
import React, { useState, useEffect } from 'react';

const FetchUseEffect = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [usuarioSelect, setUsuarioSelect] = useState("");
  const [idUsuario, setIdUsuario] = useState("");
  const DEFAULT_URL = " http://localhost:5000/users";
 
  

  async function fetchPosts() {
    const response = await fetch(DEFAULT_URL);
    const usuarios = await response.json();
    return usuarios;
  }
  async function fetchPostsUsuario(usuarioId) {
    const url = "http://localhost:5000/users?id=" + usuarioId;
    const response = await fetch(url);
    const usuario = await response.json();
    console.log(usuario)
    return usuario;
    
  }

  useEffect(function () {
    fetchPosts().then((usuarios) => setListaUsuarios(usuarios)
    );
  }, []);

  useEffect(function () {
    if (idUsuario !== "") {
      
    fetchPostsUsuario(idUsuario).then((usuario) =>{ console.log(usuario);setUsuarioSelect(usuario)}
    
    );
    }
  }, [idUsuario]);
 
  
  return (
    <div>
      <>
      <ul>
        {listaUsuarios.map((user) => (
          <li key={user.id} >
            {user.name}
            <button onClick={() => setIdUsuario(user.id)}>Mostrar Detalles</button>
          </li>
        ))}
      </ul>

      {usuarioSelect && (
      <div>
       <ul>
        {usuarioSelect.map((user) => (
          <><li>
            {user.name}

          </li><li>
              {user.phone}

            </li>
            <li >
            {user.email}
            
          </li></>
        ))}
      </ul>

      </div>
       
     

      )}
      </>
    </div>
  );
};
export default FetchUseEffect;