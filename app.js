const DATA = [{"animal": "Pandas", "group": "an embarrassment", "emoji": "🐼", "category": "Mammal", "weirdness": 5}, {"animal": "Elephants", "group": "a herd or parade", "emoji": "🐘", "category": "Mammal", "weirdness": 2}, {"animal": "Giraffes", "group": "a tower", "emoji": "🦒", "category": "Mammal", "weirdness": 2}, {"animal": "Zebras", "group": "a dazzle or zeal", "emoji": "🦓", "category": "Mammal", "weirdness": 4}, {"animal": "Lions", "group": "a pride", "emoji": "🦁", "category": "Mammal", "weirdness": 2}, {"animal": "Tigers", "group": "a streak or ambush", "emoji": "🐅", "category": "Mammal", "weirdness": 2}, {"animal": "Leopards", "group": "a leap", "emoji": "🐆", "category": "Mammal", "weirdness": 2}, {"animal": "Cheetahs", "group": "a coalition", "emoji": "🐆", "category": "Mammal", "weirdness": 2}, {"animal": "Hyenas", "group": "a cackle", "emoji": "🐕", "category": "Mammal", "weirdness": 4}, {"animal": "Bears", "group": "a sleuth or sloth", "emoji": "🐻", "category": "Mammal", "weirdness": 5}, {"animal": "Wolves", "group": "a pack", "emoji": "🐺", "category": "Mammal", "weirdness": 1}, {"animal": "Dogs", "group": "a pack", "emoji": "🐕", "category": "Mammal", "weirdness": 1}, {"animal": "Cats", "group": "a clowder", "emoji": "🐈", "category": "Mammal", "weirdness": 4}, {"animal": "Kittens", "group": "a kindle", "emoji": "🐈", "category": "Mammal", "weirdness": 3}, {"animal": "Foxes", "group": "a skulk", "emoji": "🦊", "category": "Mammal", "weirdness": 4}, {"animal": "Otters", "group": "a romp", "emoji": "🦦", "category": "Mammal", "weirdness": 4}, {"animal": "Ferrets", "group": "a business", "emoji": "🐾", "category": "Mammal", "weirdness": 5}, {"animal": "Weasels", "group": "a sneak", "emoji": "🐾", "category": "Mammal", "weirdness": 2}, {"animal": "Skunks", "group": "a stench", "emoji": "🦨", "category": "Mammal", "weirdness": 5}, {"animal": "Squirrels", "group": "a scurry", "emoji": "🐿️", "category": "Mammal", "weirdness": 2}, {"animal": "Hedgehogs", "group": "an array", "emoji": "🦔", "category": "Mammal", "weirdness": 3}, {"animal": "Porcupines", "group": "a prickle", "emoji": "🦔", "category": "Mammal", "weirdness": 4}, {"animal": "Rabbits", "group": "a colony or warren", "emoji": "🐇", "category": "Mammal", "weirdness": 2}, {"animal": "Mice", "group": "a mischief", "emoji": "🐁", "category": "Mammal", "weirdness": 4}, {"animal": "Rats", "group": "a mischief", "emoji": "🐀", "category": "Mammal", "weirdness": 4}, {"animal": "Hamsters", "group": "a horde", "emoji": "🐹", "category": "Mammal", "weirdness": 3}, {"animal": "Bats", "group": "a colony or cauldron", "emoji": "🦇", "category": "Mammal", "weirdness": 4}, {"animal": "Monkeys", "group": "a troop", "emoji": "🐒", "category": "Mammal", "weirdness": 1}, {"animal": "Baboons", "group": "a troop", "emoji": "🐒", "category": "Mammal", "weirdness": 1}, {"animal": "Gorillas", "group": "a band", "emoji": "🦍", "category": "Mammal", "weirdness": 2}, {"animal": "Chimpanzees", "group": "a community", "emoji": "🐒", "category": "Mammal", "weirdness": 2}, {"animal": "Lemurs", "group": "a conspiracy", "emoji": "🐒", "category": "Mammal", "weirdness": 5}, {"animal": "Kangaroos", "group": "a mob", "emoji": "🦘", "category": "Mammal", "weirdness": 3}, {"animal": "Wombats", "group": "a wisdom", "emoji": "🐾", "category": "Mammal", "weirdness": 4}, {"animal": "Rhinoceroses", "group": "a crash", "emoji": "🦏", "category": "Mammal", "weirdness": 4}, {"animal": "Hippopotamuses", "group": "a bloat", "emoji": "🦛", "category": "Mammal", "weirdness": 5}, {"animal": "Camels", "group": "a caravan", "emoji": "🐫", "category": "Mammal", "weirdness": 3}, {"animal": "Donkeys", "group": "a drove", "emoji": "🫏", "category": "Mammal", "weirdness": 1}, {"animal": "Horses", "group": "a herd", "emoji": "🐎", "category": "Mammal", "weirdness": 1}, {"animal": "Cattle", "group": "a herd", "emoji": "🐄", "category": "Mammal", "weirdness": 1}, {"animal": "Goats", "group": "a herd or trip", "emoji": "🐐", "category": "Mammal", "weirdness": 3}, {"animal": "Sheep", "group": "a flock", "emoji": "🐑", "category": "Mammal", "weirdness": 1}, {"animal": "Pigs", "group": "a sounder", "emoji": "🐖", "category": "Mammal", "weirdness": 4}, {"animal": "Dolphins", "group": "a pod", "emoji": "🐬", "category": "Sea life", "weirdness": 1}, {"animal": "Whales", "group": "a pod", "emoji": "🐋", "category": "Sea life", "weirdness": 1}, {"animal": "Seals", "group": "a colony", "emoji": "🦭", "category": "Sea life", "weirdness": 1}, {"animal": "Walruses", "group": "a herd", "emoji": "🦭", "category": "Sea life", "weirdness": 1}, {"animal": "Crows", "group": "a murder", "emoji": "🐦‍⬛", "category": "Bird", "weirdness": 4}, {"animal": "Ravens", "group": "an unkindness", "emoji": "🐦‍⬛", "category": "Bird", "weirdness": 5}, {"animal": "Owls", "group": "a parliament", "emoji": "🦉", "category": "Bird", "weirdness": 4}, {"animal": "Eagles", "group": "a convocation", "emoji": "🦅", "category": "Bird", "weirdness": 4}, {"animal": "Flamingos", "group": "a flamboyance", "emoji": "🦩", "category": "Bird", "weirdness": 5}, {"animal": "Peacocks", "group": "an ostentation", "emoji": "🦚", "category": "Bird", "weirdness": 5}, {"animal": "Parrots", "group": "a pandemonium", "emoji": "🦜", "category": "Bird", "weirdness": 5}, {"animal": "Starlings", "group": "a murmuration", "emoji": "🐦", "category": "Bird", "weirdness": 5}, {"animal": "Geese", "group": "a gaggle", "emoji": "🪿", "category": "Bird", "weirdness": 4}, {"animal": "Ducks", "group": "a paddling", "emoji": "🦆", "category": "Bird", "weirdness": 4}, {"animal": "Swans", "group": "a bevy", "emoji": "🦢", "category": "Bird", "weirdness": 3}, {"animal": "Penguins", "group": "a colony or rookery", "emoji": "🐧", "category": "Bird", "weirdness": 2}, {"animal": "Pelicans", "group": "a pod", "emoji": "🐦", "category": "Bird", "weirdness": 1}, {"animal": "Finches", "group": "a charm", "emoji": "🐦", "category": "Bird", "weirdness": 3}, {"animal": "Goldfinches", "group": "a charm", "emoji": "🐦", "category": "Bird", "weirdness": 3}, {"animal": "Herons", "group": "a siege", "emoji": "🐦", "category": "Bird", "weirdness": 4}, {"animal": "Woodpeckers", "group": "a descent", "emoji": "🐦", "category": "Bird", "weirdness": 4}, {"animal": "Vultures", "group": "a wake", "emoji": "🦅", "category": "Bird", "weirdness": 4}, {"animal": "Hawks", "group": "a kettle", "emoji": "🦅", "category": "Bird", "weirdness": 4}, {"animal": "Falcons", "group": "a cast", "emoji": "🦅", "category": "Bird", "weirdness": 3}, {"animal": "Magpies", "group": "a tiding", "emoji": "🐦", "category": "Bird", "weirdness": 4}, {"animal": "Larks", "group": "an exaltation", "emoji": "🐦", "category": "Bird", "weirdness": 5}, {"animal": "Nightingales", "group": "a watch", "emoji": "🐦", "category": "Bird", "weirdness": 2}, {"animal": "Pheasants", "group": "a bouquet", "emoji": "🐦", "category": "Bird", "weirdness": 4}, {"animal": "Quail", "group": "a covey", "emoji": "🐦", "category": "Bird", "weirdness": 3}, {"animal": "Turkeys", "group": "a rafter", "emoji": "🦃", "category": "Bird", "weirdness": 4}, {"animal": "Chickens", "group": "a flock", "emoji": "🐔", "category": "Bird", "weirdness": 1}, {"animal": "Chicks", "group": "a brood", "emoji": "🐥", "category": "Bird", "weirdness": 1}, {"animal": "Crocodiles", "group": "a bask", "emoji": "🐊", "category": "Reptile", "weirdness": 4}, {"animal": "Alligators", "group": "a congregation", "emoji": "🐊", "category": "Reptile", "weirdness": 4}, {"animal": "Snakes", "group": "a knot", "emoji": "🐍", "category": "Reptile", "weirdness": 3}, {"animal": "Cobras", "group": "a quiver", "emoji": "🐍", "category": "Reptile", "weirdness": 4}, {"animal": "Rattlesnakes", "group": "a rhumba", "emoji": "🐍", "category": "Reptile", "weirdness": 5}, {"animal": "Turtles", "group": "a bale", "emoji": "🐢", "category": "Reptile", "weirdness": 3}, {"animal": "Lizards", "group": "a lounge", "emoji": "🦎", "category": "Reptile", "weirdness": 4}, {"animal": "Iguanas", "group": "a mess", "emoji": "🦎", "category": "Reptile", "weirdness": 4}, {"animal": "Frogs", "group": "an army", "emoji": "🐸", "category": "Amphibian", "weirdness": 3}, {"animal": "Toads", "group": "a knot", "emoji": "🐸", "category": "Amphibian", "weirdness": 3}, {"animal": "Salamanders", "group": "a congress", "emoji": "🦎", "category": "Amphibian", "weirdness": 4}, {"animal": "Fish", "group": "a school or shoal", "emoji": "🐟", "category": "Sea life", "weirdness": 1}, {"animal": "Sharks", "group": "a shiver", "emoji": "🦈", "category": "Sea life", "weirdness": 4}, {"animal": "Stingrays", "group": "a fever", "emoji": "🐟", "category": "Sea life", "weirdness": 4}, {"animal": "Eels", "group": "a bed", "emoji": "🐟", "category": "Sea life", "weirdness": 3}, {"animal": "Jellyfish", "group": "a smack", "emoji": "🪼", "category": "Sea life", "weirdness": 4}, {"animal": "Octopuses", "group": "a consortium", "emoji": "🐙", "category": "Sea life", "weirdness": 4}, {"animal": "Squid", "group": "a shoal", "emoji": "🦑", "category": "Sea life", "weirdness": 3}, {"animal": "Oysters", "group": "a bed", "emoji": "🦪", "category": "Sea life", "weirdness": 3}, {"animal": "Clams", "group": "a bed", "emoji": "🦪", "category": "Sea life", "weirdness": 3}, {"animal": "Crabs", "group": "a cast", "emoji": "🦀", "category": "Sea life", "weirdness": 3}, {"animal": "Lobsters", "group": "a risk", "emoji": "🦞", "category": "Sea life", "weirdness": 4}, {"animal": "Seahorses", "group": "a herd", "emoji": "🐠", "category": "Sea life", "weirdness": 1}, {"animal": "Butterflies", "group": "a kaleidoscope", "emoji": "🦋", "category": "Invertebrate", "weirdness": 5}, {"animal": "Bees", "group": "a swarm", "emoji": "🐝", "category": "Invertebrate", "weirdness": 1}, {"animal": "Wasps", "group": "a swarm", "emoji": "🐝", "category": "Invertebrate", "weirdness": 1}, {"animal": "Ants", "group": "a colony", "emoji": "🐜", "category": "Invertebrate", "weirdness": 1}, {"animal": "Termites", "group": "a colony", "emoji": "🐜", "category": "Invertebrate", "weirdness": 1}, {"animal": "Grasshoppers", "group": "a cloud", "emoji": "🦗", "category": "Invertebrate", "weirdness": 3}, {"animal": "Locusts", "group": "a plague", "emoji": "🦗", "category": "Invertebrate", "weirdness": 4}, {"animal": "Cockroaches", "group": "an intrusion", "emoji": "🪳", "category": "Invertebrate", "weirdness": 4}, {"animal": "Flies", "group": "a swarm", "emoji": "🪰", "category": "Invertebrate", "weirdness": 1}, {"animal": "Mosquitoes", "group": "a swarm", "emoji": "🦟", "category": "Invertebrate", "weirdness": 1}, {"animal": "Spiders", "group": "a cluster", "emoji": "🕷️", "category": "Invertebrate", "weirdness": 2}, {"animal": "Scorpions", "group": "a bed", "emoji": "🦂", "category": "Invertebrate", "weirdness": 3}, {"animal": "Caterpillars", "group": "an army", "emoji": "🐛", "category": "Invertebrate", "weirdness": 3}, {"animal": "Snails", "group": "an escargatoire", "emoji": "🐌", "category": "Invertebrate", "weirdness": 5}];

