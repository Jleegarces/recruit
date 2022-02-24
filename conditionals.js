let name = 'jon';
let rank = 'Captain';
let age = 28;
age++;

if (age < 18) {
  console.log('you are too young for the military!')
} else if (name === 'Rugen' && rank === 'Count') {
  console.log('My name is Inigo Montoya,  you killed my father, prepare to die.')
} else if (rank === 'captain') {
  console.log(`Aye Aye Captain ${name}`);
} else if (rank === 'Private' && age > 40) {
  console.log(`What have you been doing with your life ${name}`)
}else {
  console.log(`Hello ${rank} ${name}, I cannot wait to celebrate your ${age}th birthday next year!`)
}
