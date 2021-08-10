export default function llLess50(data) {
  let clasificacion = {}
  if (!data.organico) {
    //inorganico
    if (data.ip > 7 && data.ip >= 0.73 * data.ll - 20) {
      //CL
      clasificacion.grupo = 'CL'

      if (data.ret200 < 30) {
        if (data.ret200 < 15) {
          clasificacion.nombre = 'Arcilla mal gradada'
        } else {
          if (data.fraccionArena >= data.fraccionGrava) {
            clasificacion.nombre = 'Arcilla mal gradada con arena'
          } else {
            clasificacion.nombre = 'Arcilla mal gradada arenosa'
          }
        }
      } else {
        if (data.fraccionArena >= data.fraccionGrava) {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Arcilla mal gradada arenosa con grava'
          } else {
            clasificacion.nombre = 'Arcilla mal gradada gravosa'
          }
        } else {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Arcilla magra gravosa'
          } else {
            clasificacion.nombre = 'Arcilla magra gravosa con arena'
          }
        }
      }
    } else if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
      //ML
      clasificacion.grupo = 'ML'

      if (data.ret200 < 30) {
        if (data.ret200 < 15) {
          clasificacion.nombre = 'Limo'
        } else {
          if (data.fraccionArena >= data.fraccionGrava) {
            clasificacion.nombre = 'Limo con arena'
          } else {
            clasificacion.nombre = 'Limo con grava'
          }
        }
      } else {
        if (data.fraccionArena >= data.fraccionGrava) {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Limo arenoso'
          } else {
            clasificacion.nombre = 'Limo arenoso con grava'
          }
        } else {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Limo gravoso'
          } else {
            clasificacion.nombre = 'Limo gravoso con arena'
          }
        }
      }
    } else if (data.ip > 4 && data.ip < 7 && data.ip >= 0.73 * data.ll - 20) {
      //CL - ML
      clasificacion.grupo = 'CL - ML'

      if (data.ret200 < 30) {
        if (data.ret200 < 15) {
          clasificacion.nombre = 'Arcilla limosa'
        } else {
          if (data.fraccionArena >= data.fraccionGrava) {
            clasificacion.nombre = 'Arcilla limosa con arena'
          } else {
            clasificacion.nombre = 'Arcilla limosa con grava'
          }
        }
      } else {
        if (data.fraccionArena >= data.fraccionGrava) {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Arcilla limo arenosa'
          } else {
            clasificacion.nombre = 'Arcilla limo arenosa con grava'
          }
        } else {
          if (data.fraccionGrava < 15) {
            clasificacion.nombre = 'Arcilla limosa cubierta de grava'
          } else {
            clasificacion.nombre = 'Arcilla grava limosa con arena'
          }
        }
      }
    }
  } else {
    //organico
    if (data.ip < 0.9 * (data.ll - 8)) {
      //OL
      clasificacion.grupo = 'OL'

      if (data.ip >= 4 && data.ip >= 0.73 * data.ll - 20) {
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
      } else if (data.ip < 4 || data.ip < 0.73 * data.ll - 20) {
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
  }
  return clasificacion
}