const $ = id => document.getElementById(id);
const els = {
  progress:$('progress'), streak:$('streak'), score:$('score'),
  card:$('card'), categoryFront:$('categoryFront'), categoryBack:$('categoryBack'),
  starsFront:$('starsFront'), starsBack:$('starsBack'),
  emojiFront:$('emojiFront'), emojiBack:$('emojiBack'),
  frontLead:$('frontLead'), frontMain:$('frontMain'), backMain:$('backMain'), backSub:$('backSub'),
  gradeBar:$('gradeBar'), gotBtn:$('gotBtn'), missBtn:$('missBtn'),
  hardBtn:$('hardBtn'), skipBtn:$('skipBtn'),
  settingsBtn:$('settingsBtn'), settingsPanel:$('settingsPanel'),
  modeSelect:$('modeSelect'), deckSelect:$('deckSelect'),
  shuffleBtn:$('shuffleBtn'), clearHardBtn:$('clearHardBtn'),
  roundDone:$('roundDone'), roundScore:$('roundScore'), roundMessage:$('roundMessage'),
  newRoundBtn:$('newRoundBtn'), practiceMissedBtn:$('practiceMissedBtn'),
  confetti:$('confetti')
};

const ROUND_SIZE = 20;
let mode='animal';
let sourceMode='all';
let round=[];
let index=0;
let correct=0;
let attempted=0;
let streak=0;
let flipped=false;
let missed=[];
let hardCards = new Set(JSON.parse(localStorage.getItem('animal-hard-cards') || '[]'));

