
import React, { useState, useEffect } from 'react';

const DEFAULT_URL = "http://localhost:5000/users";

async function fetchPosts() {
  const response = await fetch(DEFAULT_URL);
  const users = await response.json();
  return users;
}

function FetchUseEffect() {
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [cargarUsuario, setCargarUsuario] = useState(null);

  useEffect(() => {
    fetchPosts().then((fetchedUsers) => setLoadedUsers(fetchedUsers));
  }, []);
  useEffect(() => {
    fetchPosts().then((fetchedUsers) => setCargarUsuario(fetchedUsers));
  }, []);

  const mostarUsuario = (idUsuario) => {
    let usuario = null;
    loadedUsers.map((post) => {
      if (post.id === idUsuario) {
        usuario = post;
      }
      return null;
    });
    setCargarUsuario(usuario);
  };

  return (
    <>
      <ul>
        {loadedUsers.map((post) => (
          <li key={post.id}>{post.name} <button onClick={() => mostarUsuario(post.id)}>Mostrar datos</button>
          </li>
        ))}
      </ul>

      {cargarUsuario && (
        <div>
          <p>{cargarUsuario.name}</p>
          <p>{cargarUsuario.phone}</p>
          <p>{cargarUsuario.email}</p>
        </div>
      )}
    </>
  );
}

export default FetchUseEffect;