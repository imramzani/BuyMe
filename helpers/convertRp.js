function convertRp (num) {
  return num.toLocaleString('id', {
    style: 'currency', currency: 'IDR'
  })
} 

module.exports = convertRp