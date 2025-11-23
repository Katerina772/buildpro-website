// import React, {useState} from 'react';

// const allProjects = [
//   {id:1,cat:'cap',title:"Квартира на вул. Лесі Українки, 68 м²", img:'/images/port1.jpg', area:'68 м²', duration:'3 місяці', type:'Капітальний ремонт'},
//   {id:2,cat:'full',title:"Студія, центр", img:'/images/port2.jpg', area:'42 м²', duration:'1.5 місяця', type:'Повне оновлення'},
//   {id:3,cat:'design',title:"Кухня під ключ", img:'/images/port3.jpg', area:'20 м²', duration:'1 місяць', type:'Дизайн інтер’єру'},
//   {id:4,cat:'cap',title:"Будинок, заміський", img:'/images/port4.jpg', area:'120 м²', duration:'4 місяці', type:'Капітальний ремонт'},
//   {id:5,cat:'full',title:"Квартира після 90-х", img:'/images/port5.jpg', area:'55 м²', duration:'2.5 місяці', type:'Повне оновлення'},
//   {id:6,cat:'design',title:"Офіс, BTL", img:'/images/port6.jpg', area:'85 м²', duration:'2 місяці', type:'Дизайн інтер’єру'}
// ];

// export default function Portfolio(){
//   const [filter,setFilter] = useState('all');
//   const projects = allProjects.filter(p=> filter==='all' ? true : p.cat===filter);

//   return (
//     <section id="portfolio" className="section bg-light">
//       <div className="container">
//         <h2 className="text-center mb-4" style={{fontFamily:'Montserrat'}}>Наші роботи</h2>
//         <div className="d-flex justify-content-center mb-4 gap-2">
//           <button className={`btn btn-sm ${filter==='all'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('all')}>Усі</button>
//           <button className={`btn btn-sm ${filter==='cap'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('cap')}>Капітальний ремонт</button>
//           <button className={`btn btn-sm ${filter==='full'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('full')}>Повне оновлення</button>
//           <button className={`btn btn-sm ${filter==='design'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('design')}>Дизайн інтер’єру</button>
//         </div>
//         <div className="row g-3">
//           {projects.map(p=> (
//             <div className="col-md-4" key={p.id}>
//               <div className="portfolio-card rounded-3 shadow-sm position-relative">
//                 <img src={p.img} alt={p.title} className="w-100" style={{height:220,objectFit:'cover'}} />
//                 <div className="portfolio-overlay">
//                   <div className="info p-3">
//                     <h6 className="mb-1">{p.title}</h6>
//                     <p className="mb-2">{p.area} · {p.duration}</p>
//                     <a href={`/project/${p.id}`} className="btn btn-sm btn-light">Детальніше</a>
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


// import React, { useState } from 'react';

// // --- Детальні описи робіт ---
// const details = {
//   1: "Повний капітальний ремонт квартири: демонтаж, нові комунікації, стіни, підлога, дизайн-проєкт, меблі.",
//   2: "Оновлення студії: косметичний ремонт, нова кухня, освітлення, стильний інтер’єр.",
//   3: "Кухня під ключ: 3D-дизайн, меблі на замовлення, техніка, освітлення.",
//   4: "Капітальний ремонт заміського будинку: перепланування, утеплення, зовнішні роботи.",
//   5: "Повне оновлення старої квартири: заміна всіх покриттів, новий стиль, сучасний вигляд.",
//   6: "Офіс у стилі BTL: дизайнерські рішення, сучасний open-space, продумана ергономіка."
// };

