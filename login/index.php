<?php
session_start();
  include("connection.php");
  include("functions.php");

  $user_data = check_login($con);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet"  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
<!--     <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap" rel="stylesheet"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <header>
        <div class="backgraund-div-header"></div>

        <a href="#" class="logo"><img src="img/newQrLogo.png" alt=""></a>

        <ul class="navbar">
            <li><a href="#">MAN</a></li>
            <li><a href="#">WOMEN</a></li>
            <li><a href="#">COLLECTIONS</a></li>
            <li><a href="#">EXPLORE</a></li>
        </ul>

        <div class="main">
            <a href="#" class="user"><i class="ri-user-line"></i></a>
            <a href="#" class="basket"><i class="ri-shopping-cart-line"></i></a>
            <div class="bx bx-menu" id="menu-icon"></div>
        </div>
    </header>

    <div class="material-posle-header">
        <img id="backgraund-foto" src="img/bacgraund_foto.png" alt="foto">
        <div class="text-re-ingeneered">RE-ENGINEERED</div>
        <div class="text-new-wood-frames">New Wood Frames</div>
       
        <div class="wrap">
            <div class="mens-button">
                <button class="button">Men's</button>
            </div>
            <div class="womens-button">
                <button class="button">Women's</button>
            </div>
        </div>
    </div>

    <div class="wrapper">
        <div class="slider">
            <div class="slider__item filter">
                <img class="foto-1" id="foto-slider" src="img/bari-jaqsy-bolady-foto_1.png">
                <div id="slider-sozderi">Bürjeide</div>
                <div id="slider-sozderi">küzgı garderobtyñ bır bölıgı. bız minimalistık <br>
                                         stildı tañdap, qr-men bırge bolyñdar</div>
            </div>
            <div class="slider__item">
                <img id="foto-slider" src="img/good_days-1.png" alt="">
                <div id="slider-sozderi">Futbolka Good Days</div>
                <div id="slider-sozderi">SF21 / DROP1 üşınşı toptamasy storlarda <br>
                                         satylymda jäne onlain tapsyrys berseñ bolady
                    </div>
            </div>
            <div class="slider__item filter">
                <img id="foto-slider" src="img/sen-1.png" alt="">
                <div id="slider-sozderi">KEÑJEİDE</div>
                <div id="slider-sozderi">senı küzdıñ suyq künderı jylytatyn keñjeide. <br>
                                         jaña toptama satylymda</div>
            </div>
            <div class="slider__item">
                <img id="foto-slider" src="img/switshot-foto_1.png" alt="">
                <div id="slider-sozderi">ŪZYNJEÑDI POLO</div>
                <div id="slider-sozderi">laifhak: ūzynjeñdı alasyñ, syrtynan futbolka <br>
                                         kiesıñ, söitıp jyly jüresıñ
                </div>
            </div>
            <div class="slider__item">
                <img id="foto-slider" src="img/tazy-foto_1.png" alt="">
                <div id="slider-sozderi">KEÑJEİDE</div>
                <div id="slider-sozderi">senı küzdıñ suyq künderı jylytatyn keñjeide. <br>
                                         jaña toptama satylymda</div>
            </div>
        </div>
    </div>

    <div class="div-posle-slidera">
        <div class="sen-futbolka-divkasi">
            <img src="img/sen-futbolka-kigen-kiz.png" alt="" style="width: 100%;">
        </div>
        <div class="soz-qazaq-repablic">QAZAQ REPABLIC</div>
        <div class="wrap">
            <a href="#"><button class="button">Shop now</button></a>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our service</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shippting</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- Slider -->
    <script src="slick.min.js"></script>
    <!-- index -->
    <script src="index.js"></script>
</body>
</html>