let app = new Vue({
    el: '#app',
    data: {
        new_color: '',
        grid_rows: '',
        grid_size: '',
        grid_rows: '',
        color_array: [],
        color_keys: [],
        next_index: ''
    },
    created() {
        this.initialize();
    },
    computed: {

    },
    methods: {
        initialize() {
            console.log("initialize");
            this.tempIndex = -1;
            this.grid_rows = 5;
            this.grid_columns = 5;
            this.next_index = 0;
            this.grid_size = this.grid_rows * this.grid_columns;
            this.color_keys = ["black", "green", "blue"];
            for (i = 0; i < this.grid_size; i++) {
                this.color_array.push({
                    index: i,
                    color: this.color_keys[0]
                });
            }
        },
        rotateColor(element) {
            console.log("on click");
            which = this.color_array.indexOf(element);
            console.log(which);
            current = this.color_array[which].color;
            console.log(current);
            index = this.color_keys.indexOf(current);
            index++;
            if (index >= this.color_keys.length) {
                index = 0;
            }
            newer = this.color_keys[index];
            this.color_array[which].color = newer;

        },
        addColor() {
            this.color_array.push({
                index: this.next_index,
                color: this.new_color
            });
            this.new_color = '';
            this.next_index++;
        },

    }

})
