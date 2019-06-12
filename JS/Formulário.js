var nome = document.getElementById("nome")
var sobrenome = document.getElementById("sobrenome")
var tel = document.getElementById("tel")
var email = document.getElementById("email")
var empresa = document.getElementById("empresa")
var cargo = document.getElementById("cargo")
var estado = document.getElementById("inputEstado")
var cidade = document.getElementById("cidade")
var check1 = document.getElementById("gridCheck1")
var check2 = document.getElementById("gridCheck2")
var check3 = document.getElementById("gridCheck3")
var check4 = document.getElementById("gridCheck4")

function validarCampos(){
	if (nome.value === "")
		alert("Campo Inválido: Nome");
	else 
		if (sobrenome.value === "")
			alert("Campo Inválido: Sobrenome");
		else
				if (email.value === "")
					alert("Campo Inválido: Email");
				else
					if (empresa.value === "")
						alert("Campo Inválido: Empresa");
					else
						if (estado.value === "")
							alert("Campo Inválido: Estado");
						else
							if (check1.checked  == false && check2.checked  == false && check3.checked  == false && check4.checked  == false)
								alert("Campo Inválido: Serviços");
							else
									alert("Sua solicitação foi enviada com sucesso!!");
}

document.getElementById("enviar").onclick = function(e){
	validarCampos()
}