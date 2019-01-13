type BinaryFunction <A, B> =
    (a: A) => B

interface IFunctor <A> {
    map: <B> (f: BinaryFunction <A, B>) => IFunctor <B>
}

const map = <A, B> (f: BinaryFunction <A, B>) =>
    (a: A) =>
        f (a);

// Challenge now is to somehow smoosh map into a chainable API.

// <A,B>(f: BinaryFunction<A,B>) => (a: A) => { map: map (f) (a) }
// const MoreBasicThanFunctor = (f)

const Functor = <A> (a: A) => ({
        map: <B> (f: BinaryFunction <A, B>): IFunctor <B> =>
            Functor (map (f) (a))
})

const testBinary:
    BinaryFunction<number, string> =
    (a) => a.toString()

const testFunctor = Functor (1)
    .map (Number.toString)
    .map (Number.parseInt)
    .map (x => x * 2)
    .map (x => x * 2)
    .map (x => x * 2)
    .map (Number.toString)
    .map (Number.parseInt)
    .map (Number.parseInt)


const F = Functor(1)
    .map(x => x * 2)
    .map(x => `${x}`)
    .map(Number.parseInt)
    .map(x => '' + x)
    .map(x => 'aaaa' + x)
    .map(x => 'aaaa' + x)
    .map(Number.parseInt)
    .map(x => x === NaN ? 123 : 'number!')
    .map(x => typeof x === 'number' ? `${x}` : `${x}`)