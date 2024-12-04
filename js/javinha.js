function enviar() {
    if(document.getElementById('firstname').value==''){
        alert ('vc esqueceu o nome')
    }


else if(document.getElementById('email').value==''){
        alert('você esqueceu de colocar o e-mail')
}


else if(document.getElementById('password').value==''){
        alert('coloque a senha?')
}


else if (document.getElementById('confirmarsenha').value==''){
        alert('vc n confirmou a senha')
}


else if (document.getElementById('confirmarsenha').value != document.getElementById('password').value) {

    alert('senhas diferentes')
 
}
else {
    alert ('usuario cadastrado')
}

}