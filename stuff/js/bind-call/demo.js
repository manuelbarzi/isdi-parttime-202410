debugger

function printThis() { console.log(this) }

printThis()
window.printThis()

var peter = { name: 'Peter' }
peter.print = printThis
peter.print()

var wendy = { name: 'Wendy' }
wendy.print = printThis
wendy.print()

var printWendy = printThis.bind(wendy)
printWendy()

function bind(fun, ctx) {
    return function () {
        fun.call(ctx)
    }
}

var printWendy2 = bind(printThis, wendy)
printWendy2()