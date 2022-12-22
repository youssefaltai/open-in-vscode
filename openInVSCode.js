const vscodeBtnInserter = setInterval(insertVSCodeBtn, 1000);

function getRepoURL() {
  const currentURL = window.location.href;
  const [protocol, usernamePlusRepo] = currentURL.split("github.com");
  const [_, username, reponame] = usernamePlusRepo.split("/");
  return `https%3A%2F%2Fgithub.com%2F${username}%2F${
    reponame.split("#")[0]
  }.git`;
}

function insertVSCodeBtn() {
  console.log("INSERTING VSCODE BTN");

  const vscodeAnchor = document.createElement("a");
  vscodeAnchor.className = "btn ml-2 d-none d-md-block";
  vscodeAnchor.href = "#";
  vscodeAnchor.onclick = function (event) {
    const tmpA = document.createElement("a");
    tmpA.href = `vscode://vscode.git/clone?url=${getRepoURL()}`;
    tmpA.click();
  };
  vscodeAnchor.style = "align-items:center";

  const vscodeImg = document.createElement("img");
  vscodeImg.alt = "VS Code";
  vscodeImg.src = "https://www.svgrepo.com/show/374171/vscode.svg";
  vscodeImg.style = "vertical-align:text-top";
  vscodeImg.width = "18";
  vscodeImg.height = "18";

  vscodeAnchor.appendChild(vscodeImg);

  try {
    const addFileBtn = document.querySelector(
      "details.details-overlay:nth-child(6)"
    );
    addFileBtn.insertAdjacentElement("afterend", vscodeAnchor);
    clearInterval(vscodeBtnInserter);
  } catch (error) {}
}
