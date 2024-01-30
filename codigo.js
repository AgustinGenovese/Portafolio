function saludar()
        {
            var user = document.getElementById("txtUser").value;
            var pass = document.getElementById("txtPass").value;
            console.log("Hola " + user);
            alert("Te damos la bienvenida " + user);
            console.log("Tu contra no es privada muajaja " + pass);

            let variablecomun = "";
            const variableconstante = "";
        }   

function sumar(){
    var n1 = parseInt(document.getElementById("txtUser").value);
    var n2 = parseInt(document.getElementById("txtPass").value);
    var n3 = n1 + n2;
    alert("La suma es: " + n3);
}

for (var i = 0; i < 10; i++) 
    {
        console.log(i);
    }

    