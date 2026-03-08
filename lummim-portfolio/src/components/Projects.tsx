import { useEffect, useState } from "react"

type Repo = {
  id:number
  name:string
  html_url:string
  description:string
}

const Projects = () => {

  const [repos,setRepos] = useState<Repo[]>([])

  useEffect(()=>{
    fetch("https://api.github.com/users/Lumim/repos")
      .then(res=>res.json())
      .then(data=>setRepos(data.slice(0,6)))
  },[])

  return (

    <section style={{padding:"60px"}}>

      <h2 style={{fontSize:"32px", marginBottom:"40px"}}>
        GitHub Projects
      </h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px"
      }}>

        {repos.map(repo=>(
          <div
          key={repo.id}
          style={{
            background:"#1e293b",
            padding:"20px",
            borderRadius:"10px"
          }}
          >

            <h3>{repo.name}</h3>

            <p style={{opacity:0.7}}>
              {repo.description || "No description"}
            </p>

            <a
              href={repo.html_url}
              style={{color:"#60a5fa"}}
            >
              View Repository
            </a>

          </div>
        ))}

      </div>

    </section>

  )
}

export default Projects