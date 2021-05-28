import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";
import {TableHeadCell} from "@/components/dataTable/components/TableHeadCell";
import {TableRow} from "@/components/dataTable/components/TableRow";
import {TableCell} from "@/components/dataTable/components/TableCell";
import {StringFilter} from "@/components/dataTable/components/filters/StringFilter";
import {NumberFilter} from "@/components/dataTable/components/filters/NumberFilters";
import {BoolFilter} from "@/components/dataTable/components/filters/BoolFilter";


export interface TableHeadPropInterface {

}

@Component
export class TableHead extends ConsumerComponent<TableHeadPropInterface> {

    private filters: any = {
        DATE: TableCell,
        STRING: StringFilter,
        NUMBER: NumberFilter,
        BOOL: BoolFilter,
    }

    collectAllColumns(): Array<JSX.Element> {
        const columns = this.context.options.columns.map(column => {
            return (
                <TableHeadCell>
                    {column.title}
                </TableHeadCell>
            );
        })

        if (this.context.actions.isActionColumnNeeded()) {
            const ActionColumnHeadCell = (
                <TableHeadCell>
                    Actions
                </TableHeadCell>
            )
            columns.push(ActionColumnHeadCell);
        }

        return columns;
    }

    collectFilters(): Array<JSX.Element> {
        const useFilters = this.context.options.useFilters || false;

        let filters = new Array<JSX.Element>();

        if (useFilters) {
            filters = this.context.options.columns.map((col) => {

                if (col.useFilters === false) {
                    return (
                        <TableCell/>
                    );
                }

                const Filter = this.filters[col.type!];

                return (
                    <TableCell>
                        <Filter/>
                    </TableCell>
                );
            })

            if (this.context.actions.isActionColumnNeeded()) {
                const EmptyActionCell = (
                    <TableCell>
                        {this.context.options.useFilters !== false ? (<button>Apply Filters</button>) : ('')}
                    </TableCell>
                );
                filters.push(EmptyActionCell);
            }
        }

        return filters;
    }

    render(): VNode {
        return (
            <thead>
                <TableRow>
                    {this.collectAllColumns()}
                </TableRow>
            <TableRow>
                {this.collectFilters()}
            </TableRow>
            </thead>
        )
    }
}