const fs = require('fs');
const cheerio = require('cheerio');


try {
    const files = fs.readdirSync('.');
    const filtered = files.filter((fileName) => /topico/.test(fileName))
    const slugs = filtered.map((fileName) => {
      let data = fs.readFileSync(fileName, 'utf8');
      const $ = cheerio.load("<body>" + data + "</body>");
      let titulo = $('h2').text().replaceAll('\n','');

      let quests = $('.eBox');
      perg = quests.map( q => q.html());
      quests.remove();
      let obj = {titulo,sobra:$('body').html()};
      fs.writeFileSync(fileName + ".json",JSON.stringify(obj))
      console.log(fileName);
      //console.log($(':not(.questao *)').html())
    });
} catch (err) {
    console.error(err);
}