const catClass = c => ({
  'Mammal':'var(--mammal)','Bird':'var(--bird)','Reptile':'var(--reptile)',
  'Amphibian':'var(--amphibian)','Sea life':'var(--sea)','Invertebrate':'var(--invert)'
}[c] || '#666');

function stars(n){ return '★'.repeat(n)+'☆'.repeat(5-n); }
function titleCaseAnswer(s){ return s.replace(/^an?\s|^the\s/i,'').toUpperCase(); }
function groupWithoutArticle(s){ return s.replace(/^an?\s+/i,''); }

function getPool(){
  let pool=[...DATA];
  if(sourceMode==='hard') pool=pool.filter(x=>hardCards.has(x.animal));
  if(sourceMode==='mammal') pool=pool.filter(x=>x.category==='Mammal');
  if(sourceMode==='bird') pool=pool.filter(x=>x.category==='Bird');
  if(sourceMode==='reptile') pool=pool.filter(x=>x.category==='Reptile' || x.category==='Amphibian');
  if(sourceMode==='sea') pool=pool.filter(x=>x.category==='Sea life');
  if(sourceMode==='invert') pool=pool.filter(x=>x.category==='Invertebrate');
  return pool.length ? pool : [...DATA];
}

function shuffle(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function startRound(customPool=null){
  const pool=shuffle([...(customPool || getPool())]);
  round=pool.slice(0,Math.min(ROUND_SIZE,pool.length));
  index=0; correct=0; attempted=0; streak=0; missed=[]; flipped=false;
  els.roundDone.classList.add('hidden');
  els.card.parentElement.classList.remove('hidden');
  els.gradeBar.classList.add('hidden');
  els.underCard?.classList?.remove('hidden');
  render();
}

function render(){
  if(index>=round.length){ finishRound(); return; }
  const d=round[index];
  els.card.classList.remove('flipped');
  els.card.classList.remove('shake');
  flipped=false;
  els.gradeBar.classList.add('hidden');

  els.progress.textContent=`${index+1} / ${round.length}`;
  els.streak.textContent=streak;
  els.score.textContent=`${correct} / ${attempted}`;
  els.emojiFront.textContent=d.emoji;
  els.emojiBack.textContent=d.emoji;
  els.categoryFront.textContent=d.category;
  els.categoryBack.textContent=d.category;
  els.categoryFront.style.background=catClass(d.category);
  els.categoryFront.style.color='#fff';
  els.categoryBack.style.background=catClass(d.category);
  els.categoryBack.style.color='#fff';
  els.starsFront.textContent=stars(d.weirdness);
  els.starsBack.textContent=stars(d.weirdness);

  if(mode==='animal'){
    els.frontLead.textContent='A group of';
    els.frontMain.textContent=d.animal.toUpperCase();
    els.backMain.textContent=titleCaseAnswer(d.group);
    els.backSub.textContent=`of ${d.animal.toLowerCase()}`;
  }else{
    els.frontLead.textContent='Which animal group is called';
    els.frontMain.textContent=groupWithoutArticle(d.group).toUpperCase();
    els.backMain.textContent=d.animal.toUpperCase();
    els.backSub.textContent='is the answer';
  }
  els.hardBtn.textContent = hardCards.has(d.animal) ? '★ In hard cards' : '☆ Add to hard cards';
}

function flip(){
  if(flipped) return;
  flipped=true;
  els.card.classList.add('flipped');
  setTimeout(()=>els.gradeBar.classList.remove('hidden'), 180);
}

function celebrate(){
  const colors=['#f0b84a','#8cc0a6','#8ca9cf','#d98d6f','#b58fc8'];
  const rect=els.card.getBoundingClientRect();
  for(let i=0;i<18;i++){
    const p=document.createElement('span');
    p.className='confetti-piece';
    p.style.left=(rect.left+rect.width/2+(Math.random()-.5)*150)+'px';
    p.style.top=(rect.top+70+Math.random()*40)+'px';
    p.style.background=colors[i%colors.length];
    p.style.transform=`rotate(${Math.random()*180}deg)`;
    els.confetti.appendChild(p);
    setTimeout(()=>p.remove(),900);
  }
}

function grade(gotIt){
  if(!flipped) flip();
  attempted++;
  if(gotIt){
    correct++; streak++; celebrate();
  }else{
    streak=0;
    const d=round[index];
    missed.push(d);
    hardCards.add(d.animal);
    saveHard();
    els.card.classList.add('shake');
  }
  els.score.textContent=`${correct} / ${attempted}`;
  els.streak.textContent=streak;
  setTimeout(()=>{ index++; render(); }, gotIt ? 450 : 320);
}

function finishRound(){
  els.card.parentElement.classList.add('hidden');
  els.gradeBar.classList.add('hidden');
  els.roundDone.classList.remove('hidden');
  els.roundScore.textContent=`${correct} / ${round.length}`;
  const pct=round.length?correct/round.length:0;
  els.roundMessage.textContent =
    pct===1 ? 'Perfect round.' :
    pct>=.8 ? 'Strong round. A few strange ones remain.' :
    pct>=.5 ? 'Good start. The ridiculous nouns are sticking.' :
    'Plenty of weird animal vocabulary left to conquer.';
  els.practiceMissedBtn.disabled = missed.length===0;
  els.practiceMissedBtn.textContent = missed.length ? `Practice ${missed.length} missed` : 'No missed cards';
}

function saveHard(){
  localStorage.setItem('animal-hard-cards', JSON.stringify([...hardCards]));
}

els.card.addEventListener('click', flip);
els.card.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();flip();}});
els.gotBtn.addEventListener('click',()=>grade(true));
els.missBtn.addEventListener('click',()=>grade(false));
els.skipBtn.addEventListener('click',()=>{ index++; render(); });

