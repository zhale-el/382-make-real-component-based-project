const template = document.createElement("template");
template.innerHTML = `

<link rel="stylesheet" href="../components/course/course.css">
<div class="course-card">
<div class="cover">
  <img src="./img/js.png" alt="" />
</div>
<div class="details">
  <h2>js course</h2>
  <div class="info">
    <p>students:3000</p>
    <p>teacher:zhale</p>
  </div>
  <div class="actions">
    <button id="register">register</button>
    <button id="toggle">show Details</button>
  </div>
</div>
</div>
`;

class course extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {}

  static observedAttributes() {}
}

export { course };
