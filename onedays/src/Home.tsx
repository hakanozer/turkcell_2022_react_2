import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'
import { IUser } from './models/IUser'

function Home() {

  let data = "Ahmet"

  // state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailx:any = 'ali@mail.com' 
  const send = () => {
    console.log( email, password );
    data = "Kemal"
    console.log(data);
    if ( email === 'ali@mail.com' && password === '12345' ) {
        alert('Login Success')
    }else {
        alert('Login Fail')
    }
  }

  // variable
  const name = 'Ali' // Sabit
  let surname = 'Bilmem' // Daha sonradan değiştirilme 
  surname = 'Bilirim'
  var no = 20
  no = 21 // Daha sonradan değişim, let ile gövde içindeki kullanımı farklı olur.

  if ( true ) {
    let a = 'a'
    var b = 'b' // gövde dışında kullanıma uygundur
  }
  console.log( b );


  // variable - type
  const age:number = 40

  // Array
  const cities:string[] = [ 'İstanbul', 'Ankara', 'İzmir', 'Adana', 'Antalya' ]
  // add
  cities.push('Samsun')
  cities.push('İzmit')
  // Remove
  cities.splice(0,2) // 0.index elemanını sil ve sadece kendisini sil

  // object
  const user = { name: 'Erkan', surname: 'Bilirim', age: 30, status: false }

  const user1:IUser = {
      name: 'Serkan',
      surname: 'Bilki',
      email: 'serkan@mail.com',
      age: 40,
      status: true
  }

  // html5 form send
  const sendForm = (evt:React.FormEvent) => {
    evt.preventDefault()
    console.log( email, password );
  }

  return (
    <div>

        <NavBar/>

        <h3> { user.name + ' ' + user.surname } </h3>
        <h2> { user1.email + ' ' + user1.age } </h2>
        
        <label htmlFor='email' >E-Mail</label>
        <input onChange={(evt) => setEmail( evt.target.value ) } id='email'></input>
        
        <label htmlFor='password' >Password</label>
        <input onChange={(evt) => setPassword( evt.target.value ) } id='password'></input>
       
        <button onClick={ send } >Send</button>

        <h2> { email } </h2>
        <h2> { data } </h2>

        <h1>Form Login</h1>
        <hr></hr>
        <form onSubmit={sendForm} >
          <input type='email' required placeholder='E-mail' onChange={(evt) => setEmail( evt.target.value ) } ></input>
          <input type='password' required placeholder='Password' onChange={(evt) => setPassword( evt.target.value ) } ></input>
          <button type='submit'>Send</button>
        </form>

        { cities.map(( item, index ) => 
            <li key={index}> { item } </li>
        )}
    </div>
  )

}

export default Home