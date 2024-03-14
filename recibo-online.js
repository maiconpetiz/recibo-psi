//Tratamento do CPF
function mascara(i){
   var v = i.value;
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) i.value += ".";
   if (v.length == 11) i.value += "-";

}

String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
};



//tratando dados do input para a impressão 
function gerarRecibo() {
      document.getElementById('nome_paciente').innerHTML = document.getElementById('nome').value;

  qtdesessao = document.getElementById('valor').value;
  qtde_sessao = qtdesessao.replace(',', '.');
  
  var total = qtde_sessao * document.getElementById('qtde').value;

  document.getElementById('recibo-num').innerHTML = document.getElementById('num-recibo').value;
  
  //tratando o que vai ser impresso
    document.getElementById('valor_total').innerHTML = parseFloat(total).toLocaleString('pt-br',{minimumFractionDigits: 2});
    document.getElementById('qtd').innerHTML = document.getElementById('qtde').value;
    document.getElementById('documento').innerHTML = document.getElementById('cpf').value;
    document.getElementById('data').innerHTML = data;
    document.getElementById('hora').innerHTML = hora;
    document.getElementById('1data').innerHTML = document.getElementById('data1').value.split('-').reverse().join('/');
    document.getElementById('2data').innerHTML = ' - ' + document.getElementById('data2').value.split('-').reverse().join('/');
    document.getElementById('3data').innerHTML = ' - ' + document.getElementById('data3').value.split('-').reverse().join('/');
    document.getElementById('4data').innerHTML = ' - ' + document.getElementById('data4').value.split('-').reverse().join('/');

    window.print()
}


//Tratando da data e horário
dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date

data = dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear ();

hora = now.getHours() + "h" + now.getMinutes() + "min" + now.getSeconds() + "s";

String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
};

//transformando data em "pt-br"


//mascara campo valor
function mascaraMoeda(campo) {
  var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
  var resultado  = "";
  var mascara = "##.###.###,##".reverse();
  for (var x=0, y=0; x<mascara.length && y<valor.length;) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}