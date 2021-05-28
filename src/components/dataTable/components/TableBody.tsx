import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";
import {AnyEntityInterface} from "@/components/dataTable/models/AnyEntityInterface";
import {TableBodyRow} from "@/components/dataTable/components/TableBodyRow";
import {TableRow} from "@/components/dataTable/components/TableRow";

export interface TableBodyPropInterface {

}

@Component
export class TableBody extends ConsumerComponent<TableBodyPropInterface> {

    collectRows(): Array<JSX.Element> | JSX.Element {
        let tableRows = new Array<JSX.Element>();

        if (Array.isArray(this.context.options.dataSource)) {

            tableRows = this.context.options.dataSource.map((row: AnyEntityInterface, index: number) => {
                return (
                    <TableBodyRow key={index.toString()} row={row}/>
                )
            });
        }

        return tableRows;
    }

    noDisplayData() {
        let colspan = this.context.options.columns.length;

        if (this.context.actions.isActionColumnNeeded()) {
            colspan++;
        }

        console.log('COLSPAN: ', colspan)

        return (
            <tbody>
                <TableRow>
                    <td colspan={colspan}>
                        <p>No data to display</p>
                    </td>
                </TableRow>
            </tbody>
        )
    }

    render(): VNode {

        if (!this.context.options.dataSource || this.context.options.dataSource.length === 0) {
            return this.noDisplayData();
        }

        return (
            <tbody>
                {this.collectRows()}
            </tbody>
        )
    }

}