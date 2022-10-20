    class SkipLink extends HTMLElement {
        connectedCallback() {
          this.render();
        }
      
        render() {
          this.innerHTML = `
          <a href="../#content" class="skip-link">Skip to Content</a>

          <a href="#/" class="main-title">Restoding</a>
    `;
        }
      }
      
      customElements.define("skip-link", SkipLink);
