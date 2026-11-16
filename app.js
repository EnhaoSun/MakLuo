/* Mak Luo Claypot — no framework, no build step.
   Temporary photos are linked from the restaurant's publicly visible Wolt listing;
   replace the image URLs with approved, self-hosted restaurant photos before production. */
const PHOTO = {
  cover:"https://imageproxy.wolt.com/assets/69dcd5316b1a81cc68342e13",
  mao:"https://imageproxy.wolt.com/assets/69d7ba2d02d8a4c8d974d764",
  chicken:"https://imageproxy.wolt.com/assets/69d7b9eb74bda73f2b3483bd",
  pork:"https://imageproxy.wolt.com/assets/69d7ba6a02d8a4c8d974d7c2",
  eggplant:"https://imageproxy.wolt.com/assets/69d7ba1a02d8a4c8d974d750",
  mapo:"https://imageproxy.wolt.com/assets/69d7ba0f02d8a4c8d974d74b",
  beef:"https://imageproxy.wolt.com/assets/69d7ba3202d8a4c8d974d76c",
  knuckle:"https://imageproxy.wolt.com/assets/69d7ba2602d8a4c8d974d757",
  shrimp:"https://imageproxy.wolt.com/assets/69d7b9dc74bda73f2b3483ac",
  mushroom:"https://imageproxy.wolt.com/assets/69d7b980ffc494dd16ebc44b",
  sweet:"https://imageproxy.wolt.com/assets/69d7b95c74bda73f2b34834a",
  beefSalad:"https://imageproxy.wolt.com/assets/69d7badd74bda73f2b348437",
  glass:"https://imageproxy.wolt.com/assets/69de624c73316796ef90f1e8",
  duck:"https://imageproxy.wolt.com/assets/69d7b94174bda73f2b348343",
  rice:"https://imageproxy.wolt.com/assets/69d7ba7202d8a4c8d974d7cd",
  intestine:"https://imageproxy.wolt.com/assets/69d7b9a674bda73f2b348355",
  sweetPork:"https://imageproxy.wolt.com/assets/69d7ba8e74bda73f2b348428",
  blackBeef:"https://imageproxy.wolt.com/assets/69d7b94c74bda73f2b348347",
  tomatoBeef:"https://imageproxy.wolt.com/assets/69d7b993ffc494dd16ebc462",
  crispy:"https://imageproxy.wolt.com/assets/69d7b93774bda73f2b348340",
  edamame:"https://imageproxy.wolt.com/assets/69d7b9cc74bda73f2b34838d"
};
const i18n = {
 hu:{
  announcement:"Csengtu ízei, Budapest szívében.",navStory:"Történetünk",navMenu:"Étlap",navVisit:"Látogass el",navCta:"Az étlap",
  heroEyebrow:"SZECSUÁNI KONYHA · CSENGTU, 1980",heroTitle:"Egy kis agyagedény.<br><em>Nagy ízek.</em>",
  heroDesc:"A szecsuáni konyha szíve — tüzes, illatos, megosztásra született. Most Budapest szívében.",
  exploreMenu:"Fedezd fel az étlapot",ourStory:"Ismerd meg a történetünket",heroFoot:"Hagyományos agyagedényekben készítve, szeretettel tálalva.",
  storyKicker:"A TÖRTÉNETÜNK",storyTitle:"Csengtuban született.<br><em>Budapesten otthon.</em>",
  storyText:"Minden egy családi konyhában kezdődött 1980-ban, Csengtuban. Ma ugyanazt az otthonos szecsuáni ízvilágot hozzuk el: gazdag fűszerek, friss alapanyagok és az asztalra érkező, gőzölgő agyagedények.",
  discoverPlace:"Találkozzunk Budapesten",photoCaption:"IGAZI CSENGTUI ÍZEK",storyQuote:"Jó étel. Jó társaság. Ez a szecsuáni asztal lelke.",
  ritualKicker:"A SZECSUÁNI ÉLMÉNY",ritualTitle:"Tűz. Agyag.<br><em>Egy csipet varázslat.</em>",
  ritualDesc:"A hagyományos agyagedény megtartja a meleget, a fűszerek minden falatban életre kelnek. Érkezz éhesen, és oszd meg az ízeket!",
  ritualOne:"Frissen készítve",ritualTwo:"Merész szecsuáni ízek",ritualThree:"Megosztásra született",
  menuKicker:"AZ ASZTALODRA",menuTitle:"A kedvenceink.<br><em>Egyenesen Csengtuból.</em>",
  menuIntro:"A csípős, zsibbasztó klasszikusoktól az otthonos, lágyabb ízekig — minden agyagedényben van egy történet.",
  tabPopular:"Kedvencek",tabClaypot:"Agyagedényes ételek",tabNoodles:"Rizstészta",tabSides:"Köretek & falatok",
  menuNote:"Ízelítő az étlapból. Az árak és a kínálat változhatnak.",deliveryLink:"Rendelés a Wolton",
  popularBadge:"Kedvenc",hotBadge:"Csípős",vegBadge:"Zöldség",
  interlude:"EGY KIS TŰZ. SOK SZERETET.",
  visitKicker:"LÁTOGASS EL HOZZÁNK",visitTitle:"Csengtu közelebb van,<br><em>mint gondolnád.</em>",
  visitIntro:"Egy falat Csengtu Budapest belvárosában. Az asztal már vár.",
  addressLabel:"CÍM",hoursLabel:"NYITVATARTÁS",hours:"Mindennap · 11:00–22:00",hoursNote:"Ünnepnapokon eltérhet.",
  contactLabel:"KAPCSOLAT",getDirections:"Útvonaltervezés",visitPhotoLabel:"HAMAROSAN TALÁLKOZUNK!",footerTag:"一口老砂锅，吃尽成都味."
 },
 en:{
  announcement:"The taste of Chengdu, in the heart of Budapest.",navStory:"Our story",navMenu:"The menu",navVisit:"Find us",navCta:"View menu",
  heroEyebrow:"SICHUAN KITCHEN · CHENGDU, 1980",heroTitle:"A little claypot.<br><em>A lot of Chengdu.</em>",
  heroDesc:"Bold, fragrant, soul-warming Sichuan cooking. Made to be shared. Now right here in the heart of Budapest.",
  exploreMenu:"Explore the menu",ourStory:"Discover our story",heroFoot:"Cooked in traditional claypots. Served with heart.",
  storyKicker:"OUR STORY",storyTitle:"Born in Chengdu.<br><em>At home in Budapest.</em>",
  storyText:"It all began in a family kitchen in Chengdu in 1980. Today, we bring those same comforting Sichuan flavors to your table: fragrant spices, fresh ingredients and bubbling claypots made to share.",
  discoverPlace:"Come find us in Budapest",photoCaption:"THE REAL TASTE OF CHENGDU",storyQuote:"Good food. Good company. That's the heart of a Sichuan table.",
  ritualKicker:"THE CLAYPOT RITUAL",ritualTitle:"Fire. Clay.<br><em>A little magic.</em>",
  ritualDesc:"Traditional claypots keep every dish warm while Sichuan spices bring each bite to life. Come hungry, stay a while, and share something delicious.",
  ritualOne:"Freshly prepared",ritualTwo:"Bold Sichuan flavors",ritualThree:"Made for sharing",
  menuKicker:"AT YOUR TABLE",menuTitle:"Our favorites.<br><em>From Chengdu, with love.</em>",
  menuIntro:"From fiery, tongue-tingling classics to gentler comfort food — there's a story simmering in every claypot.",
  tabPopular:"Favorites",tabClaypot:"Claypot dishes",tabNoodles:"Rice noodles",tabSides:"Sides & snacks",
  menuNote:"A selection from our menu. Items and prices may change.",deliveryLink:"Order on Wolt",
  popularBadge:"Favorite",hotBadge:"Spicy",vegBadge:"Vegetarian",
  interlude:"A LITTLE HEAT. A LOT OF HEART.",
  visitKicker:"COME FIND US",visitTitle:"Chengdu is closer<br><em>than you think.</em>",
  visitIntro:"A little corner of Chengdu in downtown Budapest. There's always room at our table.",
  addressLabel:"ADDRESS",hoursLabel:"OPENING HOURS",hours:"Every day · 11:00–22:00",hoursNote:"Holiday hours may vary.",
  contactLabel:"SAY HELLO",getDirections:"Get directions",visitPhotoLabel:"SEE YOU AT THE TABLE!",footerTag:"一口老砂锅，吃尽成都味."
 },
 zh:{
  announcement:"成都味道，就在布达佩斯。",navStory:"品牌故事",navMenu:"招牌菜单",navVisit:"门店地址",navCta:"查看菜单",
  heroEyebrow:"源自成都 · 始于 1980",heroTitle:"一口老砂锅，<br><em>吃尽成都味。</em>",
  heroDesc:"地道四川味，热气腾腾的烟火气。麻辣鲜香，家常好味，如今来到布达佩斯。",
  exploreMenu:"探索招牌菜",ourStory:"了解罗妈故事",heroFoot:"一锅一味，现做现享。把老成都端上你的餐桌。",
  storyKicker:"关于罗妈",storyTitle:"从成都街巷，<br><em>到布达佩斯。</em>",
  storyText:"故事始于 1980 年的成都，一口家常砂锅，慢慢熬出几代人记忆里的味道。如今，罗妈带着熟悉的川味来到布达佩斯：鲜香麻辣、热气腾腾，每一锅都值得和重要的人分享。",
  discoverPlace:"来布达佩斯找罗妈",photoCaption:"正宗老成都味",storyQuote:"一锅热气腾腾，一桌人间烟火。",
  ritualKicker:"砂锅里的烟火气",ritualTitle:"有锅气，<br><em>才有好味道。</em>",
  ritualDesc:"传统陶土砂锅，锁住食材的温度与鲜香；四川花椒、辣椒与独家调味，每一口都香得过瘾。独乐乐不如众乐乐，一起吃才更有味道。",
  ritualOne:"现做现上",ritualTwo:"地道四川风味",ritualThree:"一起分享更好吃",
  menuKicker:"罗妈招牌",menuTitle:"这一锅，<br><em>都是心头好。</em>",
  menuIntro:"从麻辣鲜香的经典川味，到暖心暖胃的家常砂锅，总有一口适合你的成都味道。",
  tabPopular:"人气推荐",tabClaypot:"招牌砂锅",tabNoodles:"米线系列",tabSides:"小吃 · 主食",
  menuNote:"以下为部分菜品展示，具体供应及价格以门店为准。",deliveryLink:"前往 Wolt 外卖",
  popularBadge:"人气",hotBadge:"香辣",vegBadge:"素食",
  interlude:"一口砂锅 · 满城烟火",
  visitKicker:"欢迎来吃饭",visitTitle:"想念成都，<br><em>就来罗妈。</em>",
  visitIntro:"地道川味，尽在布达佩斯市中心。罗妈等你来开饭。",
  addressLabel:"门店地址",hoursLabel:"营业时间",hours:"每天 · 11:00–22:00",hoursNote:"节假日营业时间可能调整。",
  contactLabel:"联系我们",getDirections:"打开地图导航",visitPhotoLabel:"罗妈等你来开饭！",footerTag:"一口老砂锅，吃尽成都味。"
 }
};
const dishes=[
 {id:"mao",cats:["popular","claypot"],photo:"mao",price:5200,spice:3,badge:"popular",name:{hu:"Chiliolajos Mao Xue Wang agyagedényben",en:"Oil-Splashed Mao Xue Wang Claypot",zh:"砂锅油泼毛血旺"},desc:{hu:"Csirkemell, marhapacal, tofu és gazdag, tüzes szecsuáni alap.",en:"Chicken, beef tripe, tofu, glass noodles and a fiery Sichuan chili oil.",zh:"毛肚、鸭血、午餐肉、豆芽等食材，热油激香。"}},
 {id:"chicken",cats:["popular","claypot"],photo:"chicken",price:5200,spice:3,badge:"popular",name:{hu:"Csengtui csirke agyagedényben",en:"Chengdu-Style Chicken Claypot",zh:"老成都砂锅鸡"},desc:{hu:"Csirke, burgonya, hagyma és forró edényes tészta.",en:"Tender chicken, potato, tofu puffs and aromatic chili.",zh:"鸡肉、土豆、洋葱和豆泡，麻辣鲜香。"}},
 {id:"mapo",cats:["popular","claypot"],photo:"mapo",price:3900,spice:2,badge:"popular",name:{hu:"Mapo tofu agyagedényben",en:"Mapo Tofu Claypot",zh:"砂锅麻婆豆腐"},desc:{hu:"Puha tofu, darált sertéshús, jellegzetes szecsuáni fűszerek.",en:"Silky tofu, minced pork and tingling Sichuan pepper.",zh:"嫩豆腐与肉末，麻辣浓香，配饭绝佳。"}},
 {id:"eggplant",cats:["popular","claypot"],photo:"eggplant",price:3900,spice:1,name:{hu:"Padlizsán darált hússal agyagedényben",en:"Eggplant with Minced Pork Claypot",zh:"砂锅肉末茄子"},desc:{hu:"Darált sertéshús, padlizsán, újhagyma.",en:"Tender eggplant, minced pork and spring onion.",zh:"软糯茄子配香浓肉末，家常下饭。"}},
 {id:"pork",cats:["popular","claypot"],photo:"pork",price:4200,spice:1,name:{hu:"Burgonyás párolt sertéshús agyagedényben",en:"Braised Pork with Potatoes Claypot",zh:"砂锅土豆红烧肉"},desc:{hu:"Lassan párolt sertéshús, burgonya, gazdag szósz.",en:"Slow-braised pork and potatoes in a rich sauce.",zh:"红烧猪肉配软糯土豆，香浓入味。"}},
 {id:"beef",cats:["popular","claypot"],photo:"beef",price:5200,spice:3,name:{hu:"Chiliolajos szeletelt marha agyagedényben",en:"Oil-Splashed Sliced Beef Claypot",zh:"砂锅油泼火牛肉"},desc:{hu:"Marhahús, tofu, koriander és szecsuáni chiliolaj.",en:"Sliced beef, tofu, coriander and aromatic hot chili oil.",zh:"鲜嫩牛肉配香辣热油，麻辣十足。"}},
 {id:"knuckle",cats:["claypot"],photo:"knuckle",price:5800,spice:3,name:{hu:"Chiliolajos sült sertéscsülök",en:"Oil-Splashed Pork Knuckle Claypot",zh:"砂锅油泼虎皮肘"},desc:{hu:"Puha sertéscsülök, tofu és illatos chiliolaj.",en:"Tender pork knuckle with tofu and fragrant chili oil.",zh:"软糯猪肘，热油浇香，鲜辣过瘾。"}},
 {id:"glass",cats:["claypot"],photo:"glass",price:4200,spice:1,name:{hu:"Párolt sertéshús üvegtésztával",en:"Braised Pork with Glass Noodles",zh:"砂锅猪肉粉条"},desc:{hu:"Párolt sertéshús és üvegtészta.",en:"Slow-cooked pork with glass noodles.",zh:"猪肉和粉条一起焖煮，香浓暖胃。"}},
 {id:"intestine",cats:["claypot"],photo:"intestine",price:4800,spice:1,name:{hu:"Sült sertésbél agyagedényben",en:"Claypot Baked Pork Intestine",zh:"砂锅焗肥肠"},desc:{hu:"Sertésbél zöld- és pirospaprikával.",en:"Pork intestine with green and red peppers.",zh:"肥肠配青红椒，大火焗香。"}},
 {id:"blackBeef",cats:["claypot"],photo:"blackBeef",price:4600,spice:1,name:{hu:"Feketeborsos marhahús agyagedényben",en:"Black Pepper Beef Claypot",zh:"砂锅黑椒牛肉"},desc:{hu:"Marhahús hagymával és feketeborsos szósszal.",en:"Beef with onion and rich black pepper sauce.",zh:"牛肉配洋葱和黑椒，香气扑鼻。"}},
 {id:"mushroom",cats:["claypot"],photo:"mushroom",price:3200,spice:0,badge:"veg",name:{hu:"Sült gomba agyagedényben",en:"Claypot Baked Mushrooms",zh:"砂锅焗口蘑"},desc:{hu:"Csiperkegomba és shiitake gomba.",en:"Button mushrooms and shiitake, baked until fragrant.",zh:"口蘑与香菇，鲜香浓郁。"}},
 {id:"duck",cats:["claypot"],photo:"duck",price:5600,spice:1,name:{hu:"Sörös kacsaragu agyagedényben",en:"Beer-Braised Duck Claypot",zh:"啤酒黑鸭煲"},desc:{hu:"Kacsahús és rizssütemények gazdag szaftban.",en:"Duck and rice cakes, braised in a savory sauce.",zh:"鸭肉和年糕，酱香浓郁。"}},
 {id:"sweetPork",cats:["claypot"],photo:"sweetPork",price:4200,spice:0,name:{hu:"Édes-savanyú sertésszűz agyagedényben",en:"Sweet and Sour Pork Tenderloin Claypot",zh:"砂锅糖醋里脊"},desc:{hu:"Omlós sertésszűz édes-savanyú szósszal.",en:"Pork tenderloin in a bright sweet-and-sour glaze.",zh:"酸甜可口，外酥里嫩。"}},
 {id:"riceNoodleBeef",cats:["noodles"],photo:"tomatoBeef",price:3200,spice:3,name:{hu:"Hot pot marhahúsos rizstészta",en:"Hot Pot Beef Rice Noodles",zh:"火锅牛肉米线"},desc:{hu:"Marhahús, tofu, csíra és fűszeres alaplé.",en:"Beef, tofu, sprouts and spicy hot pot broth.",zh:"牛肉、豆皮、米线，麻辣火锅汤底。"}},
 {id:"riceNoodleThree",cats:["noodles"],photo:"shrimp",price:3200,spice:0,name:{hu:"Háromféle feltétes rizstészta",en:"Three Delicacies Rice Noodles",zh:"罗三鲜米线"},desc:{hu:"Gomba, tojás, garnéla és friss zöldségek.",en:"Mushrooms, egg, prawns and fresh vegetables.",zh:"菌菇、鸡蛋、虾仁与鲜蔬，鲜美清爽。"}},
 {id:"riceNoodleSour",cats:["noodles"],photo:"mao",price:3200,spice:2,name:{hu:"Csípős-savanyú rizstészta",en:"Hot & Sour Rice Noodles",zh:"酸辣米线"},desc:{hu:"Savanykás, tüzes alaplé, tofu és rizstészta.",en:"Tangy, warming broth, tofu and rice noodles.",zh:"酸辣开胃，配豆皮和米线。"}},
 {id:"riceNoodleBraised",cats:["noodles"],photo:"pork",price:3200,spice:0,name:{hu:"Párolt marhahúsos rizstészta",en:"Braised Beef Rice Noodles",zh:"红烧牛肉米线"},desc:{hu:"Párolt marhahús, bambuszrügy és gazdag alaplé.",en:"Braised beef, bamboo shoots and savory broth.",zh:"红烧牛肉、竹笋、鲜香高汤。"}},
 {id:"riceNoodleMushroom",cats:["noodles"],photo:"mushroom",price:3200,spice:0,name:{hu:"Csirkés rizstészta gombalevesben",en:"Chicken Rice Noodles in Mushroom Broth",zh:"菌汤鸡肉米线"},desc:{hu:"Csirkecomb, gombák és könnyű gombaleves.",en:"Chicken, mixed mushrooms and delicate mushroom broth.",zh:"鸡腿肉、菌菇与鲜香菌汤。"}},
 {id:"riceNoodleFish",cats:["noodles"],photo:"shrimp",price:3200,spice:1,name:{hu:"Halas rizstészta savanyított mustárzölddel",en:"Fish Rice Noodles with Pickled Mustard Greens",zh:"老坛酸菜鱼米线"},desc:{hu:"Halfilé, pácolt zöldség és rizstészta.",en:"Fish fillet, pickled mustard greens and rice noodles.",zh:"鱼片、酸菜与米线，酸香开胃。"}},
 {id:"riceNoodleTomato",cats:["noodles"],photo:"tomatoBeef",price:3200,spice:0,name:{hu:"Paradicsomos húsgombócos rizstészta",en:"Tomato & Meatball Rice Noodles",zh:"番茄丸子米线"},desc:{hu:"Húsgombóc, paradicsomos alaplé és rizstészta.",en:"Tender meatballs in a bright tomato broth.",zh:"鲜嫩肉丸配番茄浓汤。"}},
 {id:"riceNoodleSeafood",cats:["noodles"],photo:"shrimp",price:3900,spice:0,name:{hu:"Tenger gyümölcsei rizstészta aranylében",en:"Seafood Rice Noodles in Golden Broth",zh:"金汤海鲜米线"},desc:{hu:"Garnéla, kagyló és tintahal aranyló alaplében.",en:"Prawns, mussels and squid in golden broth.",zh:"虾、青口、鱿鱼，金汤鲜美。"}},
 {id:"rice",cats:["sides"],photo:"rice",price:600,spice:0,name:{hu:"Párolt rizs",en:"Steamed Rice",zh:"米饭"},desc:{hu:"Puha, frissen főtt rizs.",en:"Fluffy, freshly steamed rice.",zh:"香软白米饭。"}},
 {id:"edamame",cats:["sides"],photo:"edamame",price:1100,spice:0,badge:"veg",name:{hu:"Edamame",en:"Edamame",zh:"毛豆"},desc:{hu:"Enyhén fűszerezett zöld szójabab.",en:"Lightly seasoned young soybeans.",zh:"清爽毛豆。"}},
 {id:"crispy",cats:["sides"],photo:"crispy",price:1500,spice:0,name:{hu:"Ropogós csirkefalatok",en:"Crispy Chicken Bites",zh:"脆皮鸡柳"},desc:{hu:"Kívül ropogós, belül omlós.",en:"Crispy on the outside, tender inside.",zh:"外酥里嫩的小食。"}},
 {id:"sweet",cats:["sides"],photo:"sweet",price:1200,spice:0,name:{hu:"Barna cukros ragacsos rizssütemény",en:"Brown Sugar Sticky Rice Cakes",zh:"红糖糍粑"},desc:{hu:"Négy falatnyi édes rizssütemény.",en:"Four sweet, chewy rice cakes.",zh:"软糯香甜的红糖糍粑。"}},
 {id:"beefSalad",cats:["sides"],photo:"beefSalad",price:2800,spice:2,name:{hu:"Mak Luo csípős marhasaláta",en:"Mak Luo Spicy Beef Salad",zh:"罗妈香辣牛肉"},desc:{hu:"Marhahús korianderrel és pikáns öntettel.",en:"Sliced beef with coriander and a spicy dressing.",zh:"鲜嫩牛肉配香菜，香辣开胃。"}}
];
let currentLanguage = "hu";
let currentCategory = "popular";
const byId = id => document.getElementById(id);
const tr = key => (i18n[currentLanguage]||i18n.hu)[key]||key;
const formatPrice = price => new Intl.NumberFormat(currentLanguage==="en"?"en-GB":currentLanguage==="zh"?"zh-CN":"hu-HU").format(price)+" Ft";
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function renderMenu(){
 const grid=byId("menu-grid"); if(!grid)return;
 const selection=dishes.filter(d=>d.cats.includes(currentCategory));
 grid.innerHTML=selection.map(d=>{
  const name=escapeHTML(d.name[currentLanguage]||d.name.en);
  const desc=escapeHTML(d.desc[currentLanguage]||d.desc.en);
  const label=d.badge==="popular"?tr("popularBadge"):d.badge==="veg"?tr("vegBadge"):"";
  return '<article class="menu-card">'+
   '<div class="menu-image"><img src="'+PHOTO[d.photo]+'" alt="'+name+'" loading="lazy" decoding="async" />'+(label?'<span class="menu-badge">'+escapeHTML(label)+'</span>':'')+'</div>'+
   '<div class="menu-card-body"><div class="menu-card-top"><h3>'+name+'</h3><span class="menu-card-price">'+formatPrice(d.price)+'</span></div>'+
   (currentLanguage!=="zh"?'<p class="menu-card-subtitle">'+escapeHTML(d.name.zh)+'</p>':'')+
   '<p class="menu-card-desc">'+desc+'</p>'+(d.spice?'<div class="menu-card-spice" aria-label="'+d.spice+' chili peppers">'+'✶'.repeat(d.spice)+'</div>':'')+
   '</div></article>';
 }).join("");
 grid.querySelectorAll("img").forEach(img=>img.addEventListener("error",()=>{img.style.opacity="0";img.parentElement.classList.add("image-unavailable")},{once:true}));
}
function setLanguage(language){
 if(!i18n[language])language="hu";
 currentLanguage=language;
 document.documentElement.lang=language==="zh"?"zh-CN":language;
 document.querySelectorAll("[data-t]").forEach(el=>{el.textContent=tr(el.dataset.t);});
 document.querySelectorAll("[data-html]").forEach(el=>{el.innerHTML=tr(el.dataset.html);});
 document.querySelectorAll(".lang-btn").forEach(btn=>{const selected=btn.dataset.lang===language;btn.classList.toggle("is-active",selected);btn.setAttribute("aria-pressed",String(selected));});
 renderMenu();
 try{localStorage.setItem("makluo-language",language)}catch(e){}
}
function closeNav(){const nav=byId("main-nav"),btn=document.querySelector(".mobile-toggle");nav.classList.remove("is-open");btn.classList.remove("is-open");btn.setAttribute("aria-expanded","false");}
document.addEventListener("DOMContentLoaded",()=>{
 byId("year").textContent=new Date().getFullYear();
 document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>{setLanguage(btn.dataset.lang);closeNav();}));
 document.querySelectorAll(".category-tab").forEach(btn=>btn.addEventListener("click",()=>{
  currentCategory=btn.dataset.category;
  document.querySelectorAll(".category-tab").forEach(b=>{const active=b===btn;b.classList.toggle("active",active);b.setAttribute("aria-selected",String(active));});
  renderMenu();
 }));
 const toggle=document.querySelector(".mobile-toggle");
 toggle.addEventListener("click",()=>{const open=!byId("main-nav").classList.contains("is-open");byId("main-nav").classList.toggle("is-open",open);toggle.classList.toggle("is-open",open);toggle.setAttribute("aria-expanded",String(open));});
 document.querySelectorAll("#main-nav a").forEach(a=>a.addEventListener("click",closeNav));
 window.addEventListener("keydown",e=>{if(e.key==="Escape")closeNav()});
 let saved;try{saved=localStorage.getItem("makluo-language")}catch(e){}
 setLanguage(saved&&i18n[saved]?saved:"hu");
});
