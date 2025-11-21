import React from 'react';

// const faqs = [
//   {q:'Скільки часу триває капітальний ремонт квартири?', a:'Зазвичай від 2 до 4 місяців, залежно від площі та обсягу робіт.'},
//   {q:'Чи можна замовити лише дизайн інтер’єру без ремонту?', a:'Так, ми пропонуємо як повний цикл, так і окремі послуги дизайну.'},
//   {q:'Як формується ціна на ремонт?', a:'Після виїзду спеціаліста і складання кошторису.'}
// ];

// export default function FAQ(){
//   return (
//     <section id="faq" className="section bg-white">
//       <div className="container">
//         <h2 className="text-center mb-4" style={{fontFamily:'Montserrat'}}>Часті питання</h2>
//         <div className="accordion" id="faqAccordion">
//           {faqs.map((f,i)=> (
//             <div className="accordion-item" key={i}>
//               <h2 className="accordion-header" id={`heading${i}`}>
//                 <button className={`accordion-button ${i!==0? 'collapsed':''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`}>
//                   {f.q}
//                 </button>
//               </h2>
//               <div id={`collapse${i}`} className={`accordion-collapse collapse ${i===0? 'show':''}`} data-bs-parent="#faqAccordion">
//                 <div  className="accordion-body">{f.a}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

export default function FAQ() {
  const faq = [
    {
      q: "Скільки часу триває капітальний ремонт квартири?",
      a: "Зазвичай від 2 до 4 місяців, залежно від площі, складності та обсягу робіт."
    },
    {
      q: "Чи можна замовити лише дизайн інтер’єру без ремонту?",
      a: "Так, ви можете замовити окремо дизайн-проєкт без виконання ремонтних робіт."
    },
    {
      q: "Як формується ціна на ремонт?",
      a: "Після виїзду спеціаліста, проведення замірів та складання детального кошторису."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="text-center mb-5" style={{fontFamily:'Montserrat'}}>Часті питання</h2>

        <div className="accordion" id="faqAccordion">
          {faq.map((item, i) => (
            <div className="accordion-item faq-item" key={i}>
              
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${i}`}
                >
                  {item.q}
                </button>
              </h2>

              <div
                id={`faq-${i}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body faq-answer">
                  {item.a}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
