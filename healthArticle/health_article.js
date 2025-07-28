var xhs= new XMLHttpRequest();
var url='./health_article.json';
xhs.open('GET',url,true);
xhs.responseType='json';
xhs.onload= function(){
    var articles= xhs.response.articles;
    let articlesDiv= document.getElementById("articles");
    articles.forEach(function(article){
        var articleDiv=document.createElement('div');
        articleDiv.classList.add('article');

        var title= document.createElement('h2');
        title.textContent=article.title;

        var description= document.createElement('p');
        description.textContent= article.description;

        var waysHeader= document.createElement('h3');
        waysHeader.textContent='Ways to achieve:';

        var ways_list=document.createElement('ul');
        article.ways_to_achieve.forEach(function(way){
            var li= document.createElement('li');
            li.textContent= way;
            ways_list.appendChild(li);
        });

        var benefitsHeader= document.createElement('h3');
        benefitsHeader.textContent='Benefits you get:'

        var benefitsList= document.createElement('ul');
        article.benefits.forEach(function(benefit){
            var li= document.createElement('li');
            li.textContent= benefit;
            benefitsList.appendChild(li);            
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(ways_list);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.append(articleDiv);
    });
}
xhs.send();