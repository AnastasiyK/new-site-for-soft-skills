const API_URL ='https://jsonplaceholder.typicode.com/posts'

async function loadNotes() {
    try {
    const response = await fetch(API_URL);
    const notes = await response.json();
    console.log(notes)

    } catch (error) {
        console.error ("Ошибка загрузки:", error);

    } finally {
        //
    }
}

    // Запуск при загрузке
document.addEventListener('DOMContentLoaded', loadNotes)