// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskElement(taskText) {
  // Create the list item
  const li = document.createElement('li');
  
  // Create a span element for the task text
  const span = document.createElement('span');
  span.textContent = taskText;
  
  // Add event listener to mark the task as completed
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  
  // Create a button to remove the task
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-btn');
  
  // Add event listener to remove the task
  removeButton.addEventListener('click', () => {
    taskList.removeChild(li);
  });
  
  // Append the task text and remove button to the list item
  li.appendChild(span);
  li.appendChild(removeButton);
  
  return li;
}

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    // Create the task element and add it to the list
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    
    // Clear the input field
    taskInput.value = '';
  } else {
    alert('Please enter a task');
  }
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
