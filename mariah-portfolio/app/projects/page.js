export default function Projects() {
  return (
    <main className="container">
      <section className="project-section">
        <h2 className="section-title">current</h2>
        <ul className="project-list">
          <li className="project-item">
            <p className="project-name">Personal Website / Creative Portfolio</p>
            <p className="project-desc">designed and built from scratch using HTML, CSS, and JavaScript. features a typewriter effect, responsive layout, and minimal aesthetic.</p>
          </li>
          <li className="project-item">
            <p className="project-name">Kode With Klossy TLA Portfolio</p>
            <p className="project-desc">a portfolio project hosted on Notion developed during KWK's technical accelerator program.</p>
            <a href="https://www.notion.so/Technical-Leadership-Portfolio-Mariah-Tsui-ea9baa9c13668235969f01aa5a6682b1" className="bio-links" target="_blank">View Notion Portfolio →</a>
          </li>
          <li className="project-item">
            <p className="project-name">TogetherAid <span style={{fontSize: '0.85rem', color: '#eb96b4'}}>REVAMPING KWK CAMP PROJECT</span></p>
            <p className="project-desc">a data-driven web project exploring healthcare and resources. built with Python, Pandas, and Plotly.</p>
          </li>
        </ul>
      </section>

      <section className="project-section">
        <h2 className="section-title">past</h2>
        <ul className="project-list">
          <li className="project-item">
            <p className="project-name">Bay Area Rent vs. Wage</p>
            <p className="project-desc">a data analysis project exploring the gap between rental costs and wages across the Bay Area. built using R, tidyverse, ggplot2.</p>
            <a href="https://github.com/mtsui-1270/bay-area-rent-wage" className="bio-links" target="_blank">view on GitHub →</a>
          </li>
          <li className="project-item">
            <p className="project-name">MealMash</p>
            <p className="project-desc">a web app that helps users decide what to eat. built using React, Typescript, and Supabase.</p>
            <a href="https://mealmash-pix.vercel.app/" className="bio-links" target="_blank">View Site →</a>
          </li>
          <li className="project-item">
            <p className="project-name">Scheme Interpreter</p>
            <p className="project-desc">built a fully functional Scheme language interpreter in Python for CS61A.</p>
          </li>
          <li className="project-item">
            <p className="project-name">Ants vs. SomeBees</p>
            <p className="project-desc">a tower defense game built in Python for CS61A using object-oriented programming.</p>
          </li>
          <li className="project-item">
            <p className="project-name">Cats</p>
            <p className="project-desc">a typing speed test application built in Python for CS61A with autocorrect algorithms.</p>
          </li>
          <li className="project-item">
            <p className="project-name">Hog</p>
            <p className="project-desc">a dice game simulator built in Python for CS61A with probability logic.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}