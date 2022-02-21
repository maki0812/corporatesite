//ハンバーガーメニュー
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("drawer-nav");
  nav.classList.toggle('in');
});

//問い合わせフォーム
const contact = document.getElementByName("form1")[1], {
  function check(){
    if (name_form.name.value == "") {
      alert("このフィールドに入力してください。");
      return false;
    } else {
      return true;
    }
  }