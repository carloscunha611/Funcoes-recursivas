function fatoracao(num) {
  if (num % 2 === 0) {
    console.log(`
    ${num} | 2 (${num} / 2 = ${num / 2})
    `)
    fatoracao(num / 2)
  } else {
    console.log(`
    ${num} | ${num} (${num} / ${num} = ${num / num})

    ${num / num}
    `)
  }
}

fatoracao(200)
