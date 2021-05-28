import {Component, Vue} from 'vue-property-decorator';

import './App.css'
import './components/dataTable/style/tableStyle.css'
import {VNode} from "vue";
import {COLUMN_TYPE} from "@/components/dataTable/models/ColumnTypes";
import {DataTable} from "@/components/dataTable/DataTable";

@Component
export default class App extends Vue {

    render(): VNode {
        return (
            <div id="app">
                <DataTable
                    options={{
                        columns: [
                            {
                                title: 'First name',
                                dataSource: 'firstName',
                                type: COLUMN_TYPE.STRING
                            },
                            {
                                dataSource: 'lastName',
                                title: 'Last name',
                                type: COLUMN_TYPE.STRING
                            },
                            {
                                dataSource: 'age',
                                title: 'Age',
                                type: COLUMN_TYPE.NUMBER
                            },
                            {
                                dataSource: 'isActive',
                                title: 'Is Active',
                                type: COLUMN_TYPE.BOOL
                            },
                        ],
                        dataSource: [
                            {
                                id: 1,
                                firstName: 'Alex',
                                lastName: 'Koehler',
                                age: 20,
                                isActive: true
                            },
                            {
                                id: 2,
                                firstName: 'Mitch',
                                lastName: 'Lucker',
                                age: 25,
                                isActive: false
                            },
                            {
                                id: 3,
                                firstName: 'Oliver',
                                lastName: 'Syckes',
                                age: 23,
                                isActive: true
                            },
                            {
                                id: 4,
                                firstName: 'Aaron',
                                lastName: 'Kitcher',
                                age: 28,
                                isActive: false
                            },
                            {
                                id: 5,
                                firstName: 'Danny',
                                lastName: 'Worsnop',
                                age: 29,
                                isActive: true
                            },
                        ],
                        useFilters: true,
                        uniqueKey: 'id'
                    }}
                />
            </div>
        )
    }
}
