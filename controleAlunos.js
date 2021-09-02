let alunos = ['Priscila' , 'Mariana', 'Daniel', 'Rafael', 'Sabrina', 'Assis', 'Elaine']


//Uso do for
console.log('Uso do "for"')
for(let i = 0 ; i < alunos.length; i++){
    if(i == 0){
        console.log('Zero  -> Número ' + i )
    }else if( i % 2 == 0){
        console.log('Par   -> Número ' + i )
    }else{
        console.log('Ímpar -> Número ' + i )
    }
}

console.log('----------------------------------------------')

//Uso do for of
console.log('Uso do "for of"')
for(const indice of alunos.keys()){
    if(indice == 0){
        console.log('Zero  -> Número ' + indice )
    }else if( indice % 2 == 0){
        console.log('Par   -> Número ' + indice )
    }else{
        console.log('Ímpar -> Número ' + indice )
    }
}

console.log('----------------------------------------------')

//Listagem de alunos com for of
console.log('Listagem de alunos com uso do "for of"')
let lista = ''
for(const aluno of alunos){
    lista += aluno + ' '
}
console.log(lista)

console.log('----------------------------------------------')

//Uso do for in
console.log('Uso do "for in"')
for(const id in alunos){
    if(id == 0){
        console.log('Zero  -> Número ' + id)
    }else if( id % 2 == 0){
        console.log('Par   -> Número ' + id)
    }else{
        console.log('Ímpar -> Número ' + id)
    }
}

console.log('----------------------------------------------')

//Uso do while
console.log('Uso do "while"')
let valor = 0
while(valor < alunos.length){
    if(valor == 0){
        console.log('Zero  -> Número ' + valor)
    }else if( valor % 2 == 0){
        console.log('Par   -> Número ' + valor)
    }else{
        console.log('Ímpar -> Número ' + valor)
    }

    valor++
}

console.log('---------------------------------------------')

//Uso do Do while
console.log('Uso do "Do while"')
let contador = 0
do{

    if(contador == 0){
        console.log('Zero  -> Número ' + contador )
    }else if( contador % 2 == 0){
        console.log('Par   -> Número ' + contador )
    }else{
        console.log('Ímpar -> Número ' + contador )
    }

    contador++

}while(contador < alunos.length)


console.log('---------------------------------------------')

//Uso do for each
console.log('Uso do "for each"')

alunos.forEach((aluno, indice) => {
    if(indice == 0){
        console.log('Zero  -> Número ' + indice + ' -> ' + aluno)
    }else if( indice % 2 == 0){
        console.log('Par   -> Número ' + indice + ' -> ' + aluno)
    }else{
        console.log('Ímpar -> Número ' + indice + ' -> ' + aluno)
    }
})

