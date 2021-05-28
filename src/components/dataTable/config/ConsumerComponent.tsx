import {Component, Inject} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";
import {DataTableProviderInterface} from "@/components/dataTable/models/DataTableProviderInterface";

type CSSClass = (string | {
    [key: string]: string
})

@Component
export class ConsumerComponent<T = {}> extends VueComponent<T> {

    // @ts-ignore
    public $props: T & {
        key?: string
        class?: CSSClass | CSSClass[]
    }

    @Inject('context')
    protected context!: DataTableProviderInterface

    render(): VNode {
        return (
            <div>
            </div>
        )
    }
}