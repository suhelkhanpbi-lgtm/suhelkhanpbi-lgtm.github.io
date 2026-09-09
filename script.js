const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
$('#year').textContent=new Date().getFullYear();
$('#menu').onclick=()=>{let n=$('#nav');n.style.display=n.style.display==='flex'?'none':'flex'};
$$('nav a').forEach(a=>a.onclick=()=>$('#nav').style.display='none');
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.1});
$$('section').forEach(e=>io.observe(e));
const data={shipment:['POWER BI','Enterprise Shipment Analytics','Shipment and business analysis using enterprise data sources, semantic models and interactive Power BI reporting.'],operations:['POWER BI','Manufacturing Operations','Operational reporting connecting MES-related data with dashboards, analysis and validation.'],etl:['DATA / ETL','Enterprise Data Integration','SQL, Oracle, DB2 and SSIS workflows supporting reporting pipelines and data quality.'],ssas:['SSAS / TABULAR','Semantic Models','Tabular models supporting governed Power BI reporting, refresh and enterprise analytics.']};
$$('.work-row button').forEach(b=>b.onclick=()=>{let d=data[b.closest('.work-row').dataset.key];$('#mmeta').textContent=d[0];$('#mtitle').textContent=d[1];$('#mtext').textContent=d[2];$('#modal').classList.add('open')});
$('#close').onclick=()=>$('#modal').classList.remove('open');$('#modal').onclick=e=>e.target.id==='modal'&&$('#modal').classList.remove('open');document.onkeydown=e=>e.key==='Escape'&&$('#modal').classList.remove('open');