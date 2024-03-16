import axios from "axios"; 

export default class ProdutosApi {
    async buscarTodosProdutos() {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    }

    async buscarProduto(id) {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    }
}
