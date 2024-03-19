var client = contentful.createClient({
    space: 'n4xlp6ev10ih',
    accessToken: 'uYR1oGphvCLeGanMqBdjsoGFd58qXfyxJMqNGh5LKzo',
});

var designsdiv = document.getElementById('designs');

client.getEntries({content_type: 'assignment2'}).then(function (entries) {
    entries.items.forEach(function (entry) {
        var productDiv = document.createElement('div');
        productDiv.classList.add('designs');

        var nameH3 = document.createElement('h3');
        nameH3.classList.add('designs-name');
        nameH3.innerHTML = entry.fields.name;

        var mainImage = document.createElement('img');
        mainImage.src = entry.fields.mainImage.fields.file.url;

        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'details.html?id=' + entry.sys.id;
        linkToDetails.appendChild(mainImage);

        productDiv.appendChild(nameH3);
        productDiv.appendChild(linkToDetails); 

        designsdiv.appendChild(productDiv);
    });
})

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

