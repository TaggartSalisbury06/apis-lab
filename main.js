const resBtn = document.querySelector('button')

let baseURL = 'https://swapi.dev/api/'

let butFunc = () => {
  axios.get(`${baseURL}planets/2`).then((res) => {
    for(let i = 0; i < res.data.residents.length; i++){
      axios.get(`${res.data.residents[i]}`).then((res) => {
        
        let newH2 = document.createElement('h2')
        newH2.textContent = res.data.name
        document.querySelector('body').appendChild(newH2)
      }).catch((e) => console.log(e))
    }
  }).catch((e) => console.log(e))
}

resBtn.addEventListener('click', butFunc)