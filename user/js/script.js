var btnOpen =document.querySelector('.complete-order')
var popup = document.querySelector('.popup')
var iconClose = document.querySelector('.close-popup')

 

function togglePopup(e){
    console.log(e.target);
    popup.classList.toggle('hide');
}

btnOpen.addEventListener('click',togglePopup)
iconClose.addEventListener('click', togglePopup)
popup.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        togglePopup();
    }
})


// Hiển thị popup khi nhấn nút "Hoàn tất đơn hàng

document.querySelector(".complete-order").addEventListener("click", function () {
    // Kiểm tra nếu một radio button được chọn
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (selectedPayment) {
        document.getElementById("order-popup").classList.remove("hidden");
    } else {
        alert("Vui lòng chọn phương thức thanh toán!");
    }
});


// Các nút trong popup
document.querySelector(".view-order").addEventListener("click", function () {
    alert("Chức năng xem chi tiết đơn hàng đang được phát triển!");
});

document.querySelector(".continue-shopping").addEventListener("click", function () {
    document.getElementById("order-popup").classList.add("hidden");
    alert("Tiếp tục mua sắm!");
});
