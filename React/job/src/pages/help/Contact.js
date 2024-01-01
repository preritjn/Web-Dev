import { Form, redirect } from "react-router-dom"

export default function Contact() {  
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
          <label htmlFor="email">Your email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Your message:</label>
          <textarea name="message" id="message" required></textarea>          
          <button>Submit</button>
      </Form>
    </div>
  )
}

export const contactAction = async ({request}) => {
  const data = await request.formData()
  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }
  console.log(submission)
  return redirect('/')
}