import { Vue, Component, Prop } from "vue-property-decorator";
interface helloProps {
  msg: string;
}
@Component
export default class HelloWorld extends Vue {
  props!: helloProps;
  @Prop()
  msg!: string;
  protected render() {
    return <div>helloworld {this.msg}</div>;
  }
}
