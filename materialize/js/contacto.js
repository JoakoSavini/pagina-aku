//Obtengo la informacion del DOM
document.getElementById('datos_form').addEventListener('submit', function(event){
    event.preventDefault();
    
    const nombre = document.querySelector('#first_name').value;
    const apellido = document.querySelector('#last_name').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#message').value;

    //*Si se valida, creo nuevo usuario
    if (validarDatos(nombre, apellido, email, mensaje)){
        const nuevo_usuario = {
            id: generarID(),
            nombre,
            apellido,
            email,
            mensaje
        };
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(nuevo_usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Sus datos han sido enviados correctamente')
        document.getElementById('datos_form').reset();
    }
})


//Declaro las funciones de toma de valores

//*Primero la funcion de validación
const validarDatos = (nombre, apellido, email, mensaje) => {
    if (!nombre || !apellido || !email || !mensaje){
        alert('Complete todos los campos')
        return false;
    }
    return true;
}

//*Para crear ID's
const generarID = () => {
    let id = localStorage.getItem('idUsuario') || '0';
    id = parseInt(id) + 1;
    localStorage.setItem('idUsuario', id.toString());
    return id;
}


