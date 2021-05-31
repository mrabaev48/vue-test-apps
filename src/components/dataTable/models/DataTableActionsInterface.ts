import {AnyEntityInterface} from "@/components/dataTable/models/AnyEntityInterface";

export interface DataTableActionsInterface {
    isActionColumnNeeded(): boolean;
    isEdit(row: AnyEntityInterface): boolean;
    deleteRow(row: AnyEntityInterface): void;
    editRow(row: AnyEntityInterface): void;
    updateRecord(dataSource: string, value: any): void;
    saveRow(): void
}