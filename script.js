const roastBank = {
  mild: [
    "You're like a software update—always popping up when nobody wants you.",
    "You're the human version of a 404 error.",
    "You're not stupid; you just have bad luck thinking."
  ],
  spicy: [
    "You're like JavaScript on IE—unpredictable and barely functional.",
    "If your brain was dynamite, there wouldn't be enough to blow your hat off.",
    "You bring everyone so much joy... when you leave the room."
  ],
  nuclear: [
    "You're proof that even evolution takes breaks.",
    "You're the reason they put directions on shampoo bottles.",
    "You're like a bad API—slow, unreliable, and always returning errors."
  ]
};

function generateRoast() {
  const name = document.getElementById("username").value.trim();
  const level = document.getElementById("roast-level").value;

  if (!name) {
    document.getElementById("roast-output").innerText = "Please enter your name, roast victim.";
    return;
  }

  const roasts = roastBank[level];
  const roast = roasts[Math.floor(Math.random() * roasts.length)];
  document.getElementById("roast-output").innerText = `${name}, ${roast}`;
}