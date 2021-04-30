let reviews = []

const baseurl = "http://www.i2ce.in"

productId = 1
viewerId = 1

// PRODUCTS
document.getElementById("products").addEventListener("change", async (e) => {
    productId = e.target.value
    let res = await fetch(baseurl+"/reviews/"+productId+"/"+viewerId)
    response = await res.json()

    reviewsContainer = document.getElementsByClassName("testimonial-box-container")[0]

    reviewsContainer.innerHTML = ""

    if(response)
    {
        for(const review of response.reviews){

            // prepare ratings
            let ratingTemplate = ""
            // console.log(review.ratings.overall)
            for(let i=0; i<review.ratings.Overall; i++){
                ratingTemplate = ratingTemplate + '<i class="fas fa-star"></i>'
            }

            // Create a new review node
            const revNode = document.createElement("div")
            reviewTemplate = `
            <div class="testimonial-box">
                <div class="box-top">
                    <div class="profile"> 
                        <div class="name-user">
                            <strong>${review.title}</strong>
                        </div>
                    </div>
                    <div class="reviews">
                    ${ratingTemplate}
                    </div>
                </div>
                <div class="client-comment">
                    <p>
                    ${review.comment}
                    </p>
                    <div class="usefulness">
                        <strong>usefulness: ${review.usefulness}</strong>
                    </div>
                </div>
            </div>
            `
            reviewsContainer.innerHTML = reviewsContainer.innerHTML + reviewTemplate
        }
        
        revNode.innerHTML = reviewTemplate
    }
    console.log(response)
})


// VIEWERS
document.getElementById("viewers").addEventListener("change", async (e) => {
    viewerId = e.target.value
    let res = await fetch(baseurl+"/reviews/"+productId+"/"+viewerId)
    response = await res.json()

    console.log(response)

    reviewsContainer = document.getElementsByClassName("testimonial-box-container")[0]

    reviewsContainer.innerHTML = ""

    if(response)
    {
        for(const review of response.reviews){
            // Create a new review node
            const revNode = document.createElement("div")
            reviewTemplate = `
            <div class="testimonial-box">
            <div class="box-top">
                <div class="profile"> 
                    <div class="name-user">
                        <strong>${review.title}</strong>
                    </div>
                </div>
                <div class="reviews">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
            <div class="client-comment">
                <p>
                ${review.comment}
                </p>
                <div class="usefulness">
                    <strong>usefulness: ${review.usefulness}</strong>
                </div>
            </div>
        </div>
            `
            reviewsContainer.innerHTML = reviewsContainer.innerHTML + reviewTemplate
        }
        
        revNode.innerHTML = reviewTemplate
    }
    console.log(response)
})
