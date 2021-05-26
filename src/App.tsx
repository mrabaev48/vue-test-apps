import {Component, Vue} from 'vue-property-decorator';
import {COLUMN_TYPE, DataTable} from "@/components/dataTable/DataTable";

import './App.css'
import './components/dataTable/tableStyle.css'
import {VNode} from "vue";

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
                                dataSource: 'birthday',
                                title: 'Birthday',
                                type: COLUMN_TYPE.BOOL
                            },
                        ],
                        dataSource: [
                            {
                                firstName: 'Alex',
                                lastName: 'Koehler',
                                age: 20,
                                birthday: '22-08-1994'
                            },
                            {
                                firstName: 'Mitch',
                                lastName: 'Lucker',
                                age: 25,
                                birthday: '22-08-1994'
                            },
                            {
                                firstName: 'Oliver',
                                lastName: 'Syckes',
                                age: 23,
                                birthday: '22-08-1994'
                            },
                            {
                                firstName: 'Aaron',
                                lastName: 'Kitcher',
                                age: 28,
                                birthday: '22-08-1994'
                            },
                            {
                                firstName: 'Danny',
                                lastName: 'Worsnop',
                                age: 29,
                                birthday: '22-08-1994'
                            },
                        ],
                        useFilters: true
                    }}
                />
            </div>
        )
    }
}
