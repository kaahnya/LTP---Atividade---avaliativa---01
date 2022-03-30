class Noticia{
 constructor(titulo, data, resumo, texto){
   
  this.titulo = titulo;
  this.data = data;
  this.resumo = resumo;
  this.texto = texto; 
}

mostrarNoticia(){
  return this.titulo + "\n" + this.data + "\n" + this.resumo + "\n" + this.texto
  }
}

let noticia = new Noticia ("Grave acusação contra Neymar", "22/03/2022", "A semana do futebol reserva fortes emoções com a reta decisiva dos Estaduais. Enquanto a bola não rola, veja tudo que foi destaque nas últimas horas: teve declaração polêmica contra Neymar, jogador escapando de acidente grave, movimentações no mercado e muito mais.", "Figura de destaque no futebol mundial, o atacante Neymar voltou ser mencionado em um episódio de suposta polêmica. No podcast “After Foot”, do canal RMC Sport, o jornalista francês Daniel Riolo, disse que o jogador brasileiro não está sendo profissional no PSG e o acusou de chegar “quase bêbado” nos treinamentos.“Neymar quase não treina mais. Ele chega em um estado lamentável, no limite de estar bêbado. É assim: Neymar está em espírito de vingança contra o PSG. Há uma ruptura total com o clube e o vestiário”, disparou Riolo. O jogador ainda não se manifestou sobre essas declarações.");

console.log(noticia.mostrarNoticia());