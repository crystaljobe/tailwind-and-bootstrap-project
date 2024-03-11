import { useEffect, useState } from "react";
import axios from 'axios';

export default function Input() {

    const [textToTranslate, setTextToTranslate] = useState(''); //set current input
    const [prevEngTranslatedText, setPrevEngTranslatedText] = useState([]); //set prev english trans text
    const [selectedLanguage, setSelectedLanguage] = useState(''); //set language
    const [prevTranslatedText, setPrevTranslatedText] = useState([]) //set prev translated text

    const handleSubmit = async (e) => {
        const apiUrl = `https://api.funtranslations.com/translate/${selectedLanguage}.json?text=${encodeURIComponent(textToTranslate)}`; //api url

        e.preventDefault();  // prevent default reload

        if (!textToTranslate || ! selectedLanguage) {
            alert('Please select a language and enter some text to translate')
            return
        }
        try {
            const response = await axios.get(apiUrl); //get response translation from api
            const translatedText = response.data.contents.translated; //                     
            const prevEngTranslations = [...prevEngTranslatedText, textToTranslate];
            setPrevEngTranslatedText(prevEngTranslations);
            const prevTranslations = [...prevTranslatedText, translatedText]
            setPrevTranslatedText(prevTranslations)
        } 
        catch (error) {
            console.error('Error getting translation:', error)
        }    
    }

    // set text using handle change event
    function handleTextChange(e) {
        setTextToTranslate(e.target.value)
    }

    // set language using handle change event
    function handleLanguageChange(e) {
         setSelectedLanguage(e.target.value)
    }

    // add useEffect for onChange and Form data

    return (
        <>
        <form id="inputForm" onSubmit={handleSubmit} className='p-10 grid grid-cols-4 grid-rows-4[2rem] flex-auto justify-center align-start gap-y-3'>

            <div className="grid-rows-subgrid row-span-1 col-start-2 col-span-2 self-end">
                <label className="font-semibold italic text-rose-50 flex-justify-center">
                    Enter text you would like translated:
                </label>
            </div>

            <div className="grid-rows-subgrid row-span-1 col-start-2 col-span-2 justify-items-stretch ">
                <textarea
                    value={textToTranslate} 
                    onChange= {handleTextChange} 
                    name="textContent"  
                    rows={5} cols={40} 
                    placeholder="What would you like to translate?"
                    className="flex-grow border-double border-4 border-indigo-900 shadow-xl italic font-light hover:bg-teal-200"
                    />
            </div>

            <div className="grid-rows-subgrid row-span-1 col-start-2 col-span-2 self-start">
                <select
                value={selectedLanguage} 
                onChange= {handleLanguageChange}
                name="language" 
                className="flex-justify-center border-double border-4 border-indigo-900 shadow-xl w-80">
                    <option value="klingon">Klingon</option>
                    <option value="dothraki">Dothraki</option>
                    <option value="orcish">Orcish</option>
                    <option value="minion">Minion</option>
                    <option value="pirate">Pirate</option>
                    <option value="morse">Morse Code</option>
                </select>
            </div>
                
            <div className="grid-rows-subgrid row-span-1 col-start-2 col-span-2 self-end">
                <button type="submit" className="flex-justify-center h-10 px-5 m-2 text-md text-justify font-semibold border-double border-4 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:shadow-md hover:from-pink-500 hover:to-yellow-500 ...">
                    Translate 
                </button> 
            </div>
        </form>
        <div>
        {prevTranslatedText.length > 0 && (
            <h3>{prevTranslatedText[prevTranslatedText.length - 1]}</h3>)}
        </div>
        
    </>
    )
}


