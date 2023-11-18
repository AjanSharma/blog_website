import React from 'react'
import '../styling/blogstesting.css'
import img1 from '../assets/images/homepage-img1.jpg'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Refactor Trading Application',
    github: '#',
    demo: 'This is the description of this blog. To read more about this click below button'
  },
  {
    id: 2,
    image: img1,
    title: 'Portfolio',
    github: '#',
    demo: 'This is the description of this blog. To read more about this click below button'
  },
  {
    id: 3,
    image: img1,
    title: 'Airbnb Clone',
    github: '#',
    demo: 'This is the description of this blog. To read more about this click below button'
  },
  {
    id: 4,
    image: img1,
    title: 'SSH implementation for device Configuration',
    github: '#',
    demo: 'This is the description of this blog. To read more about this click below button'
  },
  {
    id: 5,
    image: img1,
    title: 'Virtual Network Functions (VNF) automation in Openstack',
    github: '#',
    demo: 'This is the description of this blog. To read more about this click below button'
  },
  {
    id: 6,
    image: img1,
    title: 'Supervised Intrusion Detection System for Smart Home IoT devices',
    github: '#',
    demo: 'This is the description of this blog. To read more about this click below button'
  }
]

const Blogstesting = () => {
  return (
    <section id='portfolio'>
      <div id='blog_heading'>
        <h2>Recent Work</h2>
      </div>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} className='img_dim'/>
                </div>
                <h3>{title}</h3>
                <p>{demo}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Read</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Blogstesting