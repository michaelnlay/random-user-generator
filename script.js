//fetch from api https://randomuser.me/api/

//1. create a function to fetch api endpoint
function fetchAPI() {
  displaySpinner();
  //2. use fetch method to access api endpoint
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.results);
      //3. call in the displayUser function here
      displayUser(data.results[0]);
      hideSpinner();
    });

  //4. create a displayUser function
  function displayUser(user) {
    //5. get the code block with an id of user to here
    const userInfo = document.querySelector("#user");

    //part of the project is to change the colors if gender male or female
    //6: change color to pink if female, blue if male
    if (user.gender === "female") {
      document.body.style.backgroundColor = "pink";
    } else {
      document.body.style.backgroundColor = "blue";
    }

    //7: paste all elements inside the id of user here for dynamic display
    userInfo.innerHTML = `
    <div id="user" class="mt-6">
      <div class="flex justify-between">
        <div class="flex">
          <img
            class="w-48 h-48 rounded-full mr-8"
            src="${user.picture.large}"
          />
          <div class="space-y-3">
            <p class="text-xl">
              <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
            </p>
            <p class="text-xl">
              <span class="font-bold">Email: </span> ${user.email}
            </p>
            <p class="text-xl">
              <span class="font-bold">Phone: </span> ${user.phone}
            </p>
            <p class="text-xl">
              <span class="font-bold">Location: </span> ${user.location.city} ${user.location.state}
            </p>
            <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
          </div>
        </div>
      </div>
    </div>
      `;
  }

  //9.create a function for showing or hidden the spinner
  function displaySpinner() {
    document.querySelector(".spinner").style.display = "block";
  }
  function hideSpinner() {
    document.querySelector(".spinner").style.display = "none";
  }
}

//8: create an event listener to check random user after click
const button = document.querySelector("button");
button.addEventListener("click", fetchAPI);
fetchAPI();
