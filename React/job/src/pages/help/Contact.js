export default function Contact() {
    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <form>
            <label htmlFor="email">Your email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Your message:</label>
            <textarea name="message" id="message" required></textarea>          
            <button>Submit</button>
        </form>
      </div>
    )
  }