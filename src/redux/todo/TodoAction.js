import { ADD_TODO, ALL_CLEAR_TASK, ALL_COMPLETE_TASK, COLOR_CHANGE, COLOR_SELECT, EDIT_TASK, FIND_ID, IS_UPDATE, LOADED_TODO, REMOVE_TASK, STATUS_CHANGE, TOGGLE_TODO } from "./TodoActionType"

export const loadedTodo = (todo) => {
    return {
        type: LOADED_TODO,
        payload:todo
    }
}

export const findTodoId = (todoId) => {
    return {
        type: FIND_ID,
        payload:todoId
    }
}

export const isTodoUpdate = (updateStatus) => {
    return {
        type: IS_UPDATE,
        payload:updateStatus
    }
}

export const addTodo = (todoText) => {
    return {
        type: ADD_TODO,
        payload:todoText
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload:id
    }
}

export const colorSelect = (todoId,color) => {
    return {
        type: COLOR_SELECT,
        payload: {
            todoId,
            color
        }
    }
}

export const statusChange = (status) => {
    return {
        type: STATUS_CHANGE,
        payload:
            status
    }
}

export const colorChange = (color,changeType) => {
    return {
        type: COLOR_CHANGE,
        payload: {
            color,
            changeType
        }
    }
}

export const allCompleteTask = () => {
    return {
        type:ALL_COMPLETE_TASK,
    }
}

export const allClearTask = () => {
    return {
        type:ALL_CLEAR_TASK,
    }
}

export const editTask = (todoId,text) => {
    return {
        type: EDIT_TASK,
        payload: {
            todoId,
            text
        }
    }
}

export const removeTask = (todoId) => {
    return {
        type: REMOVE_TASK,
        payload:todoId,
    }
}