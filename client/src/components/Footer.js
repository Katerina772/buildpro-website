import React from 'react';
export default function Footer(){
  return (
    <footer className="mt-5">
      <div style={{background:'#111',color:'#8c8c8cff'}}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <h5 style={{fontFamily:'Montserrat',color:'var(--accent)'}}>BuildPro</h5>
              <p className=" text-footer ">© {new Date().getFullYear()} BuildPro. Усі права захищено.</p>
            </div>
            <div className="col-md-6 text-md-end" >
              <a className=" me-3" href="#">Instagram</a>
              <a className=" me-3" href="#">Facebook</a>
              <a className="me-3" href="#">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
