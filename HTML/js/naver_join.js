const join_id = document.querySelector('#id');
const join_submit = document.querySelector('.join_subnit');

join_id.onblur = () => {
    alret(join_id.value + '는 사용 가능한 아이디 입니다.' )
}

join_submit.onclick = () =>{
    alert(join_id.value + '계정을 생성하였습니다.')
    print();
}

const long_text = document.getElementsByClassName('long_text');
//해당하는 모든 객체를 가져온다.
console.log(long_text[0].value);
console.log(long_text[1].value);
console.log(long_text[2].value);
console.log(long_text[3].value);
long_text[4].style.display = 'none';

const id_text = document.getElementById('id');
id_text.style.display = ' block'
id_text.value = 'cjddn2519';

const inputs = document.getElementById('input');
console.log(inputs);

const long_text2 = document.querySelectorAll('.long_text')
// const long_text = document.getElementsByClassName('long_text'); 위와 동일 클래스는 . 사용
const id_text2 = document.querySelector('#id')
// const id_text = document.getElementById('id'); 아이디는 #사용 
const inputs2 = document.querySelectorAll('input')
// const inputs = document.getElementById('input'); All은 모두 가져온다는뜻

console.log(long_text2);
console.log(id_text2);
console.log(inputs2);
