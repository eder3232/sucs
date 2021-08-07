import grava from './helpers/grava.js'
import arena from './helpers/arena.js'
import llLess50 from './helpers/llLess50.js'
import llMore50 from './helpers/llMore50.js'
import Data from './class/data.js'

const data1 = new Data(30, 70, false, null, null, 33, 12)

function sucs(data) {
  let clasificacion = null
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
  return clasificacion
}

console.log(sucs(data1))
