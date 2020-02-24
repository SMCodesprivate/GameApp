import getX from './getX';

export default function generateCloud(setCd, clds, wd, hg) {
    const cd = { x: getX(wd), y: hg, key: clds.length };
    console.log(clds);
    return setCd([...clds, cd]);
}