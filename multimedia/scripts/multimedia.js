const albumes = document.getElementsByClassName('albumVistaPrevia')
Array.from(albumes).forEach((album) => {
  album.addEventListener('mouseover',function(){
    this.getElementsByTagName('img')[0].style.opacity = '1';
  })
  album.addEventListener('mouseout',function(){
    this.getElementsByTagName('img')[0].style.opacity = '0.8';
  })
});
function abrirRevista(revista){
  const url = 'revistas/'+revista+'.pdf';
  window.open(url);
}
function abrirAlbum(){
  window.location.href = 'album.html';
}