import {Component, Prop, Provide, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";
import {DataTableActionsInterface} from "@/components/dataTable/models/DataTableActionsInterface";
import {OptionsInterface} from "@/components/dataTable/models/OptionsInterface";
import {DataTableProviderInterface} from "@/components/dataTable/models/DataTableProviderInterface";
import {AnyEntityInterface} from "@/components/dataTable/models/AnyEntityInterface";

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
            ...this.value,
        },
        state: {
            editRow: null
        },
        actions: {
            isActionColumnNeeded: this.isActionColumnNeeded,
            isEdit: this.isEdit,
            deleteRow: this.deleteRow,
            editRow: this.editRow,
            updateRecord: this.updateRecord,
        }
    }

    updateRecord(row: AnyEntityInterface) {

    }

    isEdit(row: AnyEntityInterface): boolean {
        return this.providedContext.state.editRow !== null &&
            row[this.providedContext.options.uniqueKey] === this.providedContext.state.editRow[this.providedContext.options.uniqueKey];
    }

    editRow(row: AnyEntityInterface) {
        this.providedContext.state.editRow = row;
    }

    deleteRow(row: AnyEntityInterface) {
        this.providedContext.options.dataSource = this.providedContext.options.dataSource.filter(x => x[this.providedContext.options.uniqueKey] !== row[this.providedContext.options.uniqueKey]);
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