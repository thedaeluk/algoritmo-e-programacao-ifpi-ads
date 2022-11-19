import { input } from '../utils.js'

function main(){
   const n = Number(input('N: '))
   let pum = 1

   let i = 1
   let index = 1
   while (index <= n){
      console.log(pum, pum + i, pum + 2, 'PUM')
      pum = pum + 4
      index++
   }
}

main()