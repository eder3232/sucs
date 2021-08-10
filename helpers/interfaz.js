export default function interfaz() {
  const data = {}

  const d = document
  const $ret4 = d.getElementById('ret4')
  const $ret200 = d.getElementById('ret200')
  const $organico2 = d.getElementById('organico2')
  const $cu = d.getElementById('cu')
  const $cc = d.getElementById('cc')
  const $ll = d.getElementById('ll')
  const $lp = d.getElementById('lp')

  data.ret4 = $ret4.value
  data.ret200 = $ret200.value
  data.organico = $organico2.checked
  data.cu = $cu.value
  data.cc = $cc.value
  data.ll = $ll.value
  data.lp = $lp.value
  return data
}
