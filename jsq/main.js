$(document).ready(function(){
            $('#carrosel-imagens').slick({
                autoplay:true
            });
            

            $('.menu-hamburger').click(function() {
                $('nav').slideToggle();
                })
        

            $('#telefone').mask('(00) 00000-0000');

            $('form').validate({
                rules: {
                    nome: {
                        required: true,
                        minlength: 1
                    },
                    telefone: {
                        required: true,
                        minlength: 14
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    veiculoInteresse: {
                        required: true
                    },
                    mensagem: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    nome: "Por favor, informe seu nome",
                    Telefone: "Por favor, informe um telefone válido",
                    email: "Por favor, informe um e-mail válido",
                    veiculoInteresse: "Por favor, informe o veículo de interesse",
                    mensagem: "Por favor, escreva uma mensagem"
                },
                submitHandler: function(form) {
                    alert('Formulário enviado com sucesso!');
                   
                },
                invalidHandler: function(evento, validador) {
                    let erros = validador.numberOfInvalids();
                    alert('Por favor, corrija os erros no formulário.');
                    alert('Número de erros: ' + erros);
                }
            });

            $(".lista-carros button").click(function() {
                const destino = $('#contato');
                const nomeVeiculo = $(this).parent().find('h3').text();

                $('#veiculo-interesse').val(nomeVeiculo);

                $('html').animate({
                    scrollTop: destino.offset().top
                }, 1000);
            });
    });