var app = new Vue({
    el: ".app",

    data(){
        return{
            is: {
                fire: "",
            }
        }
    },

    methods: {
        isFire(){
            var choice = Math.floor(Math.random() * 2)
            switch(choice){
                case 0:
                this.is.fire = "Probably not";
                break;

                case 1:
                this.is.fire = "No";
                break;
            }
        }
    },
    mounted(){
        this.isFire()
    }
})
