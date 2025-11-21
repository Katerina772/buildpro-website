import React from 'react';

const benefits = [
  {icon:'bi-clock-fill', title:'Завжди вчасно', text:'Дотримуємося термінів і графіків виконання.'},
  {icon:'bi-chat-left-text-fill', title:'Прозорість', text:'Детальна кошторисна документація без прихованих витрат.'},
  {icon:'bi-people-fill', title:'Професійна команда', text:'Сертифіковані майстри з досвідом понад 10 років.'},
  {icon:'bi-award-fill', title:'Гарантія якості', text:'Письмова гарантія на всі види робіт.'}
];

export default function Benefits(){
  return (
    <section id="benefits" className="section bg-light">
      <div className="container">
        <h2 className="text-center mb-5" style={{fontFamily:'Montserrat'}}>Чому обирають нас</h2>
        <div className="row g-4">
          {benefits.map((b,i)=> (
            <div className="col-md-3 text-center" key={i}>
              <div className="p-4 h-100">
                <div className="mb-3 fs-2 text-accent"><i className={`bi ${b.icon}`}></i></div>
                <h6 style={{fontFamily:'Montserrat'}}>{b.title}</h6>
                <p className="text-muted">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}