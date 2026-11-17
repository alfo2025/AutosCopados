const MenuIcono = document.querySelector('#IconoOP')
const Menu = document.querySelector('#Menu')
const Cuerpo = document.querySelector ('#Cuerpo')

function MenuVisualizacion(){
    if(Menu.classList.contains('Cerrado')){
        Menu.classList.remove('Cerrado')
        Menu.classList.add('Abierto')
        Cuerpo.classList.add('Cerrado')
    }
    else{
        Menu.classList.remove('Abierto')
        Menu.classList.add('Cerrado')
        Cuerpo.classList.remove('Cerrado')
    }
}

MenuIcono.addEventListener('click', MenuVisualizacion);