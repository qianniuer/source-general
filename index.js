state = {
    obj: {}
}

obj = {
    a: {
        b: 1,
        e: 3
    },
    c: {
        d: 2
    }
}

obj = {
    a__b: 1,
    a__e: 3,
    c__d: 2
}



obj.a__b > 1 ? 'a' : 'b'