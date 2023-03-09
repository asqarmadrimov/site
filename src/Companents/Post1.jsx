import React from 'react'

function Post1() {
  return (
    <div className='container'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner my-3">
          <div class="carousel-item active">
            <img src={"https://www.nutraingredients-asia.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/nutraingredients-asia.com/news/markets-and-trends/from-children-to-seniors-how-healthy-ageing-needs-offer-huge-scope-for-npd-new-paper/11983913-1-eng-GB/From-children-to-seniors-How-healthy-ageing-needs-offer-huge-scope-for-NPD-new-paper.jpg"} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
          <img src={"https://thumbs.dreamstime.com/b/three-generation-asian-family-walking-park-happy-outdoors-166580419.jpg"} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
          <img src={"https://thumbs.dreamstime.com/b/three-generation-asian-family-watching-tv-together-home-sitting-couch-happy-smiling-264001948.jpg"} class="d-block w-100" alt="" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <em className='fs-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error voluptatibus repudiandae, asperiores doloremque ut officiis nesciunt sint. Itaque rerum velit veritatis ex et corrupti fuga architecto deserunt veniam praesentium! Saepe pariatur quasi aspernatur accusamus fuga praesentium, aperiam corrupti! Praesentium, consequuntur assumeit maxime, cum nt magni ratione odit quas, autem, repudiandae commodi dicta culpa, soluta repellendus est doloribus animi reiciendis et ex vel? Aliquid doloribus autem cumque quisquam quasi tempora praesentium nisi ea, deleniti nulla harum reiciendis atque dignissimos at sapiente corporis voluptatum adipisci tenetur totam! Doloremque, non asperiores ad dolores quidem autem sed repellat beatae cumque nostrum eaque exercitationem dolor corporis fugit repue sed voluptandae odio eos animi corrupti provident accusamus, unde ea, repellat, cum quos nihil pariatur quae veniam qui consectetur laborum? Eum quos saepe impedit nisi? Quia cupiditate itaque minima facilis eum officia, earum eveniet sapiente at. Saepe itaque laboriosam atque!
      </em>

      <div className="d-flex my-4 gap-3 align-items-center justify-content-around flex-wrap">
        <iframe className='rounded-3' width="355" height="259" src="https://www.youtube.com/embed/idfLfFngRjw" title="Online Purchasing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe className='rounded-3' width="355" height="259" src="https://www.youtube.com/embed/bH_Cj7IDKd0" title="Resilience in School Environments (RISE) Initiative" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe className='rounded-3' width="355" height="259" src="https://www.youtube.com/embed/S1Yf0nPK2yg" title="Let&#39;s Celebrate! Healthy Ways for Schools to Celebrate" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Post1