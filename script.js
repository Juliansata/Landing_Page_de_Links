function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")
  //substituir  a imagem
  if (html.classList.contains("light")) {
    // se tiver ligth mode,  adicionar image light
    img.setAttribute("src", "./assets/codecomigo-light.jpg")
  } else {
    //se não tiver light mode, manter imagem normal
    img.setAttribute("src", "./assets/codecomigo.png")
  }
}
