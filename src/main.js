const div = dom.find('#test1>.red')[0]
dom.style(div,'color','red')
console.log(div)
dom.style(test2,'border','2px solid black')
console.log(test2)

const divList = dom.find('#t')
dom.each(divList,(n)=>console.log(n))
