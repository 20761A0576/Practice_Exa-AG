window.onload = function() {
    const skills = [
        { name: "Java", rating: 4 },
        { name: "SQL", rating: 4 },
        { name: "React", rating: 4 },
        { name: "HTML", rating: 5 },
        { name: "CSS", rating: 5 }
    ];

    const skillContainer = document.getElementById("skills-container");

    skills.forEach(skill => {
        const card = document.createElement("div");
        card.classList.add("skill-card");

        const name = document.createElement("h3");
        name.textContent = skill.name;
        card.appendChild(name);

        const stars = document.createElement("div");
        stars.classList.add("stars");

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.textContent = i <= skill.rating ? "★" : "☆";
            stars.appendChild(star);
        }

        card.appendChild(stars);
        skillContainer.appendChild(card);
    });

    const projects = [
        {name:"Portfolio", description:"My Portfolio", tools:["HTML","CSS","JS"]},
        {name:"Insurance System", description:"Insurance Management App", tools:["Java","SQL","React"]}
    ];

    const projectContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const name = document.createElement("h3");
        name.textContent = project.name;
        card.appendChild(name);

        const description = document.createElement("p");
        description.textContent = project.description;
        card.appendChild(description);

        const toolsDiv = document.createElement("div");
        toolsDiv.classList.add("tools");
        project.tools.forEach(tool => {
            const span = document.createElement("span");
            span.textContent = tool;
            span.classList.add("tool-badge");
            toolsDiv.appendChild(span);
        });
        card.appendChild(toolsDiv);

        projectContainer.appendChild(card);
    });
};