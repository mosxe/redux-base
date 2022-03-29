import { INCREMENT, DECREMENT, INPUT_TEXT } from "./type";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
};

export function decrementLikes() {
    return {
        type: DECREMENT
    }
};

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
};