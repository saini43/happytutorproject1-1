

 //Custom Header
 class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="header_wrapper">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="images/logoTop.png" class="img-fluid" alt="logo" />
    
            </a>
    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <!--<span class="navbar-toggler-icon"></span>-->
              <i class="fas fa-stream navbar-toggler-icon"></i>
    
            </button>
    
    
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav menu-navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="courses.html">Courses</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
               
                <li class="nav-item">
                  <a class="nav-link" href="chat.html">Chat Us</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="courses.html"><i class="fa-solid fa-cart-shopping"></i></a>
              </li>
    
              </ul>
              <form class="d-flex">
                <input class="form-control none me-2" type="search " placeholder="Search by course name" aria-label="Search">
                <button class="btn btn-outline-success none-one" type="submit">Search</button>
              </form>
              <a href="login.html"><button type="button" class="btn btn-success none-two m-3 btn">Signup & Login</button></a>
              
            </div>
          </div>
        </nav>
      </header>
        `
    }
}

customElements.define('my-header' , MyHeader)



//Footer
class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
    <div class="container dipsy">
      <div class="row p-5">
        <div class="col-lg-3 col-md-3 col-sm-2 col-12">
          <a href="#">
            <img class="img-fluid mb-1" src="images/logoTop.png" alt=".."></a>
          <strong class="mt-">Mail:youremail@gmail.com</strong>
          <div class="row">
            <div class="col-lg-6 col-6 mb-3 ">
              <img class="img-fluid" src="images/footer1.png" alt="..">
            </div>
            <div class="col-lg-6 col-6 mb-3">
              <img class="img-fluid" src="images/footer2.png" alt="">
            </div>

          </div>


        </div>
        <div class="col-lg-3 col-md-3 col-sm-2 col-6 footer_contact">
         <div class="row">
          <div class="col-lg-12 col-sm-12">
            <a href="#">Contact Us</a>
          </div>
          <div class="col-lg-12 col-sm-12">
            <a href="#">About Us</a>
          </div>
          <div class="col-lg-12 col-sm-12">
            <a href="#">Services</a>
          </div>
          <div class="col-lg-12 col-sm-12">
            <a href="#">Sign up</a>
          </div>
          <div class="col-lg-12 col-sm-12">
            <a href="#">Login</a>
          </div>
         </div>
        </div>
        <div class="col-lg-3 col-sm-2 col-6 footer_contact1">
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <a href="#">Help Centre</a>
            </div>
            <div class="col-lg-12 col-sm-12">
              <a href="#">Gallery</a>
            </div>
            <div class="col-lg-12 col-sm-12">
              <a href="#">Document</a>
            </div>
            <div class="col-lg-12 col-sm-12">
              <a href="#">Achievement</a>
            </div>
            <div class="col-lg-12 col-sm-12">
              <a href="#">Exam Calendra</a>
            </div>
           </div>
          
        </div>
        <div class="col-lg-3 col-sm-2" col-12>
          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              data-bs-toggle="dropdown" aria-expanded="false">
              English
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Hindi</a></li>
              <li><a class="dropdown-item" href="#">Marathi</a></li>
              <li><a class="dropdown-item" href="#">Telgu</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2023 Gibbon by Happy Tutors Club</p>

    </div>
  </footer>



        `
    }
}

customElements.define('my-footer' , MyFooter)


//Header scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }

    }


    //Nav hide
let navBar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navcollapse.classList.remove("show");
    })
})

 