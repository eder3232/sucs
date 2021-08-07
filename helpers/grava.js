export default function grava(data) {
  let clasificacion = {}
  if (100 - data.ret200 < 5) {
    //gravas limpias
    if (data.cu >= 4 && data.cc >= 1 && data.cc <= 3) {
      //gw
      clasificacion.grupo = 'GW'
    } else if (data.cu < 4 || data.cc < 1 || data.cc > 3) {
      //gp
      clasificacion.grupo = 'GP'
    }
  } else if (100 - data.ret200 > 12) {
    //gravas con finos
    if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
      //gm
      clasificacion.grupo = 'GM'
    } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
      //gc
      clasificacion.grupo = 'GC'
    }
  }
  return clasificacion
}
// debajo de la linea a
// data.ip < 0.73 * data.ll - 20
