import React from "react";
import "./App.css";

const n2="you hava to provide an name";

const Cats = (n) => {
  return (
    <div>
      <img class="cat" src={n.image} alt="Cat images"  />
      {n.name ? <h2>Name:{n.name}</h2>:<h2>{n2}</h2>
      }
        <h5>Age:{n.age} years</h5>
    </div>
  );
};

function Cat() {
  return (
    <div id="cats">
      <Cats
        image="https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
        name="Cat 1"
        age={2}
      />
      <Cats
        image="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGN1dGUlMjBraXR0ZW58ZW58MHx8MHx8&w=1000&q=80"
        name="Cat 2"
        age={1}
      />
      <Cats
        image="https://images.unsplash.com/photo-1583524505974-6facd53f4597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&w=1000&q=80"
        age={4}
      />
      <Cats
        image="https://i.pinimg.com/originals/f5/2e/dc/f52edce4963f31b5ba2380c5cf800dc2.jpg"
        name="Cat 4"
        age={3}
        />
      </div>
    );
  }
  
  export default Cat;