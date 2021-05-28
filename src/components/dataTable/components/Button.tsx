import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

@Component
export class Button extends VueComponent {
    render(): VNode {
        return (
            <button>click me</button>
        )
    }
}