debugger
function count(min, max) {
    console.log(min)

    if (min < max)
        count(min + 1, max)
}

count(1, 5)