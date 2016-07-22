# Frontend Test For MBA Company



# Installation

Clone this repo
`npm i` and `npm start` and you are ready!

## Questions & Answers

1. Why angular 2?

Well lets start by the technologies I have used/experimented with.

Between Angular 1 and React + Flux/Redux for simplicity for this
test I would have go for angular 1, as it has built in form validation
systems and pipes to use for example for sorting, as is a very small
example of code you are never going to fall in the typical issues
seen in Angular 1 projects with you can have cyclic dependecies between
components or too many variables being digested by the digest cycle resulting
in a lot of slow DOM operations.

With react using the pattern flux the positive things over angular are
the one way flow, that simplifies readability of the code and sync between
components without interdependecies and for me the best of the react properties,
use of the shadow DOM, so all the DOM manipulation is made in an extremely efficient way.

So, Now why Angular 2?

Well is a technology I read about and I was very interested experimenting
with it, furthermore, it has the best of both worlds (React/Angular) as it is build thinking on following
flux patterns to evade previous problems with interdependencies and it has all the sugar that a full framework as
angular gives you (pipes, directives, routing, services...).


2. Problems found using angular 2

It is a technology in a very early stage, it is still in RC4, so there is no much documentation and is difficult
to find quick solutions to the problems.

Is a massive Framework and is completely different to Angular 1, it is a completely new Framework, that only have some
concepts in common with angular 1, so I spent most of the time of the test learning ang2 and typescript,
experimenting and refactoring ideas.

I had problems with changes in the form API as it has been changed from RC1 and most of the documentation I was using
seems to be from early betas or RC1, so until I realised about this change I lost quite a lot of time.

Some of the stuff I was expecting to have like the pipe sortBy from ang 1 has been removed from ang 2 for performance
reasons...

For all this reasons I have been unable to finish the test in such a short amount of time.

3. Style decisions

I used bootstrap for the design and griding system so there was no reason to have SASS/LESS in the project as I keep
bootstrap styling and component based styling provided by angular 2.

As the Actor Salary form design isn't very good for mobile devices, I took the decision of give it another look for
small screens, making sure that The user is able to identify what are they writing in each input and they have enough
space for it in mobile vertical view.

Kept default margin/spacing of bootstrap components themselves, so it might vary from the UX wireframe.
