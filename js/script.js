document.addEventListener("DOMContentLoaded", () => {
  let documentheight = document.documentElement.clientHeight
  document.getElementById("form-feedback").style.height = documentheight + "px"
})
window.addEventListener(`resize`, (event) => {
  let documentheight = document.documentElement.clientHeight
  document.getElementById("form-feedback").style.height = documentheight + "px"
})

/*    $('#form-feedback__submit').click(function(){
		 event.preventDefault();
          $('#feedback_result').css('display', 'block');
});
 
*/

$(document).ready(function () {
  $("#form-feedback__submit").click(function () {
    event.preventDefault()
    var feedback_fio = $("#fio")
      .val()
      .match(/^[А-Яа-я. ]+$/g)
    var telnumber = $("#tel")
      .val()
      .match(/^[0-9()-]+$/g)
    var adress = $("#adress")
      .val()
      .match(/^[0-9()А-Яа-я-. ]+$/g)
    var feedback_mail = $("#mail")
      .val()
      .match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)

    if (feedback_fio == null) {
      $("#fio").css("border-color", "#ff0000")
      $("#text-fio").css("display", "block")
    } else {
      $("#fio").css("border-color", "#DEDED2")
      $("#text-fio").css("display", "none")
    }

    if (telnumber == null) {
      $("#tel").css("border-color", "#ff0000")
      $("#text-telephone").css("display", "block")
    } else {
      $("#tel").css("border-color", "#DEDED2")
      $("#text-telephone").css("display", "none")
    }

    if (adress == null) {
      $("#adress").css("border-color", "#ff0000")
      $("#text-address").css("display", "block")
    } else {
      $("#adress").css("border-color", "#DEDED2")
      $("#text-address").css("display", "none")
    }

    if (feedback_mail == null) {
      $("#mail").css("border-color", "#ff0000")
      $("#text-mail").css("display", "block")
    } else {
      $("#mail").css("border-color", "#DEDED2")
      $("#text-mail").css("display", "none")
    }

    if (
      feedback_fio == null ||
      telnumber == null ||
      adress == null ||
      feedback_mail != null
    ) {
      $(".form-feedback__information").css("opacity", "1")
    }
    if (
      feedback_fio != null &&
      telnumber != null &&
      adress != null &&
      feedback_mail != null
    ) {
      $(".form-feedback__information").css("opacity", "0")

      $.ajax({
        url: "/feedback.php",
        method: "post",
        dataType: "html",
        data: $("#form-feedback").serialize(),
        success: function (data) {
          $("#feedback-result").html(data)
        },
      })
    }
  })
})

$("#fio").click(function () {
  event.preventDefault()
  if ($("#fio").css("border-color") != "rgb(255, 0, 0)") {
    $("#fio").css("border-color", "#DEDED2 #DEDED2 #be1116 #DEDED2")
  }

  if ($("#adress").css("border-color") != "rgb(255, 0, 0)") {
    $("#adress").css("border-color", "#DEDED2")
  }
  if ($("#tel").css("border-color") != "rgb(255, 0, 0)") {
    $("#tel").css("border-color", "#DEDED2")
  }
  if ($("#mail").css("border-color") != "rgb(255, 0, 0)") {
    $("#mail").css("border-color", "#DEDED2")
  }
})

$("#adress").click(function () {
  event.preventDefault()
  if ($("#adress").css("border-color") != "rgb(255, 0, 0)") {
    $("#adress").css("border-color", "#DEDED2 #DEDED2 #be1116 #DEDED2")
  }

  if ($("#fio").css("border-color") != "rgb(255, 0, 0)") {
    $("#fio").css("border-color", "#DEDED2")
  }
  if ($("#tel").css("border-color") != "rgb(255, 0, 0)") {
    $("#tel").css("border-color", "#DEDED2")
  }
  if ($("#mail").css("border-color") != "rgb(255, 0, 0)") {
    $("#mail").css("border-color", "#DEDED2")
  }
})

$("#tel").click(function () {
  event.preventDefault()
  if ($("#tel").css("border-color") != "rgb(255, 0, 0)") {
    $("#tel").css("border-color", "#DEDED2 #DEDED2 #be1116 #DEDED2")
  }

  if ($("#fio").css("border-color") != "rgb(255, 0, 0)") {
    $("#fio").css("border-color", "#DEDED2")
  }
  if ($("#adress").css("border-color") != "rgb(255, 0, 0)") {
    $("#adress").css("border-color", "#DEDED2")
  }
  if ($("#mail").css("border-color") != "rgb(255, 0, 0)") {
    $("#mail").css("border-color", "#DEDED2")
  }
})

$("#mail").click(function () {
  event.preventDefault()
  if ($("#mail").css("border-color") != "rgb(255, 0, 0)") {
    $("#mail").css("border-color", "#DEDED2 #DEDED2 #be1116 #DEDED2")
  }

  if ($("#fio").css("border-color") != "rgb(255, 0, 0)") {
    $("#fio").css("border-color", "#DEDED2")
  }
  if ($("#adress").css("border-color") != "rgb(255, 0, 0)") {
    $("#adress").css("border-color", "#DEDED2")
  }
  if ($("#tel").css("border-color") != "rgb(255, 0, 0)") {
    $("#tel").css("border-color", "#DEDED2")
  }
})
$("#fio").keyup(function () {
  var feedback_fio = $("#fio")
    .val()
    .match(/^[А-Яа-я. ]+$/g)
  if (feedback_fio == null) {
    $("#fio").css("border-color", "#ff0000")
    $("#text-fio").css("display", "block")
    $(".form-feedback__information").css("opacity", "1")
  } else {
    $("#fio").css("border-color", "#DEDED2")
    $(".form-feedback__information").css("opacity", "0")
  }
})
$("#adress").keyup(function () {
  var adress = $("#adress")
    .val()
    .match(/^[0-9()А-Яа-я-. ]+$/g)
  if (adress == null) {
    $("#adress").css("border-color", "#ff0000")
    $("#text-address").css("display", "block")
    $(".form-feedback__information").css("opacity", "1")
  } else {
    $("#adress").css("border-color", "#DEDED2")
    $(".form-feedback__information").css("opacity", "0")
  }
})
$("#tel").keyup(function () {
  var telnumber = $("#tel")
    .val()
    .match(/^[0-9()-]+$/g)
  if (telnumber == null) {
    $("#tel").css("border-color", "#ff0000")
    $("#text-tel").css("display", "block")
    $(".form-feedback__information").css("opacity", "1")
  } else {
    $("#tel").css("border-color", "#DEDED2")
    $(".form-feedback__information").css("opacity", "0")
  }
})
$("#mail").keyup(function () {
  var feedback_mail = $("#mail")
    .val()
    .match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)
  if (feedback_mail == null) {
    $("#mail").css("border-color", "#ff0000")
    $("#text-mail").css("display", "block")
    $(".form-feedback__information").css("opacity", "1")
  } else {
    $("#mail").css("border-color", "#DEDED2")
    $(".form-feedback__information").css("opacity", "0")
  }
})
