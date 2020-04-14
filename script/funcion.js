// Desplegable para cambiar de Tema
function funcionDesplegable() {
  const tema = document.getElementById("desplegableTema");
  
    if (tema.style.display === "none") {
        tema.style.display = "flex";
      } else {
        tema.style.display = "none";
      }
}
// Cambio de tema 'onclick'
function estiloDark(){
  document.getElementById('estilos').href = './Styles/darkstyle.css';
  document.getElementById('desplegableTema').style.display = 'none';
  sessionStorage.setItem("tema", "dark")
  document.getElementById('logoImg').src = './images/gifOF_logo_dark.png';
}
function estiloLight(){
  document.getElementById('estilos').href = './Styles/style.css';
  document.getElementById('desplegableTema').style.display = 'none';
  sessionStorage.setItem("tema", "light")
  document.getElementById('logoImg').src = './images/gifOF_logo.png';
}

//para que el tema permanezca cuando se camia de HTML
function verificarTema() {
  if (sessionStorage.getItem("tema") === "dark") {
    document.getElementById("estilos").href = './Styles/darkstyle.css';
    document.getElementById('logoImg').src = './images/gifOF_logo_dark.png';
    }
    else if (sessionStorage.getItem("mode") === "light") {
      document.getElementById("estilos").href = './Styles/style.css';
      document.getElementById('logoImg').src = './images/gifOF_logo.png';
    }
}
verificarTema();

//Desplegable de sugeridos en la barra de busqueda
document.getElementById('opBusqueda').onmousemove = function mostrarOp() {
  document.getElementById('opBusqueda').style.display = "flex";
}
document.getElementById('opBusqueda').onmouseleave = function ocultarOp() {
  document.getElementById('opBusqueda').style.display = "none";
}
document.getElementById('barra').onmousemove = function mostrarOp() {
  document.getElementById('opBusqueda').style.display = "flex";
}
document.getElementById('barra').onmouseleave = function ocultarOp() {
  document.getElementById('opBusqueda').style.display = "none";
}

function resultadosBusquedaOp(){

  document.getElementById("tendenciaTitle").innerHTML = 'Resultados de Busqueda:';
  document.getElementById('gridTrending').innerHTML = '';
  let resultDisplay = document.getElementById('gridTrending');

  let searchitemsurl = 'https://api.giphy.com/v1/gifs/search?api_key=0wR2gDCbwTeV9uLT48UGhTtnp9HGMYpY&q=' + x + '&limit=24&offset=0&rating=G&lang=en';

    fetch(searchitemsurl)
        .then(response => {
            return response.json();
        })
        .then(json => {
            json.data.forEach (item => {
            var gifurl = item.images.original.url;

              const trendCaja = document.createElement('div');
              resultDisplay.appendChild(trendCaja);
              trendCaja.classList.add('gridCont');

              const nuevoGif = document.createElement('img');
              trendCaja.appendChild(nuevoGif);
              nuevoGif.src = gifurl;
              nuevoGif.classList.add('gifBuscado');

              const divtitle = document.createElement('div')
              divtitle.classList.add('footer');
              trendCaja.appendChild(divtitle);

              const gtitle = document.createElement('p')
              divtitle.appendChild(gtitle);
              gtitle.innerHTML = item.title;
              })
            })      
  .catch(err => console.log(err));
}
function busquedaOp1(){
  x = "NBA";
  resultadosBusquedaOp();
}
function busquedaOp2(){
  x = "memes";
  resultadosBusquedaOp();
}
function busquedaOp3(){
  x = "Pink Floyd";
  resultadosBusquedaOp();
}
// Busqueda del valor ingresado en la barra
function searchFromInput() {

  const input = document.getElementById('inputBuscar').value;        
  console.log(input);

    document.getElementById('gridTrending').innerHTML = '';
    let resultDisplay = document.getElementById('gridTrending');
    var str = document.getElementById("tendenciaTitle").innerHTML; 
    var res = str.replace("Tendencias", "Resultados de busqueda:");
    document.getElementById("tendenciaTitle").innerHTML = res;
    

    let searchitemsurl = `https://api.giphy.com/v1/gifs/search?api_key=0wR2gDCbwTeV9uLT48UGhTtnp9HGMYpY&q=${input}&limit=24&offset=0&rating=G&lang=en`;

      fetch(searchitemsurl)
          .then(response => {
              return response.json();
          })
          .then(json => {
              json.data.forEach (item => {
              var gifurl = item.images.original.url;

                const trendCaja = document.createElement('div');
                resultDisplay.appendChild(trendCaja);
                trendCaja.classList.add('gridCont');

                const nuevoGif = document.createElement('img');
                trendCaja.appendChild(nuevoGif);
                nuevoGif.src = gifurl;

                const divtitle = document.createElement('div')
                divtitle.classList.add('footer');
                trendCaja.appendChild(divtitle);

                const gtitle = document.createElement('p')
                divtitle.appendChild(gtitle);
                gtitle.innerHTML = item.title;
                })
              })
              
      document.getElementById('inputBuscar').value = null;
}

