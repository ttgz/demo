const element_category = document.querySelector('#show__category');
const element_categorys = document.querySelectorAll('.popup__category__ml__tl')
element_category.onclick = function(){
    element_categorys.forEach(function(element) {
        if (element.style.display === 'block') {
            element.style.display = 'none';  
        } else {
            element.style.display = 'block'; 
        }
     });
}

const backToTopButton = document.querySelector("#scroll");

// Khi người dùng cuộn xuống dưới, hiển thị nút
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};


// Khi người dùng click vào nút, cuộn trang về đầu
backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});