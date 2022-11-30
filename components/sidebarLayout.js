import Link from 'next/link';

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

export default function SidebarLayout({posts, children }) {

  return (
    <>
    
  <header id="header" class="b-header">
    <svg class="b-button b-hide-large" onClick={w3_open} height="48" width="48">
      <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
    </svg>
    <img src="assets\logo.svg" alt="logo"></img>
    <b>Logotipo</b>
  </header>

  
  <nav class="b-sidebar b-collapse b-animate-left"  id="mySidebar">
    {/* <!-- botão fechar --> */}
    <svg onClick={w3_close} class="b-button b-hide-large b-right" title="close menu" height="48" width="48">
      <path
        d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
    </svg>

    {/* <!-- curso --> */}
    <div class="curso">
      <div class="nomeCurso">Nome do curso</div>
      <div class="progressoCurso" >
        <div> 2/5 completos
          <svg class="b-right" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4zm6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83z" />
          </svg>
        </div>
        <br />
        <div style={{display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '2px'}}>
          <div style={{"width":"24%","height":"4px","background":"#2DB372","borderRadius":"4px","flex":"none","order":"0","flexGrow":"1"}}></div>
          <div style={{"width":"24%","height":"4px","background":"#2DB372","borderRadius":"4px","flex":"none","order":"1","flexGrow":"1"}}></div>
          <div style={{"width":"24%","height":"4px","background":"#2DB372","borderRadius":"4px","flex":"none","order":"2","flexGrow":"1"}}></div>
          <div style={{"width":"24%","height":"4px","background":"#2DB372","borderRadius":"4px","flex":"none","order":"3","flexGrow":"1"}}></div>
        </div>
      </div>
    </div>

    <hr style={{margin: '0px 30px 0px 30px'}} />
    {/* <!-- assuntos --> */}
    <div class="assuntos curso">

      <div class="assuntoFechado">
        <div class="titulo">
          <div>
            <svg height="7" width="12" viewBox="10 15 28 17" preserveAspectRatio="none">
              <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" /></svg>
            <span style={{paddingLeft: '22px'}}>Assunto 1</span>
          </div>
          <span class="">4/4</span>
        </div>
      </div>

      <div class="assuntoFechado">
        <div class="titulo">
          <div>
            <svg height="7" width="12" viewBox="10 15 28 17" preserveAspectRatio="none">
              <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" /></svg>
            <span style={{paddingLeft: '22px'}}>Assunto 2</span>
          </div>
          <span class="">4/4</span>
        </div>
      </div>

      <div class="assuntoAberto">
        <div class="titulo">
          <div>
            <svg style={{transform: 'scaleY(-1)'}} height="7" width="12" viewBox="10 15 28 17" preserveAspectRatio="none">
              <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" /></svg>
            <span style={{paddingLeft: '22px'}}>Assunto 3</span>
          </div>
          <span class="">2/4</span>
        </div>
        <div class="topicos">
          <div class="topico topicoVisto">Introdução</div>
          <div class="topico topicoAtual">Conteúdo 1</div>
          <div class="topico">Artigo 1
            <div class="artigo">
              Artigo • 3 minde leitura
            </div>
          </div>
        </div>
      </div>

    </div>
  </nav>

  {/* <!-- Overlay effect when opening sidebar on small screens --> */}
  <div class="b-overlay b-hide-large b-animate-opacity" onClick={w3_close} style={{cursor:'pointer'}}
    title="close side menu" id="myOverlay"></div>

  {/* <!-- !PAGE CONTENT! --> */}
  <main class="b-main">
    {children}
    </main>

</>
  );

}