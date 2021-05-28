import {Component} from "vue-property-decorator";
import {VNode} from "vue";

import styles from '../style/tableStyle.css?module'
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";

export interface TablePropInterface {

}

@Component
export class Table extends ConsumerComponent<TablePropInterface> {
    render(): VNode {
        return (
            <table class={styles}>
                {this.$slots.default}
            </table>
        )
    }
}