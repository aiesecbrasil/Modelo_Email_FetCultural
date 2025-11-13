/* Funcionalidade do site */
/**
 * Carregando os links e imagens ao iniciar a pagina
 */
document.addEventListener("DOMContentLoaded", () => {
  // Banner
  document.getElementById("banner-link").href = "https://aiesec.org.br";
  document.getElementById("banner-img").src = "https://mcusercontent.com/611b199bd85d5c0002552a52a/images/0a1c1bd0-c87d-1f10-3a77-f80f9f88a8c1.jpg";

  // Botão do formulário
  document.getElementById("form-link").href = `https://forms.gle/seu-formulario?id=${getUrlParameter()}`;

  // Instagram
  document.getElementById("insta-link").href = "https://www.instagram.com/aiesecpelobrasil/reels/?__d=1";

  // Logo do rodapé
  document.getElementById("footer-img").src = "https://mcusercontent.com/611b199bd85d5c0002552a52a/images/40657521-852c-fe0e-6f0a-810273977ab3.png";
  document.getElementById("site-link").href = "https://aiesec.org.br";
});

/**
 * Pegar Paramentro de url para registra usuario que estiver responder o formulario.
 */
function getUrlParameter() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id') || null;
}