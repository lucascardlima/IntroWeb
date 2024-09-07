function calcularRaiz(numero) {
    var msg = 'A raiz quadrada é igual a ';
    return alert(msg + Math.sqrt(numero));  
}
function escrever() {
    var numero = prompt("Digite um número");
    var texto = "";  
    for (let i = 0; i <= numero; i++) {
        if (i== numero){
            texto += i + ".";
        }
        else if(i== numero - 1){
            texto += i + " e ";
        }
        else{
            texto += i + ", ";
        }
        
    }
    document.getElementById("minhaDiv").innerHTML = texto;
}
 function abrirModal(){
    var text=prompt("Digite o texto que deseja exibir na janela modal:")
    document.getElementById('modalBody').innerText=text;
    var modal=new bootstrap.Modal(document.getElementById('modal'));
    modal.show()
 }


 