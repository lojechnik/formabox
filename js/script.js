$('[name="name"]').on("input change", function () {
  var val = $(this).val();
  $(this).val(val.replace(/[0-9+]/g, ""));
});
$('[name="phone"]').on("input change", function (e) {
  var val = $(this).val();
  $(this).val(val.replace(/[A-zА-яіїЁё ]/g, ""));
  $(e.currentTarget).attr("pattern", "[0-9+]{6,}");
});
