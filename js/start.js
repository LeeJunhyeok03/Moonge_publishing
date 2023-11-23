

function start() {
    const Ld = document.querySelector("#ld");
    const main_sub = document.querySelector("#main_sub");

    let Ldnum = 1;

    setInterval(() => {
        const Ldtxt = " .";
        let text = "Loading" + Ldtxt.repeat(Ldnum);
        Ld.innerHTML = text;
        if(Ldnum == 3){
            Ldnum = 1;
        }else {
            Ldnum++;
        }
    }, 500);

    setTimeout(() => {
        
        main_sub.innerHTML = 
        '<div class="bottom">'
            +'<a href="./login.html">로그인</a>'
            +'<a href="./join.html">회원가입</a>'
        +'</div>'

        return;
    }, 3000);
    

}

start();