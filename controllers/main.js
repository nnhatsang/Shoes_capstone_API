let promise = axios({
  url: "https://shop.cyberlearn.vn/api/Product",
  method: "GET",
});
promise
  .then((res) => {
    // console.log(res.data.content);
    let arrShoe = res.data.content;

    let stt = 1,
      all = "",
      men = "",
      women = "",
      adidas = "",
      nike = "",
      converse = "";

    all = renderListShoe(arrShoe, stt, all);
    console.log("demoooooo", all);
    let demo = renderTab([all, men, women, adidas, nike, converse]);
    console.log("dỳiosdiofgsoidgfisdgfigsd", demo);
  })
  .catch((error) => {
    console.log(error);
  });

// function likeShoes(shoe) {
//   shoe.classList.toggle("active");
// }

// // todo: hide/show back-to-top button
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 500) {
//     document.getElementById("top").classList.remove("invisible");
//   } else {
//     document.getElementById("top").classList.add("invisible");
//   }
// });
