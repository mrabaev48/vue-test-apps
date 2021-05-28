import {Component} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";

@Component
export class TableRow extends ConsumerComponent {
    render(): VNode {
        return (
            <tr>
                {this.$slots.default}
            </tr>
        )
    }
}