import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', () => {
    const carrinho = ref([]);
    const addProduct = (product) => {
        carrinho.value.push(product)
    }
    const removeProduct = (index) => {
        carrinho.value.forEach((item, i) => {
            if (item.id == index) {
                carrinho.value.splice(i, 1)
            }
        })
    }
    return { carrinho, addProduct, removeProduct }
})