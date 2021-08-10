export default function arena(data) {
  let clasificacion = {}
  if (data.fraccionFina < 5) {
    //arenas limpias
    if (data.cu >= 6 && data.cc >= 1 && data.cc <= 3) {
      //SW
      clasificacion.grupo = 'SW'

      if (data.fraccionGrava < 15) {
        clasificacion.nombre = 'Arena bien graduada'
      } else {
        clasificacion.nombre = 'Arena bien graduada con grava'
      }
    } else if (data.cu < 6 || data.cc < 1 || data.cc > 3) {
      //SP
      clasificacion.grupo = 'SP'

      if (data.fraccionGrava < 15) {
        clasificacion.nombre = 'Arena mal graduada'
      } else {
        clasificacion.nombre = 'Arena mal graduada con grava'
      }
    }
  } else if (data.fraccionFina > 12) {
    //arenas con finos
    if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
      //SM
      clasificacion.grupo = 'SM'

      if (data.fraccionGrava < 15) {
        clasificacion.nombre = 'Arena limosa'
      } else {
        clasificacion.nombre = 'Arena limosa con grava'
      }
    } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
      //SC
      clasificacion.grupo = 'SC'

      if (data.fraccionGrava < 15) {
        clasificacion.nombre = 'Arena arcillosa'
      } else {
        clasificacion.nombre = 'Arena arcillosa con grava'
      }
    }
  } else if (data.fraccionFina >= 5 && data.fraccionFina <= 12) {
    //simbolos dobles
    if (data.cu >= 6 && data.cc >= 1 && data.cc <= 3) {
      //SW...
      if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
        //SW - SM
        clasificacion.grupo = 'SW - SM'

        if (data.fraccionGrava < 15) {
          clasificacion.nombre = 'Arena bien graduada con limo'
        } else {
          clasificacion.nombre = 'Arena bien graduada con limo y grava'
        }
      } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
        //SW - SC
        clasificacion.grupo = 'SW - SC'

        if (data.fraccionGrava < 15) {
          clasificacion.nombre =
            'Arena bien graduada con arcilla (o arcilla limosa)'
        } else {
          clasificacion.nombre =
            'Arena bien graduada con arcilla y grava (o arcilla limosa y grava)'
        }
      }
    } else if (data.cu < 6 || data.cc < 1 || data.cc > 3) {
      //SP...
      if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
        //SP - SM
        clasificacion.grupo = 'SP - SM'

        if (data.fraccionGrava < 15) {
          clasificacion.nombre = 'Arena mal graduada con limo'
        } else {
          clasificacion.nombre = 'Arena mal graduada con limo y grava'
        }
      } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
        //SP - SC
        clasificacion.grupo = 'SP - SC'

        if (data.fraccionGrava < 15) {
          clasificacion.nombre =
            'Arena mal graduada con arcilla (o arcilla limosa)'
        } else {
          clasificacion.nombre =
            'Arena mal graduada con arcilla y grava (o arcilla limosa y grava)'
        }
      }
    }
  }
  return clasificacion
}
