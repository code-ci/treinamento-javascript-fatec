$(function() {
    $('#form-cadastro').on('submit', function(e) {
        e.preventDefault();
        
        var novoCadastro = '';
        var $nome = $('#nome');
        var $dataNasc = $('#data-nasc');
        var $idade = $('#idade');
        
        novoCadastro += '<tr>';
        
        novoCadastro += '<td>' + $nome.val() + '</td>';
        novoCadastro += '<td>' + $dataNasc.val() + '</td>';
        novoCadastro += '<td>' + $idade.val() + '</td>';
        
        novoCadastro += '<td>';
        novoCadastro += '<a href="#">Excluir</a>';
        novoCadastro += '</td>';
        
        novoCadastro += '</tr>';
        
        var $html = $(novoCadastro);
        
        $html.find('a').on('click', function(e) {
            e.preventDefault();
            
            if (confirm('Deseja realmente excluir?')) {
                $(this).parents('tr').remove();
            }
        });
        
        $('#table-cadastros tbody').append($html);
        
        $nome.val('');
        $dataNasc.val('');
        $idade.val('');
    });
    
    $('#data-nasc').mask("00/00/0000", { placeholder: '__/__/____'});
});






