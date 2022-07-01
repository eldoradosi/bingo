function validar_formulario() 
{
    let nombre = document.forms["formulario"]["nombre"].value
    let telefono = document.forms["formulario"]["telefono"].value
    let email = document.forms["formulario"]["email"].value
    let letras = new RegExp('^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\'\`\'\-]+$', 'i');

    if (nombre == "") 
    {
      alert("Por favor ingrese su nombre");
      document.forms["formulario"]["nombre"].focus()
      return false;
    }
    if (!letras.test(nombre)) 
    {
        alert("Se ingresó un nombre inválido");
        document.forms["formulario"]["nombre"].focus()
        return false;
    }

    if (telefono == "")
    {
        alert("Por favor ingrese su número telefono");
        document.forms["formulario"]["telefono"].focus()
        return false;
    }
    if (isNaN(telefono)) 
    {
        alert("El número de teléfono ingresado no es válido");
        document.forms["formulario"]["telefono"].focus()
        return false;
    }
    
    if (email == "") 
    {
        alert("Debe completar su email");
        document.forms["formulario"]["email"].focus()
        return false;
    }

    alert("Información enviada. Gracias!");
    return true
}