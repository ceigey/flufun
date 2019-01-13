export {}

class Functor<T> {
    data: T
    ownClass: { new <U>(x: U): Functor<U> }

    constructor(value: T) {
        this.data = value
        this.ownClass = Functor
    }

    map<U>(f: (x: T) => U) {
        return new this.ownClass(
            f(this.data)
        )
    }
}

class Pipe<T> extends Functor<T> {
    // ownClass: <C extends { new <U>(x: U): Functor<U> }>

    constructor(startValue: T) {
        super(startValue)
        this.ownClass = Pipe
    }

    toFunctor() {
        return new Functor<T>(this.data)
    }
}

const F = new Pipe(1)
    .map(x => x * 2)
    .map(x => `${x}`)
    .map(Number.parseInt)
    .map(x => '' + x)
    .map(x => 'aaaa' + x)
    .map(x => 'aaaa' + x)
    .map(Number.parseInt)
    .map(x => x === NaN ? 123 : 'number!')
    .map(x => typeof x === 'number' ? `${x}` : `${x}`)
// .toFunctor()


interface IFunctor2<T, U> {
    map: <U, V>(f: (x: T) => U) => IFunctor2<U, V>
}

// const Functor2 = <T, U>(startValue: T)
//   : IFunctor2<T, U> => ({
//       map <V>(f: (x: T) => U): IFunctor<U, V> {
//           return new this (startValue)
//       }
//   })
