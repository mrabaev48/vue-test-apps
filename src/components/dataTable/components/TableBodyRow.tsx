import {Component, Prop} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";
import {TableRow} from "@/components/dataTable/components/TableRow";
import {AnyEntityInterface} from "@/components/dataTable/models/AnyEntityInterface";
import {TableCell} from "@/components/dataTable/components/TableCell";
import {Button} from "@/components/dataTable/components/Button";
import {BoolCell} from "@/components/dataTable/components/tableCells/BoolCell";
import {NumberCell} from "@/components/dataTable/components/tableCells/NumberCell";
import {StringCell} from "@/components/dataTable/components/tableCells/StringCell";

export interface TableBodyRowProp {
    row: AnyEntityInterface
}

@Component
export class TableBodyRow extends ConsumerComponent<TableBodyRowProp> {

    @Prop({type: Object})
    row!: AnyEntityInterface

    private cellsComponents: any = {
        BOOL: BoolCell,
        NUMBER: NumberCell,
        STRING: StringCell
    }

    deleteRowClickHandler(row: AnyEntityInterface) {
        this.context.actions.deleteRow(row);
    }

    editRowClickHandler(row: AnyEntityInterface) {
        this.context.actions.editRow(row);
    }

    saveRecord() {
        this.context.actions.saveRow();
    }

    render(): VNode {

        const columns = this.context.options.columns.map(column => {
            const Cell = this.cellsComponents[column.type!];
            return (
                <Cell
                    row={this.row}
                    column={column}
                    cellValue={this.row[column.dataSource]}
                />
            );
        });

        if (this.context.actions.isActionColumnNeeded()) {
            const ActionBodyCell = (
                <TableCell>
                    {this.context.options.useDelete !== false ?
                        (<button class={'action-button'} onClick={(e: any) => this.deleteRowClickHandler(this.row)}>
                            Delete
                        </button>): ('')}
                    {this.context.options.useEdit !== false && this.context.state.editRow === null ?
                        (<button class={'action-button'} onClick={(e: any) => this.editRowClickHandler(this.row)}>
                            Edit
                        </button>): ('')}
                    {this.context.options.useEdit !== false && this.context.state.editRow ?
                        (<button class={'action-button'} onClick={(e: any) => this.saveRecord()}>
                            Update
                        </button>): ('')
                    }
                </TableCell>
            );

            columns.push(ActionBodyCell);
        }

        return (
            <TableRow>
                {columns}
            </TableRow>
        )
    }
}