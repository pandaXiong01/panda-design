import React, {FC, useState} from 'react'

const Form: FC<any> = () => {
    const [username, setUsername] = useState('');
    const onSubmit = () =>{
        console.log('onSubmit')
    }
    return (<form onSubmit={onSubmit}>

        <input value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
        <button type='submit'>Submit</button>
    </form>)
}

export default Form;