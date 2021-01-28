// возбуждение исключения оператором "throw"
// перехвать командой "catch" (точнее связкой операторов "try-catch-finally")

function testErrorFunc(a, func) {
    let x;
    try {
        function func(a);

    } catch(er) {

        x = er.name;
    }
    return x;
}


