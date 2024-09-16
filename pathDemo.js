import path from 'path';
import url from 'url'

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

//extname()
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath));

//commonjs ima pristup __filename i __dirname
//ako koristimo es modules moramo napraviti sami

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);


// join() -> Samo prosljedimo argumente i on ce postaviti ispravne delimitre npr na macu / na win \ 
const doPublica = path.join(__dirname, 'public', 'index.html')
console.log(doPublica);

const doPublica2 = path.resolve(__dirname, 'public', 'index.html')
console.log(doPublica2);



