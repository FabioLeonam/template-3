function toggleModalGoogleApps(idModal){
  const modal = document.querySelector(idModal);
  modal.classList.add("show");
  const gridMenu = document.querySelector('.header__item-apps');
  gridMenu.addEventListener('click', () => {  /* event as parameter -> podemos obter informações sobre o evento ocorrido */
    modal.classList.toggle("show")
  })
}

const googleApps = document.querySelector('.header__item-apps')
googleApps.addEventListener('click', () => {
  toggleModalGoogleApps(".modal-apps");
})

function toggleModalProfile(idModal){
  const modal = document.querySelector(idModal);
  modal.classList.add("show");
  const profilePhoto = document.querySelector('.header__item-photo');
  profilePhoto.addEventListener('click', () => {
    modal.classList.toggle("show")
  })
}

const profile = document.querySelector('.header__item-photo')
profile.addEventListener('click', () => {
  toggleModalProfile(".modal-profile");
})