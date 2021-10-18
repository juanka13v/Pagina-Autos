export function accordion(title, content) {
    const $title = document.querySelectorAll(title);
    const $content = document.querySelectorAll(content);


    function resetT() {

        $title.forEach(title => {
            title.classList.remove('active');
        })
        $content.forEach(content => {
            content.classList.remove('active');
        })
    }


    $title.forEach(title => {


        title.addEventListener('click', (e) => {
            if(title.classList.contains('active')) {
                title.classList.toggle('active');
                let content = title.parentNode.lastElementChild;
                content.classList.toggle('active');
            }else {
                resetT();
                title.classList.toggle('active');
                let content = title.parentNode.lastElementChild;
                content.classList.toggle('active');
            }
        })
    })

}