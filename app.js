// ==================== QUESTION DATA ====================
const questions = [
  // MCQ Part 1 (Q1-Q25)
  {id:1,type:'mcq',cat:'mcq1',q:'In RTCP what CP refers to?',
    opts:['Canal Protocol','Packet Protocol','Time Protocol','Control Protocol'],ans:3},
  {id:2,type:'mcq',cat:'mcq1',q:'Determine number of packets send in ___',
    opts:['Receiver','Source','Sender','None of them'],ans:2},
  {id:3,type:'mcq',cat:'mcq1',q:'Function of SIP server is ___',
    opts:['Client','Time Management','Registrar','Message'],ans:1},
  {id:4,type:'mcq',cat:'mcq1',q:'SSRC field is ___ bits',
    opts:['32','15','16','None of them'],ans:0},
  {id:5,type:'mcq',cat:'mcq1',q:'In RTP sequence number is ___ bits',
    opts:['15','16','7','32'],ans:1},
  {id:6,type:'mcq',cat:'mcq1',q:'In VoIP, what does "IP" refer to?',
    opts:['Internet Provider','Streaming','Internet Protocol','Interconnected'],ans:2},
  {id:7,type:'mcq',cat:'mcq1',q:'RTCP attempts to limit its traffic to ___ session of bandwidth',
    opts:['5%','75%','25%','2%'],ans:0},
  {id:8,type:'mcq',cat:'mcq1',q:'Which file format is commonly used for storing video in multimedia applications?',
    opts:['JPEG','MP4','GIF','PNG'],ans:1},
  {id:9,type:'mcq',cat:'mcq1',q:'Main components of multimedia are ___',
    opts:['Sound','Text','Animation','All of them'],ans:3},
  {id:10,type:'mcq',cat:'mcq1',q:'What is "QoS" in VoIP networks?',
    opts:['Quality of Security','Differentiated Service','Quality of Service','All of them'],ans:2},
  {id:11,type:'mcq',cat:'mcq1',q:'___ bits used for differentiated service code',
    opts:['6','7','8','9'],ans:0},
  {id:12,type:'mcq',cat:'mcq1',q:'Which of the following used for Traffic management?',
    opts:['Time','Per-flow','Class','Out'],ans:1},
  {id:13,type:'mcq',cat:'mcq1',q:'Network support for multimedia include ___',
    opts:['Making best effort service','Differentiated service','Pre-connection QoS','All of them'],ans:3},
  {id:14,type:'mcq',cat:'mcq1',q:'What does NAT do in the context of VoIP?',
    opts:['Better quality','Maps private IP addresses','Encrypts voice','Time cut'],ans:1},
  {id:15,type:'mcq',cat:'mcq1',q:'SIP uses ___ principle',
    opts:['KISS','KIS','KSS','SKP'],ans:0},
  {id:16,type:'mcq',cat:'mcq1',q:'Skype peers with special functions',
    opts:['Clients','Super Node','Overlay','Login Server'],ans:1},
  {id:17,type:'mcq',cat:'mcq1',q:'Which component of multimedia deals with visual elements such as images, videos, and animations?',
    opts:['Audio','Text','Graphics','Interactivity'],ans:2},
  {id:18,type:'mcq',cat:'mcq1',q:'What is the purpose of a firewall in a multimedia networking application?',
    opts:['To enhance video quality','To regulate network traffic and provide security','To compress multimedia files','To store multimedia content'],ans:1},
  {id:19,type:'mcq',cat:'mcq1',q:'What is streaming stored video?',
    opts:['Live broadcasting of video content','Downloading video content to a device for offline viewing','Continuously playing video content while it\'s being downloaded','Pausing video playback to buffer content'],ans:2},
  {id:20,type:'mcq',cat:'mcq1',q:'In video streaming, what is buffering?',
    opts:['A feature to rewind and fast forward video','A method to reduce video quality','Storing and preloading a portion of the video to prevent playback interruptions','The process of encoding video for streaming'],ans:2},
  {id:21,type:'mcq',cat:'mcq1',q:'Which of the following is a common challenge in video streaming?',
    opts:['Low latency','Unlimited bandwidth','High cost of content production','Uncompressed video files'],ans:0},
  {id:22,type:'mcq',cat:'mcq1',q:'Which of the following is a popular VoIP application that allows users to make free voice and video calls over the internet?',
    opts:['Skype','WhatsApp','Facebook','Twitter'],ans:0},
  {id:23,type:'mcq',cat:'mcq1',q:'Skype peers connect directly to each other for VoIP call called what?',
    opts:['Clients','Super Node','Overlay Network','All of them'],ans:0},
  {id:24,type:'mcq',cat:'mcq1',q:'Skype peers with special functions called ___',
    opts:['Super Node','Service','Login Server','P2P'],ans:0},
  {id:25,type:'mcq',cat:'mcq1',q:'Which multimedia networking application is commonly used for remotely controlling and monitoring Internet of Things (IoT) devices?',
    opts:['Video conferencing','Smart home automation','Online gaming','Social media'],ans:1},

  // Descriptive (Q26-Q27)
  {id:26,type:'descriptive',cat:'descriptive',q:'Draw RTP header?',
    answer:'<strong>RTP Header Fields:</strong><br><table style="border-collapse:collapse;margin-top:8px;width:100%"><tr><td style="border:1px solid rgba(110,231,183,.3);padding:10px;text-align:center">Payload Type</td><td style="border:1px solid rgba(110,231,183,.3);padding:10px;text-align:center">Sequence Number</td><td style="border:1px solid rgba(110,231,183,.3);padding:10px;text-align:center">Timestamp</td></tr><tr><td style="border:1px solid rgba(110,231,183,.3);padding:10px;text-align:center" colspan="2">Synchronization Source ID (SSRC)</td><td style="border:1px solid rgba(110,231,183,.3);padding:10px;text-align:center">Miscellaneous Fields</td></tr></table>'},
  {id:27,type:'descriptive',cat:'descriptive',q:'What are RTP packet types?',
    answer:'<strong>RTP Packet Types:</strong><br>1. <strong>Receiver Report Packets</strong> — sent by participants that receive but do not send data.<br>2. <strong>Sender Report Packets</strong> — sent by active senders with transmission and reception statistics.<br>3. <strong>Source Description Packets</strong> — carry descriptive information about the participants.'},

  // Abbreviations (Q28-Q38)
  {id:28,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'HTTP',answer:'Hypertext Transfer Protocol'},
  {id:29,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'WWW',answer:'World Wide Web'},
  {id:30,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'IP',answer:'Internet Protocol'},
  {id:31,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'RTP',answer:'Real Time Protocol'},
  {id:32,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'VoIP',answer:'Voice over IP'},
  {id:33,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'CBR',answer:'Constant Bit Rate'},
  {id:34,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'VBR',answer:'Variable Bit Rate'},
  {id:35,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'PHB',answer:'Per Hop Behavior'},
  {id:36,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'RTSP',answer:'Real Time Streaming Protocol'},
  {id:37,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'IP',answer:'Internet Protocol'},
  {id:38,type:'abbr',cat:'abbreviation',q:'Write the long term for:',abbr:'DSCP',answer:'Differentiated Service Code Point'},

  // MCQ Part 2 (Q39-Q50)
  {id:39,type:'mcq',cat:'mcq2',q:'What is streaming stored video?',
    opts:['Live broadcasting of video content','Downloading video content to a device for offline viewing','Continuously playing video content while it\'s being downloaded','Pausing video playback to buffer content'],ans:2},
  {id:40,type:'mcq',cat:'mcq2',q:'What is the purpose of adaptive bitrate streaming in video streaming services?',
    opts:['To increase video resolution','To reduce video file size','To adjust video quality based on the viewer\'s internet speed','To provide subtitles for video content'],ans:2},
  {id:41,type:'mcq',cat:'mcq2',q:'In video streaming, what is buffering?',
    opts:['A feature to rewind and fast forward video','A method to reduce video quality','Storing and preloading a portion of the video to prevent playback interruptions','The process of encoding video for streaming'],ans:2},
  {id:42,type:'mcq',cat:'mcq2',q:'Which of the following is a common challenge in video streaming?',
    opts:['Low latency','Unlimited bandwidth','High cost of content production','Uncompressed video files'],ans:0},
  {id:43,type:'mcq',cat:'mcq2',q:'Which device is commonly used for streaming video content on a TV?',
    opts:['Laptop','Smartphone','Smart TV','Microwave'],ans:2},
  {id:44,type:'mcq',cat:'mcq2',q:'Which of the following is NOT a potential challenge of VoIP?',
    opts:['Reliability during power outages','Call quality affected by network congestion','Limited availability of international calling options','Security concerns such as eavesdropping'],ans:2},
  {id:45,type:'mcq',cat:'mcq2',q:'What is the term for the process of connecting a traditional phone line to a VoIP network?',
    opts:['Analog conversion','Digital transformation','VoIP bridging','VoIP gateway'],ans:3},
  {id:46,type:'mcq',cat:'mcq2',q:'What is the primary challenge in providing network support for multimedia applications?',
    opts:['Ensuring low latency and high bandwidth','Reducing multimedia file sizes','Increasing network security','Enhancing multimedia content quality'],ans:0},
  {id:47,type:'mcq',cat:'mcq2',q:'What is the purpose of a codec in multimedia network support?',
    opts:['To create multimedia content','To design graphical user interfaces','To compress and decompress audio and video data','To route network traffic'],ans:2},
  {id:48,type:'mcq',cat:'mcq2',q:'Which network protocol is used to facilitate real-time video conferencing?',
    opts:['VoIP (Voice over IP)','SMTP (Simple Mail Transfer Protocol)','FTP (File Transfer Protocol)','HTTP (Hypertext Transfer Protocol)'],ans:0},
  {id:49,type:'mcq',cat:'mcq2',q:'What is the primary objective of network support for multimedia applications?',
    opts:['To prioritize text-based content','To maximize network congestion','To provide a seamless and high-quality multimedia experience','To reduce the use of multimedia elements'],ans:2},
  {id:50,type:'mcq',cat:'mcq2',q:'What does SIP stand for in the context of real-time communication protocols?',
    opts:['Secure Internet Protocol','Session Initiation Protocol','Streaming Internet Protocol','System Integration Protocol'],ans:1},
];

