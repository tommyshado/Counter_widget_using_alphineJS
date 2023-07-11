function counter() {
    return {
        count: 0,
        // variable for the maximum value
        max: 200,

        increment() {
            // count must not exceed the maximum value 
            if (this.count <= this.max) {
                this.count++;
            };
        },

        decrement() {
            if (this.count > 0) {
                this.count--;
            };
        },

        powersOf2() {
            if (this.count <= this.max) {
                this.count **= 2
            }
        },
    };
};