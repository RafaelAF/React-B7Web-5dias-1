import { useState, KeyboardEvent } from 'react';
import * as C from './styles'

type Props = {
    onEnter: (taskname: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('')

    const handlekey = (e: KeyboardEvent) => {
        if((e.code == 'Enter' || e.code == 'NumpadEnter') && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }
    return (
        <C.Container>
            <div className='image'>+</div>
            <input 
                type="text"
                placeholder='Adicionar Tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)} 
                onKeyUp={handlekey}   
            />
        </C.Container>
    );
}