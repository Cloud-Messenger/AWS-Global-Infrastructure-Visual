(function(){const c=document.getElementById('globe'),x=c.getContext('2d'),D=Math.PI/180;
const LAND=[[[-165,65],[-95,72],[-55,50],[-80,25],[-97,17],[-80,8],[-120,32]],[[-80,8],[-50,0],[-35,-8],[-55,-35],[-70,-55],[-75,-20]],[[-10,40],[-5,58],[30,70],[100,75],[170,66],[140,40],[122,22],[105,10],[80,8],[72,20],[50,28],[35,35],[10,44]],[[-17,15],[-5,35],[32,31],[51,12],[40,-15],[20,-35],[12,-10],[-10,5]],[[114,-22],[130,-12],[150,-20],[152,-30],[135,-35],[115,-33]]];
const G={lon:70,lat:15,tl:null,zoom:1,mode:'all',reduce:false,t:0};window.Globe=G;
G.focus=(lon,lat,z)=>{G.tl={lon,lat};if(z)G.zoom=z};G.free=()=>{G.tl=null};
function P(lo,la){const l=(lo-G.lon)*D,f=la*D,f0=G.lat*D,R=c.width*.42*G.zoom;const v=Math.sin(f0)*Math.sin(f)+Math.cos(f0)*Math.cos(f)*Math.cos(l)>0;return{x:c.width/2+R*Math.cos(f)*Math.sin(l),y:c.height/2-R*(Math.cos(f0)*Math.sin(f)-Math.sin(f0)*Math.cos(f)*Math.cos(l)),v}}
const hits=[];
function dot(p,col,r,lab){if(!p.v)return;x.beginPath();x.arc(p.x,p.y,r+(G.reduce?0:Math.sin(G.t*4)*1.2),0,7);x.fillStyle=col;x.shadowColor=col;x.shadowBlur=12;x.fill();x.shadowBlur=0;if(lab){x.fillStyle='#fff';x.font='11px sans-serif';x.fillText(lab,p.x+8,p.y+4)}}
function arc(a,b,col){if(!a.v||!b.v)return;x.strokeStyle=col;x.lineWidth=1.2;x.beginPath();x.moveTo(a.x,a.y);x.quadraticCurveTo((a.x+b.x)/2,(a.y+b.y)/2-40,b.x,b.y);x.stroke();const k=(G.t*.5)%1;x.fillStyle='#fff';x.beginPath();x.arc(a.x+(b.x-a.x)*k,a.y+(b.y-a.y)*k-40*Math.sin(Math.PI*k),3,0,7);x.fill()}
function draw(){if(!G.reduce)G.t+=.016;if(G.tl){G.lon+=(G.tl.lon-G.lon)*.06;G.lat+=(G.tl.lat-G.lat)*.06}else if(!G.reduce)G.lon+=.25;
const R=c.width*.42*G.zoom;x.clearRect(0,0,c.width,c.height);const g=x.createRadialGradient(c.width*.4,c.height*.4,R*.1,c.width/2,c.height/2,R);g.addColorStop(0,'#16427a');g.addColorStop(1,'#071a38');x.fillStyle=g;x.beginPath();x.arc(c.width/2,c.height/2,R,0,7);x.fill();x.strokeStyle='rgba(47,208,255,.5)';x.stroke();
x.fillStyle='rgba(80,200,120,.55)';LAND.forEach(poly=>{const pts=poly.map(q=>P(q[0],q[1])).filter(q=>q.v);if(pts.length<3)return;x.beginPath();pts.forEach((q,i)=>i?x.lineTo(q.x,q.y):x.moveTo(q.x,q.y));x.fill()});
const m=G.mode,showR=m!=='edge',showE=m==='edge'||m==='all'||m==='flow',showU=m!=='region';
if(showU&&showR)USERS.forEach((u,i)=>arc(P(u.lon,u.lat),P(REGIONS[i].lon,REGIONS[i].lat),'rgba(47,208,255,.6)'));
if(showE)EDGES.forEach(e=>dot(P(e[0],e[1]),'#b36bff',3));
if(showU)USERS.forEach(u=>dot(P(u.lon,u.lat),'#e50914',4,u.n));
hits.length=0;if(showR)REGIONS.forEach(r=>{const p=P(r.lon,r.lat);dot(p,'#ff9900',6,r.c);if(p.v)hits.push({p,r})});
requestAnimationFrame(draw)}
c.addEventListener('click',e=>{const b=c.getBoundingClientRect(),mx=(e.clientX-b.left)*c.width/b.width,my=(e.clientY-b.top)*c.height/b.height;const h=hits.find(h=>Math.hypot(h.p.x-mx,h.p.y-my)<14);if(h)window.showRegion(h.r)});
document.getElementById('zi').onclick=()=>G.zoom=Math.min(2.5,G.zoom+.2);document.getElementById('zo').onclick=()=>G.zoom=Math.max(.7,G.zoom-.2);draw()})();
