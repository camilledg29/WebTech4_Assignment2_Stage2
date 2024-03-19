var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: 'n4xlp6ev10ih',
    accessToken: 'uYR1oGphvCLeGanMqBdjsoGFd58qXfyxJMqNGh5LKzo',
});

var design = document.getElementById('design');
client.getEntry(id).then(function (entry) {
    
    var mainImage = document.createElement('img');
    mainImage.src = entry.fields.mainImage.fields.file.url;
    mainImage.classList.add('main-image');
    design.appendChild(mainImage);

    var name = document.createElement('h3');
    name.innerHTML = entry.fields.name;
    name.classList.add('entry-name');
    design.appendChild(name);

    var description = document.createElement('p');
    description.textContent = entry.fields.description;
    description.classList.add('entry-description');
    design.appendChild(description);

    var projectAspects = document.createElement('p');
    projectAspects.textContent = entry.fields.projectAspects;
    projectAspects.classList.add('entry-project-aspects');
    design.appendChild(projectAspects);

    var link = document.createElement('a');
    link.href = entry.fields.link;
    link.textContent = "Visit Website";
    link.classList.add('entry-link');
    design.appendChild(link);

    var galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery');
    entry.fields.gallery.forEach(function(image) {
        var img = document.createElement('img');
        img.src = image.fields.file.url;
        galleryDiv.appendChild(img);
    });
    design.appendChild(galleryDiv);
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});
