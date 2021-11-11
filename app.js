const board = document.querySelector('#board')
const squaresNumber = 500
const colors =['#d90bb6', '#0be7f3', '#013080', '#041686','#449fce', '#6e227c']

for(let i=0;i<squaresNumber;i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=>
        setColor(square))
    square.addEventListener('mouseleave',()=>
        removeColor(square))

    board.append(square)
}

function setColor(square){
    const color = getRandomeColor()
    square.style.backgroundColor= color
    square.style.boxShadow= `0 0 2px ${color}, 0 0 10px ${color}`
    square.style.backdropFilter= blur(10)
}

function removeColor(square){
    square.style.backgroundColor= '#1d1d1d'
    square.style.boxShadow= `0 0 2px #1d1d1d`
}

function getRandomeColor(){
    return colors[Math.floor(Math.random()* colors.length)]
}



