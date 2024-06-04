'use client';
import FAQ from "@/components/FAQ"
import Layout from "@/components/Layout"
import { InlineWidget } from "react-calendly";


export default function Contact({}) {

  const FormFields = () => {
    return <form method="post" action="."> 
      <div className="form-row">
        <div className="form-group">
          {/* <label className="input__label input__label__required" for="input-38">Name</label><br/> */}
          <input type="text" className="form-control input-lg" id="input-38" required={true} placeholder="Your Full Name"/>
        </div>        
        </div>
        <div className="form-row">
        <div className="form-group">
          {/* <label className="input__label input__label__required" for="input-39">Email</label><br/> */}
          <input type="email" className="form-control input-lg" id="input-39" required={true} placeholder="Your Email"/>
        </div>        
      </div>
      <div className="form-row">        
        <div className="form-group">
          {/* <label className="input__label input__label__required" for="input-41">Your Title</label><br/> */}
          <input type="text" className="form-control input-lg" id="input-41" required={true} placeholder="Your Title"/>
        </div>
      </div>
      <div>
        <div className="form-row">
          {/* <label className="input__label input__label__required" for="input-42">Message</label><br/> */}
          <textarea style={{ height: "120px" }} className="form-control input-lg" id="input-42" required={true} rows={50} placeholder="Your question, suggestion, or just want to share your thoughts."></textarea>
        </div>
      </div>
      <div className="submit-button"> 
        <button
          type="submit"
          className="btn button"
          style={{ border: "2px solid", fontSize: '1.1rem' }}>
          Send now
        </button> 
      </div>
      
    </form>
  }

  const Demo = () => {
    return (
      <div className="email visible-lg">
        <div className="item">
          <a href="https://calendly.com/rupesh-zenspaceapp/zenspaceapp-demo">
            Book a call.
          </a>
        </div>
        <div className="item">
          <a href="mailto:info@zenspaceapp.com" target="_blank">
            info@zenspaceapp.com
          </a>
        </div>
      </div>
    )
  }

  const ContactForm = ({ }) => { 
    return (
      <section  id="contact" className="bg-half-260">
        <div className="container show fade">    
          <div className="grid">
            <div className="grid-item contact-desc">
              <h1 className="display-4">
                Get in Touch.
              </h1>
              <div className="subhead left-aligned">
                At ZenSpaceApp, we believe in the power of connection and communication.
                We&apos;re here to support you every step of the way, ensuring that you have
                everything you need to transform your therapy practice. Drop us a message, and let&apos;s chat!
              </div>
              <Demo />
            </div>       
            <div className="grid-item contact-form">
              <FormFields />
            </div>
          </div>  
        </div>
      </section>
     )
  }

  const BookDemo = ({ }) => {
    return <section id="book-demo" className="bg-half-170">
      <div className="container">
        <h2 className="display-4 u-textcenter" > 
          Book a Demo.
        </h2>
        <div className="subhead u-textcenter">
          In our 30-min demo, explore ZenSpaceApp&apos;s features and learn how we can enhance your therapy
          practice. Our team will guide you through a personalized walkthrough, answer questions, and help choose the ideal pricing plan. Book now to see the ZenSpaceApp difference!
        </div>
          <InlineWidget 
            styles={{
              height: '1000px'
            }} url="https://calendly.com/rupesh-zenspaceapp/zenspaceapp-demo?month=2024-06"
          />
        
      </div>
    </section>
  }

  return <Layout >
    <ContactForm />
    <BookDemo />
    <FAQ />
  </Layout>
}