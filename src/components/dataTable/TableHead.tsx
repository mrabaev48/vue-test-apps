import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

@Component
export class TableHead extends VueComponent {
    render(): VNode {
        return (
            <thead>
                {this.$slots.default}
            </thead>
        )
    }
}