(function(){
  'use strict';
  const enrichment = window.PROJECT_ENRICHMENT || {};
  const signatureIds = window.SIGNATURE_PROJECT_IDS || [];
  function mergeProject(p) {
    const e = enrichment[p.id] || {};
    return {
      ...p,
      ...e,
      name: e.signatureCardTitle || p.name,
      subtitle: e.signatureCardSubtitle || e.signatureTagline || p.subtitle,
      categories: p.categories,
      deliverables: p.deliverables,
      methods: p.methods
    };
  }
  const projects = (Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [])
    .map(mergeProject)
    .slice()
    .sort((a, b) => (a.sortOrder ?? Number(a.number)) - (b.sortOrder ?? Number(b.number)));
  const signatureProjects = signatureIds
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean)
    .sort((a, b) => (a.signatureOrder || 0) - (b.signatureOrder || 0));
  const grid = document.getElementById('project-grid');
  const signatureGrid = document.getElementById('signature-grid');
  const allPanel = document.getElementById('all-projects-panel');
  const toggleAllBtn = document.getElementById('toggle-all-projects');
  const search = document.getElementById('project-search');
  const count = document.getElementById('result-count');
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const dialog = document.getElementById('project-dialog');
  const empty = document.getElementById('empty-state');
  const menuToggle = document.querySelector('.mobile-toggle');
  const menu = document.getElementById('primary-nav');
  let activeFilter = 'All';
  let activeProject = 0;
  let lastTrigger = null;

  // Architectural line work is deliberately illustrative; never presented as real plans/photos.
  function illustration(kind){
    const common = 'fill="none" stroke="#d8fae9" stroke-width="1.5" vector-effect="non-scaling-stroke"';
    const paths = {
      heritage: `<g ${common}><path d="M65 220V88L165 38L265 88V220M165 38V220M65 88L165 122L265 88M89 100v120M113 109v111M138 119v101M188 115v105M214 105v115M240 95v125M80 159h171M80 193h171"/><path d="M274 220V130l82-51l80 51v90M356 79v141M292 144v76M316 133v87M384 125v95M409 139v81M278 175h154"/></g><path d="M38 220h410" stroke="#d3fae7" opacity=".7"/>`,
      government: `<g ${common}><path d="M45 210V100L136 58L226 100V210M136 58V210M45 100h181M70 112v98M100 112v98M166 112v98M195 112v98M45 156h181"/><path d="M256 210V58L344 20L437 58V210M344 20v190M256 58h181M281 72v138M310 84v126M374 86v124M403 72v138M256 115h181M256 162h181"/></g>`,
      royal: `<g ${common}><path d="M58 213V96L154 47L250 96V213M154 47V213M58 96l96 46l96-46M84 107v106M110 122v91M133 133v80M177 131v82M203 122v91M228 107v106M67 169h176"/><path d="M270 213V110L334 79L398 110V213M334 79v134M292 124v89M314 137v76M355 134v79M380 122v91"/></g>`,
      sports: `<g ${common}><ellipse cx="249" cy="150" rx="183" ry="80"/><ellipse cx="249" cy="150" rx="156" ry="60"/><ellipse cx="249" cy="150" rx="128" ry="40"/><path d="M65 149h369M149 96v108M350 96v108M249 55v190"/></g><circle cx="250" cy="150" r="10" stroke="#c7f58a" fill="none" stroke-width="3"/>`,
      community: `<g ${common}><path d="M39 217h423M75 216v-92L152 90l77 34v92M152 90v126M75 124h154M99 142v74M122 133v83M183 133v83M207 142v74M252 216V107h120v109M271 124h83M271 164h83M310 107V40M295 58l15-18l15 18M402 216V69M389 68h26M402 43v26"/></g>`,
      tower: `<g ${common}><path d="M104 230V34L242 11L242 230M104 34l138-23M135 30v200M164 26v204M193 22v208M221 17v213M104 78h138M104 123h138M104 169h138M104 207h138"/><path d="M269 230V96l115-40v174M269 96l115-40M297 86v144M325 76v154M355 66v164M269 147h115M269 193h115"/></g>`,
      diriyah: `<g ${common}><path d="M41 212V95h100v117M41 95l50-49l50 49M91 46v166M65 118h52M65 152h52M171 212V56h110v156M171 56l55-33l55 33M226 23v189M199 87h54M199 135h54M308 212V105l72-43l70 43v107M380 62v150M326 128h106M326 165h106"/></g>`,
      water: `<g ${common}><path d="M40 74h411M40 120h411M40 166h411M40 212h411" stroke-dasharray="6 10" opacity=".5"/><path d="M78 27v182m0-182c15 30 15 45 0 70m0 0c-15 24-15 41 0 64M181 27v182m0-182c15 30 15 45 0 70m0 0c-15 24-15 41 0 64M284 27v182m0-182c15 30 15 45 0 70m0 0c-15 24-15 41 0 64M387 27v182m0-182c15 30 15 45 0 70m0 0c-15 24-15 41 0 64"/></g>`,
      tunnel: `<g ${common}><path d="M35 218V95c0-84 431-84 431 0v123"/><path d="M69 218V114c0-84 362-84 362 0v104"/><path d="M103 218V133c0-70 294-70 294 0v85"/><path d="M137 218V152c0-54 226-54 226 0v66"/><path d="M35 218h431M35 218l28-33M466 218l-28-33"/></g>`,
      health: `<g ${common}><path d="M89 220V92L180 48L271 92V220M89 92h182M180 48v172M117 114v106M147 128v92M212 128v92M241 114v106M89 166h182"/><path d="M303 220V113h104v107M355 113v107M303 159h104"/></g><path d="M355 25v67M321 58h68" stroke="#cff489" stroke-width="9"/>`,
      residential: `<g ${common}><path d="M44 218V102l87-52l87 52v116M131 50v168M63 114v104M90 100v118M158 103v115M189 115v103M44 164h174"/><path d="M250 218V65h155v153M250 65h155M278 65v153M308 65v153M338 65v153M375 65v153M250 120h155M250 166h155"/></g>`
    };
    return `<span class="cover-grid" aria-hidden="true"></span><span class="cover-illustration" aria-hidden="true"><svg viewBox="0 0 500 250" preserveAspectRatio="xMidYMid meet" focusable="false" aria-hidden="true">${paths[kind]||paths.residential}</svg></span>`;
  }
  function safeText(value){return String(value==null?'':value).replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));}
  function projectMedia(project){
    if(project.coverImage){
      return `<span class="cover-grid" aria-hidden="true"></span><span class="cover-photo" aria-hidden="true"><img src="${safeText(project.coverImage)}" alt="" loading="lazy"/></span>`;
    }
    return illustration(project.kind);
  }
  function phaseBadge(phase){return phase?`<span class="phase-badge phase-${String(phase).toLowerCase().replace(/[^a-z]+/g,'-')}">${safeText(phase)}</span>`:'';}
  function buildCard(project,index,opts){
    const signature=opts&&opts.signature;
    const article = document.createElement('article');
    article.className='project-card'+(signature?' project-card--signature':'');
    article.style.animationDelay=`${Math.min(index,9)*35}ms`;
    const tagline=project.signatureTagline?`<span class="project-tagline">${safeText(project.signatureTagline)}</span>`:'';
    article.innerHTML = `<button type="button" class="project-button" aria-label="View ${safeText(project.name)} — ${safeText(project.subtitle)} project details"><span class="project-cover" data-kind="${safeText(project.kind)}">${projectMedia(project)}<span class="cover-tag">${safeText(project.region)}</span>${signature?'':'<span class="cover-number">'+safeText(project.number)+'</span>'}</span><span class="project-card-body">${phaseBadge(project.deliveryPhase)}<span class="project-sector">${safeText(project.sector)}</span><h3>${safeText(project.name)}</h3><span class="project-subtitle">${safeText(project.subtitle)}</span>${tagline}<span class="project-description">${safeText(project.summary)}</span><span class="project-bottom"><span>OPEN CASE STUDY</span><span aria-hidden="true">↗</span></span></span></button>`;
    article.querySelector('button').addEventListener('click',e=>openProject(project.id,e.currentTarget));
    return article;
  }
  function renderSignatures(){
    if(!signatureGrid)return;
    signatureGrid.replaceChildren(...signatureProjects.map((p,i)=>buildCard(p,i,{signature:true})));
  }
  function render(){
    const term = search.value.trim().toLowerCase();
    const visible = projects.filter(p=>{
      const sectorMatch=activeFilter==='All'||p.categories.includes(activeFilter);
      const haystack=[p.name,p.subtitle,p.sector,p.region,p.summary,p.overview,p.actualScope,p.planningContribution,...p.deliverables,...p.methods].join(' ').toLowerCase();
      return sectorMatch && (!term||haystack.includes(term));
    });
    grid.replaceChildren(...visible.map((p,i)=>buildCard(p,i)));
    count.textContent=`Showing ${visible.length} of ${projects.length} projects`;
    empty.hidden=visible.length>0;
    for(const btn of filterButtons){const selected=btn.dataset.filter===activeFilter;btn.classList.toggle('active',selected);btn.setAttribute('aria-pressed',String(selected));}
    renderSignatures();
  }
  if(toggleAllBtn&&allPanel){
    toggleAllBtn.addEventListener('click',()=>{
      const open=allPanel.hidden;
      allPanel.hidden=!open;
      toggleAllBtn.setAttribute('aria-expanded',String(open));
      toggleAllBtn.innerHTML=open?'Hide full project index <span aria-hidden="true">↑</span>':'Show all 18 projects <span aria-hidden="true">↓</span>';
      if(open)allPanel.scrollIntoView({behavior:'smooth',block:'start'});
    });
  }
  const evidenceProjectLink={
    'eot-delay-analysis':'injection-wells',
    'recovery-evm':'injection-wells'
  };
  function openProject(id,trigger,caseStudyId){
    const idx=projects.findIndex(p=>p.id===id);if(idx<0)return;
    activeProject=idx;lastTrigger=trigger||lastTrigger;
    populateDialog(projects[idx],caseStudyId);
    if(!dialog.open){if(typeof dialog.showModal==='function'){dialog.showModal()}else{dialog.setAttribute('open','');}}
    dialog.querySelector('.dialog-scroll').scrollTop=0;
  }
  function populateDialog(p,caseStudyId){
    const set=(id,value)=>{document.getElementById(id).textContent=value;};
    set('dialog-counter',`SELECTED PROJECT / ${p.number} OF ${String(projects.length).padStart(2,'0')}`);
    set('dialog-kicker',p.sector);
    set('dialog-title',p.name);
    set('dialog-subtitle',p.subtitle);
    set('dialog-summary',p.summary);
    set('dialog-overview',p.overview);
    set('dialog-location',p.region);
    set('dialog-role',p.myRole||p.role);
    set('dialog-scale',p.scale||'Scope overview');
    set('dialog-visual-label',p.label.toUpperCase());
    set('dialog-visual-index',p.number);
    const visual=document.getElementById('dialog-visual');visual.dataset.kind=p.kind;
    visual.querySelectorAll('.cover-grid,.cover-illustration,.cover-photo').forEach(n=>n.remove());
    visual.insertAdjacentHTML('afterbegin',projectMedia(p));
    const ul=document.getElementById('dialog-deliverables');ul.replaceChildren(...p.deliverables.map(t=>{const li=document.createElement('li');li.textContent=t;return li;}));
    const badges=document.getElementById('dialog-badges');
    badges.replaceChildren();
    if(p.deliveryPhase){const b=el('span','phase-badge phase-'+String(p.deliveryPhase).toLowerCase().replace(/[^a-z]+/g,'-'),p.deliveryPhase);badges.appendChild(b);}
    if(p.signature){badges.appendChild(el('span','sig-badge','Signature case study'));}
    const stake=document.getElementById('dialog-stakeholders');
    const gridEl=document.getElementById('stakeholder-grid');
    const hasStake=p.client||p.consultant||p.contractor||p.myRole;
    stake.hidden=!hasStake;
    if(hasStake){
      gridEl.replaceChildren();
      [['Client',p.client],['Consultant',p.consultant],['Contractor',p.contractor],['My role',p.myRole||p.role]].forEach(([k,v])=>{
        if(!v)return;
        const dt=el('dt','',k);const dd=el('dd','',v);gridEl.appendChild(dt);gridEl.appendChild(dd);
      });
      const scope=document.getElementById('dialog-actual-scope');
      scope.textContent=p.actualScope||'';
      scope.hidden=!p.actualScope;
    }
    const contrib=document.getElementById('dialog-contribution');
    const contribP=document.getElementById('dialog-planning-contribution');
    contrib.hidden=!p.planningContribution;
    if(p.planningContribution)contribP.textContent=p.planningContribution;
    const snapWrap=document.getElementById('dialog-progress-snapshot');
    if(p.progressSnapshot){
      snapWrap.hidden=false;
      document.getElementById('snapshot-planned').textContent=p.progressSnapshot.planned+'%';
      document.getElementById('snapshot-actual').textContent=p.progressSnapshot.actual+'%';
      document.getElementById('snapshot-note').textContent=(p.progressSnapshot.label?p.progressSnapshot.label+'. ':'')+(p.progressSnapshot.note||'');
    }else snapWrap.hidden=true;
    const caso=document.getElementById('dialog-caso');
    const hasCaso=(p.challenges&&p.challenges.length)||(p.actions&&p.actions.length)||(p.outcomes&&p.outcomes.length);
    caso.hidden=!hasCaso;
    if(hasCaso){
      const fill=(id,items)=>{const u=document.getElementById(id);u.replaceChildren(...(items||[]).map(t=>el('li','',t)));};
      fill('dialog-challenges',p.challenges);
      fill('dialog-actions',p.actions);
      fill('dialog-outcomes',p.outcomes);
    }
    renderCaseStudy(caseStudyId||p.evidenceCase||p.id);
    renderProjectGallery(p);
  }
  function closeDialog(){if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');}
  filterButtons.forEach(btn=>btn.addEventListener('click',()=>{activeFilter=btn.dataset.filter;render();}));
  search.addEventListener('input',render);
  document.getElementById('clear-filters').addEventListener('click',()=>{activeFilter='All';search.value='';render();search.focus();});
  document.getElementById('dialog-close').addEventListener('click',closeDialog);
  document.getElementById('next-project').addEventListener('click',()=>{activeProject=(activeProject+1)%projects.length;populateDialog(projects[activeProject]);dialog.querySelector('.dialog-scroll').scrollTop=0;});
  dialog.addEventListener('click',event=>{if(event.target===dialog)closeDialog();});
  dialog.addEventListener('close',()=>{if(lastTrigger && lastTrigger.isConnected)lastTrigger.focus();});
  menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu');});
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu');}));
  document.getElementById('current-year').textContent=new Date().getFullYear();
  let toastTimeout;
  function toast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>t.classList.remove('visible'),2400);}
  async function copyText(value, successMessage, fallbackLabel){
    if(navigator.clipboard&&window.isSecureContext){try{await navigator.clipboard.writeText(value);toast(successMessage);return}catch(e){}}
    const temp=document.createElement('textarea');temp.value=value;temp.style.position='fixed';temp.style.opacity='0';document.body.appendChild(temp);temp.select();try{document.execCommand('copy');toast(successMessage)}catch(e){toast(fallbackLabel+': '+value)}temp.remove();
  }
  document.getElementById('copy-email').addEventListener('click',()=>copyText('gamaleldin.yousry@gmail.com','Email address copied','Email'));
  document.getElementById('copy-phone').addEventListener('click',()=>copyText('+97477738990','Phone number copied','Phone'));

  const caseData=window.PORTFOLIO_CASES||{};
  const chartLightbox=document.getElementById('chart-lightbox');
  const chartLightboxContent=document.getElementById('chart-lightbox-content');
  const chartExpandBtn=document.getElementById('chart-expand-btn');
  let lastChartNode=null;
  function openChartLightbox(node){
    if(!chartLightbox||!node)return;
    chartLightboxContent.replaceChildren(node.cloneNode(true));
    if(typeof chartLightbox.showModal==='function')chartLightbox.showModal();
    else chartLightbox.setAttribute('open','');
  }
  if(chartExpandBtn)chartExpandBtn.addEventListener('click',()=>openChartLightbox(lastChartNode));
  document.getElementById('chart-lightbox-close')?.addEventListener('click',()=>chartLightbox?.close?.());
  chartLightbox?.addEventListener('click',e=>{if(e.target===chartLightbox)chartLightbox.close();});
  const backTop=document.getElementById('back-to-top');
  if(backTop){
    const onScroll=()=>backTop.classList.toggle('visible',window.scrollY>480);
    window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  }
  function el(tag, cls, text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e;}
  function pointPath(values,w,h,max){return values.map((n,i)=>`${i?'L':'M'}${(i/Math.max(1,values.length-1)*w).toFixed(1)},${(h-((+n||0)/max)*h).toFixed(1)}`).join(' ');}
  function drawChart(ch){
    const holder=el('div','chart-outer');
    holder.appendChild(el('p','chart-type',ch.type==='gantt'?'RELATIVE SEQUENCE / ILLUSTRATIVE':(ch.unit==='persons'?'MANPOWER / DEMONSTRATION':'PROGRESS / PERCENT')));
    if(ch.type==='gantt'){
      const g=el('div','gantt-rows');
      const span=Math.max(...ch.ranges.map(r=>r[1]))+1;
      ch.labels.forEach((label,i)=>{const row=el('div','gantt-row');row.appendChild(el('span','gantt-label',label));const track=el('div','gantt-track');const bar=el('div','gantt-bar');bar.style.left=(ch.ranges[i][0]/span*100)+'%';bar.style.width=((ch.ranges[i][1]-ch.ranges[i][0])/span*100)+'%';bar.title=label+' · relative programme phase';track.appendChild(bar);row.appendChild(track);g.appendChild(row)});
      holder.appendChild(g);holder.appendChild(el('p','chart-caption','The timeline is normalized to illustrate workstream overlap; it is not a contractual date commitment.'));return holder;
    }
    if(ch.type==='bars'){
      const max=ch.max||100;
      const g=el('div','bar-chart');
      for(let i=0;i<ch.labels.length;i++){
        const row=el('div','bar-row');row.appendChild(el('span','bar-label',ch.labels[i]));
        for(let j=0;j<ch.series.length;j++){
          const track=el('div','bar-track');const bar=el('div','bar-fill '+(j===0?'bar-a':'bar-b'));
          const value=ch.series[j].values[i];bar.style.width=(value/max*100)+'%';bar.title=`${ch.series[j].name}: ${value}${ch.unit==='persons'?' persons':'%'}`;
          track.appendChild(bar);row.appendChild(track);
        }
        g.appendChild(row)
      }
      holder.appendChild(g)
    } else {
      const max=100;const W=780,H=248,pad=5;const ns='http://www.w3.org/2000/svg';
      const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox',`0 0 ${W} ${H+26}`);svg.setAttribute('role','img');svg.setAttribute('aria-label',`Line graph: ${ch.name}`);svg.classList.add('evidence-svg');
      for(let tick=0;tick<=4;tick++){const line=document.createElementNS(ns,'line');const y=H-(tick/4*H)+pad;line.setAttribute('x1','0');line.setAttribute('x2',W);line.setAttribute('y1',y);line.setAttribute('y2',y);line.setAttribute('class','gridline');svg.appendChild(line)}
      ch.series.forEach((series,i)=>{
        const path=document.createElementNS(ns,'path');path.setAttribute('d',pointPath(series.values,W,H,max));path.setAttribute('transform',`translate(0,${pad})`);path.setAttribute('class',i?'line-actual':'line-plan');svg.appendChild(path);
        series.values.forEach((v,j)=>{const c=document.createElementNS(ns,'circle');c.setAttribute('cx',j/Math.max(1,series.values.length-1)*W);c.setAttribute('cy',H-v/max*H+pad);c.setAttribute('r',series.values.length>25?4:6);c.setAttribute('class','chart-point point-'+i);const title=document.createElementNS(ns,'title');title.textContent=`${series.name} • relative week ${j+1}: ${v}%`;c.appendChild(title);svg.appendChild(c)})
      });
      holder.appendChild(svg);const a=el('div','plot-axis');a.appendChild(el('span','',"PERIOD 01"));a.appendChild(el('span','',"RELATIVE PROGRAMME WEEKS"));a.appendChild(el('span','',"PERIOD "+String(ch.labels.length).padStart(2,'0')));holder.appendChild(a);
      holder.appendChild(el('p','chart-caption',`Relative periods 01—${String(ch.labels.length).padStart(2,'0')}. Hover or tap a point to inspect its value.`));
    }
    const legend=el('div','case-legend');ch.series.forEach((x,j)=>{const l=el('span','legend-entry '+(j?'legend-b':'legend-a'),x.name);legend.appendChild(l)});holder.appendChild(legend);return holder;
  }

  function renderProjectGallery(project){
    const section=document.getElementById('project-gallery');
    const grid=document.getElementById('gallery-grid');
    const items=Array.isArray(project.gallery)?project.gallery:[];
    if(!items.length){section.hidden=true;grid.replaceChildren();return;}
    section.hidden=false;
    grid.replaceChildren(...items.map(item=>{
      const fig=el('figure','gallery-item');
      const img=el('img');img.src=item.src;img.alt=item.caption||project.name;img.loading='lazy';
      fig.appendChild(img);
      if(item.caption) fig.appendChild(el('figcaption','',item.caption));
      return fig;
    }));
  }

  function renderCaseStudy(id){
    const section=document.getElementById('case-evidence');const obj=caseData[id];
    if(!obj){section.hidden=true;return}section.hidden=false;
    document.getElementById('case-eyebrow').textContent=obj.eyebrow;
    document.getElementById('case-title').textContent=obj.title;
    document.getElementById('case-description').textContent=obj.description;
    document.getElementById('case-source').textContent=obj.source;
    document.getElementById('case-privacy').textContent=obj.privacy;
    const ul=document.getElementById('case-insights');ul.replaceChildren(...obj.insights.map(item=>el('li','',item)));
    const tabs=document.getElementById('case-tabs'),plot=document.getElementById('case-plot');tabs.replaceChildren();
    const tierEl=document.getElementById('case-data-tier');
    const tier=obj.dataTier||(id==='private-villa'?'illustrative':'programme-record');
    if(tierEl){
      tierEl.hidden=false;
      const illustrative=tier==='illustrative';
      tierEl.className='case-data-tier '+(illustrative?'is-illustrative':'is-real');
      tierEl.textContent=illustrative?'Illustrative data — reconstructed for public portfolio (not a live performance claim).':'Real project / programme-record data — values reflect the cited reporting period or approved exhibits.';
    }
    function showChart(ch){
      const node=drawChart(ch);
      lastChartNode=node;
      plot.replaceChildren(node);
      if(chartExpandBtn)chartExpandBtn.hidden=false;
    }
    obj.charts.forEach((ch,i)=>{const btn=el('button','case-tab'+(i?'':' active'),ch.name);btn.type='button';btn.setAttribute('aria-pressed',(!i).toString());btn.addEventListener('click',()=>{tabs.querySelectorAll('button').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});btn.classList.add('active');btn.setAttribute('aria-pressed','true');showChart(ch)});tabs.appendChild(btn)});
    showChart(obj.charts[0]);
  }
  document.querySelectorAll('[data-evidence-project]').forEach(node=>node.addEventListener('click',()=>{
    const caseId=node.dataset.evidenceProject;
    const projectId=evidenceProjectLink[caseId]||caseId;
    openProject(projectId,node,caseId);
    const top=document.getElementById('case-evidence');
    if(top&&!top.hidden)top.scrollIntoView({block:'start',behavior:'smooth'});
  }));

  render();
})();
