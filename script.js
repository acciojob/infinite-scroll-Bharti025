let lists = document.getElementById("infi-list");
const listItems = lists.children;

window.onscroll = () => {
    // Check if the last item is in view
    if (lists.lastElementChild.getBoundingClientRect().bottom <= window.innerHeight) {
        // Create two new list items
        for (let i = 0; i < 2; i++) {
            let newItem = document.createElement("li");
            newItem.textContent = `Item ${listItems.length + 1}`; // Set the text content
            lists.appendChild(newItem); // Append the new item to the list
        }
    }
}

