let newArrivalsContainer = document.querySelector(".NewArrivalsContaienr");
let newArrivalsData = JSON.parse(localStorage.getItem("newArrivals"));

// let TrendingNowContainer = document.querySelector(".TrendingNowContainer");
// let TrendingNowData = JSON.parse(localStorage.getItem("TrendingNow"));


// let FeaturedNow = document.querySelector(".FeaturedNowContainer");
// let FeaturedBoxData = JSON.parse(localStorage.getItem("FeaturedBox"));


function appendData(arr, container) {
  arr.map((item) => {
    console.log(item);

    if (item.feat) {
      let box = document.createElement("div");
      box.className = "box";

      let imgdiv = document.createElement("div");
      imgdiv.className = "imgdiv";

      let img = document.createElement("img");
      img.className = "img";
      img.src = item.img;
      img.addEventListener("mouseenter", () => {
        item.color.map((item) => {
          img.src = item.img;
        });
      });
      img.addEventListener("mouseleave", () => {
        img.src = item.img;
      });

      let quickaddBtn = document.createElement("button");
      quickaddBtn.className = "quickBtn";
      quickaddBtn.innerText = "QUICLK ADD";

      let heart = document.createElement("span");
      heart.className = "heart";
      heart.innerHTML = '<i class="fa-solid fa-heart"></i>';

      let view = document.createElement("span");
      view.className = "view";
      view.innerHTML = '<i class="fa-regular fa-eye"></i>';

      imgdiv.append(img, quickaddBtn, heart, view);

      let detailsdiv = document.createElement("div");
      detailsdiv.className = "detailsdiv";

      let vendordiv = document.createElement("div");
      vendordiv.className = "vendordiv";

      let vendor = document.createElement("span");
      vendor.className = "vendor";
      vendor.innerText = item.vendor;

      vendordiv.append(vendor);

      let descDiv = document.createElement("div");
      descDiv.className = "descdiv";

      let description = document.createElement("span");
      description.className = "description";
      description.innerText = item.title;

      descDiv.append(description);

      let priceDiv = document.createElement("div");
      priceDiv.className = "priceDiv";

      let from = document.createElement("span");
      from.className = "from";
      from.innerText = "From";

      let price = document.createElement("span");
      price.className = "price";
      price.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${item.price}`;

      priceDiv.append(from, price);

      let circleImg = document.createElement("div");
      circleImg.className = "circleImg";

      if (item.color) {
        item.color.map((item2) => {
          let cimg = document.createElement("div");
          cimg.className = "cimg";

          let hoverImg = document.createElement("img");
          hoverImg.className = "hoverImg";
          hoverImg.src = item2.img;
          hoverImg.addEventListener("mouseenter", () => {
            img.src = item2.img;
          });
          hoverImg.addEventListener("mouseleave", () => {
            img.src = item.img;
          });

          cimg.append(hoverImg);
          circleImg.append(cimg);
        });
      }

      detailsdiv.append(vendordiv, descDiv, priceDiv, circleImg);

      box.append(imgdiv, detailsdiv);

      container.append(box);
    } 
  });
}

appendData(newArrivalsData, newArrivalsContainer);
// appendData(newArrivalsData, newArrivalsContainer);
// appendData(FeaturedBoxData, FeaturedNow);
