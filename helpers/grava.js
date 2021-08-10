export default function grava(data) {
  let clasificacion = {}
  if (data.fraccionFina < 5) {
    //gravas limpias
    if (data.cu >= 4 && data.cc >= 1 && data.cc <= 3) {
      //GW
      clasificacion.grupo = 'GW'

      if (data.fraccionGrava < 15) {
        clasificacion.nombre = 'Grava bien graduada'
      } else {
        clasificacion.nombre = 'Grava bien graduada con arena'
      }
    } else if (data.cu < 4 || data.cc < 1 || data.cc > 3) {
      //GP
      clasificacion.grupo = 'GP'

      if (data.fraccionGrava < 15) {
        clasificacion.nombre = 'Grava mal graduada'
      } else {
        clasificacion.nombre = 'Grava mal graduada con arena'
      }
    }
  } else if (data.fraccionFina > 12) {
    //gravas con finos
    if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
      //GM
      clasificacion.grupo = 'GM'

      if (data.fraccionGrava < 15) {
        clasificacion.nombre = 'Grava limosa'
      } else {
        clasificacion.nombre = 'Grava limosa con arena'
      }
    } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
      //GC
      clasificacion.grupo = 'GC'

      if (data.fraccionGrava < 15) {
        clasificacion.nombre = 'Grava arcillosa'
      } else {
        clasificacion.nombre = 'Grava arcillosa con arena'
      }
    }
  } else if (data.fraccionFina >= 5 && data.fraccionFina <= 12) {
    //simbolos dobles
    if (data.cu >= 4 && data.cc >= 1 && data.cc <= 3) {
      //GW...
      if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
        //GW - GM
        clasificacion.grupo = 'GW - GM'

        if (data.fraccionGrava < 15) {
          clasificacion.nombre = 'Grava bien graduada con limo'
        } else {
          clasificacion.nombre = 'Grava bien graduada con limo y arena'
        }
      } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
        //GW - GC
        clasificacion.grupo = 'GW - GC'

        if (data.fraccionGrava < 15) {
          clasificacion.nombre =
            'Grava bien graduada con arcilla (o arcilla limosa)'
        } else {
          clasificacion.nombre =
            'Grava bien graduada con arcilla y arena (o arcilla limosa y grava)'
        }
      }
    } else if (data.cu < 4 || data.cc < 1 || data.cc > 3) {
      //GP...
      if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
        //GP - GM
        clasificacion.grupo = 'GP - GM'

        if (data.fraccionGrava < 15) {
          clasificacion.nombre = 'Grava mal graduada con limo'
        } else {
          clasificacion.nombre = 'Grava mal graduada con limo y arena'
        }
      } else if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
        //GP - GC
        clasificacion.grupo = 'GP - GC'

        if (data.fraccionGrava < 15) {
          clasificacion.nombre =
            'Grava mal graduada con arcilla (o arcilla limosa)'
        } else {
          clasificacion.nombre =
            'Grava mal graduada con arcilla y arena (o arcilla limosa y arena)'
        }
      }
    }
  }
  return clasificacion
}
// debajo de la linea a
// data.ip < 0.73 * data.ll - 20
