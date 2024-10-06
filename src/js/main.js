import './lib/lib';

// $('button').click( function(){
//     $('.active').toggleAtt('id','bob'); 
// });


// $('button').on('click',function(){
//     $('div').eq(2).toggleClass('active');
// });

// console.log($('button').html('hello')); 

// $('div').click(function(){
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').closest('.findmdsade'));

// console.log($('.more').eq(0).siblings());

// $('.findme').fadeIn(1900);


$('#first').on('click', ()=>{
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', ()=>{
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', ()=>{
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another Button',
                ['btn-primary', 'ml-10'],
                false,
                () =>{
                    alert('This is 3button')
                }
            ]
        ]
    }
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));