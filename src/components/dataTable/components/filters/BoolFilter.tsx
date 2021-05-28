import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

@Component
export class BoolFilter extends VueComponent {
    filterOptions = ['Yes', 'No', '-']

    selectedValue = '-'

    onValueChanged(event: Event) {
        console.log('newVal: ', event)
        // this.selectedValue = newVal
    }

    render(): VNode {
        const options = this.filterOptions.map(x => {
            return (
                <option selected={x === this.selectedValue} on-change={this.onValueChanged} value={x}>{x}</option>
            )
        })

        return (
            <select>
                {options}
            </select>
        )
    }
}