<template>
    <footer class="site-footer">
      <div class="container">
        <div class="row">

          <div class="col-xs-6 col-md-3">
           <img src="@/assets/jalalogo.png" alt="Jala-Foundation" width="300" height="107">
          </div>
            <div class="col-xs-6 col-md-3">
            <h6>Developers</h6>
            <ul class="footer-links">
              <li><a href="#">Ramiro Linares</a></li>
              <li><a href="#">Francisco Segura</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Contacts</h6>
            <ul class="footer-links">
              <li><a href="#">ramiro.linares@jala-foundation.org</a></li>
              <li><a href="#">francisco.segura@jala-foundation.org</a></li>
            </ul>
          </div> 
          <div class="col-xs-6 col-md-3">
            <img src="@/assets/GitHub-Logo.png" alt="GitHub" width="190" height="107">
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">{{ footerText}}</p>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
    export default{
        data(){
            return{
                footerText:'Copyright © 2021'
            }
        }
    }
</script>

<style scoped>
.site-footer
{
  background-color:#fff;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#009AD3;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}




</style>