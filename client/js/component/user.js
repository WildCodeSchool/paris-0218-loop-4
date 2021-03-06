export const createUserElement = user => `
  <div class="users">
    <div class="adepte"></div>
      <a href="html/profil.html?id=${user.id}" >
        <h2 class="name">${user.username}</h2>
        <img src=${user.photo} class="adepte">
      </a>
    </div>
  </div> 
`

export const createUserDetailElement = user => `
  <div class="users">
    <div class="adepte"></div>
      <h2 class="name">${user.username}</h2>
      <img src=${user.photo} class="adepte">
      <p>${user.email}</p>
    </div>
  </div> 
`
