import { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', phone:'', message:''});
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      if(res.ok) { setStatus('Повідомлення відправлено'); setForm({name:'',email:'',phone:'',message:''}); }
      else setStatus('Помилка');
    } catch(err) {
      console.error(err);
      setStatus('Помилка мережі');
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Ім'я" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Телефон" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Повідомлення" required />
        <button type="submit">Відправити</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
