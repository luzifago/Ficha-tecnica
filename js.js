function comprobar() {
    let producto, linea, modulo, VerAnteriores, VerActual, Modulo, general
    producto=document.getElementById ("producto").value
    document.getElementById("resultado1").innerHTML="<h3> nombre del producto: "+producto+"</h3>"
    console.log(producto)

    linea=document.getElementById ("linea").value
    document.getElementById("resultado2").innerHTML="<h3> linea de producto: "+linea+"</h3>"
    console.log(linea)

    VerAnteriores=document.getElementById ("Ver.Anteriores").value
    document.getElementById("resultado3").innerHTML="<h3> nombre del producto: "+VerAnteriores+"</h3>"
    console.log(VerAnteriores)

    VerActual=document.getElementById ("Ver.Actual").value
    document.getElementById("resultado4").innerHTML="<h3> nombre del producto: "+VerActual+"</h3>"
    console.log(VerActual)

    Modulo=document.getElementById ("producto").value
    document.getElementById("resultado5").innerHTML="<h3> nombre del producto: "+Modulo+"</h3>"
    console.log(modulo)

    general=document.getElementById ("general").value
    document.getElementById("resultado6").innerHTML="<h3> nombre del producto: "+general+"</h3>"
    console.log(general)


}