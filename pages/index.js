import { useState } from 'react';
import Link from 'next/link';


function Home() {
    return <div>
        <h1>Home</h1>
    
      
        
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    <Link href="/tempo">
            <h4><a>Acessar acessar api tempo</a></h4>
        </Link>
    </div>
    
}

function Contador()
{
    const[contador,setcontador] = useState(1);
    return(
        <div>
            <div> {contador}</div>
            <button onClick={adicionarContador}>Adicionar contador</button>
        </div>
    )
    function adicionarContador(){
        setcontador(contador   + 1);
    }
}

export default Home