//gif sugeridos con funcion en el boton VER MAS --> donde rellena el grid haciendo una busqueda pasando parametro del boton seleccionado
let picturediv = document.getElementById('gifSugeridos');
let fixedGifs = ["Batman", "Joker", "Mapache", "Loki"];

function fixedSugeridos(){

  fixedGifs.forEach(searchs => {
    var searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=0wR2gDCbwTeV9uLT48UGhTtnp9HGMYpY&q=${searchs}&limit=1&rating=G`; //limit 1 por TERM para que no me explote el DIV de sugeridos

    fetch(searchUrl)
    .then(response => {
      return response.json();
    })
    .then(json => {
      json.data.forEach(obj => {
        let url = obj.images.original.url;

        const nuevacaja = document.createElement('div')
        nuevacaja.classList.add('contenidoBox');
        picturediv.appendChild(nuevacaja);

        const nuevotitle = document.createElement('div')
        nuevotitle.classList.add('contenidoBoxTit');
        nuevacaja.appendChild(nuevotitle);

        const giftitle = document.createElement('p')
        giftitle.classList.add('contenidoBoxTitP');
        nuevotitle.appendChild(giftitle);
        giftitle.innerHTML = obj.title;

        const close = document.createElement('img');
        close.classList.add('closebutton');
        close.src = "./images/button3.svg";
        nuevotitle.appendChild(close);

        const nuevaImagen = document.createElement('img')
        nuevaImagen.classList.add('contenidoImg');
        nuevacaja.appendChild(nuevaImagen);
        nuevaImagen.src = url;

        const button = document.createElement('button')
        button.classList.add('vermas');
        nuevacaja.appendChild(button);
        button.onclick = function buscarBotonVerMas() {
          
          
          document.getElementById('gridTrending').innerHTML = '';
          let resultDisplay = document.getElementById('gridTrending');
          var str = document.getElementById("tendenciaTitle").innerHTML; 
          var res = str.replace("Tendencias", "Resultados de busqueda");
          document.getElementById("tendenciaTitle").innerHTML = res;
          
          var searchValue = searchs;
          console.log(searchValue);

          let searchitemsurl = `https://api.giphy.com/v1/gifs/search?api_key=pMoUhdb6YnPWGVLjL2eSH0j3IlnPzhGH&q=${searchValue}&limit=24&offset=0&rating=G&lang=en`;

          fetch(searchitemsurl)
              .then(response => {
                  return response.json();
              })
              .then(json => {
                json.data.forEach (item => {
                var gifurl = item.images.original.url;

                    const trendCaja = document.createElement('div');
                    resultDisplay.appendChild(trendCaja);
                    trendCaja.classList.add('gridCont');

                    const nuevoGif = document.createElement('img');
                    trendCaja.appendChild(nuevoGif);
                    nuevoGif.src = gifurl;

                    const divtitle = document.createElement('div')
                    divtitle.classList.add('footer');
                    trendCaja.appendChild(divtitle);

                    const gtitle = document.createElement('p')
                    divtitle.appendChild(gtitle);
                    gtitle.innerHTML = item.title;
                })
            })
        }
        const textoBoton = document.createElement('p')
        textoBoton.classList.add('verMasP');
        button.appendChild(textoBoton);

        var vermastext = document.createTextNode("Ver más");
        textoBoton.appendChild(vermastext);
        })
        
    })
  })
}
fixedSugeridos();

// Rellenando el Grid con Gifs trending
let pathTrending = `https://api.giphy.com/v1/gifs/trending?api_key=0wR2gDCbwTeV9uLT48UGhTtnp9HGMYpY&limit=16&rating=G`;
let gifdiv = document.getElementById('gridTrending');

function trendingGifs() {

  
  fetch(pathTrending) 
  .then(response => {
      return response.json();

  })
  
  .then(json => {
    console.log(json)

    json.data.forEach(item => {

      const trendCaja = document.createElement('div')
      trendCaja.classList.add('gridCont');
      gifdiv.appendChild(trendCaja);

      const nuevoGif = document.createElement('img')
      nuevoGif.src = item.images.original.url;
      trendCaja.appendChild(nuevoGif);

      const divtitle = document.createElement('div')
      divtitle.classList.add('footer');
      trendCaja.appendChild(divtitle);

      const gtitle = document.createElement('p')
      divtitle.appendChild(gtitle);
      gtitle.innerHTML = item.title;

      })
  })

  .catch(err => console.log(err));
}
trendingGifs();

