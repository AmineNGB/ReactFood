(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,t,a){var n={"./chocolat.jpeg":176,"./default.jpeg":80,"./epinard.jpg":177,"./hamburger.jpeg":178,"./pizza.jpeg":179,"./saumon.jpeg":180,"./tartine.jpg":181};function r(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=175},176:function(e,t,a){e.exports=a.p+"static/media/chocolat.4200b6b9.jpeg"},177:function(e,t,a){e.exports=a.p+"static/media/epinard.815852b9.jpg"},178:function(e,t,a){e.exports=a.p+"static/media/hamburger.fca17319.jpeg"},179:function(e,t,a){e.exports=a.p+"static/media/pizza.287d53ae.jpeg"},180:function(e,t,a){e.exports=a.p+"static/media/saumon.8324a614.jpeg"},181:function(e,t,a){e.exports=a.p+"static/media/tartine.96c2f754.jpg"},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(81),o=a.n(c),i=(a(89),a(91),a(10)),s=a(11),u=a(13),l=a(12),m=a(14),p=r.a.createContext(),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={color:"red"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Provider,{value:{state:this.state}},this.props.children)}}]),t}(n.Component),h=function(e){var t=e.pseudo;return r.a.createElement(p.Consumer,null,function(e){return r.a.createElement("header",{style:{backgroundColor:e.state.color}},r.a.createElement("h1",null,"La bo\xeete \xe0 recettes ",function(e){return/[aeiouy]/i.test(e[0])?"d'".concat(e):"de ".concat(e)}(t)))})},g=a(31),f=a.n(g),v=a(63),b=a(30),j=a(21),E=a(47),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={nom:"",image:"",ingredients:"",instructions:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(E.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=Object(j.a)({},a.state);a.props.ajouterRecette(t),Object.keys(t).forEach(function(e){t[e]=""}),a.setState(Object(j.a)({},t))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("form",{className:"admin-form ajouter-recette",onSubmit:this.handleSubmit},r.a.createElement("input",{value:this.state.nom,onChange:this.handleChange,name:"nom",type:"text",placeholder:"Nom de la recette"}),r.a.createElement("input",{value:this.state.image,onChange:this.handleChange,name:"image",type:"text",placeholder:"Nom de l'image"}),r.a.createElement("textarea",{value:this.state.ingredients,onChange:this.handleChange,name:"ingredients",rows:"3",placeholder:"Liste des ingr\xe9dients"}),r.a.createElement("textarea",{value:this.state.instructions,onChange:this.handleChange,name:"instructions",rows:"15",placeholder:"Liste des instructions"}),r.a.createElement("button",{type:"submit"},"+ Ajouter une recette")))}}]),t}(n.Component),x=function(e){var t=e.id,a=e.majRecette,n=e.recettes,c=e.supprimerRecette,o=n[t],i=function(e,t){var r=e.target,c=r.name,o=r.value,i=n[t];i[c]=o,a(t,i)};return r.a.createElement("div",{className:"card"},r.a.createElement("form",{className:"admin-form"},r.a.createElement("input",{value:o.nom,onChange:function(e){return i(e,t)},type:"text",name:"nom",placeholder:"Nom de la recette"}),r.a.createElement("input",{value:o.image,onChange:function(e){return i(e,t)},type:"text",name:"image",placeholder:"Adresse de l'image"}),r.a.createElement("textarea",{value:o.ingredients,onChange:function(e){return i(e,t)},name:"ingredients",rows:"3",placeholder:"Liste des ingr\xe9dients"}),r.a.createElement("textarea",{value:o.instructions,onChange:function(e){return i(e,t)},name:"instructions",rows:"15",placeholder:"Liste des instructions"})),r.a.createElement("button",{onClick:function(){return c(t)}},"Supprimer"))},y=function(e){var t=e.authenticate;return r.a.createElement("div",{className:"login"},r.a.createElement("h2",null,"Connecte toi pour cr\xe9er tes recettes !"),r.a.createElement("button",{onClick:t,className:"facebook-button"},"Me connecter avec Facebook"))},C=a(20),k=a.n(C),S=(a(169),a(82)),w=a.n(S),A=(a(172),k.a.initializeApp({apiKey:"AIzaSyD4gZdkaekxXs2Q8FGg4mZyfFi4wH-yjvY",authDomain:"reactfood-a051c.firebaseapp.com",databaseURL:"https://reactfood-a051c.firebaseio.com"})),R=w.a.createClass(A.database()),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,chef:null},a.handleAuth=function(){var e=Object(v.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.fetch(a.props.pseudo,{context:Object(b.a)(Object(b.a)(a))});case 2:if((n=e.sent).chef){e.next=6;break}return e.next=6,R.post("".concat(a.props.pseudo,"/chef"),{data:t.user.uid});case 6:a.setState({uid:t.user.uid,chef:n.chef||t.user.uid});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(){var e=new k.a.auth.FacebookAuthProvider;A.auth().signInWithPopup(e).then(a.handleAuth)},a.logout=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("D\xe9connexion"),e.next=3,k.a.auth().signOut();case 3:a.setState({uid:null});case 4:case"end":return e.stop()}},e,this)})),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.auth().onAuthStateChanged(function(t){t&&e.handleAuth({user:t})})}},{key:"render",value:function(){var e=this.props,t=e.recettes,a=e.ajouterRecette,n=e.majRecette,c=e.chargerExemple,o=e.supprimerRecette,i=r.a.createElement("button",{onClick:this.logout},"D\xe9connexion");return this.state.uid?this.state.uid!==this.state.chef?r.a.createElement("div",null,r.a.createElement("p",null,"Tu n'es pas le chef de cette bo\xeete !"),i):r.a.createElement("div",{className:"cards"},r.a.createElement(O,{ajouterRecette:a}),Object.keys(t).map(function(e){return r.a.createElement(x,{key:e,id:e,majRecette:n,supprimerRecette:o,recettes:t})}),r.a.createElement("footer",null,i,r.a.createElement("button",{onClick:c},"Remplir"))):r.a.createElement(y,{authenticate:this.authenticate})}}]),t}(n.Component),z=function(e){var t=e.details,n=e.antho,c=t.ingredients.split(",").map(function(e){return r.a.createElement("li",{key:e},e)}),o=t.instructions.split("\n").map(function(e){return r.a.createElement("li",{key:e},e)});return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:function(e){try{return a(175)("./".concat(e))}catch(t){return a(80)}}(t.image),alt:t.nom})),r.a.createElement("div",{className:"recette"},r.a.createElement("h2",null,t.nom),r.a.createElement("ul",{className:"liste-ingredients"},c),r.a.createElement("ol",{className:"liste-instructions"},o)),r.a.createElement("p",null,n))},P={recette1:{nom:"Salade d'\xe9pinards du Soleil",image:"epinard.jpg",ingredients:"450g d'\xc9pinards, 2 Pommes, 6 tranches de Bacon, 1 Oignon",instructions:"Laver et couper en 2 les feuilles d'\xe9pinards.\nPr\xe9parer une sauce vinaigrette.\nLaver et couper les pommes. Emincer l'oignon. Faire griller le Bacon.\nAjouter le tout aux \xe9pinards.\nS'accorde bien avec un Pinot Blanc."},recette2:{nom:"Amour de Saumon",image:"saumo.jpeg",ingredients:"2 pav\xe9s de Saumon, 10 Tomates Cerises, 1 gousse d'Ail, 1 Citron",instructions:"Pr\xe9chauffer le four \xe0 180\xb0C.\nPeler et \xe9mincer la gousse d'ail.\nCouper les tomates cerises en deux.\nD\xe9poser chaque pav\xe9 de saumon au centre d'une feuille de cuisson et ajouter autour l'ail, les tomates cerises et le jus de citron.\nFermer les papillotes et enfourner 30 minutes.\nS'accorde bien avec un Pouilly Fum\xe9."},recette3:{nom:"Hamburger Maison",image:"hamburger.jpeg",ingredients:"2 gros Steacks Hach\xe9s, 2 Buns, 80g de Cheddar, 4 tranches de Bacon, 1 Oignon, Ketchup ou sauce BBQ, Salade",instructions:"Peler et couper l'oignon en rondelles puis les faire fondre \xe0 la po\xeale avec une noix de beurre.\nFaire cuire les Steacks.\nFaire revenir les tranches de Bacon.\nFaire dorer les Buns au four.\nMonter le Hamburger dans cet ordre : oignons, bacon, steack, sauce, cheddar, salade.\nS'accorde bien avec un Coca-Cola."},recette4:{nom:"Tartines \xe0 l'Italienne",image:"tartine.jpg",ingredients:"1/2 Baguette, Mozzarella, Jambon, Tapenade verte, 1 Tomate, 1 gousse d'Ail, Basilic",instructions:"Trancher la baguette pour en faire des tartines.\nLes faire l\xe9g\xe8rement dorer au four avec un peu d'huile d'olive.\nFrotter le pain avec la gousse d'ail coup\xe9e en deux.\nTartiner la tapenade sur les tartines.\nAjouter les tranches de jambon et les feuilles de basilic cisel\xe9es.\nS'accorde bien avec un Pinot Noir."},recette5:{nom:"Pizza au Chorizo",image:"pizza.jpeg",ingredients:"P\xe2te \xe0 Pizza, Sauce Tomate, Fromage rap\xe9, 100g de Chorizo, 1 Poivron, Olives",instructions:"\xc9mincer le poivron et le faire revenir dans un peu d'huile.\n\xc9taler la sauce tomate sur la p\xe2te \xe0 Pizza et ajouter le chorizo et les olives.\nParsemer de fromage rap\xe9.\nEnfourner 20 minutes \xe0 180\xb0C.\nS'accorde bien avec un Madiran."},recette6:{nom:"Moelleux au Chocolat",image:"chocolat.jpeg",ingredients:"200g de Chocolat, 125g de Beurre, 125g de Sucre, 4 Oeufs, 125g de Farine, 1 sachet de Levure",instructions:"Pr\xe9chauffer le four \xe0 180\xb0C.\nFaire fondre le chocolat au bain-marie avec le beurre.\nM\xe9langer les jaunes avec le sucre.\nAjouter le chocolat fondu.\nAjouter la farine et la levure.\nMonter les blancs en neige et incorporer le m\xe9lange pr\xe9c\xe9dent.\nCuire pendant 30 minutes.\nS'accorde bien avec un Banyuls."}},B=function(e){return function(t){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).state={pseudo:t.props.match.params.pseudo,recettes:{},color:"seagreen"},t.ajouterRecette=function(e){var a=Object(j.a)({},t.state.recettes);a["recette-".concat(Date.now())]=e,t.setState({recettes:a})},t.majRecette=function(e,a){var n=Object(j.a)({},t.state.recettes);n[e]=a,t.setState({recettes:n})},t.supprimerRecette=function(e){var a=Object(j.a)({},t.state.recettes);a[e]=null,t.setState({recettes:a})},t.chargerExemple=function(){return t.setState({recettes:P})},t}return Object(m.a)(a,t),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.ref=R.syncState("/".concat(this.state.pseudo,"/recettes"),{context:this,state:"recettes"})}},{key:"componentWillUnmount",value:function(){R.removeBinding(this.ref)}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({recettes:this.state.recettes,ajouterRecette:this.ajouterRecette,majRecette:this.majRecette,supprimerRecette:this.supprimerRecette,chargerExemple:this.chargerExemple},this.props))}}]),a}(n.Component)}(function(e){var t=e.match,a=e.recettes,n=e.ajouterRecette,c=e.majRecette,o=e.supprimerRecette,i=e.chargerExemple,s=Object.keys(a).map(function(e){return r.a.createElement(z,{key:e,details:a[e]})});return r.a.createElement(d,null,r.a.createElement("div",{className:"box"},r.a.createElement(h,{pseudo:t.params.pseudo}),r.a.createElement("div",{className:"cards"},s),r.a.createElement(N,{pseudo:t.params.pseudo,recettes:a,ajouterRecette:n,majRecette:c,supprimerRecette:o,chargerExemple:i})))}),F=a(189),T=function(e){return function(t){return r.a.createElement(e,Object.assign({placeholder:"Mon HOC"},t))}}(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={pseudo:"",goToApp:!1},a.goToApp=function(e){e.preventDefault(),a.setState({goToApp:!0})},a.handleChange=function(e){var t=e.target.value;a.setState({pseudo:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.goToApp?r.a.createElement(F.a,{push:!0,to:"/pseudo/".concat(this.state.pseudo)}):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"connexionBox"},r.a.createElement("form",{className:"connexion",onSubmit:this.goToApp},r.a.createElement("h1",null,"Ma Bo\xeete \xe0 Recettes"),r.a.createElement("input",{type:"text",value:this.state.pseudo,onChange:this.handleChange,placeholder:this.props.placeholder,pattern:"[A-Za-z-]{1,}",required:!0}),r.a.createElement("button",{type:"submit"},"GO"))),r.a.createElement("p",null,"Pas de caract\xe8res sp\xe9ciaux."))}}]),t}(n.Component)),M=function(){return r.a.createElement("h2",{className:"notFound"},"Y'a rien ici!")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(190),L=a(192),H=a(191);o.a.render(r.a.createElement(function(){return r.a.createElement(D.a,null,r.a.createElement(L.a,null,r.a.createElement(H.a,{exact:!0,path:"/",component:T}),r.a.createElement(H.a,{path:"/pseudo/:pseudo",component:B}),r.a.createElement(H.a,{component:M})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a.p+"static/media/default.b9a86c50.jpeg"},84:function(e,t,a){e.exports=a(187)},89:function(e,t,a){},91:function(e,t,a){}},[[84,2,1]]]);
//# sourceMappingURL=main.1d16af9b.chunk.js.map