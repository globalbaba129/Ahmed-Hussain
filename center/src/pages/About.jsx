

import React from 'react'

function About() {
  return (
   <>
<div className="container mt-5">
  <h1>What is Linguestic Center </h1>
  <p>
    Linguestic is an American company With over 567 centers worldwide, 5 Centers in Pakistan since 2005. With 4 centers in Karachi 4 in Islamabad and 2 in Lahore, Linguestic has been helping the world communicate since 1880.
    With our unique Linguestic Method®, we ensure rapid progress in the language for both your personal and professional needs “Language for Life”.At Linguestic, we are committed to delivering our unique programs to the highest standard set internationally.
  </p>
  <div className="row">
    <div className="col-6">
      <img  src="https://images.pexels.com/photos/4497759/pexels-photo-4497759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='img-fluid' alt="" />
    </div>
    <div className="col-6">
      <h1>Online & Onsite Language Courses </h1>
      <h3>Effective. Flexible. Affordable.</h3>
      <p>Learning a new language has never been more accessible. Using the same proven techniques that we have pioneered over 120 years; we deliver a classroom experience in your living room.​
        We offer three different online options – Private, Group and On-Demand. No matter your budget, experience, or goals, we have a course for you.​</p>
        <button type="button" class="btn btn-outline-primary">Start Learning</button>

    </div>
  </div>
  <div className="row mt-5"> 
    <div className="col-6">
      <h1>IELTS & PTE CRASH CLASSES</h1>
      <p>
        Linguestic IELTS program is affiliated with the British Council which allows candidates to register and prepare for the highly recognized English proficiency exam from the comfort of our center.
        Every student who is trained by Linguestic for the IELTS exam is eligible to appear in a mock test which is conducted by the British Council itself.
      </p>
      <button type="button" class="btn btn-outline-primary">Start Learning</button>
    </div>
    <div className="col-6">
      <img src="https://images.pexels.com/photos/4497759/pexels-photo-4497759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={500} alt="" />
    </div>
  </div>
</div>

   </>
  )
}

export default About
