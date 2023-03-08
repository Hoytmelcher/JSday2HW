const toDoList = [
    {
        id: 1,
        title: 'Trash',
        description: 'Take out the trash'
    },{
        id: 2,
        title: 'Dishes',
        description: 'Wash the dishes'
    },{
        id: 3,
        title: 'Laundry',
        description: 'Fold the laundry'
    },{
        id: 4,
        title: 'Groceries',
        description: 'Pick up groceries'
    },{
        id: 5,
        title: 'Cook',
        description: 'Make dinner'
    },{
        id: 6,
        title: 'Feed',
        description: 'Feed the dog'
    }
]

const listContainer = document.getElementById('box1')

for (const toDo of toDoList) {
    
    listContainer.innerHTML += `
        <div class="card" id="${toDo.id}">
            <h2>${toDo.title}</h2>
            <p>${toDo.description}</p>
        </div>
    `
}

for (const toDo of toDoList) {
    const toDoEl = document.getElementById(toDo.id)
    toDoEl.addEventListener('mouseover', () => {
        toDoEl.style.backgroundColor = 'blue',
        toDoEl.style.color = 'white'
    }),
    toDoEl.addEventListener('mouseout', () => {
        toDoEl.style.backgroundColor = 'transparent',
        toDoEl.style.color = 'black'
    }),
    toDoEl.addEventListener('click', () => {
        toDoEl.remove() 
    })
}