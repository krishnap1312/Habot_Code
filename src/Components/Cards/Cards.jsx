import React from "react";
import "./Cards.css"

function Cards() {
  return (
    <div>
      <div className="CardText">
        <h1>How it works?</h1>
        <h4>
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </h4>
      </div> 
      <div class="card-container">
        <div class="card">
          <i class="iconsCard bi bi-person-fill-add"></i>
          <dt>Select Your Role and Sign Up</dt>
        </div>
        <div class="card">
          <i class="iconsCard bi bi-file-earmark-check"></i>
          <dt>Buyers Post Your Requirements</dt>
        </div>
        <div class="card">
          <i class="iconsCard bi bi-person-fill-add"></i>
          <dt>Review, Select, and Contact the Best Suppliers</dt>
        </div>
        <div class="card">
          <i class="iconsCard bi bi-person-fill"></i>
          <dt>
            Suppliers Complete your profile and get notified for opportunities
          </dt>
        </div>
        <div class="card">
          <i class="iconsCard bi bi-file-earmark-ruled"></i>
          <dt>Contact Buyers and Share your Quote for the service</dt>
        </div>
        <div class="card">
        <i class="iconsCard bi bi-hand-thumbs-up-fill"></i>
          <dt>Both Parties can Connect and Make Business Leave a Feedback</dt>
        </div>
      </div>
    </div>
  );
}

export default Cards;