els.hardBtn.addEventListener('click',()=>{
  const d=round[index];
  if(hardCards.has(d.animal)) hardCards.delete(d.animal); else hardCards.add(d.animal);
  saveHard(); render();
});

els.settingsBtn.addEventListener('click',()=>els.settingsPanel.classList.toggle('hidden'));
els.modeSelect.addEventListener('change',e=>{mode=e.target.value;startRound();});
els.deckSelect.addEventListener('change',e=>{sourceMode=e.target.value;startRound();});
els.shuffleBtn.addEventListener('click',()=>startRound());
els.clearHardBtn.addEventListener('click',()=>{
  hardCards.clear(); saveHard();
  if(sourceMode==='hard') sourceMode='all';
  els.deckSelect.value=sourceMode;
  startRound();
});
els.newRoundBtn.addEventListener('click',()=>startRound());
els.practiceMissedBtn.addEventListener('click',()=>{ if(missed.length) startRound(missed); });

let startX=null;
els.scene.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX},{passive:true});
els.scene.addEventListener('touchend',e=>{
  if(startX===null)return;
  const dx=e.changedTouches[0].clientX-startX;
  if(Math.abs(dx)>55){
    if(dx<0){index++;render();}
    else flip();
  }
  startX=null;
},{passive:true});

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
}
startRound();