// ==================== STATE ====================
let mode = 'quiz'; // 'quiz' or 'study'
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = {};
const letters = ['A','B','C','D'];
const catNames = {
  all:'هەموو پرسیارەکان', mcq1:'هەڵبژاردنی (بەشی ١)',
  descriptive:'وەسفی', abbreviation:'کورتکراوەکان', mcq2:'هەڵبژاردنی (بەشی ٢)'
};

// ==================== PARTICLES ====================
function initParticles(){
  const c=document.getElementById('particles');
  if(!c)return;
  const ctx=c.getContext('2d');
  let w,h,dots=[];
  function resize(){w=c.width=window.innerWidth;h=c.height=window.innerHeight}
  resize();window.addEventListener('resize',resize);
  for(let i=0;i<60;i++){
    dots.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+.5,
      dx:(Math.random()-.5)*.3,dy:(Math.random()-.5)*.3,
      o:Math.random()*.4+.1});
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    dots.forEach(d=>{
      d.x+=d.dx;d.y+=d.dy;
      if(d.x<0)d.x=w;if(d.x>w)d.x=0;
      if(d.y<0)d.y=h;if(d.y>h)d.y=0;
      ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(167,139,250,${d.o})`;ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ==================== NAVIGATION ====================
function goTo(screenId){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const screen = document.getElementById(screenId);
  screen.classList.add('active');
  screen.scrollTop = 0;
}

function startQuiz(){
  mode='quiz';
  document.getElementById('modeLabel').textContent='ڕەوشی تاقیکردنەوە — بەشێک هەڵبژێرە';
  goTo('categories');
}

function startStudy(){
  mode='study';
  document.getElementById('modeLabel').textContent='ڕەوشی خوێندنەوە — بەشێک هەڵبژێرە';
  goTo('categories');
}

function selectCategory(cat){
  currentQuestions = cat==='all' ? [...questions] : questions.filter(q=>q.cat===cat);
  currentIndex=0; score=0; answered={};
  if(mode==='study'){
    renderStudy(cat);
    goTo('study');
  } else {
    renderQuestion();
    goTo('quiz');
  }
}

// ==================== QUIZ MODE ====================
function renderQuestion(){
  const q=currentQuestions[currentIndex];
  const total=currentQuestions.length;
  // progress
  document.getElementById('progressFill').style.width=((currentIndex+1)/total*100)+'%';
  document.getElementById('progressText').textContent=`${currentIndex+1}/${total}`;
  document.getElementById('scoreNum').textContent=score;
  // card
  const card=document.getElementById('questionCard');
  card.style.animation='none';card.offsetHeight;card.style.animation='cardIn .5s cubic-bezier(.4,0,.2,1)';

  document.getElementById('qBadge').textContent=catNames[q.cat]||'';
  document.getElementById('qNumber').textContent=`Question ${q.id}`;
  document.getElementById('qText').textContent=q.q;
  document.getElementById('answerReveal').classList.add('hidden');

  const area=document.getElementById('optionsArea');
  area.innerHTML='';

  const checkBtn=document.getElementById('checkBtn');
  const revealBtn=document.getElementById('revealBtn');
  checkBtn.style.display='none';
  revealBtn.style.display='none';

  if(q.type==='mcq'){
    checkBtn.style.display='inline-flex';
    const div=document.createElement('div');div.className='options-list';
    q.opts.forEach((opt,i)=>{
      const btn=document.createElement('button');btn.className='option-btn';
      btn.innerHTML=`<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
      btn.onclick=()=>selectOption(i);
      if(answered[currentIndex]!==undefined){
        btn.style.pointerEvents='none';
        if(i===q.ans)btn.classList.add('correct-reveal');
        if(answered[currentIndex]===i){
          btn.classList.add(i===q.ans?'correct':'wrong');
        }
      }
      div.appendChild(btn);
    });
    area.appendChild(div);
    if(answered[currentIndex]!==undefined) checkBtn.style.display='none';
  } else if(q.type==='abbr'){
    checkBtn.style.display='inline-flex';
    const div=document.createElement('div');div.className='abbr-area';
    div.innerHTML=`<div class="abbr-label">${q.abbr}</div>
      <input class="abbr-input" id="abbrInput" type="text" placeholder="Type the full term..." autocomplete="off">`;
    area.appendChild(div);
    if(answered[currentIndex]!==undefined){
      const inp=div.querySelector('.abbr-input');
      inp.value=q.answer;inp.disabled=true;inp.classList.add('correct');
      checkBtn.style.display='none';
    }
  } else if(q.type==='descriptive'){
    revealBtn.style.display='inline-flex';
    if(answered[currentIndex]!==undefined){
      revealBtn.style.display='none';
      document.getElementById('answerReveal').classList.remove('hidden');
      document.getElementById('revealContent').innerHTML=q.answer;
    }
  }

  // nav buttons
  document.getElementById('prevBtn').style.visibility=currentIndex>0?'visible':'hidden';
  const nextBtn=document.getElementById('nextBtn');
  nextBtn.textContent=currentIndex===total-1?'ئەنجامەکان':'دواتر';
}

