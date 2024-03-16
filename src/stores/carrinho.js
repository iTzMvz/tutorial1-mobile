import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', () => {
    const carrinho = ref([]);
    const addProduct = (product) => {
        carrinho.value.push(product)
    }
    return { carrinho, addProduct  }
})