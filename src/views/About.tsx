import { Vue, Component } from "vue-property-decorator";
@Component
export default class About extends Vue {
  protected render() {
    return <h1>This is an about page</h1>;
  }
}
