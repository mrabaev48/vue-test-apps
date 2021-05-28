import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";
import {TableCell} from "@/components/dataTable/components/TableCell";
import {TableRow} from "@/components/dataTable/components/TableRow";
import {AnyEntityInterface} from "@/components/dataTable/models/AnyEntityInterface";

@Component
export class TableBody extends ConsumerComponent {

    collectRows(): Array<JSX.Element> {
        let tableRows = new Array<JSX.Element>();

        if (Array.isArray(this.context.options.dataSource)) {
            tableRows = this.context.options.dataSource.map((row: AnyEntityInterface) => {
                const columns = this.context.options.columns.map(column => {
                    return (
                        <TableCell>
                            {row[column.dataSource]}
                        </TableCell>
                    );
                });

                if (this.context.actions.isActionColumnNeeded()) {
                    const ActionBodyCell = (
                        <TableCell>

                        </TableCell>
                    );

                    columns.push(ActionBodyCell);
                }

                return (
                    <TableRow>
                        {columns}
                    </TableRow>
                );
            })
        }

        return tableRows;
    }

    render(): VNode {
        return (
            <tbody>
                {this.collectRows()}
            </tbody>
        )
    }
}