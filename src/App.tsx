import { Vue, Component } from "vue-property-decorator";
import initStyle from "../src/app.less";

@Component
export default class App extends Vue {
  protected render() {
    return (
      <div class={initStyle.app}>
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </div>
    );
  }
}
