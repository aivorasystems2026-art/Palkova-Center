var WA="910000000000"; // replace with the shop's WhatsApp number
var T={
en:{brand:"Palkova Centre, Trichy",nMenu:"Menu",nOrder:"Order",nRev:"Reviews",nVisit:"Visit",h1:"Palkova",h1s:"Slow-cooked milk sweets from Trichy",heroP:"Fresh milk, stirred over a low flame until it turns golden and grainy. Made every morning, packed warm.",cta:"Order online",cta2:"Read reviews",menuH:"Our sweets",menuS:"Prices are per 250 g box.",orderH:"Order online",orderS:"Add sweets, enter your details, and send the order to us on WhatsApp. We confirm by phone.",cartH:"Your basket",total:"Total",detH:"Delivery details",name:"Name",phone:"Phone number",addr:"Delivery address",place:"Send order on WhatsApp",empty:"Your basket is empty. Add a sweet from the menu.",add:"Add",abH:"Made the old way",abP:"We simmer full-cream milk in wide iron pans and stir by hand until it thickens into palkova. Nothing is added except sugar and, in some boxes, cardamom or nuts.",f1:"Made fresh every morning",f2:"No preservatives or colour",f3:"Delivery within Trichy",revH:"Customer reviews",wr:"Write a review",yourRev:"Your review",post:"Post review",reviews:"reviews",needRev:"Choose a star rating and write your review.",thanks:"Thank you! Your review is posted.",needOrder:"Add at least one sweet and fill in all details.",sent:"Opening WhatsApp with your order…",addrLine:"Trichy, Tamil Nadu (add shop address here)",hours:"Open daily, 8 am to 9 pm",lang:"தமிழ்"},
ta:{brand:"பால்கோவா சென்டர், திருச்சி",nMenu:"இனிப்புகள்",nOrder:"ஆர்டர்",nRev:"மதிப்புரைகள்",nVisit:"கடை",h1:"பால்கோவா",h1s:"திருச்சியின் மெதுவாகக் காய்ச்சிய பால் இனிப்புகள்",heroP:"புதிய பாலை மிதமான தீயில் பொன்னிறமாகும் வரை கிளறிச் செய்கிறோம். தினமும் காலையில் தயாரித்து, சூடாகவே பேக் செய்கிறோம்.",cta:"ஆன்லைனில் ஆர்டர் செய்க",cta2:"மதிப்புரைகள்",menuH:"எங்கள் இனிப்புகள்",menuS:"விலை 250 கிராம் பெட்டிக்கு.",orderH:"ஆன்லைன் ஆர்டர்",orderS:"இனிப்புகளைச் சேர்த்து, விவரங்களை நிரப்பி, வாட்ஸ்அப்பில் ஆர்டரை அனுப்புங்கள். போனில் உறுதிப்படுத்துவோம்.",cartH:"உங்கள் கூடை",total:"மொத்தம்",detH:"டெலிவரி விவரங்கள்",name:"பெயர்",phone:"தொலைபேசி எண்",addr:"டெலிவரி முகவரி",place:"வாட்ஸ்அப்பில் ஆர்டர் அனுப்பு",empty:"கூடை காலியாக உள்ளது. இனிப்புகளைச் சேர்க்கவும்.",add:"சேர்",abH:"பாரம்பரிய முறையில் தயாரிப்பு",abP:"முழு கொழுப்புப் பாலை அகலமான இரும்புச் சட்டியில் காய்ச்சி, கையால் கிளறி பால்கோவா செய்கிறோம். சர்க்கரை தவிர, சில பெட்டிகளில் ஏலக்காய் அல்லது நட்ஸ் மட்டுமே சேர்க்கிறோம்.",f1:"தினமும் காலையில் புதிதாகத் தயாரிப்பு",f2:"பதப்படுத்திகள், நிறம் எதுவும் இல்லை",f3:"திருச்சிக்குள் டெலிவரி",revH:"வாடிக்கையாளர் மதிப்புரைகள்",wr:"மதிப்புரை எழுதுங்கள்",yourRev:"உங்கள் மதிப்புரை",post:"மதிப்புரையை பதிவிடு",reviews:"மதிப்புரைகள்",needRev:"நட்சத்திர மதிப்பீட்டைத் தேர்ந்தெடுத்து மதிப்புரை எழுதுங்கள்.",thanks:"நன்றி! உங்கள் மதிப்புரை பதிவாகிவிட்டது.",needOrder:"குறைந்தது ஒரு இனிப்பைச் சேர்த்து, அனைத்து விவரங்களையும் நிரப்பவும்.",sent:"உங்கள் ஆர்டருடன் வாட்ஸ்அப் திறக்கிறது…",addrLine:"திருச்சி, தமிழ்நாடு (கடை முகவரியை இங்கே சேர்க்கவும்)",hours:"தினமும் காலை 8 முதல் இரவு 9 வரை",lang:"English"}
};
var P=[
{id:1,en:"Classic Palkova",ta:"கிளாசிக் பால்கோவா",de:"Plain, golden and grainy. The one our shop is known for.",dt:"சர்க்கரையும் பாலும் மட்டும். பொன்னிறம், லேசான துகள்கள்.",pr:160,c:"#D9A64E",img:"classic-palkova.jpg"},
{id:2,en:"Cardamom Palkova",ta:"ஏலக்காய் பால்கோவா",de:"Classic palkova with freshly ground cardamom.",dt:"புதிதாக அரைத்த ஏலக்காயுடன் பால்கோவா.",pr:180,c:"#B9B26A",img:"cardamom-palkova.jpg"},
{id:3,en:"Dry Fruit Palkova",ta:"நட்ஸ் பால்கோவா",de:"Cashew, almond and pistachio folded in.",dt:"முந்திரி, பாதாம், பிஸ்தா கலந்தது.",pr:240,c:"#C2793A",img:"dryfruit-palkova.jpg"},
{id:4,en:"Milk Peda",ta:"பால் பேடா",de:"Soft pressed peda with a caramel edge.",dt:"கேரமல் சுவையுடன் மென்மையான பேடா.",pr:150,c:"#E7C98C",img:"milk-peda.jpg"}
];
var L=localStorage.getItem&&"en",cart={},rating=0;
try{L=localStorage.getItem("pk_lang")||(navigator.language||"").indexOf("ta")==0&&"ta"||"en"}catch(e){L="en"}
var seed=[
{n:"Meenakshi R.",s:5,t:"Tastes like the palkova my grandmother made. Not too sweet, very fresh.",ta:"என் பாட்டி செய்த பால்கோவா போலவே சுவை. அதிக இனிப்பில்லை, மிகவும் புதியது."},
{n:"Karthik S.",s:5,t:"Ordered a box for Diwali. It arrived warm and on time.",ta:"தீபாவளிக்கு ஆர்டர் செய்தேன். சூடாக, சரியான நேரத்தில் வந்தது."},
{n:"Divya P.",s:4,t:"Cardamom one is my favourite. Wish there was a bigger box size.",ta:"ஏலக்காய் பால்கோவா மிகவும் பிடித்தது. பெரிய பெட்டியும் இருந்தால் நன்று."}
];
var reviews=seed.slice();
try{var sv=JSON.parse(localStorage.getItem("pk_rev")||"[]");reviews=sv.concat(reviews)}catch(e){}
function $(i){return document.getElementById(i)}
function t(k){return T[L][k]}
function stars(n){return "★★★★★".slice(0,n)+"☆☆☆☆☆".slice(0,5-n)}
function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML}
function render(){
document.documentElement.lang=L;document.title=t("brand");
document.querySelectorAll("[data-t]").forEach(function(e){e.textContent=t(e.dataset.t)});
$("lang").textContent=t("lang");
$("products").innerHTML=P.map(function(p){return '<div class="item"><div class="sw" style="background:'+p.c+' url(images/'+p.img+') center/cover no-repeat"></div><h3>'+p[L]+'</h3><p>'+(L=="en"?p.de:p.dt)+'</p><div class="p"><b>₹'+p.pr+'</b><button class="btn" onclick="add('+p.id+')">'+t("add")+'</button></div></div>'}).join("");
renderCart();renderRev();renderStarIn()}
function add(id){cart[id]=(cart[id]||0)+1;renderCart();$("order").scrollIntoView({block:"nearest"})}
function chg(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];renderCart()}
function sum(){return P.reduce(function(a,p){return a+(cart[p.id]||0)*p.pr},0)}
function renderCart(){
var h=P.filter(function(p){return cart[p.id]}).map(function(p){return '<div class="line"><span>'+p[L]+'</span><span class="q"><button onclick="chg('+p.id+',-1)" aria-label="-">−</button>'+cart[p.id]+'<button onclick="chg('+p.id+',1)" aria-label="+">+</button></span><b>₹'+cart[p.id]*p.pr+'</b></div>'}).join("");
$("cartLines").innerHTML=h||'<p style="color:var(--mut)">'+t("empty")+'</p>';$("total").textContent="₹"+sum()}
function renderRev(){
var a=reviews.reduce(function(x,r){return x+r.s},0)/reviews.length;
$("avg").textContent=a.toFixed(1);$("avgStars").textContent=stars(Math.round(a));$("cnt").textContent=reviews.length+" "+t("reviews");
$("list").innerHTML=reviews.map(function(r){return '<div class="review"><div class="stars">'+stars(r.s)+'</div><p>'+esc(L=="ta"&&r.ta?r.ta:r.t)+'</p><small style="color:var(--mut)">'+esc(r.n)+'</small></div>'}).join("")}
function renderStarIn(){
$("starin").innerHTML=[1,2,3,4,5].map(function(i){return '<button type="button" class="'+(i<=rating?"on":"")+'" role="radio" aria-checked="'+(i==rating)+'" aria-label="'+i+'" onclick="rating='+i+';renderStarIn()">★</button>'}).join("")}
$("lang").onclick=function(){L=L=="en"?"ta":"en";try{localStorage.setItem("pk_lang",L)}catch(e){}render()};
$("post").onclick=function(){
var n=$("rn").value.trim()||(L=="ta"?"வாடிக்கையாளர்":"Customer"),x=$("rt").value.trim();
if(!rating||!x){$("rmsg").textContent=t("needRev");return}
var r={n:n,s:rating,t:x};reviews.unshift(r);
try{var sv=JSON.parse(localStorage.getItem("pk_rev")||"[]");sv.unshift(r);localStorage.setItem("pk_rev",JSON.stringify(sv))}catch(e){}
$("rt").value="";$("rn").value="";rating=0;$("rmsg").textContent=t("thanks");renderRev();renderStarIn()};
$("place").onclick=function(){
var n=$("nm").value.trim(),p=$("ph").value.trim(),a=$("ad").value.trim();
if(!sum()||!n||!p||!a){$("omsg").textContent=t("needOrder");return}
var items=P.filter(function(q){return cart[q.id]}).map(function(q){return cart[q.id]+" x "+q.en+" (₹"+cart[q.id]*q.pr+")"}).join("\n");
var m="New order - Palkova Centre\n"+items+"\nTotal: ₹"+sum()+"\nName: "+n+"\nPhone: "+p+"\nAddress: "+a;
$("omsg").textContent=t("sent");
window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(m),"_blank")};
render();