function selectOption(i){
  if(answered[currentIndex]!==undefined)return;
  document.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('selected'));
  document.querySelectorAll('.option-btn')[i].classList.add('selected');
}

function checkAnswer(){
  const q=currentQuestions[currentIndex];
  if(q.type==='mcq'){
    const sel=document.querySelector('.option-btn.selected');
    if(!sel)return;
    const idx=[...document.querySelectorAll('.option-btn')].indexOf(sel);
    answered[currentIndex]=idx;
    if(idx===q.ans)score++;
    document.querySelectorAll('.option-btn').forEach((btn,i)=>{
      btn.style.pointerEvents='none';
      if(i===q.ans)btn.classList.add(i===idx?'correct':'correct-reveal');
      if(i===idx&&i!==q.ans)btn.classList.add('wrong');
    });
    document.getElementById('checkBtn').style.display='none';
    document.getElementById('scoreNum').textContent=score;
  } else if(q.type==='abbr'){
    const inp=document.getElementById('abbrInput');
    const val=inp.value.trim().toLowerCase();
    const correct=q.answer.toLowerCase();
    answered[currentIndex]=val;
    if(val===correct||val.replace(/\s+/g,' ')===correct.replace(/\s+/g,' ')){
      inp.classList.add('correct');score++;
    } else {
      inp.classList.add('wrong');
      setTimeout(()=>{inp.value=q.answer;inp.classList.remove('wrong');inp.classList.add('correct')},800);
    }
    inp.disabled=true;
    document.getElementById('checkBtn').style.display='none';
    document.getElementById('scoreNum').textContent=score;
  }
}

