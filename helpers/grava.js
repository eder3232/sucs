export default function grava(data) {
  let clasificacion = {}
  if (data.fraccionFina < 5) {
    //gravas limpias
    if (data.cu >= 4 && data.cc >= 1 && data.cc <= 3) {
      //GW
      clasificacion.grupo = 'GW'
    } else if (data.cu < 4 || data.cc < 1 || data.cc > 3) {
      //GP
      clasificacion.grupo = 'GP'
    }
  } else if (data.fraccionFina > 12) {
    //gravas con finos
    if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
      //GM
      clasificacion.grupo = 'GM'
    } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
      //GC
      clasificacion.grupo = 'GC'
    }
  } else if (data.fraccionFina >= 5 && data.fraccionFina <= 12) {
    //simbolos dobles
    if (data.cu >= 4 && data.cc >= 1 && data.cc <= 3) {
      //GW...
      if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
        //GW - GM
        clasificacion.grupo = 'GW - GM'
      } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
        //GW - GC
        clasificacion.grupo = 'GW - GC'
      }
    } else if (data.cu < 4 || data.cc < 1 || data.cc > 3) {
      //GP...
      if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
        //GP - GM
        clasificacion.grupo = 'GP - GM'
      } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
        //GP - GC
        clasificacion.grupo = 'GP - GC'
      }
    }
  }
  return clasificacion
}
// debajo de la linea a
// data.ip < 0.73 * data.ll - 20
