let currentInput = "";
    let display = document.getElementById ("display")

    function appendToDisplay (value) 
    {
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay ()
    {
        currentInput='';
        display.value='';
    }
/* funcion para calcular el resultado de la expresion ingresada por el usuario  */
    function calculateResult ()
    {
        try{
            const result = eval (currentInput); /* evalua el resultado de la expresion ingresada por el usuario */
            display.value = result; /* muestra el resultado en el display */
            currentInput = result.toString(); /* convierte el resuldtado en una CADENA y lo almacena */
        } catch(error)
            {
            display.value = 'error'; /* en caso de que el usuario haga alguna operacion erronea muestra un mensaje de error */
            }
    }   
/* funcion boton cambio de modo body  */
    function setLightMode() {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }

    function setDarkMode() {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }

