import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

import styles from './tableStyle.css?module'

@Component
export class Table extends VueComponent {
    render(): VNode {
        return (
            <table class={styles}>
                {this.$slots.default}
            </table>
        )
    }
}