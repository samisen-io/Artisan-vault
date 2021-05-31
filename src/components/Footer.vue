<template>
  <div>
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="col item social">
                <h3>Follow us on</h3>
                <a href="https://www.youtube.com" target="_blank"
                  ><i class="icon ion-social-facebook"></i></a
                ><a href="#"><i class="icon ion-social-twitter"></i></a
                ><a href="#"><i class="icon ion-social-linkedin"></i></a
                ><a href="#"><i class="icon ion-social-instagram"></i></a>
              </div>
            </div>
            <div class="col-sm">
              <h3>Company</h3>
              <ul>
                <li><a href="/About">About us</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div class="col-sm">
              <center>
              <h3>Company Name</h3>
              <b>
               SAMISEN DISTRIBUTED TECHNOLOGIES
              </b> 
              </center>
            </div>
          </div>
          <p class="copyright">Samisen © 2021</p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.footer-dark {
  padding: 50px 0;
  color: #f0f9ff;
  background-color: #282d32;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
