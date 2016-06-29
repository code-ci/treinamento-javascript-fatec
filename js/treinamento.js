$(document).ready(function() {
  animarDivCaixa();
  animarDivBola();
  animarDiv01();
  animarDiv02();
});

function animarDivCaixa() {
  $("#divCaixa").animate({width: '100%'}, "slow");
  $("#divCaixa").animate({width: '100px'}, "slow", function() {
    animarDivCaixa();
  });
}

function animarDivBola() {
  $("#divBola").animate({width: '100%', borderRadius: '130'}, 4000);
  $("#divBola").animate({width: '200px', borderRadius: '0'}, 4000, function() {
    animarDivBola();
  });
}

function animarDiv01() {
  $("#div01").animate({left: '880px'},2000);
  $("#div01").animate({left: '0px'},2000, function() {
    animarDiv01();
  });
}

function animarDiv02() {
  $("#div02").click(function(){
    var div02 = $("#div02");
    if (div02.height() < 200 && div02.width() < 200 ) {
      div02.animate({height: '+=30px',width: '+=30px'}, 800);
    }
  });
}
