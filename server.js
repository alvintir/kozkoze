
const translate = require('translate');
const express = require ('express');
const app = express()

app.set ('view engine', 'ejs')
app.use(express.static('public'))   

async function translateString( str, translateTo ) {

	translate.engine = 'google';
	const translated_string = await translate(str, translateTo);
	//console.log(translated_string);
    return translated_string
}



app.get ('/',(req,res)=>{
    let text ="Hello World"

    // English to Spanish
    let output = translateString(text, "ru")
    output
    .then((data) => {
        console.log(data)
        res.render('index', {Text:text,
            TranslatedText:data
    })
    
})
})

app.listen(3050,()=>console.log('server is listening on the port 3050'));