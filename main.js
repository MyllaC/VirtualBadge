//trocar o nome de usuário das redes socias usando JavaScript
//Altere as infos de linksSocialMedia para fazer seu cracha!

const linksSocialMedia = {
  github: 'myllac',
  youtube: 'channel/UCQ3JwhaZjHZ1FlFcDFcqn8A',
  facebook: 'camila.cristina.7545708',
  instagram: 'camilacris.oa',
  twitter: 'Cris_Camila'
}

function changeSocialMediaLinks() {
  /* o controlador que é o li é referente a cada filho que existe dentro do elemento HTML socialLinks */
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}` //função para trocar as redes sociais que estvam no código html
  }
}

changeSocialMediaLinks()

//função para pegar as informações do github

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json()) //pegar oq o fetch pegou e transformar em JSON
    .then(data => {
      userName.textContent = data.name //textContent é substiruir oq está no userName por data.name
      //eu sei que é data.name pq no API do git hub tem essa propriedade
      userBio.textContent = data.bio
      userLink.href = data.html_url //no .href só vai trocar p href e não todo o conteudo do userLink
      userImage.src = data.avatar_url
      userGitHub.textContent = data.login
    })
  //o fetch vai na url da API e pegar o que o API responder
  //Promese (then()) é um recurso do JS para poder pegar respostas de alguma coisa
  //Arrow function => é uma forma contraida da function
}
getGitHubProfileInfos()
