(()=>{"use strict";
/*!
 *
 *  paili.js
 *
 *  Copyright(C) 2021 Yuya Maeda
 *  Released under the MIT license
 *
 *  Copyright(C) 2017 Satoshi Kobayashi
 *  Released under the MIT license
 *  https://github.com/kobalab/Majiang/blob/master/LICENSE
 */
const i={},a={};function t(t){if(t&&history.replaceState("","",`#${t}`),i.shan=new Majiang.Shan({m:1,p:1,s:1}),t)i.shoupai=Majiang.Shoupai.fromString(t),function(i,a){for(let t of a.match(/([mpsz][\d\+\=\-]+)/g)){let a=t[0];for(let n of t.match(/\d/g)){let t=i._pai.indexOf(a+n);t<0||i._pai.splice(t,1)}}}(i.shan,i.shoupai.toString());else{let a=[];for(;a.length<12;)a.push(i.shan.zimo());i.shoupai=new Majiang.Shoupai(a)}for(a.shoupai=new Majiang.View.Shoupai($(".shoupai"),i.shoupai),a.shoupai.redraw(!0);i.shan.paishu()>18;)i.shan.zimo();i.he=new Majiang.He,a.he=new Majiang.View.He($(".he"),i.he),a.he.redraw(!0),$(".paili").empty(),i.shoupai._zimo?p():setTimeout(e,0),$('form input[name="paistr"]').val(i.shoupai.toString())}function n(){let a=null;for(let t of i.shoupai.get_dapai()){let i=`.shoupai .bingpai > .pai[data-pai="${t}"]`;$(i).on("mouseover",(function(i){return a=i.timeStamp,$(this).addClass("selected").off("click").on("click",(function(i){return i.timeStamp==a||($(this).addClass("dapai"),o(t)),!1})),!1})).on("mouseout",(function(){return $(this).removeClass("selected").off("click"),!1})),i=`.shoupai .bingpai .zimo .pai[data-pai="${t}"]`,$(i).on("mouseover",(function(i){return a=i.timeStamp,$(this).addClass("selected").off("click").on("click",(function(i){return i.timeStamp==a||($(this).addClass("dapai"),o(t+"_")),!1})),!1})).on("mouseout",(function(){return $(this).removeClass("selected").off("click"),!1}))}}function e(){a.he.redraw(),a.shoupai.redraw(),0!=i.shan.paishu()?(i.shoupai.zimo(i.shan.zimo()),a.shoupai.redraw(),p()):$(".status").text("流局……")}function o(t){Majiang.View.audio("dapai").play(),$(".shoupai .bingpai .pai").off("click").off("mouseover").off("mouseout"),i.shoupai.lizhi()||0!=Majiang.Util.xiangting(i.shoupai)||(t+="*"),i.shoupai.dapai(t),a.shoupai.dapai(t),i.he.dapai(t),a.he.dapai(t),$(".paili").empty(),setTimeout(e,500)}function p(){let a=Majiang.Util.xiangting(i.shoupai);if(-1==a?$(".status").text("和了！！"):0==a?$(".status").text("聴牌！"):$(".status").text(`${a}向聴`),0!=a||i.shoupai.lizhi()){if(-1==a)return void Majiang.View.audio("zimo").play()}else Majiang.View.audio("lizhi").play();let t=[];for(let n of i.shoupai.get_dapai()){let e=i.shoupai.clone().dapai(n);if(Majiang.Util.xiangting(e)>a)continue;if(n=n.replace(/0/,"5"),t.length&&t[t.length-1].p==n)continue;let o=Majiang.Util.tingpai(e),p=o.length?o.map((a=>4-i.shoupai._bingpai[a[0]][a[1]])).reduce(((i,a)=>i+a)):0;t.push({p:n,tingpai:o,n_tingpai:p})}const e=(i,a)=>i.n_tingpai==a.n_tingpai?i.tingpai.length==a.tingpai.length?i.p>a.p?1:i.p<a.p?-1:0:a.tingpai.length-i.tingpai.length:a.n_tingpai-i.n_tingpai;for(let i of t.sort(e)){let a="<div>打: "+$("<span>").append(Majiang.View.pai(i.p)).html()+" 摸: "+i.tingpai.map((i=>$("<span>").append(Majiang.View.pai(i)).html())).join("")+` (${i.n_tingpai}枚)</div>`;$(".paili").append($(a))}n()}$((function(){$(".version").text("ver. "+Majiang.VERSION),$('form input[type="button"]').on("click",(function(i){return t(),!1})),$("form").on("submit",(function(){return t($('form input[name="paistr"]').val()),!1})),$("form").on("reset",(function(){$('input[name="paistr"]').focus()})),t(location.hash.replace(/^#/,""))}))})();