import {Component, Inject} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";
import {DataTableProviderInterface} from "@/components/dataTable/models/DataTableProviderInterface";

@Component
export class ConsumerComponent extends VueComponent {

    @Inject('context')
    protected context!: DataTableProviderInterface

    render(): VNode {
        return (
            <div>
            </div>
        )
    }
}