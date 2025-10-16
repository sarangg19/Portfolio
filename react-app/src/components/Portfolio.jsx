import React from 'react'
import sarang from '../assets/sarang-post.jpeg'
import redhat from '../assets/redhat-image.png'
import cousera from '../assets/cousera-image.png'

const Card = ({img, title, subtitle}) => (
  <div className="card">
    {img && <img src={img} alt={title} style={{width:60,height:60,borderRadius:8,objectFit:'cover'}}/>}
    <div>
      <strong style={{display:'block',color:'#111827'}}>{title}</strong>
      <small style={{color:'#374151'}}>{subtitle}</small>
    </div>
  </div>
)

export default function Portfolio(){
  return (
    <div className="container">
      <div className="intro">
        <div className="avatar"><img src={sarang} alt="Sarang" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
        <h1 style={{color:'#111827'}}>Sarang Gawade</h1>
        <p style={{color:'#374151'}}>Web & Software Enthusiast | Lifelong Learner</p>
      </div>

      <section>
        <h2 style={{color:'#0f172a'}}>Certificates</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <Card img={redhat} title="Redhat Academy" subtitle="2023" />
          <Card img={cousera} title="Coursera" subtitle="PCU — 2024" />
        </div>
      </section>
    </div>
  )
}
