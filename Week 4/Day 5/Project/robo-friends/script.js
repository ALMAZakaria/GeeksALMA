const robots = [
  { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', image: 'https://robohash.org/1?200x200' },
  { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', image: 'https://robohash.org/2?200x200' },
  { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', image: 'https://robohash.org/3?200x200' },
  { id: 4, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?200x200' },
  { id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?200x200' },
  { id: 6, name: 'Mrs. Dennis Schulist', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?200x200' },
  { id: 7, name: 'Kurtis Weissnat', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?200x200' },
  { id: 8, name: 'Nicholas Runolfsdottir V', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
  { id: 9, name: 'Glenna Reichert', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/9?200x200' },
  { id: 10, name: 'Clementina DuBuque', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/10?200x200' }
];

const container = document.getElementById("robot-container");
const searchInput = document.getElementById("search");

function renderRobots(list) {
  container.innerHTML = "";
  list.forEach(robot => {
    const card = document.createElement("div");
    card.className =
      "bg-[url('card-pattern.png')] bg-cover bg-center bg-green-300 text-white rounded-xl p-2 shadow-lg transform hover:scale-105 transition duration-300";
    card.innerHTML = `<div class="robot-card rounded-lg text-center ">
            <div class="robot-card-content p-2">
              <div class="w-38 h-38 mx-auto mb-4 rounded-full   bg-gray-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://robohash.org/${robot.id}?size=200x200" 
                  alt="${robot.name}"
                  class="w-full h-full object-cover "
                />
              </div>
              <h2 class="text-xl font-bold text-gray-800 mb-2">${robot.name}</h2>
              <p class="text-gray-600 text-sm">${robot.email}</p>
            </div>
          </div>
    `;
    container.appendChild(card);
  });
}

renderRobots(robots);

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = robots.filter(robot =>
    robot.name.toLowerCase().includes(value)
  );
  renderRobots(filtered);
});
