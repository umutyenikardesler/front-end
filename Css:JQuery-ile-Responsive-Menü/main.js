$(function(){

    let openMenu = $('#open-menu-btn');
        responsiveMenu = $('#responsive-menu'),
        logo = $('.header .logo'),
        search = $('.header .search'),
        menu = $('.header .menu'),
        social = $('.header .social')
    ;

    let responsiveMenuHtml = `
        <a href="#" id="close-menu-btn" class="close-menu">
            <i class='fa fa-times'></i>
        </a>
        <div class="logo">
            ${logo.html()}
        </div>
        <div class="search">
            ${search.html()}
        </div>
        <div class="menu">
            ${menu.html()}
        </div>
        <div class="social">
            ${social.html()}
        </div>
    `;

    responsiveMenu.html(responsiveMenuHtml);

    let closeMenu = $('#close-menu-btn');

    openMenu.on('click', e => {
        responsiveMenu.addClass('active');
        e.preventDefault();
    });

    closeMenu.on('click', e => {
        responsiveMenu.removeClass('active');
        e.preventDefault();
    });

});