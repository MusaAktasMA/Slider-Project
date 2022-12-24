var models = [
    {
        name : 'Barbarian',
        image : 'img/barbarian.jpg',
        link : 'https://en.wikipedia.org/wiki/Barbarian_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Bard',
        image : 'img/bard.jpg',
        link : 'https://en.wikipedia.org/wiki/Bard_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Cleric',
        image : 'img/cleric.jpg',
        link : 'https://en.wikipedia.org/wiki/Cleric_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Druid',
        image : 'img/druid.jpg',
        link : 'https://en.wikipedia.org/wiki/Druid_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Fighter',
        image : 'img/fighter.jpg',
        link : 'https://en.wikipedia.org/wiki/Fighter_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Monk',
        image : 'img/monk.jpg',
        link : 'https://en.wikipedia.org/wiki/Monk_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Paladin',
        image : 'img/paladin.jpg',
        link : 'https://en.wikipedia.org/wiki/Paladin_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Ranger',
        image : 'img/ranger.jpg',
        link : 'https://en.wikipedia.org/wiki/Ranger_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Rogue',
        image : 'img/rogue.jpg',
        link : 'https://en.wikipedia.org/wiki/Rogue_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Sorcerer',
        image : 'img/sorcerer.jpg',
        link : 'https://en.wikipedia.org/wiki/Sorcerer_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Warlock',
        image : 'img/warlock.jpg',
        link : 'https://en.wikipedia.org/wiki/Warlock_(Dungeons_%26_Dragons)'
    },
    {
        name : 'Wizard',
        image : 'img/wizard.jpg',
        link : 'https://en.wikipedia.org/wiki/Wizard_(Dungeons_%26_Dragons)'
    },
];

var index = 2;
var slaytCount = models.length;
var settings={
    duration: '2000',
    random : true
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener
('click',function(){

    index--;
    showSlide(index);
    console.log(index);


});

document.querySelector('.fa-arrow-circle-right').addEventListener
('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)


}

function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount){
        index = 0;
    }


    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
    
}



