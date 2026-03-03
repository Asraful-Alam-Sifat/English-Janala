const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(response => response.json())
    .then(json => displayLesson(json.data));
}

const displayLesson = (lessons) =>{
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    
    for(let lesson of lessons){
        console.log(lesson);

        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
       <button title="${lesson.lessonName}" class="btn btn-outline btn-primary"
                  ><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
                  </button>    
        `;

        levelContainer.appendChild(btnDiv);
    }
};

loadLessons();

