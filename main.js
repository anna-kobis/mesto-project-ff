!function(){"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-18",headers:{authorization:"4849bf4c-4e84-431f-9d56-8ee34f9e7cda","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(n,r){return fetch(e.baseUrl+n,{method:r,headers:e.headers}).then(t)}function r(n,r,o){return fetch(e.baseUrl+n,{method:r,headers:e.headers,body:JSON.stringify(o)}).then(t)}var o=document.querySelector("#card-template").content;function c(e,t,n,r,c){var u=o.querySelector(".card").cloneNode(!0),a=u.querySelector(".card__title"),l=u.querySelector(".card__image"),s=u.querySelector(".card__like-button"),d=u.querySelector(".card__like-count"),f=u.querySelector(".card__delete-button");return a.textContent=e.name,l.src=e.link,l.alt=e.name,d.textContent=e.likes.length,i(e,c)?s.classList.add("card__like-button_is-active"):s.classList.remove("card__like-button_is-active"),e.owner._id===c?(u.dataset.cardId=e._id,f.addEventListener("click",(function(){return t(e)}))):f.remove(),l.addEventListener("click",(function(){return n(e)})),s.addEventListener("click",(function(){return r(e,s,d,c)})),u}function u(e,t,r,o){i(e,o)?function(e){return n("/cards/likes/".concat(e._id),"DELETE")}(e).then((function(n){t.classList.remove("card__like-button_is-active"),r.textContent=n.likes.length,e.likes=n.likes})).catch((function(e){return console.log(e)})):function(e){return n("/cards/likes/".concat(e._id),"PUT")}(e).then((function(n){t.classList.add("card__like-button_is-active"),r.textContent=n.likes.length,e.likes=n.likes})).catch((function(e){return console.log(e)}))}function i(e,t){return e.likes.some((function(e){return e._id===t}))}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",d)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d)}function s(e){e.target===e.currentTarget&&l(e.target)}function d(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))}function f(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}function p(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function m(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)}function _(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):m(t,n)}function v(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){return p(e,n,t)})),_(n,r,t)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var h,S,b=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),q=document.querySelector(".profile__image"),E=document.querySelector(".profile__edit-button"),g=document.querySelector(".profile__add-button"),C=document.querySelector(".places__list"),L=document.querySelectorAll(".popup"),A=document.querySelectorAll(".popup__close"),x=document.querySelector(".popup_type_edit"),T=document.forms["edit-profile"],j=T.elements.name,w=T.elements.description,P=T.querySelector(".popup__button"),D=document.querySelector(".popup_type_avatar"),B=document.forms["edit-avatar"],I=B.elements.avatar,O=B.querySelector(".popup__button"),U=document.querySelector(".popup_type_new-card"),M=document.forms["new-place"],H=M.elements["place-name"],G=M.elements.link,N=M.querySelector(".popup__button"),V=document.querySelector(".popup_type_delete"),z=V.querySelector(".popup__button"),J=document.querySelector(".popup_type_image"),$=J.querySelector(".popup__image"),F=J.querySelector(".popup__caption"),K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function Q(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function R(e){$.src=e.link,$.alt=e.name,F.textContent=e.name,a(J)}function W(e){S=e._id,a(V)}Promise.all([n("/users/me","GET"),n("/cards","GET")]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,i=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];b.textContent=o.name,k.textContent=o.about,q.style.backgroundImage="url(".concat(o.avatar,")"),h=o._id,i.forEach((function(e){C.append(c(e,W,R,u,h))}))})).catch((function(e){return console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){return function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?p(e,t,n):f(e,t,t.validationMessage,n)}(e,o,t),_(n,r,t)}))}))}(t,e)}))}(K),E.addEventListener("click",(function(){j.value=b.textContent,w.value=k.textContent,v(T,K),a(x)})),q.addEventListener("click",(function(){B.reset(),v(B,K),a(D)})),g.addEventListener("click",(function(){M.reset(),v(M,K),a(U)})),A.forEach((function(e){e.addEventListener("click",(function(){l(e.closest(".popup"))}))})),L.forEach((function(e){e.addEventListener("click",s)})),T.addEventListener("submit",(function(e){var t,n;e.preventDefault(),Q(!0,P),(t=j.value,n=w.value,r("/users/me","PATCH",{name:t,about:n})).then((function(e){b.textContent=e.name,k.textContent=e.about,l(x)})).catch((function(e){return console.log(e)})).finally((function(){return Q(!1,P)}))})),B.addEventListener("submit",(function(e){var t;e.preventDefault(),(t=I.value,fetch(t,{method:"HEAD"}).then((function(e){return e.ok?e.headers.get("Content-Type").includes("image")?Promise.resolve():Promise.reject("Ссылка не является изображением"):Promise.reject("Ссылка недействительна. Ошибка: ".concat(e.status))}))).then((function(){var e;Q(!0,O),(e=I.value,r("/users/me/avatar","PATCH",{avatar:e})).then((function(e){q.style.backgroundImage="url(".concat(e.avatar,")"),l(D)})).catch((function(e){return console.log(e)})).finally((function(){return Q(!1,O)}))})).catch((function(e){f(B,I,e,K),m(O,K)}))})),M.addEventListener("submit",(function(e){var t,n;e.preventDefault(),Q(!0,N),(t=H.value,n=G.value,r("/cards","POST",{name:t,link:n})).then((function(e){C.prepend(c(e,W,R,u,h)),l(U),M.reset()})).catch((function(e){return console.log(e)})).finally((function(){return Q(!1,N)}))})),z.addEventListener("click",(function(e){var t;e.preventDefault(),(t=S,n("/cards/".concat(t),"DELETE")).then((function(){document.querySelector('[data-card-id="'.concat(S,'"]')).remove(),S="",l(V)})).catch((function(e){return console.log(e)}))}))}();