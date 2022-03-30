import slider0 from "../media/image/slider0.webp";
import slider1 from "../media/image/slider1.webp";
import slider2 from "../media/image/slider2.webp";

export default () => {

  var data = [
    {
      description: "Hi Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. £425,000",
      image: slider0,
      price: "£425,000",
      link: "http://babacanoglu.presentation.test-aws.lifesycle.co.uk/"
    },
    {
      description: "Iceberg Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. £425,000",
      image: slider1,
      price: "£625,000",
      link: "http://babacanoglu.presentation.test-aws.lifesycle.co.uk/"
    },
    {
      description: "Lifesycle Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. £425,000",
      image: slider2,
      price: "£925,000",
      link: "http://babacanoglu.presentation.test-aws.lifesycle.co.uk/"
    },
  ]

  var index = 0
  var slaytCount = data.length

  function showSlide(i) {
    index = i

    if (i < 0) {
      index = slaytCount - 1
    }
    if (i >= slaytCount) {
      index = 0
    }

    document.querySelector("#slider-body").innerHTML = data[index].description
    document.querySelector("#slider-price").textContent = data[index].price
    document.querySelector("#slider-img").setAttribute("src", data[index].image)
  }

  document.querySelector(".left-slider").addEventListener("click", () => {
    index--
    showSlide(index)
  });

  document.querySelector(".right-slider").addEventListener("click", () => {
    index++
    showSlide(index)
  });

}