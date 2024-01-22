function getID() {
let id = 0;
 return () =>  ++id;
}
const getid = new getID();
const isEmpty =(str) => str.trim() ==='';
let Nombre = document.querySelector('#nombre'),
    Apellido = document.querySelector('#apellido'),
    Email = document.querySelector('#email'),
    Telefono = document.querySelector('#telefono'),
    Ciudad = document.querySelector('#ciudad'),
    Agregar = document.querySelector('#Agregar'),
    Bodytabla = document.querySelector('#tabla-clientes tbody');
Agregar.addEventListener('click',(e)=>{
    e.preventDefault();
    let nombre = Nombre.value;
    let apellido = Apellido.value;
    let email = Email.value;
    let telefono = Telefono.value;
    let ciudad = Ciudad.value;
    if (isEmpty(nombre) || isEmpty(apellido) || isEmpty(email) || isEmpty(ciudad) || isEmpty(telefono)) {
        alert('Todos los campos son obligatorios')
        return;
    }
        let fila = `
        <tr>
        <td>${getid()}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${email}</td>
        <td>${telefono}</td>
        <td>${ciudad}</td>
        <td class = 'remover'>Remover<td>
        </tr>`;
        Bodytabla.insertAdjacentHTML('beforeend', fila);

        nombre.value = '';
        apellido.value = '';
        email.value = '';
        telefono.value = '';
        ciudad.value = '';

        nombre.focus(); 
    
})
document.addEventListener('click',(event)=>{
    let target = event.target;
    if(target.classList.contains('remover')){
        target.parentElement.remove();
    }
})

