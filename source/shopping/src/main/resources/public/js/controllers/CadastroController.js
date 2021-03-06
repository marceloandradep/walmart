angular.module('shopping').controller('CadastroController',
function($scope, $location, ProdutoService) {
	
	$scope.produto = {};
	
	$scope.campoNome = {
			maxLength: 50
	};
	
	$scope.campoValor = {};
	$scope.campoImagem = {};
	
	$scope.cadastrar = function() {
		if ($scope.validaNome() & $scope.validaValor()) {
			ProdutoService.save(null, $scope.produto, function(data){
				$location.url("/carrinho");
			});
		}
	};
	
	$scope.validaNome = function() {
		if ($scope.cadastroForm.nomeProduto.$valid) {
			$scope.campoNome.status = 'sucesso';
			
			return true;
		} else {
			$scope.campoNome.status = 'erro';
			$scope.campoNome.mensagem = 'Campo obrigatório.';
			
			return false;
		}
	}
	
	$scope.validaValor = function() {
		if ($scope.cadastroForm.valorProduto.$valid && $scope.produto.valor > 0) {
			$scope.campoValor.status = 'sucesso';
			
			return true;
		} else {
			$scope.campoValor.status = 'erro';
			$scope.campoValor.mensagem = 'Campo obrigatório.';
			
			return false;
		}
	}
	
	$scope.uploadComSucesso = function($file, $message, $flow) {
		$scope.produto.imagem = $message;
		$scope.campoImagem.status = 'sucesso';
	}
	
	$scope.uploadComErro = function($file, $message, $flow) {
		$scope.campoImagem.status = 'erro';
		$scope.campoImagem.mensagem = $message;
	}

});