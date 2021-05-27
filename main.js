const dropdown = document.querySelector('.dropdown')
const toggleButton = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')

//토글 버튼 클릭> 메뉴 보여줌
//메뉴 max-height: 0
//메뉴.show -> 해지
toggleButton.addEventListener('click', function() {
    menu.classList.toggle('show')
    
})







