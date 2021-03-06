import {Component, Prop, VModel, Vue, Watch} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";
import {AnyEntityInterface} from "@/components/dataTable/models/AnyEntityInterface";
import {CellPropInterface} from "@/components/dataTable/models/CellPropInterface";
import {ColumnInterface} from "@/components/dataTable/models/ColumnInterface";
import {TableCell} from "@/components/dataTable/components/TableCell";

@Component
export class StringCell extends ConsumerComponent<CellPropInterface> {

    @Prop({type: Object})
    row!: AnyEntityInterface

    @Prop({type: Object})
    column!: ColumnInterface

    @Prop()
    cellValue!: any

    handleValueChanged(sender: any) {
        this.context.actions.updateRecord(this.column.dataSource, sender.target.value);
    }

    renderReadMod() {
        return (
            <TableCell>
                <p>
                    {this.row[this.column.dataSource]}
                </p>
            </TableCell>
        );
    }

    renderEditMode() {
        const editRow = this.context.state.editRow!;
        return (
            <TableCell>
                <input type={'text'} value={editRow[this.column.dataSource]}
                       onkeyup={this.handleValueChanged}/>
            </TableCell>
        )
    }

    render(): VNode {

        if (this.context.actions.isEdit(this.row)) {
            return this.renderEditMode();
        }
        return this.renderReadMod();
    }
}