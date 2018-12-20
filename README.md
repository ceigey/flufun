# Flufun

A functional programming library for JavaScript and TypeScript

## I want to try this out!
This is not ready yet (both conceptually and in terms of implementation)
I recommend using the following if anything here sounds interesting:

* PureScript and ReasonML
* [Sanctuary](https://github.com/sanctuary-js/sanctuary) for JavaScript
* [Purify](https://github.com/gigobyte/purify) for TypeScript

Alternatively, wait ~3 years for the ECMAScript [pipe](https://github.com/tc39/proposal-pipeline-operator) and [pattern matching](https://github.com/tc39/proposal-pattern-matching) proposals to reach [stage 3](https://github.com/tc39/proposals), and wait for TypeScript or flow to [implement](https://github.com/Microsoft/TypeScript/issues/17718#issuecomment-341357806) these features, as that would make this library redundant.

## Main goals

To create a "standard library" of objects and functions which box native JavaScript data and provide a method-chaining interface to act on said data.

Ultimately, this should allow method chaining in complete lieu of pipes, and avoid the need for a lot of code branching.

## Additional goals

* To have fun
* To learn about [Fantasy Land](https://github.com/fantasyland/fantasy-land) and [Static Land](https://github.com/rpominov/static-land)
* To learn about what lies beyond those specifications
* To make JavaScript more Scala-y but without me having to learn how SBT works
* To provide a proof of concept for this kind of programming in general
* To sketch out some ideas that someone hopefully more capable can use

## Example of something that doesn't exist yet

```typescript
const nine =
  Num.from(9) // alternatively Num.of(9) but... (1)
    .add(10) // Semiring `+`
    .times(2) // Semiring `*`
    .minus(3) // shorter than `subtract`? (2)
```
(1) _I don't want to give the impression that Num is necessarily a [Applicative](http://www.tomharding.me/2017/04/17/fantas-eel-and-specification-9/)_
(2) _I'm not sure if there's some rules about etymological consistency I'm breaking here. All of these terms have a lot of synonyms in colloquial mathematics, I'm just going for the shorter ones._

## Inspirations
* [Purify](https://gigobyte.github.io/purify/)
* [Sanctuary](https://sanctuary.js.org)
* Tom Harding's [Fantas, Eel, and Specification explanations](http://www.tomharding.me/fantasy-land/)
* [Fluture](https://github.com/fluture-js/Fluture)
* [fp-ts](https://github.com/gcanti/fp-ts)
* [Folktale](https://folktale.origamitower.com)
* [Scala](https://www.scala-lang.org/api/current/)
* The JavaScript functional programming community