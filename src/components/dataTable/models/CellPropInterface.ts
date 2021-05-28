import {AnyEntityInterface} from "@/components/dataTable/models/AnyEntityInterface";
import {ColumnInterface} from "@/components/dataTable/models/ColumnInterface";

export interface CellPropInterface {
    row: AnyEntityInterface
    column: ColumnInterface
}