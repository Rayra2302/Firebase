import { app, database } from '../service/firebase'
import { collection, addDoc} from 'firebase/firestore'
import { useState} from 'react'



//definir coleção

const contato = collection(database, 'contato')

export default function Home() {

  //hooks
  const[nome, SetNome]=useState('')
  const[email, SetEmail]=useState('')
  const[telefone, SetTelefone]=useState('')
  const[mensagem, SetMensagem]=useState('')



  //create

  const create = ()=>{

    addDoc(contato,

    {
      nome:nome,
      telefone:telefone,
      email:email,
      mensagem:mensagem

    }).then(()=>{

      SetNome('')
      SetEmail('')
      SetTelefone('')   
      SetMensagem('')
      read()

    })

  } 
  return (

    <>

            <input
             type="text" placeholder="Nome"
             className="form-control" required
             onChange={event=>SetNome(event.target.value)}
             value={nome}/>
            <input type="tel" placeholder="Telefone"
             className="form-control" required
             onChange={event=>SetTelefone(event.target.value)}
             value={telefone}/>
            <input type="text" placeholder="Email"
               className="form-control" required
               onChange={event=>SetEmail(event.target.value)}
               value={email}/>
              <textarea placeholder="Mensagem" className="form-control"
               required onChange={event=>SetMensagem(event.target.value)}
               value={mensagem}/>
              <input type="submit" value="Salvar" className="btn btn-outline-dark form-control" onClick={create}/>
  
      </>
  
    )
  
  }