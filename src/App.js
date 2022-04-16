import './App.css';
import './theme.min.css';
import { useState } from 'react';

function App() {
  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('')
  

  function translate(text){
    return text.split(" ")
        .map((word) => {
            if (word.indexOf("ão") > 1) return word.replace("ão", "ión");
            
            if (word.length === 1 && word !== "é") return `l${word}`;

            word = word.replace("r", "rr");

            if (word.length > 2) word = word.slice(0, -1);
            
            return word;
        })
        .join(" "); 
    
  }
  
  function handlerInput({ target }){
    const { value } = target;
    setTextToTranslate(value);
    const translated = translate(value);
    setTranslatedText(translated);    
  }

  return (
    <div className="App">
      <div>
        <img src="./jacquin.jpg" alt="" className="fixed-bottom jacquin" />
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Uma pequena homenagem para o  GRAND CHEF Errrick Jacã</h2>
              </div>
            </div>
            <div className="row mt-4 ">
              <div className="col-lg-6">
                <div className="form-group has-label">
                  <label className="form-control-label">
                    Escreva seu texto
                  </label>
                  <textarea onInput={handlerInput} rows="1" className="form-control form-control-alternative" value={textToTranslate}></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group has-label">
                  <label className="form-control-label">Texto traduzido</label>
                  <h3>{translatedText}</h3>
                </div>
              </div>
            </div>
          </div>
          <footer className="text-center fixed-bottom mt-5  p-2"><small>Nenhum dad está send coletad, poda ficá tranquile :)</small></footer>
      </div>
    </div>
  );
}

export default App;
