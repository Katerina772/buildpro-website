

import Carousel from '../components/Carousel';

export default function About() {
  return (
    <section id="about" className="py-5 section">
      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-md-6 mb-4 mb-md-0">
            <Carousel />
          </div>

          
          <div className="col-md-6">
            <h2
              className="hero-title mb-3"
              style={{ fontFamily: 'Montserrat', fontWeight: 800, }}
            >
              Професійні ремонти та сучасні дизайн-рішення
            </h2>

            <div className='text-desc' style={{ borderLeft: '4px solid var(--accent)'}}>
              <p className="lead text-muted" style={{ marginLeft: '10px' }}>
              BuildPro — це команда експертів у сфері ремонтів та дизайну інтер’єрів. Ми поєднуємо
              сучасні технології, професійний підхід та повну прозорість на кожному етапі роботи.
            </p></div>

            <p className="text-muted">
              Наша місія — створювати комфортні, стильні та функціональні простори, які відповідають
              вашим потребам та очікуванням. Від косметичного оновлення до масштабних проєктів із
              перепланування — ми гарантуємо якість, дотримання термінів та чітку комунікацію.
              Обираючи BuildPro, ви отримуєте професійний супровід, індивідуальний підхід та
              результат, який перевершить ваші очікування.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}