function revealAnswer(){
  const q=currentQuestions[currentIndex];
  answered[currentIndex]='revealed';
  document.getElementById('answerReveal').classList.remove('hidden');
  document.getElementById('revealContent').innerHTML=q.answer;
  document.getElementById('revealBtn').style.display='none';
}

function nextQuestion(){
  if(currentIndex>=currentQuestions.length-1){showResults();return;}
  currentIndex++;renderQuestion();
}

function prevQuestion(){
  if(currentIndex<=0)return;
  currentIndex--;renderQuestion();
}

// ==================== STUDY MODE ====================
function renderStudy(cat){
  document.getElementById('studyTitle').textContent=catNames[cat]||'خوێندنەوە';
  const container=document.getElementById('studyCards');
  container.innerHTML='';
  currentQuestions.forEach((q,i)=>{
    const card=document.createElement('div');card.className='study-card';
    card.style.animationDelay=`${Math.min(i*0.05,1)}s`;
    let content=`<div class="s-num">Question ${q.id}</div><div class="s-question">${q.q}</div>`;
    if(q.type==='mcq'){
      content+='<div class="s-options">';
      q.opts.forEach((o,j)=>{
        content+=`<div class="s-opt ${j===q.ans?'is-correct':''}">${letters[j]}) ${o}</div>`;
      });
      content+='</div>';
    } else if(q.type==='abbr'){
      content+=`<div class="s-question" style="margin-bottom:6px"><strong style="color:var(--purple);font-size:1.2rem">${q.abbr}</strong></div>`;
      content+=`<div class="s-answer"><strong>Answer:</strong> ${q.answer}</div>`;
    } else if(q.type==='descriptive'){
      content+=`<div class="s-answer">${q.answer}</div>`;
    }
    card.innerHTML=content;
    container.appendChild(card);
  });
}

