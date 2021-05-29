import './TestimonialCard.css'

const TestimonialCard = () => {
    return (
        <div>
            <div class="container-fluid px-2 px-md-4 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10 col-lg-9 col-xl-8">
                        <div class="card card-main border-0 text-center">
                            <h5 class="font-weight-bold mb-4">What our clients are saying<br />about us.</h5>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="card border-0 card-0">
                                        <div class="card profile py-3 px-4">
                                            <div class="text-center"> <img src="https://i.imgur.com/oW8Wpwi.jpg" class="img-fluid profile-pic" /> </div>
                                            <h6 class="mb-0 mt-2">Ximena Vegara</h6> <small>UI/UX Designer</small>
                                        </div> <img class="img-fluid open-quotes" src="https://i.imgur.com/Hp91vdT.png" width="20" height="20" />
                                        <p class="content mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p> <img class="img-fluid close-quotes ml-auto" src="https://i.imgur.com/iPcHyJK.png" width="20" height="20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;