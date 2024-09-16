//import fs from 'fs'
import fs from 'fs/promises'

// readFile() - callback //kada se datoteka procita poziva se callback funkcija -> async nacin
/*fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data)
});

// readFileSync() - Synchronous version
const data = fs.readFileSync('./test.txt', 'utf-8');
console.log(data)
*/

// readFile() - Promise .then()
/*fs.readFile('./test.txt', 'utf-8') 
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/

//readFile()
const readFile = async() => {
  try {
    const data = await fs.readFile('./test.txt', 'utf-8');
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}



//writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello I am editing this file')
    console.log('File editet')
  } catch (err){ 
  console.log(err)
  }
}

//appendFile()
const appendFile = async() => {
  try {
    await fs.appendFile('./test.txt', '\nThis is appended text')
    console.log('File appended too...')
  } catch (err) {
    console.log(err)
   
  }
}

writeFile();
appendFile()
readFile();

