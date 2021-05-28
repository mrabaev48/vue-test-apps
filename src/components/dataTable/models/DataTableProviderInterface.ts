import {OptionsInterface} from "@/components/dataTable/models/OptionsInterface";
import {DataTableActionsInterface} from "@/components/dataTable/models/DataTableActionsInterface";
import {DataTableStateInterface} from "@/components/dataTable/models/DataTableStateInterface";

export interface DataTableProviderInterface {
    options: OptionsInterface,
    actions: DataTableActionsInterface,
    state: DataTableStateInterface,
}