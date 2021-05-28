import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

@Component
export class StringFilter extends VueComponent {
    render(): VNode {
        return (
            <input type='text'/>
        )
    }
}