function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de Lucas Brandão, usando óculos de sol e camiseta rosa, barba e fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de Lucas Brandão, sem oculos, com gravata borboleta e fundo colorido"
    )
  }
}
