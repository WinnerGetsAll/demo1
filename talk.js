$(function() {
    $('#yes').click(function(event) {
        modal('我就知道欢欢公主不可能不开心的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('为啥呢？你不可能不开心、不高兴！', A);
    });
});

function A() {
    modal('带你去吃好吃的！', B);
}

function B() {
    modal('带你去玩好玩的', C);
}

function C() {
    modal('下雨天给你打伞', D);
}

function D() {
    modal('夏天给你遮阳', E);
}

function E() {
    modal('累了把我的肩膀借给你靠', F);
}

function F() {
    modal('就像顾城的诗所说', G);
}

function G() {
    modal('风在摇它的叶子', H);
}

function H() {
    modal('草在结它的种子', I);
}

function I() {
    modal('就这样静静的看着，什么也不说，就已十分美好！', J)
}

function J() {
    modal('今后你就负责做一只快乐幸福的小懒猪吧😘', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
