import grava from './helpers/grava.js'
import arena from './helpers/arena.js'
import llLess50 from './helpers/llLess50.js'
import llMore50 from './helpers/llMore50.js'
import interfaz from './helpers/interfaz.js'
import Data from './class/data.js'

const d = document
const $organico1 = d.getElementById('organico1')
const $organico2 = d.getElementById('organico2')
const $clasificar = d.getElementById('clasificar')
const $resultado = d.getElementById('resultado')

$organico1.addEventListener('change', () => {
  if ($organico1.checked) {
    $organico2.checked = false
  }
})

$organico2.addEventListener('change', () => {
  if ($organico2.checked) {
    $organico1.checked = false
  }
})

$clasificar.addEventListener('click', main)

function main() {
  let data = interfaz()
  console.log(data)
  let data1 = new Data(
    data.ret4,
    data.ret200,
    data.organico,
    data.cc,
    data.cu,
    data.ll,
    data.lp
  )
  console.log(data1)
  sucs(data1)
}

function sucs(data) {
  let clasificacion = {
    nombre: '',
    grupo: '',
  }
  if (data.ret200 > 50) {
    //suelo de grano grueso
    if (data.ret4 > 50) {
      //grava
      clasificacion = grava(data)
    } else {
      //arena
      clasificacion = arena(data)
    }
  } else {
    //suelo de grano fino
    if (data.ll < 50) {
      //llLess50
      clasificacion = llLess50(data)
    } else {
      //llMore50
      clasificacion = llMore50(data)
    }
  }
  $resultado.innerText = `Grupo: ${clasificacion.grupo} 
  Nombre: ${clasificacion.nombre}`
  console.log(clasificacion)

  return clasificacion
}

//console.log(sucs(data1))
