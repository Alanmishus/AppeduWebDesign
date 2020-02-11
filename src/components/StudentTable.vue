<template>
<div>
    <div class="row">
        <div class="form-group col-sm-4">
            <label for="">Name</label>
            <input type="text" class="form-control" ref="name" v-model="data.name">
        </div>
        <div class="form-group col-sm-4">
            <label for="">Sex</label>
            <select class="form-control" v-model="data.sex" ref="sex">
                <option value="">Select Sex</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="X">Unknown</option>
            </select>
        </div>
        <div class="form-group col-sm-4">
            <label for="">Age</label>
            <input type="number" class="form-control" ref="age" v-model="data.age">
        </div>
    </div>
    <div class="form-group text-right">
        <button class="btn btn-primary btn-sm" @click="doAdd"  v-show="mode == 'add'">Add</button>
        <button class="btn btn-success btn-sm" @click="doUpdate"  v-show="mode == 'edit'">Update</button>
        <button class="btn btn-danger btn-sm" @click="doSave" >Save</button>
    </div>
    <div class="table-responsive">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Action</th>
                    <th>Name</th>
                    <th>Sex</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.sex }}</td>
                    <td>{{ item.age }}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" @click="toEdit(index)"><i class="fas fa-edit"></i> Edit</button>
                        <button class="btn btn-danger btn-sm" @click="removeIndex(index)"><i class="far fa-trash-alt"></i> Del</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
export default {
    props: [],
    data() {
        return {
            items: [],
            data: {
                name: '',
                sex: '',
                age: '',
            },
            editIndex: -1,
            mode: 'add'
        }
    },
    methods: {
        load(students) {
            console.log(students);
            this.items = JSON.parse(JSON.stringify(students)) || [];
        },
        toEdit(index) {
            this.editIndex = index;
            this.data = JSON.parse(JSON.stringify(this.items[index]));
            this.mode = 'edit';
        },
        removeIndex(index) {
            this.items.splice(index, 1);
        },
        doSave() {
            this.$emit('save', this.items);
        },
        doAdd() {
            if (!this.valid()) {
                return false;
            }
            this.items.push(JSON.parse(JSON.stringify(this.data)));
            this.reset();
        },
        doUpdate() {
            if (!this.valid()) {
                return false;
            }
            this.mode = 'add';
            this.items[this.editIndex] = JSON.parse(JSON.stringify(this.data));
            this.reset();
        },
        reset() {
            for (let f in this.data) {
                this.data[f] = '';
            }
        },
        valid() {
            for (let f in this.data) {
                if (!this.data[f]) {
                    alertify.error('Please input data!');
                    this.$refs[f].focus();
                    return false
                }
            }
            return true;
        }
    }
}
</script>