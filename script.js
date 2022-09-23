
const setSquareSize= (w,h) =>{
  if(window.innerHeight > window.innerWidth){
    $('.square').css( "width", w/4);
    $('.square').css( "height", w/4 );
  }else{
    $('.square').css( "width", h/5);
    $('.square').css( "height", h/5 );
  }
   
}

window.onload = function() {
    const width = document.querySelector('.mainContainer').clientWidth;
    const height = document.querySelector('.mainContainer').clientHeight;
    setSquareSize(width,height);
    console.log("Hola");
    
    console.log(width," + ", height);
   
    

      const redSquare = document.querySelector('.square.red');
      const greenSquare = document.querySelector('.square.green');
      const yellowSquare = document.querySelector('.square.yellow');
      const blueSquare = document.querySelector('.square.blue');
      const squareArray=[redSquare,greenSquare,yellowSquare,blueSquare];
      for(let i=0;i<squareArray.length;i++){
        squareArray[i].addEventListener("click", function() {
          switch(i){
            case 0: console.log("Red");
                    break;
            case 1: console.log("Green");
                    break;
            case 2: console.log("Yellow");
                    break;
            case 3: console.log("Blue");
                    break;
            default: break;
          }
          
        }); 
      }

    };  




const signs = document.querySelectorAll('.titleContainer')
const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})


const updatePattern = (patternArray, max) => (
  if(patternArray.length==0){
    
  }
)

