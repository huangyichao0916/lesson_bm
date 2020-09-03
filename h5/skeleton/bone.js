function draw(){
    document.querySelectorAll('*').forEach(element => {
        const hasBG = getStyle(element,'background-image');
        if (hasBG && hasBG !== 'none') {
            element.style.backgroundColor = '#666'
        }
        const hasBGC = getStyle(element,'background-color');
        if (hasBGC && hasBGC !== 'rgba(0, 0, 0, 0)') {
            element.style.backgroundColor = '#f6f6f6'
        }
    })
}

function getStyle(ele,prop){
    const styles = getComputedStyle(element);
    return styles[prop];
}