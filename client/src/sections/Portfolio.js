
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
