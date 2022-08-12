const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
const carros = ['Porsche 718', 'Porsche 911', 'Porsche Taycan','Porsche Macan','Porshe Panamera','Audi e-tron','Audi A3','Audi A5','Audi Q7','Audi Q8']

menuBtn.addEventListener('click', () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
})
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}


$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/




if (carros.includes) {

  let count = 1;
  carros.forEach(carro => {
    const li = document.createElement("li")
    li.setAttribute("id", count)
    li.textContent = carro

    li.addEventListener('click' ,() => {
      const msg = document.querySelector(".msg");
      const link = document.querySelector(".msg a")
      msg.classList.remove("d-none")
      link.textContent = li.textContent
      const input = document.querySelector(".select");
      input.textContent = li.textContent
    })

    document.querySelector(".dropdown-menu").appendChild(li)
    count++;

  })
  
}


