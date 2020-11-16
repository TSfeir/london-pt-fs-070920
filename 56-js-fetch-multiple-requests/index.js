const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/**
 *
 * REQUIREMENTS:
 *
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

/**
 * HTML for each member:
 * <li>
 *     <p class="name">Bilbo Baggins</p>
 *     <p class="life">1777 – 1888</p>
 *     <p class="gender"><strong>Gender: </strong>Male</p>
 *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
 * </li>
 */

const allSwornMembers = [];

const getAllSwornMembers = async () => {
  const houseData = await fetch(houseURL).then((response) => response.json());

  houseData.swornMembers.forEach(async (swornMemberURL) => {
    const swornMembersData = await fetch(swornMemberURL).then((response) =>
      response.json()
    );
    allSwornMembers.push(swornMembersData);
    displaySwornMember(swornMembersData);
  });
};

const displaySwornMember = async (member) => {
  const displayMember = document.createElement("li");
  displayMember.innerHTML = `
    <p class="name">${member.name}</p>
    <p class="life">${member.born} – ${member.died}</p>
    <p class="gender"><strong>Gender: </strong>${member.gender}</p>
    <p class="culture"><strong>Culture: </strong>${member.culture}</p>
      `;
  resultEl.appendChild(displayMember);
};

const displaySearchedMember = () => {
  resultEl.innerHTML = "";
  const searchedMember = searchEl.value;
  const filteredMembers = allSwornMembers.filter((member) => {
    return member.name.includes(searchedMember);
  });
  filteredMembers.forEach((member) => {
    displaySwornMember(member);
  });
  console.log(searchedMember);
  console.log(filteredMembers);
};

searchEl.addEventListener("keyup", (event) => {
  displaySearchedMember();
});

getAllSwornMembers();
