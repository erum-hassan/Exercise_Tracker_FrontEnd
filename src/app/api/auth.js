
import React  from 'react'

  async function auth(data) {
   const response = await fetch('https://vast-pear-antelope-fez.cyclic.app/auth/signup',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type':'application/json'
    }
   })
   const d = await response.json()
  //  console.log(d)
  const token = d.token
   localStorage.setItem('token', d.token);

  return token
}

async function login(data) {
  console.log(data)
  const response = await fetch('https://vast-pear-antelope-fez.cyclic.app/auth/login',{
   method:'POST',
   body:JSON.stringify(data),
   headers:{
     'Content-Type':'application/json'
   }
  })
  const d = await response.json()
 //  console.log(d)
 const token = d.token
  localStorage.setItem('token', d.token)

 return token
}


async function getAll(data){
  
  const d = await fetch('https://vast-pear-antelope-fez.cyclic.app/exercise/',{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      Authorization: `Bearer ${data}`
    }
  })
  const r = await d.json()
  return r
  }


  async function addExercise(data,token){
  
    console.log(data,token)
    const d = await fetch('https://vast-pear-antelope-fez.cyclic.app/exercise/',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const r = await d.json()
   
    return r
    }

    async function updateExercise(id,data,token){
      
      
      const d = await fetch(`https://vast-pear-antelope-fez.cyclic.app/exercise/${id}`,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const r = await d.json()
     
      return r
      }

      async function deleteExercise(id,token){
  
     
        const d = await fetch(`https://vast-pear-antelope-fez.cyclic.app/exercise/${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        const r = await d.json()
       
        return r
        }
        
  

      
  
 



export   {auth,getAll,login,addExercise,deleteExercise,updateExercise}
