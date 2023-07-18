const template = document.createElement("template");
template.innerHTML = `

<link rel="stylesheet" href="../components/course/course.css">
<div class="course-card">
<div class="cover">
  <img src="" alt="" />
</div>
<div class="details">
  <h2></h2>
  <div class="info">
    <p>students:<slot name='students'></slot></p>
    <p>teacher:<slot name='teacher'></slot></p>
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
  connectedCallback() {
    const h2 = this.shadowRoot.querySelector(".details h2");
    h2.innerHTML = this.getAttribute("title");

    this.shadowRoot
      .querySelector("img")
      .setAttribute("src", this.getAttribute("cover"));
  }

  static observedAttributes() {
    return ["title", "cover"];
  }
}

export { course };
