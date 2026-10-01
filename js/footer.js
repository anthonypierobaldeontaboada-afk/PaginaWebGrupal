// ============================================
// FOOTER DINÁMICO - PÁGINAS INTERNAS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderFooter();
});

function renderFooter() {
  const siteFooter = document.querySelector("[data-site-footer]");
  if (!siteFooter) return;

  const footerHTML = `
    <style>
      [data-site-footer] {
        background: linear-gradient(135deg, #051c2d 0%, #0b1c34 100%);
        color: #ffffff;
      }
      [data-site-footer] .footer-shell {
        width: min(100% - 2rem, 1220px);
        margin: 0 auto;
      }
      [data-site-footer] .footer-top {
        padding: 3rem 0 2rem;
      }
      [data-site-footer] .footer-grid {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr 0.9fr 1fr;
        gap: 2.2rem;
        align-items: start;
      }
      [data-site-footer] .brand-block {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-bottom: 1rem;
      }
      [data-site-footer] .brand-mark {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: linear-gradient(135deg, #39b7ff 0%, #2fbb8d 100%);
        border: 3px solid #f6d869;
        display: grid;
        place-items: center;
        color: #fff;
        font-size: 0.82rem;
        font-weight: 900;
      }
      [data-site-footer] .brand-text {
        font-size: 0.88rem;
        font-weight: 900;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #fff;
      }
      [data-site-footer] .footer-title {
        position: relative;
        margin: 0 0 1rem;
        font-size: 1.2rem;
        font-weight: 800;
        color: #ffffff;
        display: inline-block;
      }
      [data-site-footer] .footer-title::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.5rem;
        width: 100%;
        height: 2px;
        background: rgba(255,255,255,0.25);
      }
      [data-site-footer] .social-icon {
        width: 2rem;
        height: 2rem;
        display: inline-grid;
        place-items: center;
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
        color: #fff;
        font-size: 1rem;
        margin-right: 0.5rem;
      }
      [data-site-footer] .footer-copy {
        margin: 0;
        max-width: 28ch;
        color: rgba(255,255,255,0.76);
        font-size: 0.97rem;
        line-height: 1.7;
      }
      [data-site-footer] .meta-list {
        display: grid;
        gap: 0.7rem;
        color: rgba(255,255,255,0.9);
        font-size: 0.96rem;
        line-height: 1.6;
      }
      [data-site-footer] .meta-list .row {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
      }
      [data-site-footer] .meta-list .dot {
        width: 0.8rem;
        color: #67c7ff;
      }
      [data-site-footer] .footer-bottom {
        border-top: 1px solid rgba(255,255,255,0.08);
        text-align: center;
        padding: 1rem 0 1.5rem;
        color: rgba(255,255,255,0.7);
        font-size: 0.9rem;
      }
      @media (max-width: 900px) {
        [data-site-footer] .footer-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <div class="footer-shell footer-top">
      <div class="footer-grid">
        <div>
          <div class="brand-block">
            <div class="brand-mark">H</div>
            <div class="brand-text">IESTP Huanta</div>
          </div>
          <p class="footer-copy">Instituto de Educación Superior Público "Huanta"</p>
        </div>

        <div>
          <h3 class="footer-title">Facebook</h3>
          <div class="meta-list">
            <div class="row"><span class="social-icon">f</span></div>
          </div>
        </div>

        <div>
          <h3 class="footer-title">Información</h3>
          <div class="meta-list">
            <div class="row"><span class="dot">◉</span><span>Jr. Córdova N° 650</span></div>
            <div class="row"><span class="dot">☎</span><span>Teléfono: (066) 322296</span></div>
          </div>
        </div>

        <div>
          <h3 class="footer-title">Horario de atención:</h3>
          <div class="meta-list">
            <div class="row"><span class="dot">◔</span><span> Lun - Vie: 7:30 am - 1:15 pm</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      © 2025 Instituto de Educación Superior Público “Huanta”
    </div>
  `;

  siteFooter.innerHTML = footerHTML;
}
