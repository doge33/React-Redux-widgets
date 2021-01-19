import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Convert({language, text}) {

  const [translated, setTranslated] = useState('');

  useEffect(() => {
    //make helper async arrow function
    const doTranslation = async () => {
      //leaving the request body (2nd argument) empty cuz this is how google translate api works
      const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
        }
      })
      setTranslated(data.data.translations[0].translatedText);
    }

    doTranslation();

  }, [language, text]);

  return (
    <div>
      <h1 className="ui header"> {translated} </h1>
    </div>
  )
}
