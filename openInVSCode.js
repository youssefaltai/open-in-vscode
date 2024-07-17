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
  const vscodeAnchor = document.createElement("a");
  vscodeAnchor.className = "btn ml-1 d-none d-md-block";
  vscodeAnchor.href = "#";
  vscodeAnchor.onclick = function (event) {
    const tmpA = document.createElement("a");
    tmpA.href = `vscode://vscode.git/clone?url=${getRepoURL()}`;
    tmpA.click();
  };
  vscodeAnchor.style = "align-items:center";

  const vscodeImg = document.createElement("img");
  vscodeImg.alt = "VS Code";
  vscodeImg.src =
    "https://raw.githubusercontent.com/youssef-attai/open-in-vscode/main/icons/vscode.svg";
  vscodeImg.style = "vertical-align:text-top";
  vscodeImg.width = "18";
  vscodeImg.height = "18";

  vscodeAnchor.appendChild(vscodeImg);

  try {
    const greenCodeBtn =
      document.getElementById(":R55ab:") ?? document.getElementById(":r1:");

    console.log(greenCodeBtn);

    greenCodeBtn.insertAdjacentElement("beforebegin", vscodeAnchor);
    clearInterval(vscodeBtnInserter);
  } catch (error) {}
}
