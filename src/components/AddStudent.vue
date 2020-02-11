<template>
    <div class="form-group">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Input Name" v-model="name" @keyup="enterDoAdd">
            <span class="input-group-append">
                <button class="btn btn-primary btn-sm" @click="addStudent">Add</button>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: [],
    data() {
        return {
            name: '',
        }
    },
    methods: {
        addStudent() {
            if (!this.name) {
                return alertify.error('Please Input Name!');
            }
            //console.log(this.name);
            this.$emit('add', this.name);   //doAdd(this.name);
            this.name = '';
        },
        enterDoAdd(e) {
            if (e.keyCode == 13 || e.which == 13) {
                this.addStudent();
            }
        }
    }
}
</script>

