const list = [
    { 
        isDone: true,
        name: "I am Hungry",
    },
    {
        isDone: false,
        name: "What-Is-This Study",
    },
]

function Item(props){
    let itemContent = props.name;
    if (props.isDone) {
        itemContent = (
            <del>{props.name + "V"}</del>
        )
    }

    return (
        <li className="item">
            {itemContent}
        </li>
    )
}

export default function TodoList() {
    const todos= list.map((li, index) => <Item key={index} isDone={li.isDone} name={li.name}/>);

    return (
        <section>
            <h1>ToDo List</h1>
            <ul>
                {todos}
            </ul>
        </section>
    );
}