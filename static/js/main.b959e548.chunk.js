(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e){e.exports={__schema:{types:[]}}},229:function(e,t,a){e.exports=a(358)},234:function(e,t,a){},348:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),i=a.n(o),l=a(122),c=a.n(l),s=(a(234),a(365)),u=a(18),d=a(49),p=a(121),m=a(52),h=a(237),g=a(364),b=a(125);var f=Object(m.b)({uri:"https://food.act.today/graphql"}),y=new p.a({link:f,cache:function(){var e=new h.b({introspectionQueryResultData:b});return new g.a({fragmentMatcher:e})}()}),v=a(13),E=a(11),x=a(16),O=a(14),j=a(15),k=a(367),w=a(366),S=a(39),C=a(48),L=a.n(C),R=a(45),B=a(46);function M(){var e=Object(R.a)(["\n  ","\n\n  fragment RestaurantFields on Restaurant {\n    type\n    id\n    address\n    country\n    cuisine\n    description\n    distance\n    hours\n    hours_source\n    images\n    ios_url\n    lat\n    lon\n    opentable_id\n    opentable_url\n    open_closed\n    phone\n    rating\n    references {\n      ...RestaurantReferenceFields\n    }\n    region\n    reviews\n    street_address\n    title\n    url\n    zip\n  }\n"]);return M=function(){return e},e}function F(){var e=Object(R.a)(["\n  fragment RestaurantReferenceFields on RestaurantReference {\n    rest_url\n    site\n    url\n    site_name\n  }\n"]);return F=function(){return e},e}function _(){var e=Object(R.a)(["\n  fragment ResponseStatusFields on ResponseStatus {\n    status\n    error\n    error_code\n  }\n"]);return _=function(){return e},e}var T=Object(B.a)(_()),D=Object(B.a)(F()),z=Object(B.a)(M(),D);function A(){var e=Object(R.a)(["\n","\n\nquery restaurant($id: String!) {\n  restaurant(id: $id) {\n    ...RestaurantFields\n  }\n}\n"]);return A=function(){return e},e}function I(){var e=Object(R.a)(["\n","\n","\n\nquery search_restaurants($address: String, $lat: String, $lon: String) {\n  search_restaurants(address: $address, lat: $lat, lon: $lon) {\n    response_status {\n      ...ResponseStatusFields\n    }\n    total_results\n    results {\n      ...RestaurantFields\n    }\n  }\n}\n"]);return I=function(){return e},e}var N=Object(B.a)(I(),T,z),H=Object(B.a)(A(),z),W=a(50),$=function(e){function t(){return Object(v.a)(this,t),Object(x.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){console.log("Mount complete"),this.setState({zoomToMarkers:function(e){var t=new window.google.maps.LatLngBounds;e.props.children.forEach(function(e){e.type===W.Marker&&t.extend(new window.google.maps.LatLng(e.props.position.lat,e.props.position.lng))}),e.fitBounds(t)}})}},{key:"render",value:function(){console.log("KEy","AIzaSyCVBpQNJK0S5vFqDLRrKskZ-7hRoxgB5xU");var e=new window.google.maps.LatLngBounds,t=!0,a=!1,n=void 0;try{for(var o,i=this.props.coordsArray[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value;console.log(l),e.extend(l)}}catch(c){a=!0,n=c}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}return r.a.createElement(W.Map,{style:{width:"100%",height:"100%"},ref:"map",google:this.props.google,zoom:14,bounds:e},this.props.coordsArray.map(function(e,t){return r.a.createElement(W.Marker,{key:t,position:e})}))}}]),t}(r.a.Component),q=Object(W.GoogleApiWrapper)({apiKey:"AIzaSyCVBpQNJK0S5vFqDLRrKskZ-7hRoxgB5xU"})($),K=a(363),P=a(41),J=a.n(P),Q=a(44),U=function(e){return r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement(J.a,{container:!0,spacing:24,style:{background:"white",height:"120px",boxShadow:"1px 1px 0 0 #ccc",borderRadius:"12px"}},r.a.createElement(J.a,{item:!0,xs:9},r.a.createElement("div",{style:{padding:"10px",paddingBottom:"3px"}},r.a.createElement(Q.a,{style:{color:"#558BF7"},icon:"map-marker-alt"}),r.a.createElement(K.a,{style:{textDecoration:"none"},to:"/rest/".concat(e.rest.id)},r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"500",color:"black"}}," ",e.rest.title))),r.a.createElement("div",{style:{padding:"10px",paddingTop:"0px",color:"#558BF7",fontWeight:"400"}},e.rest.cuisine),e.rest.references&&e.rest.references.length>0?r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(Q.a,{icon:"star"}),"  Featured in ",e.rest.references[0].site_name,e.rest.references.length>1?r.a.createElement("span",null,".. +",e.rest.references.length-1):""):""),e.rest.images&&e.rest.images.length>0?r.a.createElement(J.a,{item:!0,xs:3,style:{padding:"0px"}},r.a.createElement("img",{style:{height:"100%",width:"100%",float:"right",borderRadius:"0 12px 12px 0"},src:e.rest.images[0]})):""),r.a.createElement(J.a,{container:!0,spacing:24,style:{paddingTop:"10px"}},r.a.createElement(J.a,{item:!0,xs:8,style:{color:"#558BF7",lineHeight:"20px"}},r.a.createElement("span",null,e.rest.open_closed),r.a.createElement(Q.a,{style:{fontSize:"4px",padding:"4px 12px 4px 12px"},icon:"circle"}),r.a.createElement("span",null,"3.3 miles away")),r.a.createElement(J.a,{item:!0,xs:4},r.a.createElement("span",{style:{fontSize:"18px",fontWeight:"bold"}},r.a.createElement(Q.a,{style:{color:"#558BF7"},icon:"walking"})," 12"),r.a.createElement("span",{style:{fontSize:"14px"}},"min"),r.a.createElement("span",{style:{float:"right",fontSize:"14px",lineHeight:"20px"}},"/5"),r.a.createElement("span",{style:{float:"right",fontSize:"18px",fontWeight:"bold",lineHeight:"20px"}},r.a.createElement(Q.a,{style:{color:"#558BF7"},icon:"star"})," ",e.rest.rating))))},G=a(64),V=a.n(G),Z=a(65),Y=a.n(Z),X=a(51),ee=a.n(X),te=a(129),ae=a.n(te),ne=a(130),re=a.n(ne),oe=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(x.a)(this,Object(O.a)(t).call(this,e))).state={value:e.value},a.searchCallback=a.searchCallback.bind(Object(S.a)(Object(S.a)(a))),a.handleChange=a.handleChange.bind(Object(S.a)(Object(S.a)(a))),a}return Object(j.a)(t,e),Object(E.a)(t,[{key:"styles",value:function(){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400,height:"40px",borderRadius:"20px",marginLeft:"20px"},input:{marginLeft:8,flex:1},iconButton:{padding:10},divider:{width:1,height:28,margin:4}}}}]),Object(E.a)(t,[{key:"searchCallback",value:function(e){console.log("Callback"),this.props.callback(this.state.value),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.searchCallback},r.a.createElement(V.a,{className:"root",elevation:1},r.a.createElement(ee.a,{className:"iconButton","aria-label":"Menu"},r.a.createElement(ae.a,null)),r.a.createElement(Y.a,{className:"input",placeholder:"Search",value:this.state.value,onChange:this.handleChange}),r.a.createElement(ee.a,{className:"iconButton",type:"submit","aria-label":"Search"},r.a.createElement(re.a,null))))}}]),t}(r.a.Component),ie=a(84),le=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(x.a)(this,Object(O.a)(t).call(this,e))).getLocation=a.getLocation.bind(Object(S.a)(Object(S.a)(a))),a}return Object(j.a)(t,e),Object(E.a)(t,[{key:"getLocation",value:function(){var e=this;navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var a=t.coords;e.props.receivedLocation({lat:a.latitude,lng:a.longitude})})}},{key:"render",value:function(){return r.a.createElement(ie.a,{style:{background:"linear-gradient(to left,#D98248, #EBBE71)",padding:"6px 36px",borderRadius:"20px",height:"40px",textTransform:"none",color:"white"},onClick:this.getLocation},r.a.createElement(Q.a,{style:{padding:"4px"},icon:"map-marker-alt"})," Use my location")}}]),t}(r.a.Component),ce=function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(x.a)(this,Object(O.a)(t).call(this))).updateLocation=e.updateLocation.bind(Object(S.a)(Object(S.a)(e))),e.receivedLocation=e.receivedLocation.bind(Object(S.a)(Object(S.a)(e))),e.state={address:"Chicago",lat:null,lon:null},e}return Object(j.a)(t,e),Object(E.a)(t,[{key:"updateLocation",value:function(e){console.log("Update location called"),console.log(e),this.setState({lat:null,lon:null,address:e})}},{key:"receivedLocation",value:function(e){console.log("Location received"),console.log(e),this.setState({address:"",lat:e.lat,lon:e.lng})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.Query,{query:N,variables:this.state},function(t){var a=t.loading,n=t.error,o=t.data,i=void 0===o?{}:o;if(a)return r.a.createElement(L.a,null);console.log("DO SOMETHING SMART WITH THIS DATA"),console.log("data",i),console.log("error",n);var l=i.search_restaurants.results.map(function(e){return{lat:e.lat,lng:e.lon}});return i.search_restaurants&&i.search_restaurants.results&&i.search_restaurants.results.length>0?r.a.createElement(J.a,{container:!0,style:{backgroundColor:"#E9F0F9"}},r.a.createElement("div",{style:{position:"absolute",left:"45%",zIndex:1024}},r.a.createElement("div",{style:{float:"left",display:"inlineBlock"}},r.a.createElement(le,{receivedLocation:e.receivedLocation})),r.a.createElement("div",{style:{float:"left",display:"inlineBlock"}},r.a.createElement(oe,{value:e.state.address,callback:e.updateLocation}))),r.a.createElement(J.a,{item:!0,xs:4,style:{height:"100%",overflowY:"scroll"}},i.search_restaurants.results.map(function(e){return r.a.createElement(U,{key:e.id,rest:e})})),r.a.createElement(J.a,{item:!0,xs:8},r.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},r.a.createElement(q,{coordsArray:l})))):r.a.createElement("div",null,"No Results")})}}]),t}(n.Component),se=function(e){function t(){return Object(v.a)(this,t),Object(x.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.restId;return r.a.createElement(d.Query,{query:H,variables:{id:e}},function(e){var t=e.loading,a=e.error,n=e.data,o=void 0===n?{}:n;return t?r.a.createElement(L.a,null):(console.log("DO SOMETHING SMART WITH THIS DATA"),console.log("data",o),console.log("error",a),o.restaurant?r.a.createElement("div",{className:"rest-page"},JSON.stringify(o.restaurant)):r.a.createElement("div",null,"No Rest Data"))})}}]),t}(n.Component),ue=function(e){function t(){return Object(v.a)(this,t),Object(x.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id;return r.a.createElement("div",null,r.a.createElement(se,{restId:e}))}}]),t}(n.Component),de=(a(348),a(54)),pe=a(55);de.b.add(pe.b,pe.c,pe.d,pe.a);var me=function(e){function t(){return Object(v.a)(this,t),Object(x.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(k.a,null,r.a.createElement(w.a,{exact:!0,path:"/",component:ce}),r.a.createElement(w.a,{exact:!0,path:"/rest/:id",component:ue})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=a(43),ge={common:{black:"#000",white:"#FFF"},background:{paper:"#fff",default:"#fbf8f5"},primary:{light:"#462864",main:"#231632",dark:"rgba(32, 22, 44, 1)",contrastText:"#fff",bright:"#8930fd",brightHover:Object(he.emphasize)("#8930fd",.15)},secondary:{light:"#ff4081",main:"#ff146e",dark:"#c51162",contrastText:"#fff"},error:{light:"#E57373",main:"#D0021B",dark:"#D32F2F",contrastText:"#fff"},text:{primary:"#231632",secondary:"#bcbabf",disabled:"rgba(0, 0, 0, 1)",hint:"rgba(218, 212, 237, 1)"},button:{standard:"#dfdaf0"}},be=Object(u.createMuiTheme)({palette:ge,spacing:{unit:8},typography:{useNextVariants:!0},overrides:{MuiDivider:{root:{margin:"0px ".concat(16,"px")}},MuiSpeedDialAction:{button:{color:ge.primary.main,backgroundColor:ge.button.standard,"&:hover":{backgroundColor:Object(he.emphasize)(ge.button.standard,.15)}}},MuiChip:{root:{backgroundColor:ge.button.standard},colorPrimary:{backgroundColor:ge.primary.light,"&:hover":{backgroundColor:Object(he.emphasize)(ge.primary.light,.15)}}},MuiButton:{contained:{backgroundColor:ge.button.standard,color:ge.text.primary},containedPrimary:{backgroundColor:ge.primary.light,"&:hover":{backgroundColor:Object(he.emphasize)(ge.primary.light,.15)}}},MuiIconButton:{colorPrimary:{color:ge.primary.light}},MuiAvatar:{colorDefault:{backgroundColor:ge.button.standard,color:ge.primary.main}}}});a(356);c.a.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%ds",ss:"%ds",m:"%dm",mm:"%dm",h:"%dh",hh:"%dh",d:"%dd",dd:"%dd",M:"%dm",MM:"%dm",y:"%dy",yy:"%dy"}}),i.a.render(r.a.createElement(u.MuiThemeProvider,{theme:be},r.a.createElement(s.a,null,r.a.createElement(d.ApolloProvider,{client:y},r.a.createElement(me,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[229,2,1]]]);
//# sourceMappingURL=main.b959e548.chunk.js.map