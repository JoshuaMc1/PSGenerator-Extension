let passwordFields=document.querySelectorAll('input[type="password"]'),defaultOptions={uppercase:!0,lowercase:!0,numbers:!0,symbols:!1};function generatePassword(t,e){let r="",s="";e.uppercase&&(r+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),e.lowercase&&(r+="abcdefghijklmnopqrstuvwxyz"),e.numbers&&(r+="0123456789"),e.symbols&&(r+="!@#$%^&*()_+~`|}{[]:;?><,./-=");for(let e=0;e<t;e++)s+=r.charAt(Math.floor(Math.random()*r.length));return s}function randomLength(){return Math.floor(18*Math.random()+8)}passwordFields.forEach((function(t){let e=document.createElement("button");e.classList.add("psg-btn"),e.setAttribute("title","Generar contraseña"),e.setAttribute("type","button");let r=document.createElementNS("http://www.w3.org/2000/svg","svg"),s=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("class","psg-w-6 psg-h-6 psg-text-white"),r.setAttribute("aria-hidden","true"),r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r.setAttribute("width","24"),r.setAttribute("height","24"),r.setAttribute("fill","currentColor"),r.setAttribute("viewBox","0 0 24 24"),s.setAttribute("fill-rule","evenodd"),s.setAttribute("d","M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"),s.setAttribute("clip-rule","evenodd"),r.appendChild(s),e.appendChild(r),e.addEventListener("click",(function(){t.value=generatePassword(randomLength(),defaultOptions)})),t.parentNode.insertBefore(e,t.nextSibling)}));