// const allProjects = [
//   {id:1,cat:'cap',title:"Квартира на вул. Лесі Українки, 68 м²", img:'/images/port1.jpg', area:'68 м²', duration:'3 місяці', type:'Капітальний ремонт'},
//   {id:2,cat:'full',title:"Студія, центр", img:'/images/port2.jpg', area:'42 м²', duration:'1.5 місяця', type:'Повне оновлення'},
//   {id:3,cat:'design',title:"Кухня під ключ", img:'/images/port3.jpg', area:'20 м²', duration:'1 місяць', type:'Дизайн інтер’єру'},
//   {id:4,cat:'cap',title:"Будинок, заміський", img:'/images/port4.jpg', area:'120 м²', duration:'4 місяці', type:'Капітальний ремонт'},
//   {id:5,cat:'full',title:"Квартира після 90-х", img:'/images/port5.jpg', area:'55 м²', duration:'2.5 місяці', type:'Повне оновлення'},
//   {id:6,cat:'design',title:"Офіс, BTL", img:'/images/port6.jpg', area:'85 м²', duration:'2 місяці', type:'Дизайн інтер’єру'}
// ];

// export default function Portfolio(){
//   const [filter,setFilter] = useState('all');
//   const [selected, setSelected] = useState(null);

//   const projects = allProjects.filter(p=> filter==='all' ? true : p.cat===filter);

//   return (
//     <>
//     <section id="portfolio" className="section bg-light">
//       <div className="container">
//         <h2 className="text-center mb-4" style={{fontFamily:'Montserrat'}}>Наші роботи</h2>

//         {/* Фільтри */}
//         <div className="d-flex justify-content-center mb-4 gap-2">
//           <button className={`btn btn-sm ${filter==='all'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('all')}>Усі</button>
//           <button className={`btn btn-sm ${filter==='cap'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('cap')}>Капітальний ремонт</button>
//           <button className={`btn btn-sm ${filter==='full'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('full')}>Повне оновлення</button>
//           <button className={`btn btn-sm ${filter==='design'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('design')}>Дизайн інтер’єру</button>
//         </div>

//         {/* Картки */}
//         <div className="row g-3">
//           {projects.map(p=> (
//             <div className="col-md-4" key={p.id}>
//               <div className="portfolio-card rounded-3 shadow-sm position-relative">
//                 <img src={p.img} alt={p.title} className="w-100" style={{height:220,objectFit:'cover'}} />

//                 <div className="portfolio-overlay">
//                   <div className="info p-3">
//                     <h6 className="mb-1">{p.title}</h6>
//                     <p className="mb-2">{p.area} · {p.duration}</p>

//                     {/* Вмикаємо модальне вікно */}
//                     <button
//                       className="btn btn-sm btn-light"
//                       onClick={() => setSelected(p)}
//                     >
//                       Детальніше
//                     </button>

//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     ---- MODAL ----
//     {selected && (
//       <div className="modal fade show d-block" tabIndex="-1">
//         <div className="modal-dialog modal-lg modal-dialog-centered">
//           <div className="modal-content">

//             <div className="modal-header">
//               <h5 className="modal-title">{selected.title}</h5>
//               <button type="button" className="btn-close" onClick={() => setSelected(null)}></button>
//             </div>

//             <div className="modal-body">
//               <img
//                 src={selected.img}
//                 alt={selected.title}
//                 className="w-100 rounded mb-3"
//                 style={{maxHeight: "350px", objectFit: "cover"}}
//               />

//               <p><strong>Площа:</strong> {selected.area}</p>
//               <p><strong>Тривалість:</strong> {selected.duration}</p>
//               <p><strong>Тип:</strong> {selected.type}</p>

//               <hr />

//               <p>{details[selected.id]}</p>
//             </div>

//             <div className="modal-footer">
//               <button className="btn btn-secondary" onClick={() => setSelected(null)}>
//                 Закрити
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* фонове затемнення */}
//         <div
//           className="modal-backdrop fade show"
//           onClick={() => setSelected(null)}
//         />
//       </div>
//     )}

//     </>
//   );
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';

