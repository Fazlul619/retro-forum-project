const latestPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  // console.log(post);
  displayLatestPost(data);
};
const displayLatestPost = (data) => {
  console.log(data);
  const showAllContainer = document.getElementById("post-container");

  data.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.classList = `card w-96 bg-base-100 shadow-xl `;
    postCard.innerHTML = `
            <figure class="px-6 pt-6 ">
              <img class=" rounded-xl "
                src="${post.cover_image}"
                alt="Cover image"
              />
            </figure>
            <div class="mt-3 flex gap-2 pl-4">
              <img src="images/Frame.png" alt="" />
              <p>${post?.author?.posted_date || "No published Date"}</p>
            </div>
            <div class="card-body">
              <h2 class="card-title">${post.title}
              </h2>
              <p>${post.description}
              </p>
              <div class="flex gap-2">
                <img class="w-12 h-12 rounded-full" src="${
                  post.profile_image
                }" alt="" />
                <div>
                  <h1 class="font-semibold">${post.author.name}</h1>
                  <p>${post?.author?.designation || "Unknown"}</p>
                </div>
              </div>
            </div>
          
    `;
    showAllContainer.appendChild(postCard);
  });
};
latestPost();
