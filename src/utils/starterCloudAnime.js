import getX from './getX';

export default function starterCloudAnime(id) {
    console.log(id);
        let cloud = document.querySelector('#cloud_'+id);
        console.log(cloud);
        setTimeout(() => {
            cloud.style.transition = 'all linear 7.5s';
            cloud.style.opacity = 0.8;
            cloud.style.setProperty('top', '540px');
            setTimeout(() => {
                cloud.style.transition = 'all linear .75s';
                cloud.style.opacity = 0;
                setTimeout(() => {
                    cloud.remove();
                }, 1500);
            }, 7500);
        }, 50);
}
