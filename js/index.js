Vue.config.devtools = true

const vueApp = new Vue({
    el: "#app",
    data: {
        toDoList: [
            {
                message: "Svegliarsi prima delle 9.25",
                color: "#000000",
                checked: false
            },
            {
                message: "Fare sport",
                color: "#000000",
                checked: false
            },
        ],
        newText: "",
        inputColor: "#000000",

    },
    methods: {
        addOnArray(){

            if(this.newText.trim() === ""){
                return
            }

            const foundElement = this.toDoList.find((element) => {
                return element.message.toLowerCase() === this.newText.trim().toLowerCase()
            })

            if(foundElement){
                return
            }
 
            this.toDoList.push({
                message: this.newText,
                color: this.inputColor
            })

            this.newText = ""
        },

        removeOnArray(cancellaIndice){
            this.toDoList.splice(cancellaIndice, 1)
        }

    }
})