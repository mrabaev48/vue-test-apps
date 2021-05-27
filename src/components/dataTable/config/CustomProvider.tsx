import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";
import {provide} from "@vue/composition-api";

@Component
export class CustomProvider extends VueComponent {

    private name = 'NAME'

    Provider = {
        provide: {
            name
        }
    }

    render(): VNode {
        return (
            <div>
                {this.$slots.default}
            </div>
        )
    }
}