// ==================== RESULTS ====================
function showResults(){
  goTo('results');
  const total=currentQuestions.length;
  const mcqCount=currentQuestions.filter(q=>q.type==='mcq'||q.type==='abbr').length;
  const pct=mcqCount>0?Math.round(score/mcqCount*100):0;

  // icon & messages
  let icon,title,sub;
  if(pct>=80){icon='🎉';title='زۆر باشە!';sub='ئەدای تۆ نایابە، بەردەوام بە!';}
  else if(pct>=60){icon='👏';title='باشە!';sub='ئەدای باشت هەیە، کەمێک زیاتر تەمرین بکە!';}
  else if(pct>=40){icon='💪';title='هەوڵت باشە!';sub='دەتوانیت باشتر بیت، بەردەوام بە!';}
  else{icon='📖';title='زیاتر بخوێنەوە';sub='پێویستە زیاتر خوێندنەوە بکەیت!';}

  document.getElementById('resultsIcon').textContent=icon;
  document.getElementById('resultsTitle').textContent=title;
  document.getElementById('resultsSubtitle').textContent=sub;
  document.getElementById('scoreDetail').textContent=`${score} / ${mcqCount}`;

  const answeredCount=Object.keys(answered).length;
  const wrongCount=answeredCount-score-(Object.values(answered).filter(v=>v==='revealed').length);
  const skippedCount=total-answeredCount;
  document.getElementById('correctCount').textContent=score;
  document.getElementById('wrongCount').textContent=Math.max(0,wrongCount);
  document.getElementById('skippedCount').textContent=skippedCount;

  // animate ring
  const ring=document.getElementById('scoreRing');
  const circumference=534;
  const offset=circumference-(pct/100)*circumference;
  setTimeout(()=>{
    ring.style.transition='stroke-dashoffset 1.5s cubic-bezier(.4,0,.2,1)';
    ring.style.strokeDashoffset=offset;
  },300);

  // animate percent
  let current=0;
  const interval=setInterval(()=>{
    current+=1;
    if(current>pct){clearInterval(interval);return;}
    document.getElementById('scorePercent').textContent=current+'%';
  },20);

  if(pct>=60)launchConfetti();
}

