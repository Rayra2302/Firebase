import Head from 'next/head'
import { app, database } from '../service/firebase'
import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'

const contato = collection(database, 'contato')

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

const [lista,setLista] = useState([])
const read = ()=>{
  getDocs(query(contato,orderBy('nome','desc')))
  .then((data)=>{
    setLista(data.docs.map((item)=>{
      return{...item.data(),id:item.id}
    }))    
  }
  )
useEffect(()=>{
  read()
},[])
}

