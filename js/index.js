const calcule = document.getElementById('calcule');

calcule.addEventListener('click', figh);

function figh () {
  const fighter1 = document.getElementById('fighter1').value;
  const attack = document.getElementById('attack').value;
  const fighter2 = document.getElementById('fighter2').value;
  const defense = document.getElementById('defense').value;
  const life = document.getElementById('life').value;
  const sim = document.querySelector('input[name="sim"]:checked');
  const nao = document.querySelector('input[name="nao"]:checked');
  
  const result = document.getElementById('Result');

  if(fighter1 !=='' && attack !=='' && fighter2 !== '' && defense !=='' && life !== '' && sim !== ''&& nao !== '') {
  
    let classificacao = 0; 
    classificacao = 'FRACO! KKKKK 0';

    if(attack > defense && nao){
      classificacao = life - (attack - defense);
    }else if(attack > defense && sim){
      classificacao = life - (attack - defense) / 2 ;
    }
    
    result.textContent = `${fighter1} seu ataque foi ${classificacao} de dano no ${fighter2}`
    
  }else{
     result.textContent ='TÁ COM MEDO?! KKKKK'
  }

}