// // --- Детальний опис для модального вікна ---
// const details = {
//   1: "Цей проєкт передбачав повний капітальний ремонт квартири з демонтажем стін, новою електрикою, сантехнікою, плануванням та сучасним дизайном. Ми виконали весь комплекс робіт — від чорнових до чистових.",
//   2: "Студія в центрі міста отримала повне оновлення: нові покриття, оновлене освітлення та сучасний стиль. Роботи виконано в стислі терміни із збереженням бюджету.",
//   3: "Кухня була повністю перепроєктована: виконано 3D-візуалізацію, заміну меблів, підбір освітлення та правильну ергономіку.",
//   4: "Капітальний ремонт заміського будинку: нові комунікації, утеплення, заміна покрівлі, перепланування та дизайнерське оздоблення.",
//   5: "Оновлення квартири, яка не ремонтувалася з 90-х. Замінено всі матеріали, освітлення та зроблено сучасний інтер’єр.",
//   6: "Дизайн інтер’єру офісу для BTL-компанії. Створено сучасний мінімалістичний стиль із комфортною робочою зоною."
// };

// // --- Дані всіх проєктів ---
// const allProjects = [
//   {id:1,cat:'cap',title:"Квартира на вул. Лесі Українки, 68 м²", img:'/images/port1.jpg', area:'68 м²', duration:'3 місяці', type:'Капітальний ремонт'},
//   {id:2,cat:'full',title:"Студія, центр", img:'/images/port2.jpg', area:'42 м²', duration:'1.5 місяця', type:'Повне оновлення'},
//   {id:3,cat:'design',title:"Кухня під ключ", img:'/images/port3.jpg', area:'20 м²', duration:'1 місяць', type:'Дизайн інтер’єру'},
//   {id:4,cat:'cap',title:"Будинок, заміський", img:'/images/port4.jpg', area:'120 м²', duration:'4 місяці', type:'Капітальний ремонт'},
//   {id:5,cat:'full',title:"Квартира після 90-х", img:'/images/port5.jpg', area:'55 м²', duration:'2.5 місяці', type:'Повне оновлення'},
//   {id:6,cat:'design',title:"Офіс, BTL", img:'/images/port6.jpg', area:'85 м²', duration:'2 місяці', type:'Дизайн інтер’єру'}
// ];

// export default function Portfolio(){
//   const [filter,setFilter] = useState('all');
//   const [selected,setSelected] = useState(null);

//   const projects = allProjects.filter(p=> filter==='all' ? true : p.cat===filter);

//   return (
//     <section id="portfolio" className="section bg-light">
//       <div className="container">
//         <h2 className="text-center mb-4" style={{fontFamily:'Montserrat'}}>Наші роботи</h2>

//         {/* Фільтри */}
//         <div className="d-flex justify-content-center mb-4 gap-2">
//           <button className={`btn btn-sm ${filter==='all'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('all')}>Усі</button>
//           <button className={`btn btn-sm ${filter==='cap'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('cap')}>Капітальний ремонт</button>
//           <button className={`btn btn-sm ${filter==='full'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('full')}>Повне оновлення</button>
//           <button className={`btn btn-sm ${filter==='design'? 'btn-accent':'btn-outline-secondary'}`} onClick={()=>setFilter('design')}>Дизайн інтер’єру</button>
//         </div>

//         {/* Сітка робіт */}
//         <div className="row g-3">
//           {projects.map(p=> (
//             <div className="col-md-4" key={p.id}>
//               <div className="portfolio-card rounded-3 shadow-sm position-relative">
//                 <img src={p.img} alt={p.title} className="w-100" style={{height:220,objectFit:'cover'}} />

//                 <div className="portfolio-overlay">
//                   <div className="info p-3">
//                     <h6 className="mb-1">{p.title}</h6>
//                     <p className="mb-2">{p.area} · {p.duration}</p>
//                     <button className="btn btn-sm btn-light" onClick={()=>setSelected(p)}>Детальніше</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Модальне вікно */}
//         {selected && <Modal selected={selected} onClose={() => setSelected(null)} />}

//       </div>
//     </section>
//   );
// }

