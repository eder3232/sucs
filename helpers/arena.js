export default function arena(data) {
  let clasificacion = {}
  if (data.fraccionFina < 5) {
    //arenas limpias
    if (data.cu >= 6 && data.cc >= 1 && data.cc <= 3) {
      //SW
      clasificacion.grupo = 'SW'
    } else if (data.cu < 6 || data.cc < 1 || data.cc > 3) {
      //SP
      clasificacion.grupo = 'SP'
    }
  } else if (data.fraccionFina > 12) {
    //arenas con finos
    if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
      //SM
      clasificacion.grupo = 'SM'
    } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
      //SC
      clasificacion.grupo = 'SC'
    }
  } else if (data.fraccionFina >= 5 && data.fraccionFina <= 12) {
    if (data.cu >= 6 && data.cc >= 1 && data.cc <= 3) {
      //SW...
      if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
        //SW - SM
        clasificacion.grupo = 'SW - SM'
      } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
        //SW - SC
        clasificacion.grupo = 'SW - SC'
      }
    } else if (data.cu < 6 || data.cc < 1 || data.cc > 3) {
      //SP...
      if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
        //SP - SM
        clasificacion.grupo = 'SP - SM'
      } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
        //SP - SC
        clasificacion.grupo = 'SP - SC'
      }
    }
  }
  return clasificacion
}
