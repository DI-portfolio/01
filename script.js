///// ヘッダー　下にスクロールしたら上の画面外へ移動、 /////
///// 上にスクロールしたら上の画面外から出現 //////////////
let beforePos = 0;

function scrollAnime() {
    let topImage = $('.top-image').offset().top;
    let scroll = $(window).scrollTop();
    
    if (topImage > scroll || 0 > scroll - beforePos) {
        $('#header').removeClass('upMove');
        $('#header').addClass('downMove');
    } 
    else {
        $('#header').removeClass('downMove');
        $('#header').addClass('upMove');
    }
    beforePos = scroll;
}

$(window).scroll(function() {
    scrollAnime();
});

///// ヘッダーナビリスト　ページ内リンク /////
$('.header-nav-list li a, .open-nav-list li a').click(function() {
    let elmHash = $(this).attr('href');
    let pos = $(elmHash).offset().top;
    $('body, html').animate( {scrollTop: pos}, 600);
    return false;
});

///// 画面幅768px以下時のハンバーガーメニュー　クリック開閉時 /////
$('.open-btn-pos').click(function() {
    $(this).toggleClass('close');
    $('.open-nav').toggleClass('panel');
});
$('.open-nav-list li a').click(function() {
    $('.open-btn-pos').removeClass('close');
    $('.open-nav').removeClass('panel');
});


///// ABOUT イメージ画像　モーダルウィンドウ /////
$('#about-img01').click(function() {
    $('#img01').css('display', 'block');
});
$('#about-img02').click(function() {
    $('#img02').css('display', 'block');
});
$('#about-img03').click(function() {
    $('#img03').css('display', 'block');
});
// モーダルウィンドウクローズボタン
$('.close-btn').click(function() {
    $('.about-img-box').css('display', 'none');
});


///// フッターの上の最上部へ移動するボタン /////
$('.scroll-top-arrow').click(function() {
    $('body, html').animate( {
        scrollTop: 0}, 700);
        return false;
    });
