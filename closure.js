function outerFunction() {

  function innerFunction() {
    console.log('This is the inner function')
  }
  return innerFunction;
}
// first a outerFunction er vitore ekta innerFunction return kore then outer Function ke ekta result variable er vitore rakha hoise. tarpor result variable ke call kora hoise.
const result = outerFunction(); 
// result()




function counter(owner) {

    let count = 0;
  function increment() {
    count = count + 1;
    console.log('Value of count', owner, count)
  }
  return increment
}

// const pabnaCounter = counter('Pabna Express');
// pabnaCounter();
// pabnaCounter();
// pabnaCounter();
// const cLine = counter('C Line');
// cLine()
// cLine()
// cLine()
// pabnaCounter()
// pabnaCounter()
// cLine()
// cLine()

// const counter1 = counter();
// // console.log(counter1) // vitore fucntion ke dekhano hoise
// counter1();
// counter1();
// counter1();



function counter(owner) {
  let count = 0;
  function increment() {
    count = count + 1;
    console.log('Value of count', owner, count)

  }
  return increment;
}

const sharkar = counter('Sharkar Express');
sharkar()
sharkar()
sharkar()
const shaymoli = counter('Shaymoli Express');
shaymoli()
shaymoli()
shaymoli()
sharkar()