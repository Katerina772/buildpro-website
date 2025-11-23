
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Повідомлення успішно відправлено!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Сталася помилка. Спробуйте ще раз.");
      }
    } catch {
      setStatus("⚠️ Сервер недоступний. Перевірте підключення.");
    }
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontFamily: "Montserrat", fontWeight: 700 }}>
          Контакти
        </h2>

        <div className="row g-4">
          
          {/* LEFT info block */}
          <div className="col-md-5">
            <div className="contact-info p-4 shadow-sm rounded-4 bg-white">
              <h5 className="text-accent mb-3" style={{ fontFamily: "Montserrat" }}>
                Наші контакти
              </h5>

              <p className="text-muted mb-2">
                <i className="bi bi-geo-alt-fill text-accent me-2"></i>
                м. Київ, вул. Будівельна, 12
              </p>

              <p className="text-muted mb-2">
                <i className="bi bi-telephone-fill text-accent me-2"></i>
                +38 (067) 123-45-67
              </p>

              <p className="text-muted mb-4">
                <i className="bi bi-envelope-fill text-accent me-2"></i>
                info@buildpro.ua
              </p>

              <p className="text-muted">
                Ми працюємо <strong>Пн–Сб 9:00–18:00</strong>.  
                Звертайтесь — відповімо найближчим часом!
              </p>
            </div>
          </div>

          {/* RIGHT form block */}
          <div className="col-md-7">
            <div className="contact-form p-4 shadow-sm rounded-4 bg-white">
              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Ім’я</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Телефон</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="+38 (___) ___ __ __"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Повідомлення</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="form-control form-control-lg"
                      rows="4"
                    ></textarea>
                  </div>

                </div>

                <div className="text-end mt-3">
                  <button className="btn btn-accent btn-lg px-5 btn-contact">Надіслати</button>
                </div>

                {status && <p className="mt-3 text-center text-muted">{status}</p>}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
