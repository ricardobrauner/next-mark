const cheerio = require('cheerio');
const fs = require('fs');

try {
  const data = fs.readFileSync('caderno.html', 'utf8');
  
  var topicos = data.split(/(?=<h2)/g);

  //console.log(topicos)
  topicos.forEach((top,i)=>{
    console.log(i);
    fs.writeFileSync(`topico${i}.txt`,top);
  })

  //const $ = cheerio.load(data);

//console.log($('div.description').html());


} catch (err) {
    console.error(err);
}
