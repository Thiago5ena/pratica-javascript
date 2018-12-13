function preencherPerfil(info) {
	var template = `
		<figure>
			<img src="" alt="">
		</figure>
		<h1 class="nome">${info.name}</h1>
		<ul>
			<li>
				<span>Altura:</span>
				<span id="altura">${info.height}</span>
			</li>
			<li>
				<span>Color del pelo:</span>
				<span id="cor_cabelo">${info.hair_color}</span>
			</li>
			<li>
				<span>Ano de nascimento:</span>
				<span id="ano_nascimento">${info.birth_year}</span>
			</li>
			<li>
				<span>Naves:</span>
				<span id="naves">
					<ul></ul>
				</span>
			</li>
		</ul>
	`

	var perfil = document.getElementById("perfil");
	perfil.innerHTML = template;
}	

// AJAX com jQuery
$.ajax({
	url: "https://swapi.co/api/people/32/",
})
.done(function(info){
	preencherPerfil(info)
})