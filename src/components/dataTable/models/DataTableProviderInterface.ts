import {OptionsInterface} from "@/components/dataTable/models/OptionsInterface";
import {DataTableActionsInterface} from "@/components/dataTable/models/DataTableActionsInterface";

export interface DataTableProviderInterface {
    options: OptionsInterface,
    actions: DataTableActionsInterface,
}