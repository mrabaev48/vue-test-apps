import { createContext } from 'vue-create-context'

export class DataTableContextSingleton {
    static DataTableContext: any

    private static createContext() {
        this.DataTableContext = createContext({test: 'value', find: 'me'}) as any;
    }

    static getDataTableContext () {
        if (!this.DataTableContext) {
            this.createContext();
        }

        return this.DataTableContext;
    }
}