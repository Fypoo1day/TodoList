import { state } from "../../state";

export function initListComp() {
  customElements.define(
    "list-comp",
    class extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
        this.render();
        this.connectedCallBack();
      }

      connectedCallBack() {
        state.subscribe(() => {
          this.render();
        });
      }

      render() {
        const list = state.getState().list;
        console.log("List", list);

        this.shadow.innerHTML = `
            <div>
                <h4>Nombre:</h4>
                <ul>
                    ${list.map((item) => `<li>${item}</li>`).join("")}
                </ul>
            </div>
        `;

        var style = document.createElement("style");
        style.innerHTML = `
        div{
            margin:0px auto;
            height: 70vh;
            background: #FF8282;
            display: flex;
            gap: 10px;
            padding: 10px;
            flex-direction: column;
            align-self: center;
            justify-content: flex-start;
        }
        `;

        this.shadow.appendChild(style);
      }
    }
  );
}
