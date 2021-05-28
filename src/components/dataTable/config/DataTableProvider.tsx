import {Component, Prop, Provide, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";
import {DataTableActionsInterface} from "@/components/dataTable/models/DataTableActionsInterface";
import {OptionsInterface} from "@/components/dataTable/models/OptionsInterface";
import {DataTableProviderInterface} from "@/components/dataTable/models/DataTableProviderInterface";

export interface ProviderInterface {
    value: any
}

@Component
export class DataTableProvider extends VueComponent<ProviderInterface> {

    @Prop({type: Object})
    public value!: OptionsInterface

    @Provide('context')
    private providedContext:DataTableProviderInterface = {
        options: {
            ...this.value
        },
        actions: {
            isActionColumnNeeded: this.isActionColumnNeeded
        }
    }

    isActionColumnNeeded(): boolean {

        if (
            this.value.useFilters !== false ||
            this.value.useEdit !== false ||
            this.value.useDelete !== false
        ) {
            return true;
        }

        return false;
    }

    render(): VNode {

        return (
            <div>
                {this.$slots.default}
            </div>
        )
    }
}