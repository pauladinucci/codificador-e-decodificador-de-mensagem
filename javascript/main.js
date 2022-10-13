function myFunction() {
    alert("mensagem codificada!");
}

function myfunction() {
    alert("mensagem decodificada!");
}

/*código w3*/


<html>
<body>

<h1>The Window Object</h1>
<h2>The atob() Method</h2>

<p>The atob() method decodes a base-64 encoded string.</p>
<p>The atob() method is not supported in IE9 and earlier.</p>

<p id="demo"></p>

<script>
let text = "Hello World!";
let encoded = window.btoa(text);
let decoded = window.atob(encoded);

document.getElementById("demo").innerHTML = "Encoded: " + encoded + "<br>" + "Decoded: " + decoded;


/*código w3*/


<h1>The Window Object</h1>
<h2>The btoa() Method</h2>

<p>The btoa() method encodes a string in base-64.</p>
<p>The btoa() method is not supported in IE9 and earlier.</p>

<p id="demo"></p>

let text = "Hello World!";
let encoded = window.btoa(text);

document.getElementById("demo").innerHTML = "Original: " + text + "<br>Encoded: " + encoded;

/*cifra de cesar leo*/

// Lista de letras
var letras = "abcdefghijklmnopqrstuvwxyz";
// Criamos um var com a letra desejada
var letraDesejada = letras[0];
// Colocamos a letra na tela (concatenada com igual)
document.write(letraDesejada + " = ");
// chartCodeAt para imprimir o código daquela letra
document.write(letraDesejada.charCodeAt());
document.write(`</br>Exemplo de utilização do charCodeAt().`);

</script>

</body>
</html>