// // ======== МОДАЛЬНЕ ВІКНО =========
// function Modal({ selected, onClose }) {

//   useEffect(() => {
//     document.body.classList.add("modal-open");
//     return () => document.body.classList.remove("modal-open");
//   }, []);

//   return (
//     <>
//       <div className="modal fade show d-block" tabIndex="-1">
//         <div className="modal-dialog modal-lg modal-dialog-centered">
//           <div className="modal-content">

//             <div className="modal-header">
//               <h5 className="modal-title">{selected.title}</h5>
//               <button type="button" className="btn-close" onClick={onClose}></button>
//             </div>

//             <div className="modal-body">
//               <img
//                 src={selected.img}
//                 alt={selected.title}
//                 className="w-100 rounded mb-3"
//                 style={{maxHeight: "350px", objectFit: "cover"}}
//               />

//               <p><strong>Площа:</strong> {selected.area}</p>
//               <p><strong>Тривалість:</strong> {selected.duration}</p>
//               <p><strong>Тип:</strong> {selected.type}</p>

//               <hr />

//               <p>{details[selected.id]}</p>
//             </div>

//             <div className="modal-footer">
//               <button className="btn btn-secondary" onClick={onClose}>Закрити</button>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Backdrop */}
//       <div className="modal-backdrop fade show" onClick={onClose} />
//     </>
//   );
// }



import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  // ===== LOAD PROJECTS FROM BACKEND =====
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Помилка завантаження проєктів:", err);
      }
    }

    fetchProjects();
  }, []);

  // ===== FILTER LOGIC =====
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.cat === filter);

  return (
    <section id="portfolio" className="section bg-light">
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontFamily: "Montserrat" }}>
          Наші роботи
        </h2>

        {/* ===== FILTER BUTTONS ===== */}
        <div className="d-flex justify-content-center mb-4 gap-2">
          <button
            className={`btn btn-sm ${filter === "all" ? "btn-accent" : "btn-outline-secondary"}`}
            onClick={() => setFilter("all")}
          >
            Усі
          </button>

          <button
            className={`btn btn-sm ${filter === "cap" ? "btn-accent" : "btn-outline-secondary"}`}
            onClick={() => setFilter("cap")}
          >
            Капітальний ремонт
          </button>

          <button
            className={`btn btn-sm ${filter === "full" ? "btn-accent" : "btn-outline-secondary"}`}
            onClick={() => setFilter("full")}
          >
            Повне оновлення
          </button>

          <button
            className={`btn btn-sm ${filter === "design" ? "btn-accent" : "btn-outline-secondary"}`}
            onClick={() => setFilter("design")}
          >
            Дизайн інтер’єру
          </button>
        </div>

        {/* ===== GRID OF PROJECTS ===== */}
        <div className="row g-3">
          {filteredProjects.map((p) => (
            <div className="col-md-4" key={p.id}>
              <div className="portfolio-card rounded-3 shadow-sm position-relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-100"
                  style={{ height: 220, objectFit: "cover" }}
                />

                <div className="portfolio-overlay">
                  <div className="info p-3">
                    <h6 className="mb-1">{p.title}</h6>
                    {p.area && (
                      <p className="mb-2">
                        {p.area} {p.duration ? "· " + p.duration : ""}
                      </p>
                    )}
                    <button className="btn btn-sm btn-light" onClick={() => setSelected(p)}>
                      Детальніше
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== MODAL ===== */}
        {selected && <Modal selected={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  );
}

// ===== MODAL COMPONENT =====
function Modal({ selected, onClose }) {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selected.title}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-100 rounded mb-3"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />

              {selected.area && <p><strong>Площа:</strong> {selected.area}</p>}
              {selected.duration && <p><strong>Тривалість:</strong> {selected.duration}</p>}
              {selected.type && <p><strong>Тип:</strong> {selected.type}</p>}

              <hr />

              <p>{selected.description}</p>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Закрити
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose} />
    </>
  );
}
