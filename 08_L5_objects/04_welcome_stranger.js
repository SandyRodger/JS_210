function greetings(name, details) {
  console.log(`Hello, ${name.join(' ')}! Nice to have a ${details.title} ${details.occupation} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// Hello, John Q Doe! Nice to have a Master Plumber around.