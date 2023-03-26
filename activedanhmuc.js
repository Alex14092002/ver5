$(".item-danhmuc").click(function () {
    $(".item-danhmuc").removeClass("first-list"); // This will remove first-list classes from all <li> tags
    $(this).addClass("first-list"); // This will add first-list class in clicked <li>
  });



