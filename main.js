 
/* ScrollReveal: Mostrar elementos quando der scroll na página */
<!-- scrollreveal -->
    <script src="https://unpkg.com/scrollreveal"></script>

<script>
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .title, #home .text,
  #home .image, #home .cta,
  #cursos .title, #cursos .portfolio,
  #necessidades .title, #necessidades .text,
  #necessidades .sanfona,
  #contratar .title, #contratar .text,
  #conteudo .title, #conteudo .text, 
  #turmasvip .title, #turmas-abertas .title,
  #servicos .title, #servicos .suporte,
  #clientes .title, #clientes .carrossel,
  #form .title, #form .text
  #form .mautic
  `,
  { interval: 100 }
)
</script>
