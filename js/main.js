import { Todo } from './components/Todo.js';


const randomUzduotys = new Todo('Random uzduotys');
const namuDarbai = new Todo('Namu darbai');


randomUzduotys.add('sukurti pirma uzduoti');
randomUzduotys.add('Uzmaisyti tesla');
randomUzduotys.add('Nusiskusti');
namuDarbai.add('Sutvarkyti Serloka')

console.log(randomUzduotys);
console.log(namuDarbai);


randomUzduotys.summary();
namuDarbai.summary();