import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div class="contact_grid">
          <div class="contact_wrapper">
            <h3>Where To find Us</h3>
            <p>
              <li> Byumba, Gicumbi</li>
              <li> Near Umucyo hotel</li>
              <li> Gicumbi city</li>
              <li> Republic Of Rwanda</li>
            </p>
          </div>

          <div class="contact_wrapper">
            <h3>Contact Info</h3>
            <p>
              <li>+250783776078</li>
              <li>sandrabakundese250@gmail.com</li>
              <br />
              <p>&copy; 2023 Sandra<span class="logo">-Her</span> Majesty. All rights reserved.</p>
            </p>
          </div>
          <div class="contact_wrapper">
            <h3>FAQ Inquries</h3>
            <p>
              <li>How often is new content posted on your blog? </li>
              <li>Can I contribute to your blog as a guest writer?</li>
            </p>
          </div>
        </div>
    </section>
  );
}

export default Footer;
