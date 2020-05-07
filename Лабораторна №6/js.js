var conteiner=document.getElementById('conteiner');
var BigPicture=document.getElementById('BigPicture');
var bigImage=document.createElement('img');

 class PhotoGallary extends HTMLElement 
 {
    constructor() 
    {
        super();
        let cont=document.createElement('div');
        cont.setAttribute('class','conteiner');
        cont.setAttribute('id','conteiner');
        let defUrl = 'resources/placeholder.png';
        let imgUrl = this.getAttribute('img').split(',');
        console.log(imgUrl);
        
        for(let i=0;i<imgUrl.length;i++)
        {

            let img = document.createElement('img');
            img.className='rot';
            img.setAttribute('src','resources/load.png');
            cont.appendChild(img);

            setTimeout(function()
            {  
                img.setAttribute('src',imgUrl[i]+'.jpg');
                img.style.width='300px';
                img.style.height='250px';
                img.className='';

                img.onerror = function()
                {
                    img.setAttribute('src',defUrl);
                };

                img.onclick = function()
                {
                    bigImage.src=this.src;
                    BigPicture.className='show-block';
                    BigPicture.append(bigImage);
                }
            },500);
            
        }

        this.append(cont);
    }
 }

 BigPicture.ondblclick = function ()
        {
            BigPicture.className='hide-block';
            setTimeout(function(){BigPicture.innerHTML=""}, 500);
        }

 customElements.define('new-gallary', PhotoGallary);