// ==================== CONFETTI ====================
function launchConfetti(){
  const c=document.getElementById('confetti');
  const ctx=c.getContext('2d');
  c.width=window.innerWidth;c.height=window.innerHeight;
  const pieces=[];
  const colors=['#a78bfa','#f472b6','#34d399','#fbbf24','#818cf8','#fb7185','#67e8f9'];
  for(let i=0;i<120;i++){
    pieces.push({
      x:Math.random()*c.width,y:Math.random()*c.height-c.height,
      w:Math.random()*8+4,h:Math.random()*6+3,
      color:colors[Math.floor(Math.random()*colors.length)],
      dx:(Math.random()-.5)*3,dy:Math.random()*4+2,
      rot:Math.random()*360,dr:Math.random()*6-3,
      o:1
    });
  }
  let frame=0;
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    pieces.forEach(p=>{
      p.x+=p.dx;p.y+=p.dy;p.rot+=p.dr;
      if(frame>100)p.o-=.01;
      if(p.o<=0)return;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);
      ctx.globalAlpha=Math.max(0,p.o);ctx.fillStyle=p.color;
      ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();
    });
    frame++;
    if(frame<200)requestAnimationFrame(draw);
    else ctx.clearRect(0,0,c.width,c.height);
  }
  draw();
}

// ==================== MUSIC PLAYER ====================
const playlist = [
  { title: 'Bo Toray', src: 'Bo_Toray.mp3' },
  { title: 'Kurmancî Here Gule', src: 'Kurmanci_Here_Gule.mp3' }
];
let currentSong = 0;
let isPlaying = false;
let playerOpen = false;

function initMusicPlayer(){
  const audio = document.getElementById('audioPlayer');
  audio.src = playlist[0].src;
  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('loadedmetadata', ()=>{
    document.getElementById('mpDuration').textContent = formatTime(audio.duration);
  });
  audio.addEventListener('ended', ()=> nextSong());
}

function togglePlayer(){
  playerOpen = !playerOpen;
  document.getElementById('musicPlayer').classList.toggle('open', playerOpen);
}

function togglePlay(){
  const audio = document.getElementById('audioPlayer');
  if(isPlaying){ audio.pause(); } else { audio.play(); }
  isPlaying = !isPlaying;
  updatePlayUI();
}

function updatePlayUI(){
  document.getElementById('playIcon').style.display = isPlaying ? 'none' : 'block';
  document.getElementById('pauseIcon').style.display = isPlaying ? 'block' : 'none';
  document.getElementById('mpVinyl').classList.toggle('spinning', isPlaying);
  document.getElementById('mpBars').classList.toggle('active', isPlaying);
}

function nextSong(){
  currentSong = (currentSong + 1) % playlist.length;
  loadSong();
}

function prevSong(){
  currentSong = (currentSong - 1 + playlist.length) % playlist.length;
  loadSong();
}

function loadSong(){
  const audio = document.getElementById('audioPlayer');
  audio.src = playlist[currentSong].src;
  document.getElementById('mpSongName').textContent = playlist[currentSong].title;
  if(isPlaying) audio.play();
}

function updateProgress(){
  const audio = document.getElementById('audioPlayer');
  if(!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  document.getElementById('mpProgressFill').style.width = pct + '%';
  document.getElementById('mpCurrentTime').textContent = formatTime(audio.currentTime);
}

function seekAudio(e){
  const audio = document.getElementById('audioPlayer');
  const bar = document.getElementById('mpProgressBar');
  const rect = bar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pct * audio.duration;
}

function formatTime(s){
  if(!s || isNaN(s)) return '0:00';
  const m = Math.floor(s/60);
  const sec = Math.floor(s%60);
  return m + ':' + (sec<10?'0':'') + sec;
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded',()=>{
  initParticles();
  initMusicPlayer();
  // keyboard nav
  document.addEventListener('keydown',e=>{
    if(!document.getElementById('quiz').classList.contains('active'))return;
    if(e.key==='ArrowRight'||e.key==='ArrowDown')nextQuestion();
    if(e.key==='ArrowLeft'||e.key==='ArrowUp')prevQuestion();
    if(e.key==='Enter')checkAnswer();
    const q=currentQuestions[currentIndex];
    if(q&&q.type==='mcq'&&!answered[currentIndex]){
      const num=parseInt(e.key);
      if(num>=1&&num<=4){selectOption(num-1);}
    }
  });
});

