const template = document.createElement("template");
template.innerHTML = `

<link rel="stylesheet" href="../components/course/course.css">
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
