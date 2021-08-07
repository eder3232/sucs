export default class Data {
  constructor(ret4, ret200, organico, cc, cu, ll, lp) {
    this.ret4 = ret4
    this.ret200 = ret200
    this.organico = organico
    this.cc = cc
    this.cu = cu
    this.ll = ll
    this.lp = lp

    this.ip = this.ll - this.lp
    this.fraccionFina = 100 - this.ret200
    this.fraccionGruesa = this.ret200
    this.fraccionGrava = this.ret4
    this.fraccionArena = this.ret200 - this.ret4
  }
}
