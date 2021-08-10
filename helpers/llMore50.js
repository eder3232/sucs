export default function llMore50(data) {
  let clasificacion = {}
  if (!data.organico) {
    //inorganico
    if (data.ip >= 0.73 * data.ll - 20) {
      //CH
      clasificacion.grupo = 'CH'

      if (data.ret200 < 30) {
        if (data.ret200 < 15) {
          clasificacion.nombre = 'Arcilla guesa'
        } else {
          if (data.fraccionArena >= data.fraccionGrava) {
            clasificacion.nombre = 'Arcilla guesa con arena'
          } else {
            clasificacion.nombre = 'Arcilla guesa con grava'
          }
        }
      } else {
        if (data.fraccionArena >= data.fraccionGrava) {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Arcilla guesa arenosa'
          } else {
            clasificacion.nombre = 'Arcilla guesa arenosa con grava'
          }
        } else {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Arcilla guesa gravosa'
          } else {
            clasificacion.nombre = 'Arcilla guesa gravosa con arena'
          }
        }
      }
    } else if (data.ip < 0.73 * data.ll - 20) {
      //MH
      clasificacion.grupo = 'MH'

      if (data.ret200 < 30) {
        if (data.ret200 < 15) {
          clasificacion.nombre = 'Limo elastico'
        } else {
          if (data.fraccionArena >= data.fraccionGrava) {
            clasificacion.nombre = 'Limo elastico con arena'
          } else {
            clasificacion.nombre = 'Limo elastico con grava'
          }
        }
      } else {
        if (data.fraccionArena >= data.fraccionGrava) {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Limo elastico arenoso'
          } else {
            clasificacion.nombre = 'Limo elastico arenoso con grava'
          }
        } else {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Limo elastico gravoso'
          } else {
            clasificacion.nombre = 'Limo elastico gravoso con arena'
          }
        }
      }
    }
  } else {
    //organico
    //OH
    clasificacion.grupo = 'OH'

    if (data.ip >= 0.73 * data.ll - 20) {
      if (data.ret200 < 30) {
        if (data.ret200 < 15) {
          clasificacion.nombre = 'Arcilla organica'
        } else {
          if (data.fraccionArena >= data.fraccionGrava) {
            clasificacion.nombre = 'Arcilla organica con arena'
          } else {
            clasificacion.nombre = 'Arcilla organica con grava'
          }
        }
      } else {
        if (data.fraccionArena >= data.fraccionGrava) {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Arcilla organica arenosa'
          } else {
            clasificacion.nombre = 'Arcilla organica arenosa con grava'
          }
        } else {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Arcilla organica gravosa'
          } else {
            clasificacion.nombre = 'Arcilla organica gravosa con arena'
          }
        }
      }
    } else if (data.ip < 0.73 * data.ll - 20) {
      if (data.ret200 < 30) {
        if (data.ret200 < 15) {
          clasificacion.nombre = 'Limo organico'
        } else {
          if (data.fraccionArena >= data.fraccionGrava) {
            clasificacion.nombre = 'Limo organico con arena'
          } else {
            clasificacion.nombre = 'Limo organico con grava'
          }
        }
      } else {
        if (data.fraccionArena >= data.fraccionGrava) {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Limo organico arenosa'
          } else {
            clasificacion.nombre = 'Limo organico arenosa con grava'
          }
        } else {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Limo organico gravoso'
          } else {
            clasificacion.nombre = 'Limo organico gravoso con arena'
          }
        }
      }
    }
  }
  return clasificacion
}
