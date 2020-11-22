import React from 'react';

const Todos = ({todos}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    );
    return (
        <div className="todos collection">
            <h1>HELLO</h1>
        </div>
    )
}

export default Todos;