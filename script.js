
const botoes = document.querySelectorAll(".abrirCard");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const cardv = botao.closest(".card");

        cardv.querySelector("p.info-exposto").classList.toggle("info-oculto");
        cardv.querySelector(".abrirCard").classList.toggle("gira-seta");
           
    });
});

const botoesForm = document.querySelectorAll(".botaoFormacao")

 botoesForm.forEach(botaoF => {
    botaoF.addEventListener("click", () => {
         
   const cardf = botaoF.closest(".card-formacao");

   cardf.querySelector("p.pexposto").classList.toggle("poculto");
   cardf.querySelector(".botaoFormacao").classList.toggle("gira-seta2");

    });
 });
 