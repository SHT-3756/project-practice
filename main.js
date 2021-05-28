const dropdown = document.querySelector('.dropdown')
const toggleButton = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')
const nextButton = document.querySelector('.next-button')
//토글 버튼 클릭 > 메뉴 보여줌
//메뉴 max-height: 0
//메뉴.show -> 해지
toggleButton.addEventListener('click', function() {
    menu.classList.toggle('show')
})
// 메뉴.show 삭제 > 드랍다운 닫기
toggleButton.addEventListener('blur', function () {
    menu.classList.remove('show')
  })
// forEach: 함수호출하면 배열만큼 요소 반복
// 클릭> selectOption 펑션 실행
options.forEach(function (item) {
item.addEventListener('click', selectOption)
})
// 공백제거, value = 텍스트 내용
// 클래스에 selected 추가
// 다음 버튼 disabled 속성 제거
// removeAttribute: 요소에 지정된 속성 제거
function selectOption() {
const value = this.textContent.trim()
toggleButton.textContent = value
toggleButton.classList.add('selected')
nextButton.removeAttribute('disabled')
}
  







