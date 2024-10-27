import './App.css';
import { HeaderComponent } from './HeaderComponent';
import {  pipe } from 'lodash/fp';
const user = {
   firstName: "John",
   lastName: "Doe",
};
function likeMe() {
  return console.log('hello');
}
let lM = likeMe
lM();
let input = "  SAubscribe   "
const trim = str => str.trim()
const toLowerCase = str => str.toLowerCase()
const result = trim(toLowerCase(input));
console.log(result);
const transform = pipe(trim,toLowerCase);
console.log(transform(input));
//likeMe();
function App() {
  console.log(user);
  return (
    <HeaderComponent name="Raja" age={35} isMarried={true} />
  );
}

export default App;
