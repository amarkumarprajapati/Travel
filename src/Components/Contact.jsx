import React from 'react'

const Contact = () => {
  return (
    <div>
       <div className='color' id='Contact'>
        <div className='color1'>
         <div className='firets'>
          <h1>Contact</h1>
          <p>Street 2017 Harron Drive 
            city: Baltimore
            State: Maryland
            Zip: 230100
            Conatct number: 443-498-71558
          </p>
        </div>
        <div className='second'>
          <h1>Menu</h1>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Our blog</h4>
          <h4>Pricing</h4>
        </div>
        <div className='third'>
          <h1>Recnet Post</h1>
          <h4>Breaking Down Narries</h4>
          <h4>A Celebration of success</h4>
          <h4>A World of Opportinies</h4>
        </div>
        <div className='four'>
          <h1>Newsletter</h1>
          <input type='text' className='' placeholder='Email'/>
          <br/>
          <button>Subscribe</button>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Contact