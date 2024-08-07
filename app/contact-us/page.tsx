'use client';
import FAQ from "@/components/FAQ"
import Layout from "@/components/Layout"
import { InlineWidget } from "react-calendly";
import { FormEvent, ChangeEvent, useState } from "react";
import NotifBanner from "@/components/NotifBanner";


interface FormData {
  fullName: string;
  email: string;
  title: string;
  message: string;
}

/**
 * Booka demo component
 * @param param0 
 * @returns 
 */
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
        styles={{ height: '1000px' }}
        url="https://calendly.com/rupesh-zenspaceapp/zenspaceapp-demo"
      />
    </div>
  </section>
}


const ContactForm = ({ setShowBanner }: { setShowBanner: (value: boolean) => void } ) => { 

  const FormFields = () => {
    const [formData, setFormData] = useState<FormData>({
      fullName: '',
      email: '',
      title: '',
      message: ''
    });
  
    // handle form field changes
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      const { name, value } = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // handle form submit
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      (async () => {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // show success banner
          setShowBanner(true);

          // Hide the banner after 5 seconds (adjust the duration as needed)
          setTimeout(() => setShowBanner(false), 5000);

          setFormData({
            fullName: '',
            email: '',
            title: '',
            message: ''
          });
        } else {
          // Show error message
          console.log("failed to send mail ");
        }
      })();
    }
  
    // return main form component
    return <form method="post" onSubmit={handleSubmit}> 
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={(handleChange)}
            className="form-control input-lg"
            autoCapitalize="on"
            id="input-38"
            required={true}
            placeholder="Your Full Name" />
        </div>        
        </div>
        <div className="form-row">
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            className="form-control input-lg"
            id="input-39"
            required={true}
            placeholder="Your Email" />
        </div>        
      </div>
      <div className="form-row">        
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control input-lg"
            id="input-41"
            required={true}
            placeholder="Your Title" />
        </div>
      </div>
      <div>
        <div className="form-row">
          <textarea style={{ height: "120px" }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control input-lg"
            id="input-42"
            required={true}
            rows={50}
            placeholder="Your question, suggestion, or just want to share your thoughts.">
          </textarea>
        </div>
      </div>
      <div className="submit-button"> 
        <button
          type="submit"
          className="btn button">
          Send now
        </button> 
      </div>
    </form>
  }

  // returns intro comp
  const Intro = () => {
    return <div>
      <h1 className="display-4">
        Get in Touch.
      </h1>
      <div className="subhead left-aligned">
        At ZenSpaceApp, we believe in the power of connection and communication.
        We&apos;re here to support you every step of the way, ensuring that you have
        everything you need to transform your therapy practice. Drop us a message, and let&apos;s chat!
      </div>
    </div>
  }


  // returns other contact options comp
  const ContactOptions = () => {
    return (
      <div className="email visible-lg">
        <div className="item">
          <a href="#book-demo">
            Book a Demo
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

  // return contact form component
  return (
    <section  id="contact" className="bg-half-260">
      <div className="container show fade">    
        <div className="grid">
          <div className="grid-item contact-desc" >
            <Intro />
            <ContactOptions />
          </div>       
          <div className="grid-item contact-form">
            <FormFields />
          </div>
        </div>  
      </div>
    </section>
   )
}


export default function Contact({ }) {
  const [showBanner, setShowBanner] = useState(false);

  return <Layout >
    {showBanner && <NotifBanner/> }
    <ContactForm setShowBanner={setShowBanner}  />
    <BookDemo />
    <FAQ />
  </Layout>
}