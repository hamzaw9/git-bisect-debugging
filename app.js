const displayContent = document.getElementById("display-content");

const addToDisplayContainer = () => {
  displayContent.innerHTML = `<div class="display-content-inner">
  <h1>Quotes of the Day!</h1>
  <p>
    “Power is only given to those who are prepared to lower themselves to pick
    it up.” ― Ragnar Lothbrok
  </p>
  <p>
    “Never get discouraged if you fail. Learn from it. Keep trying.” ― Thomas Edison
  </p>
</div>`;
};

addToDisplayContainer();
