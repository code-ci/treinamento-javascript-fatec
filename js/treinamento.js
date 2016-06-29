$(document).ready(function() {
  animarDivCaixa();
  animarDivBola();
  animarDiv01();
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
