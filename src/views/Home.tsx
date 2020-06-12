import { Vue, Component } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld";
@Component
export default class Home extends Vue {
  protected render() {
    return (
      <div class="name">
        <img alt="Vue logo" src={require("../assets/logo.png")} />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    );
  }
}
