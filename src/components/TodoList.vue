<script>
    import TodoItem from './TodoItem.vue'
    export default {
        data() {
            return {
                current: 2,
                newTodoText: '',
                todos: [
                    {
                        id: 1,
                        title: 'Do the dishes'
                    },
                    {
                        id: 2,
                        title: 'Take out the trash'
                    },
                    {
                        id: 3,
                        title: 'Mow the lawn'
                    }
                ],
                nextTodoId: 4,
                inputText: '123'
            }
        },
        methods: {
            addNewTodo() {
                this.todos.push({
                    id:this.nextTodoId++,
                    title: this.newTodoText
                })
                this.newTodoText = ''
            },
            textChange() {
                console.log('changed');
            }
        },
        components: {
            TodoItem
        }
    }
</script>

<template>
    <a-button type="primary">Primary Button</a-button>
    <div>
        <form @submit.prevent='addNewTodo'>
            <label>
                Add a todo
                <input v-model='newTodoText' />
                <button>Add</button>
            </label>
            <label>
                test
                <input :value='inputText' @change='textChange' />
            </label>
        </form>
    </div>
    <ul>
        <TodoItem v-for="(todo, index) in todos" :key="todo.id" :title='todo.title' @remove='todos.splice(index, 1)'>
        </TodoItem>
    </ul>
    <a-pagination v-model:current="current" :total="50" show-less-items />
</template>

<style>

</style>