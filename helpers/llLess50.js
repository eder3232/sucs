export default function llLess50(data) {
  let clasificacion = {}
  if (!data.organico) {
    //inorganico
    if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
      //CL
      clasificacion.grupo = 'CL'
    } else if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
      //ML
      clasificacion.grupo = 'ML'
    }
  } else {
    //organico
    if (data.ip < 0.9 * (data.ll - 8)) {
      //OL
      clasificacion.grupo = 'OL'
    }
  }
}
