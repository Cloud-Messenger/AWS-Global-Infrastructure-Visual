(function(){const Q=[
["What is an AWS Region?",["A separate geographic area with multiple AZs","One server","A CDN cache"],0,"Regions are isolated geographic areas."],
["What is an Availability Zone?",["A city","One or more discrete data centers in a Region","An edge cache"],1,"AZs have independent power, cooling and networking."],
["What is a data center?",["A physical facility with servers, storage and networking","A VPC","A DNS record"],0,"AZs are made of one or more data centers."],
["What is an Edge Location?",["A site in AWS's content delivery network","A Region","An EC2 host"],0,"Edges serve cached content; they are not Regions or AZs."],
["Region vs AZ?",["Same thing","A Region contains multiple AZs","An AZ contains Regions"],1,"Regions contain AZs."],
["Typical minimum AZs for a multi-AZ design?",["1","2","10"],1,"Two or more."],
["One AZ fails. What happens in a well-designed multi-AZ app?",["Everything stops","Traffic continues in healthy AZs","DNS is deleted"],1,"The ALB routes to healthy targets."],
["What is Amazon CloudFront?",["A CDN","A database","A firewall only"],0,"It caches and delivers content globally."],
["What is a cache hit?",["Content served from the edge cache","Content fetched from origin","An error"],0,"No origin trip is needed."],
["What is a cache miss?",["CloudFront must fetch content from the origin","Content served from cache","The user is blocked"],0,"It may then cache eligible content."],
["Purpose of Route 53?",["DNS and routing","Block storage","Load balancing only"],0,"Managed DNS service."],
["How does an ALB support HA?",["Health checks and multi-AZ targets","Encrypts disks","Replaces Regions"],0,"It stops sending to unhealthy targets."],
["What is fault isolation?",["Limiting a failure's blast radius","Deleting servers","Caching"],0,"AZs and Regions isolate faults."],
["How does CloudFront get content on a miss?",["From the configured origin","From the user","From Route 53"],0,"Origins include S3 or an ALB."],
["Multi-AZ vs Multi-Region?",["Multi-Region protects against a whole-Region event; Multi-AZ doesn't","Identical","Multi-AZ is global"],0,"Multi-Region DR is a separate strategy with its own RTO/RPO."]];
let i,s;const el=document.getElementById('quiz');
function show(){if(i>=Q.length){el.innerHTML=`<h3>Score: ${s}/${Q.length} (${Math.round(100*s/Q.length)}%)</h3><button id="rs">Restart quiz</button>`;document.getElementById('rs').onclick=start;return}
const q=Q[i];el.innerHTML=`<p><b>Q${i+1}/${Q.length}.</b> ${q[0]}</p>`+q[1].map((o,k)=>`<button class="opt" data-k="${k}">${o}</button>`).join('')+'<p id="fb"></p>';
el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{const k=+b.dataset.k;el.querySelectorAll('.opt').forEach(x=>x.disabled=true);el.querySelectorAll('.opt')[q[2]].classList.add('ok');if(k==q[2])s++;else b.classList.add('bad');document.getElementById('fb').innerHTML=(k==q[2]?'✅ Correct. ':'❌ Not quite. ')+q[3]+' <button id="nx">Next</button>';document.getElementById('nx').onclick=()=>{i++;show()}})}
function start(){i=0;s=0;show()}start()})();
