const letsDiscuss = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const data2 = data.posts;

  displayLetsDiscuss(data2);
};
const displayLetsDiscuss = (data2) => {
  const showAllDiscussContainer = document.getElementById("discuss-container");
  data2.forEach((post) => {
    const discussCard = document.createElement("div");
    discussCard.classList = `card max-w-4xl bg-[#F3F3F5] shadow-xl`;
    discussCard.innerHTML = `
    <div class="flex gap-3 p-11 max-w-2xl">
                    <div>
                      <img class="w-20 h-20 rounded-lg" src="${post.image}" alt="" />
                    </div>
                    <div class="w-full">
                      <div class="flex gap-3">
                        <h3 class="font-semibold">#${post.category}</h3>
                        <h3 class="font-semibold">Author:${post.author.name}</h3>
                      </div>
                      <div class="mt-3 mb-3">
                        <h1 class="font-bold">
                          ${post.title}
                        </h1>
                        <p class="mt-3">${post.description}
                        </p>
                      </div>
                      <hr />
                      <div class="flex justify-between mt-4 w-full">
                        <div class="flex gap-2">
                          <div class="flex gap-1">
                            <img
                              src="images/tabler-icon-message-2.png"
                              alt=""
                            />
                            <p>${post.comment_count}</p>
                          </div>
                          <div class="flex gap-1">
                            <img src="images/Group 16.png" alt="" />
                            <p>${post.view_count}</p>
                          </div>
                          <div class="flex gap-1">
                            <img src="images/Group 18.png" alt="" />
                            <p>${post.posted_time} min</p>
                          </div>
                        </div>
                        <div onclick="showDataInCard('${post.title}', ${post.view_count})" class="cursor-pointer">
                          <img src="images/Group 40106.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
    `;
    showAllDiscussContainer.appendChild(discussCard);
  });
};
let count = 0;
const showDataInCard = (title, view_count) => {
  count = count + 1;
  document.getElementById("count-post").innerText = count;
  console.log(count);
  const cardData = document.getElementById("show-data-card");
  const dataDiv = document.createElement("div");
  dataDiv.classList = `flex w-fit justify-between p-5 bg-white mb-3 rounded-xl mx-auto gap-2`;
  dataDiv.innerHTML = `
<h5 class="font-bold w-56">${title}</h5>
<div class="inline-flex ">
 <img class=" w-7 h-7" src="images/Group 16.png" alt="" />
 <p>${view_count}</P>
</div>
`;
  cardData.appendChild(dataDiv);
  // dataTitle.textContent = title;
  // cardData.appendChild(dataTitle);
  // const dataView = document.createElement("p");
  // dataView.textContent = count;
  // cardData.appendChild(dataView);
};
letsDiscuss();
// Latest Post
const latestPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  // console.log(post);
  displayLatestPost(data);
};
const displayLatestPost = (data) => {
  // console.log(data);
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
