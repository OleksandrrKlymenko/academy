import "@/variables.scss"

export default {
    data() {
        return {
            variables
        }
    },
    methods: {
        test() {
            console.log(this.variables)
        }
    }
}