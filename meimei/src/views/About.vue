<template>
  <div class="about">
    <h1>About Us</h1>
    <p>
      Welcome to our website! We are a passionate team dedicated to providing the best service to our customers.
    </p>

    <h2>Our Mission</h2>
    <p>
      Our mission is to deliver high-quality products and exceptional customer service. We strive to innovate and improve continuously.
    </p>

    <!--<h2>Our Team</h2>
    <div class="team">
      <div class="team-member">
        <img src="@/assets/team-member-1.jpg" alt="Team Member 1">
        <h3>John Doe</h3>
        <p>CEO & Founder</p>
      </div>
      <div class="team-member">
        <img src="@/assets/team-member-2.jpg" alt="Team Member 2">
        <h3>Jane Smith</h3>
        <p>Chief Marketing Officer</p>
      </div>
      
    </div>
  -->
  </div>
</template>

<script>
export default {
  name: 'About_vue'
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2 {
  color: #333;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
}

.team {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.team-member {
  margin: 20px;
  text-align: center;
}

.team-member img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.team-member h3 {
  margin-top: 10px;
  font-size: 1.5em;
}

.team-member p {
  color: #999;
}
</style>
