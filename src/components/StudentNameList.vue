<template>
    <div class="table-responsive">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>
                        <span v-show="editIndex != index">{{ item.name }}</span>
                        <input type="text" class="form-control" v-show="editIndex == index" v-model="item.name" @blur="setIndex(-1)" :ref="'index_' + index">
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" @click="toEdit(index)"><i class="fas fa-edit"></i> Edit</button>
                        <button class="btn btn-danger btn-sm" @click="removeIndex(index)"><i class="fas fa-trash-alt"></i> Delete</button>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default ({
    props: [],
    data() {
        return {
            editIndex: -1,
            items: [
                { name: 'Gifted Class', students: [{name: 'A', sex: 'M', age: 19}] },
                { name: 'Herding Class', students: [] },
                { name: 'Special Class', students: [] },
            ]
        }
    },
    methods: {
        editName(index) {
            this.setIndex(index);
        },
        setIndex(index) {
            this.editIndex = index;
            //if(index >= 0){  
                this.$nextTick( () => {                              //延遲執行
                    this.$refs['index_' + index] && this.$refs['index_' + index][0].focus();
                })
            //}
            
        },
        removeIndex(index) {
            //console.log('remove' + index);
            this.items.splice(index, 1);
        },
        doAdd(name) {
            this.items.push({
                name: name,
                students: []
            });
        },
        toEdit(index){
            let data = this.items[index];
            this.$emit('edit', index, data);
        },
        update(index, data) {
            this.items[index] = data;
        },
    }
})
</script>