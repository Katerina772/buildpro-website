// import React from 'react';

// const services = [
//   { key:'cap', title:'Капітальний ремонт', icon:'bi-hammer', desc:'Повний демонтаж старих покриттів, нові комунікації, вирівнювання стін і підлог, чистове оздоблення.' },
//   { key:'full', title:'Повне оновлення приміщення', icon:'bi-brush', desc:'Оновлення без радикального втручання: косметичний ремонт, заміна покриттів, оновлення інтер’єру.' },
//   { key:'design', title:'Дизайн інтер’єру', icon:'bi-pencil-square', desc:'Індивідуальний підхід, 3D-візуалізації, вибір матеріалів і меблів під ваш стиль і бюджет.' }
// ];

// export default function Services(){
//   return (
//     <section id="services" className="section bg-white">
//       <div className="container">
//         <h2 className="text-center mb-5" style={{fontFamily:'Montserrat'}}>Наші послуги</h2>
//         <div className="row g-4">
//           {services.map(s=> (
//             <div className="col-md-4" key={s.key}>
//               <div className="card p-4 h-100 card-hover">
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="me-3 fs-3 text-accent"><i className={`bi ${s.icon}`}></i></div>
//                   <h5 style={{fontFamily:'Montserrat'}}>{s.title}</h5>
//                 </div>
//                 <p className="text-muted service-desc">{s.desc}</p>
//                 <div className="mt-auto">
//                   <button className="btn btn-outline-secondary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${s.key}`}>Детальніше</button>
//                   <div className="collapse mt-3" id={`collapse-${s.key}`}>
//                     <div className="card card-body">{s.desc}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </section>
    
//   )
// }

// import React from 'react';

// // ---------------- Полні описи ----------------
// const detailed = {
//   cap: `Капітальний ремонт включає повний демонтаж старих покриттів, заміну або прокладання нових
// інженерних комунікацій (електрика, сантехніка), вирівнювання поверхонь, монтаж стель та підлог,
// а також повний цикл чистового оздоблення. Результатом є повністю оновлений простір, готовий до проживання.`,

//   full: `Повне оновлення приміщення — це швидке та ефективне оновлення житла або офісу без
// глобального втручання. Ми проводимо косметичний ремонт, замінюємо покриття, освітлення,
// оновлюємо інтер’єр, щоб приміщення стало сучасним, свіжим і комфортним.`,

//   design: `Дизайн інтер’єру — це створення індивідуального стилю вашого простору. Ми розробляємо
// докладні планування, 3D‑візуалізації, підбір матеріалів, меблів і освітлення. Все враховує
// ваші побажання, бюджет і функціональні потреби.`
// };

// // ---------------- Короткі описи ----------------
// const services = [
//   { key:'cap', title:'Капітальний ремонт', icon:'bi-hammer', desc:'Повний демонтаж старих покриттів, нові комунікації, вирівнювання стін і підлог, чистове оздоблення.' },
//   { key:'full', title:'Повне оновлення приміщення', icon:'bi-brush', desc:'Косметичний ремонт, заміна покриттів, оновлення інтер’єру.' },
//   { key:'design', title:'Дизайн інтер’єру', icon:'bi-pencil-square', desc:'3D‑візуалізації, вибір матеріалів, індивідуальний стиль під ваш бюджет.' }
// ];

// export default function Services(){
//   const [open, setOpen] = React.useState(null);

//   return (
//     <section id="services" className="section bg-white">
//       <div className="container">
//         <h2 className="text-center mb-5" style={{fontFamily:'Montserrat'}}>Наші послуги</h2>

//         <div className="row g-4">
//           {services.map(s=> (
//             <div className="col-md-4" key={s.key}>
//               <div className="card p-4 h-100 card-hover">

//                 {/* Заголовок та іконка */}
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="me-3 fs-3 text-accent"><i className={`bi ${s.icon}`}></i></div>
//                   <h5 style={{fontFamily:'Montserrat'}}>{s.title}</h5>
//                 </div>

//                 {/* Короткий опис */}
//                 <p className="text-muted service-desc">{s.desc}</p>

//                 {/* Кнопка та розгорнута інформація */}
//                 <div className="mt-auto">
//                   <button
//                     className="btn btn-outline-secondary btn-sm"
//                     onClick={() => setOpen(open === s.key ? null : s.key)}
//                   >
//                     {open === s.key ? 'Згорнути' : 'Детальніше'}
//                   </button>

//                   {open === s.key && (
//                     <div className="mt-3">
//                       <div className="card card-body">
//                         {detailed[s.key]}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </section>
//   );
// }

import React from 'react';

// ---------------- Полні описи ----------------
const detailed = {
  cap: `Капітальний ремонт включає повний демонтаж старих покриттів, заміну або прокладання нових 
інженерних комунікацій (електрика, сантехніка), вирівнювання поверхонь, монтаж стель та підлог, 
а також повний цикл чистового оздоблення. Результатом є повністю оновлений простір, готовий до проживання.`,

  full: `Повне оновлення приміщення — це швидке та ефективне оновлення житла або офісу без 
глобального втручання. Ми проводимо косметичний ремонт, замінюємо покриття, освітлення, 
оновлюємо інтер’єр, щоб приміщення стало сучасним, свіжим і комфортним.`,

  design: `Дизайн інтер’єру — це створення індивідуального стилю вашого простору. Ми розробляємо 
докладні планування, 3D‑візуалізації, підбір матеріалів, меблів і освітлення. Все враховує 
ваші побажання, бюджет і функціональні потреби.`
};

// ---------------- Короткі описи ----------------
const services = [
  { key:'cap', title:'Капітальний ремонт', icon:'bi-hammer', desc:'Повний демонтаж старих покриттів, нові комунікації, вирівнювання стін і підлог, чистове оздоблення.' },
  { key:'full', title:'Повне оновлення приміщення', icon:'bi-brush', desc:'Косметичний ремонт, заміна покриттів, оновлення інтер’єру.' },
  { key:'design', title:'Дизайн інтер’єру', icon:'bi-pencil-square', desc:'3D‑візуалізації, вибір матеріалів, індивідуальний стиль під ваш бюджет.' }
];

export default function Services(){
  const [modalData, setModalData] = React.useState(null);

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <h2 className="text-center mb-5" style={{fontFamily:'Montserrat'}}>Наші послуги</h2>

        <div className="row g-4">
          {services.map(s=> (
            <div className="col-md-4" key={s.key}>
              <div className="card p-4 h-100 card-hover">

                {/* Заголовок та іконка */}
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 fs-3 text-accent"><i className={`bi ${s.icon}`}></i></div>
                  <h5 style={{fontFamily:'Montserrat'}}>{s.title}</h5>
                </div>

                {/* Короткий опис */}
                <p className="text-muted service-desc">{s.desc}</p>

                {/* Кнопка — відкриття модального вікна */}
                <div className="mt-auto">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setModalData({ title: s.title, text: detailed[s.key] })}
                  >
                    Детальніше
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* МОДАЛЬНЕ ВІКНО */}
        {modalData && (
          <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" style={{fontFamily:'Montserrat'}}>{modalData.title}</h5>
                  <button className="btn-close" onClick={() => setModalData(null)}></button>
                </div>

                <div className="modal-body">
                  <p className="text-muted" style={{whiteSpace:'pre-line'}}>{modalData.text}</p>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setModalData(null)}>Закрити</button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
