//Obtengo la informacion del DOM
document.getElementById('datos_form').addEventListener('submit', function(event){
    event.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const mensaje = document.querySelector('#mensaje').value;
    const servicio = document.querySelector('input[name="flexRadioDefault"]:checked')?.value;

    //*Si se valida, creo nuevo usuario
    if (validarDatos(nombre, apellido, email, mensaje, servicio)){
        const nuevo_usuario = {
            id: generarID(),
            servicio,
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
const validarDatos = (nombre, apellido, email, mensaje, servicio) => {
    if (!servicio || !nombre || !apellido || !email || !mensaje){
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


