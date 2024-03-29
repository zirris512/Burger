$(document).ready(function () {
    $(".devour-button").on("submit", function (event) {
        event.preventDefault();

        const burgerID = $(this).children(".burger").val();

        $.ajax({
            method: "PUT",
            url: `/api/burgers/${burgerID}`,
        }).then(function (data) {
            location.reload();
        });
    });
});
