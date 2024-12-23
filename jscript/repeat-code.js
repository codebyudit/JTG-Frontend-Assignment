var userDetail = [
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_UxRhrU8fPHQ.png",description:"Home made pizza",price:"₹123",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_CbNAuxSZTFo.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_Y6OgisiGBjM.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_nP11TkjxJ7s.png",description:"Home made pizza",price:"$19",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_60nzTP7_hMQ.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_sejqj6Eaqe8.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_33GPuoFI7v8.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"$19",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_UxRhrU8fPHQ.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_CbNAuxSZTFo.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_Y6OgisiGBjM.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"4.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
  ]

document.getElementById('hero-kitchen-section').innerHTML = userDetail.map(user =>
    `<div class="block">
      <div class="details">
        <div>
          <img
            src="${user.img}"
            alt="pizza"
            class="img4"
          />
        </div>
        <div class="row">
          <p>${user.description}</p>
          <p>${user.price}</p>
        </div>
        <div class="row">
          <div class="rate">
            <div class="rating">
              <img src=${user.rateIcon} alt="star" />
              <p>${user.rating}</p>
            </div>
            <div class="time">
              <p>${user.time}</p>
            </div>
          </div>
          <div class="plus">
            <img src=${user.cartIcon} />
          </div>
        </div>
      </div>
    </div>`
).join('')