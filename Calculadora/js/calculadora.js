		window.onload=function(){

		var operador="";
		var colorAmarillo=function(){
			this.style.background="yellow";  
		}
		var colorBlanco = function(){
			this.style.background="white"; 
		}
		var numeros=function(){
			var valor=this.value;

			if(operador==""){//operando 1
				var valorinput=document.getElementById("operando1").value;
					if(valorinput=='0'){
						document.getElementById("operando1").value='';
						
					}
					document.getElementById('operando1').value+=valor;					
			}
			else{//operando 2
				var valorinput=document.getElementById("operando2").value;
					if(valorinput=='0'){
						document.getElementById("operando2").value='';
											
					}
					document.getElementById('operando2').value+=valor;
			}
					
		}

		var operadores= function(){
			operador=this.value;

		}
		var resultadoIgual = function(){
			oper1=document.getElementById('operando1').value;
			oper2=document.getElementById('operando2').value;
			document.getElementById('resultado').value=eval(oper1+operador+oper2);

		}

		var reinicio= function(){
			document.getElementById('operando1').value="0"
			document.getElementById('operando2').value="0"
			document.getElementById('resultado').value="0"
			operador="";

		}

		var uno=document.getElementById("uno");
		uno.addEventListener("click",numeros);

		var dos=document.getElementById("dos");
		dos.addEventListener("click",numeros);

		var tres=document.getElementById("tres");
		tres.addEventListener("click",numeros);

		var cuatro=document.getElementById("cuatro");
		cuatro.addEventListener("click",numeros);

		var cinco=document.getElementById("cinco");
		cinco.addEventListener("click",numeros);

		var seis=document.getElementById("seis");
		seis.addEventListener("click",numeros);

		var siete=document.getElementById("siete");
		siete.addEventListener("click",numeros);

		var ocho=document.getElementById("ocho");
		ocho.addEventListener("click",numeros);

		var nueve=document.getElementById("nueve");
		nueve.addEventListener("click",numeros);

		var cero=document.getElementById("cero");
		cero.addEventListener("click",numeros);

		var suma=document.getElementById("suma");
		suma.addEventListener("click",operadores);

		var resta=document.getElementById("resta");
		resta.addEventListener("click",operadores);

		var mult=document.getElementById("mult");
		mult.addEventListener("click",operadores);

		var division=document.getElementById("division");
		division.addEventListener("click",operadores);

		var igual =document.getElementById("igual");
		igual.addEventListener("click",resultadoIgual);

		var reiniciar =document.getElementById("reiniciar");
		reiniciar.addEventListener("click",reinicio);

		var operando1= document.getElementById('operando1');
		operando1.addEventListener('focus',colorAmarillo);
		operando1.addEventListener('focusout',colorBlanco);

		var operando2= document.getElementById('operando2');
		operando2.addEventListener('focus',colorAmarillo);
		operando2.addEventListener('focusout',colorBlanco);

		var resultado= document.getElementById('resultado');
		resultado.addEventListener('focus',colorAmarillo);
		resultado.addEventListener('focusout',colorBlanco);


}	