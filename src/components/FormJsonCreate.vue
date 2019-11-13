<template>
    <form-create
        v-if="option && rule"
        v-model="fApi"
        @mounted="formMounted"
        :option="processedOption"
        :rule="rule">
    </form-create>
</template>
<script>
import formCreate from '@form-create/element-ui'

export default {
    props: {
        option: {
            type: Object,
            required: true
        },
        rule: {
            type: Array,
            required: true
        },
        edit: {
            type: Boolean,
            default: false
        },
        expand: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    components: {
        formCreate: formCreate.$form()
    },
    data () {
        return {
            fApi: {},
            processedOption: this.processOption()
        }
    },
    methods: {
        formMounted ($f) {
            this.evil(this.option.mounted, {...this.expand})($f)
            if (this.edit && this.option.writeBack) {
                this.evil(this.option.writeBack, {...this.expand, $f})()
            }
            $f.updateOptions({onSubmit: this.evil(this.option.onSubmit, {$f, ...this.expand})})
            $f.fields().forEach(v => {
                const rule = $f.getRule(v)
                $f.updateRule(v, {
                    on: Object.keys(rule.on).reduce((a, b) => {
                        a[b] = this.evil(rule.on[b], {$f, ...this.expand})
                        return a
                    }, {})
                })
            })
        },
        processOption (option = this.option) {
            const processedOption = {...option}
            delete processedOption.mounted
            delete processedOption.onSubmit
            return processedOption
        },
        evil (innerScript, argOption = {}, outerScript = 'return ') {
            const formalParameter = Object.keys(argOption)
            let Fn = Function
            return new Fn(...formalParameter, outerScript + innerScript)(...formalParameter.map(k => argOption[k]))
        }
    }
}
</script>
