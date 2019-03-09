let app = new Vue({
    el: '#app',
    data: {
        new_color: '',
        new_dimens: '',
        column_form: '',
        tile_width: '',
        grid_rows: '',
        grid_size: '',
        grid_rows: '',
        color_array: [],
        color_keys: []
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
            this.tile_width = '19vw';
            this.column_form = 'auto auto auto auto auto / 1fr 1fr 1fr 1fr 1fr';
            this.next_index = 0;
            this.grid_size = this.grid_rows * this.grid_columns;
            this.color_keys = ["white", "black"];
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
            this.color_keys.push(this.new_color);
            this.new_color = '';
        },
        changeDimens() {
            this.grid_rows = this.new_dimens;
            this.grid_columns = this.new_dimens;
            this.grid_size = this.grid_rows * this.grid_columns;
            this.color_array = [];
            for (i = 0; i < this.grid_size; i++) {
                this.color_array.push({
                    index: i,
                    color: this.color_keys[0]
                });
            }
            this.tile_width = 95 / this.grid_rows + 'vw';
            this.column_form = 'auto auto auto auto auto / ';
            for (i = 0; i < this.grid_rows; i++) {
                this.column_form = this.column_form.concat(' 1fr')
            }
            this.new_dimens = '';
        },
        setDefault() {
            this.color_keys = ["red", "orange", "yellow", "lime", "green", "lightblue", "blue", "purple", "black", "gray", "white"]
        }
    }

})
