(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),i=a.n(s),d=a(3),c=a(4),o=a(6),l=a(5),u=a(7),m=(a(14),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).handleSubmit=function(e){window.location.reload()},e.state={turn:"X",winner:void 0,winnerLine:void 0,gameEnded:!1,board:Array(9).fill(""),totalMoves:0},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"clicked",value:function(e){if(""===this.state.board[e.target.dataset.square]){this.state.board[e.target.dataset.square]=this.state.turn,e.target.innerText=this.state.turn;var t=this.state.totalMoves;this.setState({turn:"X"===this.state.turn?"O":"X",board:this.state.board,totalMoves:t+1})}var a=this.check();"X"===a?this.setState({gameEnded:!0,winner:"X",winnerLine:"X won the match!!!"}):"O"===a?this.setState({gameEnded:!0,winner:"O",winnerLine:"O won the match!!!"}):"draw"===a&&this.setState({gameEnded:!0,winner:"draw",winnerLine:"Match is drawn!!!"}),console.log(this.state.totalMoves)}},{key:"check",value:function(){for(var e=[[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]],t=this.state.board,a=0;a<e.length;a++)if(t[e[a][0]]===t[e[a][1]]&&t[e[a][1]]===t[e[a][2]])return t[e[a][0]];if(8===this.state.totalMoves)return"draw"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"game"},r.a.createElement("div",{id:"head"},"Tic Tac Toe"),r.a.createElement("div",{id:"con"},"Powered By Pramuditha"),r.a.createElement("div",{id:"board",onClick:function(t){return e.clicked(t)}},r.a.createElement("div",{className:"square","data-square":"0"}),r.a.createElement("div",{className:"square","data-square":"1"}),r.a.createElement("div",{className:"square","data-square":"2"}),r.a.createElement("div",{className:"square","data-square":"3"}),r.a.createElement("div",{className:"square","data-square":"4"}),r.a.createElement("div",{className:"square","data-square":"5"}),r.a.createElement("div",{className:"square","data-square":"6"}),r.a.createElement("div",{className:"square","data-square":"7"}),r.a.createElement("div",{className:"square","data-square":"8"})),r.a.createElement("div",{id:"status"},this.state.winnerLine),r.a.createElement("div",null,r.a.createElement("button",{id:"new",onClick:this.handleSubmit},"New Game")))}}]),t}(n.Component));i.a.render(r.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.b457bb95.chunk.js.map