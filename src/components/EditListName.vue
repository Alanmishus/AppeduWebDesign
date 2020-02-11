<template>
    <div>
        <div class="form-group">
            <label for="">List Name</label>
            <input type="text" class="form-control" ref="name" v-model="name">
        </div>
        <div class="form-group text-right">
            <button class="btn btn-danger btn-sm" @click="doSave">Save</button>
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
        load(name) {
            this.name = name;
        },
        doSave() {
            if (!this.name) {
                this.$refs.name.focus();
                return alertify.error('Please input Name!');
            }
            this.$emit('save', this.name);
        }
    }
}
</script>