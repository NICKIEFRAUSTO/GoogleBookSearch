import React from "react";


function Nav() {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
   
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="./">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./saved">My Saved Books</a>
      </li>
           
    </ul>
  </div>
</nav>
    
  );
}

export default Nav;

