function encriptarMensaje() {
    var mensaje = document.querySelector("#mensaje").value;
    var mensajeCifrado = mensaje
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    document.querySelector("#tablonmensajes").value = mensajeCifrado;
    visibiliti();
  }

  function desencriptarMensaje() {
    var mensaje = document.querySelector("#mensaje").value;
    var mensajeCifrado = mensaje
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.querySelector("#tablonmensajes").value = mensajeCifrado;
    visibiliti();
  }

  function copiarOutput() {
    var copiar = document.querySelector("#tablonmensajes").value;
    navigator.clipboard.writeText(copiar);
    alert("El mensaje encriptado fue copiado");
    document.querySelector("#tablonmensajes").value = null;
    visibiliti();
  }

  function visibiliti() {
    var vis = document.querySelector("#tablonmensajes").value;
    if (vis.length > 0) {
      document.querySelector("#text").style.display = "block";
      document.querySelector("#notext").style.display = "none";
    } else {
      document.querySelector("#text").style.display = "none";
      document.querySelector("#notext").style.display = "block";
    }
  }