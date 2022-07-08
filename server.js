
//const translate = require('translate');
const express = require ('express');
const bodyParser = require('body-parser');
const translate = require('@vitalets/google-translate-api');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set ('view engine', 'ejs')
app.use(express.static('public'));
 

// async function translateString( str, translateTo ) {

// 	translate.engine = 'google';
// 	const translated_string = await translate(str, translateTo);
// 	//console.log(translated_string);
//     return translated_string
// }



// app.get ('/',(req,res)=>{
//     let msg ="Hello World"

//     // English to Spanish
//     let output = translateString(msg, "ru")
//     output
//     .then((data) => {
//         console.log(data)
//         res.render('index', {Text:msg,
//             TranslatedText:data
//     })      
    
// })
// })

app.get('/', (req, res) =>{
    let msg ="Hello World"
    let data="testing tranlation"
    res.render('index.ejs',{Text:msg,TranslatedOutput:data})
});

app.get ('/translate',(req,res)=>{
    res.render('translate',{translatedText:"",sourceText:""})
});

app.post('/translate', (req, res) => {  
    // get form data from the request body 
    const text = req.body.text
    const language = req.body.language
    translate(text, {to: language}).then(response => {
       res.render('translate.ejs', {sourceText:text,translatedText:response.text})
    }).catch(err => {
        console.error(err);
    });
})


app.get ('/synthesizer',(req,res)=>{
    res.render('synthesizer')
})

app.get ('/transcribe',(req,res)=>{
    res.render('transcribe')
})
app.get ('/Terms_and_conditions',(req,res)=>{
    res.render('Terms_and_conditions')
})


app.listen(3050,()=>console.log('server is listening on the port 3050'));