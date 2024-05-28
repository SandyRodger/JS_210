function wantToVisit(museum, city) {
  return museum.includes('Computer')
      || museum.includes('Science')
      || museum.includes('Andy Warhol')
      || city === 'Amsterdam'
      ;
}

// Tests (should all print 'true')

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);

// My failure to find LS solution hinges on my belief that VVG and Andy Warhol are implicitly modern artits. However, VVG was post-impressionist. The last 2 tests failed for me because the museum names do not mention "modern" or "art". They could be museums about the artist private lives and not mention art.

// LS solution:

function wantToVisit(museum, city) {
  return  museum.includes('Computer')
       || museum.includes('Science')
       || (museum.includes('Modern')
          && museum.includes('Art')
          && (museum.includes('Andy Warhol')
             || city === 'Amsterdam'));
}

/*

My feedback:

I think the final two test cases should return true.

The logic in the problem's solution shows that we do not want to visit these museums because they are not modern art museums.

Modern art is a period from the 1860s to 1970s and so includes both Van Gogh and Warhol. Any museum about them must implicitly be a modern art museum.

Thanks!

*/