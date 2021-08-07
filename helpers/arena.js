export default function arena(data) {
  let clasificacion = {}
  if (data.fraccionFina < 5) {
    //arenas limpias
    if (data.cu >= 6 && data.cc >= 1 && data.cc <= 3) {
      //sw
      clasificacion.grupo = 'SW'
    } else if (data.cu < 6 || data.cc < 1 || data.cc > 3) {
      //sp
      clasificacion.grupo = 'SP'
    }
  } else if (data.fraccionFina > 12) {
    //arenas con finos
    if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
      //sm
      clasificacion.grupo = 'SM'
    } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
      //sc
      clasificacion.grupo = 'SC'
    }
  }
  return clasificacion
}
