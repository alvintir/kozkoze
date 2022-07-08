var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const transcribe= new SpeechRecognition();
transcribe.interimResults=true;
function chooselanguage() {
    var language=document.getElementById("lang");
    transcribe.lang =
    language.options[language.selectedIndex].value;
    console.log( transcribe.lang)
    return transcribe.lang
  }
transcribe.lang='chooselanguage()';

let p= document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

transcribe.addEventListener('result',event=>{ 
    const transcript = Array.from(event.results)
    .map (result=>result[0])
    .map (result=>result.transcript)
    .join('');

    console.log(event);
    p.textContent = transcript;

      if (event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
});

  transcribe.addEventListener('end', transcribe.start);

  transcribe.start();