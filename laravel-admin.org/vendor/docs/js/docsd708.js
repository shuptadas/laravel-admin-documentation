$(function ($) {
    // $('.sidebar').pjax('a.nav-link:not(a[target="_blank"])', '#pjax-container');
    $('.sidebar li.nav-item:not(.has-treeview) a.nav-link').click(function () {
        $('.sidebar a.nav-link').removeClass('active');
        $(this).addClass('active').parents('.has-treeview').children('a').addClass('active');
    });

    var init = function () {
        // $('#ad').append("<script async type=\"text/javascript\" src=\"//cdn.carbonads.com/carbon.js?serve=CK7DT53L&placement=laraveladminorg\" id=\"_carbonads_js\"><\/script>");
        Prism.highlightAll();
    };

    init();

    $(document).on('pjax:success', init);
});
