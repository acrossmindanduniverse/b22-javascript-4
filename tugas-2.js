const reverseWords = (data) => {
  return new Promise((resolve, reject) => {
    const str = data.split(' ').reverse().toString()
    if (str) {
      resolve(str.replace(',', ' '))
    }else{
      reject(new Error)
    }
  })
}

const main = (key) => {
  reverseWords(key).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}

main('Saya belajar Javascript')